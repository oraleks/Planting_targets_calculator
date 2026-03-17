# CLAUDE.md

## Project Overview

Tel Aviv Tree Planting Targets Calculator — an ESRI Experience Builder 1.19.0 app for calculating street tree planting targets. The repo contains both the compiled/deployed build (`cdn/7/`) and custom widget source code (`widgets-src/`).

## Key Facts

- ExB version: 1.19.0, ArcGIS JS API 4.34
- The compiled build in `cdn/7/` is self-contained and deployable as a static site
- Custom widget source lives in `widgets-src/` and must be copied to an ExB Dev Edition install to compile
- The ExB dev environment is at `c:\Users\user\ExB\` (local only, not in repo)
- App config: `cdn/7/config.json` (~4500 lines) — contains all widget configs, layouts, data sources, filter definitions

## Custom Widgets

### tree_potential_v2
- Core calculation widget — queries street segments, computes planting targets via TCCR or fixed spacing methods
- Source: `<ExB>/client/your-extensions/widgets/tree_potential_v2/src/`
- Uses fields: length, width, W_type, Large_sum, Small_sum

### filter-layer-sync
- Headless widget that syncs filter state to map layer definition expressions
- Source: `widgets-src/filter-layer-sync/src/runtime/widget.tsx`
- Polls `DataSourceManager` for filter widget's SQL via `widgetQueries['widget_4'].where`
- Applies cumulative (AND) filter expressions to all visualization layers
- Sets "Selected streets" layer renderer: solid grey fill (151,151,151), no outline, full opacity
- Does NOT toggle layer visibility — only modifies definition expressions

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

## Commands

- Build widgets: `cd <ExB>/client && npm start` (watch mode) or `npm run build`
- Run server: `cd <ExB>/server && npm start`
- App URL (local): `https://localhost:3001/experience/2/`
