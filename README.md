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
| `filter-layer-sync` | Synchronizes filter state with map layer display — applies cumulative definition expressions to visualization layers and manages "Selected streets" layer symbology |

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
│   └── filter-layer-sync/    # Filter-layer sync widget (TypeScript source)
│       ├── manifest.json
│       ├── config.json
│       └── src/
│           ├── config.ts
│           ├── runtime/widget.tsx
│           └── setting/setting.tsx
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
2. Copy `widgets-src/filter-layer-sync/` to `<ExB>/client/your-extensions/widgets/filter-layer-sync/`
3. The `tree_potential_v2` widget source should already be in `<ExB>/client/your-extensions/widgets/`
4. Run `npm start` in both `client/` and `server/` directories
5. Import or create the app in the ExB builder

### Filter-Layer Sync Widget

The `filter-layer-sync` widget is a headless widget that:

- Polls the filter widget's data source query for SQL changes
- Parses individual filter clauses from the combined SQL
- Applies the **cumulative** filter expression to all visualization layers (every layer shows only segments matching ALL active filters)
- Applies the same combined expression to the "Selected streets" layer
- Sets custom symbology on the "Selected streets" layer (solid grey fill, no outline)

## Credits

Analysis and mapping by Evgeniya Bobkova (evgeniyab@technion.ac.il) and Or Aleksandrowicz (oraleks@technion.ac.il)

Big Data in Architectural Research Lab, Technion — Israel Institute of Technology

Raw datasets: Survey of Israel, Tel Aviv Municipality, OpenStreetMap
