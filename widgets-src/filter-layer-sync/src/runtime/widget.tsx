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
      'Existing trees': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#8bc34a"><path d="M8 1C6.3 3 4 5.5 4 8a4 4 0 0 0 3.5 3.97V14H6v1h4v-1H8.5v-2.03A4 4 0 0 0 12 8c0-2.5-2.3-5-4-7z"/></svg>',
      'Selected streets': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M1 3h14v1H1zm0 3h14v1H1zm0 3h14v1H1zm0 3h14v1H1zM7 1h2v14H7z" opacity=".6"/></svg>'
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

    const scrollDialogToTop = () => {
      const widget = document.querySelector('[data-widgetid="widget_141"]') as HTMLElement
      if (!widget) {
        wasVisible = false
        return
      }

      // Only act when dialog first appears
      if (wasVisible) return
      wasVisible = true

      // Find and scroll every scrollable element in the dialog ancestry and descendants
      const scrollToTop = (el: HTMLElement) => {
        if (el.scrollTop > 0) el.scrollTop = 0
      }

      // Scroll all ancestors up to body
      let ancestor: HTMLElement | null = widget
      while (ancestor && ancestor !== document.body) {
        scrollToTop(ancestor)
        ancestor = ancestor.parentElement
      }

      // Scroll all descendants
      widget.querySelectorAll('*').forEach((child: Element) => {
        const htmlChild = child as HTMLElement
        if (htmlChild.scrollHeight > htmlChild.clientHeight) {
          htmlChild.scrollTop = 0
        }
      })

      // Retry a few times as content may render with delay
      setTimeout(() => {
        let a: HTMLElement | null = widget
        while (a && a !== document.body) {
          if (a.scrollTop > 0) a.scrollTop = 0
          a = a.parentElement
        }
        widget.querySelectorAll('*').forEach((c: Element) => {
          (c as HTMLElement).scrollTop = 0
        })
      }, 200)
    }

    const interval = setInterval(scrollDialogToTop, 300)
    return () => clearInterval(interval)
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
