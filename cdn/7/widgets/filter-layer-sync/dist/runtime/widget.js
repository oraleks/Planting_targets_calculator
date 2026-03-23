System.register(["jimu-core/emotion","jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/filter-layer-sync/src/runtime/widget.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ FilterLayerSyncWidget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");

/** @jsx jsx */
/** @jsxFrag React.Fragment */


const { useState, useEffect, useRef, useCallback } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
/**
 * Parse a combined SQL WHERE clause into individual filter clauses,
 * keyed by their field name.
 */
function parseFilterClauses(sql, knownFields) {
    const result = new Map();
    if (!sql || sql === '1=1')
        return result;
    // Temporarily replace BETWEEN...AND so we don't split on it
    const placeholder = '##BETWEEN_AND##';
    const safeSql = sql.replace(/BETWEEN\s+([\d.]+)\s+AND\s+([\d.]+)/gi, `BETWEEN $1 ${placeholder} $2`);
    const parts = safeSql.split(/\s+AND\s+/i);
    for (const part of parts) {
        let clause = part.trim().replace(new RegExp(placeholder, 'g'), 'AND');
        // Strip outer parentheses if present
        if (clause.startsWith('(') && clause.endsWith(')')) {
            clause = clause.slice(1, -1).trim();
        }
        // Match this clause to a known field
        for (const field of knownFields) {
            if (clause.toLowerCase().startsWith(field.toLowerCase())) {
                result.set(field, clause);
                break;
            }
        }
    }
    return result;
}
function FilterLayerSyncWidget(props) {
    var _a;
    const { config, useMapWidgetIds } = props;
    const [jimuMapView, setJimuMapView] = useState(null);
    const prevSqlRef = useRef('');
    const rendererApplied = useRef(false);
    const filterWidgetId = (config === null || config === void 0 ? void 0 : config.filterWidgetId) || 'widget_4';
    const selectedLayerTitle = (config === null || config === void 0 ? void 0 : config.selectedSegmentsLayerTitle) || 'Selected streets';
    const mappings = ((_a = config === null || config === void 0 ? void 0 : config.mappings) === null || _a === void 0 ? void 0 : _a.asMutable)
        ? config.mappings.asMutable({ deep: true })
        : ((config === null || config === void 0 ? void 0 : config.mappings) || []);
    const knownFields = mappings.map(m => m.filterField);
    // Find a FeatureLayer in the map by its title
    const findLayerByTitle = useCallback((title) => {
        var _a;
        if (!((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map))
            return null;
        return jimuMapView.view.map.allLayers.find((l) => l.title === title && l.type === 'feature') || null;
    }, [jimuMapView]);
    // Core sync logic: read filter SQL, apply definition expressions
    const syncFiltersToLayers = useCallback(() => {
        var _a, _b;
        if (!((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map))
            return;
        // Find the data source the filter widget targets
        const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance();
        let currentSql = '';
        let foundDsId = '';
        const allDs = dsManager.getDataSources();
        for (const dsId of Object.keys(allDs)) {
            const ds = allDs[dsId];
            const info = (_b = ds === null || ds === void 0 ? void 0 : ds.getInfo) === null || _b === void 0 ? void 0 : _b.call(ds);
            const widgetQueries = info === null || info === void 0 ? void 0 : info.widgetQueries;
            if (widgetQueries === null || widgetQueries === void 0 ? void 0 : widgetQueries[filterWidgetId]) {
                currentSql = widgetQueries[filterWidgetId].where || '';
                foundDsId = dsId;
                break;
            }
        }
        // Parse into individual clauses
        const activeClauses = parseFilterClauses(currentSql, knownFields);
        const allClauses = [...activeClauses.values()];
        const combinedSql = allClauses.length > 0 ? allClauses.join(' AND ') : '1=1';
        // Check if SQL changed OR if any layer's definitionExpression was reset
        const sqlChanged = currentSql !== prevSqlRef.current;
        let layerDrifted = false;
        if (!sqlChanged) {
            for (const mapping of mappings) {
                const layer = findLayerByTitle(mapping.layerTitle);
                if (layer && layer.definitionExpression !== combinedSql) {
                    layerDrifted = true;
                    break;
                }
            }
            if (!layerDrifted) {
                const selectedLayer = findLayerByTitle(selectedLayerTitle);
                if (selectedLayer && selectedLayer.definitionExpression !== combinedSql) {
                    layerDrifted = true;
                }
            }
        }
        if (!sqlChanged && !layerDrifted)
            return;
        prevSqlRef.current = currentSql;
        expectedSqlRef.current = combinedSql;
        // Apply combined SQL to ALL visualization layers
        for (const mapping of mappings) {
            const layer = findLayerByTitle(mapping.layerTitle);
            if (!layer)
                continue;
            layer.definitionExpression = combinedSql;
        }
        // Apply same combined SQL to "Selected streets" layer
        const selectedLayer = findLayerByTitle(selectedLayerTitle);
        if (selectedLayer) {
            selectedLayer.definitionExpression = combinedSql;
        }
    }, [
        jimuMapView, filterWidgetId, knownFields, mappings,
        findLayerByTitle, selectedLayerTitle
    ]);
    // On startup: apply renderer, move "Selected streets" to back, set as only visible layer
    useEffect(() => {
        var _a;
        if (!((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) || rendererApplied.current)
            return;
        const initSelectedLayer = () => {
            const map = jimuMapView.view.map;
            const selectedLayer = findLayerByTitle(selectedLayerTitle);
            if (!selectedLayer)
                return;
            // Apply custom renderer
            selectedLayer.opacity = 1.0;
            selectedLayer.renderer = {
                type: 'simple',
                symbol: {
                    type: 'simple-fill',
                    color: [151, 151, 151, 1],
                    outline: {
                        color: [80, 80, 80, 1],
                        width: 0.5
                    }
                }
            };
            // Move "Selected streets" to bottom (index 0 = drawn first = behind everything)
            map.layers.remove(selectedLayer);
            map.layers.add(selectedLayer, 0);
            // Turn off all attribute layers, turn on only "Selected streets"
            for (const mapping of mappings) {
                const layer = findLayerByTitle(mapping.layerTitle);
                if (layer)
                    layer.visible = false;
            }
            selectedLayer.visible = true;
            rendererApplied.current = true;
        };
        // Try immediately, then retry after layers load
        initSelectedLayer();
        if (!rendererApplied.current) {
            const timeout = setTimeout(initSelectedLayer, 2000);
            return () => clearTimeout(timeout);
        }
    }, [jimuMapView, findLayerByTitle, selectedLayerTitle]);
    // Guard layers against external definitionExpression resets (e.g. popups)
    const expectedSqlRef = useRef('1=1');
    const guardingRef = useRef(false);
    useEffect(() => {
        var _a;
        if (!((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) || guardingRef.current)
            return;
        const handles = [];
        const setupGuards = () => {
            const allLayerTitles = [...mappings.map(m => m.layerTitle), selectedLayerTitle];
            for (const title of allLayerTitles) {
                const layer = findLayerByTitle(title);
                if (!layer)
                    continue;
                const handle = layer.watch('definitionExpression', (newVal) => {
                    const expected = expectedSqlRef.current;
                    if (newVal !== expected) {
                        layer.definitionExpression = expected;
                    }
                });
                handles.push(handle);
            }
            if (handles.length > 0)
                guardingRef.current = true;
        };
        setupGuards();
        // Retry if layers aren't loaded yet
        if (!guardingRef.current) {
            const t = setTimeout(setupGuards, 3000);
            return () => clearTimeout(t);
        }
        return () => handles.forEach(h => { var _a; return (_a = h.remove) === null || _a === void 0 ? void 0 : _a.call(h); });
    }, [jimuMapView, mappings, selectedLayerTitle, findLayerByTitle]);
    // Poll for filter changes
    useEffect(() => {
        if (!jimuMapView)
            return;
        const interval = setInterval(syncFiltersToLayers, 500);
        syncFiltersToLayers();
        return () => clearInterval(interval);
    }, [jimuMapView, syncFiltersToLayers]);
    // --- Inject icons into the Map Layers widget ---
    // Icons are cloned from the compact-filter widget's rendered DOM so they
    // are always identical.  Only "Existing trees" and "Selected streets" have
    // standalone SVGs because they have no corresponding filter.
    useEffect(() => {
        // Map layer titles → filter field names (used to find the matching
        // compact-filter icon element).  Order matches FILTER_DEFINITIONS.
        const layerToField = {
            'Spring/Summer Shade Index': 'summer_SI',
            'Neighbourhood transit': 'class_2k',
            'City transit': 'class_5k',
            'Local centers': 'class_ai1k',
            'Building density': 'FSI500_mea',
            'Access to shops and restaurants': 'ARw500lm_1',
            'School or preschool proximity': 'ADws_mean',
            'Tram, metro or railway station proximity': 'ADwm_mean',
            'Bus stop proximity': 'ADwbu_mean'
        };
        // Layers with no corresponding filter get a standalone SVG
        const standaloneIcons = {
            'Existing trees': '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABvEAYAAACyVUIjAAAFSWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjExMSIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjExMSIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjExMSIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTExIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI0MDAvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNDAwLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQ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" style="width:16px;height:16px;filter:brightness(0) invert(0.85);" />',
            'Selected streets': '<img src="data:image/png;base64,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" style="width:16px;height:16px;filter:brightness(0) invert(0.85);" />'
        };
        // Build a cache of filter field → icon HTML by reading the compact-filter DOM
        const getFilterIconHtml = (field) => {
            // compact-filter renders icons inside .compact-filter-icon divs
            // Each icon div has a data-field or we identify by order
            const iconEls = document.querySelectorAll('.compact-filter-icon');
            // FILTER_DEFINITIONS order: summer_SI, class_2k, class_5k, class_ai1k,
            // FSI500_mea, ARw500lm_1, ADws_mean, ADwm_mean, ADwbu_mean, width
            const fieldOrder = [
                'summer_SI', 'class_2k', 'class_5k', 'class_ai1k',
                'FSI500_mea', 'ARw500lm_1', 'ADws_mean', 'ADwm_mean', 'ADwbu_mean', 'width'
            ];
            const idx = fieldOrder.indexOf(field);
            if (idx < 0 || idx >= iconEls.length)
                return null;
            const iconEl = iconEls[idx];
            // Clone the inner content (svg span or img)
            const inner = iconEl.querySelector('span, img');
            if (!inner)
                return null;
            return inner.outerHTML;
        };
        const injectIcons = () => {
            const listItems = document.querySelectorAll('calcite-list-item');
            listItems.forEach((item) => {
                const title = item.getAttribute('title') || '';
                if (!title)
                    return;
                if (item.querySelector('.layer-custom-icon'))
                    return;
                let iconHtml = null;
                // Try to clone from the compact-filter DOM
                const field = layerToField[title];
                if (field) {
                    iconHtml = getFilterIconHtml(field);
                }
                // Fall back to standalone icons for non-filter layers
                if (!iconHtml && standaloneIcons[title]) {
                    iconHtml = standaloneIcons[title];
                }
                if (!iconHtml)
                    return;
                const iconSpan = document.createElement('span');
                iconSpan.className = 'layer-custom-icon';
                iconSpan.innerHTML = iconHtml;
                iconSpan.setAttribute('slot', 'content-start');
                iconSpan.style.cssText = 'display:inline-flex;width:16px;height:16px;min-width:16px;color:#aaa;';
                // Ensure consistent sizing on all child svg/img elements
                const svgEl = iconSpan.querySelector('svg');
                if (svgEl) {
                    svgEl.style.width = '16px';
                    svgEl.style.height = '16px';
                }
                const imgEl = iconSpan.querySelector('img');
                if (imgEl) {
                    imgEl.style.width = '16px';
                    imgEl.style.height = '16px';
                }
                item.appendChild(iconSpan);
            });
        };
        const interval = setInterval(injectIcons, 2000);
        setTimeout(injectIcons, 3000);
        return () => clearInterval(interval);
    }, []);
    // --- Legend pop-out: move legends to a floating panel right of the sidebar ---
    useEffect(() => {
        const styleId = 'filter-layer-sync-legend-popout';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
        .legend-popout-panel {
          position: fixed;
          z-index: 500;
          background: #1e1e1e;
          border: 1px solid #444;
          border-radius: 6px;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
          padding: 8px 10px;
          max-width: 300px;
          max-height: 400px;
          overflow-y: auto;
        }
        .legend-popout-panel .esri-legend {
          background: transparent !important;
          padding: 0 !important;
          color: #eee !important;
        }
        .legend-popout-panel .esri-legend__service {
          padding: 0 !important;
        }
        .legend-popout-panel .esri-legend__layer-caption {
          color: #ccc !important;
          font-size: 11px !important;
        }
        .legend-popout-panel .esri-legend__layer-cell--info {
          color: #bbb !important;
          font-size: 11px !important;
        }
        /* Hide legends inside the layers panel — only the direct wrapper */
        [data-widgetid="widget_94"] .esri-legend {
          display: none !important;
        }
        /* Calcite shadow DOM: collapse the content-bottom slot area */
        [data-widgetid="widget_94"] calcite-list-item::part(content-bottom) {
          max-height: 0 !important;
          overflow: hidden !important;
          padding: 0 !important;
          margin: 0 !important;
        }
      `;
            document.head.appendChild(style);
        }
        const popoutId = 'legend-popout-container';
        let movedLegend = null;
        let legendOriginalParent = null;
        let trackedListItem = null;
        let collapsedAncestors = [];
        const moveLegendToPopout = (legend) => {
            const layersPanel = document.querySelector('[data-widgetid="widget_94"]');
            if (!layersPanel)
                return;
            // Find parent calcite-list-item
            let listItem = legend;
            while (listItem && listItem.tagName !== 'CALCITE-LIST-ITEM') {
                listItem = listItem.parentElement;
            }
            if (!listItem)
                return;
            legendOriginalParent = legend.parentElement;
            trackedListItem = listItem;
            movedLegend = legend;
            // Collapse all ancestors between legend and list item
            collapsedAncestors = [];
            let ancestor = legend.parentElement;
            while (ancestor && ancestor !== listItem) {
                ancestor.style.cssText = 'max-height:0!important;overflow:hidden!important;padding:0!important;margin:0!important;';
                collapsedAncestors.push(ancestor);
                ancestor = ancestor.parentElement;
            }
            // Create floating panel and move the legend into it
            let panel = document.getElementById(popoutId);
            if (!panel) {
                panel = document.createElement('div');
                panel.id = popoutId;
                panel.className = 'legend-popout-panel';
                document.body.appendChild(panel);
            }
            panel.innerHTML = '';
            panel.appendChild(legend);
            // Position
            const panelRect = layersPanel.getBoundingClientRect();
            const itemRect = listItem.getBoundingClientRect();
            panel.style.left = (panelRect.right + 6) + 'px';
            panel.style.top = Math.max(itemRect.top, panelRect.top) + 'px';
        };
        const cleanupPopout = () => {
            const panel = document.getElementById(popoutId);
            if (panel)
                panel.remove();
            collapsedAncestors.forEach(el => { el.style.cssText = ''; });
            collapsedAncestors = [];
            movedLegend = null;
            legendOriginalParent = null;
            trackedListItem = null;
        };
        // Use MutationObserver to detect legend appearing/disappearing instantly
        const layersPanelCheck = () => document.querySelector('[data-widgetid="widget_94"]');
        let observer = null;
        const setupObserver = () => {
            const layersPanel = layersPanelCheck();
            if (!layersPanel)
                return;
            observer = new MutationObserver(() => {
                const legends = layersPanel.querySelectorAll('.esri-legend.esri-widget');
                if (movedLegend) {
                    // Check if original parent was removed from DOM (legend toggled off)
                    if (legendOriginalParent && !document.body.contains(legendOriginalParent)) {
                        cleanupPopout();
                        return;
                    }
                    // Check if legend element was destroyed
                    const popout = document.getElementById(popoutId);
                    const legendStillInPopout = popout && popout.contains(movedLegend);
                    if (!document.body.contains(movedLegend) && !legendStillInPopout) {
                        cleanupPopout();
                        return;
                    }
                    // A different legend appeared — move that one instead
                    if (legends.length > 0) {
                        const newLegend = legends[0];
                        if (newLegend !== movedLegend && newLegend.querySelector('.esri-legend__layer-row')) {
                            cleanupPopout();
                            moveLegendToPopout(newLegend);
                        }
                    }
                    return;
                }
                // No legend currently moved — check for new ones
                for (let i = 0; i < legends.length; i++) {
                    const legend = legends[i];
                    if (legend.querySelector('.esri-legend__layer-row')) {
                        moveLegendToPopout(legend);
                        break;
                    }
                }
            });
            observer.observe(layersPanel, { childList: true, subtree: true });
        };
        // Wait for layers panel to appear, then set up observer
        const waitForPanel = setInterval(() => {
            if (layersPanelCheck()) {
                clearInterval(waitForPanel);
                setupObserver();
            }
        }, 500);
        // Poll for position updates and cleanup detection
        const positionInterval = setInterval(() => {
            if (!movedLegend || !trackedListItem)
                return;
            // Cleanup if original parent was removed (toggle off)
            if (legendOriginalParent && !document.body.contains(legendOriginalParent)) {
                cleanupPopout();
                return;
            }
            const popout = document.getElementById(popoutId);
            if (!popout)
                return;
            const layersPanel = layersPanelCheck();
            if (!layersPanel)
                return;
            const panelRect = layersPanel.getBoundingClientRect();
            const itemRect = trackedListItem.getBoundingClientRect();
            popout.style.left = (panelRect.right + 6) + 'px';
            popout.style.top = Math.max(itemRect.top, panelRect.top) + 'px';
        }, 300);
        return () => {
            clearInterval(waitForPanel);
            clearInterval(positionInterval);
            if (observer)
                observer.disconnect();
            cleanupPopout();
            const styleEl = document.getElementById(styleId);
            if (styleEl)
                styleEl.remove();
        };
    }, []);
    // --- Force instruction dialog to show from top ---
    useEffect(() => {
        let wasVisible = false;
        let scrollTimer = null;
        const scrollDialogToTop = () => {
            const widget = document.querySelector('[data-widgetid="widget_141"]');
            const isVisible = widget && widget.getBoundingClientRect().height > 0;
            if (!isVisible) {
                wasVisible = false;
                if (scrollTimer) {
                    clearInterval(scrollTimer);
                    scrollTimer = null;
                }
                return;
            }
            if (wasVisible)
                return;
            wasVisible = true;
            // Aggressively reset scroll every 50ms for 2 seconds
            let count = 0;
            scrollTimer = setInterval(() => {
                document.querySelectorAll('.jimu-scrollable-scroll-container').forEach((el) => {
                    if (el.scrollTop > 0) {
                        el.scrollTop = 0;
                    }
                });
                count++;
                if (count > 40) {
                    clearInterval(scrollTimer);
                    scrollTimer = null;
                }
            }, 50);
        };
        const interval = setInterval(scrollDialogToTop, 300);
        return () => {
            clearInterval(interval);
            if (scrollTimer)
                clearInterval(scrollTimer);
        };
    }, []);
    // --- Force header button styles (white text, no underline) ---
    useEffect(() => {
        const styleId = 'header-button-styles';
        if (document.getElementById(styleId))
            return;
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
      [data-widgetid="widget_202"] a,
      [data-widgetid="widget_202"] button,
      [data-widgetid="widget_202"] span,
      [data-widgetid="widget_204"] a,
      [data-widgetid="widget_204"] button,
      [data-widgetid="widget_204"] span {
        color: #ffffff !important;
        text-decoration: none !important;
        font-size: 14px !important;
      }
      [data-widgetid="widget_202"] a:hover,
      [data-widgetid="widget_204"] a:hover {
        text-decoration: underline !important;
      }
    `;
        document.head.appendChild(style);
        return () => {
            const el = document.getElementById(styleId);
            if (el)
                el.remove();
        };
    }, []);
    // --- Make BDAR logo clickable ---
    useEffect(() => {
        const makeLogoClickable = () => {
            const logoWidget = document.querySelector('[data-widgetid="widget_107"]');
            if (!logoWidget || logoWidget.dataset.linkAttached)
                return;
            logoWidget.style.cursor = 'pointer';
            logoWidget.addEventListener('click', () => {
                window.open('https://oraleks.net.technion.ac.il/en/bdar-lab/', '_blank');
            });
            logoWidget.dataset.linkAttached = 'true';
        };
        const interval = setInterval(makeLogoClickable, 1000);
        makeLogoClickable();
        return () => clearInterval(interval);
    }, []);
    // Headless widget — only the JimuMapViewComponent connector
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'none' }, children: (useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds[0]) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: useMapWidgetIds[0], onActiveViewChange: setJimuMapView })) }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItbGF5ZXItc3luYy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFDZiw4QkFBOEI7QUFDZ0Q7QUFDVjtBQUdwRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsNENBQUs7QUFFMUQ7OztHQUdHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FDekIsR0FBVyxFQUNYLFdBQXFCO0lBRXJCLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxFQUFrQjtJQUN4QyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLO1FBQUUsT0FBTyxNQUFNO0lBRXhDLDREQUE0RDtJQUM1RCxNQUFNLFdBQVcsR0FBRyxpQkFBaUI7SUFDckMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FDekIsdUNBQXVDLEVBQ3ZDLGNBQWMsV0FBVyxLQUFLLENB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SCxHQUNHLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0ZXItbGF5ZXItc3luYy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCB0eXBlIEFsbFdpZGdldFByb3BzLCBEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnLCBGaWx0ZXJMYXllck1hcHBpbmcgfSBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9ID0gUmVhY3RcblxuLyoqXG4gKiBQYXJzZSBhIGNvbWJpbmVkIFNRTCBXSEVSRSBjbGF1c2UgaW50byBpbmRpdmlkdWFsIGZpbHRlciBjbGF1c2VzLFxuICoga2V5ZWQgYnkgdGhlaXIgZmllbGQgbmFtZS5cbiAqL1xuZnVuY3Rpb24gcGFyc2VGaWx0ZXJDbGF1c2VzIChcbiAgc3FsOiBzdHJpbmcsXG4gIGtub3duRmllbGRzOiBzdHJpbmdbXVxuKTogTWFwPHN0cmluZywgc3RyaW5nPiB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcbiAgaWYgKCFzcWwgfHwgc3FsID09PSAnMT0xJykgcmV0dXJuIHJlc3VsdFxuXG4gIC8vIFRlbXBvcmFyaWx5IHJlcGxhY2UgQkVUV0VFTi4uLkFORCBzbyB3ZSBkb24ndCBzcGxpdCBvbiBpdFxuICBjb25zdCBwbGFjZWhvbGRlciA9ICcjI0JFVFdFRU5fQU5EIyMnXG4gIGNvbnN0IHNhZmVTcWwgPSBzcWwucmVwbGFjZShcbiAgICAvQkVUV0VFTlxccysoW1xcZC5dKylcXHMrQU5EXFxzKyhbXFxkLl0rKS9naSxcbiAgICBgQkVUV0VFTiAkMSAke3BsYWNlaG9sZGVyfSAkMmBcbiAgKVxuXG4gIGNvbnN0IHBhcnRzID0gc2FmZVNxbC5zcGxpdCgvXFxzK0FORFxccysvaSlcblxuICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICBsZXQgY2xhdXNlID0gcGFydC50cmltKCkucmVwbGFjZShuZXcgUmVnRXhwKHBsYWNlaG9sZGVyLCAnZycpLCAnQU5EJylcblxuICAgIC8vIFN0cmlwIG91dGVyIHBhcmVudGhlc2VzIGlmIHByZXNlbnRcbiAgICBpZiAoY2xhdXNlLnN0YXJ0c1dpdGgoJygnKSAmJiBjbGF1c2UuZW5kc1dpdGgoJyknKSkge1xuICAgICAgY2xhdXNlID0gY2xhdXNlLnNsaWNlKDEsIC0xKS50cmltKClcbiAgICB9XG5cbiAgICAvLyBNYXRjaCB0aGlzIGNsYXVzZSB0byBhIGtub3duIGZpZWxkXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBrbm93bkZpZWxkcykge1xuICAgICAgaWYgKGNsYXVzZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoZmllbGQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgcmVzdWx0LnNldChmaWVsZCwgY2xhdXNlKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsdGVyTGF5ZXJTeW5jV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IHsgY29uZmlnLCB1c2VNYXBXaWRnZXRJZHMgfSA9IHByb3BzXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXcgfCBudWxsPihudWxsKVxuICBjb25zdCBwcmV2U3FsUmVmID0gdXNlUmVmPHN0cmluZz4oJycpXG4gIGNvbnN0IHJlbmRlcmVyQXBwbGllZCA9IHVzZVJlZjxib29sZWFuPihmYWxzZSlcblxuICBjb25zdCBmaWx0ZXJXaWRnZXRJZCA9IGNvbmZpZz8uZmlsdGVyV2lkZ2V0SWQgfHwgJ3dpZGdldF80J1xuICBjb25zdCBzZWxlY3RlZExheWVyVGl0bGUgPSBjb25maWc/LnNlbGVjdGVkU2VnbWVudHNMYXllclRpdGxlIHx8ICdTZWxlY3RlZCBzdHJlZXRzJ1xuICBjb25zdCBtYXBwaW5nczogRmlsdGVyTGF5ZXJNYXBwaW5nW10gPSAoY29uZmlnPy5tYXBwaW5ncyBhcyBhbnkpPy5hc011dGFibGVcbiAgICA/IChjb25maWcubWFwcGluZ3MgYXMgYW55KS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gICAgOiAoY29uZmlnPy5tYXBwaW5ncyB8fCBbXSkgYXMgYW55XG4gIGNvbnN0IGtub3duRmllbGRzID0gbWFwcGluZ3MubWFwKG0gPT4gbS5maWx0ZXJGaWVsZClcblxuICAvLyBGaW5kIGEgRmVhdHVyZUxheWVyIGluIHRoZSBtYXAgYnkgaXRzIHRpdGxlXG4gIGNvbnN0IGZpbmRMYXllckJ5VGl0bGUgPSB1c2VDYWxsYmFjayhcbiAgICAodGl0bGU6IHN0cmluZyk6IGFueSA9PiB7XG4gICAgICBpZiAoIWppbXVNYXBWaWV3Py52aWV3Py5tYXApIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQoXG4gICAgICAgIChsOiBhbnkpID0+IGwudGl0bGUgPT09IHRpdGxlICYmIGwudHlwZSA9PT0gJ2ZlYXR1cmUnXG4gICAgICApIHx8IG51bGxcbiAgICB9LFxuICAgIFtqaW11TWFwVmlld11cbiAgKVxuXG4gIC8vIENvcmUgc3luYyBsb2dpYzogcmVhZCBmaWx0ZXIgU1FMLCBhcHBseSBkZWZpbml0aW9uIGV4cHJlc3Npb25zXG4gIGNvbnN0IHN5bmNGaWx0ZXJzVG9MYXllcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFqaW11TWFwVmlldz8udmlldz8ubWFwKSByZXR1cm5cblxuICAgIC8vIEZpbmQgdGhlIGRhdGEgc291cmNlIHRoZSBmaWx0ZXIgd2lkZ2V0IHRhcmdldHNcbiAgICBjb25zdCBkc01hbmFnZXIgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgbGV0IGN1cnJlbnRTcWwgPSAnJ1xuICAgIGxldCBmb3VuZERzSWQgPSAnJ1xuICAgIGNvbnN0IGFsbERzID0gZHNNYW5hZ2VyLmdldERhdGFTb3VyY2VzKClcbiAgICBmb3IgKGNvbnN0IGRzSWQgb2YgT2JqZWN0LmtleXMoYWxsRHMpKSB7XG4gICAgICBjb25zdCBkcyA9IGFsbERzW2RzSWRdXG4gICAgICBjb25zdCBpbmZvID0gZHM/LmdldEluZm8/LigpXG4gICAgICBjb25zdCB3aWRnZXRRdWVyaWVzID0gKGluZm8gYXMgYW55KT8ud2lkZ2V0UXVlcmllc1xuICAgICAgaWYgKHdpZGdldFF1ZXJpZXM/LltmaWx0ZXJXaWRnZXRJZF0pIHtcbiAgICAgICAgY3VycmVudFNxbCA9IHdpZGdldFF1ZXJpZXNbZmlsdGVyV2lkZ2V0SWRdLndoZXJlIHx8ICcnXG4gICAgICAgIGZvdW5kRHNJZCA9IGRzSWRcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQYXJzZSBpbnRvIGluZGl2aWR1YWwgY2xhdXNlc1xuICAgIGNvbnN0IGFjdGl2ZUNsYXVzZXMgPSBwYXJzZUZpbHRlckNsYXVzZXMoY3VycmVudFNxbCwga25vd25GaWVsZHMpXG4gICAgY29uc3QgYWxsQ2xhdXNlcyA9IFsuLi5hY3RpdmVDbGF1c2VzLnZhbHVlcygpXVxuICAgIGNvbnN0IGNvbWJpbmVkU3FsID0gYWxsQ2xhdXNlcy5sZW5ndGggPiAwID8gYWxsQ2xhdXNlcy5qb2luKCcgQU5EICcpIDogJzE9MSdcblxuICAgIC8vIENoZWNrIGlmIFNRTCBjaGFuZ2VkIE9SIGlmIGFueSBsYXllcidzIGRlZmluaXRpb25FeHByZXNzaW9uIHdhcyByZXNldFxuICAgIGNvbnN0IHNxbENoYW5nZWQgPSBjdXJyZW50U3FsICE9PSBwcmV2U3FsUmVmLmN1cnJlbnRcbiAgICBsZXQgbGF5ZXJEcmlmdGVkID0gZmFsc2VcbiAgICBpZiAoIXNxbENoYW5nZWQpIHtcbiAgICAgIGZvciAoY29uc3QgbWFwcGluZyBvZiBtYXBwaW5ncykge1xuICAgICAgICBjb25zdCBsYXllciA9IGZpbmRMYXllckJ5VGl0bGUobWFwcGluZy5sYXllclRpdGxlKVxuICAgICAgICBpZiAobGF5ZXIgJiYgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gIT09IGNvbWJpbmVkU3FsKSB7XG4gICAgICAgICAgbGF5ZXJEcmlmdGVkID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghbGF5ZXJEcmlmdGVkKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXIgPSBmaW5kTGF5ZXJCeVRpdGxlKHNlbGVjdGVkTGF5ZXJUaXRsZSlcbiAgICAgICAgaWYgKHNlbGVjdGVkTGF5ZXIgJiYgc2VsZWN0ZWRMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiAhPT0gY29tYmluZWRTcWwpIHtcbiAgICAgICAgICBsYXllckRyaWZ0ZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNxbENoYW5nZWQgJiYgIWxheWVyRHJpZnRlZCkgcmV0dXJuXG4gICAgcHJldlNxbFJlZi5jdXJyZW50ID0gY3VycmVudFNxbFxuICAgIGV4cGVjdGVkU3FsUmVmLmN1cnJlbnQgPSBjb21iaW5lZFNxbFxuXG4gICAgLy8gQXBwbHkgY29tYmluZWQgU1FMIHRvIEFMTCB2aXN1YWxpemF0aW9uIGxheWVyc1xuICAgIGZvciAoY29uc3QgbWFwcGluZyBvZiBtYXBwaW5ncykge1xuICAgICAgY29uc3QgbGF5ZXIgPSBmaW5kTGF5ZXJCeVRpdGxlKG1hcHBpbmcubGF5ZXJUaXRsZSlcbiAgICAgIGlmICghbGF5ZXIpIGNvbnRpbnVlXG4gICAgICBsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGNvbWJpbmVkU3FsXG4gICAgfVxuXG4gICAgLy8gQXBwbHkgc2FtZSBjb21iaW5lZCBTUUwgdG8gXCJTZWxlY3RlZCBzdHJlZXRzXCIgbGF5ZXJcbiAgICBjb25zdCBzZWxlY3RlZExheWVyID0gZmluZExheWVyQnlUaXRsZShzZWxlY3RlZExheWVyVGl0bGUpXG4gICAgaWYgKHNlbGVjdGVkTGF5ZXIpIHtcbiAgICAgIHNlbGVjdGVkTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBjb21iaW5lZFNxbFxuICAgIH1cbiAgfSwgW1xuICAgIGppbXVNYXBWaWV3LCBmaWx0ZXJXaWRnZXRJZCwga25vd25GaWVsZHMsIG1hcHBpbmdzLFxuICAgIGZpbmRMYXllckJ5VGl0bGUsIHNlbGVjdGVkTGF5ZXJUaXRsZVxuICBdKVxuXG4gIC8vIE9uIHN0YXJ0dXA6IGFwcGx5IHJlbmRlcmVyLCBtb3ZlIFwiU2VsZWN0ZWQgc3RyZWV0c1wiIHRvIGJhY2ssIHNldCBhcyBvbmx5IHZpc2libGUgbGF5ZXJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWppbXVNYXBWaWV3Py52aWV3Py5tYXAgfHwgcmVuZGVyZXJBcHBsaWVkLmN1cnJlbnQpIHJldHVyblxuXG4gICAgY29uc3QgaW5pdFNlbGVjdGVkTGF5ZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtYXAgPSBqaW11TWFwVmlldy52aWV3Lm1hcFxuICAgICAgY29uc3Qgc2VsZWN0ZWRMYXllciA9IGZpbmRMYXllckJ5VGl0bGUoc2VsZWN0ZWRMYXllclRpdGxlKVxuICAgICAgaWYgKCFzZWxlY3RlZExheWVyKSByZXR1cm5cblxuICAgICAgLy8gQXBwbHkgY3VzdG9tIHJlbmRlcmVyXG4gICAgICBzZWxlY3RlZExheWVyLm9wYWNpdHkgPSAxLjBcbiAgICAgIHNlbGVjdGVkTGF5ZXIucmVuZGVyZXIgPSB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICAgIGNvbG9yOiBbMTUxLCAxNTEsIDE1MSwgMV0sXG4gICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgY29sb3I6IFs4MCwgODAsIDgwLCAxXSxcbiAgICAgICAgICAgIHdpZHRoOiAwLjVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gYXMgYW55XG5cbiAgICAgIC8vIE1vdmUgXCJTZWxlY3RlZCBzdHJlZXRzXCIgdG8gYm90dG9tIChpbmRleCAwID0gZHJhd24gZmlyc3QgPSBiZWhpbmQgZXZlcnl0aGluZylcbiAgICAgIG1hcC5sYXllcnMucmVtb3ZlKHNlbGVjdGVkTGF5ZXIpXG4gICAgICBtYXAubGF5ZXJzLmFkZChzZWxlY3RlZExheWVyLCAwKVxuXG4gICAgICAvLyBUdXJuIG9mZiBhbGwgYXR0cmlidXRlIGxheWVycywgdHVybiBvbiBvbmx5IFwiU2VsZWN0ZWQgc3RyZWV0c1wiXG4gICAgICBmb3IgKGNvbnN0IG1hcHBpbmcgb2YgbWFwcGluZ3MpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBmaW5kTGF5ZXJCeVRpdGxlKG1hcHBpbmcubGF5ZXJUaXRsZSlcbiAgICAgICAgaWYgKGxheWVyKSBsYXllci52aXNpYmxlID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIHNlbGVjdGVkTGF5ZXIudmlzaWJsZSA9IHRydWVcblxuICAgICAgcmVuZGVyZXJBcHBsaWVkLmN1cnJlbnQgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gVHJ5IGltbWVkaWF0ZWx5LCB0aGVuIHJldHJ5IGFmdGVyIGxheWVycyBsb2FkXG4gICAgaW5pdFNlbGVjdGVkTGF5ZXIoKVxuICAgIGlmICghcmVuZGVyZXJBcHBsaWVkLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGluaXRTZWxlY3RlZExheWVyLCAyMDAwKVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIH1cbiAgfSwgW2ppbXVNYXBWaWV3LCBmaW5kTGF5ZXJCeVRpdGxlLCBzZWxlY3RlZExheWVyVGl0bGVdKVxuXG4gIC8vIEd1YXJkIGxheWVycyBhZ2FpbnN0IGV4dGVybmFsIGRlZmluaXRpb25FeHByZXNzaW9uIHJlc2V0cyAoZS5nLiBwb3B1cHMpXG4gIGNvbnN0IGV4cGVjdGVkU3FsUmVmID0gdXNlUmVmPHN0cmluZz4oJzE9MScpXG4gIGNvbnN0IGd1YXJkaW5nUmVmID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghamltdU1hcFZpZXc/LnZpZXc/Lm1hcCB8fCBndWFyZGluZ1JlZi5jdXJyZW50KSByZXR1cm5cbiAgICBjb25zdCBoYW5kbGVzOiBhbnlbXSA9IFtdXG5cbiAgICBjb25zdCBzZXR1cEd1YXJkcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFsbExheWVyVGl0bGVzID0gWy4uLm1hcHBpbmdzLm1hcChtID0+IG0ubGF5ZXJUaXRsZSksIHNlbGVjdGVkTGF5ZXJUaXRsZV1cbiAgICAgIGZvciAoY29uc3QgdGl0bGUgb2YgYWxsTGF5ZXJUaXRsZXMpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBmaW5kTGF5ZXJCeVRpdGxlKHRpdGxlKVxuICAgICAgICBpZiAoIWxheWVyKSBjb250aW51ZVxuICAgICAgICBjb25zdCBoYW5kbGUgPSBsYXllci53YXRjaCgnZGVmaW5pdGlvbkV4cHJlc3Npb24nLCAobmV3VmFsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IGV4cGVjdGVkU3FsUmVmLmN1cnJlbnRcbiAgICAgICAgICBpZiAobmV3VmFsICE9PSBleHBlY3RlZCkge1xuICAgICAgICAgICAgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBleHBlY3RlZFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaGFuZGxlcy5wdXNoKGhhbmRsZSlcbiAgICAgIH1cbiAgICAgIGlmIChoYW5kbGVzLmxlbmd0aCA+IDApIGd1YXJkaW5nUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgfVxuXG4gICAgc2V0dXBHdWFyZHMoKVxuICAgIC8vIFJldHJ5IGlmIGxheWVycyBhcmVuJ3QgbG9hZGVkIHlldFxuICAgIGlmICghZ3VhcmRpbmdSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgdCA9IHNldFRpbWVvdXQoc2V0dXBHdWFyZHMsIDMwMDApXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHQpXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBoYW5kbGVzLmZvckVhY2goaCA9PiBoLnJlbW92ZT8uKCkpXG4gIH0sIFtqaW11TWFwVmlldywgbWFwcGluZ3MsIHNlbGVjdGVkTGF5ZXJUaXRsZSwgZmluZExheWVyQnlUaXRsZV0pXG5cbiAgLy8gUG9sbCBmb3IgZmlsdGVyIGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKHN5bmNGaWx0ZXJzVG9MYXllcnMsIDUwMClcbiAgICBzeW5jRmlsdGVyc1RvTGF5ZXJzKClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgfSwgW2ppbXVNYXBWaWV3LCBzeW5jRmlsdGVyc1RvTGF5ZXJzXSlcblxuICAvLyAtLS0gSW5qZWN0IGljb25zIGludG8gdGhlIE1hcCBMYXllcnMgd2lkZ2V0IC0tLVxuICAvLyBJY29ucyBhcmUgY2xvbmVkIGZyb20gdGhlIGNvbXBhY3QtZmlsdGVyIHdpZGdldCdzIHJlbmRlcmVkIERPTSBzbyB0aGV5XG4gIC8vIGFyZSBhbHdheXMgaWRlbnRpY2FsLiAgT25seSBcIkV4aXN0aW5nIHRyZWVzXCIgYW5kIFwiU2VsZWN0ZWQgc3RyZWV0c1wiIGhhdmVcbiAgLy8gc3RhbmRhbG9uZSBTVkdzIGJlY2F1c2UgdGhleSBoYXZlIG5vIGNvcnJlc3BvbmRpbmcgZmlsdGVyLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIE1hcCBsYXllciB0aXRsZXMg4oaSIGZpbHRlciBmaWVsZCBuYW1lcyAodXNlZCB0byBmaW5kIHRoZSBtYXRjaGluZ1xuICAgIC8vIGNvbXBhY3QtZmlsdGVyIGljb24gZWxlbWVudCkuICBPcmRlciBtYXRjaGVzIEZJTFRFUl9ERUZJTklUSU9OUy5cbiAgICBjb25zdCBsYXllclRvRmllbGQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAnU3ByaW5nL1N1bW1lciBTaGFkZSBJbmRleCc6ICdzdW1tZXJfU0knLFxuICAgICAgJ05laWdoYm91cmhvb2QgdHJhbnNpdCc6ICdjbGFzc18yaycsXG4gICAgICAnQ2l0eSB0cmFuc2l0JzogJ2NsYXNzXzVrJyxcbiAgICAgICdMb2NhbCBjZW50ZXJzJzogJ2NsYXNzX2FpMWsnLFxuICAgICAgJ0J1aWxkaW5nIGRlbnNpdHknOiAnRlNJNTAwX21lYScsXG4gICAgICAnQWNjZXNzIHRvIHNob3BzIGFuZCByZXN0YXVyYW50cyc6ICdBUnc1MDBsbV8xJyxcbiAgICAgICdTY2hvb2wgb3IgcHJlc2Nob29sIHByb3hpbWl0eSc6ICdBRHdzX21lYW4nLFxuICAgICAgJ1RyYW0sIG1ldHJvIG9yIHJhaWx3YXkgc3RhdGlvbiBwcm94aW1pdHknOiAnQUR3bV9tZWFuJyxcbiAgICAgICdCdXMgc3RvcCBwcm94aW1pdHknOiAnQUR3YnVfbWVhbidcbiAgICB9XG5cbiAgICAvLyBMYXllcnMgd2l0aCBubyBjb3JyZXNwb25kaW5nIGZpbHRlciBnZXQgYSBzdGFuZGFsb25lIFNWR1xuICAgIGNvbnN0IHN0YW5kYWxvbmVJY29uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAgICdFeGlzdGluZyB0cmVlcyc6ICc8aW1nIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRzhBQUFCdkVBWUFBQUN5VlVJakFBQUZTV2xVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlXRTFRSUVOdmNtVWdOUzQxTGpBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlnb2dJQ0FnZUcxc2JuTTZaR005SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZJZ29nSUNBZ2VHMXNibk02WlhocFpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzlsZUdsbUx6RXVNQzhpQ2lBZ0lDQjRiV3h1Y3pwMGFXWm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNScFptWXZNUzR3THlJS0lDQWdJSGh0Ykc1ek9uQm9iM1J2YzJodmNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzl3YUc5MGIzTm9iM0F2TVM0d0x5SUtJQ0FnSUhodGJHNXpPbmh0Y0QwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x5SUtJQ0FnSUhodGJHNXpPbmh0Y0UxTlBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZiVzB2SWdvZ0lDQWdlRzFzYm5NNmMzUkZkblE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVVYyWlc1MEl5SUtJQ0FnWlhocFpqcFFhWGhsYkZoRWFXMWxibk5wYjI0OUlqRXhNU0lLSUNBZ1pYaHBaanBRYVhobGJGbEVhVzFsYm5OcGIyNDlJakV4TVNJS0lDQWdaWGhwWmpwRGIyeHZjbE53WVdObFBTSXhJZ29nSUNCMGFXWm1Pa2x0WVdkbFYybGtkR2c5SWpFeE1TSUtJQ0FnZEdsbVpqcEpiV0ZuWlV4bGJtZDBhRDBpTVRFeElnb2dJQ0IwYVdabU9sSmxjMjlzZFhScGIyNVZibWwwUFNJeUlnb2dJQ0IwYVdabU9saFNaWE52YkhWMGFXOXVQU0kwTURBdk1TSUtJQ0FnZEdsbVpqcFpVbVZ6YjJ4MWRHbHZiajBpTkRBd0x6RWlDaUFnSUhCb2IzUnZjMmh2Y0RwRGIyeHZjazF2WkdVOUlqTWlDaUFnSUhCb2IzUnZjMmh2Y0RwSlEwTlFjbTltYVd4bFBTSnpVa2RDSUVsRlF6WXhPVFkyTFRJdU1TSUtJQ0FnZUcxd09rMXZaR2xtZVVSaGRHVTlJakl3TWpZdE1ETXRNVE5VTVRnNk1qUTZNalVyTURJNk1EQWlDaUFnSUhodGNEcE5aWFJoWkdGMFlVUmhkR1U5SWpJd01qWXRNRE10TVROVU1UZzZNalE2TWpVck1ESTZNREFpUGdvZ0lDQThaR002ZEdsMGJHVStDaUFnSUNBOGNtUm1Pa0ZzZEQ0S0lDQWdJQ0E4Y21SbU9teHBJSGh0YkRwc1lXNW5QU0o0TFdSbFptRjFiSFFpUG1samIyNDhMM0prWmpwc2FUNEtJQ0FnSUR3dmNtUm1Pa0ZzZEQ0S0lDQWdQQzlrWXpwMGFYUnNaVDRLSUNBZ1BIaHRjRTFOT2tocGMzUnZjbmsrQ2lBZ0lDQThjbVJtT2xObGNUNEtJQ0FnSUNBOGNtUm1PbXhwQ2lBZ0lDQWdJSE4wUlhaME9tRmpkR2x2YmowaWNISnZaSFZqWldRaUNpQWdJQ0FnSUhOMFJYWjBPbk52Wm5SM1lYSmxRV2RsYm5ROUlrRm1abWx1YVhSNUlETXVNQzR6SWdvZ0lDQWdJQ0J6ZEVWMmREcDNhR1Z1UFNJeU1ESTJMVEF6TFRFelZERTRPakkwT2pJMUt6QXlPakF3SWk4K0NpQWdJQ0E4TDNKa1pqcFRaWEUrQ2lBZ0lEd3ZlRzF3VFUwNlNHbHpkRzl5ZVQ0S0lDQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtJRHd2Y21SbU9sSkVSajRLUEM5NE9uaHRjRzFsZEdFK0Nqdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6N0dvK2h2QUFBQUJHTkpRMUFKRUFBQlRTTWovZ0FBQUFsd1NGbHpBQUE5aEFBQVBZUUIxYXl2ZEFBQURybEpSRUZVZUp6dG5YbXdsbU1ZeHI5RVpEbFptNE5UYUd6SkdrSW9hYkdFa1NGcnNod1p5OG5ZVHFHc3lWWTBIVEdXaHFUc3NpYkVhSkpTdHFic1VSUkZvckxFSWZuajZocjY5SFkvNy9JOHo3dmN2Myt1K2VvNzV6enZjcjN2czl6My9aUktpcUk0cDRIdkJoU1RCaXZQZTdObTBPYk5vVnR0QmQxeVM3UFBsWlhRK25yby9QblFiNzhOOTNuV0xPaFBQMFU3SGtWSkZXdXZEVDNrRU9qZ3dkRFBQNGV1V0pFTy9mdHY2S1JKMEQ1OW9DMWJRaHZvQTFwSkl4VVYwTzdkb1E4L0RQM3hSNmh2WThWVlBpajQ0R2pmSHNvSGk2STRvVTBiNlBQUFE5blY4MjBRMThvSHk5Q2hVSGFCRlFudFFoakJMdGVBQWREampuUHpkeGN2aGdhTnphaU5Ha0U1Qmd3YUc2NjNucjIybGtxbDBtKy9RWWNNZ2Q1Mkc1VEhvU2hyaEpNZXc0ZERseStISnZXbW1Eb1YycThmdEYwN2FJc1cwUFhYajM4TS80Vmp0STAzaHU2eUM3UnJWMmhkSGZTcnI5YmM3cWh2eE1zdmh6WnVITzg0bEp5eDJXYlFRWU9ndi84T2pYckRMVnNHWlZlMFZ5OG8zenhwaFFiZGZYY29Id3g4VU1RMTRyeDUwT3BxcUk0UkM4cmhoME1YTFlKR3ZhSGVmQlBhclJ0MGd3M3N0TmMzZkhCY2VDR1VSb3A2M3Q1NUI3ck5ObmJhcTZRRVB0RnJhNkZSdTVBelprQ1BPbXJWMzFzMDJIVzg3REpvMUZuY2hRdWhuQzFWY2dMSFRLTkhROFBlR0xOblEwODdEZHF3b2IyMlpobU9JVGtKOWV1dlVOUHovT2VmMEFzdWdCYjFnWlo1MklWNTd6Mm82UTN3d3cvUW1ocm91dXZhYldkZVlXVE5zR0hRc0QyTSsrK0g2dm5QQ095eXNBdGplcUhmZlJmS1dVMGxXYnAwZ1RJMHpmUzZ2UFVXVk5jSlU4cGhoMEhaWlRHOXNJdzAwZWx1TjJ5L1BYVG1US2pwZFpvekI4bzNxZUtaVnEyZ1M1WkFwUXZJTHMrbGwwSjFMT0dIalRhQ1B2MDAxTlNBVTZaQTlVSHBpUzIyZ0g3NUpkUjBRYmR6WnpmdHN3Vzd3amZjQUwza0VtaFd4MEpyclFXOSttcW9xUUVmZVFTcUQwNUg4QWJqK3BsMGdSWXNnTzZ3ZzV2MjJZSnZpS0IxUjc0NXNzN0pKME5ORFhqTk5lN2FWa2o0Wkh2b0lhaDBRUmlCc3Q5K2J0cG5tMk9QaFVyVDhYbFp3TC9pQ3FpcEFVODZ5VjNiQ2tYUkw4VHBwME9sNDk1OGM3ZnRzZ1VmdENOR1FFMGZ0UHZ2NzZaOXVZZkxBMFh2ZXRnMjNwNTdRaGswelRHVTd4czU3TkRpbTIrZ3pKTlVRc0pCdCtrQ09DTlQ4anJZVHRwNFZWWFFCeDZBTWhPOS9QZHh0cGlUV2I0SU81bkdDQm9sSkQxNlFLVVQvUGJiMEx4UEw4YzFIaWRuT0J2Sy9EblRuc1NoaDBadmU1SXdyV25wVW1oUWU1a2x3Z2VNSWtBRHpaMExsZGJqZHR2TlhkdDhFdFo0VEx0aFdoSm5kMDJOVmo0cjdQdU5Wdzd6L0tUMlAvaWcwMlpsRjlOSkZNYnlGUVZUNDUxNElqUnNaRWk1VHBzRzNYWFhaTnFmTk15b1owUkwwSEd3QzczWFhzNmFsaTJhTm9WS1hRaEd2YWM5c1RScFRJMFhWWm1CZnNvcFVJNngwNDdwdXQ5cnIwSHpPZ2NRR1VheFN5Znd1dXZjdGt1bVNjOG1QWnYwYk5BQTJyRWp0RmN2S0RQYzQ1SzA4VGhwd3Z4RTJ6VlpiTUVIQk4vUTBuRWZlYVM3dHEyZWxEelJHSFhPc1VnUTMzMEhaUkdkdE1GNmxPUEhRKys1QnpwN05nd1lOMVF0cmpFNEpyN3pUaWlEbFcrOUZjcDFzS3pCcmlRVGNpV3V2ZFphVXd4SmlmRllNa0dxd2RHL1AvU1hYK3kySnlwbm5ybjZmK2RzNHRpeE1DQVRhc095N2JiUmZ1N1paNkVNSm1lZUlkT204c0tFQ1ZBZWJ4RDc3Z3VOZWo3amt6TGpCY0hnWnE0M3BaV3Z2MTd6Ly9QQk1uSWtERmhieXk2cTJlODNMWk0zZlRxMFF3Y29RODArL2RUczU3T09hWStJNThVOW5vMjN5U1pRbGpnUDRybm5vSC85WmJVNXNXRVJJSGFKSlc2NUJUcGtDQXdvbFpUZ3RMNEVFMDdmZU1QcyszbGo4bVNvZEIya0I3NDlQQnVQeFlLa0x1YVlNZmJiRW84bEk1YU1XREtDYjVTMmJhRXNmUzdSdXpmMDBVZGh3TGhqT1k1NWlncVBYK3B5SG53d2xMUHA3dkJzUE9tSncyV0RWMSsxMzVaa2dBRVowa1FETXJKRzR2ampvZVBHd1lBc0hxUkVRM3BnczR0L3pESDIyN0lxbm96SHFsK3NheG5FU3k5QkdmcVRIV0JBRmszcTJCSDZ3Z3RtUDgyZzhJa1RZVUFOZVlyRzY2OUR1UzRjaFBzdXB5ZmpjUXdpeFZhbXY0c3BBUVB5emMwTHpOTHdFb3dZbVR5NWNVM2ptc1kxVzIrZGZBdnpERGVUa1I1NG5UcEIzV1V6ZURJZXUyQkJNS0h6eFJmdHQ4VU5NQ0FuaDg0NUIyb2FDRkJWMWJCdnc3NE4rL2JyQndQYWFXTitrUjdnM1BTbGRXdjdiUUdlUW1lWXZzTlFuM0lZWTVqLzRHZEd1T0RUM1hkRDVWQ3Qrb3I2aXZxS1VtbFozYks2WlhYbC84dGdabloxaXc1cjFFakxQVnhmSFRYS2JudTh2ZkdrTGhNVEdmTVAzb1QzM290UDdJcktFU1NObGpaYTJtaHBxWlNOTjJCNU9oSW55eTY2Q0dvN2RySThLeU1JZDExNVQ4YVRncHVMWXp3Q0EzSzlrbmx2REJ3SWhnWk1KMDJhUUY5NUJjcmRoemltNGo1NlFUMmZwT0RRNWZ2djEvdzlkMEgzam8zSEo1dDBnTnlBc1hqQWdGd0FQdkJBS0xNR2drblhtNCtHR3pjT0twV08ySHR2dSswaDBuMlZXK1B4Z2tnYkx4YlhlQVFHL09RVGZHcmJkdm5BNVFPWER3d2VvNngrck9jYXpncWFHbzQ4OVpTZDlwUWo5YVJ5TzJ2TWxIMHBiY1A5Z21ZMnFLN0dtMjNGQ2lyKzNYZVZNUnFPYjJyVHRDU21JN21DMlNKQjdlR3VVTG1EZlh2cGd1eXpqOXQyWllXMGxmZkxpdUdJVktuNmp6K2c5aE5sSFhjMU45M1U3SHZ5cElMaUV4cnU1WmVocGwxSzVpc3kvODgxMG4zRjlieWs5NkQvUDQ2Tlo3cXVsSmVDckhrajZoak90K0dJZEY5eEdZZlYxK3poMkhpbWt5YTVIZVJtbEhMREhYQ0EyYy8xN1F2MWJUZ2kzVmU4UDZYMXZ2ZzROcDdwK2x6UmloaWxsYmlHWTc1aFdralArckZqNC8zOE0xUXEzV0RMZUV3MFpSV3RHMitFYXRtM1ZhSGhtQjJTZGNNUjB6ZGVibUhDcU9zQ3BOeFRJYWp1SW9PV3BVeHdYOWllMWFUaEprMHkrenRVR2k3dE1ISWw2RGh1djkxOW01ekNQS21nRThBUW82UXgzWU9Cc1lScHE1eHN5M2lNcGN5cjRianBpWFE4M0NIWVBwNWlOYVZYdXEzSmxSa3p6TDdIOWNiMzM0Y3lkQ3R2MEhBY3cwbnBXb1NWdm0rK09mazIyWURsSXlWeTM5Vzg2U1pvMEpPSDlSK1RYbGJnT21MWUJWOEcyVjU4TWRSWEplS2szbmhSMzNBMFhOWTQ5VlNvZEh5c3daSmJqamdDS3AySW9EcVZjZUZDS2FQancxWmdabXdoWTA5ZGtkUnVRYWI3ekdYZGNPVEpKNkZCeDhkMU8vc0w1NTVobjF2YUk0RnBNclk1NFFRb1oxMU5iMGhXRWR0akQvdHRMSldpRzYrb2htTnBFWmJlQ0RyT3ZPd2Rid3gzSEEwNklZd2sySEJETiszWmFTY294NEttTnlpTE1aMXhodDMyaFRWZVZNTmRlV1d5N2ZZRmcrMmw0K1UraklXaGUzZW9kR0w0Um5JRnV4eW1lMitYSzdjUFMzcWpURlBqc1RUNXhJbG0zOCtiNFFpWHBhU3hPd3NyRndZK2tmbG1DenBCck5IaUdrNmlWRmREcFhhVzZ3Y2ZRTGs1U0Z4TWpUZGxTcmgyNXMxd0xKQzhhQkUwNkxodExWdGxCcFpmQ3pwQjNFN0s5elpTakhENTRndW82WTNOOXNldDM1ajBObDE1TXh4aEhWUHArTTg3ejIyN1VzZlpaME9sRThYcGZOK3d3dk16ejBERDN2Q0RCa0hYV1NmYzMwM0tlRmRkRmU3dlpnWDJVTGdCcFhRZUNoOFR6TWtBcVN2SGZDclR2RDdiOEVKekwyN1d6VFExQUNjOVRBTUc0aG92cjRZajNIQlNPZzlGM2N3bEVFWkNTQ2R1OEdDMzdUS2xYVHRvZVhxSnBOelZobDJrSUhyMkRQZDdpMkk0anVrKy9CQXFuUTllSjJVbFhKQm13bXpRaVdOcDdoWXQzTFV0REpXVlVDa210Vndac2NNeWVPV0ZiVm1YMHZUMzhmZmtIUllFbHM1SDlyY0VzQXozbVpOTzVHT1B1VzFYV1Bna1p2cFIyRGZWMkxGUTdxRWVsRjFScmdNSEp0UCt0TU5aOGZLQ3RlWEtaWU1kZDNUWHRrekNTWWZQUG9OS041cHB2cGh2dW5hRmNxeHFha0RXMVdUYWt2VDlvcFRPdVA1NnFIUSt1T2U3WWdpbjM2VVQrOUZIVU5leGsxSGhBdmUwYVZCVEE1cE8zdVRkZUt6MUlrM0dNU1F4YmVsZHFZZXpocVlSR0V4dmtYYVlUUXVNV2IzckxtamNaWUs4RzY5NWM2alV0YVJtSlY4d3RiRE9wdWtUZitoUWQyMUxFcGFra0lKNmkyWThqdVdtVDRkS3h6OXJGalRwa0wzQ2N1NjVVTk1iOFB6ejNiVXRTVmh4KytPUG9VVTFIa3R3TUV0Rk9tNUdDTFZxNWFaOWhlT09PNkNtWTZMT25kMjFMVW1ZbFNGbGNlVFZlSXp3TVYyR2tiYjJWbUxDSnlGM2pKVXV6T0xGVUZlNzBpUU54N3FtMlJKWk4xN055bjJQVEI4ME5hblpKNmtnc0NxV2FmNGNNNDF0NzhkbWk3VHRuWkFVckFnd2JCalUxSEQ4dnE5U0hJV0gwL05TK2JaeVpZWGp0SmJ6S3lkdnhtdmFGRHBoQXRUMHVqR2RKeXV6MTdtSEMra3NtR3Q2SWJrTWtmYUV5THdZcjNWcktQZjdNNzFPN05rd08wUkpHYXlCd3YzT1RDOHNhNmlrZFZZczY4YmpjZ2xMWlpoZUY0N2wxWEFaZ1RlZ2FYNFdsZXRvQXdaQTB4SVJrelhqc1liTkUwOUF3eTZMTU1ZMUswTUJwUXlPQmFLVzgyTUpBVllhOXBVSm4zYmpWVlZCNzdzUEdqWS9rUTg4MXpWMkZFZXdHbGpZR2lyVXVYT2h6SngzTmNoUG0vR1lrTXhKcXJCZFNDcUhCSzdLSkNxZWFkTUd5dWovc0RjTWxSRW1qS3l4VlZMQWwvRTRYVTlqTUMrUTY2TlJ6eHQzbEUxTDExaHhER1A2V01JaGJOcE9rRTZkQ3UzZkg4b2JOK3E2azIzamNUMnRTeGRvWFIwMDdvT0pPbk1tOU9pam9icitwcXdDWjgrWVVNcUY5N2czSHBVM01tOXNqbW00YWNoMjIwSEx4NUpoamNjYm01TkRPKzhNN2RBQmV0WlowTWNmaDBxVnZjUHFuRG1ydGxzblNaUlFjTGNacHU4d296bXBHMVJTdm9IbnpUUDdQc2RNY2JNY3dpb0RHSHIzaGpMdFNWRVNnUVZxaHcrSEp0VTF6WnB5M1pPMVhaaStveWhPNEt4bSsvWlFWa0ZqWHBodmcwUlY3cFRMTW9TMXRWQjJXWFdNcHFRUzNwZ3RXMEw3OUlIeVJ1YU43ZHRnN0pKeTF4d3V0ekNXVWtrYWZXSjVoWnVqc0tBdHg1SmNqdUJuNmtFSFFhWGlUcU5HUVRuV216OGZ5bnFmL0Z6KzcxendWaFRsUDZSdEFWMkppcWM5MEJXbDJLanhGTVVEYWp4RjhZQWFUMUU4b01aVEZBK284UlRGQTJvOFJmR0FHazlSUEtER1V4UVBxUEVVeFFOcVBFWHhnQnBQVVR5Z3hsTVVENmp4Rk1VRGFqeEY4WUFhVDFFOG9NWlRGQStvOFJURkEybzhSZkdBR2s5UlBLREdVeFFQcVBFVXhRT0crN3AxNndidDBRUEtYV1VVdDNEalI0blJvNkgxOWZiYW92d2ZudStSSTZGanhnUjlVeWhvVzFFQjVZNm9yalpnVkpRc3cwMXRXTitVdXpEOWk5RFZwSU5aY1ZoUkZCbjZKYmpIWVZqQ3ZiSVMycWtUVkx1YWZ1R2VETTJhUWJrRjhzS0ZmdHFqQUJwdC9Iam9nZ1ZCMy93SFE2RHlpTjVtRUNjQUFBQUFTVVZPUks1Q1lJST1cIiBzdHlsZT1cIndpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7ZmlsdGVyOmJyaWdodG5lc3MoMCkgaW52ZXJ0KDAuODUpO1wiIC8+JyxcbiAgICAgICdTZWxlY3RlZCBzdHJlZXRzJzogJzxpbWcgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFnQUFBQUlBQ0FZQUFBRDBlTlQ2QUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFMRXdBQUN4TUJBSnFjR0FBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFDQUFTVVJCVkhpYzdkMTcrQjFWZmUveDl5OEpDU1NnUUF1R2EwRGtKbnBVSUp5S1ZnUUVVZXV0UFZodkZiV0s0bW53NEZPUHJmVjQ4QWEyZWhCRWJSR3IxdHFqUWx1cDFYcEJMcFdDUlJDcmlGQWhGbENRZ0UxQ3JpVGtjdjVZK1IyU2tNdWUyVFB6bmJYbS9YcWU3K1BsK2UzZi9zNWFPN00vdjVsWk14TU0yd1J3SUhBNDhIamdBR0EvWUUvZzF6YlVqc0IwWUZhTGZTd0NsZ0czQTdjQjF3QlhBUXRhZk04U3pBYU9CNTRKSEFZY1FwcW4zU0tiS3RqRHBNL3BBdURmZ1p0Sm45UHJnSWNDKytxN0NlQkp3QW5BWE9CUVlBNHdrL2IzS3dCTGdGOXRxUHVCL3dEdUJINUdtc09GTGZZZzljYmV3S25BK2NDMXBIOFk2M3RhYTRFcmdOZVFBb2lTNmNCcHBDK2V0Y1RQa3dVUEFwOEducjZOZVJ1aXZZR3pnZm5FejlHMjZ1ZkFWNEYzQWM4bUJSTXBlOU9CazREelNIOVpSLzlEcTF0M0EyY0FVNXNkbnF4TUEvNkF0TE9Lbmc5cjYzVVZjT3hXNW5Bb1pnTi9RVG9xRWowZmRXbzFjQ1h3ZHRLUkN5a2IwNEJUZ00rUURvRkYvMk5xc200Q2pteHVxTEl4Ri9nMzRzZmZHcTNXQVg4SlBIWkxrMW13Q2VBdHdHTGk1NkRKdWhWNEQvREU1b1pLYXRhQndQdUJlNGovQjlObVBRVE1hMmpNY25BV3NJcjRjYmVxMTN6ZzZFZFBhWkYyQXk0amZzemJydXVBMTlIdXRRdlN5SDZUOUE5dmFPZURQdzVNYVdEOCttb3E4T2ZFajdNMVhqMEUvRFpsMndmNE1mRmozV1V0QXY1MHc3WkxuWHNCY0QzeC94QWk2M09rdzQ2bG1RSjhudmp4dFpxcGg0R1hVcVo5U0ZmVlI0OXhWSzBpWFFCNjRMZ0RLWTNpZU5KaHFPZ1BmbC9xdytNTlp5K2RUL3k0V3MzV1N1QlpsR1UzaHZlWC85WnFOWEFSYWVXRDFMaTlTSC94cmlQK3c5NjNldFVZNDlvM3YwdjhlRnJ0MUFMSytZS1lBUDZlK0RIdFd5MGpMWDEwNmJJYU1RMzRINlMxeHRFZjdyN1dnOEQrZFFlNFJ3NEVsaEkvbmxaNzlTM0s4QmJpeDdMUDlVUFNEYnFrMm83RjVWK2oxdC9YSE9NKytRcng0MmkxWHk4bmI3TXBiNmxmRzdXT2RIM0FIdldHV1VNMUZYZ3Z3N3V5Zjl3NnJzNWc5OFNKeEkrZjFVM2RUZDZIaVArQytESE1xWDVKK3ZjdGJkZWVwTU9FMFIvYUhDdm53NnRYRWo5K1ZuZjFSdkkwbTNSQlkvVDQ1VmJyZ0E4eTdMdVphanRPQU80bC9zT2FjeDFSZWRUalBaSDRjYk82clIrVHA3T0pIN3VjNjJyS3VSQTBlMzI1a2N3RTZaRC81YVNyL1ZWZmppc0NUb3R1UUowN0FuaHFkQk1WVFFDL0Y5MUU1bzRqM2RMODJjRjlpSDRFZ0tuQXhjRC9vaC85NU83RjBRM1U4SkxvQmhRaXQ4L3FrMG1QRGRkNEhnZDhrN1RrVjRHaXYzQm5BdjhBL0g1d0h5VTVuSFNlTWhkN0FZZEVONkVReDBjM1VGRnUvZmJaZE9BTHdOdWlHeG15eUFDd0crbWl0UmNFOWxDaUNmSjZBTXN4MFEwb3pGemkvd2lwWW01MEE0V1pBUDRQNmVKQUJZajZ4N2NQY0Ezd2pLRDNMOTFoMFExVWtGT3ZhdFpNWU4vb0ppbzROTHFCUXIyRHRMUXlwekJZaElnQjM1MTAvaWZIcTlWemtkTmRBWFA2QWxEemN2cXM3aGZkUU1IZUJKd1gzY1RRZEIwQWRpS2Q4L2ZMdjEyN1JEZFFRVTY5cW5rNXpYOU92ZWJvcmNBZlJ6Y3hKRjBHZ0IyQXY4WDdRM2RoeCtnR0twZ1IzWUJDK1ZuVnhqNkFGNFYzcHFzQU1FRjZWT1R6TzNxL29Wc2EzVUFGeTZNYlVLaGwwUTFVNEdlMWZaUGZGYjhkM2NnUWRCVUEzZ084cnFQM1VucFFTUzV5NmxYTnkybitjK28xWjFPQnp3TkhSamRTdWk0Q3dQSEFPenQ0SHozaWp1Z0dLcGdmM1lCQzVUVC9PZldhdTUyQVM0REhSamRTc3JZRHdON0FGL0VCRUYyN0xicUJDbTZOYmtCaDdnTVdSamRSd1UraUd4aVlnMGgzaVZWTDJnd0FVNERQa1o3dXArNDhCTndRM1VRRjN3TldSVGVoRU5kRU4xRFJ0ZEVORE5DcHdCblJUWlNxelFCd05qNERPc0oxcE1lVjVtSUY4TjNvSmhUaWl1Z0dLcnFTOUZoYmRlczg0R25SVFpTb3JRQndMUEFuTGYxdWJkdVhvaHVvNFpMb0J0UzVOY0JsMFUxVXRJRDBPRnQxYTBmU2N3TnlXakthaFRZQ3dEVGdFeTM5Ym0zYkN2TDhNdjBTZVIyMTBQaStSdnBDemMxZlJUY3dVSWNDNzQ1dW9qUnRmRW5QQTU3U3d1L1Y5bjJTUEpjcUxRUStIZDJFT3ZYaDZBWnEraUx3OCtnbUJ1b1A4YnVsMS9ZR0hnVFdXNTNYc2czam42djlTRWN3b3NmUmFyKytTZDdPSUg0TWgxcmZJZDBzU0Exb2VubmV4Y0JSRGY5T2plYmR3RGVpbXhqREV0SVJLWis1WHJiVndFdUFYMFUzTW9ZZkFDOEU5b3B1WklEbWtKWU8zeExkaURaMVBQSHBjS2gxSXpCOSsxUFVlek5JTzlmbzhiVGFxM2RSaHFOSVMyNmp4M09JZFNjK2w2RjNyaVArZ3pIRVdreTZZVVlwRGlFZERZZ2VWNnY1dXB5eUxnNmVSL3lZRHJYbWpUQS82c2dMaVA5QURMRldBU2VQTUQrNU9RSC91aXF0YmdGMnB6em5FeisyUTZ4ZkFqTkhtQjkxNEhyaVB4QkRxMVhBNzR3eU9aazZsYlNOMGVOc2pWOC9KVjNrV2FMSk81NUdqL0VRNjYwanpJOWE5cHZFZnhDR1Zvc1p4bDBXVDhKVkpiblg5Y0FlbTA5c1lTYUFEeEUvMWtPck8wbjNuVkdnZnlEK2d6Q2srajd3aEpGbXBnd0g0NFdCdWRiblNFOTFHNHFYQW91SUgvY2gxU3RHbWhtMTRrQmdMZkVmZ2lIVU11Q1BLT05xLzZwMklCM3VXMHI4UEZqYnI5dUJVN1k0aytYYkgvaDc0dWRnS09WelJBSzluL2dQUU9tMW5IU2gwVDRqemtuSjlnVStpamNNNm12OUREaWRZWWJVelIxSFd2VVFQU2REcUNlTk9DZHEwRFRnSHVJbnY4UmFTWHBTMnVuQXJxTk95SURzQnJ5SjlIUTJWd3ZFMWdMU29mN24wdnlOeFVwd09IQU9hUlZFOUZ5VldoZU1QQnZheERpM1ZEd0YrSHBUamZUVVE4QWR3SDJrdjhSWHQvUStpMGdYdTgwbjNlWHFCbnc0enFoMkFvNEJEaU5kRy9FWVVrQlE4MWFUVGtYZEIvdzdjRE9QZkxGcCsyWURjMGtQdHBrRDdBek1hdW05Wm0yb09hVFRFaVhkZjJGekQ1QnVnNzRtdXBFaCtRenh5YS9wV2dWOG1mVFg1YUdVL1k5RzBqRHNCRHlUZEx2d200amZ6N1pSSmQ0UHBiZW1VOWJWcnI4QTNnYjhXcE9ESkVrOTlHVFNjMXRLdXMvR3B4b2RJVzNUU2NSUGVCTzFoUFRGNzMybEpRM05mc0FYaU44UE4xSDM0eEhienB4SC9JU1BXOS9HSytzbDZibWs2enFpOThuajF0eW1CMFpiZGl2eGt6MU92UmZUb2lSTjJndjRGK0wzemVQVXV4c2ZGVDNLM3NSUGROMWFRN3JBVDVLMHFaM0krODZ1VnpjK0lucVVseEUvMFhYTFIwaEswdGJ0QVB3VDhmdnFPclVDYjBMVnVvOFFQOUYxNnIxdERJWWtGV1lXK1Q1LzR6ZGFHQTl0NUZyaUo3bHFmUnZQK1V2U3FBNG16eWR4bnRuR1lDaVpJQzJkaTU3a0tyVUVyL2FYcEtwT0ozNy9YYlV1Ym1Va0JNRGppWi9ncXZXMlZrWkNrc28yQmJpZStIMTRsZnJYVmtaQ0FQd1c4Uk5jcFg2Qk4vbVJwTHFlUS94K3ZFb3RhV2NZeWxUMXZQZ0JiVFRSb3ZOSXQ3dVVKRlgzYmVCNzBVMVVzQXV3UjNRVHVhZ2FBQTVzcFl0MnJDWTlwbFNTVkY5dTk5ay9JTHFCWEZRTkFQdTMwa1U3L2duNFZYUVRrcFM1UzhqclNPcWM2QVp5VVRVQTVIUm81UnZSRFVoU0FSNGtyNHZyY3ZxZUNsVTFBT1QwdU55cm94dVFwRUpjR2QxQUJUbDlUNFVxTlFDc0JHNlBia0tTQ3ZHajZBWXF5T1Y3S2x6VkFMQlRLMTAwN3c1Z1hYUVRrbFNJbjBZM1VNSE02QVp5VVRVQTVMS20vdjdvQmlTcElEbnRVM1A1bmdwWE5RRGs4cVNsWmRFTlNGSkJsa1kzVUlFQllFUlZBOERVVnJwbzN1cm9CaVNwSURrdEE4emxleXFjVDhpVEpHbUFEQUNTSkEyUUFVQ1NwQUV5QUVpU05FQUdBRW1TQnNnQUlFblNBQmtBSkVrYUlBT0FKRWtEWkFDUUpHbUFEQUNTSkEyUUFVQ1NwQUV5QUVpU05FQUdBRW1TQnNnQUlFblNBQmtBSkVrYUlBT0FKRWtEWkFDUUpHbUFEQUNTSkEyUUFVQ1NwQUV5QUVpU05FQlZBOERhVnJwb1hpNTlTbEl1Y3RtdjV0Sm51S29CWUhrclhUUnZhWFFEa2xRWTkvK0ZxUm9BRnJmU1JmTnk2Vk9TY3BITGZqV1hQc05WRFFEelcrbWllWGRFTnlCSmhYSC9YNWlxQWVBbnJYVFJ2TnVpRzVDa3dyai9MMHpWQUhCdEsxMDA2eUhnaHVnbUpLa3c3djhIN25Ha0t5elg5N2l1YUczckpXbTQzUDhYcHVvUmdBWEExUzMwMGFRdlJqY2dTUVZ5L3k5ZVEzeksyMW90QjNadGI5TWxhZERjL3cvY0RzQ2R4RS8ybHVvajdXMjJKQTJlKzM5eEJ2R1R2WGt0QS9adWM2TWxTZTcvaDI0cWNCUHhrNzV4dmFQVkxaWWtnZnQvQVVlUmxseEVUL3g2NEVaZ2VydWJLMG5hd1AyL21FZjg1QzhHRG1wN1F5VkptM0QvTDg0bmJ2SlhBU2UzdjRtU3BDMXcvejl3VTREUEVUUDV2OVBCOWttU3Rzejl2NWdBUGtSM2s3OFlPTEdUTFpNa2JZdjdmd0h3VW1BUjdVNys5NEVuZExWQmtxU1J1UDhYKzlET0lhSGx3Tm5Bak02MlJKSlVoZnQvQVhBY2NEbk5UUHo1cEErV0pLbi8zUDhMZ01PQmM0QmJHSDNTVjVLZTZuUTYzdHRaa25MbC9yL0hKanArdjluQVhPQlFZQTZ3TXpDTGRON29RV0ErY0N2cGVjNHJPKzVOa3RRZTkvK1NKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pHM1RSTWZ2dHpkd0RIQUlNQWVZQmN3RUZnUExnSjhDdHdIZkExWjAzSnNrcVQzdS93Zm9DT0JQU1JPN2ZzUmFCVndGbkFIczNuM0xrcVFHdVA4ZnFCT0JLeGw5MHJkV0s0QUxnZjI2YlYrU1ZKUDcvNEhhRjdpVThTZCtTeCtFczRFZE85c1NTVklWN3Y4SDdOWEFVcHFmL0kzckZ0SmhKVWxTZjdqL0g2Z3B3UG0wTy9FYjF4TGc1RTYyVEpLMExlNy9CMndxOEhtNm0vekpXZ1djMnNIMlNaSzJ6UDMvd0gyVTdpZC9zbFlEcDdTL2laS2tMWEQvUDJCbkVUZjVrL1VnY0hEYkd5cEoyb1Q3L3dHYlN6b01FLzBCV0EvOEFKalI3dVpLa2pady8xK0FxV084N2grQmZScnNaUnl6Z1llQWE2SWJrYVRDdWY4ZnVEOGdQdlZ0WHN0SmExQWxTZTF4L3o5Z093QjNFVC9oVzZvTFd0eHVTUm82OS84RGR4cnhFNzIxV2dIczF0Nm1TOUtndWY4dnlKUWFyM2x0MDAwMGFDZmdaZEZOU0ZLaFhodmR3RGE0LzIvWmJHQXQ4VWx2VzNWbGExc3ZTY1BsL3I4d1ZZOEFuRkRqTlYwN2xwUUVKVW5OY2Y5Zm1LcVQrWXhXdW1qV0ROSWFWVWxTYzl6L0Y2WnFBRGk4bFM2YWwwdWZrcFNMWFBhcnVmUVpybW9BT0tpVkxwcjNoT2dHSktrdzd2OExVelVBN05wS0Y4MTdiSFFEa2xRWTkvK0ZxUm9BWnJYU1JmTjJpVzVBa2dyai9yOHcweXIrZk4xbkIzUXRsejRsYmQyUndQT0JaNUdlK0xZdmFaKzFITGdkK0JId1ZlRHJ3TEtnSG9ja2wvMXFMbjFtSjNxTjU2aDFTVnNESUtsVkU4QXJnZTh6K3IvM2hjQjc4TkJ2MjZMMzYrNy9nMFZQckI4QXFWei9CYmlCK3YvdTd3Wk83THpyNFlqZXI3di9iMWpmYitvZ2FSaCtIN2dlT0hxTTM3RWY4SzBOdjB2U2RoZ0FKRVY3TzNBeHNHTUR2MnNLOEVrTUFkSjJHUUFrUlhvMThHZWtjLzlObVVJS0ZHYzArRHVsNGhnQUpFVTVndlRYZWhzbWdJOEJiMmpwOTB2Wk13QklpbkloN1Q2NFpmSjB3RnRhZkE4cFd3WUFTUkZPQW83djRIMG1TRUhESXdIU1pnd0FraUs4cWNQM21nSmNoQ0ZBMm9RQlFGTFhkZ0JPNmZnOVBSMGdiY1lBSUtsclJ4RnpYM2xQQjBnYk1RQkk2dG9CZ2UvdGtRQnBBd09BcEs3dEh2eitIZ21RTUFCSTZ0Nk02QWJ3U0lCa0FKQTBXSk0zQ3pJRWFKQU1BSktHekJDZ3dUSUFTQm82UTRBR3lRQWdTWVlBRFpBQlFKSVNRNEFHeFFBZ1NZOHdCR2d3REFDU3RDbERnQWJCQUNCSmoyWUlVUEVNQUpLMFpZWUFGYzBBSUVsYlp3aFFzUXdBa3JSdGhnQVZ5UUFnU2R0bkNGQnhEQUNTTkJwRGdJcGlBSkNrMFJrQ1ZBd0RnQ1JWWXdoUUVRd0FrbFNkSVVEWk13QklVajJHQUdYTkFDQko5UmtDbEMwRGdDU05aeklFL1Bmb1JxUXFEQUNTTkw0SjRFSU1BY3FJQVVDU21tRUlVRllNQUpMVUhFT0FzbUVBa0tSbUdRS1VCUU9BSkRYUEVLRGVNd0JJVWpzTUFlbzFBNEFrdGNjUW9ONHlBRWhTdXd3QjZpVURnQ1MxcjRRUXNEYTZnUkhsMG1jNEE0QWtkU1AzRUxBOHVvRVJMWTF1SUJjR0FFbnFUczRoWUhGMEF5UEtwYzl3QmdCSjZsYXVJV0IrZEFNanVpTzZnVndZQUNTcGV6bUdnSjlFTnpDaTI2SWJ5SVVCUUpKaTVCWUNybzF1WUFRUEFUZEVONUVMQTRBa3hja3BCRndKckl0dVlqdXVBMVpHTjVFTEE0QWt4Y29sQkN3QXJvNXVZanUrR04xQVRnd0FraFJ2TWdUOFFYUWoyL0ZYMFExc3d3cmcwdWdtY21JQWtLUittQUErU3I5RHdCZUF1NktiMklwUDRoTEFTZ3dBa3RRZmZROEJEd04vR3QzRUZpd0hQaFRkUkc0TUFKTFVMMzBQQVo4RWZoRGR4R2JlQjl3YjNVUnVEQUNTMUQ5OURnRnJnVGNDcTZJYjJlRDd3RWVpbThpUkFVQ1MrcW5QSWVEN3dOdWptd0FlQkg0WFdCM2RTSTRNQUpMVVgzME9BUmNDRndTKy8ycmdaZVJ6aStMZU1RQklVci8xT1FTOERmanJnUGRkRGJ3UytGYkFleGZEQUNCSi9kZlhFTEFPT0EzNGNJZnYrU0R3Zk9Edk9uelBJaGtBSkNrUGZRMEI2MG5YQS93MjdhL0R2d2s0R3JpaTVmY1pCQU9BSk9XanJ5RUE0TXZBazJqbmxNQUs0RDNBc2ZpNDN6RHJNNmxMMmhvQVNXTTdpL2g5Uk82MWpuNkdnRW5IQVpjei9uWXVCODRIOXVtMmZXMUo5SWQrMURJQVNQMWxBR2ltK2g0Q0FBNEh6Z0Z1WWZUdFdrazZ4SDg2c0d2M0xRL0h0T2dHSkVtMVRKNE9BUGhZWkNQYmNDdnd6ZzAxRzVnTEhBck1BWFlHWmdHTFNCZjJ6ZC93OHpmZ0kzMDdZUUNRcEh6bEVBSW0zUWY4NDRaU0QzZ1JvQ1RscmM4WEJxckhEQUNTbEQ5RGdDb3pBRWhTR1NaRHdMem9ScFFIQTRBa2xXT0NkSDkrUTRDMnl3QWdTV1V4Qkdna0JnQkpLbzhoUU50bEFKQ2tNaGtDdEUwR0FFa3FseUZBVzJVQWtLU3lHUUswUlFZQVNTcWZJVUNQWWdDUXBHRXdCR2dUQmdCSkdnNURnUDQvQTRBa0RZc2hRSUFCUUpLR3lCQWdBNEFrRFpRaFlPQU1BSkkwWElhQUFUTUFTTkt3R1FJR3lnQWdTVElFREpBQlFKSUVob0RCTVFCSWtpWk5ob0F6b3h0Uis2b0dnTld0ZE5HOFZkRU5TRkttSm9Eek1RUVVyMm9BV05aS0Y4MWJHdDJBSkdYTUVEQUFWUVBBL2ExMDBieGMrcFNrdmpJRUZLNXFBUGhwSzEwMDc5K2pHNUNrQWhnQ0NsWTFBUHlvbFM2YWQzTjBBNUpVQ0VOQW9hb0dnS3ZiYUtKaDl3TzNSRGNoU1FVeEJCU29hZ0M0RmxqU1JpTU4raWF3UHJvSlNTcU1JYUF3VlFQQVE4RGZ0ZEZJZ3o0ZjNZQWtGY29RVUpBNk53TDZWT05kTk9jL2dDdWltNUNrZ2hrQ0NsRW5BRndIL0hQVGpUVGtnOERhNkNZa3FYQ0dnQUU3RmxoSE90ZmVsN29ObU43bVJrdHF4Rm5FN3krc1ptb2Rob0JzMVgwV3dIWEFaNXBzcEFIenlPZFd4WkpVQW84RUROU3V3SHppRStoNjRNS1d0MVZTY3p3Q1VGNTVKR0NBamdhV0UvdkJ1eDZZMGZhR1NtcU1BYURNTWdSa1p0ekhBZDhJdkF4WTAwQXZkY3dIWG9SUC81T2thSjRPeU15NEFRRGdhNlFROEZBRHY2dUtXNERqZ1FVZHY2OGthY3NNQVFQMUxPQSt1am5VZERtd1d6ZWJKYWxobmdJb3Y5WUJiMFdEc2hmd0xkcjdVSzBDM2tVelJ5NGt4VEFBREtNTUFRUDFDdUJ1bXYwd2ZSTTRyTXVOa05RS0E4Qnd5aEF3VU5PQk41SWV6VnYzdzdNYXVJeDA0eUZKWlRBQURLc01BUVAzVk9CczBpMkV0N2RzOEpmQXBjQ2JnRDBDZXBYVUxnUEE4TW9RMEVQVE9ucWZmOXRRWjVPdUV0MS9RKzBNekFJV2I2ajV3S0tPZXBJa2RXTUMrTWlHLzM1QlpDTjZSRmNCWUdQcmdiczJsQ1JwR0F3QlBlUFY5Sktrcmt5R0FFOEg5SUFCUUpMVUpVTkFUeGdBSkVsZG03eGo0RHVpR3hreUE0QWtLY29ITVFTRU1RQklraUlaQW9JWUFDUkowUXdCQVF3QWtxUStNQVIwekFBZ1Nlb0xRMENIREFDU3BENHhCSFRFQUNCSjZodERRQWNNQUpLa1B2b2c4RWZSVFpUTUFDQko2cXR6TVFTMHhnQWdTZW96UTBCTERBQ1NwTDR6QkxUQUFDQkp5b0Vob0dFR0FFbFNMZ3dCRFRJQVNKSnlZZ2hvaUFGQWtwUWJRMEFEREFDU3BCd1pBc1prQUpBazVjb1FNQVlEZ0NRcFo0YUFtZ3dBa3FUY0dRSnFNQUJJa2twZ0NLaklBQ0JKS29VaG9BSURnQ1NwSklhQUVSa0FKRW1sTVFTTXdBQWdTU3FSSVdBN0RBQ1NwRktkQy94eGRCTjlaUUNRSkpYc0hBd0JXMlFBa0NTVnpoQ3dCUVlBU2RJUUdBSTJZd0NRSkEyRklXQWpCZ0JKMHBBWUFqWXdBRWlTaHNZUWdBRkFralJNZ3c4QkJnQkowbEFOT2dRWUFDUkpRemJZRUdBQWtDUU4zU0JEZ0FGQWtxUUJoZ0FEZ0NSSnlhQkNnQUZBa3FSSERDWUVUT3ZvZlNhQUp3RW5BSE9CUTRFNXdFeGdGckFJV0FiY0R0d0dYQU5jQlN6b3FEOUpraWFkcytFL3p3M3RJbk43QTJjRDg0SDFGV3N0Y0FYd0dtQjZ4MzFMYXM5WlZOOGZXRlpFRGVKSVFOTm1BMzhCUEVRemszQTNjQVl3dGN1TmtOUUtBNENWVXhrQ1JqUUJ2QVZZVERzVGNSTndaR2RiSTZrTkJnQXJ0eklFYk1kdXdHVzBQeEVQQWZNNjJpWkp6VE1BV0RuV095bE1VNGZVOXdLK0RSelgwTy9ibG1uQTg0QTlnVytRSmtaU1BwNE9QRGU2Q2FtaUU0R0hTUmVwRjZHSkFMQVBjQzNweXY0dXpRVWVUenJxSUNrZkJnRGxxcWdRTUc0QTJBMjRFamlrZ1Y3cWVBcXdNL0N0b1BlWFZKMEJRRGtySmdTTUV3QW1nTDhCbnRWUUwzVWRDOXdCM0J6Y2g2VFJHQUNVdXlKQ3dEaDNBandEZUdsVGpZenBFOEQrMFUxSWtnYmpBMlIrWVdEZEl3Q1BBNzRNN05oZ0wrT1lBUndBZkNtNEQwbmI1eEVBbFNMckl3RjFqd0M4QjlpMXlVWWE4Rks2V1lVZ1NkS2tiSThFMUFrQXM0SFRtbTZrSVg4UzNZQWthWEN5REFGMUFzQ2I2YytoLzgyZEJCd1IzWVFrYVhDeUN3RlZBOEFFOE9vMkdtblFLNk1ia0NRTlVsWWhvR29BZURKd1VCdU5OT2dsMFExSWtnWXJteEJRTlFBYzMwb1h6VHFjZEoyQ0pFa1JzZ2dCVlFQQTNGYTZhTllFY0hSMEU1S2tRZXQ5Q0tnYUFMcSszMzlkaDBVM0lFa2F2RjZIZ0tvQllMOVd1bWllZHdXVUpQVkJiME5BMVFDd1N5dGROQytYUGlWSjVldGxDS2dhQUhacXBZdm16WXB1UUpLa2pYeUFudDJzcnM1OUFDUkpVblh2cDBjaFlKeW5BVXFTcEdwNkV3SU1BSklrZGFzWEljQUFJRWxTOThKRGdBRkFrcVFZb1NIQUFDQkpVcHl3RUdBQWtDUXBWa2dJTUFCSWtoU3Y4eEJnQUpBa3FSODZEUUVHQUVtUytxT3pFR0FBa0NTcFh6b0pBUVlBU1pMNnAvVVFZQUNRSkttZldnMEJCZ0JKa3ZxcnRSQmdBSkFrcWQ5YUNRRUdBRW1TK3EveEVHQUFrQ1FwRCs4SDN0WFVMek1BU0pLVWovZlJVQWd3QUVpU2xKZEdRb0FCUUpLay9Jd2RBa29OQUJQUkRVaVMxTEwzQVcrcisrS3FBZURodW0vVXNaMmlHNUFrcVFNZkFwNWQ1NFZWQThDcU9tOFNZSmZvQmlSSjZzQVU0SFBBN25WZVdNWHFxbThRWlAvb0JpUko2c2grd0RsVlgxUTFBQ3lwK2daQjlzZlRBSktrNFhnOThQZ3FMNmdhQVA2ejRzOUhtUUljRmQyRUpFa2QyUUg0NHlvdktEVUFBSndRM1lBa1NSMDZsUlFFUmxJMUFOeFg4ZWNqdlNTNkFVbVNPdlJZNE9tai9uRFZBSEJueForUDlEVGd5ZEZOU0pMVW9kWUN3RjBWZno3YXZPZ0dKRW5xME94UmY3QnFBSmhmOGVlam5VWmFIaUZKMGhEc01lb1BWZzBBTjFmOCtXalRnVCtMYmtLU3BJNHNIUFVIcXdhQWhjQXZLcjRtMnN1QlU2S2JrQ1NwQS9lTytvTjFIZ2Iwd3hxdmlmWlpZSy9vSmlSSmF0bWRvLzVnblFEdzNScXZpZlk0NEZLOE82QWtxVnhyZ2N0SC9lRTZBZURhR3EvcGcyY0FYNlRDVFJJa1NjcklQMVBoaG4xMUFzQU41UE5Rb00yOUNQZ0tNQ3U2RVVtU0duWnhsUit1RXdDV2srOVJBRWdYQlA0TGNIQjBJNUlrTmVUZmdFdXF2S0JPQUFENGVzM1g5Y1ZUZ1J1QjA2ay9CcElrOWNGYTRLM0F1aW92R21vQUFIZ01jQkhwb3NibkJQY2lTVkpkYndlK1UvVkZkUVBBajRIYmFyNjJiNDRoWFRWNVBmQUcwc01VSkVuS3dVWEFSK3E4Y09vWWI3b25jTndZcisrYmZVZ1hDWjRGbkFqTUFYWW5qZEhhalVyU2VKNE9QRGU2Q1NsejY0SDNrdjc2cjJWaWpEZC9JbkRMR0svWEl4WUJ5NERiU1VkV3JnR3VBaFpFTnBXQjJjRHh3RE9CdzRCRFNDczhkb3RzcW9haHpmOVp3SG5SVFVnWnU1VjB6bi9rTmY5dHVJNlVRcXptYXkxd0JmQWEwak1ObEV3blBlVHBLdElZUmMrVDgxL2RXY1NQcjJYbFdEOEUzZ2hNb3dIakhBRUFlQjN3NlNZYTBUYjlIRGdYK0NURFBRMHhEWGd6OEE1ZzMrQmV1bGJhL0hzRVFLT1lEeXlPYmlMUUt1Q1h3RDJrbzROZkEvNGp0S1BOekNJZHZveE9SVU9wbTRBalI1cVpzc3dsclhHTkh2L29LbVgrUFFKZ2pWSVhvbGFOdXdaK09lbXZFblhqYWFUVEx2T2lHK25RV2FRYk56MGx1cEVlR09MOGE3aE93MVZadmJjMzZWQkZkRm9jV24yY3NtOWlOQlg0YytMSHVhK1Y4L3g3Qk1BYXRjNUVyV2xpQjNJdjhEY04vQjVWOHhiU1k0N0h2WTZqajZZQWYwVTY1Njh0SzNuK3BVbnp5RGZvOWw1VEEvdCs0T0dHZnBkRzkzdkFoNktiYU1GNXdLdWltOGhBcWZNdlRYb0Mzak9pTmVQY0NHaGppMGhYWmgvVjBPL1Q2STRGN2dCdWptNmtJYjhMZkRpNmlZemtPUC9lQ0VoVjdJNUhtWHR2YjJBSjhlZU1obGdQQXZ0dmY0cDY3MEJnS2ZIam1WdmxOdjllQTJCVnFYWEFvYWh4VFo1YnVSYzR1OEhmcDlFOUJqZy91b2tHWEFEc0hOMUVoa3FaZjJsTEpralh2S2pucHBIdVZCU2RHSWRheDIxL2lucnJST0xITC9mS1pmNDlBbUJWclNXNEpMQnhUVjlkdVlhVTFOWTMvSHMxbWorSmJtQU1PZmZlRjQ2aFNyVUw2YmJZYWxBYnl5dXVKUzNoVXZkT0FvNklicUtHSjVJZTZxUHg1RHIvMGloY0V0aXd0Z2J6ZndMM3RmUzd0VzA1THA4N0xicUJncnd5dWdHcEpRY0RKMGMzVVpLMkFzQUR3Q3NvNDhFbHVYbHhkQU0xdkNTNmdZSTRsaXFadDhGdVVKdUhVNjRHUHREaTc5ZVdIUTdNam02aWdyMkFRNktiS0VodTh5OVY4VHhjRXRpWXRzK252QWY0ZHN2dm9VMU5BRWRITjFIQk1kRU5GQ2EzK1plcW1BRE9pRzZpRkcwSGdIWEFxMG5QTkZaM0RvdHVvSUtjZXMyRlk2cVN2WjUwN3d1TnFZc3JLaGVRTGt4YTFjRjdLY25wcm5EN1JqZFFvSnptWDZyS0pZRU42V3BKeGRYQXkvR2l3SzdzRXQxQUJUbjFtZ3ZIVktVN0U1Y0VqcTNMQWJ3TW4rM2NsUjJqRzZoZ1JuUURCY3BwL3FVNkRpYmQ5MEpqNkRwQmZRSjRiOGZ2T1VSTG94dW9ZSGwwQXdYS2FmNmx1bHdTT0thSVF5ai9HN2dvNEgySFpIRjBBeFhrMUdzdUhGTU53Zk54Q2ZGWW9zNmhuSUhQZkcvVEhkRU5WREEvdW9FQzVUVC9VbDB1Q1J4VFZBQllEN3dkZUNjK09LZ050MFUzVU1HdDBRMFVLS2Y1bDhieCs3Z2tzTGJvcXlqUEJWNUxlb3FnbXZFUWNFTjBFeFY4RDVlSU5pbTMrZGVqTFl0dUlDTzdrTzQxb3hxaUF3REE1NERmQVZaR04xS0k2OGhyTEZjQTM0MXVvaUM1emI4ZXNaNTA5MVF2YnF2bXJhVFRBYXFvRHdFQTRDdkFNL0hjWlJPK0dOMUFEWmRFTjFDUUhPZGY2U2pZcTRDemdTK1FicUNtMFJ3Q1BDZTZpUnoxSlFBQXk0ZG5vQUFBQ1doSlJFRlUzQVFjQlZ3YTNVakdWcERuK0gwSi8ycHRRcTd6UDNRTFNXdmF2N0RoZjY4Q1BoWFhUcFk4YWxKRG53SUF3QkxnWmFUbnc2OEk3aVZIbnlUUEpXQUxnVTlITjFHQVhPZC95SDRHSEF0Y3M5bi8vd25nNGU3YnlkWnY0WkxBb2p5TmREWHplbXVrV2dic1hXdWsrMkUvVXVpTEhzZGNLNmY1UDR2NDhlcEQvU3V3NXpiRzZVczk2REduT204Ylk2a3Q2TnNSZ0kzOUFIZ3E2YUtZMWNHOTVPQjl3TDNSVFl6aDU2UlZJYW9uOS9rZm1pOER4d1AzYitObkx1eW9sMUs4RHRnNXVnazE3eW5BZDRoUG1IMnRHNEhwdFVlM1AyYVFnbC8wZU9aV3VjMy8wSThBWE1Eb2YzemQwSU4rY3lwdkRGU29DZEwxQVhjUy95SHJVeTBHRHFvL3JMMXpDT2xha09oeHphVnluUCtoQm9BMVZMOVk3WFU5NkR1bitna3VDU3phZE9CMDRCN2lQMnpSdFFvNGViemg3S1VUU0RlMGlSN2Z2bGV1OHovRUFMQU1lRkdOc1pwQldoSVkzWDlPNVpMQUFaaEp1Z0hFbmNSLzRDSnFGZWtHU3FVNmxiU04wZVBjMThwNS9vY1dBQjRnWGVsZjF3ZDZzQTA1MVQvVUcyYmxhQnJ3Q3RMZDVLSS9lRjNWWXVERUpnYXY1MDRDSGlSK3ZQdFd1Yy8va0FMQTdhUm4xNDlqYjlLRjBOSGJra3V0QlI1ZmE2U1Z0U2VSTHJCNWdQZ1BZVnQxSS9tZDh4M0h3WGhoNE1iMWZlQUpZNDFvdktFRWdHdUJYMjlvekM3cHdmYmtWRDV0ZHNDbWtjNk5mb3EwekNiNnc5aEVMUVAraUx5dTltN0tEcVRUUFV1Sm40ZW9XazY2VGV5TThZYXlGNFlRQUM0RmRteHF3SURmN01FMjVWU0xnRm0xUmxwRm1RTE1CZDROL0RQNTNXeG1PWEErc0UvVEE1T2hmWUdQa3Q4Y092K2JLajBBVkZubVY4V05QZGkybk9yTjlZWlpKZHNCZURwd0puQXhjRDM5VzNhMkVyaUN0TnBoMTNhR0lXdTdBVzhDcnFUTTFRS2x6MytwQVdBTjdhNURmMzBQdGpHbnVnV1hCRzZUZy9PSVBZQURnUDFKdCtmOGRlRFhnSjFJb2FITk8wd3RJbDNzTmgrNGxYVHpEeCtPTTVxZGdHT0F3MGpueGg5RENnZzVHZHI4bjBWNXQyMWRCcndjK0ZxTDd6RUR1SnR0M3o1WW0zb09LVXhMa25xZ3RDTUE5d0pITmpwQ1czZHVSOXRVU2wxV2I1aUhvYy9QQXBDa3Z2c3g4QnVreDVsMzRXUDRsTUFxWG9oTEFyZktBQ0JKOVZ3QlBKTjBXTDRyOStDTmJxcVlnczhIMkNvRGdDUlY5MW5nZWFSck43cm1Vd0tyZVFNdUNkd2lBNEFralc0OTZSSGxyeWZ1VVB4M2dCOEd2WGVPZGdWZUZkMUVIeGtBSkdrMHE0SFRTRGRrV2gvYmlrY0JLam9UVjcwOWlnRkFrclp2S2ZCaTRLK2pHOW5nL3dML0dkMUVSbzRBam85dW9tOE1BSkswYmZlUWJzWDdqZWhHTnJLU2RLdHpqVzVlZEFOOVl3Q1FwSzM3RVdtWlh4L1B1WCtDZFBkQmplYUZ3SUhSVGZTSkFVQ1N0dXhicEwvOGZ4SGR5RmJjRFh3bHVvbU1UTVVsZ1pzd0FFalNvLzBsOEFMU2MwTDZ6SXNCcTNGSjRFWU1BSkwwaU1sbGZtOGdqOFByVjlQUDB4Tjl0UnZ3eXVnbStzSUFJRW5KS3VEVnBHVitPZmxZZEFPWmVTc3VDUVFNQUpJRXNCQTRtYlM4TGpkL2cwc0NxemdDT0M2NmlUNHdBRWdhdXA4Qnp5RGRZUzlISzBuWExHaDBMZ21VcEFCdkp2NHhzWlAxWFdDUGRqZTNFM05JMXl4RWoyY3V0V2JEbUEyYVJ3QWtkZTJYMFExczhHWGdST0NCNkVZYWNCY3VDYXpDSllHU0ZPQVk0djhDdklEeS9nQTZudmh4emFrV0FqTnJqYlFrcVphZFNlZXRJM2I2YTBnUGhpblZqNGovWXMycDNsQnZtQ1ZKZFgyVjduZjJLNEdYZGJGeGdkNUkvSmRxVG5VekxnbVVwRTY5bm01MzlBdElweDVLTjVPMEpERDZpelduT3E3V1NFdVNhcGtPM0VFM08vamJnWU83MmF4ZStEUGl2MVJ6cXIrdE44eVNwTHBlUmZzNzkrdUFYKzlxZzNwaURpNEpyRkpyZ0FQcURMUWtxWjRwd0dXMHQyUC9BakNqczYzcGx5OFQvOFdhVTUxYmI1Z2xTWFh0VER0WHJwZTR6SytLRTRqL1VzMnAvaE9YQkVwUzUvWUZma0F6Ty9LSGdkTzdiYiszYmliK2l6V25lbjI5WVpZa2pXTVc2V0tzY1hiZ0M0Qm5kOXgzbjUxTy9KZHFUdldEZXNNc1NXckNpNEJicUxialhnMThDdGdub044K20wbTYyMTMwRjJ0TzlheGFJeTFKYXNSVTRDWEFaNEZmc2VVZDlSclNnM3orTjE3QnZTMGZJdjVMTmFlNnRONHc1OGs3SUVucXM2bkFYcVRyQkdZRFM0SDdnSjhEU3dMN3lzV0JwUHNnVEkxdUpCTnJnTWVUUGwrU0pHV3R6YVdXSmRZNTlZWlprcVIrT1pINEw5V2M2Z0ZncDFvakxVbFN6L2lVd0dyMXVuckRuQmZQQzBsUytkWUR2eFhkUkVibUFCZEZOeUZKMHJoOFNtRDFlbWF0a2M2SVJ3QWtxWHdQQTNzQ3gwWTNrcEdkS2Z4SmdTNERsS1JobUFQTXh6LzhScldHdEl6eUY5R050TVVQZ2lRTnc0UEFVY0NoMFkxa1lncXdFcmd5dWhGSmtzYjFIT0xQcmVkVUR3QTcxaHBwU1pKNnhpV0IxZXExdFVZNUE1NENrS1RoZVVGMEF4bVpnMHNDSlVrRmNFbGc5WHBHclpIdU9ZOEFTTkt3UEF3OERuaDZkQ01abVVXQlN3SmRCaWhKdzNNQWNBZitFVGlxSXBjRU92bVNORHlMZ2FOeFNlQ29wZ0FyZ0t1aUc1RWthVnduRVg5dVBhZTZINWNFU3BJS2NUUHhYNnc1MVduMWhybWZQQVVnU2NNMWdVc0NxNWlEU3dJbFNRV1lDU3drL2kvcm5LcVlCeXA1QkVDU2hzc2xnZFhOQXY0dXVva211QXhRa29idElPQ25wQ3ZkdFgwUGs1WlIzaHZjeDlnOEFpQkp3N1lJbUFzY0V0MUlKcVlDOXdEL0d0M0l1RXg4a3FRTG94dkl6SXVqRzJpQ3B3QWtTUlBBTGNEaDBZMWtZZ1hwV29Dc2VRUkFrclFlK0hoMEV4bVpDZXdhM2NTNFBBSWdTUUxZbVhTdis4ZEdONUtKeDVIdURwZ3Rqd0JJa2dDV0FaK0piaUlUYTRCZlJUY3hMZ09BSkduU3g0RjEwVTFrNEZZS0dDY0RnQ1JwMGgzQTE2T2J5TURYb2h1UUpLbHB6eVgrZHJ0OXJqVzRXa0tTVktBSjREYml2Mmo3V3ArdFBiSTk0NTBBSlVsYjh2em9CbnJvTHVDL2tlNERJRWxTY1hZQkhpVCtyKzArMWErQXA0NHpxSDNqRVFCSjB1WldBM3NCL3pXNmtaNjRGVGdSK0VsMEk1SWt0ZTFnWUMzeGYzbEgxa0xnRDRFWlk0NmxKRWxaK1JyeFg4SVI5VlBnSFJSd3UxOUprdW80aGZndjQ2NXFMWEE1OEVLOFRiNGthZUFtU09lL283K2MyNndsd0VXNHRsK1NwRTNNSS81THVvM3lNTDhrU2R1d0M3Q1krQy9zSnNyRC9KSWtWWEFCOFYvZTQ1U0grU1ZKcXVFSjVMa2swTVA4a2lTTjZaK0kvMElmcFR6TUwwbFNnNTVIL0plN2gva2xTZXBZWDU4UzZHRitTWkphZGlieFgvZ2U1cGNrcVdQUlR3bjBNTDhrU1VFK2lvZjVKVWthbkVPQWgrbm1NUDlYZ1pQeE1MOGtTYjF3RVI3bWx5UnBjR1lEOTlMc0YvK3R3RnVBblR2Y0RrbVNWTkZjWUFVZTVwY2thWENPQk83Q3cveVNKQTNPYk9CaVJyc3cwTVA4UGVJaEYwbFNFdzRDVGdXZVMzcDQwSjdBUXRLMUFsY0Jsd0hYa29LQWV1RC9BVzFCQ3l4NnBCckdBQUFBQUVsRlRrU3VRbUNDXCIgc3R5bGU9XCJ3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2ZpbHRlcjpicmlnaHRuZXNzKDApIGludmVydCgwLjg1KTtcIiAvPidcbiAgICB9XG5cbiAgICAvLyBCdWlsZCBhIGNhY2hlIG9mIGZpbHRlciBmaWVsZCDihpIgaWNvbiBIVE1MIGJ5IHJlYWRpbmcgdGhlIGNvbXBhY3QtZmlsdGVyIERPTVxuICAgIGNvbnN0IGdldEZpbHRlckljb25IdG1sID0gKGZpZWxkOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICAgIC8vIGNvbXBhY3QtZmlsdGVyIHJlbmRlcnMgaWNvbnMgaW5zaWRlIC5jb21wYWN0LWZpbHRlci1pY29uIGRpdnNcbiAgICAgIC8vIEVhY2ggaWNvbiBkaXYgaGFzIGEgZGF0YS1maWVsZCBvciB3ZSBpZGVudGlmeSBieSBvcmRlclxuICAgICAgY29uc3QgaWNvbkVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wYWN0LWZpbHRlci1pY29uJylcbiAgICAgIC8vIEZJTFRFUl9ERUZJTklUSU9OUyBvcmRlcjogc3VtbWVyX1NJLCBjbGFzc18yaywgY2xhc3NfNWssIGNsYXNzX2FpMWssXG4gICAgICAvLyBGU0k1MDBfbWVhLCBBUnc1MDBsbV8xLCBBRHdzX21lYW4sIEFEd21fbWVhbiwgQUR3YnVfbWVhbiwgd2lkdGhcbiAgICAgIGNvbnN0IGZpZWxkT3JkZXIgPSBbXG4gICAgICAgICdzdW1tZXJfU0knLCAnY2xhc3NfMmsnLCAnY2xhc3NfNWsnLCAnY2xhc3NfYWkxaycsXG4gICAgICAgICdGU0k1MDBfbWVhJywgJ0FSdzUwMGxtXzEnLCAnQUR3c19tZWFuJywgJ0FEd21fbWVhbicsICdBRHdidV9tZWFuJywgJ3dpZHRoJ1xuICAgICAgXVxuICAgICAgY29uc3QgaWR4ID0gZmllbGRPcmRlci5pbmRleE9mKGZpZWxkKVxuICAgICAgaWYgKGlkeCA8IDAgfHwgaWR4ID49IGljb25FbHMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICAgICAgY29uc3QgaWNvbkVsID0gaWNvbkVsc1tpZHhdXG4gICAgICAvLyBDbG9uZSB0aGUgaW5uZXIgY29udGVudCAoc3ZnIHNwYW4gb3IgaW1nKVxuICAgICAgY29uc3QgaW5uZXIgPSBpY29uRWwucXVlcnlTZWxlY3Rvcignc3BhbiwgaW1nJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGlmICghaW5uZXIpIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gaW5uZXIub3V0ZXJIVE1MXG4gICAgfVxuXG4gICAgY29uc3QgaW5qZWN0SWNvbnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWxpc3QtaXRlbScpXG5cbiAgICAgIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJydcbiAgICAgICAgaWYgKCF0aXRsZSkgcmV0dXJuXG4gICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5sYXllci1jdXN0b20taWNvbicpKSByZXR1cm5cblxuICAgICAgICBsZXQgaWNvbkh0bWw6IHN0cmluZyB8IG51bGwgPSBudWxsXG5cbiAgICAgICAgLy8gVHJ5IHRvIGNsb25lIGZyb20gdGhlIGNvbXBhY3QtZmlsdGVyIERPTVxuICAgICAgICBjb25zdCBmaWVsZCA9IGxheWVyVG9GaWVsZFt0aXRsZV1cbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgaWNvbkh0bWwgPSBnZXRGaWx0ZXJJY29uSHRtbChmaWVsZClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZhbGwgYmFjayB0byBzdGFuZGFsb25lIGljb25zIGZvciBub24tZmlsdGVyIGxheWVyc1xuICAgICAgICBpZiAoIWljb25IdG1sICYmIHN0YW5kYWxvbmVJY29uc1t0aXRsZV0pIHtcbiAgICAgICAgICBpY29uSHRtbCA9IHN0YW5kYWxvbmVJY29uc1t0aXRsZV1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaWNvbkh0bWwpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGljb25TcGFuLmNsYXNzTmFtZSA9ICdsYXllci1jdXN0b20taWNvbidcbiAgICAgICAgaWNvblNwYW4uaW5uZXJIVE1MID0gaWNvbkh0bWxcbiAgICAgICAgaWNvblNwYW4uc2V0QXR0cmlidXRlKCdzbG90JywgJ2NvbnRlbnQtc3RhcnQnKVxuICAgICAgICBpY29uU3Bhbi5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6aW5saW5lLWZsZXg7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttaW4td2lkdGg6MTZweDtjb2xvcjojYWFhOydcbiAgICAgICAgLy8gRW5zdXJlIGNvbnNpc3RlbnQgc2l6aW5nIG9uIGFsbCBjaGlsZCBzdmcvaW1nIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHN2Z0VsID0gaWNvblNwYW4ucXVlcnlTZWxlY3Rvcignc3ZnJylcbiAgICAgICAgaWYgKHN2Z0VsKSB7IHN2Z0VsLnN0eWxlLndpZHRoID0gJzE2cHgnOyBzdmdFbC5zdHlsZS5oZWlnaHQgPSAnMTZweCcgfVxuICAgICAgICBjb25zdCBpbWdFbCA9IGljb25TcGFuLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgIGlmIChpbWdFbCkgeyBpbWdFbC5zdHlsZS53aWR0aCA9ICcxNnB4JzsgaW1nRWwuc3R5bGUuaGVpZ2h0ID0gJzE2cHgnIH1cblxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGljb25TcGFuKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGluamVjdEljb25zLCAyMDAwKVxuICAgIHNldFRpbWVvdXQoaW5qZWN0SWNvbnMsIDMwMDApXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgfSwgW10pXG5cbiAgLy8gLS0tIExlZ2VuZCBwb3Atb3V0OiBtb3ZlIGxlZ2VuZHMgdG8gYSBmbG9hdGluZyBwYW5lbCByaWdodCBvZiB0aGUgc2lkZWJhciAtLS1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdHlsZUlkID0gJ2ZpbHRlci1sYXllci1zeW5jLWxlZ2VuZC1wb3BvdXQnXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKSkge1xuICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgICBzdHlsZS5pZCA9IHN0eWxlSWRcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgICAubGVnZW5kLXBvcG91dC1wYW5lbCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5sZWdlbmQtcG9wb3V0LXBhbmVsIC5lc3JpLWxlZ2VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubGVnZW5kLXBvcG91dC1wYW5lbCAuZXNyaS1sZWdlbmRfX3NlcnZpY2Uge1xuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubGVnZW5kLXBvcG91dC1wYW5lbCAuZXNyaS1sZWdlbmRfX2xheWVyLWNhcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZ2VuZC1wb3BvdXQtcGFuZWwgLmVzcmktbGVnZW5kX19sYXllci1jZWxsLS1pbmZvIHtcbiAgICAgICAgICBjb2xvcjogI2JiYiAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC8qIEhpZGUgbGVnZW5kcyBpbnNpZGUgdGhlIGxheWVycyBwYW5lbCDigJQgb25seSB0aGUgZGlyZWN0IHdyYXBwZXIgKi9cbiAgICAgICAgW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfOTRcIl0gLmVzcmktbGVnZW5kIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2FsY2l0ZSBzaGFkb3cgRE9NOiBjb2xsYXBzZSB0aGUgY29udGVudC1ib3R0b20gc2xvdCBhcmVhICovXG4gICAgICAgIFtkYXRhLXdpZGdldGlkPVwid2lkZ2V0Xzk0XCJdIGNhbGNpdGUtbGlzdC1pdGVtOjpwYXJ0KGNvbnRlbnQtYm90dG9tKSB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpXG4gICAgfVxuXG4gICAgY29uc3QgcG9wb3V0SWQgPSAnbGVnZW5kLXBvcG91dC1jb250YWluZXInXG4gICAgbGV0IG1vdmVkTGVnZW5kOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gICAgbGV0IGxlZ2VuZE9yaWdpbmFsUGFyZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gICAgbGV0IHRyYWNrZWRMaXN0SXRlbTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICAgIGxldCBjb2xsYXBzZWRBbmNlc3RvcnM6IEhUTUxFbGVtZW50W10gPSBbXVxuXG4gICAgY29uc3QgbW92ZUxlZ2VuZFRvUG9wb3V0ID0gKGxlZ2VuZDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyc1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfOTRcIl0nKSBhcyBIVE1MRWxlbWVudFxuICAgICAgaWYgKCFsYXllcnNQYW5lbCkgcmV0dXJuXG5cbiAgICAgIC8vIEZpbmQgcGFyZW50IGNhbGNpdGUtbGlzdC1pdGVtXG4gICAgICBsZXQgbGlzdEl0ZW06IEhUTUxFbGVtZW50IHwgbnVsbCA9IGxlZ2VuZFxuICAgICAgd2hpbGUgKGxpc3RJdGVtICYmIGxpc3RJdGVtLnRhZ05hbWUgIT09ICdDQUxDSVRFLUxJU1QtSVRFTScpIHtcbiAgICAgICAgbGlzdEl0ZW0gPSBsaXN0SXRlbS5wYXJlbnRFbGVtZW50XG4gICAgICB9XG4gICAgICBpZiAoIWxpc3RJdGVtKSByZXR1cm5cblxuICAgICAgbGVnZW5kT3JpZ2luYWxQYXJlbnQgPSBsZWdlbmQucGFyZW50RWxlbWVudFxuICAgICAgdHJhY2tlZExpc3RJdGVtID0gbGlzdEl0ZW1cbiAgICAgIG1vdmVkTGVnZW5kID0gbGVnZW5kXG5cbiAgICAgIC8vIENvbGxhcHNlIGFsbCBhbmNlc3RvcnMgYmV0d2VlbiBsZWdlbmQgYW5kIGxpc3QgaXRlbVxuICAgICAgY29sbGFwc2VkQW5jZXN0b3JzID0gW11cbiAgICAgIGxldCBhbmNlc3RvcjogSFRNTEVsZW1lbnQgfCBudWxsID0gbGVnZW5kLnBhcmVudEVsZW1lbnRcbiAgICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3RvciAhPT0gbGlzdEl0ZW0pIHtcbiAgICAgICAgYW5jZXN0b3Iuc3R5bGUuY3NzVGV4dCA9ICdtYXgtaGVpZ2h0OjAhaW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDttYXJnaW46MCFpbXBvcnRhbnQ7J1xuICAgICAgICBjb2xsYXBzZWRBbmNlc3RvcnMucHVzaChhbmNlc3RvcilcbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnRFbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBmbG9hdGluZyBwYW5lbCBhbmQgbW92ZSB0aGUgbGVnZW5kIGludG8gaXRcbiAgICAgIGxldCBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcG91dElkKSBhcyBIVE1MRWxlbWVudFxuICAgICAgaWYgKCFwYW5lbCkge1xuICAgICAgICBwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHBhbmVsLmlkID0gcG9wb3V0SWRcbiAgICAgICAgcGFuZWwuY2xhc3NOYW1lID0gJ2xlZ2VuZC1wb3BvdXQtcGFuZWwnXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFuZWwpXG4gICAgICB9XG4gICAgICBwYW5lbC5pbm5lckhUTUwgPSAnJ1xuICAgICAgcGFuZWwuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgICAvLyBQb3NpdGlvblxuICAgICAgY29uc3QgcGFuZWxSZWN0ID0gbGF5ZXJzUGFuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IGl0ZW1SZWN0ID0gbGlzdEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHBhbmVsLnN0eWxlLmxlZnQgPSAocGFuZWxSZWN0LnJpZ2h0ICsgNikgKyAncHgnXG4gICAgICBwYW5lbC5zdHlsZS50b3AgPSBNYXRoLm1heChpdGVtUmVjdC50b3AsIHBhbmVsUmVjdC50b3ApICsgJ3B4J1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFudXBQb3BvdXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcG91dElkKVxuICAgICAgaWYgKHBhbmVsKSBwYW5lbC5yZW1vdmUoKVxuICAgICAgY29sbGFwc2VkQW5jZXN0b3JzLmZvckVhY2goZWwgPT4geyBlbC5zdHlsZS5jc3NUZXh0ID0gJycgfSlcbiAgICAgIGNvbGxhcHNlZEFuY2VzdG9ycyA9IFtdXG4gICAgICBtb3ZlZExlZ2VuZCA9IG51bGxcbiAgICAgIGxlZ2VuZE9yaWdpbmFsUGFyZW50ID0gbnVsbFxuICAgICAgdHJhY2tlZExpc3RJdGVtID0gbnVsbFxuICAgIH1cblxuICAgIC8vIFVzZSBNdXRhdGlvbk9ic2VydmVyIHRvIGRldGVjdCBsZWdlbmQgYXBwZWFyaW5nL2Rpc2FwcGVhcmluZyBpbnN0YW50bHlcbiAgICBjb25zdCBsYXllcnNQYW5lbENoZWNrID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfOTRcIl0nKSBhcyBIVE1MRWxlbWVudFxuICAgIGxldCBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG5cbiAgICBjb25zdCBzZXR1cE9ic2VydmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbGF5ZXJzUGFuZWwgPSBsYXllcnNQYW5lbENoZWNrKClcbiAgICAgIGlmICghbGF5ZXJzUGFuZWwpIHJldHVyblxuXG4gICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgY29uc3QgbGVnZW5kcyA9IGxheWVyc1BhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lc3JpLWxlZ2VuZC5lc3JpLXdpZGdldCcpXG5cbiAgICAgICAgaWYgKG1vdmVkTGVnZW5kKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgb3JpZ2luYWwgcGFyZW50IHdhcyByZW1vdmVkIGZyb20gRE9NIChsZWdlbmQgdG9nZ2xlZCBvZmYpXG4gICAgICAgICAgaWYgKGxlZ2VuZE9yaWdpbmFsUGFyZW50ICYmICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGxlZ2VuZE9yaWdpbmFsUGFyZW50KSkge1xuICAgICAgICAgICAgY2xlYW51cFBvcG91dCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgbGVnZW5kIGVsZW1lbnQgd2FzIGRlc3Ryb3llZFxuICAgICAgICAgIGNvbnN0IHBvcG91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcG91dElkKVxuICAgICAgICAgIGNvbnN0IGxlZ2VuZFN0aWxsSW5Qb3BvdXQgPSBwb3BvdXQgJiYgcG9wb3V0LmNvbnRhaW5zKG1vdmVkTGVnZW5kKVxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhtb3ZlZExlZ2VuZCkgJiYgIWxlZ2VuZFN0aWxsSW5Qb3BvdXQpIHtcbiAgICAgICAgICAgIGNsZWFudXBQb3BvdXQoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEEgZGlmZmVyZW50IGxlZ2VuZCBhcHBlYXJlZCDigJQgbW92ZSB0aGF0IG9uZSBpbnN0ZWFkXG4gICAgICAgICAgaWYgKGxlZ2VuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3TGVnZW5kID0gbGVnZW5kc1swXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgaWYgKG5ld0xlZ2VuZCAhPT0gbW92ZWRMZWdlbmQgJiYgbmV3TGVnZW5kLnF1ZXJ5U2VsZWN0b3IoJy5lc3JpLWxlZ2VuZF9fbGF5ZXItcm93JykpIHtcbiAgICAgICAgICAgICAgY2xlYW51cFBvcG91dCgpXG4gICAgICAgICAgICAgIG1vdmVMZWdlbmRUb1BvcG91dChuZXdMZWdlbmQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gbGVnZW5kIGN1cnJlbnRseSBtb3ZlZCDigJQgY2hlY2sgZm9yIG5ldyBvbmVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVnZW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZHNbaV0gYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICBpZiAobGVnZW5kLnF1ZXJ5U2VsZWN0b3IoJy5lc3JpLWxlZ2VuZF9fbGF5ZXItcm93JykpIHtcbiAgICAgICAgICAgIG1vdmVMZWdlbmRUb1BvcG91dChsZWdlbmQpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShsYXllcnNQYW5lbCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcbiAgICB9XG5cbiAgICAvLyBXYWl0IGZvciBsYXllcnMgcGFuZWwgdG8gYXBwZWFyLCB0aGVuIHNldCB1cCBvYnNlcnZlclxuICAgIGNvbnN0IHdhaXRGb3JQYW5lbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChsYXllcnNQYW5lbENoZWNrKCkpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh3YWl0Rm9yUGFuZWwpXG4gICAgICAgIHNldHVwT2JzZXJ2ZXIoKVxuICAgICAgfVxuICAgIH0sIDUwMClcblxuICAgIC8vIFBvbGwgZm9yIHBvc2l0aW9uIHVwZGF0ZXMgYW5kIGNsZWFudXAgZGV0ZWN0aW9uXG4gICAgY29uc3QgcG9zaXRpb25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICghbW92ZWRMZWdlbmQgfHwgIXRyYWNrZWRMaXN0SXRlbSkgcmV0dXJuXG4gICAgICAvLyBDbGVhbnVwIGlmIG9yaWdpbmFsIHBhcmVudCB3YXMgcmVtb3ZlZCAodG9nZ2xlIG9mZilcbiAgICAgIGlmIChsZWdlbmRPcmlnaW5hbFBhcmVudCAmJiAhZG9jdW1lbnQuYm9keS5jb250YWlucyhsZWdlbmRPcmlnaW5hbFBhcmVudCkpIHtcbiAgICAgICAgY2xlYW51cFBvcG91dCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgcG9wb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9wb3V0SWQpXG4gICAgICBpZiAoIXBvcG91dCkgcmV0dXJuXG4gICAgICBjb25zdCBsYXllcnNQYW5lbCA9IGxheWVyc1BhbmVsQ2hlY2soKVxuICAgICAgaWYgKCFsYXllcnNQYW5lbCkgcmV0dXJuXG4gICAgICBjb25zdCBwYW5lbFJlY3QgPSBsYXllcnNQYW5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgaXRlbVJlY3QgPSB0cmFja2VkTGlzdEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHBvcG91dC5zdHlsZS5sZWZ0ID0gKHBhbmVsUmVjdC5yaWdodCArIDYpICsgJ3B4J1xuICAgICAgcG9wb3V0LnN0eWxlLnRvcCA9IE1hdGgubWF4KGl0ZW1SZWN0LnRvcCwgcGFuZWxSZWN0LnRvcCkgKyAncHgnXG4gICAgfSwgMzAwKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwod2FpdEZvclBhbmVsKVxuICAgICAgY2xlYXJJbnRlcnZhbChwb3NpdGlvbkludGVydmFsKVxuICAgICAgaWYgKG9ic2VydmVyKSBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIGNsZWFudXBQb3BvdXQoKVxuICAgICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpXG4gICAgICBpZiAoc3R5bGVFbCkgc3R5bGVFbC5yZW1vdmUoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgLy8gLS0tIEZvcmNlIGluc3RydWN0aW9uIGRpYWxvZyB0byBzaG93IGZyb20gdG9wIC0tLVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB3YXNWaXNpYmxlID0gZmFsc2VcbiAgICBsZXQgc2Nyb2xsVGltZXI6IGFueSA9IG51bGxcblxuICAgIGNvbnN0IHNjcm9sbERpYWxvZ1RvVG9wID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfMTQxXCJdJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IHdpZGdldCAmJiB3aWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ID4gMFxuXG4gICAgICBpZiAoIWlzVmlzaWJsZSkge1xuICAgICAgICB3YXNWaXNpYmxlID0gZmFsc2VcbiAgICAgICAgaWYgKHNjcm9sbFRpbWVyKSB7IGNsZWFySW50ZXJ2YWwoc2Nyb2xsVGltZXIpOyBzY3JvbGxUaW1lciA9IG51bGwgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHdhc1Zpc2libGUpIHJldHVyblxuICAgICAgd2FzVmlzaWJsZSA9IHRydWVcblxuICAgICAgLy8gQWdncmVzc2l2ZWx5IHJlc2V0IHNjcm9sbCBldmVyeSA1MG1zIGZvciAyIHNlY29uZHNcbiAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgIHNjcm9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuamltdS1zY3JvbGxhYmxlLXNjcm9sbC1jb250YWluZXInKS5mb3JFYWNoKChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICgoZWwgYXMgSFRNTEVsZW1lbnQpLnNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICAgIChlbCBhcyBIVE1MRWxlbWVudCkuc2Nyb2xsVG9wID0gMFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY291bnQrK1xuICAgICAgICBpZiAoY291bnQgPiA0MCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsVGltZXIpXG4gICAgICAgICAgc2Nyb2xsVGltZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH0sIDUwKVxuICAgIH1cblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoc2Nyb2xsRGlhbG9nVG9Ub3AsIDMwMClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgIGlmIChzY3JvbGxUaW1lcikgY2xlYXJJbnRlcnZhbChzY3JvbGxUaW1lcilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8vIC0tLSBGb3JjZSBoZWFkZXIgYnV0dG9uIHN0eWxlcyAod2hpdGUgdGV4dCwgbm8gdW5kZXJsaW5lKSAtLS1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdHlsZUlkID0gJ2hlYWRlci1idXR0b24tc3R5bGVzJ1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKSkgcmV0dXJuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgc3R5bGUuaWQgPSBzdHlsZUlkXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICBbZGF0YS13aWRnZXRpZD1cIndpZGdldF8yMDJcIl0gYSxcbiAgICAgIFtkYXRhLXdpZGdldGlkPVwid2lkZ2V0XzIwMlwiXSBidXR0b24sXG4gICAgICBbZGF0YS13aWRnZXRpZD1cIndpZGdldF8yMDJcIl0gc3BhbixcbiAgICAgIFtkYXRhLXdpZGdldGlkPVwid2lkZ2V0XzIwNFwiXSBhLFxuICAgICAgW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfMjA0XCJdIGJ1dHRvbixcbiAgICAgIFtkYXRhLXdpZGdldGlkPVwid2lkZ2V0XzIwNFwiXSBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfMjAyXCJdIGE6aG92ZXIsXG4gICAgICBbZGF0YS13aWRnZXRpZD1cIndpZGdldF8yMDRcIl0gYTpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgYFxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZClcbiAgICAgIGlmIChlbCkgZWwucmVtb3ZlKClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8vIC0tLSBNYWtlIEJEQVIgbG9nbyBjbGlja2FibGUgLS0tXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWFrZUxvZ29DbGlja2FibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsb2dvV2lkZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfMTA3XCJdJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGlmICghbG9nb1dpZGdldCB8fCBsb2dvV2lkZ2V0LmRhdGFzZXQubGlua0F0dGFjaGVkKSByZXR1cm5cbiAgICAgIGxvZ29XaWRnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICBsb2dvV2lkZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9vcmFsZWtzLm5ldC50ZWNobmlvbi5hYy5pbC9lbi9iZGFyLWxhYi8nLCAnX2JsYW5rJylcbiAgICAgIH0pXG4gICAgICBsb2dvV2lkZ2V0LmRhdGFzZXQubGlua0F0dGFjaGVkID0gJ3RydWUnXG4gICAgfVxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwobWFrZUxvZ29DbGlja2FibGUsIDEwMDApXG4gICAgbWFrZUxvZ29DbGlja2FibGUoKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxuICB9LCBbXSlcblxuICAvLyBIZWFkbGVzcyB3aWRnZXQg4oCUIG9ubHkgdGhlIEppbXVNYXBWaWV3Q29tcG9uZW50IGNvbm5lY3RvclxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuICAgICAge3VzZU1hcFdpZGdldElkcz8uWzBdICYmIChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3VzZU1hcFdpZGdldElkc1swXX1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3NldEppbXVNYXBWaWV3fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==