/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import './style.scss'

const { useState, useRef, useCallback } = React

// --- SVG icons (Calcite/ESRI style, 16x16) ---

// Basemap: 2x2 grid (matches ESRI basemap toggle icon)
const basemapSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M1 1h6v6H1zm8 0h6v6H9zM1 9h6v6H1zm8 0h6v6H9z"/></svg>'

// Fullscreen: expand corners (matches ESRI fullscreen icon)
const fullscreenSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M1 6V1h5v1H2v4zm14 0V2h-4V1h5v5zM6 15H1v-5h1v4h4zm4 0h5v-5h-1v4h-4z"/></svg>'

export default function MapToolsWidget (props: AllWidgetProps<any>) {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [isSatellite, setIsSatellite] = useState(false)
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
        className='map-tool-btn'
        onClick={toggleFullscreen}
        title='Toggle fullscreen'
      >
        <span dangerouslySetInnerHTML={{ __html: fullscreenSvg }} />
      </button>
    </div>
  )
}
