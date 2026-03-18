/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, type AllWidgetProps, DataSourceComponent } from 'jimu-core'
import * as ReactDOM from 'react-dom'
import type { IMConfig } from '../config'
import { FILTER_DEFINITIONS, type FilterDef } from '../filter-definitions'
import './style.scss'

const { useState, useEffect, useCallback, useRef } = React

// --- Types ---

interface FilterState {
  active: boolean
  value: number | [number, number] | number[]
}

type FiltersMap = Record<string, FilterState>

// --- SQL generation ---

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

// --- Initial state ---

function createInitialFilters (): FiltersMap {
  const map: FiltersMap = {}
  for (const def of FILTER_DEFINITIONS) {
    map[def.field] = {
      active: false,
      value: def.type === 'multi-select'
        ? [...def.defaultValue]
        : def.defaultValue
    }
  }
  return map
}

// --- Icon rendering ---

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

// --- Slider popover content ---

function SliderContent ({ def, value, onChange }: {
  def: FilterDef & { type: 'slider' }
  value: number
  onChange: (value: number) => void
}) {
  const displayVal = def.step < 1 ? value.toFixed(2) : String(value)
  return (
    <div>
      <div className='compact-filter-slider-row'>
        <span className='compact-filter-value'>{def.min}</span>
        <input
          type='range'
          className='compact-filter-slider'
          min={def.min}
          max={def.max}
          step={def.step}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
        />
        <span className='compact-filter-value'>{displayVal}{def.unit || ''}</span>
      </div>
      <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>
        {def.operator === '<' ? 'Less than' : 'Greater than'} {displayVal}{def.unit || ''}
      </div>
    </div>
  )
}

// --- Range slider popover content ---

function RangeSliderContent ({ def, value, onChange }: {
  def: FilterDef & { type: 'range-slider' }
  value: [number, number]
  onChange: (value: [number, number]) => void
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
        <input
          type='range'
          className='compact-filter-slider'
          min={def.min}
          max={def.max}
          step={def.step}
          value={lo}
          onChange={e => {
            const v = Number(e.target.value)
            onChange([Math.min(v, hi), hi])
          }}
        />
      </div>
      <div>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 2 }}>Max</div>
        <input
          type='range'
          className='compact-filter-slider'
          min={def.min}
          max={def.max}
          step={def.step}
          value={hi}
          onChange={e => {
            const v = Number(e.target.value)
            onChange([lo, Math.max(v, lo)])
          }}
        />
      </div>
    </div>
  )
}

// --- Main widget ---

export default function CompactFilterWidget (props: AllWidgetProps<IMConfig>) {
  const [filters, setFilters] = useState<FiltersMap>(createInitialFilters)
  const [openPopover, setOpenPopover] = useState<string | null>(null)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number } | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null)
  const prevSqlRef = useRef<string>('')
  const iconRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const dsRef = useRef<any>(null)
  const [dsReady, setDsReady] = useState(false)

  const widgetId = props.id || 'widget_201'

  const handleDsCreated = useCallback((ds: any) => {
    console.log('[compact-filter] Data source created:', ds?.id)
    dsRef.current = ds
    prevSqlRef.current = ''
    setDsReady(true)
  }, [])

  // Apply SQL to data source — called whenever filters change
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
      console.error('[compact-filter] Failed to apply filters:', e)
    }
  }, [widgetId])

  // Apply SQL whenever filters change
  useEffect(() => {
    if (dsReady) {
      applySql(filters)
    }
  }, [filters, applySql, dsReady])

  // Update a filter's value LIVE (immediately applies to map)
  const updateFilterValue = (field: string, value: any) => {
    setFilters(prev => {
      const next = { ...prev }
      next[field] = { ...next[field], value }
      return next
    })
  }

  // Toggle filter on/off via icon click
  const handleIconClick = (field: string) => {
    const state = filters[field]
    const isActive = state?.active

    if (isActive) {
      // Active filter → deactivate and close popover
      const def = FILTER_DEFINITIONS.find(d => d.field === field)
      setFilters(prev => {
        const next = { ...prev }
        next[field] = {
          active: false,
          value: def?.defaultValue ?? 0
        }
        return next
      })
      setOpenPopover(null)
      setPopoverPos(null)
    } else {
      // Inactive filter → activate with default value and open popover
      setFilters(prev => {
        const next = { ...prev }
        next[field] = { ...next[field], active: true }
        return next
      })
      openPopoverFor(field)
    }
  }

  const openPopoverFor = (field: string) => {
    const iconEl = iconRefs.current[field]
    if (iconEl) {
      const rect = iconEl.getBoundingClientRect()
      setPopoverPos({
        top: rect.bottom + 6,
        left: Math.max(rect.right - 220, 10)
      })
    }
    setOpenPopover(field)
  }

  const closePopover = () => {
    setOpenPopover(null)
    setPopoverPos(null)
  }

  const handleMouseEnter = (field: string) => {
    setHoveredIcon(field)
    const iconEl = iconRefs.current[field]
    if (iconEl) {
      const rect = iconEl.getBoundingClientRect()
      setTooltipPos({
        top: rect.bottom + 4,
        left: rect.left + rect.width / 2
      })
    }
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null)
    setTooltipPos(null)
  }

  const openDef = openPopover ? FILTER_DEFINITIONS.find(d => d.field === openPopover) : null
  const hoveredDef = hoveredIcon ? FILTER_DEFINITIONS.find(d => d.field === hoveredIcon) : null

  // Portal content: tooltip and popover rendered on document.body
  const portalContent = (
    <>
      {hoveredIcon && !openPopover && hoveredDef && tooltipPos && (
        <div
          className='compact-filter-tooltip'
          style={{ top: tooltipPos.top, left: tooltipPos.left, transform: 'translateX(-50%)' }}
        >
          {hoveredDef.name}
        </div>
      )}

      {openPopover && openDef && popoverPos && (
        <>
          <div className='compact-filter-backdrop' onClick={closePopover} />
          <div
            className='compact-filter-popover'
            style={{ top: popoverPos.top, left: popoverPos.left }}
            onClick={e => e.stopPropagation()}
          >
            <div className='compact-filter-popover-title'>{openDef.name}</div>

            {openDef.type === 'slider' && (
              <SliderContent
                def={openDef as any}
                value={filters[openPopover].value as number}
                onChange={v => updateFilterValue(openPopover, v)}
              />
            )}
            {openDef.type === 'range-slider' && (
              <RangeSliderContent
                def={openDef as any}
                value={filters[openPopover].value as [number, number]}
                onChange={v => updateFilterValue(openPopover, v)}
              />
            )}
          </div>
        </>
      )}
    </>
  )

  return (
    <div className='compact-filter-root'>
      {props.useDataSources?.[0] && (
        <DataSourceComponent
          useDataSource={props.useDataSources[0]}
          onDataSourceCreated={handleDsCreated}
        />
      )}
      <div className='compact-filter-bar'>
        {FILTER_DEFINITIONS.map(def => {
          const state = filters[def.field]
          const isActive = state?.active

          return (
            <div
              key={def.field}
              ref={el => { iconRefs.current[def.field] = el }}
              className={`compact-filter-icon ${isActive ? 'active' : ''}`}
              onClick={e => { e.stopPropagation(); handleIconClick(def.field) }}
              onMouseEnter={() => handleMouseEnter(def.field)}
              onMouseLeave={handleMouseLeave}
            >
              <FilterIconImg def={def} />
            </div>
          )
        })}
      </div>

      {ReactDOM.createPortal(portalContent, document.body)}
    </div>
  )
}
