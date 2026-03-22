/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, type AllWidgetProps, DataSourceManager, DataSourceComponent, type QueriableDataSource } from 'jimu-core'
import { Button, Radio, TextInput, Label } from 'jimu-ui'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import * as ReactDOM from 'react-dom'
import type { IMConfig } from '../config'
import { FILTER_DEFINITIONS, type FilterDef } from '../filter-definitions'
import './style.scss'

const { useState, useEffect, useCallback, useRef } = React

// ===================== CONSTANTS =====================

const CATEGORY_LABELS: Record<string, string> = {
  '1': '<10m', '2': '10-20m', '3': '20-30m', '4': '40m', '5': '>40m'
}

// ===================== FILTER TYPES =====================

interface FilterState {
  active: boolean
  value: number | [number, number] | number[]
}

type FiltersMap = Record<string, FilterState>

// ===================== FILTER SQL =====================

function buildClause (def: FilterDef, state: FilterState): string {
  switch (def.type) {
    case 'slider':
      return `${def.field} ${def.operator} ${state.value}`
    case 'range-slider': {
      const [lo, hi] = state.value as [number, number]
      return `${def.field} BETWEEN ${lo} AND ${hi}`
    }
    case 'multi-select': {
      const vals = state.value as number[]
      return vals.length > 0 ? `${def.field} IN (${vals.join(',')})` : '1=0'
    }
  }
}

function buildCombinedSql (filters: FiltersMap): string {
  const clauses: string[] = []
  for (const def of FILTER_DEFINITIONS) {
    const state = filters[def.field]
    if (state?.active) {
      clauses.push(buildClause(def, state))
    }
  }
  return clauses.length > 0 ? clauses.join(' AND ') : '1=1'
}

function createInitialFilters (): FiltersMap {
  const map: FiltersMap = {}
  for (const def of FILTER_DEFINITIONS) {
    map[def.field] = {
      active: false,
      value: def.type === 'multi-select' ? [...def.defaultValue] : def.defaultValue
    }
  }
  return map
}

// ===================== FILTER UI COMPONENTS =====================

function FilterIconImg ({ def }: { def: FilterDef }) {
  if (def.iconType === 'svg' && def.iconSvg) {
    return <span dangerouslySetInnerHTML={{ __html: def.iconSvg }} style={{ display: 'flex', width: 18, height: 18 }} />
  }
  if (def.iconType === 'png' && def.iconPng) {
    const base = (window as any).jimuConfig?.baseUrl || ''
    const url = `${base}widgets/compact-filter/dist/runtime/assets/${def.iconPng}`
    return <img src={url} alt={def.name} />
  }
  return <span>?</span>
}

function SliderContent ({ def, value, onChange }: {
  def: FilterDef & { type: 'slider' }, value: number, onChange: (v: number) => void
}) {
  const breaks = (def as any).breaks as number[] | undefined

  if (breaks && breaks.length > 1) {
    // Jenks-based slider: slider position maps to break index
    const closestIdx = breaks.reduce((best, b, i) =>
      Math.abs(b - value) < Math.abs(breaks[best] - value) ? i : best, 0)
    const displayVal = Math.round(breaks[closestIdx]).toLocaleString()
    return (
      <div>
        <div className='compact-filter-slider-row'>
          <span className='compact-filter-value' style={{ minWidth: 30 }}>Low</span>
          <input type='range' className='compact-filter-slider'
            min={0} max={breaks.length - 1} step={1} value={closestIdx}
            onChange={e => onChange(breaks[Number(e.target.value)])} />
          <span className='compact-filter-value' style={{ minWidth: 30 }}>High</span>
        </div>
        <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>
          {def.operator === '<' ? 'Less than' : 'Greater than'} {displayVal}{def.unit || ''}
        </div>
        <div style={{ fontSize: 9, color: '#666', marginTop: 2 }}>
          Class {closestIdx + 1} of {breaks.length} (Jenks natural breaks)
        </div>
      </div>
    )
  }

  // Standard linear slider
  const displayVal = def.step < 1 ? value.toFixed(2) : String(value)
  return (
    <div>
      <div className='compact-filter-slider-row'>
        <span className='compact-filter-value'>{def.min}</span>
        <input type='range' className='compact-filter-slider'
          min={def.min} max={def.max} step={def.step} value={value}
          onChange={e => onChange(Number(e.target.value))} />
        <span className='compact-filter-value'>{displayVal}{def.unit || ''}</span>
      </div>
      <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>
        {def.operator === '<' ? 'Less than' : 'Greater than'} {displayVal}{def.unit || ''}
      </div>
    </div>
  )
}

function RangeSliderContent ({ def, value, onChange }: {
  def: FilterDef & { type: 'range-slider' }, value: [number, number], onChange: (v: [number, number]) => void
}) {
  const [lo, hi] = value
  return (
    <div>
      <div className='compact-filter-range-row'>
        <span className='compact-filter-value'>{lo}{def.unit || ''}</span>
        <span style={{ color: '#888' }}>-</span>
        <span className='compact-filter-value'>{hi}{def.unit || ''}</span>
      </div>
      <div style={{ marginBottom: 4 }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 2 }}>Min</div>
        <input type='range' className='compact-filter-slider'
          min={def.min} max={def.max} step={def.step} value={lo}
          onChange={e => { const v = Number(e.target.value); onChange([Math.min(v, hi), hi]) }} />
      </div>
      <div>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 2 }}>Max</div>
        <input type='range' className='compact-filter-slider'
          min={def.min} max={def.max} step={def.step} value={hi}
          onChange={e => { const v = Number(e.target.value); onChange([lo, Math.max(v, lo)]) }} />
      </div>
    </div>
  )
}

// ===================== CALCULATOR TYPES =====================

type Results = {
  totalTrees: number; totalExistingShade: number; totalExistingUnder: number;
  treesToAdd: number; totalLength: number; totalArea: number;
  avgTccr: number; avgSpacing: number; filterSummary: string[];
  segmentCount: number;
  byWtype: Record<string, { trees: number; treesToAdd: number; length: number; area: number; tccr: number; spacing: number }>
}

const canopyArea = (d: number) => Math.PI * Math.pow(d / 2, 2)
const formatNum = (x?: number, d = 2) => (!isFinite(Number(x)) ? '0' : Number(x).toFixed(d))

const translateFilters = (sql: string): string[] => {
  if (!sql || sql === '1=1' || sql === 'None') return ['All segments:']
  const translations: Record<string, string> = {
    'summer_SI': 'Spring/Summer Shade Index',
    'ABw2k_max': 'Neighbourhood transit (betweenness centrality at 2km scale)',
    'ABw5k_max': 'City transit (betweenness centrality at 5km scale)',
    'AIw1kH_mea': 'Local centers (closeness centrality at 1km scale)',
    'FSI500_mea': 'Floor Space Index within 500m walking distance',
    'ARw500lm_1': 'Number of shops and restaurants within 500m walking distance',
    'ADws_mean': 'Walking distance to the closest school or preschool',
    'ADwm_mean': 'Walking distance to the closest tram, metro or railway station',
    'ADwbu_mean': 'Walking distance to the closest bus stop',
    'width': 'Street width'
  }
  let safeSql = sql.replace(/(BETWEEN\s+.*?)\s+AND\s+(.*?)/gi, '$1##RANGE_AND##$2')
  let conditions = safeSql.split(/\s+AND\s+/gi)
  return conditions.map((cond) => {
    let text = cond.trim()
    if (text.startsWith('(') && text.endsWith(')')) text = text.slice(1, -1).trim()
    Object.keys(translations).forEach(key => { text = text.split(key).join(translations[key]) })
    text = text
      .replace(/\s+BETWEEN\s+/gi, ' is between ')
      .replace(/##RANGE_AND##/g, ' and ')
      .replace(/<\s*/g, ': less than ').replace(/>\s*/g, ': greater than ')
      .replace(/<=\s*/g, ': less than or equal to ').replace(/>=\s*/g, ': greater than or equal to ')
      .replace(/=\s*/g, ': equal to ')
    const lower = text.toLowerCase()
    const isDistanceField = lower.includes('walking distance to') || lower.startsWith('street width')
    if (isDistanceField) {
      if (lower.includes(' is between ')) {
        text = text.replace(/(\d+(?:\.\d+)?)\s+and\s+(\d+(?:\.\d+)?)/i, '$1m and $2m')
      } else {
        text = text.replace(/(\d+(\.\d+)?)$/, '$1m')
      }
    }
    let bullet = text.charAt(0).toUpperCase() + text.slice(1)
    bullet = bullet.replace(/[:\s]+$/, '').trim()
    return bullet.endsWith('.') ? bullet : bullet + '.'
  })
}

// ===================== MAIN WIDGET =====================

export default function Widget (props: AllWidgetProps<IMConfig>) {
  const config = props.config || ({} as any)
  const { useDataSources } = props
  const dsId = useDataSources?.[0]?.dataSourceId

  // --- Map state ---
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)

  // --- Filter state ---
  const [filters, setFilters] = useState<FiltersMap>(createInitialFilters)
  const [openPopover, setOpenPopover] = useState<string | null>(null)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number } | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null)
  const prevSqlRef = useRef<string>('')
  const iconRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const dsRef = useRef<any>(null)
  const [dsReady, setDsReady] = useState(false)

  // --- Calculator state ---
  const [scenario, setScenario] = useState<'s1' | 's2'>('s1')
  const [subScenario, setSubScenario] = useState<'1a' | '1b'>('1a')
  const [diameter, setDiameter] = useState<number>(8)
  const [tccrGlobal, setTccrGlobal] = useState<number>(config?.defaultTccr ?? 0.6)
  const [wtypeTargets, setWtypeTargets] = useState<Record<string, number>>(
    { '1': 0.50, '2': 0.40, '3': 0.40, '4': 0.40, '5': 0.40 }
  )
  const [spacing, setSpacing] = useState<number>(25)
  const [results, setResults] = useState<Results | null>(null)
  const [segmentCount, setSegmentCount] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const widgetId = props.id || 'widget_82'

  // --- Data source handling ---
  const handleDsCreated = useCallback((ds: any) => {
    dsRef.current = ds
    prevSqlRef.current = ''
    setDsReady(true)
  }, [])

  // --- Apply filter SQL ---
  const applySql = useCallback((currentFilters: FiltersMap) => {
    const sql = buildCombinedSql(currentFilters)
    if (sql === prevSqlRef.current) return
    prevSqlRef.current = sql
    const ds = dsRef.current
    if (!ds) return
    try {
      if (ds.updateQueryParams) {
        ds.updateQueryParams({ where: sql }, widgetId)
      }
    } catch (e) {
      console.error('[tree-planting] Failed to apply filters:', e)
    }
  }, [widgetId])

  useEffect(() => {
    if (dsReady) applySql(filters)
  }, [filters, applySql, dsReady])

  // --- Segment count polling ---
  useEffect(() => {
    if (!jimuMapView?.view?.map) return
    const updateCount = async () => {
      try {
        const layer = jimuMapView.view.map.allLayers.find(
          (l: any) => l.title === 'Selected streets' && l.type === 'feature'
        ) as any
        if (!layer) return
        const query = layer.createQuery()
        query.where = layer.definitionExpression || '1=1'
        const result = await layer.queryFeatureCount(query)
        if (!loading) setSegmentCount(`${result.toLocaleString()} street segments selected.`)
      } catch (e) { /* ignore */ }
    }
    updateCount()
    const interval = setInterval(updateCount, 2000)
    return () => clearInterval(interval)
  }, [jimuMapView, loading])

  // --- Filter interactions ---
  const updateFilterValue = (field: string, value: any) => {
    setFilters(prev => ({ ...prev, [field]: { ...prev[field], value } }))
  }

  const handleIconClick = (field: string) => {
    const state = filters[field]
    if (state?.active) {
      const def = FILTER_DEFINITIONS.find(d => d.field === field)
      setFilters(prev => ({ ...prev, [field]: { active: false, value: def?.defaultValue ?? 0 } }))
      setOpenPopover(null); setPopoverPos(null)
    } else {
      setFilters(prev => ({ ...prev, [field]: { ...prev[field], active: true } }))
      openPopoverFor(field)
    }
  }

  const openPopoverFor = (field: string) => {
    const iconEl = iconRefs.current[field]
    if (iconEl) {
      const rect = iconEl.getBoundingClientRect()
      setPopoverPos({ top: rect.bottom + 6, left: Math.max(rect.right - 220, 10) })
    }
    setOpenPopover(field)
  }

  const closePopover = () => { setOpenPopover(null); setPopoverPos(null) }

  const handleMouseEnter = (field: string) => {
    setHoveredIcon(field)
    const iconEl = iconRefs.current[field]
    if (iconEl) {
      const rect = iconEl.getBoundingClientRect()
      setTooltipPos({ top: rect.bottom + 4, left: rect.left + rect.width / 2 })
    }
  }

  const handleMouseLeave = () => { setHoveredIcon(null); setTooltipPos(null) }

  const openDef = openPopover ? FILTER_DEFINITIONS.find(d => d.field === openPopover) : null
  const hoveredDef = hoveredIcon ? FILTER_DEFINITIONS.find(d => d.field === hoveredIcon) : null

  // --- CSV/PDF handlers ---
  const handleCsvDownload = () => {
    if (!results) return
    const header = "Category,Ideal number of trees (ignoring existing shade trees),Number of existing shade trees,Number of existing underdeveloped trees,Number of new trees to plant,Length(m),TCCR,Spacing(m)\n"
    const rows = Object.keys(results.byWtype).map(k => {
      const g = results.byWtype[k]
      return `${CATEGORY_LABELS[k] || k},${g.trees},${results.totalExistingShade},${results.totalExistingUnder},${g.treesToAdd},${g.length.toFixed(1)},${g.tccr.toFixed(2)},${g.spacing.toFixed(1)}`
    }).join("\n")
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url; link.setAttribute("download", "tree_planting_potential_report.csv")
    document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(url)
  }

  const handlePdfReport = async () => {
    if (!jimuMapView || !results) return
    const screenshot = await jimuMapView.view.takeScreenshot({ format: 'png' })
    const printWindow = window.open('', '_blank')
    if (!printWindow) return
    const methodDesc = scenario === 's1'
      ? `Method 1: Target TCCR (${subScenario === '1a' ? 'global' : 'by street width'})` : `Method 2: Fixed Spacing`
    const paramSummary = `Crown Diameter: ${diameter}m | ${scenario === 's1' ? (subScenario === '1a' ? `Global Target TCCR: ${tccrGlobal}` : 'Targets: per width class') : `Desired Spacing: ${spacing}m`}`
    printWindow.document.write(`<html><head><title>Tree Planting Targets Calculation</title><style>body{font-family:'Segoe UI',Arial,sans-serif;padding:25px;color:#333;font-size:10px;line-height:1.3}h1{color:#2c3e50;font-size:16px;margin:0 0 15px 0}h2{font-size:12px;border-bottom:1px solid #eee;padding-bottom:3px;margin:15px 0 8px 0}.section-title{font-weight:bold;margin-bottom:3px;font-size:11px}table{width:100%;border-collapse:collapse;margin-top:5px;font-size:9px}th,td{border:1px solid #ddd;padding:4px 6px;text-align:left}th{background-color:#f8f9fa}.map-container{margin:12px 0;border:1px solid #ccc;width:100%}.map-img{width:100%;height:auto;display:block;max-height:400px;object-fit:contain;background:#eee}.footer{margin-top:25px;padding-top:8px;border-top:1px solid #eee;text-align:center;color:#777;font-size:8px}ul{padding-left:15px;margin:3px 0}li{margin-bottom:1px}</style></head><body>
      <h1>Tree Planting Targets Calculation</h1>
      <div class="section-title">Applied assumptions:</div><ul>${results.filterSummary.map(f => `<li>${f}</li>`).join('')}</ul>
      <p style="margin:5px 0;"><strong>Total number of selected streets segments:</strong> ${results.segmentCount} | <strong>Total street length:</strong> ${formatNum(results.totalLength, 1)} m</p>
      <div class="section-title">Chosen Method:</div><p style="margin:2px 0;">${methodDesc}<br/><span style="color:#666;">Parameters: ${paramSummary}</span></p>
      <div class="map-container"><img class="map-img" src="${screenshot.dataUrl}"></div>
      <h2>Results Summary</h2><table><tr><th>Metric</th><th>Value</th></tr>
      <tr><td>Ideal number of trees</td><td>${results.totalTrees}</td></tr>
      <tr><td>Existing shade trees</td><td>${results.totalExistingShade}</td></tr>
      <tr><td>Existing underdeveloped trees</td><td>${results.totalExistingUnder}</td></tr>
      <tr style="font-weight:bold;"><td>New trees to plant</td><td>${results.treesToAdd}</td></tr>
      <tr><td>Average TCCR</td><td>${formatNum(results.avgTccr)}</td></tr>
      <tr><td>Average spacing</td><td>${formatNum(results.avgSpacing)} m</td></tr></table>
      <h2>Results by street width</h2><table><tr><th>Width</th><th>Trees to Add</th><th>TCCR</th><th>Spacing (m)</th><th>Length (m)</th></tr>
      ${Object.keys(results.byWtype).sort().map(k => { const g = results.byWtype[k]; return `<tr><td>${CATEGORY_LABELS[k] || k}</td><td>${g.treesToAdd}</td><td>${formatNum(g.tccr)}</td><td>${formatNum(g.spacing, 1)}</td><td>${formatNum(g.length, 1)}</td></tr>` }).join('')}</table>
      <div class="footer">Big Data in Architectural Research Lab, Technion | ${new Date().toLocaleDateString()}</div></body></html>`)
    printWindow.document.close()
    setTimeout(() => { printWindow.print() }, 700)
  }

  // --- Compute ---
  const onCompute = async () => {
    if (!dsId || !jimuMapView) return
    const ds = DataSourceManager.getInstance().getDataSource(dsId) as QueriableDataSource
    if (!ds) return
    setLoading(true); setSegmentCount('Fetching records...')
    try {
      const layer = (ds as any).layer
      if (!layer) { setSegmentCount('Layer not available.'); setLoading(false); return }
      const selectedIds = ds.getSelectedRecordIds?.() || []
      let features: any[] = []
      if (selectedIds.length > 0) {
        let offset = 0
        while (offset < selectedIds.length) {
          const chunk = selectedIds.slice(offset, offset + 2000)
          const q = layer.createQuery(); q.objectIds = chunk; q.returnGeometry = false; q.outFields = ['*']
          const res = await layer.queryFeatures(q)
          if (res?.features?.length) features = features.concat(res.features)
          offset += 2000
        }
      } else {
        const queryParams = (ds as any).getCurrentQueryParams?.() || { where: '1=1' }
        let offset = 0; let done = false
        while (!done) {
          const q = layer.createQuery(); q.where = queryParams.where || '1=1'
          q.outFields = ['*']; q.returnGeometry = false; q.start = offset; q.num = 2000
          const res = await layer.queryFeatures(q)
          if (res?.features?.length) features = features.concat(res.features)
          if (!res.features || res.features.length < 2000) done = true; else offset += 2000
        }
      }
      const recs = features.map((f: any) => ({ getFieldValue: (field: string) => f.attributes[field] }))
      if (recs.length === 0) { setSegmentCount('No records found.'); setLoading(false); return }
      const whereClause = (ds as any).getCurrentQueryParams?.()?.where || 'None'
      const translated = (selectedIds && selectedIds.length > 0)
        ? [`Manual selection (${recs.length} segments):`] : translateFilters(whereClause)
      const C = canopyArea(diameter); const rows = config.rows || 2
      const summary: Results = {
        totalTrees: 0, totalExistingShade: 0, totalExistingUnder: 0, treesToAdd: 0,
        totalLength: 0, totalArea: 0, avgTccr: 0, avgSpacing: 0,
        filterSummary: translated, segmentCount: recs.length, byWtype: {}
      }
      recs.forEach(r => {
        const L = Number(r.getFieldValue(config.lengthField)) || 0
        const W = Number(r.getFieldValue(config.widthField)) || 0
        const existingShade = config.existingTreesField ? (Number(r.getFieldValue(config.existingTreesField)) || 0) : 0
        const existingUnder = config.underdevelopedTreesField ? (Number(r.getFieldValue(config.underdevelopedTreesField)) || 0) : 0
        const typeID = String(r.getFieldValue(config.wtypeField) || '1')
        const A = L * W
        if (!summary.byWtype[typeID]) summary.byWtype[typeID] = { trees: 0, treesToAdd: 0, length: 0, area: 0, tccr: 0, spacing: 0 }
        let n_pot = scenario === 's1'
          ? Math.ceil(((subScenario === '1b' ? (wtypeTargets[typeID] || 0.6) : tccrGlobal) * A) / C)
          : rows * (Math.floor(L / spacing) + 1)
        const n_add = Math.max(0, n_pot - existingShade)
        summary.totalTrees += n_pot; summary.totalExistingShade += existingShade
        summary.totalExistingUnder += existingUnder; summary.treesToAdd += n_add
        summary.totalLength += L; summary.totalArea += A
        summary.byWtype[typeID].trees += n_pot; summary.byWtype[typeID].treesToAdd += n_add
        summary.byWtype[typeID].length += L; summary.byWtype[typeID].area += A
      })
      summary.avgTccr = summary.totalArea > 0 ? (summary.totalTrees * C) / summary.totalArea : 0
      summary.avgSpacing = summary.totalTrees > 0 ? summary.totalLength / (summary.totalTrees / rows) : 0
      Object.keys(summary.byWtype).forEach(k => {
        const g = summary.byWtype[k]
        g.tccr = g.area > 0 ? (g.trees * C) / g.area : 0
        g.spacing = g.trees > 0 ? g.length / (g.trees / rows) : 0
      })
      setResults(summary); setSegmentCount(`Calculated ${recs.length} segments.`)
    } catch (err) {
      console.error(err); setSegmentCount('Error fetching features.')
    } finally { setLoading(false) }
  }

  // ===================== RENDER =====================

  const portalContent = (
    <>
      {hoveredIcon && !openPopover && hoveredDef && tooltipPos && (
        <div className='compact-filter-tooltip'
          style={{ top: tooltipPos.top, left: tooltipPos.left, transform: 'translateX(-50%)' }}>
          {hoveredDef.name}
        </div>
      )}
      {openPopover && openDef && popoverPos && (
        <>
          <div className='compact-filter-backdrop' onClick={closePopover} />
          <div className='compact-filter-popover'
            style={{ top: popoverPos.top, left: popoverPos.left }} onClick={e => e.stopPropagation()}>
            <div className='compact-filter-popover-title'>{openDef.name}</div>
            {openDef.description && (
              <div style={{ fontSize: 10, color: '#999', marginBottom: 6, lineHeight: 1.3, fontStyle: 'italic', wordWrap: 'break-word', whiteSpace: 'normal', maxWidth: 200 }}>{openDef.description}</div>
            )}
            {openDef.type === 'slider' && (
              <SliderContent def={openDef as any} value={filters[openPopover].value as number}
                onChange={v => updateFilterValue(openPopover, v)} />
            )}
            {openDef.type === 'range-slider' && (
              <RangeSliderContent def={openDef as any} value={filters[openPopover].value as [number, number]}
                onChange={v => updateFilterValue(openPopover, v)} />
            )}
          </div>
        </>
      )}
    </>
  )

  return (
    <div className="widget-tree-planting" style={{ height: '100%', overflow: 'auto', background: '#2b2b2b', color: '#eee' }}>
      {props.useMapWidgetIds?.[0] && (
        <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds[0]} onActiveViewChange={(jmv) => setJimuMapView(jmv)} />
      )}
      {props.useDataSources?.[0] && (
        <DataSourceComponent useDataSource={props.useDataSources[0]} onDataSourceCreated={handleDsCreated} />
      )}

      {/* Filter bar */}
      <div className='compact-filter-bar' style={{ margin: 0, borderRadius: 0 }}>
        {FILTER_DEFINITIONS.map(def => {
          const state = filters[def.field]
          return (
            <div key={def.field}
              ref={el => { iconRefs.current[def.field] = el }}
              className={`compact-filter-icon ${state?.active ? 'active' : ''}`}
              onClick={e => { e.stopPropagation(); handleIconClick(def.field) }}
              onMouseEnter={() => handleMouseEnter(def.field)}
              onMouseLeave={handleMouseLeave}>
              <FilterIconImg def={def} />
            </div>
          )
        })}
      </div>

      {/* Reset button */}
      <div style={{ textAlign: 'center', padding: '4px 10px 0' }}>
        <button onClick={() => { setFilters(createInitialFilters()); setOpenPopover(null); setPopoverPos(null) }}
          style={{ fontSize: 10, color: '#aaa', background: 'none', border: '1px solid #555', borderRadius: 3, padding: '2px 10px', cursor: 'pointer' }}>
          Reset Filters
        </button>
      </div>

      {/* Instruction + segment count + calculator */}
      <div style={{ padding: '8px 10px' }}>
        <div style={{ fontSize: 12, fontStyle: 'italic', color: '#bbb', lineHeight: 1.4, marginBottom: 4 }}>
          Using the above buttons, filter out streets that do not require planting (by default, all the city's streets are considered). Next, choose the target calculation method, change the calculation parameters as you wish, and press Calculate.
        </div>
        <div style={{ fontSize: 12, color: '#4fc3f7', marginBottom: 6 }}>{segmentCount}</div>

        <div style={{ marginBottom: 6 }}>
          <div style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 4 }}>Calculation Method</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <label style={{ fontSize: 12, cursor: 'pointer' }}><Radio checked={scenario === 's1'} onChange={() => setScenario('s1')} /> Method 1: Target Tree Canopy Cover Ratio (TCCR)</label>
            <div style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <label style={{ fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" checked={scenario === 's1' && subScenario === '1a'} onChange={() => { setScenario('s1'); setSubScenario('1a') }} style={{ width: 14, height: 14, marginRight: 6, accentColor: '#0079c1' }} />
                1a: Global
              </label>
              <label style={{ fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" checked={scenario === 's1' && subScenario === '1b'} onChange={() => { setScenario('s1'); setSubScenario('1b') }} style={{ width: 14, height: 14, marginRight: 6, accentColor: '#0079c1' }} />
                1b: By street width
              </label>
            </div>
            <label style={{ fontSize: 12, cursor: 'pointer', marginTop: 2 }}><Radio checked={scenario === 's2'} onChange={() => setScenario('s2')} /> Method 2: Fixed Spacing</label>
          </div>
        </div>

        <div style={{ marginBottom: 6, padding: 8, border: '1px solid #555', borderRadius: 4 }}>
          <div style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 4 }}>Calculation Parameters</div>
          <div style={{ marginBottom: 4 }}>
            <div style={{ fontSize: 11, marginBottom: 2 }}>Crown diameter (m)</div>
            <input type="text" value={String(diameter)} onChange={(e) => setDiameter(Number(e.target.value))}
              style={{ width: '100%', padding: '4px 6px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 12 }} />
          </div>
          {scenario === 's1' && subScenario === '1a' && (
            <div style={{ marginBottom: 4 }}>
              <div style={{ fontSize: 11, marginBottom: 2 }}>Global target TCCR (0.0 - 1.0)</div>
              <input type="text" value={String(tccrGlobal)} onChange={(e) => setTccrGlobal(Number(e.target.value))}
                style={{ width: '100%', padding: '4px 6px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 12 }} />
            </div>
          )}
          {scenario === 's1' && subScenario === '1b' && (
            <div style={{ padding: 6, border: '1px solid #555', borderRadius: 3, fontSize: 11 }}>
              <div style={{ fontWeight: 'bold', marginBottom: 4 }}>TCCR targets by street width:</div>
              {Object.keys(wtypeTargets).sort().map(id => (
                <div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span>{CATEGORY_LABELS[id] || `Class ${id}`}:</span>
                  <input type="text" value={String(wtypeTargets[id])} onChange={(e) => setWtypeTargets({...wtypeTargets, [id]: Number(e.target.value)})}
                    style={{ width: 60, padding: '2px 4px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 11, textAlign: 'right' }} />
                </div>
              ))}
            </div>
          )}
          {scenario === 's2' && (
            <div style={{ marginBottom: 4 }}>
              <div style={{ fontSize: 11, marginBottom: 2 }}>Desired Spacing (m)</div>
              <input type="text" value={String(spacing)} onChange={(e) => setSpacing(Number(e.target.value))}
                style={{ width: '100%', padding: '4px 6px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 12 }} />
            </div>
          )}
        </div>

        <button onClick={onCompute} disabled={!dsId || loading}
          style={{ width: '100%', padding: '8px', background: loading ? '#555' : '#4a90d9', color: '#fff', border: 'none', borderRadius: 4, fontSize: 13, cursor: loading ? 'default' : 'pointer', marginBottom: 8 }}>
          {loading ? 'Processing...' : 'Calculate'}
        </button>

        {results && (
          <div style={{ padding: 10, border: '1px solid #555', borderRadius: 4, background: '#333' }}>
            <div style={{ fontWeight: 'bold', borderBottom: '1px solid #555', marginBottom: 6, paddingBottom: 4, textTransform: 'uppercase', fontSize: 11 }}>Results</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}><span>Selected segments:</span><strong>{results.segmentCount}</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}><span>Total street length:</span><strong>{formatNum(results.totalLength, 1)} m</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginTop: 4 }}><span>Ideal trees:</span><strong>{results.totalTrees}</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}><span>Existing shade trees:</span><strong>{results.totalExistingShade}</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}><span>Underdeveloped trees:</span><strong>{results.totalExistingUnder}</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 'bold', borderBottom: '1px solid #555', paddingBottom: 4, marginBottom: 4 }}><span>New trees to plant:</span><strong>{results.treesToAdd}</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}><span>Weighted TCCR:</span><strong>{formatNum(results.avgTccr)}</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 8 }}><span>Avg. Spacing:</span><strong>{formatNum(results.avgSpacing)} m</strong></div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
              <button onClick={handleCsvDownload} style={{ flex: 1, padding: '4px 8px', background: '#4a4a4a', color: '#eee', border: '1px solid #666', borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>Export CSV</button>
              <button onClick={handlePdfReport} style={{ flex: 1, padding: '4px 8px', background: '#4a4a4a', color: '#eee', border: '1px solid #666', borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>Print PDF</button>
            </div>
            <div style={{ marginTop: 8 }}>
              <div style={{ fontWeight: 'bold', borderBottom: '1px solid #555', marginBottom: 4, fontSize: 11, textTransform: 'uppercase' }}>Analysis by width:</div>
              {Object.keys(results.byWtype).sort().map(k => (
                <div key={k} style={{ borderBottom: '1px solid #444', paddingBottom: 4, marginBottom: 4, fontSize: 11 }}>
                  <div style={{ fontWeight: 'bold', color: '#4fc3f7' }}>{CATEGORY_LABELS[k] || `Class ${k}`}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Add <strong>{results.byWtype[k].treesToAdd}</strong> trees</span>
                    <span>TCCR: {formatNum(results.byWtype[k].tccr)}</span>
                  </div>
                  <div style={{ color: '#888', fontSize: 10 }}>Spacing: {formatNum(results.byWtype[k].spacing, 1)} m | Length: {formatNum(results.byWtype[k].length, 1)} m</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {ReactDOM.createPortal(portalContent, document.body)}
    </div>
  )
}
