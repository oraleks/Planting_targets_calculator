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

    // Parse into individual clauses
    const activeClauses = parseFilterClauses(currentSql, knownFields)
    const allClauses = [...activeClauses.values()]
    const combinedSql = allClauses.length > 0 ? allClauses.join(' AND ') : '1=1'

    // Check if SQL changed OR if any layer's definitionExpression was reset
    const sqlChanged = currentSql !== prevSqlRef.current
    let layerDrifted = false
    if (!sqlChanged) {
      for (const mapping of mappings) {
        const layer = findLayerByTitle(mapping.layerTitle)
        if (layer && layer.definitionExpression !== combinedSql) {
          layerDrifted = true
          break
        }
      }
      if (!layerDrifted) {
        const selectedLayer = findLayerByTitle(selectedLayerTitle)
        if (selectedLayer && selectedLayer.definitionExpression !== combinedSql) {
          layerDrifted = true
        }
      }
    }

    if (!sqlChanged && !layerDrifted) return
    prevSqlRef.current = currentSql
    expectedSqlRef.current = combinedSql

    // Apply combined SQL to ALL visualization layers
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
            color: [80, 80, 80, 1],
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

  // Guard layers against external definitionExpression resets (e.g. popups)
  const expectedSqlRef = useRef<string>('1=1')
  const guardingRef = useRef<boolean>(false)
  useEffect(() => {
    if (!jimuMapView?.view?.map || guardingRef.current) return
    const handles: any[] = []

    const setupGuards = () => {
      const allLayerTitles = [...mappings.map(m => m.layerTitle), selectedLayerTitle]
      for (const title of allLayerTitles) {
        const layer = findLayerByTitle(title)
        if (!layer) continue
        const handle = layer.watch('definitionExpression', (newVal: string) => {
          const expected = expectedSqlRef.current
          if (newVal !== expected) {
            layer.definitionExpression = expected
          }
        })
        handles.push(handle)
      }
      if (handles.length > 0) guardingRef.current = true
    }

    setupGuards()
    // Retry if layers aren't loaded yet
    if (!guardingRef.current) {
      const t = setTimeout(setupGuards, 3000)
      return () => clearTimeout(t)
    }
    return () => handles.forEach(h => h.remove?.())
  }, [jimuMapView, mappings, selectedLayerTitle, findLayerByTitle])

  // Poll for filter changes
  useEffect(() => {
    if (!jimuMapView) return
    const interval = setInterval(syncFiltersToLayers, 500)
    syncFiltersToLayers()
    return () => clearInterval(interval)
  }, [jimuMapView, syncFiltersToLayers])

  // --- Inject icons into the Map Layers widget ---
  // Icons are cloned from the compact-filter widget's rendered DOM so they
  // are always identical.  Only "Existing trees" and "Selected streets" have
  // standalone SVGs because they have no corresponding filter.
  useEffect(() => {
    // Map layer titles → filter field names (used to find the matching
    // compact-filter icon element).  Order matches FILTER_DEFINITIONS.
    const layerToField: Record<string, string> = {
      'Spring/Summer Shade Index': 'summer_SI',
      'Neighbourhood transit': 'class_2k',
      'City transit': 'class_5k',
      'Local centers': 'class_ai1k',
      'Building density': 'FSI500_mea',
      'Access to shops and restaurants': 'ARw500lm_1',
      'School or preschool proximity': 'ADws_mean',
      'Tram, metro or railway station proximity': 'ADwm_mean',
      'Bus stop proximity': 'ADwbu_mean'
    }

    // Layers with no corresponding filter get a standalone SVG
    const standaloneIcons: Record<string, string> = {
      'Existing trees': '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABvEAYAAACyVUIjAAAFSWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjExMSIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjExMSIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjExMSIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTExIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI0MDAvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNDAwLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQ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" style="width:16px;height:16px;filter:brightness(0) invert(0.85);" />',
      'Selected streets': '<img src="data:image/png;base64,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" style="width:16px;height:16px;filter:brightness(0) invert(0.85);" />'
    }

    // Build a cache of filter field → icon HTML by reading the compact-filter DOM
    const getFilterIconHtml = (field: string): string | null => {
      // compact-filter renders icons inside .compact-filter-icon divs
      // Each icon div has a data-field or we identify by order
      const iconEls = document.querySelectorAll('.compact-filter-icon')
      // FILTER_DEFINITIONS order: summer_SI, class_2k, class_5k, class_ai1k,
      // FSI500_mea, ARw500lm_1, ADws_mean, ADwm_mean, ADwbu_mean, width
      const fieldOrder = [
        'summer_SI', 'class_2k', 'class_5k', 'class_ai1k',
        'FSI500_mea', 'ARw500lm_1', 'ADws_mean', 'ADwm_mean', 'ADwbu_mean', 'width'
      ]
      const idx = fieldOrder.indexOf(field)
      if (idx < 0 || idx >= iconEls.length) return null
      const iconEl = iconEls[idx]
      // Clone the inner content (svg span or img)
      const inner = iconEl.querySelector('span, img') as HTMLElement
      if (!inner) return null
      return inner.outerHTML
    }

    const injectIcons = () => {
      const listItems = document.querySelectorAll('calcite-list-item')

      listItems.forEach((item: Element) => {
        const title = item.getAttribute('title') || ''
        if (!title) return
        if (item.querySelector('.layer-custom-icon')) return

        let iconHtml: string | null = null

        // Try to clone from the compact-filter DOM
        const field = layerToField[title]
        if (field) {
          iconHtml = getFilterIconHtml(field)
        }

        // Fall back to standalone icons for non-filter layers
        if (!iconHtml && standaloneIcons[title]) {
          iconHtml = standaloneIcons[title]
        }

        if (!iconHtml) return

        const iconSpan = document.createElement('span')
        iconSpan.className = 'layer-custom-icon'
        iconSpan.innerHTML = iconHtml
        iconSpan.setAttribute('slot', 'content-start')
        iconSpan.style.cssText = 'display:inline-flex;width:16px;height:16px;min-width:16px;color:#aaa;'
        // Ensure consistent sizing on all child svg/img elements
        const svgEl = iconSpan.querySelector('svg')
        if (svgEl) { svgEl.style.width = '16px'; svgEl.style.height = '16px' }
        const imgEl = iconSpan.querySelector('img')
        if (imgEl) { imgEl.style.width = '16px'; imgEl.style.height = '16px' }

        item.appendChild(iconSpan)
      })
    }

    const interval = setInterval(injectIcons, 2000)
    setTimeout(injectIcons, 3000)

    return () => clearInterval(interval)
  }, [])

  // --- Legend pop-out: move legends to a floating panel right of the sidebar ---
  useEffect(() => {
    const styleId = 'filter-layer-sync-legend-popout'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        .legend-popout-panel {
          position: fixed;
          z-index: 500;
          background: #1e1e1e;
          border: 1px solid #444;
          border-radius: 6px;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
          padding: 8px 10px;
          max-width: 300px;
          max-height: 400px;
          overflow-y: auto;
        }
        .legend-popout-panel .esri-legend {
          background: transparent !important;
          padding: 0 !important;
          color: #eee !important;
        }
        .legend-popout-panel .esri-legend__service {
          padding: 0 !important;
        }
        .legend-popout-panel .esri-legend__layer-caption {
          color: #ccc !important;
          font-size: 11px !important;
        }
        .legend-popout-panel .esri-legend__layer-cell--info {
          color: #bbb !important;
          font-size: 11px !important;
        }
        /* Hide legends inside the layers panel — only the direct wrapper */
        [data-widgetid="widget_94"] .esri-legend {
          display: none !important;
        }
        /* Calcite shadow DOM: collapse the content-bottom slot area */
        [data-widgetid="widget_94"] calcite-list-item::part(content-bottom) {
          max-height: 0 !important;
          overflow: hidden !important;
          padding: 0 !important;
          margin: 0 !important;
        }
      `
      document.head.appendChild(style)
    }

    const popoutId = 'legend-popout-container'
    let movedLegend: HTMLElement | null = null
    let legendOriginalParent: HTMLElement | null = null
    let trackedListItem: HTMLElement | null = null
    let collapsedAncestors: HTMLElement[] = []

    const moveLegendToPopout = (legend: HTMLElement) => {
      const layersPanel = document.querySelector('[data-widgetid="widget_94"]') as HTMLElement
      if (!layersPanel) return

      // Find parent calcite-list-item
      let listItem: HTMLElement | null = legend
      while (listItem && listItem.tagName !== 'CALCITE-LIST-ITEM') {
        listItem = listItem.parentElement
      }
      if (!listItem) return

      legendOriginalParent = legend.parentElement
      trackedListItem = listItem
      movedLegend = legend

      // Collapse all ancestors between legend and list item
      collapsedAncestors = []
      let ancestor: HTMLElement | null = legend.parentElement
      while (ancestor && ancestor !== listItem) {
        ancestor.style.cssText = 'max-height:0!important;overflow:hidden!important;padding:0!important;margin:0!important;'
        collapsedAncestors.push(ancestor)
        ancestor = ancestor.parentElement
      }

      // Create floating panel and move the legend into it
      let panel = document.getElementById(popoutId) as HTMLElement
      if (!panel) {
        panel = document.createElement('div')
        panel.id = popoutId
        panel.className = 'legend-popout-panel'
        document.body.appendChild(panel)
      }
      panel.innerHTML = ''
      panel.appendChild(legend)

      // Position
      const panelRect = layersPanel.getBoundingClientRect()
      const itemRect = listItem.getBoundingClientRect()
      panel.style.left = (panelRect.right + 6) + 'px'
      panel.style.top = Math.max(itemRect.top, panelRect.top) + 'px'
    }

    const cleanupPopout = () => {
      const panel = document.getElementById(popoutId)
      if (panel) panel.remove()
      collapsedAncestors.forEach(el => { el.style.cssText = '' })
      collapsedAncestors = []
      movedLegend = null
      legendOriginalParent = null
      trackedListItem = null
    }

    // Use MutationObserver to detect legend appearing/disappearing instantly
    const layersPanelCheck = () => document.querySelector('[data-widgetid="widget_94"]') as HTMLElement
    let observer: MutationObserver | null = null

    const setupObserver = () => {
      const layersPanel = layersPanelCheck()
      if (!layersPanel) return

      observer = new MutationObserver(() => {
        const legends = layersPanel.querySelectorAll('.esri-legend.esri-widget')

        if (movedLegend) {
          // Check if original parent was removed from DOM (legend toggled off)
          if (legendOriginalParent && !document.body.contains(legendOriginalParent)) {
            cleanupPopout()
            return
          }
          // Check if legend element was destroyed
          const popout = document.getElementById(popoutId)
          const legendStillInPopout = popout && popout.contains(movedLegend)
          if (!document.body.contains(movedLegend) && !legendStillInPopout) {
            cleanupPopout()
            return
          }
          // A different legend appeared — move that one instead
          if (legends.length > 0) {
            const newLegend = legends[0] as HTMLElement
            if (newLegend !== movedLegend && newLegend.querySelector('.esri-legend__layer-row')) {
              cleanupPopout()
              moveLegendToPopout(newLegend)
            }
          }
          return
        }

        // No legend currently moved — check for new ones
        for (let i = 0; i < legends.length; i++) {
          const legend = legends[i] as HTMLElement
          if (legend.querySelector('.esri-legend__layer-row')) {
            moveLegendToPopout(legend)
            break
          }
        }
      })

      observer.observe(layersPanel, { childList: true, subtree: true })
    }

    // Wait for layers panel to appear, then set up observer
    const waitForPanel = setInterval(() => {
      if (layersPanelCheck()) {
        clearInterval(waitForPanel)
        setupObserver()
      }
    }, 500)

    // Poll for position updates and cleanup detection
    const positionInterval = setInterval(() => {
      if (!movedLegend || !trackedListItem) return
      // Cleanup if original parent was removed (toggle off)
      if (legendOriginalParent && !document.body.contains(legendOriginalParent)) {
        cleanupPopout()
        return
      }
      const popout = document.getElementById(popoutId)
      if (!popout) return
      const layersPanel = layersPanelCheck()
      if (!layersPanel) return
      const panelRect = layersPanel.getBoundingClientRect()
      const itemRect = trackedListItem.getBoundingClientRect()
      popout.style.left = (panelRect.right + 6) + 'px'
      popout.style.top = Math.max(itemRect.top, panelRect.top) + 'px'
    }, 300)

    return () => {
      clearInterval(waitForPanel)
      clearInterval(positionInterval)
      if (observer) observer.disconnect()
      cleanupPopout()
      const styleEl = document.getElementById(styleId)
      if (styleEl) styleEl.remove()
    }
  }, [])

  // --- Force instruction dialog to show from top ---
  useEffect(() => {
    let wasVisible = false
    let scrollTimer: any = null

    const scrollDialogToTop = () => {
      const widget = document.querySelector('[data-widgetid="widget_141"]') as HTMLElement
      const isVisible = widget && widget.getBoundingClientRect().height > 0

      if (!isVisible) {
        wasVisible = false
        if (scrollTimer) { clearInterval(scrollTimer); scrollTimer = null }
        return
      }

      if (wasVisible) return
      wasVisible = true

      // Aggressively reset scroll every 50ms for 2 seconds
      let count = 0
      scrollTimer = setInterval(() => {
        document.querySelectorAll('.jimu-scrollable-scroll-container').forEach((el: Element) => {
          if ((el as HTMLElement).scrollTop > 0) {
            (el as HTMLElement).scrollTop = 0
          }
        })
        count++
        if (count > 40) {
          clearInterval(scrollTimer)
          scrollTimer = null
        }
      }, 50)
    }

    const interval = setInterval(scrollDialogToTop, 300)
    return () => {
      clearInterval(interval)
      if (scrollTimer) clearInterval(scrollTimer)
    }
  }, [])

  // --- Force header button styles (white text, no underline) ---
  useEffect(() => {
    const styleId = 'header-button-styles'
    if (document.getElementById(styleId)) return
    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      [data-widgetid="widget_202"] a,
      [data-widgetid="widget_202"] button,
      [data-widgetid="widget_202"] span,
      [data-widgetid="widget_204"] a,
      [data-widgetid="widget_204"] button,
      [data-widgetid="widget_204"] span {
        color: #ffffff !important;
        text-decoration: none !important;
        font-size: 14px !important;
      }
      [data-widgetid="widget_202"] a:hover,
      [data-widgetid="widget_204"] a:hover {
        text-decoration: underline !important;
      }
    `
    document.head.appendChild(style)
    return () => {
      const el = document.getElementById(styleId)
      if (el) el.remove()
    }
  }, [])

  // --- Make BDAR logo clickable ---
  useEffect(() => {
    const makeLogoClickable = () => {
      const logoWidget = document.querySelector('[data-widgetid="widget_107"]') as HTMLElement
      if (!logoWidget || logoWidget.dataset.linkAttached) return
      logoWidget.style.cursor = 'pointer'
      logoWidget.addEventListener('click', () => {
        window.open('https://oraleks.net.technion.ac.il/en/bdar-lab/', '_blank')
      })
      logoWidget.dataset.linkAttached = 'true'
    }
    const interval = setInterval(makeLogoClickable, 1000)
    makeLogoClickable()
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
