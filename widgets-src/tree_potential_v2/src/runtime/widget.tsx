/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, type AllWidgetProps, DataSourceManager, type QueriableDataSource } from 'jimu-core'
import { Button, Radio, TextInput, Label } from 'jimu-ui'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import type { IMConfig } from '../config'
import './style.scss'

const CATEGORY_LABELS: Record<string, string> = {
  '1': '<10m', '2': '10-20m', '3': '20-30m', '4': '40m', '5': '>40m'
}

type Results = {
  totalTrees: number;
  totalExistingShade: number;
  totalExistingUnder: number;
  treesToAdd: number;
  totalLength: number;
  totalArea: number;
  avgTccr: number;
  avgSpacing: number;
  filterSummary: string[];
  segmentCount: number;
  byWtype: Record<string, {
    trees: number; treesToAdd: number; length: number; area: number; tccr: number; spacing: number;
  }>
}

const canopyArea = (d: number) => Math.PI * Math.pow(d / 2, 2)
const formatNum = (x?: number, d = 2) => (!isFinite(Number(x)) ? '0' : Number(x).toFixed(d))

const translateFilters = (sql: string): string[] => {
  if (!sql || sql === '1=1' || sql === 'None') return ['All segments:']

  const translations: Record<string, string> = {
    'summer_SI': 'Spring/Summer Shade Index',
    'class_2k IN (5,6,7)': 'High neighbourhood transit (betweenness centrality at 2km scale, top 10% highest values)',
    'class_5k IN (5,6,7)': 'High city transit (betweenness centrality at 5km scale, top 10% highest values)',
    'class_ai1k IN (6,7)': 'Local centers (closeness centrality at 1km scale, top 10% highest values)',
    'FSI500_mea': 'Floor Space Index within 500m walking distance',
    'ARw500lm_1': 'Number of shops and restaurants within 500m walking distance',
    'ADws_mean': 'Walking distance to the closest school or preschool',
    'ADwm_mean': 'Walking distance to the closest tram, metro or railway station',
    'ADwbu_mean': 'Walking distance to the closest bus stop',
    'width': 'Street width'
  }

  let safeSql = sql.replace(/(BETWEEN\s+.*?)\s+AND\s+(.*?)/gi, '$1##RANGE_AND##$2');
  let conditions = safeSql.split(/\s+AND\s+/gi);

  return conditions.map((cond) => {
    let text = cond.trim();
    if (text.startsWith('(') && text.endsWith(')')) {
      text = text.slice(1, -1).trim();
    }
    Object.keys(translations).forEach(key => {
      text = text.split(key).join(translations[key]);
    });

    text = text
      .replace(/\s+BETWEEN\s+/gi, ' is between ')
      .replace(/##RANGE_AND##/g, ' and ')
      .replace(/<\s*/g, ': less than ')
      .replace(/>\s*/g, ': greater than ')
      .replace(/<=\s*/g, ': less than or equal to ')
      .replace(/>=\s*/g, ': greater than or equal to ')
      .replace(/=\s*/g, ': equal to ');

    const lower = text.toLowerCase();
    const isDistanceField = lower.includes('walking distance to') || lower.startsWith('street width');

    if (isDistanceField) {
      if (lower.includes(' is between ')) {
        text = text.replace(/(\d+(?:\.\d+)?)\s+and\s+(\d+(?:\.\d+)?)/i, '$1m and $2m');
      } else {
        text = text.replace(/(\d+(\.\d+)?)$/, '$1m');
      }
    }

    let bullet = text.charAt(0).toUpperCase() + text.slice(1);
    bullet = bullet.replace(/[:\s]+$/, '').trim();
    return bullet.endsWith('.') ? bullet : bullet + '.';
  });
}

export default function Widget(props: AllWidgetProps<IMConfig>) {
  const config = props.config || ({} as any)
  const { useDataSources } = props
  const dsId = useDataSources?.[0]?.dataSourceId

  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>(null)
  const [scenario, setScenario] = React.useState<'s1' | 's2'>('s1')
  const [subScenario, setSubScenario] = React.useState<'1a' | '1b'>('1a')
  const [diameter, setDiameter] = React.useState<number>(8)
  const [tccrGlobal, setTccrGlobal] = React.useState<number>(config?.defaultTccr ?? 0.6)
  const [wtypeTargets, setWtypeTargets] = React.useState<Record<string, number>>(
    { '1': 0.50, '2': 0.40, '3': 0.40, '4': 0.40, '5': 0.40 }
  )
  const [spacing, setSpacing] = React.useState<number>(25)
  const [results, setResults] = React.useState<Results | null>(null)
  const [note, setNote] = React.useState<string>('Using the above buttons, filter out streets that do not require planting (by default, all the city\'s streets are considered). Next, choose the target calculation method, change the calculation parameters as you wish, and press Calculate.')
  const [loading, setLoading] = React.useState<boolean>(false)

  const onActiveViewChange = (jmv: JimuMapView) => { setJimuMapView(jmv) }

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
    link.href = url
    link.setAttribute("download", "tree_planting_potential_report.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handlePdfReport = async () => {
    if (!jimuMapView || !results) return
    const screenshot = await jimuMapView.view.takeScreenshot({ format: 'png' })
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const methodDesc = scenario === 's1'
      ? `Method 1: Target TCCR (${subScenario === '1a' ? 'global' : 'by street width'})`
      : `Method 2: Fixed Spacing`

    const paramSummary = `Crown Diameter: ${diameter}m | ${scenario === 's1' ? (subScenario === '1a' ? `Global Target TCCR: ${tccrGlobal}` : 'Targets: per width class') : `Desired Spacing: ${spacing}m`}`

    printWindow.document.write(`
      <html>
        <head>
          <title>Tree Planting Targets Calculation</title>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; padding: 25px; color: #333; font-size: 10px; line-height: 1.3; }
            h1 { color: #2c3e50; font-size: 16px; margin: 0 0 15px 0; text-align: left; }
            h2 { font-size: 12px; border-bottom: 1px solid #eee; padding-bottom: 3px; margin: 15px 0 8px 0; }
            .section-title { font-weight: bold; margin-bottom: 3px; font-size: 11px; }
            table { width: 100%; border-collapse: collapse; margin-top: 5px; font-size: 9px; }
            th, td { border: 1px solid #ddd; padding: 4px 6px; text-align: left; }
            th { background-color: #f8f9fa; }
            .map-container { margin: 12px 0; border: 1px solid #ccc; width: 100%; }
            .map-img { width: 100%; height: auto; display: block; max-height: 400px; object-fit: contain; background: #eee; }
            .footer { margin-top: 25px; padding-top: 8px; border-top: 1px solid #eee; text-align: center; color: #777; font-size: 8px; }
            ul { padding-left: 15px; margin: 3px 0; }
            li { margin-bottom: 1px; }
          </style>
        </head>
        <body>
          <h1>Tree Planting Targets Calculation</h1>
          <div class="section-title">Applied assumptions:</div>
          <ul>${results.filterSummary.map(f => `<li>${f}</li>`).join('')}</ul>
          <p style="margin: 5px 0;"><strong>Total number of selected streets segments:</strong> ${results.segmentCount} | <strong>Total street length:</strong> ${formatNum(results.totalLength, 1)} m</p>
          <div class="section-title">Chosen Method:</div>
          <p style="margin: 2px 0;">${methodDesc}<br/><span style="color: #666;">Parameters: ${paramSummary}</span></p>
          <div class="map-container"><img class="map-img" src="${screenshot.dataUrl}"></div>
          <h2>Results Summary</h2>
          <table>
            <tr><th>Metric</th><th>Value</th></tr>
            <tr><td>Ideal number of trees (ignoring existing shade trees)</td><td>${results.totalTrees}</td></tr>
            <tr><td>Number of existing shade trees</td><td>${results.totalExistingShade}</td></tr>
            <tr><td>Number of existing underdeveloped trees</td><td>${results.totalExistingUnder}</td></tr>
            <tr style="font-weight: bold;"><td>Number of new trees to plant</td><td>${results.treesToAdd}</td></tr>
            <tr><td>Average TCCR weighted by segment length</td><td>${formatNum(results.avgTccr)}</td></tr>
            <tr><td>Average tree spacing</td><td>${formatNum(results.avgSpacing)} m</td></tr>
          </table>
          <h2>Results by streets width</h2>
          <table>
            <tr><th>Street width</th><th>Trees to Add</th><th>Average TCCR</th><th>Average Spacing (m)</th><th>Total Street Length (m)</th></tr>
            ${Object.keys(results.byWtype).sort().map(k => {
              const g = results.byWtype[k];
              return `<tr>
                <td>${CATEGORY_LABELS[k] || k}</td>
                <td>${g.treesToAdd}</td>
                <td>${formatNum(g.tccr)}</td>
                <td>${formatNum(g.spacing, 1)}</td>
                <td>${formatNum(g.length, 1)}</td>
              </tr>`
            }).join('')}
          </table>
          <div class="footer">Big Data in Architectural Research Lab, Technion | ${new Date().toLocaleDateString()}</div>
        </body>
      </html>
    `)
    printWindow.document.close()
    setTimeout(() => { printWindow.print() }, 700)
  }

  const onCompute = async () => {
    if (!dsId || !jimuMapView) return
    const ds = DataSourceManager.getInstance().getDataSource(dsId) as QueriableDataSource
    if (!ds) return

    setLoading(true)
    setNote('Fetching records...')

    try {
      const layer = (ds as any).layer
      if (!layer) {
        setNote('Layer not available.')
        setLoading(false)
        return
      }

      const selectedIds = ds.getSelectedRecordIds?.() || []
      let features: any[] = []

      // 1. FETCH ALL FEATURES WITH PAGINATION
      if (selectedIds.length > 0) {
        const chunkSize = 2000
        let offset = 0
        while (offset < selectedIds.length) {
          const chunk = selectedIds.slice(offset, offset + chunkSize)
          const q = layer.createQuery()
          q.objectIds = chunk
          q.returnGeometry = false
          q.outFields = ['*']
          const res = await layer.queryFeatures(q)
          if (res?.features?.length) {
            features = features.concat(res.features)
          }
          offset += chunkSize
        }
      } else {
        const queryParams = (ds as any).getCurrentQueryParams?.() || { where: '1=1' }
        const pageSize = 2000
        let offset = 0
        let done = false
        while (!done) {
          const q = layer.createQuery()
          q.where = queryParams.where || '1=1'
          q.outFields = ['*']
          q.returnGeometry = false
          q.start = offset
          q.num = pageSize
          const res = await layer.queryFeatures(q)
          if (res?.features?.length) {
            features = features.concat(res.features)
          }
          if (!res.features || res.features.length < pageSize) {
            done = true
          } else {
            offset += pageSize
          }
        }
      }

      const recs = features.map((f: any) => ({
        getFieldValue: (field: string) => f.attributes[field]
      }))

      if (recs.length === 0) {
        setNote('No records found. Ensure the layer is visible.')
        setLoading(false)
        return
      }

      // 2. TRANSLATE FILTERS
      const whereClause = (ds as any).getCurrentQueryParams?.()?.where || 'None'
      const translated = (selectedIds && selectedIds.length > 0)
        ? [`Manual selection (${recs.length} segments):`]
        : translateFilters(whereClause)

      // 3. RUN CALCULATIONS
      const C = canopyArea(diameter)
      const rows = config.rows || 2

      const summary: Results = {
        totalTrees: 0,
        totalExistingShade: 0,
        totalExistingUnder: 0,
        treesToAdd: 0,
        totalLength: 0,
        totalArea: 0,
        avgTccr: 0,
        avgSpacing: 0,
        filterSummary: translated,
        segmentCount: recs.length,
        byWtype: {}
      }

      recs.forEach(r => {
        const L = Number(r.getFieldValue(config.lengthField)) || 0
        const W = Number(r.getFieldValue(config.widthField)) || 0
        const existingShade = config.existingTreesField ? (Number(r.getFieldValue(config.existingTreesField)) || 0) : 0
        const existingUnder = config.underdevelopedTreesField ? (Number(r.getFieldValue(config.underdevelopedTreesField)) || 0) : 0
        const typeID = String(r.getFieldValue(config.wtypeField) || '1')
        const A = L * W

        if (!summary.byWtype[typeID]) {
          summary.byWtype[typeID] = {
            trees: 0,
            treesToAdd: 0,
            length: 0,
            area: 0,
            tccr: 0,
            spacing: 0
          }
        }

        let n_pot = scenario === 's1'
          ? Math.ceil(((subScenario === '1b' ? (wtypeTargets[typeID] || 0.6) : tccrGlobal) * A) / C)
          : rows * (Math.floor(L / spacing) + 1)

        const n_add = Math.max(0, n_pot - existingShade)

        summary.totalTrees += n_pot
        summary.totalExistingShade += existingShade
        summary.totalExistingUnder += existingUnder
        summary.treesToAdd += n_add
        summary.totalLength += L
        summary.totalArea += A

        summary.byWtype[typeID].trees += n_pot
        summary.byWtype[typeID].treesToAdd += n_add
        summary.byWtype[typeID].length += L
        summary.byWtype[typeID].area += A
      })

      summary.avgTccr = summary.totalArea > 0 ? (summary.totalTrees * C) / summary.totalArea : 0
      summary.avgSpacing = summary.totalTrees > 0 ? summary.totalLength / (summary.totalTrees / rows) : 0

      Object.keys(summary.byWtype).forEach(k => {
        const g = summary.byWtype[k]
        g.tccr = g.area > 0 ? (g.trees * C) / g.area : 0
        g.spacing = g.trees > 0 ? g.length / (g.trees / rows) : 0
      })

      setResults(summary)
      setNote(`Calculated ${recs.length} segments.`)

    } catch (err) {
      console.error(err)
      setNote('Error fetching features.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="widget-tree-planting p-2 bg-white" style={{ height: '100%', overflow: 'auto' }}>
      {props.useMapWidgetIds?.[0] && (
        <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds[0]} onActiveViewChange={onActiveViewChange} />
      )}
      <div className="small text-muted mb-1 font-italic" style={{ fontSize: '11px', lineHeight: '1.3' }}>{note}</div>
      <div className="mb-2">
        <Label className="font-weight-bold" style={{ fontSize: '13px' }}>Calculation Method</Label>
        <div className="d-flex flex-column mt-1" style={{ gap: '2px' }}>
          <Label className="m-0" style={{ fontSize: '12px' }}><Radio checked={scenario === 's1'} onChange={() => setScenario('s1')} /> Method 1: Target Tree Canopy Cover Ratio (TCCR)</Label>
          <div className="pl-4 d-flex flex-column" style={{ gap: '2px' }}>
            <Label className="small m-0 d-flex align-items-center" style={{ cursor: 'pointer' }}>
              <input type="checkbox" checked={scenario === 's1' && subScenario === '1a'} onChange={() => { setScenario('s1'); setSubScenario('1a') }} style={{ width: 14, height: 14, marginRight: 6, accentColor: '#0079c1' }} />
              1a: Global
            </Label>
            <Label className="small m-0 d-flex align-items-center" style={{ cursor: 'pointer' }}>
              <input type="checkbox" checked={scenario === 's1' && subScenario === '1b'} onChange={() => { setScenario('s1'); setSubScenario('1b') }} style={{ width: 14, height: 14, marginRight: 6, accentColor: '#0079c1' }} />
              1b: By street width
            </Label>
          </div>
          <Label className="m-0 mt-1" style={{ fontSize: '12px' }}><Radio checked={scenario === 's2'} onChange={() => setScenario('s2')} /> Method 2: Fixed Spacing</Label>
        </div>
      </div>
      <div className="mb-2 p-2 border rounded">
        <Label className="font-weight-bold" style={{ fontSize: '13px' }}>Calculation Parameters</Label>
        <div className="mt-2">
          <Label className="small">Crown diameter (m)</Label>
          <TextInput value={String(diameter)} onChange={(e) => setDiameter(Number(e.target.value))} />
        </div>
        {scenario === 's1' && subScenario === '1a' && (
          <div className="mt-2">
            <Label className="small">Global target TCCR (0.0 - 1.0)</Label>
            <TextInput value={String(tccrGlobal)} onChange={(e) => setTccrGlobal(Number(e.target.value))} />
          </div>
        )}
        {scenario === 's1' && subScenario === '1b' && (
          <div className="mt-2 p-2 bg-light border rounded small">
            <div className="font-weight-bold mb-1">TCCR targets by street width:</div>
            {Object.keys(wtypeTargets).sort().map(id => (
              <div key={id} className="d-flex align-items-center justify-content-between mb-1">
                <span>{CATEGORY_LABELS[id] || `Class ${id}`}:</span>
                <TextInput size="sm" style={{ width: '60px' }} value={String(wtypeTargets[id])}
                  onChange={(e) => setWtypeTargets({...wtypeTargets, [id]: Number(e.target.value)})} />
              </div>
            ))}
          </div>
        )}
        {scenario === 's2' && (
          <div className="mt-2">
            <Label className="small">Desired Spacing (m)</Label>
            <TextInput value={String(spacing)} onChange={(e) => setSpacing(Number(e.target.value))} />
          </div>
        )}
      </div>
      <Button type="primary" onClick={onCompute} className="w-100 mb-2" disabled={!dsId || loading}>
        {loading ? 'Processing...' : 'Calculate'}
      </Button>
      {results && (
        <div className="results-panel p-3 border rounded bg-light">
          <div className="font-weight-bold border-bottom mb-2 pb-1 text-uppercase small">Results</div>
          <div className="d-flex justify-content-between small">
            <span>Total number of selected streets segments:</span><strong>{results.segmentCount}</strong>
          </div>
          <div className="d-flex justify-content-between small">
            <span>Total street length:</span><strong>{formatNum(results.totalLength, 1)} m</strong>
          </div>
          <div className="d-flex justify-content-between small mt-1">
            <span>Ideal number of trees (ignoring existing shade trees):</span><strong>{results.totalTrees}</strong>
          </div>
          <div className="d-flex justify-content-between small">
            <span>Number of existing shade trees:</span><strong>{results.totalExistingShade}</strong>
          </div>
          <div className="d-flex justify-content-between small">
            <span>Number of existing underdeveloped trees:</span><strong>{results.totalExistingUnder}</strong>
          </div>
          <div className="d-flex justify-content-between small font-weight-bold border-bottom pb-1 mb-1">
            <span>Number of new trees to plant:</span><strong>{results.treesToAdd}</strong>
          </div>
          <div className="d-flex justify-content-between small">
            <span>Weighted TCCR:</span><strong>{formatNum(results.avgTccr)}</strong>
          </div>
          <div className="d-flex justify-content-between small mb-3">
            <span>Avg. Spacing:</span><strong>{formatNum(results.avgSpacing)} m</strong>
          </div>
          <div className="d-flex gap-2 mb-3">
            <Button size="sm" onClick={handleCsvDownload} className="w-50">Export CSV</Button>
            <Button size="sm" onClick={handlePdfReport} className="w-50">Print PDF</Button>
          </div>
          <div className="mt-4">
            <div className="font-weight-bold border-bottom mb-1 small text-uppercase">Analysis by width:</div>
            {Object.keys(results.byWtype).sort().map(k => (
              <div key={k} className="border-bottom py-2 small">
                <div className="font-weight-bold text-primary">{CATEGORY_LABELS[k] || `Class ${k}`}</div>
                <div className="d-flex justify-content-between">
                  <span>Add <strong>{results.byWtype[k].treesToAdd}</strong> trees</span>
                  <span>TCCR: {formatNum(results.byWtype[k].tccr)}</span>
                </div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                   Spacing: {formatNum(results.byWtype[k].spacing, 1)} m | Length: {formatNum(results.byWtype[k].length, 1)} m
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}