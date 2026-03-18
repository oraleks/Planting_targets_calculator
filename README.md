# Tel Aviv Tree Planting Targets Calculator

A GIS-based web application for calculating tree planting targets based on street segment selection and configurable planting rules. Built with ESRI's Experience Builder for Developers (v1.19.0).

## Overview

This tool allows urban planners to:

1. **Select street segments** for planting based on spatial and morphological criteria (shade index, transit centrality, building density, proximity to schools/transit, etc.)
2. **Calculate planting targets** using two methods:
   - **Method 1 (TCCR):** Target Tree Canopy Cover Ratio — determines trees needed to reach a canopy cover target
   - **Method 2 (Fixed Spacing):** Determines tree counts based on physical distance between trunks
3. **Export results** as CSV or PDF reports

## Architecture

- **Framework:** ESRI Experience Builder 1.19.0
- **Map API:** ArcGIS JS API 4.34
- **UI:** Calcite Design System 3.3.3

### Custom Widgets

| Widget | Purpose |
|---|---|
| `tree_potential_v2` | Core calculation engine — queries filtered street segments, computes planting targets by method, generates reports |
| `compact-filter` | Icon-based filter bar with slider/multi-select popovers — replaces the built-in ExB filter widget with a compact UI |
| `filter-layer-sync` | Headless widget that syncs filter state to map layers, manages "Selected streets" symbology, and injects layer icons |
| `map-tools` | Custom map tool buttons (basemap toggle, distance measurement, fullscreen) positioned next to the layers panel |

### Screen Layout

- **Left:** Fixed layers panel with layer visibility toggles and custom icons per layer
- **Right sidebar** (collapsible): Filter icon bar at top, tree planting calculator below
- **Left (next to layers):** Map tool buttons — basemap toggle (original/satellite), measure, fullscreen
- **Header:** Title, credits, About button (opens info dialog), BDAR logo

### Filter System

The compact-filter widget provides 10 filters via icon buttons with popovers:

| Filter | Field | Type | Icon |
|---|---|---|---|
| Summer Shade Index | summer_SI | Slider (< threshold) | Sun |
| Neighbourhood transit | class_2k | Multi-select (classes) | Pedestrian |
| City transit | class_5k | Multi-select (classes) | Car |
| Local centers | class_ai1k | Multi-select (classes) | Walking |
| Building density | FSI500_mea | Slider (> threshold) | Buildings |
| Shops & restaurants | ARw500lm_1 | Slider (> threshold) | Shopping |
| School proximity | ADws_mean | Slider (< distance) | Education |
| Tram/metro proximity | ADwm_mean | Slider (< distance) | Transport |
| Bus stop proximity | ADwbu_mean | Slider (< distance) | Bus |
| Street width | width | Range slider (between) | Measure |

Filters generate SQL via `DataSource.updateQueryParams()`. The filter-layer-sync widget polls for changes and applies cumulative definition expressions to all visualization layers.

### Data Sources

- **Street segments:** Feature service with attributes for shade, centrality, density, proximity metrics, and existing tree counts
- **Existing trees:** Tree trunk locations with crown diameter measurements

## Project Structure

```
├── cdn/7/                    # Compiled ExB app (build 7)
│   ├── config.json           # App configuration (widgets, layouts, data sources)
│   ├── widgets/              # Compiled widget bundles
│   └── resources/            # Icons, images
├── widgets-src/              # Custom widget source code
│   ├── compact-filter/       # Icon-based filter bar widget
│   │   ├── src/
│   │   │   ├── config.ts
│   │   │   ├── filter-definitions.ts   # All 10 filter definitions
│   │   │   └── runtime/
│   │   │       ├── widget.tsx          # Main component with SQL generation
│   │   │       ├── style.scss
│   │   │       └── assets/             # PNG icons (walking, education, transport, bus)
│   │   └── manifest.json
│   ├── filter-layer-sync/    # Filter-to-layer sync widget
│   │   ├── src/
│   │   │   ├── config.ts
│   │   │   └── runtime/widget.tsx
│   │   └── manifest.json
│   └── map-tools/            # Custom map tool buttons
│       ├── src/
│       │   └── runtime/
│       │       ├── widget.tsx
│       │       └── style.scss
│       └── manifest.json
├── index.html                # App entry point
└── service-worker.js         # Caching (Workbox)
```

## Development

### Prerequisites

- ESRI Experience Builder Developer Edition 1.19.0
- Node.js
- ArcGIS Online account with access to the data services

### Setup

1. Install ExB Developer Edition
2. Copy widget folders from `widgets-src/` to `<ExB>/client/your-extensions/widgets/`
3. The `tree_potential_v2` widget source should already be in `<ExB>/client/your-extensions/widgets/`
4. Run `npm start` in both `client/` and `server/` directories
5. Copy `cdn/7/` contents to `<ExB>/server/public/apps/2/` (or create a new app)
6. Access the app at `https://localhost:3001/experience/2/`

### Widget Development

Widgets are compiled by ExB's webpack in watch mode. After adding a new widget to `your-extensions/widgets/`, restart `npm start` in `client/`.

## Live App

**[https://oraleks.github.io/Planting_targets_calculator/](https://oraleks.github.io/Planting_targets_calculator/)**

## Credits

The calculator was developed at the Big Data in Architectural Research Lab (Faculty of Architecture and Town Planning, Technion Israel Institute of Technology) as part of a research project funded by the Israeli Ministry of Innovation, Science and Technology.

**Research team:** Or Aleksandrowicz, Sivan Sharabi, Evgeniya Bobkova, Daniel Rosenberg.

**Developers:** Evgeniya Bobkova and Or Aleksandrowicz.

**Data analysis and mapping:** Evgeniya Bobkova and Or Aleksandrowicz.

**Raw datasets:** Survey of Israel, Tel Aviv-Yafo Municipality, OpenStreetMap.
