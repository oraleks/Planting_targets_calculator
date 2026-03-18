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

// --- Multi-select popover content ---

function MultiSelectContent ({ def, value, onChange }: {
  def: FilterDef & { type: 'multi-select' }
  value: number[]
  onChange: (value: number[]) => void
}) {
  const toggle = (opt: number) => {
    if (value.includes(opt)) {
      onChange(value.filter(v => v !== opt))
    } else {
      onChange([...value, opt].sort())
    }
  }
  return (
    <div className='compact-filter-checkbox-list'>
      {def.options.map(opt => (
        <label key={opt}>
          <input
            type='checkbox'
            checked={value.includes(opt)}
            onChange={() => toggle(opt)}
          />
          Class {opt}
        </label>
      ))}
    </div>
  )
}

// --- Main widget ---

export default function CompactFilterWidget (props: AllWidgetProps<IMConfig>) {
  const [filters, setFilters] = useState<FiltersMap>(createInitialFilters)
  const [openPopover, setOpenPopover] = useState<string | null>(null)
  const [editValue, setEditValue] = useState<any>(null)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number } | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null)
  const prevSqlRef = useRef<string>('')
  const iconRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const dsRef = useRef<any>(null)
  const [dsReady, setDsReady] = useState(false)

  const widgetId = props.id || 'widget_201'

  // Called when DataSourceComponent creates/provides the data source
  const handleDsCreated = useCallback((ds: any) => {
    console.log('[compact-filter] Data source created:', ds?.id)
    dsRef.current = ds
    prevSqlRef.current = ''
    setDsReady(true)
  }, [])

  // Apply SQL to data source
  const applySql = useCallback((currentFilters: FiltersMap) => {
    const sql = buildCombinedSql(currentFilters)
    if (sql === prevSqlRef.current) return
    prevSqlRef.current = sql

    const ds = dsRef.current
    if (!ds) return

    console.log('[compact-filter] Applying SQL:', sql)

    try {
      if (ds.updateQueryParams) {
        ds.updateQueryParams({ where: sql }, widgetId)
        const info = ds.getInfo?.()
        const stored = (info as any)?.widgetQueries?.[widgetId]?.where
        console.log('[compact-filter] Stored SQL verified:', stored)
      }
    } catch (e) {
      console.error('[compact-filter] Failed to apply filters:', e)
    }
  }, [widgetId])

  // Open popover for a filter
  const openFilter = (field: string) => {
    if (openPopover === field) {
      setOpenPopover(null)
      setEditValue(null)
      setPopoverPos(null)
      return
    }
    const iconEl = iconRefs.current[field]
    if (iconEl) {
      const rect = iconEl.getBoundingClientRect()
      setPopoverPos({
        top: rect.bottom + 6,
        left: Math.max(rect.right - 220, 10)
      })
    }
    const currentState = filters[field]
    setEditValue(
      Array.isArray(currentState.value) ? [...currentState.value] : currentState.value
    )
    setOpenPopover(field)
  }

  const applyFilter = (field: string) => {
    setFilters(prev => {
      const next = { ...prev }
      next[field] = { active: true, value: editValue }
      return next
    })
    setOpenPopover(null)
    setEditValue(null)
    setPopoverPos(null)
  }

  const clearFilter = (field: string) => {
    const def = FILTER_DEFINITIONS.find(d => d.field === field)
    setFilters(prev => {
      const next = { ...prev }
      next[field] = {
        active: false,
        value: def?.type === 'multi-select' ? [...def.defaultValue] : def?.defaultValue ?? 0
      }
      return next
    })
    setOpenPopover(null)
    setEditValue(null)
    setPopoverPos(null)
  }

  useEffect(() => {
    if (dsReady) {
      applySql(filters)
    }
  }, [filters, applySql, dsReady])

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

  const closePopover = () => {
    setOpenPopover(null)
    setEditValue(null)
    setPopoverPos(null)
  }

  const openDef = openPopover ? FILTER_DEFINITIONS.find(d => d.field === openPopover) : null
  const hoveredDef = hoveredIcon ? FILTER_DEFINITIONS.find(d => d.field === hoveredIcon) : null

  // Render popover and tooltip via portal to document.body
  // This escapes the sidebar's stacking context
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
                value={editValue as number}
                onChange={setEditValue}
              />
            )}
            {openDef.type === 'range-slider' && (
              <RangeSliderContent
                def={openDef as any}
                value={editValue as [number, number]}
                onChange={setEditValue}
              />
            )}
            {openDef.type === 'multi-select' && (
              <MultiSelectContent
                def={openDef as any}
                value={editValue as number[]}
                onChange={setEditValue}
              />
            )}

            <div className='compact-filter-buttons'>
              <button className='compact-filter-btn set' onClick={() => applyFilter(openPopover)}>
                Set
              </button>
              {filters[openPopover]?.active && (
                <button className='compact-filter-btn clear' onClick={() => clearFilter(openPopover)}>
                  Clear
                </button>
              )}
            </div>
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
              onClick={e => { e.stopPropagation(); openFilter(def.field) }}
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
