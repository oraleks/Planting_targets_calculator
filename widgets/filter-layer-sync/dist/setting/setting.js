System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/filter-layer-sync/src/setting/setting.tsx ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");

/** @jsx jsx */



class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds
            });
        };
        this.onFilterWidgetIdChange = (e) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('filterWidgetId', e.target.value)
            });
        };
        this.onSelectedLayerTitleChange = (e) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('selectedSegmentsLayerTitle', e.target.value)
            });
        };
        this.onMappingFieldChange = (index, value) => {
            const mappings = this.props.config.mappings.asMutable({ deep: true });
            mappings[index] = Object.assign(Object.assign({}, mappings[index]), { filterField: value });
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('mappings', (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)(mappings))
            });
        };
        this.onMappingLayerChange = (index, value) => {
            const mappings = this.props.config.mappings.asMutable({ deep: true });
            mappings[index] = Object.assign(Object.assign({}, mappings[index]), { layerTitle: value });
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('mappings', (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)(mappings))
            });
        };
        this.addMapping = () => {
            const mappings = this.props.config.mappings.asMutable({ deep: true });
            mappings.push({ filterField: '', layerTitle: '' });
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('mappings', (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)(mappings))
            });
        };
        this.removeMapping = (index) => {
            const mappings = this.props.config.mappings.asMutable({ deep: true });
            mappings.splice(index, 1);
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('mappings', (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)(mappings))
            });
        };
    }
    render() {
        var _a;
        const { config, useMapWidgetIds } = this.props;
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'widget-setting-filter-layer-sync p-3', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: 'Map Widget', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: useMapWidgetIds, onSelect: this.onMapWidgetSelected }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: 'Filter Widget', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: 'Filter Widget ID', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: (config === null || config === void 0 ? void 0 : config.filterWidgetId) || '', onChange: this.onFilterWidgetIdChange, placeholder: 'e.g., widget_4' }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: 'Selected Segments Layer', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: 'Layer Title in Web Map', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: (config === null || config === void 0 ? void 0 : config.selectedSegmentsLayerTitle) || '', onChange: this.onSelectedLayerTitleChange, placeholder: 'e.g., Selected segments' }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: 'Filter-to-Layer Mappings', children: [(_a = config === null || config === void 0 ? void 0 : config.mappings) === null || _a === void 0 ? void 0 : _a.map((mapping, index) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                                border: '1px solid #ddd',
                                borderRadius: 4,
                                padding: 8,
                                marginBottom: 8
                            }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: 'Filter Field', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: 'sm', value: mapping.filterField, onChange: (e) => this.onMappingFieldChange(index, e.target.value), placeholder: 'e.g., summer_SI' }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: 'Layer Title', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: 'sm', value: mapping.layerTitle, onChange: (e) => this.onMappingLayerChange(index, e.target.value), placeholder: 'e.g., Summer Shade Index' }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => this.removeMapping(index), style: {
                                        background: 'none',
                                        border: 'none',
                                        color: '#c00',
                                        cursor: 'pointer',
                                        fontSize: 12
                                    }, children: "Remove" })] }, index))), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: this.addMapping, style: {
                                background: '#0079c1',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 4,
                                padding: '4px 12px',
                                cursor: 'pointer',
                                fontSize: 12
                            }, children: "+ Add Mapping" })] })] }));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItbGF5ZXItc3luYy9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBQ3VEO0FBTTFCO0FBQ0Y7QUFHM0IsTUFBTSxPQUFRLFNBQVEsNENBQUssQ0FBQyxhQUUxQztJQUZEOztRQUdFLHdCQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBRSxFQUFFO1lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixlQUFlO2FBQ2hCLENBQUM7UUFDSixDQUFDO1FBRUQsMkJBQXNCLEdBQUcsQ0FBQyxDQUFzQyxFQUFFLEVBQUU7WUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFD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O3dDQUNqQixRQUFRLEVBQUUsRUFBRTtxQ0FDYix1QkFHTSxLQXZDSixLQUFLLENBd0NOLENBQ1AsQ0FBQyxFQUNGLDRFQUNFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUN4QixLQUFLLEVBQUU7Z0NBQ0wsVUFBVSxFQUFFLFNBQVM7Z0NBQ3JCLEtBQUssRUFBRSxNQUFNO2dDQUNiLE1BQU0sRUFBRSxNQUFNO2dDQUNkLFlBQVksRUFBRSxDQUFDO2dDQUNmLE9BQU8sRUFBRSxVQUFVO2dDQUNuQixNQUFNLEVBQUUsU0FBUztnQ0FDakIsUUFBUSxFQUFFLEVBQUU7NkJBQ2IsOEJBR00sSUFDTSxJQUNiLENBQ1A7SUFDSCxDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRlci1sYXllci1zeW5jL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCBJbW11dGFibGUsIHR5cGUgSW1tdXRhYmxlQXJyYXkgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXG5pbXBvcnQge1xuICBNYXBXaWRnZXRTZWxlY3RvcixcbiAgU2V0dGluZ1NlY3Rpb24sXG4gIFNldHRpbmdSb3dcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBUZXh0SW5wdXQsIExhYmVsIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcsIHR5cGUgRmlsdGVyTGF5ZXJNYXBwaW5nIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPlxuPiB7XG4gIG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgdXNlTWFwV2lkZ2V0SWRzXG4gICAgfSlcbiAgfVxuXG4gIG9uRmlsdGVyV2lkZ2V0SWRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdmaWx0ZXJXaWRnZXRJZCcsIGUudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBvblNlbGVjdGVkTGF5ZXJUaXRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoXG4gICAgICAgICdzZWxlY3RlZFNlZ21lbnRzTGF5ZXJUaXRsZScsXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIG9uTWFwcGluZ0ZpZWxkQ2hhbmdlID0gKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtYXBwaW5ncyA9IHRoaXMucHJvcHMuY29uZmlnLm1hcHBpbmdzLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgICBtYXBwaW5nc1tpbmRleF0gPSB7IC4uLm1hcHBpbmdzW2luZGV4XSwgZmlsdGVyRmllbGQ6IHZhbHVlIH1cbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KFxuICAgICAgICAnbWFwcGluZ3MnLFxuICAgICAgICBJbW11dGFibGUobWFwcGluZ3MpIGFzIEltbXV0YWJsZUFycmF5PEZpbHRlckxheWVyTWFwcGluZz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgb25NYXBwaW5nTGF5ZXJDaGFuZ2UgPSAoaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG1hcHBpbmdzID0gdGhpcy5wcm9wcy5jb25maWcubWFwcGluZ3MuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICAgIG1hcHBpbmdzW2luZGV4XSA9IHsgLi4ubWFwcGluZ3NbaW5kZXhdLCBsYXllclRpdGxlOiB2YWx1ZSB9XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldChcbiAgICAgICAgJ21hcHBpbmdzJyxcbiAgICAgICAgSW1tdXRhYmxlKG1hcHBpbmdzKSBhcyBJbW11dGFibGVBcnJheTxGaWx0ZXJMYXllck1hcHBpbmc+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGFkZE1hcHBpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwcGluZ3MgPSB0aGlzLnByb3BzLmNvbmZpZy5tYXBwaW5ncy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gICAgbWFwcGluZ3MucHVzaCh7IGZpbHRlckZpZWxkOiAnJywgbGF5ZXJUaXRsZTogJycgfSlcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KFxuICAgICAgICAnbWFwcGluZ3MnLFxuICAgICAgICBJbW11dGFibGUobWFwcGluZ3MpIGFzIEltbXV0YWJsZUFycmF5PEZpbHRlckxheWVyTWFwcGluZz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlTWFwcGluZyA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbWFwcGluZ3MgPSB0aGlzLnByb3BzLmNvbmZpZy5tYXBwaW5ncy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gICAgbWFwcGluZ3Muc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoXG4gICAgICAgICdtYXBwaW5ncycsXG4gICAgICAgIEltbXV0YWJsZShtYXBwaW5ncykgYXMgSW1tdXRhYmxlQXJyYXk8RmlsdGVyTGF5ZXJNYXBwaW5nPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCB1c2VNYXBXaWRnZXRJZHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LXNldHRpbmctZmlsdGVyLWxheWVyLXN5bmMgcC0zJz5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPSdNYXAgV2lkZ2V0Jz5cbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3VzZU1hcFdpZGdldElkc31cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT0nRmlsdGVyIFdpZGdldCc+XG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9J0ZpbHRlciBXaWRnZXQgSUQnPlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnPy5maWx0ZXJXaWRnZXRJZCB8fCAnJ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJXaWRnZXRJZENoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2UuZy4sIHdpZGdldF80J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPSdTZWxlY3RlZCBTZWdtZW50cyBMYXllcic+XG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9J0xheWVyIFRpdGxlIGluIFdlYiBNYXAnPlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnPy5zZWxlY3RlZFNlZ21lbnRzTGF5ZXJUaXRsZSB8fCAnJ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RlZExheWVyVGl0bGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdlLmcuLCBTZWxlY3RlZCBzZWdtZW50cydcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT0nRmlsdGVyLXRvLUxheWVyIE1hcHBpbmdzJz5cbiAgICAgICAgICB7Y29uZmlnPy5tYXBwaW5ncz8ubWFwKChtYXBwaW5nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDhcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9J0ZpbHRlciBGaWVsZCc+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bWFwcGluZy5maWx0ZXJGaWVsZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25NYXBwaW5nRmllbGRDaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2UuZy4sIHN1bW1lcl9TSSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPSdMYXllciBUaXRsZSc+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bWFwcGluZy5sYXllclRpdGxlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1hcHBpbmdMYXllckNoYW5nZShpbmRleCwgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZS5nLiwgU3VtbWVyIFNoYWRlIEluZGV4J1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlTWFwcGluZyhpbmRleCl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYzAwJyxcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkTWFwcGluZ31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMDA3OWMxJyxcbiAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzRweCAxMnB4JyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICArIEFkZCBNYXBwaW5nXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=