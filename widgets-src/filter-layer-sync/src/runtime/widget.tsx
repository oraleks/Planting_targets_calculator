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
    let foundDsId = ''
    const allDs = dsManager.getDataSources()
    for (const dsId of Object.keys(allDs)) {
      const ds = allDs[dsId]
      const info = ds?.getInfo?.()
      const widgetQueries = (info as any)?.widgetQueries
      if (widgetQueries?.[filterWidgetId]) {
        currentSql = widgetQueries[filterWidgetId].where || ''
        foundDsId = dsId
        break
      }
    }

    // Skip if nothing changed
    if (currentSql === prevSqlRef.current) return
    prevSqlRef.current = currentSql

    console.log('[filter-layer-sync] SQL changed:', currentSql, '| from DS:', foundDsId, '| filterWidgetId:', filterWidgetId)

    // Parse into individual clauses
    const activeClauses = parseFilterClauses(currentSql, knownFields)

    // Build combined SQL from all active filter clauses
    const allClauses = [...activeClauses.values()]
    const combinedSql = allClauses.length > 0 ? allClauses.join(' AND ') : '1=1'

    console.log('[filter-layer-sync] Applying combined SQL:', combinedSql)

    // Apply combined SQL to ALL visualization layers (cumulative filtering)
    for (const mapping of mappings) {
      const layer = findLayerByTitle(mapping.layerTitle)
      if (!layer) {
        console.log('[filter-layer-sync] Layer not found:', mapping.layerTitle)
        continue
      }
      layer.definitionExpression = combinedSql
      console.log('[filter-layer-sync] Applied to layer:', mapping.layerTitle)
    }

    // Apply same combined SQL to "Selected streets" layer
    const selectedLayer = findLayerByTitle(selectedLayerTitle)
    if (selectedLayer) {
      selectedLayer.definitionExpression = combinedSql
      console.log('[filter-layer-sync] Applied to Selected streets')
    } else {
      console.log('[filter-layer-sync] Selected streets layer not found')
    }
  }, [
    jimuMapView, filterWidgetId, knownFields, mappings,
    findLayerByTitle, selectedLayerTitle
  ])

  // On startup: apply renderer, move "Selected streets" to back, set as only visible layer
  useEffect(() => {
    if (!jimuMapView?.view?.map || rendererApplied.current) return

    const initSelectedLayer = () => {
      const map = jimuMapView.view.map
      const selectedLayer = findLayerByTitle(selectedLayerTitle)
      if (!selectedLayer) return

      // Apply custom renderer
      selectedLayer.opacity = 1.0
      selectedLayer.renderer = {
        type: 'simple',
        symbol: {
          type: 'simple-fill',
          color: [151, 151, 151, 1],
          outline: {
            color: [242, 242, 242, 1],
            width: 0.5
          }
        }
      } as any

      // Move "Selected streets" to bottom (index 0 = drawn first = behind everything)
      map.layers.remove(selectedLayer)
      map.layers.add(selectedLayer, 0)

      // Turn off all attribute layers, turn on only "Selected streets"
      for (const mapping of mappings) {
        const layer = findLayerByTitle(mapping.layerTitle)
        if (layer) layer.visible = false
      }
      selectedLayer.visible = true

      rendererApplied.current = true
    }

    // Try immediately, then retry after layers load
    initSelectedLayer()
    if (!rendererApplied.current) {
      const timeout = setTimeout(initSelectedLayer, 2000)
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

  // --- Inject icons into the Map Layers widget ---
  useEffect(() => {
    // SVG icons keyed by layer title
    const layerIcons: Record<string, string> = {
      'Existing trees': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#8bc34a"><path d="M8 1C6.3 3 4 5.5 4 8a4 4 0 0 0 3.5 3.97V14H6v1h4v-1H8.5v-2.03A4 4 0 0 0 12 8c0-2.5-2.3-5-4-7z"/></svg>',
      'Spring/Summer Shade Index': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17"><g clip-path="url(#a)"><path fill="currentColor" d="m12.153 6.054-.707-.707 2.2-2.2.708.707zm-9.507 8.092.707.707 2.2-2.2-.706-.707zm8.8-1.493 2.2 2.2.707-.706-2.2-2.2zM5.554 5.347l-2.2-2.2-.707.706 2.2 2.2zM9 1.5H8v3h1zm-1 15h1v-3H8zm8-7v-1h-3v1zm-15 0h3v-1H1zM5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m1 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/></g></svg>',
      'Neighbourhood transit': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="9" cy="2.5" r="1.5" fill="currentColor"/><path fill="currentColor" d="M11.5 6.5 9.7 5.2a1.5 1.5 0 0 0-1.7 0L6.5 6.3a1 1 0 0 0-.4.8v2.4h1.2V7.7l1.2-.8-.8 3.6-2.4 2.4.8.8 2.2-2.2 1 2.5h1.3l-1.3-3.5 1-2.5.9 1v2.5h1.2V8.3a1 1 0 0 0-.4-.8z"/></svg>',
      'City transit': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M13.4 5.5l-.9-2.7A1.5 1.5 0 0 0 11.1 2H4.9a1.5 1.5 0 0 0-1.4 1l-.9 2.6A1.5 1.5 0 0 0 2 6.8V11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-.5h6V11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6.8c0-.5-.2-.9-.6-1.2zM4.9 3h6.2l.8 2.5H4.1zM4.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>',
      'Local centers': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a.5.5 0 0 1 .5.5V2h1a.5.5 0 0 1 .354.146l1.5 1.5A.5.5 0 0 1 11 4.5V6h1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H11v1.5a.5.5 0 0 1-.146.354l-1.5 1.5A.5.5 0 0 1 8.5 12.5V14h-1v-1.5a.5.5 0 0 1-.354-.146l-1.5-1.5A.5.5 0 0 1 5 10.5V9H3.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H5V4.5a.5.5 0 0 1 .146-.354l1.5-1.5A.5.5 0 0 1 7.5 2h.5zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>',
      'Building density': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M2 14V3h5v3h7v8zm1-1h3V4H3zm4 0h2v-2H7zm3 0h2v-2h-2zm3 0h1V7H8V4h1v2h6zM4 6h1V5H4zm0 2h1V7H4zm0 2h1V9H4zm0 2h1v-1H4zm5-4h1V7H9zm0 2h1V9H9zm2-2h1V7h-1zm0 2h1V9h-1z"/></svg>',
      'Access to shops and restaurants': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2.3 2H.5v1h1.2l2.1 7.4a1 1 0 0 0 1 .6h6.4a1 1 0 0 0 1-.6L14.5 4H4l.6 2h8l-1.4 4H5.2z"/></svg>',
      'School or preschool proximity': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 4.5 8 8l7-3.5zM3 6.5v3.3L8 12.5l5-2.7V6.5L8 9.2z"/></svg>',
      'Tram, metro or railway station proximity': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M4 1h8a1 1 0 0 1 1 1v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V2a1 1 0 0 1 1-1zm0 1v3h8V2zm0 4v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6zm1.5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5.5 13l-1.5 2h1l1-1.5h4L11 15h1l-1.5-2z"/></svg>',
      'Bus stop proximity': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1h10a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2h-.28l.78 1.5h-1.1L10.6 13H5.4l-.8 1.5H3.5L4.28 13H4a2 2 0 0 1-2-2V2a1 1 0 0 1 1-1zm0 1v4h10V2zm0 5v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7zm1.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>',
      'Selected streets': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M1 3h14v1H1zm0 3h14v1H1zm0 3h14v1H1zm0 3h14v1H1zM7 1h2v14H7z" opacity=".6"/></svg>'
    }

    const injectIcons = () => {
      // The Map Layers widget uses Calcite web components with Shadow DOM.
      // calcite-list-item has a "label" attribute with the layer name
      // and a "content-start" slot where we can insert icons.
      const listItems = document.querySelectorAll('calcite-list-item')

      listItems.forEach((item: Element) => {
        const label = item.getAttribute('title') || item.getAttribute('label') || ''
        if (!label) return
        // Skip if already has icon
        if (item.querySelector('.layer-custom-icon')) return

        const svgStr = layerIcons[label]
        if (!svgStr) return

        const iconSpan = document.createElement('span')
        iconSpan.className = 'layer-custom-icon'
        iconSpan.innerHTML = svgStr
        iconSpan.setAttribute('slot', 'content-start')
        iconSpan.style.cssText = 'display:inline-flex;width:16px;height:16px;min-width:16px;color:#aaa;'
        const svgEl = iconSpan.querySelector('svg')
        if (svgEl) {
          svgEl.style.width = '16px'
          svgEl.style.height = '16px'
        }

        item.appendChild(iconSpan)
      })
    }

    // Run periodically since the Map Layers widget may re-render
    const interval = setInterval(injectIcons, 2000)
    setTimeout(injectIcons, 3000)

    return () => clearInterval(interval)
  }, [])

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
