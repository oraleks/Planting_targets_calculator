# Tel Aviv-Yafo Tree Planting Targets Calculator

A GIS-based web application for calculating tree planting targets based on street segment selection and configurable planting rules. Built with ESRI's Experience Builder for Developers (v1.19.0).

## Live App

**[https://oraleks.github.io/Planting_targets_calculator/](https://oraleks.github.io/Planting_targets_calculator/)**

## Overview

This tool allows urban planners to:

1. **Filter street segments** based on spatial and morphological criteria (shade index, transit centrality, building density, proximity to schools/transit, street width, etc.)
2. **Calculate planting targets** using two methods:
   - **Method 1 (TCCR):** Target Tree Canopy Cover Ratio — determines trees needed to reach a canopy cover target (global or by street width class)
   - **Method 2 (Fixed Spacing):** Determines tree counts based on physical distance between trunks
3. **Export results** as CSV or PDF reports

## Architecture

- **Framework:** ESRI Experience Builder 1.19.0
- **Map API:** ArcGIS JS API 4.34
- **UI:** Calcite Design System 3.3.3
- **Deployment:** GitHub Pages (static site from `cdn/7/`)

### Custom Widgets

| Widget | Purpose |
|---|---|
| `tree_potential_v2` | Core calculation engine — queries filtered street segments, computes planting targets by method, generates reports |
| `compact-filter` | Icon-based filter bar with live sliders — filters update the map instantly as the user drags |
| `filter-layer-sync` | Headless widget that syncs filter state to map layers, manages "Selected streets" symbology, injects layer icons, handles legend pop-out, and makes BDAR logo clickable |
| `map-tools` | Custom map tool buttons (basemap toggle between default/satellite, fullscreen) |

### Screen Layout (Desktop)

- **Header:** BDAR logo (left, clickable), title (center-left), Instructions + About buttons (right)
- **Left:** Fixed layers panel (300px) with layer visibility toggles and custom icons per layer; legends pop out to the right
- **Left (next to layers):** Map tool buttons — basemap toggle, fullscreen
- **Right sidebar** (collapsible): Filter icon bar at top (live sliders), tree planting calculator below
- **Tablet/Phone:** Simplified map-only view with filter-layer-sync for consistent symbology

### Filter System

10 filters with live-updating sliders (map updates instantly as you drag):

| Filter | Field | Type | Icon |
|---|---|---|---|
| Shade Index | summer_SI | Slider (< threshold) | Sun |
| Neighbourhood transit | class_2k | Slider (> class) | Pedestrian |
| City transit | class_5k | Slider (> class) | Car |
| Local centers | class_ai1k | Slider (> class) | Walking |
| Building density | FSI500_mea | Slider (> threshold) | Buildings |
| Commercial proximity | ARw500lm_1 | Slider (> threshold) | Shopping |
| School proximity | ADws_mean | Slider (< distance) | Education |
| Tram/metro proximity | ADwm_mean | Slider (< distance) | Transport |
| Bus stop proximity | ADwbu_mean | Slider (< distance) | Bus |
| Street width | width | Range slider (between) | Measure |

### Data Sources

- **Portal:** Technion-GIS ArcGIS Online
- **Street segments:** Feature service with attributes for shade, centrality, density, proximity metrics, and existing tree counts
- **Existing trees:** Tree trunk locations with crown diameter measurements

## Project Structure

```
├── cdn/7/                    # Compiled/deployable ExB app
│   ├── index.html            # App entry point (configured for GitHub Pages)
│   ├── config.json           # App configuration (widgets, layouts, data sources)
│   ├── widgets/              # Compiled widget bundles
│   └── resources/            # Icons, images
├── widgets-src/              # Custom widget source code
│   ├── compact-filter/       # Icon-based filter bar widget
│   │   ├── src/
│   │   │   ├── config.ts
│   │   │   ├── filter-definitions.ts   # All 10 filter definitions with icons
│   │   │   └── runtime/
│   │   │       ├── widget.tsx          # Main component with live SQL generation
│   │   │       ├── style.scss
│   │   │       └── assets/             # PNG icons
│   │   └── manifest.json
│   ├── filter-layer-sync/    # Filter-to-layer sync + UI enhancements
│   │   ├── src/
│   │   │   ├── config.ts
│   │   │   └── runtime/widget.tsx
│   │   └── manifest.json
│   ├── map-tools/            # Basemap toggle + fullscreen buttons
│   │   ├── src/
│   │   │   └── runtime/
│   │   │       ├── widget.tsx
│   │   │       └── style.scss
│   │   └── manifest.json
│   └── tree_potential_v2/    # Tree planting calculator
│       └── src/
│           └── runtime/widget.tsx
├── index.html                # Original entry point (references cdn/7/)
└── service-worker.js         # Caching (Workbox)
```

## Development

### Prerequisites

- ESRI Experience Builder Developer Edition 1.19.0
- Node.js 16+
- ArcGIS Online account with access to the data services

### Setup

1. Install ExB Developer Edition
2. Copy widget folders from `widgets-src/` to `<ExB>/client/your-extensions/widgets/`
3. Run `npm start` in both `client/` and `server/` directories
4. Copy app config to `<ExB>/server/public/apps/2/config.json`
5. Access the app at `https://localhost:3001/experience/2/`

### Building for Deployment

1. Patch `copy-webpack-plugin` if on Node 16: replace `.toSorted()` with `.sort()` in `node_modules/copy-webpack-plugin/dist/index.js`
2. Run `cd <ExB>/client && npm run build:dev`
3. Copy compiled widgets from `client/dist/widgets/` to `cdn/7/widgets/`
4. Update `cdn/7/config.json` from `server/public/apps/2/config.json`
5. For GitHub Pages: set `<base href>` and `mountPath` in `cdn/7/index.html`, set `buildNumber` to empty, set `isDevEdition` to false

### Deployment

The `gh-pages` branch contains the deployable static site. To update:
```bash
git subtree split --prefix=cdn/7 -b gh-pages
# Then manually fix index.html for GitHub Pages paths
git push origin gh-pages
```

## Credits

The calculator was developed at the Big Data in Architectural Research Lab (Faculty of Architecture and Town Planning, Technion Israel Institute of Technology) as part of a research project funded by the Israeli Ministry of Innovation, Science and Technology.

**Research team:** Or Aleksandrowicz, Sivan Sharabi, Evgeniya Bobkova, Daniel Rosenberg.

**Developers:** Evgeniya Bobkova and Or Aleksandrowicz.

**Data analysis and mapping:** Evgeniya Bobkova and Or Aleksandrowicz.

**Raw datasets:** Survey of Israel, Tel Aviv-Yafo Municipality, OpenStreetMap.
