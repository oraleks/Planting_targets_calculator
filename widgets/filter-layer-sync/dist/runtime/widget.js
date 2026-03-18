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
        // Skip if nothing changed
        if (currentSql === prevSqlRef.current)
            return;
        prevSqlRef.current = currentSql;
        console.log('[filter-layer-sync] SQL changed:', currentSql, '| from DS:', foundDsId, '| filterWidgetId:', filterWidgetId);
        // Parse into individual clauses
        const activeClauses = parseFilterClauses(currentSql, knownFields);
        // Build combined SQL from all active filter clauses
        const allClauses = [...activeClauses.values()];
        const combinedSql = allClauses.length > 0 ? allClauses.join(' AND ') : '1=1';
        console.log('[filter-layer-sync] Applying combined SQL:', combinedSql);
        // Apply combined SQL to ALL visualization layers (cumulative filtering)
        for (const mapping of mappings) {
            const layer = findLayerByTitle(mapping.layerTitle);
            if (!layer) {
                console.log('[filter-layer-sync] Layer not found:', mapping.layerTitle);
                continue;
            }
            layer.definitionExpression = combinedSql;
            console.log('[filter-layer-sync] Applied to layer:', mapping.layerTitle);
        }
        // Apply same combined SQL to "Selected streets" layer
        const selectedLayer = findLayerByTitle(selectedLayerTitle);
        if (selectedLayer) {
            selectedLayer.definitionExpression = combinedSql;
            console.log('[filter-layer-sync] Applied to Selected streets');
        }
        else {
            console.log('[filter-layer-sync] Selected streets layer not found');
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
                        color: [242, 242, 242, 1],
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
            'Existing trees': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#8bc34a"><path d="M8 1C6.3 3 4 5.5 4 8a4 4 0 0 0 3.5 3.97V14H6v1h4v-1H8.5v-2.03A4 4 0 0 0 12 8c0-2.5-2.3-5-4-7z"/></svg>',
            'Selected streets': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M1 3h14v1H1zm0 3h14v1H1zm0 3h14v1H1zm0 3h14v1H1zM7 1h2v14H7z" opacity=".6"/></svg>'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItbGF5ZXItc3luYy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFDZiw4QkFBOEI7QUFDZ0Q7QUFDVjtBQUdwRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsNENBQUs7QUFFMUQ7OztHQUdHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FDekIsR0FBVyxFQUNYLFdBQXFCO0lBRXJCLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxFQUFrQjtJQUN4QyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLO1FBQUUsT0FBTyxNQUFNO0lBRXhDLDREQUE0RDtJQUM1RCxNQUFNLFdBQVcsR0FBRyxpQkFBaUI7SUFDckMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FDekIsdUNBQXVDLEVBQ3ZDLGNBQWMsV0FBVyxLQUFLLENB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R0FBRyxFQUFFO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxFQUFFLFFBQVEsQ0FBQztZQUMxRSxDQUFDLENBQUM7WUFDRixVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxNQUFNO1FBQzFDLENBQUM7UUFDRCxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDO1FBQ3JELGlCQUFpQixFQUFFO1FBQ25CLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN0QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sNERBQTREO0lBQzVELE9BQU8sQ0FDTCx5RUFBSyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQzVCLGdCQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUcsQ0FBQyxDQUFDLEtBQUksQ0FDdkIsZ0VBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLGtCQUFrQixFQUFFLGNBQWMsR0FDbEMsQ0FDSCxHQUNHLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0ZXItbGF5ZXItc3luYy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCB0eXBlIEFsbFdpZGdldFByb3BzLCBEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnLCBGaWx0ZXJMYXllck1hcHBpbmcgfSBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9ID0gUmVhY3RcblxuLyoqXG4gKiBQYXJzZSBhIGNvbWJpbmVkIFNRTCBXSEVSRSBjbGF1c2UgaW50byBpbmRpdmlkdWFsIGZpbHRlciBjbGF1c2VzLFxuICoga2V5ZWQgYnkgdGhlaXIgZmllbGQgbmFtZS5cbiAqL1xuZnVuY3Rpb24gcGFyc2VGaWx0ZXJDbGF1c2VzIChcbiAgc3FsOiBzdHJpbmcsXG4gIGtub3duRmllbGRzOiBzdHJpbmdbXVxuKTogTWFwPHN0cmluZywgc3RyaW5nPiB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcbiAgaWYgKCFzcWwgfHwgc3FsID09PSAnMT0xJykgcmV0dXJuIHJlc3VsdFxuXG4gIC8vIFRlbXBvcmFyaWx5IHJlcGxhY2UgQkVUV0VFTi4uLkFORCBzbyB3ZSBkb24ndCBzcGxpdCBvbiBpdFxuICBjb25zdCBwbGFjZWhvbGRlciA9ICcjI0JFVFdFRU5fQU5EIyMnXG4gIGNvbnN0IHNhZmVTcWwgPSBzcWwucmVwbGFjZShcbiAgICAvQkVUV0VFTlxccysoW1xcZC5dKylcXHMrQU5EXFxzKyhbXFxkLl0rKS9naSxcbiAgICBgQkVUV0VFTiAkMSAke3BsYWNlaG9sZGVyfSAkMmBcbiAgKVxuXG4gIGNvbnN0IHBhcnRzID0gc2FmZVNxbC5zcGxpdCgvXFxzK0FORFxccysvaSlcblxuICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICBsZXQgY2xhdXNlID0gcGFydC50cmltKCkucmVwbGFjZShuZXcgUmVnRXhwKHBsYWNlaG9sZGVyLCAnZycpLCAnQU5EJylcblxuICAgIC8vIFN0cmlwIG91dGVyIHBhcmVudGhlc2VzIGlmIHByZXNlbnRcbiAgICBpZiAoY2xhdXNlLnN0YXJ0c1dpdGgoJygnKSAmJiBjbGF1c2UuZW5kc1dpdGgoJyknKSkge1xuICAgICAgY2xhdXNlID0gY2xhdXNlLnNsaWNlKDEsIC0xKS50cmltKClcbiAgICB9XG5cbiAgICAvLyBNYXRjaCB0aGlzIGNsYXVzZSB0byBhIGtub3duIGZpZWxkXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBrbm93bkZpZWxkcykge1xuICAgICAgaWYgKGNsYXVzZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoZmllbGQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgcmVzdWx0LnNldChmaWVsZCwgY2xhdXNlKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsdGVyTGF5ZXJTeW5jV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IHsgY29uZmlnLCB1c2VNYXBXaWRnZXRJZHMgfSA9IHByb3BzXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXcgfCBudWxsPihudWxsKVxuICBjb25zdCBwcmV2U3FsUmVmID0gdXNlUmVmPHN0cmluZz4oJycpXG4gIGNvbnN0IHJlbmRlcmVyQXBwbGllZCA9IHVzZVJlZjxib29sZWFuPihmYWxzZSlcblxuICBjb25zdCBmaWx0ZXJXaWRnZXRJZCA9IGNvbmZpZz8uZmlsdGVyV2lkZ2V0SWQgfHwgJ3dpZGdldF80J1xuICBjb25zdCBzZWxlY3RlZExheWVyVGl0bGUgPSBjb25maWc/LnNlbGVjdGVkU2VnbWVudHNMYXllclRpdGxlIHx8ICdTZWxlY3RlZCBzdHJlZXRzJ1xuICBjb25zdCBtYXBwaW5nczogRmlsdGVyTGF5ZXJNYXBwaW5nW10gPSAoY29uZmlnPy5tYXBwaW5ncyBhcyBhbnkpPy5hc011dGFibGVcbiAgICA/IChjb25maWcubWFwcGluZ3MgYXMgYW55KS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gICAgOiAoY29uZmlnPy5tYXBwaW5ncyB8fCBbXSkgYXMgYW55XG4gIGNvbnN0IGtub3duRmllbGRzID0gbWFwcGluZ3MubWFwKG0gPT4gbS5maWx0ZXJGaWVsZClcblxuICAvLyBGaW5kIGEgRmVhdHVyZUxheWVyIGluIHRoZSBtYXAgYnkgaXRzIHRpdGxlXG4gIGNvbnN0IGZpbmRMYXllckJ5VGl0bGUgPSB1c2VDYWxsYmFjayhcbiAgICAodGl0bGU6IHN0cmluZyk6IGFueSA9PiB7XG4gICAgICBpZiAoIWppbXVNYXBWaWV3Py52aWV3Py5tYXApIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQoXG4gICAgICAgIChsOiBhbnkpID0+IGwudGl0bGUgPT09IHRpdGxlICYmIGwudHlwZSA9PT0gJ2ZlYXR1cmUnXG4gICAgICApIHx8IG51bGxcbiAgICB9LFxuICAgIFtqaW11TWFwVmlld11cbiAgKVxuXG4gIC8vIENvcmUgc3luYyBsb2dpYzogcmVhZCBmaWx0ZXIgU1FMLCBhcHBseSBkZWZpbml0aW9uIGV4cHJlc3Npb25zXG4gIGNvbnN0IHN5bmNGaWx0ZXJzVG9MYXllcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFqaW11TWFwVmlldz8udmlldz8ubWFwKSByZXR1cm5cblxuICAgIC8vIEZpbmQgdGhlIGRhdGEgc291cmNlIHRoZSBmaWx0ZXIgd2lkZ2V0IHRhcmdldHNcbiAgICBjb25zdCBkc01hbmFnZXIgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgbGV0IGN1cnJlbnRTcWwgPSAnJ1xuICAgIGxldCBmb3VuZERzSWQgPSAnJ1xuICAgIGNvbnN0IGFsbERzID0gZHNNYW5hZ2VyLmdldERhdGFTb3VyY2VzKClcbiAgICBmb3IgKGNvbnN0IGRzSWQgb2YgT2JqZWN0LmtleXMoYWxsRHMpKSB7XG4gICAgICBjb25zdCBkcyA9IGFsbERzW2RzSWRdXG4gICAgICBjb25zdCBpbmZvID0gZHM/LmdldEluZm8/LigpXG4gICAgICBjb25zdCB3aWRnZXRRdWVyaWVzID0gKGluZm8gYXMgYW55KT8ud2lkZ2V0UXVlcmllc1xuICAgICAgaWYgKHdpZGdldFF1ZXJpZXM/LltmaWx0ZXJXaWRnZXRJZF0pIHtcbiAgICAgICAgY3VycmVudFNxbCA9IHdpZGdldFF1ZXJpZXNbZmlsdGVyV2lkZ2V0SWRdLndoZXJlIHx8ICcnXG4gICAgICAgIGZvdW5kRHNJZCA9IGRzSWRcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTa2lwIGlmIG5vdGhpbmcgY2hhbmdlZFxuICAgIGlmIChjdXJyZW50U3FsID09PSBwcmV2U3FsUmVmLmN1cnJlbnQpIHJldHVyblxuICAgIHByZXZTcWxSZWYuY3VycmVudCA9IGN1cnJlbnRTcWxcblxuICAgIGNvbnNvbGUubG9nKCdbZmlsdGVyLWxheWVyLXN5bmNdIFNRTCBjaGFuZ2VkOicsIGN1cnJlbnRTcWwsICd8IGZyb20gRFM6JywgZm91bmREc0lkLCAnfCBmaWx0ZXJXaWRnZXRJZDonLCBmaWx0ZXJXaWRnZXRJZClcblxuICAgIC8vIFBhcnNlIGludG8gaW5kaXZpZHVhbCBjbGF1c2VzXG4gICAgY29uc3QgYWN0aXZlQ2xhdXNlcyA9IHBhcnNlRmlsdGVyQ2xhdXNlcyhjdXJyZW50U3FsLCBrbm93bkZpZWxkcylcblxuICAgIC8vIEJ1aWxkIGNvbWJpbmVkIFNRTCBmcm9tIGFsbCBhY3RpdmUgZmlsdGVyIGNsYXVzZXNcbiAgICBjb25zdCBhbGxDbGF1c2VzID0gWy4uLmFjdGl2ZUNsYXVzZXMudmFsdWVzKCldXG4gICAgY29uc3QgY29tYmluZWRTcWwgPSBhbGxDbGF1c2VzLmxlbmd0aCA+IDAgPyBhbGxDbGF1c2VzLmpvaW4oJyBBTkQgJykgOiAnMT0xJ1xuXG4gICAgY29uc29sZS5sb2coJ1tmaWx0ZXItbGF5ZXItc3luY10gQXBwbHlpbmcgY29tYmluZWQgU1FMOicsIGNvbWJpbmVkU3FsKVxuXG4gICAgLy8gQXBwbHkgY29tYmluZWQgU1FMIHRvIEFMTCB2aXN1YWxpemF0aW9uIGxheWVycyAoY3VtdWxhdGl2ZSBmaWx0ZXJpbmcpXG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIG1hcHBpbmdzKSB7XG4gICAgICBjb25zdCBsYXllciA9IGZpbmRMYXllckJ5VGl0bGUobWFwcGluZy5sYXllclRpdGxlKVxuICAgICAgaWYgKCFsYXllcikge1xuICAgICAgICBjb25zb2xlLmxvZygnW2ZpbHRlci1sYXllci1zeW5jXSBMYXllciBub3QgZm91bmQ6JywgbWFwcGluZy5sYXllclRpdGxlKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBjb21iaW5lZFNxbFxuICAgICAgY29uc29sZS5sb2coJ1tmaWx0ZXItbGF5ZXItc3luY10gQXBwbGllZCB0byBsYXllcjonLCBtYXBwaW5nLmxheWVyVGl0bGUpXG4gICAgfVxuXG4gICAgLy8gQXBwbHkgc2FtZSBjb21iaW5lZCBTUUwgdG8gXCJTZWxlY3RlZCBzdHJlZXRzXCIgbGF5ZXJcbiAgICBjb25zdCBzZWxlY3RlZExheWVyID0gZmluZExheWVyQnlUaXRsZShzZWxlY3RlZExheWVyVGl0bGUpXG4gICAgaWYgKHNlbGVjdGVkTGF5ZXIpIHtcbiAgICAgIHNlbGVjdGVkTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBjb21iaW5lZFNxbFxuICAgICAgY29uc29sZS5sb2coJ1tmaWx0ZXItbGF5ZXItc3luY10gQXBwbGllZCB0byBTZWxlY3RlZCBzdHJlZXRzJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1tmaWx0ZXItbGF5ZXItc3luY10gU2VsZWN0ZWQgc3RyZWV0cyBsYXllciBub3QgZm91bmQnKVxuICAgIH1cbiAgfSwgW1xuICAgIGppbXVNYXBWaWV3LCBmaWx0ZXJXaWRnZXRJZCwga25vd25GaWVsZHMsIG1hcHBpbmdzLFxuICAgIGZpbmRMYXllckJ5VGl0bGUsIHNlbGVjdGVkTGF5ZXJUaXRsZVxuICBdKVxuXG4gIC8vIE9uIHN0YXJ0dXA6IGFwcGx5IHJlbmRlcmVyLCBtb3ZlIFwiU2VsZWN0ZWQgc3RyZWV0c1wiIHRvIGJhY2ssIHNldCBhcyBvbmx5IHZpc2libGUgbGF5ZXJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWppbXVNYXBWaWV3Py52aWV3Py5tYXAgfHwgcmVuZGVyZXJBcHBsaWVkLmN1cnJlbnQpIHJldHVyblxuXG4gICAgY29uc3QgaW5pdFNlbGVjdGVkTGF5ZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtYXAgPSBqaW11TWFwVmlldy52aWV3Lm1hcFxuICAgICAgY29uc3Qgc2VsZWN0ZWRMYXllciA9IGZpbmRMYXllckJ5VGl0bGUoc2VsZWN0ZWRMYXllclRpdGxlKVxuICAgICAgaWYgKCFzZWxlY3RlZExheWVyKSByZXR1cm5cblxuICAgICAgLy8gQXBwbHkgY3VzdG9tIHJlbmRlcmVyXG4gICAgICBzZWxlY3RlZExheWVyLm9wYWNpdHkgPSAxLjBcbiAgICAgIHNlbGVjdGVkTGF5ZXIucmVuZGVyZXIgPSB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICAgIGNvbG9yOiBbMTUxLCAxNTEsIDE1MSwgMV0sXG4gICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgY29sb3I6IFsyNDIsIDI0MiwgMjQyLCAxXSxcbiAgICAgICAgICAgIHdpZHRoOiAwLjVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gYXMgYW55XG5cbiAgICAgIC8vIE1vdmUgXCJTZWxlY3RlZCBzdHJlZXRzXCIgdG8gYm90dG9tIChpbmRleCAwID0gZHJhd24gZmlyc3QgPSBiZWhpbmQgZXZlcnl0aGluZylcbiAgICAgIG1hcC5sYXllcnMucmVtb3ZlKHNlbGVjdGVkTGF5ZXIpXG4gICAgICBtYXAubGF5ZXJzLmFkZChzZWxlY3RlZExheWVyLCAwKVxuXG4gICAgICAvLyBUdXJuIG9mZiBhbGwgYXR0cmlidXRlIGxheWVycywgdHVybiBvbiBvbmx5IFwiU2VsZWN0ZWQgc3RyZWV0c1wiXG4gICAgICBmb3IgKGNvbnN0IG1hcHBpbmcgb2YgbWFwcGluZ3MpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBmaW5kTGF5ZXJCeVRpdGxlKG1hcHBpbmcubGF5ZXJUaXRsZSlcbiAgICAgICAgaWYgKGxheWVyKSBsYXllci52aXNpYmxlID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIHNlbGVjdGVkTGF5ZXIudmlzaWJsZSA9IHRydWVcblxuICAgICAgcmVuZGVyZXJBcHBsaWVkLmN1cnJlbnQgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gVHJ5IGltbWVkaWF0ZWx5LCB0aGVuIHJldHJ5IGFmdGVyIGxheWVycyBsb2FkXG4gICAgaW5pdFNlbGVjdGVkTGF5ZXIoKVxuICAgIGlmICghcmVuZGVyZXJBcHBsaWVkLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGluaXRTZWxlY3RlZExheWVyLCAyMDAwKVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIH1cbiAgfSwgW2ppbXVNYXBWaWV3LCBmaW5kTGF5ZXJCeVRpdGxlLCBzZWxlY3RlZExheWVyVGl0bGVdKVxuXG4gIC8vIFBvbGwgZm9yIGZpbHRlciBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFqaW11TWFwVmlldykgcmV0dXJuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChzeW5jRmlsdGVyc1RvTGF5ZXJzLCA1MDApXG4gICAgc3luY0ZpbHRlcnNUb0xheWVycygpXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIH0sIFtqaW11TWFwVmlldywgc3luY0ZpbHRlcnNUb0xheWVyc10pXG5cbiAgLy8gLS0tIEluamVjdCBpY29ucyBpbnRvIHRoZSBNYXAgTGF5ZXJzIHdpZGdldCAtLS1cbiAgLy8gSWNvbnMgYXJlIGNsb25lZCBmcm9tIHRoZSBjb21wYWN0LWZpbHRlciB3aWRnZXQncyByZW5kZXJlZCBET00gc28gdGhleVxuICAvLyBhcmUgYWx3YXlzIGlkZW50aWNhbC4gIE9ubHkgXCJFeGlzdGluZyB0cmVlc1wiIGFuZCBcIlNlbGVjdGVkIHN0cmVldHNcIiBoYXZlXG4gIC8vIHN0YW5kYWxvbmUgU1ZHcyBiZWNhdXNlIHRoZXkgaGF2ZSBubyBjb3JyZXNwb25kaW5nIGZpbHRlci5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBNYXAgbGF5ZXIgdGl0bGVzIOKGkiBmaWx0ZXIgZmllbGQgbmFtZXMgKHVzZWQgdG8gZmluZCB0aGUgbWF0Y2hpbmdcbiAgICAvLyBjb21wYWN0LWZpbHRlciBpY29uIGVsZW1lbnQpLiAgT3JkZXIgbWF0Y2hlcyBGSUxURVJfREVGSU5JVElPTlMuXG4gICAgY29uc3QgbGF5ZXJUb0ZpZWxkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgJ1NwcmluZy9TdW1tZXIgU2hhZGUgSW5kZXgnOiAnc3VtbWVyX1NJJyxcbiAgICAgICdOZWlnaGJvdXJob29kIHRyYW5zaXQnOiAnY2xhc3NfMmsnLFxuICAgICAgJ0NpdHkgdHJhbnNpdCc6ICdjbGFzc181aycsXG4gICAgICAnTG9jYWwgY2VudGVycyc6ICdjbGFzc19haTFrJyxcbiAgICAgICdCdWlsZGluZyBkZW5zaXR5JzogJ0ZTSTUwMF9tZWEnLFxuICAgICAgJ0FjY2VzcyB0byBzaG9wcyBhbmQgcmVzdGF1cmFudHMnOiAnQVJ3NTAwbG1fMScsXG4gICAgICAnU2Nob29sIG9yIHByZXNjaG9vbCBwcm94aW1pdHknOiAnQUR3c19tZWFuJyxcbiAgICAgICdUcmFtLCBtZXRybyBvciByYWlsd2F5IHN0YXRpb24gcHJveGltaXR5JzogJ0FEd21fbWVhbicsXG4gICAgICAnQnVzIHN0b3AgcHJveGltaXR5JzogJ0FEd2J1X21lYW4nXG4gICAgfVxuXG4gICAgLy8gTGF5ZXJzIHdpdGggbm8gY29ycmVzcG9uZGluZyBmaWx0ZXIgZ2V0IGEgc3RhbmRhbG9uZSBTVkdcbiAgICBjb25zdCBzdGFuZGFsb25lSWNvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAnRXhpc3RpbmcgdHJlZXMnOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCIjOGJjMzRhXCI+PHBhdGggZD1cIk04IDFDNi4zIDMgNCA1LjUgNCA4YTQgNCAwIDAgMCAzLjUgMy45N1YxNEg2djFoNHYtMUg4LjV2LTIuMDNBNCA0IDAgMCAwIDEyIDhjMC0yLjUtMi4zLTUtNC03elwiLz48L3N2Zz4nLFxuICAgICAgJ1NlbGVjdGVkIHN0cmVldHMnOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTEgM2gxNHYxSDF6bTAgM2gxNHYxSDF6bTAgM2gxNHYxSDF6bTAgM2gxNHYxSDF6TTcgMWgydjE0SDd6XCIgb3BhY2l0eT1cIi42XCIvPjwvc3ZnPidcbiAgICB9XG5cbiAgICAvLyBCdWlsZCBhIGNhY2hlIG9mIGZpbHRlciBmaWVsZCDihpIgaWNvbiBIVE1MIGJ5IHJlYWRpbmcgdGhlIGNvbXBhY3QtZmlsdGVyIERPTVxuICAgIGNvbnN0IGdldEZpbHRlckljb25IdG1sID0gKGZpZWxkOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICAgIC8vIGNvbXBhY3QtZmlsdGVyIHJlbmRlcnMgaWNvbnMgaW5zaWRlIC5jb21wYWN0LWZpbHRlci1pY29uIGRpdnNcbiAgICAgIC8vIEVhY2ggaWNvbiBkaXYgaGFzIGEgZGF0YS1maWVsZCBvciB3ZSBpZGVudGlmeSBieSBvcmRlclxuICAgICAgY29uc3QgaWNvbkVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wYWN0LWZpbHRlci1pY29uJylcbiAgICAgIC8vIEZJTFRFUl9ERUZJTklUSU9OUyBvcmRlcjogc3VtbWVyX1NJLCBjbGFzc18yaywgY2xhc3NfNWssIGNsYXNzX2FpMWssXG4gICAgICAvLyBGU0k1MDBfbWVhLCBBUnc1MDBsbV8xLCBBRHdzX21lYW4sIEFEd21fbWVhbiwgQUR3YnVfbWVhbiwgd2lkdGhcbiAgICAgIGNvbnN0IGZpZWxkT3JkZXIgPSBbXG4gICAgICAgICdzdW1tZXJfU0knLCAnY2xhc3NfMmsnLCAnY2xhc3NfNWsnLCAnY2xhc3NfYWkxaycsXG4gICAgICAgICdGU0k1MDBfbWVhJywgJ0FSdzUwMGxtXzEnLCAnQUR3c19tZWFuJywgJ0FEd21fbWVhbicsICdBRHdidV9tZWFuJywgJ3dpZHRoJ1xuICAgICAgXVxuICAgICAgY29uc3QgaWR4ID0gZmllbGRPcmRlci5pbmRleE9mKGZpZWxkKVxuICAgICAgaWYgKGlkeCA8IDAgfHwgaWR4ID49IGljb25FbHMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICAgICAgY29uc3QgaWNvbkVsID0gaWNvbkVsc1tpZHhdXG4gICAgICAvLyBDbG9uZSB0aGUgaW5uZXIgY29udGVudCAoc3ZnIHNwYW4gb3IgaW1nKVxuICAgICAgY29uc3QgaW5uZXIgPSBpY29uRWwucXVlcnlTZWxlY3Rvcignc3BhbiwgaW1nJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGlmICghaW5uZXIpIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gaW5uZXIub3V0ZXJIVE1MXG4gICAgfVxuXG4gICAgY29uc3QgaW5qZWN0SWNvbnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWxpc3QtaXRlbScpXG5cbiAgICAgIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJydcbiAgICAgICAgaWYgKCF0aXRsZSkgcmV0dXJuXG4gICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5sYXllci1jdXN0b20taWNvbicpKSByZXR1cm5cblxuICAgICAgICBsZXQgaWNvbkh0bWw6IHN0cmluZyB8IG51bGwgPSBudWxsXG5cbiAgICAgICAgLy8gVHJ5IHRvIGNsb25lIGZyb20gdGhlIGNvbXBhY3QtZmlsdGVyIERPTVxuICAgICAgICBjb25zdCBmaWVsZCA9IGxheWVyVG9GaWVsZFt0aXRsZV1cbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgaWNvbkh0bWwgPSBnZXRGaWx0ZXJJY29uSHRtbChmaWVsZClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZhbGwgYmFjayB0byBzdGFuZGFsb25lIGljb25zIGZvciBub24tZmlsdGVyIGxheWVyc1xuICAgICAgICBpZiAoIWljb25IdG1sICYmIHN0YW5kYWxvbmVJY29uc1t0aXRsZV0pIHtcbiAgICAgICAgICBpY29uSHRtbCA9IHN0YW5kYWxvbmVJY29uc1t0aXRsZV1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaWNvbkh0bWwpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGljb25TcGFuLmNsYXNzTmFtZSA9ICdsYXllci1jdXN0b20taWNvbidcbiAgICAgICAgaWNvblNwYW4uaW5uZXJIVE1MID0gaWNvbkh0bWxcbiAgICAgICAgaWNvblNwYW4uc2V0QXR0cmlidXRlKCdzbG90JywgJ2NvbnRlbnQtc3RhcnQnKVxuICAgICAgICBpY29uU3Bhbi5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6aW5saW5lLWZsZXg7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttaW4td2lkdGg6MTZweDtjb2xvcjojYWFhOydcbiAgICAgICAgLy8gRW5zdXJlIGNvbnNpc3RlbnQgc2l6aW5nIG9uIGFsbCBjaGlsZCBzdmcvaW1nIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHN2Z0VsID0gaWNvblNwYW4ucXVlcnlTZWxlY3Rvcignc3ZnJylcbiAgICAgICAgaWYgKHN2Z0VsKSB7IHN2Z0VsLnN0eWxlLndpZHRoID0gJzE2cHgnOyBzdmdFbC5zdHlsZS5oZWlnaHQgPSAnMTZweCcgfVxuICAgICAgICBjb25zdCBpbWdFbCA9IGljb25TcGFuLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgIGlmIChpbWdFbCkgeyBpbWdFbC5zdHlsZS53aWR0aCA9ICcxNnB4JzsgaW1nRWwuc3R5bGUuaGVpZ2h0ID0gJzE2cHgnIH1cblxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGljb25TcGFuKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGluamVjdEljb25zLCAyMDAwKVxuICAgIHNldFRpbWVvdXQoaW5qZWN0SWNvbnMsIDMwMDApXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgfSwgW10pXG5cbiAgLy8gLS0tIExlZ2VuZCBwb3Atb3V0OiBtb3ZlIGxlZ2VuZHMgdG8gYSBmbG9hdGluZyBwYW5lbCByaWdodCBvZiB0aGUgc2lkZWJhciAtLS1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdHlsZUlkID0gJ2ZpbHRlci1sYXllci1zeW5jLWxlZ2VuZC1wb3BvdXQnXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKSkge1xuICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgICBzdHlsZS5pZCA9IHN0eWxlSWRcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgICAubGVnZW5kLXBvcG91dC1wYW5lbCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5sZWdlbmQtcG9wb3V0LXBhbmVsIC5lc3JpLWxlZ2VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubGVnZW5kLXBvcG91dC1wYW5lbCAuZXNyaS1sZWdlbmRfX3NlcnZpY2Uge1xuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubGVnZW5kLXBvcG91dC1wYW5lbCAuZXNyaS1sZWdlbmRfX2xheWVyLWNhcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZ2VuZC1wb3BvdXQtcGFuZWwgLmVzcmktbGVnZW5kX19sYXllci1jZWxsLS1pbmZvIHtcbiAgICAgICAgICBjb2xvcjogI2JiYiAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC8qIEhpZGUgbGVnZW5kcyBpbnNpZGUgdGhlIGxheWVycyBwYW5lbCDigJQgb25seSB0aGUgZGlyZWN0IHdyYXBwZXIgKi9cbiAgICAgICAgW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfOTRcIl0gLmVzcmktbGVnZW5kIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2FsY2l0ZSBzaGFkb3cgRE9NOiBjb2xsYXBzZSB0aGUgY29udGVudC1ib3R0b20gc2xvdCBhcmVhICovXG4gICAgICAgIFtkYXRhLXdpZGdldGlkPVwid2lkZ2V0Xzk0XCJdIGNhbGNpdGUtbGlzdC1pdGVtOjpwYXJ0KGNvbnRlbnQtYm90dG9tKSB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpXG4gICAgfVxuXG4gICAgY29uc3QgcG9wb3V0SWQgPSAnbGVnZW5kLXBvcG91dC1jb250YWluZXInXG4gICAgbGV0IG1vdmVkTGVnZW5kOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gICAgbGV0IGxlZ2VuZE9yaWdpbmFsUGFyZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG4gICAgbGV0IHRyYWNrZWRMaXN0SXRlbTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbFxuICAgIGxldCBjb2xsYXBzZWRBbmNlc3RvcnM6IEhUTUxFbGVtZW50W10gPSBbXVxuXG4gICAgY29uc3QgbW92ZUxlZ2VuZFRvUG9wb3V0ID0gKGxlZ2VuZDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyc1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfOTRcIl0nKSBhcyBIVE1MRWxlbWVudFxuICAgICAgaWYgKCFsYXllcnNQYW5lbCkgcmV0dXJuXG5cbiAgICAgIC8vIEZpbmQgcGFyZW50IGNhbGNpdGUtbGlzdC1pdGVtXG4gICAgICBsZXQgbGlzdEl0ZW06IEhUTUxFbGVtZW50IHwgbnVsbCA9IGxlZ2VuZFxuICAgICAgd2hpbGUgKGxpc3RJdGVtICYmIGxpc3RJdGVtLnRhZ05hbWUgIT09ICdDQUxDSVRFLUxJU1QtSVRFTScpIHtcbiAgICAgICAgbGlzdEl0ZW0gPSBsaXN0SXRlbS5wYXJlbnRFbGVtZW50XG4gICAgICB9XG4gICAgICBpZiAoIWxpc3RJdGVtKSByZXR1cm5cblxuICAgICAgbGVnZW5kT3JpZ2luYWxQYXJlbnQgPSBsZWdlbmQucGFyZW50RWxlbWVudFxuICAgICAgdHJhY2tlZExpc3RJdGVtID0gbGlzdEl0ZW1cbiAgICAgIG1vdmVkTGVnZW5kID0gbGVnZW5kXG5cbiAgICAgIC8vIENvbGxhcHNlIGFsbCBhbmNlc3RvcnMgYmV0d2VlbiBsZWdlbmQgYW5kIGxpc3QgaXRlbVxuICAgICAgY29sbGFwc2VkQW5jZXN0b3JzID0gW11cbiAgICAgIGxldCBhbmNlc3RvcjogSFRNTEVsZW1lbnQgfCBudWxsID0gbGVnZW5kLnBhcmVudEVsZW1lbnRcbiAgICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3RvciAhPT0gbGlzdEl0ZW0pIHtcbiAgICAgICAgYW5jZXN0b3Iuc3R5bGUuY3NzVGV4dCA9ICdtYXgtaGVpZ2h0OjAhaW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDttYXJnaW46MCFpbXBvcnRhbnQ7J1xuICAgICAgICBjb2xsYXBzZWRBbmNlc3RvcnMucHVzaChhbmNlc3RvcilcbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnRFbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBmbG9hdGluZyBwYW5lbCBhbmQgbW92ZSB0aGUgbGVnZW5kIGludG8gaXRcbiAgICAgIGxldCBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcG91dElkKSBhcyBIVE1MRWxlbWVudFxuICAgICAgaWYgKCFwYW5lbCkge1xuICAgICAgICBwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHBhbmVsLmlkID0gcG9wb3V0SWRcbiAgICAgICAgcGFuZWwuY2xhc3NOYW1lID0gJ2xlZ2VuZC1wb3BvdXQtcGFuZWwnXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFuZWwpXG4gICAgICB9XG4gICAgICBwYW5lbC5pbm5lckhUTUwgPSAnJ1xuICAgICAgcGFuZWwuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgICAvLyBQb3NpdGlvblxuICAgICAgY29uc3QgcGFuZWxSZWN0ID0gbGF5ZXJzUGFuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IGl0ZW1SZWN0ID0gbGlzdEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHBhbmVsLnN0eWxlLmxlZnQgPSAocGFuZWxSZWN0LnJpZ2h0ICsgNikgKyAncHgnXG4gICAgICBwYW5lbC5zdHlsZS50b3AgPSBNYXRoLm1heChpdGVtUmVjdC50b3AsIHBhbmVsUmVjdC50b3ApICsgJ3B4J1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFudXBQb3BvdXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcG91dElkKVxuICAgICAgaWYgKHBhbmVsKSBwYW5lbC5yZW1vdmUoKVxuICAgICAgY29sbGFwc2VkQW5jZXN0b3JzLmZvckVhY2goZWwgPT4geyBlbC5zdHlsZS5jc3NUZXh0ID0gJycgfSlcbiAgICAgIGNvbGxhcHNlZEFuY2VzdG9ycyA9IFtdXG4gICAgICBtb3ZlZExlZ2VuZCA9IG51bGxcbiAgICAgIGxlZ2VuZE9yaWdpbmFsUGFyZW50ID0gbnVsbFxuICAgICAgdHJhY2tlZExpc3RJdGVtID0gbnVsbFxuICAgIH1cblxuICAgIC8vIFVzZSBNdXRhdGlvbk9ic2VydmVyIHRvIGRldGVjdCBsZWdlbmQgYXBwZWFyaW5nL2Rpc2FwcGVhcmluZyBpbnN0YW50bHlcbiAgICBjb25zdCBsYXllcnNQYW5lbENoZWNrID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfOTRcIl0nKSBhcyBIVE1MRWxlbWVudFxuICAgIGxldCBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsXG5cbiAgICBjb25zdCBzZXR1cE9ic2VydmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbGF5ZXJzUGFuZWwgPSBsYXllcnNQYW5lbENoZWNrKClcbiAgICAgIGlmICghbGF5ZXJzUGFuZWwpIHJldHVyblxuXG4gICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgY29uc3QgbGVnZW5kcyA9IGxheWVyc1BhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lc3JpLWxlZ2VuZC5lc3JpLXdpZGdldCcpXG5cbiAgICAgICAgaWYgKG1vdmVkTGVnZW5kKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgb3JpZ2luYWwgcGFyZW50IHdhcyByZW1vdmVkIGZyb20gRE9NIChsZWdlbmQgdG9nZ2xlZCBvZmYpXG4gICAgICAgICAgaWYgKGxlZ2VuZE9yaWdpbmFsUGFyZW50ICYmICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGxlZ2VuZE9yaWdpbmFsUGFyZW50KSkge1xuICAgICAgICAgICAgY2xlYW51cFBvcG91dCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgbGVnZW5kIGVsZW1lbnQgd2FzIGRlc3Ryb3llZFxuICAgICAgICAgIGNvbnN0IHBvcG91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcG91dElkKVxuICAgICAgICAgIGNvbnN0IGxlZ2VuZFN0aWxsSW5Qb3BvdXQgPSBwb3BvdXQgJiYgcG9wb3V0LmNvbnRhaW5zKG1vdmVkTGVnZW5kKVxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhtb3ZlZExlZ2VuZCkgJiYgIWxlZ2VuZFN0aWxsSW5Qb3BvdXQpIHtcbiAgICAgICAgICAgIGNsZWFudXBQb3BvdXQoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEEgZGlmZmVyZW50IGxlZ2VuZCBhcHBlYXJlZCDigJQgbW92ZSB0aGF0IG9uZSBpbnN0ZWFkXG4gICAgICAgICAgaWYgKGxlZ2VuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3TGVnZW5kID0gbGVnZW5kc1swXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgaWYgKG5ld0xlZ2VuZCAhPT0gbW92ZWRMZWdlbmQgJiYgbmV3TGVnZW5kLnF1ZXJ5U2VsZWN0b3IoJy5lc3JpLWxlZ2VuZF9fbGF5ZXItcm93JykpIHtcbiAgICAgICAgICAgICAgY2xlYW51cFBvcG91dCgpXG4gICAgICAgICAgICAgIG1vdmVMZWdlbmRUb1BvcG91dChuZXdMZWdlbmQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gbGVnZW5kIGN1cnJlbnRseSBtb3ZlZCDigJQgY2hlY2sgZm9yIG5ldyBvbmVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVnZW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZHNbaV0gYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICBpZiAobGVnZW5kLnF1ZXJ5U2VsZWN0b3IoJy5lc3JpLWxlZ2VuZF9fbGF5ZXItcm93JykpIHtcbiAgICAgICAgICAgIG1vdmVMZWdlbmRUb1BvcG91dChsZWdlbmQpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShsYXllcnNQYW5lbCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcbiAgICB9XG5cbiAgICAvLyBXYWl0IGZvciBsYXllcnMgcGFuZWwgdG8gYXBwZWFyLCB0aGVuIHNldCB1cCBvYnNlcnZlclxuICAgIGNvbnN0IHdhaXRGb3JQYW5lbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChsYXllcnNQYW5lbENoZWNrKCkpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh3YWl0Rm9yUGFuZWwpXG4gICAgICAgIHNldHVwT2JzZXJ2ZXIoKVxuICAgICAgfVxuICAgIH0sIDUwMClcblxuICAgIC8vIFBvbGwgZm9yIHBvc2l0aW9uIHVwZGF0ZXMgYW5kIGNsZWFudXAgZGV0ZWN0aW9uXG4gICAgY29uc3QgcG9zaXRpb25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICghbW92ZWRMZWdlbmQgfHwgIXRyYWNrZWRMaXN0SXRlbSkgcmV0dXJuXG4gICAgICAvLyBDbGVhbnVwIGlmIG9yaWdpbmFsIHBhcmVudCB3YXMgcmVtb3ZlZCAodG9nZ2xlIG9mZilcbiAgICAgIGlmIChsZWdlbmRPcmlnaW5hbFBhcmVudCAmJiAhZG9jdW1lbnQuYm9keS5jb250YWlucyhsZWdlbmRPcmlnaW5hbFBhcmVudCkpIHtcbiAgICAgICAgY2xlYW51cFBvcG91dCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgcG9wb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9wb3V0SWQpXG4gICAgICBpZiAoIXBvcG91dCkgcmV0dXJuXG4gICAgICBjb25zdCBsYXllcnNQYW5lbCA9IGxheWVyc1BhbmVsQ2hlY2soKVxuICAgICAgaWYgKCFsYXllcnNQYW5lbCkgcmV0dXJuXG4gICAgICBjb25zdCBwYW5lbFJlY3QgPSBsYXllcnNQYW5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgaXRlbVJlY3QgPSB0cmFja2VkTGlzdEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHBvcG91dC5zdHlsZS5sZWZ0ID0gKHBhbmVsUmVjdC5yaWdodCArIDYpICsgJ3B4J1xuICAgICAgcG9wb3V0LnN0eWxlLnRvcCA9IE1hdGgubWF4KGl0ZW1SZWN0LnRvcCwgcGFuZWxSZWN0LnRvcCkgKyAncHgnXG4gICAgfSwgMzAwKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwod2FpdEZvclBhbmVsKVxuICAgICAgY2xlYXJJbnRlcnZhbChwb3NpdGlvbkludGVydmFsKVxuICAgICAgaWYgKG9ic2VydmVyKSBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIGNsZWFudXBQb3BvdXQoKVxuICAgICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpXG4gICAgICBpZiAoc3R5bGVFbCkgc3R5bGVFbC5yZW1vdmUoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgLy8gLS0tIEZvcmNlIGluc3RydWN0aW9uIGRpYWxvZyB0byBzaG93IGZyb20gdG9wIC0tLVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB3YXNWaXNpYmxlID0gZmFsc2VcbiAgICBsZXQgc2Nyb2xsVGltZXI6IGFueSA9IG51bGxcblxuICAgIGNvbnN0IHNjcm9sbERpYWxvZ1RvVG9wID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfMTQxXCJdJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IHdpZGdldCAmJiB3aWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ID4gMFxuXG4gICAgICBpZiAoIWlzVmlzaWJsZSkge1xuICAgICAgICB3YXNWaXNpYmxlID0gZmFsc2VcbiAgICAgICAgaWYgKHNjcm9sbFRpbWVyKSB7IGNsZWFySW50ZXJ2YWwoc2Nyb2xsVGltZXIpOyBzY3JvbGxUaW1lciA9IG51bGwgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHdhc1Zpc2libGUpIHJldHVyblxuICAgICAgd2FzVmlzaWJsZSA9IHRydWVcblxuICAgICAgLy8gQWdncmVzc2l2ZWx5IHJlc2V0IHNjcm9sbCBldmVyeSA1MG1zIGZvciAyIHNlY29uZHNcbiAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgIHNjcm9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuamltdS1zY3JvbGxhYmxlLXNjcm9sbC1jb250YWluZXInKS5mb3JFYWNoKChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICgoZWwgYXMgSFRNTEVsZW1lbnQpLnNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICAgIChlbCBhcyBIVE1MRWxlbWVudCkuc2Nyb2xsVG9wID0gMFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY291bnQrK1xuICAgICAgICBpZiAoY291bnQgPiA0MCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsVGltZXIpXG4gICAgICAgICAgc2Nyb2xsVGltZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH0sIDUwKVxuICAgIH1cblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoc2Nyb2xsRGlhbG9nVG9Ub3AsIDMwMClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgIGlmIChzY3JvbGxUaW1lcikgY2xlYXJJbnRlcnZhbChzY3JvbGxUaW1lcilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8vIC0tLSBGb3JjZSBoZWFkZXIgYnV0dG9uIHN0eWxlcyAod2hpdGUgdGV4dCwgbm8gdW5kZXJsaW5lKSAtLS1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdHlsZUlkID0gJ2hlYWRlci1idXR0b24tc3R5bGVzJ1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKSkgcmV0dXJuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgc3R5bGUuaWQgPSBzdHlsZUlkXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICBbZGF0YS13aWRnZXRpZD1cIndpZGdldF8yMDJcIl0gYSxcbiAgICAgIFtkYXRhLXdpZGdldGlkPVwid2lkZ2V0XzIwMlwiXSBidXR0b24sXG4gICAgICBbZGF0YS13aWRnZXRpZD1cIndpZGdldF8yMDJcIl0gc3BhbixcbiAgICAgIFtkYXRhLXdpZGdldGlkPVwid2lkZ2V0XzIwNFwiXSBhLFxuICAgICAgW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfMjA0XCJdIGJ1dHRvbixcbiAgICAgIFtkYXRhLXdpZGdldGlkPVwid2lkZ2V0XzIwNFwiXSBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfMjAyXCJdIGE6aG92ZXIsXG4gICAgICBbZGF0YS13aWRnZXRpZD1cIndpZGdldF8yMDRcIl0gYTpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgYFxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZClcbiAgICAgIGlmIChlbCkgZWwucmVtb3ZlKClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8vIC0tLSBNYWtlIEJEQVIgbG9nbyBjbGlja2FibGUgLS0tXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWFrZUxvZ29DbGlja2FibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsb2dvV2lkZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lkZ2V0aWQ9XCJ3aWRnZXRfMTA3XCJdJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGlmICghbG9nb1dpZGdldCB8fCBsb2dvV2lkZ2V0LmRhdGFzZXQubGlua0F0dGFjaGVkKSByZXR1cm5cbiAgICAgIGxvZ29XaWRnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICBsb2dvV2lkZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9vcmFsZWtzLm5ldC50ZWNobmlvbi5hYy5pbC9lbi9iZGFyLWxhYi8nLCAnX2JsYW5rJylcbiAgICAgIH0pXG4gICAgICBsb2dvV2lkZ2V0LmRhdGFzZXQubGlua0F0dGFjaGVkID0gJ3RydWUnXG4gICAgfVxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwobWFrZUxvZ29DbGlja2FibGUsIDEwMDApXG4gICAgbWFrZUxvZ29DbGlja2FibGUoKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxuICB9LCBbXSlcblxuICAvLyBIZWFkbGVzcyB3aWRnZXQg4oCUIG9ubHkgdGhlIEppbXVNYXBWaWV3Q29tcG9uZW50IGNvbm5lY3RvclxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuICAgICAge3VzZU1hcFdpZGdldElkcz8uWzBdICYmIChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3VzZU1hcFdpZGdldElkc1swXX1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3NldEppbXVNYXBWaWV3fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==