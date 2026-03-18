# CLAUDE.md

## Project Overview

Tel Aviv Tree Planting Targets Calculator — an ESRI Experience Builder 1.19.0 app for calculating street tree planting targets. The repo contains both the compiled/deployed build (`cdn/7/`) and custom widget source code (`widgets-src/`).

## Key Facts

- ExB version: 1.19.0, ArcGIS JS API 4.34
- The compiled build in `cdn/7/` is self-contained and deployable as a static site
- Custom widget source lives in `widgets-src/` and must be copied to an ExB Dev Edition install to compile
- The ExB dev environment is at `c:\Users\user\ExB\` (local only, not in repo)
- App config lives at `<ExB>/server/public/apps/2/config.json` during development

## Custom Widgets

### tree_potential_v2
- Core calculation widget — queries street segments, computes planting targets via TCCR or fixed spacing methods
- Source: `<ExB>/client/your-extensions/widgets/tree_potential_v2/src/`
- Uses fields: length, width, W_type, Large_sum, Small_sum

### compact-filter
- Icon-based filter bar replacing the built-in ExB filter widget
- Source: `widgets-src/compact-filter/`
- 10 filter definitions in `filter-definitions.ts` with SVG/PNG icons
- Generates SQL via `DataSource.updateQueryParams({ where: sql }, widgetId)`
- Uses `DataSourceComponent` from `jimu-core` to ensure child data source creation
- Popovers rendered via `ReactDOM.createPortal(content, document.body)` to escape sidebar stacking context
- Data source ID: `dataSource_1-19ca545a1dd-layer-15`

### filter-layer-sync
- Headless widget that syncs filter state to map layer definition expressions
- Source: `widgets-src/filter-layer-sync/`
- Polls `DataSourceManager` for compact-filter widget's SQL via `widgetQueries['widget_201'].where`
- Applies cumulative (AND) filter expressions to all visualization layers
- Sets "Selected streets" layer renderer: solid grey fill (151,151,151), 0.5pt outline (242,242,242), full opacity
- Moves "Selected streets" to bottom of layer stack on startup
- Injects SVG icons into Map Layers widget DOM via `calcite-list-item[title]` + `slot="content-start"`
- Does NOT toggle layer visibility — only modifies definition expressions

### map-tools
- Custom map tool buttons replacing built-in ExB map tools
- Source: `widgets-src/map-tools/`
- Basemap toggle: saves original basemap on load, toggles to satellite and back
- Distance measurement: creates/destroys `DistanceMeasurement2D` via `loadArcGISJSAPIModules`
- Fullscreen toggle

## Data Sources

- Portal: `https://Technion-GIS.maps.arcgis.com`
- Street segments: `services1.arcgis.com/yAQXemoDSgzdfV2A/.../TLV_joined_segment_20260228_135057/FeatureServer/1`
- Tree trunks: `services1.arcgis.com/yAQXemoDSgzdfV2A/.../TLV_tree_trunks_with_diameterUPD/FeatureServer/0`
- Web map item ID: `cd7330a117704c349e672ed34959f8a4`

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
- Map Layers widget uses Calcite `<calcite-list-item>` with Shadow DOM; layer names are in the `title` attribute
- New widgets require webpack restart (`npm start` in `client/`)

## Commands

- Build widgets: `cd <ExB>/client && npm start` (watch mode) or `npm run build`
- Run server: `cd <ExB>/server && npm start`
- App URL (local): `https://localhost:3001/experience/2/`
