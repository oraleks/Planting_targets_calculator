/** @jsx jsx */
import {
  React,
  jsx,
  type AllWidgetProps,
  DataSourceManager,
  type DataSourceInfo
} from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { type IMConfig, type FilterLayerMapping } from '../config'
import type FeatureLayer from 'esri/layers/FeatureLayer'
import * as reactiveUtils from 'esri/core/reactiveUtils'

const { useState, useEffect, useRef, useCallback } = React

/**
 * Parse a combined SQL WHERE clause into individual filter clauses,
 * keyed by their field name.
 *
 * Handles the BETWEEN...AND edge case by temporarily replacing it
 * before splitting on ' AND '.
 */
function parseFilterClauses (
  sql: string,
  knownFields: string[]
): Map<string, string> {
  const result = new Map<string, string>()
  if (!sql || sql === '1=1') return result

  // Temporarily replace BETWEEN...AND so we don't split on it
  const betweenPlaceholder = '##BETWEEN_AND##'
  const safeSql = sql.replace(
    /BETWEEN\s+([\d.]+)\s+AND\s+([\d.]+)/gi,
    `BETWEEN $1 ${betweenPlaceholder} $2`
  )

  const parts = safeSql.split(/\s+AND\s+/i)

  for (const part of parts) {
    // Restore the AND in BETWEEN clauses
    let clause = part.trim().replace(new RegExp(betweenPlaceholder, 'g'), 'AND')

    // Strip outer parentheses if present
    if (clause.startsWith('(') && clause.endsWith(')')) {
      clause = clause.slice(1, -1).trim()
    }

    // Match this clause to a known field
    for (const field of knownFields) {
      if (clause.toLowerCase().startsWith(field.toLowerCase())) {
        result.set(field, clause)
        break
      }
    }
  }

  return result
}

export default function FilterLayerSyncWidget (props: AllWidgetProps<IMConfig>) {
  const { config, useMapWidgetIds } = props
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const visibilityWatchHandles = useRef<__esri.WatchHandle[]>([])
  const prevSqlRef = useRef<string>('')

  const filterWidgetId = config?.filterWidgetId || 'widget_4'
  const selectedLayerTitle = config?.selectedSegmentsLayerTitle || 'Selected segments'
  const mappings: FilterLayerMapping[] = config?.mappings?.asMutable?.({ deep: true }) || []
  const knownFields = mappings.map(m => m.filterField)

  // Find a FeatureLayer in the map by its title
  const findLayerByTitle = useCallback(
    (title: string): FeatureLayer | null => {
      if (!jimuMapView?.view?.map) return null
      const layer = jimuMapView.view.map.allLayers.find(
        l => l.title === title && l.type === 'feature'
      )
      return (layer as FeatureLayer) || null
    },
    [jimuMapView]
  )

  // Get the attribute visualization layers (all mapped layers)
  const getAttributeLayers = useCallback((): FeatureLayer[] => {
    return mappings
      .map(m => findLayerByTitle(m.layerTitle))
      .filter(Boolean) as FeatureLayer[]
  }, [mappings, findLayerByTitle])

  // Update "Selected segments" layer visibility based on attribute layer states
  const updateSelectedVisibility = useCallback(
    (hasActiveFilters: boolean) => {
      const selectedLayer = findLayerByTitle(selectedLayerTitle)
      if (!selectedLayer) return

      const attributeLayers = getAttributeLayers()
      const anyAttributeVisible = attributeLayers.some(l => l.visible)

      // Show selected layer only when filters are active AND
      // no attribute-specific layers are visible
      selectedLayer.visible = hasActiveFilters && !anyAttributeVisible
    },
    [findLayerByTitle, getAttributeLayers, selectedLayerTitle]
  )

  // Core sync logic: read filter SQL, apply definition expressions
  const syncFiltersToLayers = useCallback(() => {
    if (!jimuMapView?.view?.map) return

    // Get the filtered data source via the filter widget's query params
    const dsManager = DataSourceManager.getInstance()
    // Find the data source the filter widget targets — iterate data sources
    // and check for the filter widget's query
    let currentSql = ''
    const allDs = dsManager.getDataSources()
    for (const dsId of Object.keys(allDs)) {
      const ds = allDs[dsId]
      const info: DataSourceInfo | undefined = ds?.getInfo?.()
      const widgetQueries = info?.widgetQueries
      if (widgetQueries?.[filterWidgetId]) {
        currentSql = widgetQueries[filterWidgetId].where || ''
        break
      }
    }

    // Skip if nothing changed
    if (currentSql === prevSqlRef.current) return
    prevSqlRef.current = currentSql

    // Parse into individual clauses
    const activeClauses = parseFilterClauses(currentSql, knownFields)

    // Apply definition expression to each visualization layer (one-to-one)
    for (const mapping of mappings) {
      const layer = findLayerByTitle(mapping.layerTitle)
      if (!layer) continue

      const clause = activeClauses.get(mapping.filterField)
      layer.definitionExpression = clause || '1=1'
    }

    // Update "Selected segments" layer with combined expression
    const selectedLayer = findLayerByTitle(selectedLayerTitle)
    if (selectedLayer) {
      const allClauses = [...activeClauses.values()]
      selectedLayer.definitionExpression =
        allClauses.length > 0 ? allClauses.join(' AND ') : '1=1'
    }

    // Update visibility
    const hasActiveFilters = activeClauses.size > 0
    updateSelectedVisibility(hasActiveFilters)
  }, [
    jimuMapView,
    filterWidgetId,
    knownFields,
    mappings,
    findLayerByTitle,
    selectedLayerTitle,
    updateSelectedVisibility
  ])

  // Poll for filter changes (the data source info may not trigger React re-renders)
  useEffect(() => {
    if (!jimuMapView) return

    const interval = setInterval(syncFiltersToLayers, 500)
    // Also run immediately
    syncFiltersToLayers()

    return () => clearInterval(interval)
  }, [jimuMapView, syncFiltersToLayers])

  // Watch attribute layer visibility changes to manage "Selected segments" display
  useEffect(() => {
    if (!jimuMapView?.view?.map) return

    // Clean up previous watches
    visibilityWatchHandles.current.forEach(h => h.remove())
    visibilityWatchHandles.current = []

    const attributeLayers = getAttributeLayers()
    for (const layer of attributeLayers) {
      const handle = reactiveUtils.watch(
        () => layer.visible,
        () => {
          const activeClauses = parseFilterClauses(
            prevSqlRef.current,
            knownFields
          )
          updateSelectedVisibility(activeClauses.size > 0)
        }
      )
      visibilityWatchHandles.current.push(handle)
    }

    return () => {
      visibilityWatchHandles.current.forEach(h => h.remove())
      visibilityWatchHandles.current = []
    }
  }, [jimuMapView, getAttributeLayers, knownFields, updateSelectedVisibility])

  // Render — headless widget, only the JimuMapViewComponent connector
  return (
    <div style={{ display: 'none' }}>
      {useMapWidgetIds?.[0] && (
        <JimuMapViewComponent
          useMapWidgetId={useMapWidgetIds[0]}
          onActiveViewChange={setJimuMapView}
        />
      )}
    </div>
  )
}
