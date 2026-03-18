/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'
import './style.scss'

const { useState, useRef, useCallback } = React

// --- SVG icons (Calcite/ESRI style, 16x16) ---

// Basemap: globe with meridians (matches ESRI basemap gallery icon)
const basemapSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM2.07 7.5h3.06A12.9 12.9 0 0 1 5.5 5.26 10.3 10.3 0 0 1 3.1 4.09 5.97 5.97 0 0 0 2.07 7.5zm0 1h3.06c.06.8.19 1.57.37 2.24a10.3 10.3 0 0 1-2.4 1.17A5.97 5.97 0 0 1 2.07 8.5zm4.07 0h3.72a11.8 11.8 0 0 1-.4 2.47A11.4 11.4 0 0 0 8 10.5c-.52 0-1 .02-1.46.07A11.8 11.8 0 0 1 6.14 8.5zm0-1a11.8 11.8 0 0 1 .4-2.47C7 5.02 7.48 5 8 5c.52 0 1 .02 1.46.07.24.72.37 1.56.4 2.43H6.14zm5.79 0h3.06A5.97 5.97 0 0 0 12.9 4.09a10.3 10.3 0 0 1-2.4 1.17c.18.67.31 1.44.37 2.24h1.06zm0 1c-.06.8-.19 1.57-.37 2.24a10.3 10.3 0 0 1 2.4 1.17 5.97 5.97 0 0 0 1.03-3.41h-3.06z"/></svg>'

// Measure: ruler (matches ESRI distance measurement icon)
const measureSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M14.854 5.854l-4.708-4.708a.5.5 0 0 0-.707 0l-8.293 8.293a.5.5 0 0 0 0 .707l4.708 4.708a.5.5 0 0 0 .707 0l8.293-8.293a.5.5 0 0 0 0-.707zM6.146 14.44L1.56 9.854 3 8.414l1.646 1.647.708-.708L3.707 7.707 5 6.414l1.146 1.147.708-.708L5.707 5.707 7 4.414l1.646 1.647.708-.708L7.707 3.707 9.146 2.27l4.586 4.584z"/></svg>'

// Fullscreen: expand corners (matches ESRI fullscreen icon)
const fullscreenSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M1 6V1h5v1H2v4zm14 0V2h-4V1h5v5zM6 15H1v-5h1v4h4zm4 0h5v-5h-1v4h-4z"/></svg>'

export default function MapToolsWidget (props: AllWidgetProps<any>) {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [measuring, setMeasuring] = useState(false)
  const [isSatellite, setIsSatellite] = useState(false)
  const measureRef = useRef<any>(null)
  const originalBasemapRef = useRef<any>(null)

  // Save the original basemap when map view first loads
  const handleMapViewChange = useCallback((jmv: JimuMapView) => {
    setJimuMapView(jmv)
    if (jmv?.view?.map?.basemap && !originalBasemapRef.current) {
      originalBasemapRef.current = jmv.view.map.basemap
    }
  }, [])

  const toggleBasemap = useCallback(() => {
    const map = jimuMapView?.view?.map
    if (!map) return
    if (!isSatellite) {
      map.basemap = 'satellite' as any
      setIsSatellite(true)
    } else {
      if (originalBasemapRef.current) {
        map.basemap = originalBasemapRef.current
      }
      setIsSatellite(false)
    }
  }, [jimuMapView, isSatellite])

  const toggleFullscreen = useCallback(() => {
    if (!(document as any).fullscreenElement) {
      document.documentElement.requestFullscreen?.()
    } else {
      (document as any).exitFullscreen?.()
    }
  }, [])

  const toggleMeasure = useCallback(async () => {
    const view = jimuMapView?.view
    if (!view) return

    if (measureRef.current) {
      view.ui.remove(measureRef.current)
      measureRef.current.destroy()
      measureRef.current = null
      setMeasuring(false)
      return
    }

    try {
      const modules = await loadArcGISJSAPIModules([
        'esri/widgets/DistanceMeasurement2D'
      ])
      const DistanceMeasurement2D = modules[0]
      const widget = new DistanceMeasurement2D({ view })
      view.ui.add(widget, 'bottom-left')
      measureRef.current = widget
      setMeasuring(true)
    } catch (e) {
      console.warn('map-tools: failed to create measurement widget', e)
    }
  }, [jimuMapView])

  return (
    <div className='map-tools-panel'>
      {(props as any).useMapWidgetIds?.[0] && (
        <JimuMapViewComponent
          useMapWidgetId={(props as any).useMapWidgetIds[0]}
          onActiveViewChange={handleMapViewChange}
        />
      )}
      <button
        className='map-tool-btn'
        onClick={toggleBasemap}
        title='Toggle basemap'
      >
        <span dangerouslySetInnerHTML={{ __html: basemapSvg }} />
      </button>
      <button
        className={`map-tool-btn ${measuring ? 'active' : ''}`}
        onClick={toggleMeasure}
        title='Measure distance'
      >
        <span dangerouslySetInnerHTML={{ __html: measureSvg }} />
      </button>
      <button
        className='map-tool-btn'
        onClick={toggleFullscreen}
        title='Toggle fullscreen'
      >
        <span dangerouslySetInnerHTML={{ __html: fullscreenSvg }} />
      </button>
    </div>
  )
}
