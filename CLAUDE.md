# CLAUDE.md

## Project Overview

Tel Aviv-Yafo Tree Planting Targets Calculator — an ESRI Experience Builder 1.19.0 app for calculating street tree planting targets. The repo contains the compiled/deployed build (`cdn/7/`), the gh-pages deployment branch, and custom widget source code (`widgets-src/`).

## Key Facts

- ExB version: 1.19.0, ArcGIS JS API 4.34
- The compiled build in `cdn/7/` is self-contained and deployable as a static site
- Live deployment: `https://oraleks.github.io/Planting_targets_calculator/` (gh-pages branch)
- Custom widget source lives in `widgets-src/` and must be copied to an ExB Dev Edition install to compile
- The ExB dev environment is at `c:\Users\user\ExB\` (local only, not in repo)
- App config lives at `<ExB>/server/public/apps/2/config.json` during development
- Responsive: LARGE (desktop), MEDIUM (tablet), SMALL (phone) layouts — MEDIUM/SMALL show simplified map-only view

## Custom Widgets

### tree_potential_v2
- Core calculation widget — queries street segments, computes planting targets via TCCR or fixed spacing methods
- Source: `widgets-src/tree_potential_v2/src/runtime/widget.tsx`
- Uses fields: length, width, W_type, Large_sum, Small_sum
- Default parameters configurable in state initializers (line ~93)

### compact-filter
- Icon-based filter bar with live-updating sliders (no Set/Clear buttons)
- Source: `widgets-src/compact-filter/`
- 10 filter definitions in `filter-definitions.ts` — change names/icons/ranges here
- Click icon = toggle filter on/off; drag slider = live map update
- Generates SQL via `DataSource.updateQueryParams({ where: sql }, widgetId)`
- Uses `DataSourceComponent` from `jimu-core` to ensure child data source creation
- Popovers rendered via `ReactDOM.createPortal(content, document.body)` to escape sidebar stacking context
- Data source ID: `dataSource_1-19ca545a1dd-layer-15`

### filter-layer-sync
- Headless widget that does multiple things:
  - Syncs filter SQL to map layer definition expressions (polls `widgetQueries['widget_201'].where`)
  - Applies cumulative (AND) filter expressions to all visualization layers
  - Sets "Selected streets" layer renderer: solid grey fill (151,151,151), 0.5pt outline (242,242,242)
  - Moves "Selected streets" to bottom of layer stack on startup
  - Injects SVG icons into Map Layers widget DOM (cloned from compact-filter for consistency)
  - Moves legend panels to floating pop-out right of layers sidebar
  - Makes BDAR logo clickable (links to lab website)
  - Forces header button text to white
  - Scrolls Instructions dialog to top on open
- Source: `widgets-src/filter-layer-sync/`

### map-tools
- Custom map tool buttons replacing built-in ExB map tools
- Source: `widgets-src/map-tools/`
- Basemap toggle: saves original basemap on load, toggles to satellite and back
- Fullscreen toggle

## Data Sources

- Portal: `https://Technion-GIS.maps.arcgis.com`
- Street segments: `services1.arcgis.com/yAQXemoDSgzdfV2A/.../TLV_joined_segment_20260228_135057/FeatureServer/1`
- Tree trunks: `services1.arcgis.com/yAQXemoDSgzdfV2A/.../TLV_tree_trunks_with_diameterUPD/FeatureServer/0`
- Web map item ID: `cd7330a117704c349e672ed34959f8a4`
- All data sources are public (no authentication required)

## Filter-to-Layer Mapping

| Filter Field | Layer Title |
|---|---|
| summer_SI | Spring/Summer Shade Index |
| class_2k | Neighbourhood transit |
| class_5k | City transit |
| class_ai1k | Local centers |
| FSI500_mea | Building density |
| ARw500lm_1 | Access to shops and restaurants |
| ADws_mean | School or preschool proximity |
| ADwm_mean | Tram, metro or railway station proximity |
| ADwbu_mean | Bus stop proximity |

## ExB Development Notes

- Import `ImmutableObject` from `seamless-immutable`, NOT from `jimu-core`
- Direct `esri/` imports don't work in ExB webpack; use `loadArcGISJSAPIModules` from `jimu-arcgis`
- Child data sources (like `dataSource_1-19ca545a1dd-layer-15`) are created lazily; use `DataSourceComponent` to ensure they exist
- `position: fixed` elements inside ExB sidebar widgets are trapped by CSS stacking context; use `ReactDOM.createPortal(el, document.body)` to escape
- Map Layers widget uses Calcite `<calcite-list-item>` with Shadow DOM; layer names are in the `title` attribute; inject icons via `slot="content-start"`
- New widgets require webpack restart (`npm start` in `client/`)
- For deployment builds on Node 16: patch `copy-webpack-plugin` — replace `.toSorted()` with `.sort()`
- GitHub Pages deployment: set `isDevEdition: false`, `buildNumber: ""`, `base href` to repo path, `mountPath` to repo path, remove `clientId` for public data

## Commands

- Build widgets: `cd <ExB>/client && npm start` (watch mode) or `npm run build:dev`
- Run server: `cd <ExB>/server && npm start`
- App URL (local): `https://localhost:3001/experience/2/`
- Deploy: push to `gh-pages` branch → GitHub Pages auto-deploys
