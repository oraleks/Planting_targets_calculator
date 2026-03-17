/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, type AllWidgetProps, DataSourceManager } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import type { IMConfig, FilterLayerMapping } from '../config'

const { useState, useEffect, useRef, useCallback } = React

/**
 * Parse a combined SQL WHERE clause into individual filter clauses,
 * keyed by their field name.
 */
function parseFilterClauses (
  sql: string,
  knownFields: string[]
): Map<string, string> {
  const result = new Map<string, string>()
  if (!sql || sql === '1=1') return result

  // Temporarily replace BETWEEN...AND so we don't split on it
  const placeholder = '##BETWEEN_AND##'
  const safeSql = sql.replace(
    /BETWEEN\s+([\d.]+)\s+AND\s+([\d.]+)/gi,
    `BETWEEN $1 ${placeholder} $2`
  )

  const parts = safeSql.split(/\s+AND\s+/i)

  for (const part of parts) {
    let clause = part.trim().replace(new RegExp(placeholder, 'g'), 'AND')

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
  const prevSqlRef = useRef<string>('')
  const rendererApplied = useRef<boolean>(false)

  const filterWidgetId = config?.filterWidgetId || 'widget_4'
  const selectedLayerTitle = config?.selectedSegmentsLayerTitle || 'Selected streets'
  const mappings: FilterLayerMapping[] = (config?.mappings as any)?.asMutable
    ? (config.mappings as any).asMutable({ deep: true })
    : (config?.mappings || []) as any
  const knownFields = mappings.map(m => m.filterField)

  // Find a FeatureLayer in the map by its title
  const findLayerByTitle = useCallback(
    (title: string): any => {
      if (!jimuMapView?.view?.map) return null
      return jimuMapView.view.map.allLayers.find(
        (l: any) => l.title === title && l.type === 'feature'
      ) || null
    },
    [jimuMapView]
  )

  // Core sync logic: read filter SQL, apply definition expressions
  const syncFiltersToLayers = useCallback(() => {
    if (!jimuMapView?.view?.map) return

    // Find the data source the filter widget targets
    const dsManager = DataSourceManager.getInstance()
    let currentSql = ''
    const allDs = dsManager.getDataSources()
    for (const dsId of Object.keys(allDs)) {
      const ds = allDs[dsId]
      const info = ds?.getInfo?.()
      const widgetQueries = (info as any)?.widgetQueries
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

    // Build combined SQL from all active filter clauses
    const allClauses = [...activeClauses.values()]
    const combinedSql = allClauses.length > 0 ? allClauses.join(' AND ') : '1=1'

    // Apply combined SQL to ALL visualization layers (cumulative filtering)
    for (const mapping of mappings) {
      const layer = findLayerByTitle(mapping.layerTitle)
      if (!layer) continue
      layer.definitionExpression = combinedSql
    }

    // Apply same combined SQL to "Selected streets" layer
    const selectedLayer = findLayerByTitle(selectedLayerTitle)
    if (selectedLayer) {
      selectedLayer.definitionExpression = combinedSql
    }
  }, [
    jimuMapView, filterWidgetId, knownFields, mappings,
    findLayerByTitle, selectedLayerTitle
  ])

  // Apply custom renderer to "Selected streets" layer once map is ready
  useEffect(() => {
    if (!jimuMapView?.view?.map || rendererApplied.current) return

    const applyRenderer = () => {
      const selectedLayer = findLayerByTitle(selectedLayerTitle)
      if (selectedLayer) {
        selectedLayer.opacity = 1.0
        selectedLayer.renderer = {
          type: 'simple',
          symbol: {
            type: 'simple-fill',
            color: [151, 151, 151, 1],
            outline: {
              color: [0, 0, 0, 0],
              width: 0
            }
          }
        } as any
        rendererApplied.current = true
      }
    }

    // Try immediately, then retry after layers load
    applyRenderer()
    if (!rendererApplied.current) {
      const timeout = setTimeout(applyRenderer, 2000)
      return () => clearTimeout(timeout)
    }
  }, [jimuMapView, findLayerByTitle, selectedLayerTitle])

  // Poll for filter changes
  useEffect(() => {
    if (!jimuMapView) return
    const interval = setInterval(syncFiltersToLayers, 500)
    syncFiltersToLayers()
    return () => clearInterval(interval)
  }, [jimuMapView, syncFiltersToLayers])

  // Headless widget — only the JimuMapViewComponent connector
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
