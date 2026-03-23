System.register(["jimu-core/emotion","jimu-core","jimu-ui","jimu-arcgis","jimu-core/react-dom"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_react_dom__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/tree_potential_v2/src/runtime/style.scss"
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/tree_potential_v2/src/runtime/style.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ===================== FILTER BAR STYLES ===================== */
.compact-filter-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3px;
  padding: 4px;
  background: rgba(50, 50, 50, 0.9);
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  justify-content: center;
}

.compact-filter-icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;
  padding: 4px;
  position: relative;
  transition: background 0.15s, border-color 0.15s;
  color: #ccc;
}
.compact-filter-icon:hover {
  background: rgba(255, 255, 255, 0.15);
}
.compact-filter-icon.active {
  background: rgba(0, 121, 193, 0.3);
  border-color: #0079c1;
  color: #4fc3f7;
}
.compact-filter-icon img, .compact-filter-icon svg {
  width: 18px;
  height: 18px;
  pointer-events: none;
}
.compact-filter-icon img {
  filter: brightness(0) invert(0.8);
}
.compact-filter-icon.active img {
  filter: brightness(0) invert(0.7) sepia(1) saturate(5) hue-rotate(180deg);
}

.compact-filter-tooltip {
  position: fixed;
  background: rgba(30, 30, 30, 0.95);
  color: #eee;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 11px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10001;
}

.compact-filter-popover {
  position: fixed;
  background: rgba(50, 50, 50, 0.95);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  padding: 12px 14px;
  min-width: 220px;
  z-index: 10000;
  color: #eee;
  font-size: 12px;
  cursor: default;
}

.compact-filter-popover-title {
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 12px;
  color: #ccc;
}

.compact-filter-slider-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.compact-filter-slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 4px;
  background: #555;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.compact-filter-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #0079c1;
  cursor: pointer;
}
.compact-filter-slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #0079c1;
  cursor: pointer;
  border: none;
}

.compact-filter-value {
  min-width: 35px;
  text-align: right;
  font-size: 11px;
  color: #aaa;
  font-variant-numeric: tabular-nums;
}

.compact-filter-range-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.compact-filter-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/tree_potential_v2/src/runtime/style.scss"],"names":[],"mappings":"AACA,kEAAA;AAEA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,QAAA;EACA,YAAA;EACA,iCAAA;EACA,kBAAA;EACA,wCAAA;EACA,uBAAA;AADF;;AAIA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,+BAAA;EACA,kBAAA;EACA,eAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,gDAAA;EACA,WAAA;AADF;AAGE;EACE,qCAAA;AADJ;AAIE;EACE,kCAAA;EACA,qBAAA;EACA,cAAA;AAFJ;AAKE;EACE,WAAA;EACA,YAAA;EACA,oBAAA;AAHJ;AAME;EACE,iCAAA;AAJJ;AAOE;EACE,yEAAA;AALJ;;AASA;EACE,eAAA;EACA,kCAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,oBAAA;EACA,cAAA;AANF;;AASA;EACE,eAAA;EACA,kCAAA;EACA,kBAAA;EACA,wCAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,eAAA;AANF;;AASA;EACE,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;AANF;;AASA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AANF;;AASA;EACE,OAAA;EACA,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;AANF;AAQE;EACE,wBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AANJ;AASE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;AAPJ;;AAWA;EACE,eAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,kCAAA;AARF;;AAWA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,kBAAA;AARF;;AAWA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;AARF","sourcesContent":["\n/* ===================== FILTER BAR STYLES ===================== */\n\n.compact-filter-bar {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 3px;\n  padding: 4px;\n  background: rgba(50, 50, 50, 0.9);\n  border-radius: 6px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  justify-content: center;\n}\n\n.compact-filter-icon {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  background: transparent;\n  padding: 4px;\n  position: relative;\n  transition: background 0.15s, border-color 0.15s;\n  color: #ccc;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.15);\n  }\n\n  &.active {\n    background: rgba(0, 121, 193, 0.3);\n    border-color: #0079c1;\n    color: #4fc3f7;\n  }\n\n  img, svg {\n    width: 18px;\n    height: 18px;\n    pointer-events: none;\n  }\n\n  img {\n    filter: brightness(0) invert(0.8);\n  }\n\n  &.active img {\n    filter: brightness(0) invert(0.7) sepia(1) saturate(5) hue-rotate(180deg);\n  }\n}\n\n.compact-filter-tooltip {\n  position: fixed;\n  background: rgba(30, 30, 30, 0.95);\n  color: #eee;\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  white-space: nowrap;\n  pointer-events: none;\n  z-index: 10001;\n}\n\n.compact-filter-popover {\n  position: fixed;\n  background: rgba(50, 50, 50, 0.95);\n  border-radius: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  padding: 12px 14px;\n  min-width: 220px;\n  z-index: 10000;\n  color: #eee;\n  font-size: 12px;\n  cursor: default;\n}\n\n.compact-filter-popover-title {\n  font-weight: 600;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: #ccc;\n}\n\n.compact-filter-slider-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.compact-filter-slider {\n  flex: 1;\n  -webkit-appearance: none;\n  appearance: none;\n  height: 4px;\n  background: #555;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background: #0079c1;\n    cursor: pointer;\n  }\n\n  &::-moz-range-thumb {\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background: #0079c1;\n    cursor: pointer;\n    border: none;\n  }\n}\n\n.compact-filter-value {\n  min-width: 35px;\n  text-align: right;\n  font-size: 11px;\n  color: #aaa;\n  font-variant-numeric: tabular-nums;\n}\n\n.compact-filter-range-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n\n.compact-filter-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./your-extensions/widgets/tree_potential_v2/src/runtime/style.scss"
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/tree_potential_v2/src/runtime/style.scss ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/tree_potential_v2/src/runtime/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./your-extensions/widgets/tree_potential_v2/src/filter-definitions.ts"
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/tree_potential_v2/src/filter-definitions.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FILTER_DEFINITIONS: () => (/* binding */ FILTER_DEFINITIONS)
/* harmony export */ });
// --- SVG icons ---
const sunSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17"><g clip-path="url(#a)"><path fill="currentColor" d="m12.153 6.054-.707-.707 2.2-2.2.708.707zm-9.507 8.092.707.707 2.2-2.2-.706-.707zm8.8-1.493 2.2 2.2.707-.706-2.2-2.2zM5.554 5.347l-2.2-2.2-.707.706 2.2 2.2zM9 1.5H8v3h1zm-1 15h1v-3H8zm8-7v-1h-3v1zm-15 0h3v-1H1zM5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m1 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .5h16v16H0z"/></clipPath></defs></svg>';
const pedestrianSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" stroke-width="0.5"/><line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" stroke-width="0.5"/><line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" stroke-width="0.5"/><line x1="3" y1="1" x2="3" y2="15" stroke="currentColor" stroke-width="0.5"/><line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" stroke-width="2.2"/><line x1="13" y1="1" x2="13" y2="15" stroke="currentColor" stroke-width="0.5"/></svg>';
const carSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" stroke-width="0.5"/><line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" stroke-width="0.5"/><line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" stroke-width="0.5"/><line x1="3" y1="1" x2="3" y2="15" stroke="currentColor" stroke-width="0.5"/><line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" stroke-width="3.5"/><line x1="8" y1="1" x2="8" y2="15" stroke="rgba(0,0,0,0.9)" stroke-width="0.8" stroke-dasharray="2 1.5"/><line x1="13" y1="1" x2="13" y2="15" stroke="currentColor" stroke-width="0.5"/></svg>';
const buildingsSvg = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABRklEQVR4AexV0Q7DIAjc9v//vBqTe/ACUQhEqy6tDnpcPc7Y3+flvytgtoFHOfAv3fbcpSzvOsoBtPFb/ozcBZZ/bemAts+97dT4vPlmHVs6AIXaPsfz3qzVe/Pi+7Z2QFS8WvIoB3qnBsyJxoFXnI9yAB3gUwR5nqNxzF/jIx2oylcZjnSATxnNjGic+B6DA2L99KRFAJ8qHEMM5zm24oAXZ4sAkWB20iKA9zTH0MJ5jq044MXZIkAkmJ30CND2NGuJxjF/jT0CauEqwxUw2wmPA9qpwlqiccxfY4+AWrjKYBHApwrH0MR5jq044MXZIkAkmJ3MEMB7n+NQzRkCQhfYI8sUoO393ppMzzMFmBbiBV8B3s5F1V0Hojrp5clxwLsaR90WArQvJedH414fR3kYB94mv4UD/MWMitExzFG8Dc/rHXgAAAD//8+uSJMAAAAGSURBVAMAIfucYfA8q9wAAAAASUVORK5CYII=" style="width:18px;height:18px;filter:brightness(0) invert(0.8);" />';
const shoppingSvg = '<img src="data:image/png;base64,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" style="width:18px;height:18px;filter:brightness(0) invert(0.8);" />';
const measureSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m15.18 3.89-2.85 2.85-.71-.7 1.61-1.65H9v-1h4.32l-1.7-1.69.71-.7zM0 14.39v-6h16v6zm14-3h1v-2H1v4h1v-2h1v2h1v-3h1v3h1v-2h1v2h1v-3h1v3h1v-2h1v2h1v-3h1v3h1zm-7-8H2.68l1.7-1.65-.71-.7L.82 3.89l2.85 2.85.71-.7-1.61-1.65H7z" clip-rule="evenodd"/></svg>';
const FILTER_DEFINITIONS = [
    {
        type: 'slider', field: 'summer_SI', name: 'Shade Index',
        operator: '<', min: 0, max: 1, step: 0.05, defaultValue: 0.4,
        iconType: 'svg', iconSvg: sunSvg,
        description: 'Spring/Summer Shade Index'
    },
    {
        type: 'slider', field: 'ABw2k_max', name: 'Neighbourhood transit',
        operator: '>', min: 0, max: 620708, step: 1, defaultValue: 95218,
        iconType: 'svg', iconSvg: pedestrianSvg,
        description: 'Betweenness centrality at 2km scale (higher = more connected neighbourhood)',
        breaks: [0, 12543, 34937, 63404, 95218, 131092, 171924, 223600, 297391, 414733, 620708]
    },
    {
        type: 'slider', field: 'ABw5k_max', name: 'City transit',
        operator: '>', min: 0, max: 9115851, step: 1, defaultValue: 1181766,
        iconType: 'svg', iconSvg: carSvg,
        description: 'Betweenness centrality at 5km scale (higher = more connected city-wide)',
        breaks: [0, 128315, 372990, 724538, 1181766, 1755611, 2466287, 3340371, 4413712, 5847313, 9115851]
    },
    {
        type: 'slider', field: 'AIw1kH_mea', name: 'Local centers',
        operator: '>', min: 0, max: 495, step: 1, defaultValue: 124,
        iconType: 'png', iconPng: 'walking.png',
        description: 'Closeness centrality at 1km scale (higher = closer to local centers)',
        breaks: [0, 34, 89, 124, 158, 191, 224, 260, 301, 360, 495]
    },
    {
        type: 'slider', field: 'FSI500_mea', name: 'Building density',
        operator: '>', min: 0, max: 5, step: 0.1, defaultValue: 1.5,
        iconType: 'svg', iconSvg: buildingsSvg,
        description: 'Floor Space Index within 500m walking distance'
    },
    {
        type: 'slider', field: 'ARw500lm_1', name: 'Commercial proximity',
        operator: '>', min: 0, max: 200, step: 5, defaultValue: 60,
        iconType: 'svg', iconSvg: shoppingSvg,
        description: 'Number of shops and restaurants within 500m walking distance'
    },
    {
        type: 'slider', field: 'ADws_mean', name: 'School proximity',
        operator: '<', min: 0, max: 1000, step: 25, defaultValue: 300, unit: 'm',
        iconType: 'png', iconPng: 'education.png',
        description: 'Walking distance to the closest school or preschool'
    },
    {
        type: 'slider', field: 'ADwm_mean', name: 'Tram/metro proximity',
        operator: '<', min: 0, max: 1000, step: 25, defaultValue: 300, unit: 'm',
        iconType: 'png', iconPng: 'transport.png',
        description: 'Walking distance to the closest tram, metro or railway station'
    },
    {
        type: 'slider', field: 'ADwbu_mean', name: 'Bus stop proximity',
        operator: '<', min: 0, max: 1000, step: 25, defaultValue: 300, unit: 'm',
        iconType: 'png', iconPng: 'bus.png',
        description: 'Walking distance to the closest bus stop'
    },
    {
        type: 'range-slider', field: 'width', name: 'Street width',
        min: 0, max: 60, step: 1, defaultValue: [20, 30], unit: 'm',
        iconType: 'svg', iconSvg: measureSvg,
        description: 'Street width in meters'
    }
];


/***/ },

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

/***/ },

/***/ "react-dom"
/*!**************************************!*\
  !*** external "jimu-core/react-dom" ***!
  \**************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
  !*** ./your-extensions/widgets/tree_potential_v2/src/runtime/widget.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _filter_definitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter-definitions */ "./your-extensions/widgets/tree_potential_v2/src/filter-definitions.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./your-extensions/widgets/tree_potential_v2/src/runtime/style.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** @jsx jsx */
/** @jsxFrag React.Fragment */






const { useState, useEffect, useCallback, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
// ===================== CONSTANTS =====================
const CATEGORY_LABELS = {
    '1': '<10m', '2': '10-20m', '3': '20-30m', '4': '40m', '5': '>40m'
};
// ===================== FILTER SQL =====================
function buildClause(def, state) {
    switch (def.type) {
        case 'slider':
            return `${def.field} ${def.operator} ${state.value}`;
        case 'range-slider': {
            const [lo, hi] = state.value;
            return `${def.field} BETWEEN ${lo} AND ${hi}`;
        }
        case 'multi-select': {
            const vals = state.value;
            return vals.length > 0 ? `${def.field} IN (${vals.join(',')})` : '1=0';
        }
    }
}
function buildCombinedSql(filters) {
    const clauses = [];
    for (const def of _filter_definitions__WEBPACK_IMPORTED_MODULE_5__.FILTER_DEFINITIONS) {
        const state = filters[def.field];
        if (state === null || state === void 0 ? void 0 : state.active) {
            clauses.push(buildClause(def, state));
        }
    }
    return clauses.length > 0 ? clauses.join(' AND ') : '1=1';
}
function createInitialFilters() {
    const map = {};
    for (const def of _filter_definitions__WEBPACK_IMPORTED_MODULE_5__.FILTER_DEFINITIONS) {
        map[def.field] = {
            active: false,
            value: def.type === 'multi-select' ? [...def.defaultValue] : def.defaultValue
        };
    }
    return map;
}
// ===================== FILTER UI COMPONENTS =====================
function FilterIconImg({ def }) {
    var _a;
    if (def.iconType === 'svg' && def.iconSvg) {
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { dangerouslySetInnerHTML: { __html: def.iconSvg }, style: { display: 'flex', width: 18, height: 18 } });
    }
    if (def.iconType === 'png' && def.iconPng) {
        const base = ((_a = window.jimuConfig) === null || _a === void 0 ? void 0 : _a.baseUrl) || '';
        const url = `${base}widgets/compact-filter/dist/runtime/assets/${def.iconPng}`;
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: url, alt: def.name });
    }
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "?" });
}
function SliderContent({ def, value, onChange }) {
    const breaks = def.breaks;
    if (breaks && breaks.length > 1) {
        // Jenks-based slider: slider position maps to break index
        const closestIdx = breaks.reduce((best, b, i) => Math.abs(b - value) < Math.abs(breaks[best] - value) ? i : best, 0);
        const displayVal = Math.round(breaks[closestIdx]).toLocaleString();
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'compact-filter-slider-row', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'compact-filter-value', style: { minWidth: 30 }, children: "Low" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'range', className: 'compact-filter-slider', min: 0, max: breaks.length - 1, step: 1, value: closestIdx, onChange: e => onChange(breaks[Number(e.target.value)]) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'compact-filter-value', style: { minWidth: 30 }, children: "High" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { fontSize: 10, color: '#888', marginTop: 4 }, children: [def.operator === '<' ? 'Less than' : 'Greater than', " ", displayVal, def.unit || ''] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { fontSize: 9, color: '#666', marginTop: 2 }, children: ["Class ", closestIdx + 1, " of ", breaks.length, " (Jenks natural breaks)"] })] }));
    }
    // Standard linear slider
    const displayVal = def.step < 1 ? value.toFixed(2) : String(value);
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'compact-filter-slider-row', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'compact-filter-value', children: def.min }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'range', className: 'compact-filter-slider', min: def.min, max: def.max, step: def.step, value: value, onChange: e => onChange(Number(e.target.value)) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: 'compact-filter-value', children: [displayVal, def.unit || ''] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { fontSize: 10, color: '#888', marginTop: 4 }, children: [def.operator === '<' ? 'Less than' : 'Greater than', " ", displayVal, def.unit || ''] })] }));
}
function RangeSliderContent({ def, value, onChange }) {
    const [lo, hi] = value;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'compact-filter-range-row', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: 'compact-filter-value', children: [lo, def.unit || ''] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#888' }, children: "-" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: 'compact-filter-value', children: [hi, def.unit || ''] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 10, color: '#888', marginBottom: 2 }, children: "Min" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'range', className: 'compact-filter-slider', min: def.min, max: def.max, step: def.step, value: lo, onChange: e => { const v = Number(e.target.value); onChange([Math.min(v, hi), hi]); } })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 10, color: '#888', marginBottom: 2 }, children: "Max" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'range', className: 'compact-filter-slider', min: def.min, max: def.max, step: def.step, value: hi, onChange: e => { const v = Number(e.target.value); onChange([lo, Math.max(v, lo)]); } })] })] }));
}
const canopyArea = (d) => Math.PI * Math.pow(d / 2, 2);
const formatNum = (x, d = 2) => (!isFinite(Number(x)) ? '0' : Number(x).toFixed(d).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
const fmtInt = (x) => (!isFinite(Number(x)) ? '0' : Math.round(Number(x)).toLocaleString());
const translateFilters = (sql) => {
    if (!sql || sql === '1=1' || sql === 'None')
        return ['All segments:'];
    const translations = {
        'summer_SI': 'Spring/Summer Shade Index',
        'ABw2k_max': 'Neighbourhood transit (betweenness centrality at 2km scale)',
        'ABw5k_max': 'City transit (betweenness centrality at 5km scale)',
        'AIw1kH_mea': 'Local centers (closeness centrality at 1km scale)',
        'FSI500_mea': 'Floor Space Index within 500m walking distance',
        'ARw500lm_1': 'Number of shops and restaurants within 500m walking distance',
        'ADws_mean': 'Walking distance to the closest school or preschool',
        'ADwm_mean': 'Walking distance to the closest tram, metro or railway station',
        'ADwbu_mean': 'Walking distance to the closest bus stop',
        'width': 'Street width'
    };
    let safeSql = sql.replace(/(BETWEEN\s+.*?)\s+AND\s+(.*?)/gi, '$1##RANGE_AND##$2');
    let conditions = safeSql.split(/\s+AND\s+/gi);
    return conditions.map((cond) => {
        let text = cond.trim();
        if (text.startsWith('(') && text.endsWith(')'))
            text = text.slice(1, -1).trim();
        Object.keys(translations).forEach(key => { text = text.split(key).join(translations[key]); });
        text = text
            .replace(/\s+BETWEEN\s+/gi, ' is between ')
            .replace(/##RANGE_AND##/g, ' and ')
            .replace(/<\s*/g, ': less than ').replace(/>\s*/g, ': greater than ')
            .replace(/<=\s*/g, ': less than or equal to ').replace(/>=\s*/g, ': greater than or equal to ')
            .replace(/=\s*/g, ': equal to ');
        const lower = text.toLowerCase();
        const isDistanceField = lower.includes('walking distance to') || lower.startsWith('street width');
        if (isDistanceField) {
            if (lower.includes(' is between ')) {
                text = text.replace(/(\d+(?:\.\d+)?)\s+and\s+(\d+(?:\.\d+)?)/i, '$1m and $2m');
            }
            else {
                text = text.replace(/(\d+(\.\d+)?)$/, '$1m');
            }
        }
        let bullet = text.charAt(0).toUpperCase() + text.slice(1);
        bullet = bullet.replace(/[:\s]+$/, '').trim();
        return bullet.endsWith('.') ? bullet : bullet + '.';
    });
};
// ===================== MAIN WIDGET =====================
function Widget(props) {
    var _a, _b, _c, _d;
    const config = props.config || {};
    const { useDataSources } = props;
    const dsId = (_a = useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0]) === null || _a === void 0 ? void 0 : _a.dataSourceId;
    // --- Map state ---
    const [jimuMapView, setJimuMapView] = useState(null);
    // --- Filter state ---
    const [filters, setFilters] = useState(createInitialFilters);
    const [openPopover, setOpenPopover] = useState(null);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [popoverPos, setPopoverPos] = useState(null);
    const [tooltipPos, setTooltipPos] = useState(null);
    const prevSqlRef = useRef('');
    const iconRefs = useRef({});
    const dsRef = useRef(null);
    const [dsReady, setDsReady] = useState(false);
    // --- Calculator state ---
    const [scenario, setScenario] = useState('s1');
    const [subScenario, setSubScenario] = useState('1a');
    const [diameter, setDiameter] = useState(8);
    const [tccrGlobal, setTccrGlobal] = useState((_b = config === null || config === void 0 ? void 0 : config.defaultTccr) !== null && _b !== void 0 ? _b : 0.6);
    const [wtypeTargets, setWtypeTargets] = useState({ '1': 0.50, '2': 0.40, '3': 0.40, '4': 0.40, '5': 0.40 });
    const [spacing, setSpacing] = useState(25);
    const [results, setResults] = useState(null);
    const [segmentCount, setSegmentCount] = useState('');
    const [loading, setLoading] = useState(false);
    const widgetId = props.id || 'widget_82';
    // --- Data source handling ---
    const handleDsCreated = useCallback((ds) => {
        dsRef.current = ds;
        prevSqlRef.current = '';
        setDsReady(true);
    }, []);
    // --- Apply filter SQL ---
    const applySql = useCallback((currentFilters) => {
        const sql = buildCombinedSql(currentFilters);
        if (sql === prevSqlRef.current)
            return;
        prevSqlRef.current = sql;
        const ds = dsRef.current;
        if (!ds)
            return;
        try {
            if (ds.updateQueryParams) {
                ds.updateQueryParams({ where: sql }, widgetId);
            }
        }
        catch (e) {
            console.error('[tree-planting] Failed to apply filters:', e);
        }
    }, [widgetId]);
    useEffect(() => {
        if (dsReady)
            applySql(filters);
    }, [filters, applySql, dsReady]);
    // --- Segment count polling ---
    useEffect(() => {
        var _a;
        if (!((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map))
            return;
        const updateCount = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const layer = jimuMapView.view.map.allLayers.find((l) => l.title === 'Selected streets' && l.type === 'feature');
                if (!layer)
                    return;
                const query = layer.createQuery();
                query.where = layer.definitionExpression || '1=1';
                const result = yield layer.queryFeatureCount(query);
                if (!loading)
                    setSegmentCount(`${result.toLocaleString()} street segments selected.`);
            }
            catch (e) { /* ignore */ }
        });
        updateCount();
        const interval = setInterval(updateCount, 2000);
        return () => clearInterval(interval);
    }, [jimuMapView, loading]);
    // --- Filter interactions ---
    const updateFilterValue = (field, value) => {
        setFilters(prev => (Object.assign(Object.assign({}, prev), { [field]: Object.assign(Object.assign({}, prev[field]), { value }) })));
    };
    const handleIconClick = (field) => {
        const state = filters[field];
        if (state === null || state === void 0 ? void 0 : state.active) {
            const def = _filter_definitions__WEBPACK_IMPORTED_MODULE_5__.FILTER_DEFINITIONS.find(d => d.field === field);
            setFilters(prev => { var _a; return (Object.assign(Object.assign({}, prev), { [field]: { active: false, value: (_a = def === null || def === void 0 ? void 0 : def.defaultValue) !== null && _a !== void 0 ? _a : 0 } })); });
            setOpenPopover(null);
            setPopoverPos(null);
        }
        else {
            setFilters(prev => (Object.assign(Object.assign({}, prev), { [field]: Object.assign(Object.assign({}, prev[field]), { active: true }) })));
            openPopoverFor(field);
        }
    };
    const openPopoverFor = (field) => {
        const iconEl = iconRefs.current[field];
        if (iconEl) {
            const rect = iconEl.getBoundingClientRect();
            setPopoverPos({ top: rect.bottom + 6, left: Math.max(rect.right - 220, 10) });
        }
        setOpenPopover(field);
    };
    const closePopover = () => { setOpenPopover(null); setPopoverPos(null); };
    const handleMouseEnter = (field) => {
        setHoveredIcon(field);
        const iconEl = iconRefs.current[field];
        if (iconEl) {
            const rect = iconEl.getBoundingClientRect();
            setTooltipPos({ top: rect.bottom + 4, left: rect.left + rect.width / 2 });
        }
    };
    const handleMouseLeave = () => { setHoveredIcon(null); setTooltipPos(null); };
    const openDef = openPopover ? _filter_definitions__WEBPACK_IMPORTED_MODULE_5__.FILTER_DEFINITIONS.find(d => d.field === openPopover) : null;
    const hoveredDef = hoveredIcon ? _filter_definitions__WEBPACK_IMPORTED_MODULE_5__.FILTER_DEFINITIONS.find(d => d.field === hoveredIcon) : null;
    // --- CSV/PDF handlers ---
    const handleCsvDownload = () => {
        if (!results)
            return;
        const header = "Category,Ideal number of trees (ignoring existing shade trees),Number of existing shade trees,Number of existing underdeveloped trees,Number of new trees to plant,Length(m),TCCR,Spacing(m)\n";
        const rows = Object.keys(results.byWtype).map(k => {
            const g = results.byWtype[k];
            return `${CATEGORY_LABELS[k] || k},${g.trees},${results.totalExistingShade},${results.totalExistingUnder},${g.treesToAdd},${g.length.toFixed(1)},${g.tccr.toFixed(2)},${g.spacing.toFixed(1)}`;
        }).join("\n");
        const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "tree_planting_potential_report.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const handlePdfReport = () => __awaiter(this, void 0, void 0, function* () {
        if (!jimuMapView || !results)
            return;
        const screenshot = yield jimuMapView.view.takeScreenshot({ format: 'png' });
        const printWindow = window.open('', '_blank');
        if (!printWindow)
            return;
        const methodDesc = scenario === 's1'
            ? `Method 1: Target TCCR (${subScenario === '1a' ? 'global' : 'by street width'})` : `Method 2: Fixed Spacing`;
        const paramSummary = `Crown Diameter: ${diameter}m | ${scenario === 's1' ? (subScenario === '1a' ? `Global Target TCCR: ${tccrGlobal}` : 'Targets: per width class') : `Desired Spacing: ${spacing}m`}`;
        printWindow.document.write(`<html><head><title>Tree Planting Targets Calculation</title><style>body{font-family:'Segoe UI',Arial,sans-serif;padding:25px;color:#333;font-size:10px;line-height:1.3}h1{color:#2c3e50;font-size:16px;margin:0 0 15px 0}h2{font-size:12px;border-bottom:1px solid #eee;padding-bottom:3px;margin:15px 0 8px 0}.section-title{font-weight:bold;margin-bottom:3px;font-size:11px}table{width:100%;border-collapse:collapse;margin-top:5px;font-size:9px}th,td{border:1px solid #ddd;padding:4px 6px;text-align:left}th{background-color:#f8f9fa}.map-container{margin:12px 0;border:1px solid #ccc;width:100%}.map-img{width:100%;height:auto;display:block;max-height:400px;object-fit:contain;background:#eee}.footer{margin-top:25px;padding-top:8px;border-top:1px solid #eee;text-align:center;color:#777;font-size:8px}ul{padding-left:15px;margin:3px 0}li{margin-bottom:1px}</style></head><body>
      <h1>Tree Planting Targets Calculation</h1>
      <div class="section-title">Applied assumptions:</div><ul>${results.filterSummary.map(f => `<li>${f}</li>`).join('')}</ul>
      <p style="margin:5px 0;"><strong>Total number of selected streets segments:</strong> ${fmtInt(results.segmentCount)} | <strong>Total street length:</strong> ${fmtInt(results.totalLength)} m</p>
      <div class="section-title">Chosen Method:</div><p style="margin:2px 0;">${methodDesc}<br/><span style="color:#666;">Parameters: ${paramSummary}</span></p>
      <div class="map-container"><img class="map-img" src="${screenshot.dataUrl}"></div>
      <h2>Results Summary</h2><table><tr><th>Metric</th><th>Value</th></tr>
      <tr><td>Ideal number of trees</td><td>${fmtInt(results.totalTrees)}</td></tr>
      <tr><td>Existing shade trees</td><td>${fmtInt(results.totalExistingShade)}</td></tr>
      <tr><td>Existing underdeveloped trees</td><td>${fmtInt(results.totalExistingUnder)}</td></tr>
      <tr style="font-weight:bold;"><td>New trees to plant</td><td>${fmtInt(results.treesToAdd)}</td></tr>
      <tr><td>Average TCCR</td><td>${formatNum(results.avgTccr)}</td></tr>
      <tr><td>Average spacing</td><td>${fmtInt(results.avgSpacing)} m</td></tr></table>
      <h2>Results by street width</h2><table><tr><th>Width</th><th>Trees to Add</th><th>TCCR</th><th>Spacing (m)</th><th>Length (m)</th></tr>
      ${Object.keys(results.byWtype).sort().map(k => { const g = results.byWtype[k]; return `<tr><td>${CATEGORY_LABELS[k] || k}</td><td>${fmtInt(g.treesToAdd)}</td><td>${formatNum(g.tccr)}</td><td>${fmtInt(g.spacing)}</td><td>${fmtInt(g.length)}</td></tr>`; }).join('')}</table>
      <div class="footer">Big Data in Architectural Research Lab, Technion | ${new Date().toLocaleDateString()}</div></body></html>`);
        printWindow.document.close();
        setTimeout(() => { printWindow.print(); }, 700);
    });
    // --- Compute ---
    const onCompute = () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!dsId || !jimuMapView)
            return;
        const ds = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance().getDataSource(dsId);
        if (!ds)
            return;
        setLoading(true);
        setSegmentCount('Fetching records...');
        try {
            const layer = ds.layer;
            if (!layer) {
                setSegmentCount('Layer not available.');
                setLoading(false);
                return;
            }
            const selectedIds = ((_a = ds.getSelectedRecordIds) === null || _a === void 0 ? void 0 : _a.call(ds)) || [];
            let features = [];
            if (selectedIds.length > 0) {
                let offset = 0;
                while (offset < selectedIds.length) {
                    const chunk = selectedIds.slice(offset, offset + 2000);
                    const q = layer.createQuery();
                    q.objectIds = chunk;
                    q.returnGeometry = false;
                    q.outFields = ['*'];
                    const res = yield layer.queryFeatures(q);
                    if ((_b = res === null || res === void 0 ? void 0 : res.features) === null || _b === void 0 ? void 0 : _b.length)
                        features = features.concat(res.features);
                    offset += 2000;
                }
            }
            else {
                const queryParams = ((_d = (_c = ds).getCurrentQueryParams) === null || _d === void 0 ? void 0 : _d.call(_c)) || { where: '1=1' };
                let offset = 0;
                let done = false;
                while (!done) {
                    const q = layer.createQuery();
                    q.where = queryParams.where || '1=1';
                    q.outFields = ['*'];
                    q.returnGeometry = false;
                    q.start = offset;
                    q.num = 2000;
                    const res = yield layer.queryFeatures(q);
                    if ((_e = res === null || res === void 0 ? void 0 : res.features) === null || _e === void 0 ? void 0 : _e.length)
                        features = features.concat(res.features);
                    if (!res.features || res.features.length < 2000)
                        done = true;
                    else
                        offset += 2000;
                }
            }
            const recs = features.map((f) => ({ getFieldValue: (field) => f.attributes[field] }));
            if (recs.length === 0) {
                setSegmentCount('No records found.');
                setLoading(false);
                return;
            }
            const whereClause = ((_h = (_g = (_f = ds).getCurrentQueryParams) === null || _g === void 0 ? void 0 : _g.call(_f)) === null || _h === void 0 ? void 0 : _h.where) || 'None';
            const translated = (selectedIds && selectedIds.length > 0)
                ? [`Manual selection (${recs.length} segments):`] : translateFilters(whereClause);
            const C = canopyArea(diameter);
            const rows = config.rows || 2;
            const summary = {
                totalTrees: 0, totalExistingShade: 0, totalExistingUnder: 0, treesToAdd: 0,
                totalLength: 0, totalArea: 0, avgTccr: 0, avgSpacing: 0,
                filterSummary: translated, segmentCount: recs.length, byWtype: {}
            };
            recs.forEach(r => {
                const L = Number(r.getFieldValue(config.lengthField)) || 0;
                const W = Number(r.getFieldValue(config.widthField)) || 0;
                const existingShade = config.existingTreesField ? (Number(r.getFieldValue(config.existingTreesField)) || 0) : 0;
                const existingUnder = config.underdevelopedTreesField ? (Number(r.getFieldValue(config.underdevelopedTreesField)) || 0) : 0;
                const typeID = String(r.getFieldValue(config.wtypeField) || '1');
                const A = L * W;
                if (!summary.byWtype[typeID])
                    summary.byWtype[typeID] = { trees: 0, treesToAdd: 0, length: 0, area: 0, tccr: 0, spacing: 0 };
                let n_pot = scenario === 's1'
                    ? Math.ceil(((subScenario === '1b' ? (wtypeTargets[typeID] || 0.6) : tccrGlobal) * A) / C)
                    : rows * (Math.floor(L / spacing) + 1);
                const n_add = Math.max(0, n_pot - existingShade);
                summary.totalTrees += n_pot;
                summary.totalExistingShade += existingShade;
                summary.totalExistingUnder += existingUnder;
                summary.treesToAdd += n_add;
                summary.totalLength += L;
                summary.totalArea += A;
                summary.byWtype[typeID].trees += n_pot;
                summary.byWtype[typeID].treesToAdd += n_add;
                summary.byWtype[typeID].length += L;
                summary.byWtype[typeID].area += A;
            });
            summary.avgTccr = summary.totalArea > 0 ? (summary.totalTrees * C) / summary.totalArea : 0;
            summary.avgSpacing = summary.totalTrees > 0 ? summary.totalLength / (summary.totalTrees / rows) : 0;
            Object.keys(summary.byWtype).forEach(k => {
                const g = summary.byWtype[k];
                g.tccr = g.area > 0 ? (g.trees * C) / g.area : 0;
                g.spacing = g.trees > 0 ? g.length / (g.trees / rows) : 0;
            });
            setResults(summary);
            setSegmentCount(`Calculated ${recs.length} segments.`);
        }
        catch (err) {
            console.error(err);
            setSegmentCount('Error fetching features.');
        }
        finally {
            setLoading(false);
        }
    });
    // ===================== RENDER =====================
    const portalContent = ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [hoveredIcon && !openPopover && hoveredDef && tooltipPos && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compact-filter-tooltip', style: { top: tooltipPos.top, left: tooltipPos.left, transform: 'translateX(-50%)' }, children: hoveredDef.name })), openPopover && openDef && popoverPos && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compact-filter-backdrop', onClick: closePopover }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'compact-filter-popover', style: { top: popoverPos.top, left: popoverPos.left }, onClick: e => e.stopPropagation(), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compact-filter-popover-title', children: openDef.name }), openDef.description && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 10, color: '#999', marginBottom: 6, lineHeight: 1.3, fontStyle: 'italic', wordWrap: 'break-word', whiteSpace: 'normal', maxWidth: 200 }, children: openDef.description })), openDef.type === 'slider' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SliderContent, { def: openDef, value: filters[openPopover].value, onChange: v => updateFilterValue(openPopover, v) })), openDef.type === 'range-slider' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeSliderContent, { def: openDef, value: filters[openPopover].value, onChange: v => updateFilterValue(openPopover, v) }))] })] }))] }));
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "widget-tree-planting", style: { height: '100%', overflow: 'auto', background: '#2b2b2b', color: '#eee' }, children: [((_c = props.useMapWidgetIds) === null || _c === void 0 ? void 0 : _c[0]) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: (jmv) => setJimuMapView(jmv) })), ((_d = props.useDataSources) === null || _d === void 0 ? void 0 : _d[0]) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: props.useDataSources[0], onDataSourceCreated: handleDsCreated })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compact-filter-bar', style: { margin: 0, borderRadius: 0 }, children: _filter_definitions__WEBPACK_IMPORTED_MODULE_5__.FILTER_DEFINITIONS.map(def => {
                    const state = filters[def.field];
                    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: el => { iconRefs.current[def.field] = el; }, className: `compact-filter-icon ${(state === null || state === void 0 ? void 0 : state.active) ? 'active' : ''}`, onClick: e => { e.stopPropagation(); handleIconClick(def.field); }, onMouseEnter: () => handleMouseEnter(def.field), onMouseLeave: handleMouseLeave, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FilterIconImg, { def: def }) }, def.field));
                }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { textAlign: 'center', padding: '4px 10px 0' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => { setFilters(createInitialFilters()); setOpenPopover(null); setPopoverPos(null); }, style: { fontSize: 10, color: '#aaa', background: 'none', border: '1px solid #555', borderRadius: 3, padding: '2px 10px', cursor: 'pointer' }, children: "Reset Filters" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: '8px 10px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 12, fontStyle: 'italic', color: '#bbb', lineHeight: 1.4, marginBottom: 4 }, children: "Using the above buttons, filter out streets that do not require planting (by default, all the city's streets are considered). Next, choose the target calculation method, change the calculation parameters as you wish, and press Calculate." }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 12, color: '#4fc3f7', marginBottom: 6 }, children: segmentCount }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 6 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 }, children: "Calculation Method" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { fontSize: 12, cursor: 'pointer' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Radio, { checked: scenario === 's1', onChange: () => setScenario('s1') }), " Method 1: Target Tree Canopy Cover Ratio (TCCR)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 2 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: scenario === 's1' && subScenario === '1a', onChange: () => { setScenario('s1'); setSubScenario('1a'); }, style: { width: 14, height: 14, marginRight: 6, accentColor: '#0079c1' } }), "1a: Global"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: scenario === 's1' && subScenario === '1b', onChange: () => { setScenario('s1'); setSubScenario('1b'); }, style: { width: 14, height: 14, marginRight: 6, accentColor: '#0079c1' } }), "1b: By street width"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { fontSize: 12, cursor: 'pointer', marginTop: 2 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Radio, { checked: scenario === 's2', onChange: () => setScenario('s2') }), " Method 2: Fixed Spacing"] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 6, padding: 8, border: '1px solid #555', borderRadius: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 }, children: "Calculation Parameters" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 11, marginBottom: 2 }, children: "Crown diameter (m)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: String(diameter), onChange: (e) => setDiameter(Number(e.target.value)), style: { width: '100%', padding: '4px 6px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 12 } })] }), scenario === 's1' && subScenario === '1a' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 11, marginBottom: 2 }, children: "Global target TCCR (0.0 - 1.0)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: String(tccrGlobal), onChange: (e) => setTccrGlobal(Number(e.target.value)), style: { width: '100%', padding: '4px 6px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 12 } })] })), scenario === 's1' && subScenario === '1b' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: 6, border: '1px solid #555', borderRadius: 3, fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', marginBottom: 4 }, children: "TCCR targets by street width:" }), Object.keys(wtypeTargets).sort().map(id => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [CATEGORY_LABELS[id] || `Class ${id}`, ":"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: String(wtypeTargets[id]), onChange: (e) => setWtypeTargets(Object.assign(Object.assign({}, wtypeTargets), { [id]: Number(e.target.value) })), style: { width: 60, padding: '2px 4px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 11, textAlign: 'right' } })] }, id)))] })), scenario === 's2' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 11, marginBottom: 2 }, children: "Desired Spacing (m)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: String(spacing), onChange: (e) => setSpacing(Number(e.target.value)), style: { width: '100%', padding: '4px 6px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 12 } })] }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: onCompute, disabled: !dsId || loading, style: { width: '100%', padding: '8px', background: loading ? '#555' : '#4a90d9', color: '#fff', border: 'none', borderRadius: 4, fontSize: 13, cursor: loading ? 'default' : 'pointer', marginBottom: 8 }, children: loading ? 'Processing...' : 'Calculate' }), results && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: 10, border: '1px solid #555', borderRadius: 4, background: '#333' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', borderBottom: '1px solid #555', marginBottom: 6, paddingBottom: 4, textTransform: 'uppercase', fontSize: 11 }, children: "Results" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Selected segments:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: fmtInt(results.segmentCount) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Total street length:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: [fmtInt(results.totalLength), " m"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11, marginTop: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Ideal trees:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: fmtInt(results.totalTrees) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Existing shade trees:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: fmtInt(results.totalExistingShade) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Underdeveloped trees:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: fmtInt(results.totalExistingUnder) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 'bold', borderBottom: '1px solid #555', paddingBottom: 4, marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "New trees to plant:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: fmtInt(results.treesToAdd) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Weighted TCCR:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: formatNum(results.avgTccr) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Avg. Spacing:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: [fmtInt(results.avgSpacing), " m"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: 6, marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handleCsvDownload, style: { flex: 1, padding: '4px 8px', background: '#4a4a4a', color: '#eee', border: '1px solid #666', borderRadius: 3, fontSize: 11, cursor: 'pointer' }, children: "Export CSV" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handlePdfReport, style: { flex: 1, padding: '4px 8px', background: '#4a4a4a', color: '#eee', border: '1px solid #666', borderRadius: 3, fontSize: 11, cursor: 'pointer' }, children: "Print PDF" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', borderBottom: '1px solid #555', marginBottom: 4, fontSize: 11, textTransform: 'uppercase' }, children: "Analysis by width:" }), Object.keys(results.byWtype).sort().map(k => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { borderBottom: '1px solid #444', paddingBottom: 4, marginBottom: 4, fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', color: '#4fc3f7' }, children: CATEGORY_LABELS[k] || `Class ${k}` }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["Add ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: fmtInt(results.byWtype[k].treesToAdd) }), " trees"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["TCCR: ", formatNum(results.byWtype[k].tccr)] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { color: '#888', fontSize: 10 }, children: ["Spacing: ", fmtInt(results.byWtype[k].spacing), " m | Length: ", fmtInt(results.byWtype[k].length), " m"] })] }, k)))] })] }))] }), react_dom__WEBPACK_IMPORTED_MODULE_4__.createPortal(portalContent, document.body)] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90cmVlX3BvdGVudGlhbF92Mi9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlJQUF5SSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdB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LE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUM1RixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBSSxJQUM3SSxDQUNQLElBQ0csRUFFTiw0RUFBUSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQ3BELEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsWUFDek0sT0FBTyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FDakMsRUFFUixPQUFPLElBQUksQ0FDViwwRUFBSyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsYUFDeEYseUVBQUssS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFF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QUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFlLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFTLEtBTjFJLENBQUMsQ0FPTCxDQUNQLENBQUMsSUFDRSxJQUNGLENBQ1AsSUFDRyxFQUVMLG1EQUFxQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQ2hELENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdHJlZV9wb3RlbnRpYWxfdjIvc3JjL3J1bnRpbWUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RyZWVfcG90ZW50aWFsX3YyL3NyYy9ydW50aW1lL3N0eWxlLnNjc3M/YWUwYyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90cmVlX3BvdGVudGlhbF92Mi9zcmMvZmlsdGVyLWRlZmluaXRpb25zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdHJlZV9wb3RlbnRpYWxfdjIvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogPT09PT09PT09PT09PT09PT09PT09IEZJTFRFUiBCQVIgU1RZTEVTID09PT09PT09PT09PT09PT09PT09PSAqL1xuLmNvbXBhY3QtZmlsdGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAzcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29tcGFjdC1maWx0ZXItaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBib3JkZXItY29sb3IgMC4xNXM7XG4gIGNvbG9yOiAjY2NjO1xufVxuLmNvbXBhY3QtZmlsdGVyLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuLmNvbXBhY3QtZmlsdGVyLWljb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjEsIDE5MywgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3OWMxO1xuICBjb2xvcjogIzRmYzNmNztcbn1cbi5jb21wYWN0LWZpbHRlci1pY29uIGltZywgLmNvbXBhY3QtZmlsdGVyLWljb24gc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29tcGFjdC1maWx0ZXItaWNvbiBpbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDAuOCk7XG59XG4uY29tcGFjdC1maWx0ZXItaWNvbi5hY3RpdmUgaW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgwLjcpIHNlcGlhKDEpIHNhdHVyYXRlKDUpIGh1ZS1yb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNvbXBhY3QtZmlsdGVyLXRvb2x0aXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC45NSk7XG4gIGNvbG9yOiAjZWVlO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDAxO1xufVxuXG4uY29tcGFjdC1maWx0ZXItcG9wb3ZlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjk1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIG1pbi13aWR0aDogMjIwcHg7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5jb21wYWN0LWZpbHRlci1wb3BvdmVyLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4uY29tcGFjdC1maWx0ZXItc2xpZGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uY29tcGFjdC1maWx0ZXItc2xpZGVyIHtcbiAgZmxleDogMTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29tcGFjdC1maWx0ZXItc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OWMxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29tcGFjdC1maWx0ZXItc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OWMxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbXBhY3QtZmlsdGVyLXZhbHVlIHtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLmNvbXBhY3QtZmlsdGVyLXJhbmdlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5jb21wYWN0LWZpbHRlci1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk5O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdHJlZV9wb3RlbnRpYWxfdjIvc3JjL3J1bnRpbWUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxrRUFBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0FBREY7QUFHRTtFQUNFLHFDQUFBO0FBREo7QUFJRTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFISjtBQU1FO0VBQ0UsaUNBQUE7QUFKSjtBQU9FO0VBQ0UseUVBQUE7QUFMSjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQU5GOztBQVNBO0VBQ0UsT0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBTkY7QUFRRTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5KO0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVBKOztBQVdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFSRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT0gRklMVEVSIEJBUiBTVFlMRVMgPT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbXBhY3QtZmlsdGVyLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogM3B4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItaWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBib3JkZXItY29sb3IgMC4xNXM7XFxuICBjb2xvcjogI2NjYztcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgfVxcblxcbiAgJi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMSwgMTkzLCAwLjMpO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDc5YzE7XFxuICAgIGNvbG9yOiAjNGZjM2Y3O1xcbiAgfVxcblxcbiAgaW1nLCBzdmcge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMC44KTtcXG4gIH1cXG5cXG4gICYuYWN0aXZlIGltZyB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMC43KSBzZXBpYSgxKSBzYXR1cmF0ZSg1KSBodWUtcm90YXRlKDE4MGRlZyk7XFxuICB9XFxufVxcblxcbi5jb21wYWN0LWZpbHRlci10b29sdGlwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC45NSk7XFxuICBjb2xvcjogI2VlZTtcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAxMDAwMTtcXG59XFxuXFxuLmNvbXBhY3QtZmlsdGVyLXBvcG92ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjk1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICBtaW4td2lkdGg6IDIyMHB4O1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBjb2xvcjogI2VlZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmNvbXBhY3QtZmlsdGVyLXBvcG92ZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItc2xpZGVyLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItc2xpZGVyIHtcXG4gIGZsZXg6IDE7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICMwMDc5YzE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICY6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICMwMDc5YzE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItdmFsdWUge1xcbiAgbWluLXdpZHRoOiAzNXB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XFxufVxcblxcbi5jb21wYWN0LWZpbHRlci1yYW5nZS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLmNvbXBhY3QtZmlsdGVyLWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgdHlwZSBGaWx0ZXJUeXBlID0gJ3NsaWRlcicgfCAncmFuZ2Utc2xpZGVyJyB8ICdtdWx0aS1zZWxlY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyRmlsdGVyRGVmIHtcbiAgdHlwZTogJ3NsaWRlcidcbiAgZmllbGQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgb3BlcmF0b3I6ICc8JyB8ICc+J1xuICBtaW46IG51bWJlclxuICBtYXg6IG51bWJlclxuICBzdGVwOiBudW1iZXJcbiAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgdW5pdD86IHN0cmluZ1xuICBpY29uVHlwZTogJ3N2ZycgfCAncG5nJ1xuICBpY29uU3ZnPzogc3RyaW5nXG4gIGljb25Qbmc/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgYnJlYWtzPzogbnVtYmVyW10gIC8vIEplbmtzIG5hdHVyYWwgYnJlYWtzIGZvciBub24tbGluZWFyIHNsaWRlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlU2xpZGVyRmlsdGVyRGVmIHtcbiAgdHlwZTogJ3JhbmdlLXNsaWRlcidcbiAgZmllbGQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgbWluOiBudW1iZXJcbiAgbWF4OiBudW1iZXJcbiAgc3RlcDogbnVtYmVyXG4gIGRlZmF1bHRWYWx1ZTogW251bWJlciwgbnVtYmVyXVxuICB1bml0Pzogc3RyaW5nXG4gIGljb25UeXBlOiAnc3ZnJyB8ICdwbmcnXG4gIGljb25Tdmc/OiBzdHJpbmdcbiAgaWNvblBuZz86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpU2VsZWN0RmlsdGVyRGVmIHtcbiAgdHlwZTogJ211bHRpLXNlbGVjdCdcbiAgZmllbGQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgb3B0aW9uczogbnVtYmVyW11cbiAgZGVmYXVsdFZhbHVlOiBudW1iZXJbXVxuICBpY29uVHlwZTogJ3N2ZycgfCAncG5nJ1xuICBpY29uU3ZnPzogc3RyaW5nXG4gIGljb25Qbmc/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgRmlsdGVyRGVmID0gU2xpZGVyRmlsdGVyRGVmIHwgUmFuZ2VTbGlkZXJGaWx0ZXJEZWYgfCBNdWx0aVNlbGVjdEZpbHRlckRlZlxuXG4vLyAtLS0gU1ZHIGljb25zIC0tLVxuXG5jb25zdCBzdW5TdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDE2IDE3XCI+PGcgY2xpcC1wYXRoPVwidXJsKCNhKVwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTEyLjE1MyA2LjA1NC0uNzA3LS43MDcgMi4yLTIuMi43MDguNzA3em0tOS41MDcgOC4wOTIuNzA3LjcwNyAyLjItMi4yLS43MDYtLjcwN3ptOC44LTEuNDkzIDIuMiAyLjIuNzA3LS43MDYtMi4yLTIuMnpNNS41NTQgNS4zNDdsLTIuMi0yLjItLjcwNy43MDYgMi4yIDIuMnpNOSAxLjVIOHYzaDF6bS0xIDE1aDF2LTNIOHptOC03di0xaC0zdjF6bS0xNSAwaDN2LTFIMXpNNSA5YTMuNSAzLjUgMCAxIDEgNyAwIDMuNSAzLjUgMCAwIDEtNyAwbTEgMGEyLjUgMi41IDAgMSAwIDUgMCAyLjUgMi41IDAgMCAwLTUgMFwiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPVwiYVwiPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0wIC41aDE2djE2SDB6XCIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPidcblxuY29uc3QgcGVkZXN0cmlhblN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PGxpbmUgeDE9XCIxXCIgeTE9XCIzXCIgeDI9XCIxNVwiIHkyPVwiM1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjAuNVwiLz48bGluZSB4MT1cIjFcIiB5MT1cIjhcIiB4Mj1cIjE1XCIgeTI9XCI4XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjxsaW5lIHgxPVwiMVwiIHkxPVwiMTNcIiB4Mj1cIjE1XCIgeTI9XCIxM1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjAuNVwiLz48bGluZSB4MT1cIjNcIiB5MT1cIjFcIiB4Mj1cIjNcIiB5Mj1cIjE1XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjxsaW5lIHgxPVwiOFwiIHkxPVwiMVwiIHgyPVwiOFwiIHkyPVwiMTVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyLjJcIi8+PGxpbmUgeDE9XCIxM1wiIHkxPVwiMVwiIHgyPVwiMTNcIiB5Mj1cIjE1XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjwvc3ZnPidcblxuY29uc3QgY2FyU3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48bGluZSB4MT1cIjFcIiB5MT1cIjNcIiB4Mj1cIjE1XCIgeTI9XCIzXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjxsaW5lIHgxPVwiMVwiIHkxPVwiOFwiIHgyPVwiMTVcIiB5Mj1cIjhcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIi8+PGxpbmUgeDE9XCIxXCIgeTE9XCIxM1wiIHgyPVwiMTVcIiB5Mj1cIjEzXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjxsaW5lIHgxPVwiM1wiIHkxPVwiMVwiIHgyPVwiM1wiIHkyPVwiMTVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIi8+PGxpbmUgeDE9XCI4XCIgeTE9XCIxXCIgeDI9XCI4XCIgeTI9XCIxNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjMuNVwiLz48bGluZSB4MT1cIjhcIiB5MT1cIjFcIiB4Mj1cIjhcIiB5Mj1cIjE1XCIgc3Ryb2tlPVwicmdiYSgwLDAsMCwwLjkpXCIgc3Ryb2tlLXdpZHRoPVwiMC44XCIgc3Ryb2tlLWRhc2hhcnJheT1cIjIgMS41XCIvPjxsaW5lIHgxPVwiMTNcIiB5MT1cIjFcIiB4Mj1cIjEzXCIgeTI9XCIxNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjAuNVwiLz48L3N2Zz4nXG5cbmNvbnN0IGJ1aWxkaW5nc1N2ZyA9ICc8aW1nIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUJSa2xFUVZSNEFleFYwUTdESUFqYzl2Ly92QnFUZS9BQ1VRaEVxeTZ0RG5wY1BjN1kzK2Zsdnl0Z3RvRkhPZkF2M2ZiY3BTenZPc29CdFBGYi9vemNCWlovYmVtQXRzKzk3ZFQ0dlBsbUhWczZBSVhhUHNmejNxelZlL1BpKzdaMlFGUzhXdklvQjNxbkJzeUp4b0ZYbkk5eUFCM2dVd1I1bnFOeHpGL2pJeDJveWxjWmpuU0FUeG5OakdpYytCNkRBMkw5OUtSRkFKOHFIRU1NNXptMjRvQVhaNHNBa1dCMjBpS0E5elRIME1KNWpxMDQ0TVhaSWtBa21KMzBDTkQyTkd1SnhqRi9qVDBDYXVFcXd4VXcyd21QQTlxcHdscWljY3hmWTQrQVdyaktZQkhBcHdySDBNUjVqcTA0NE1YWklrQWttSjNNRU1CN24rTlF6UmtDUWhmWUk4c1VvTzM5M3BwTXp6TUZtQmJpQlY4QjNzNUYxVjBIb2pycDVjbHh3THNhUjkwV0FyUXZKZWRINDE0ZlIza1lCOTRtdjRVRC9NV01pdEV4ekZHOERjL3JIWGdBQUFELy84K3VTSk1BQUFBR1NVUkJWQU1BSWZ1Y1lmQThxOXdBQUFBQVNVVk9SSzVDWUlJPVwiIHN0eWxlPVwid2lkdGg6MThweDtoZWlnaHQ6MThweDtmaWx0ZXI6YnJpZ2h0bmVzcygwKSBpbnZlcnQoMC44KTtcIiAvPidcblxuY29uc3Qgc2hvcHBpbmdTdmcgPSAnPGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBSUFDQVlBQUFEMGVOVDZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU1xQUFBREtnQnQwNGcxZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUNBQVNVUkJWSGljN2QxNXVHMW5YUi93NzcyNWdaQUVFb1l3V2NKbEtBSEtVR0lUc0FZaTg2QlFpMEFwUTZrV2xBNml0S0R5dEdpbDZxUFd0aUtQQTBxaFVDd29SWVJpUW9SQVVVUUdvVEtGRUNCY0FzR1FBTWtsSVFHVG05cy8zcnR6VDI3T1dXZnZmZGI4Zmo3UHN4NFU3bG43L2UzcDk5MXJ2ZXRkQ1FBQUFBQUFBQUF3Qjd0YTNOZVRrdXh0Y1g4QXdJM3RTL0syTm5iVVpnQTRPOG5qV3R3ZkFIQmo3MGp5K0RaMnRMdU5uUUFBMHlJQUFFQ0ZCQUFBcUpBQUFBQVZFZ0FBb0VJQ0FBQlVTQUFBZ0FvSkFBQlFJUUVBQUNva0FBQkFoUVFBQUtpUUFBQUFGUklBQUtCQ0FnQUFWRWdBQUlBS0NRQUFVS0U5TGU3cjRpU2ZhM0YvQU1DTlhUejBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFZTnAyN2ZEdnowbHl6ellHTWdNL2t1UzlMZXpuT1VsK3RvWDl0T21SU2ZhMXNKK2ZUYWx2VE83UjBuNWVuZVRNbHZiVmhuMHByMXNiemsyeXQ2Vjl0ZUc5S1orM05ueStwZjIwNWJWSlh0YkNmdmFtdkc1ajhyS1UrbmJxekpUUEc4bm5rangyM1QvZXM0TUhQajNKWTNidzkzTnpiRXY3T1NISjNWdmFWMXVPYm1rL3Q4MzRhbXZMSFRPdTJnNjB1Sys3WkZ5MWZhYkZmWTJwcnFSOFJ0cHdkTVpYMndrdDdlZllqSysyb2R3OXlXbEpQcnpPSCsvZXdRUC82QTcrRmdEWXViVjc4Ym9CNEpaSm5yYnVnd0lBcmZpblNXNjF6aCt1R3dDZWxSSUNBSURoSEpma0dldjg0Ym9CNEhsci9oMEEwSzUvdWM0ZnJSTUFUay95b0hVZURBQm8zUU5TSmdPdVpKMEFZUElmQUl6THlyMTUxUUJnOGg4QWpNL0trd0ZYRFFBbS93SEErS3c4R1hEVkFHRHlId0NNMDBxVEFWY0pBQ2IvQWNCNHJUUVpjSlVBWVBJZkFJemIwcjE2MlFCZzhoOEFqTi9Ta3dHWERRRFBqc2wvQURCMnh5VjU1akwvY05rQThOejF4d0lBOU9qNXkveWpaUUtBeVg4QU1CMUxUUVpjSmdDWS9BY0EwN0p0Nzk0dUFKajhCd0RUcysxa3dPMENnTWwvQURBOTIwNEczQzRBbVB3SEFOUFVPQm13S1FDWS9BY0EwOVU0R2JBcEFKajhCd0RUdG1VdjN5b0FtUHdIQU5PMzVXVEFyUUtBeVg4QU1IMWJUZ2JjS2dDWS9BY0E4N0RwWk1ETkFzQ0RZL0lmQU16RkExSW05dC9JWmdIZ2VkMlBCUURvMFUxNis1RUJ3T1EvQUppZm0wd0dQRElBbVB3SEFQTnprOG1BUndZQWsvOEFZSjV1TkJsd1l3QXcrUThBNXV0R2t3RTNCZ0NUL3dCZzNtN285WXNBWVBJZkFNemZEWk1CRndIQTVEOEFtTDhiSmdNdUFvREpmd0JRaCtjbkpRQzQ3Vzg3RGc0OUFJQUsrSzdkdVFja09YMTMzUGEzTFZjUFBRQ0FDbHd6OUFCbTRubTdrengyNkZITXhKVkREd0NnQXI1cjIvRzQzVW0rUFBRb1pzS2JFcUI3VncwOWdKbjQ0dTRrRnd3OWlwbTRmT2dCQUZUQWQyMDdQcnM3eVdlSEhzVU1YSjdrNjBNUEFxQUNseVhaUC9RZ1p1Q0MzVW4rZk9oUnpNQm5oaDRBUUVVY3VkNjVQOXVkNUgxSnZqSDBTQ1pPQUFEb2orL2NuZmxHa2cvc1RuSWd5VHNISHN6VWZYVG9BUUJVNUNOREQyRGkzcEhrd0dJbHdEY05PWklaZVBmUUF3Q29pTy9jblhsVGNuZ3A0RDlPY3VGd1k1bTBTNU44YXVoQkFGVGtFMG0rTnZRZ0p1b0xTZjVQY2pnQUhFanltNE1OWjlyZUZVdFRBdlRwWUpKemh4N0VSTDA4cGVmZkVBQ1M1TDhudVdLUTRVemJHNGNlQUVDRjNqRDBBQ2JvRzBsZXZmaC9OZ2FBL1VsK3J2ZmhUTnRsS1pNcEFPalhXWEVhWUZVdnpZWlZhM2NmOFQvK1ZzcTVGWmJ6eGlUWERqMElnQXBkRzBkZ1YvR3hKSy9jK0Y4Y0dRQ3VTL0xqY1U1N0dlWk5BQXpyTjVOY1AvUWdKdUJnU204L3NQRy9QRElBSk1sN2svelhQa1kwY2Y4N0ZxTUFHTkw1U2Q0ODlDQW00RmV6eWFxL213V0FKUG1aSk8vdmREalRkakRKTHcwOUNBRHlpM0hVdXNrSFU4NzkzOFJXQWVDNkpNK011eTV0NVExSlBqNzBJQURJeDVMOHdkQ0RHS212SjNsYXRwaXJ0bFVBU0pKOVNaNlE1T3IyeHpScDMwenk0ZzczLzdjZDdudGQzMmxwUDJPcnJhMjZFclgxU1czYkcxdGRTYnV2MjVGZUdIY0lQTkkxU1g0d3lVVmIvWU9tQUpBa0gwank5SlFqQWhRdlRmS1ZEdmQvNWZiL3BIZHRqZW1xbHZiVGxqYWY2em5YTnJiM3BOcjYyMCtidnRuaHZpOUo4dk1kN245cURpUjVWc3JOL3JhMFhRQkl5cEtCL3pyT3NTUmxFc1Z2ZGZ3WVgrcDQvNnU2TXUwdEVEVzIyclpNeG11WWMyMWZibkZmYlZEYjlpN1ArRUpwbTYvYlpsNlI1Qzg2Zm93cE9Kamt4NUw4MFhiL2NKa0FrQ1MvbStTZnBlNGpBZDlJOHV4MC94eWMzL0grVjNWKzJndC9uMjVwUDIxcDg3bFdXMy9VdHIyREdkOVZTbDJQNTdxVUk5WTFMdzUwSU1selUxYjIzZGF5QVNCSlhwL2t5VW0rdmNhZ3B1NWdraDlPOHNVZUh1dlNKSi90NFhHV2RaTkxSM2Jnb3lubnBjYWk4ZkRZaXNiMnkwTnR5eGxUYlZjbitlc1c5emVtMmo2ZGZocnpsMU4rck5aNHhQbzdLUlArWHIzZFA5eUpoNmU4a0FjcjJsN1l5ak8zdkZlME9QYWRibzlydWJhelIxRFRZcnRIeTdWOWJnUTFIVXc1OUh1TEZ1czZMc20zUmxEWHdiVC9LL0plSTZocHNiMjk1ZHErZndRMUxiWmZiN20yN2J5b3hiRlBZYnNzeVptdFBITkx1RXZLdFlWREY5M0g5c3N0UFdlcitKNGRqTGZON2F0SmptNjV0bWVQb0s2REtSTmMyL2J6STZqcllKTC8yVUZ0dnorQ3VnNm1tL3VWZkdnRWRSMU04b3lXNjlxVE1qbHU2TG9PSmptOTVkcVc4WjkzTU40cGJSOU5jcmVXbnJPbDNTTEovOWpCb0tld3ZTckpycGFlcjFWOWRNa3hkcm45UWdkMTNTSWxXQXhkMjNNNnFPM2tsTU53UTlmMkR6dW83WXdSMVBXZGxCOGZiZnZoRWRUMk4ybjNxTTNDTDQyZ3RyL3FvSzVsN0VvNUZ6NTAvVjF1cjBseVRGdFAyRHFlbW5MNFllZ25vdTN0NVZsdGprVGJmbWlMY2ZXMWZUUEo3VHFxN2FjSHJ1MXpLYitPdXZCN0E5ZjJybzdxU3BMM0RGemI3M1JVMTlGSnZqQndiZit1bzlwdW4zSkthTWphL2xGSHRTMWpWNUwvdU1tWXByNTlJOG1QdHZjMDdjd2Rrcndsd3o4cGJXd0gwdjg1LzYyY20rR2VoMy9iWVYwM1R6bVhPMVJ0VCt5d3RqdWtYSUkxUkYzWEpubGdoN1hkLzlCakRGSGJGVW51MUdGdFR4Nm9yb05KTGtqNVRIUmx5TUQ5emc3cldzV0xVbTRhTk5UejBPYjI1cFJnTnpwUFNYSmhobitDMXQwdVRmdVQzbmJpWGltL3hQdCtIajZROXMvOUgrbjdVaTdiNmJ1Mk4zUmNWNUw4eUFCMUhVenluM3FvYmFoRHlzL3BvYlkvSEtDdWE1TTh0T082anM0dzh4ejJKN2xueDdXdDRnbVo5dEhxenlmNXg2MC9LeTI3V1pLZlNIbnhoMzdDVnRrK21HUnYrMC9IamowOS9TYlh5NUxjdFpmS2tuL2ZVMDJMN2Z3a3QrcWxzdjdueDV5YjVLZ2U2dHFUL2s4RkxIVk5jd3RPU1A5SHBuNm1sOHJLSkxFK3I5NjZQdVgwOE5qOG5aUkxtL3Q4alhlNlhaVnlHbVBRYy8ycnVtT1MvNUxoeno5dHQrMVBDU3hkblJOdXcwK2x2emZhZzN1cWFlR1ZMWTE5dSszaTlCdndicGJrbkpacjJHcjdXSklUK3lrck9mUllIKytnanMyMnM5UDkwYWlON3BheTFIY2Z0ZjEyVHpVdFBDVDlmUisvcUtlYTFyRW55VTltL0Q5U3IweTVrdUVPM1R3Ti9iaGRrcGVsVEZvWStnbmR1RjJmY21sVGwrY1YyL1NDbFBrSlhUMGYzMGp5dmIxVmM5aXVKTCsyeG5oWDJTNU1PWjNTdDVzbmVkTWE0MTFsKzFDU2svb3FhSVBicEN3MDAyVnRiMDAzTStPM2MvZVV4Ymk2ck8wVkdXYVM4ZW5wOWpENDllbjJabWx0dW5QS0tjR3h6UTM0ZXNvdi90dDBWdmtBamtrNUpQVE9EUHVFSDBpNXY4RjNkMXR1SjM0dzNRU3BqMmI0YzNYL0ttV1Z5YlpyT3lmRE5NaUZQU25uemJzSWI2OUpjbXgvcGR6RWNVbGV1OG00MnZpTS9rTDZPYVd4bGRzbitkTzBYOXMxU1o3Zll4MmJ1VmZLaW9OdDEvYjFKRS9xc1k2MjNEL0o2ekxNbktTTjIxK2x6T3cvcnR0eWgvZjNVZzV0ZEoyeU4yNlhKdm1OSktmMFVGK1hUazU3VjF4Y2s3SjR6VmpPTGQwL1pablhObXE3UE9VbVZrTmV5cm5SOXlVNUwrM1U5cVdVeTBUSDRxa3BTN0MyVWRzbmt6eXMzK0Z2YVhlU2Y1TnlCVUlidGYxWmt2djFXc0hXamttWk5OcFc2SDV6dWxtam9VLzNUamt5MCtkRXdjOGsrWlVrOSsyaHZsRzZiOHBFbVArYjlwY2IvV3JLWWY0bnB0L3ppSDA0TStVWHlqcEhVNjVPdWF2aFhYc2Y5ZloycGN4MFhYZlc4dVVwdng2N1dzTmdKNDVPdVVKZzNZbG1GNmRjbmpuR1h3akhwNXozdlRqcjFYWit5b0k4WS95Y25wUnlGR2ZkeXpzL21ISXQvRkNMaWpYWm03Syt3dFZadmE3clU0NndkWDBWUTkrT1RqbVM4Yi9TL3FKbFY2Vk1vdjNwbE1BeHFMRzlJZmNrZVZES1VyaC9QK1d3OUQyejNIbjZ5MU91cHowLzVaRDJ1NU44S3VWSkg4S3hLYy92dHpwK25Mc2wrU2RKSHBVeXlXZXI1bkJKeWkrUXMxTnVFOW5sdmJuYmN2K1VtMXM4SXVXVXpWYlhTdTlMQ1pCdlQvSW5HZjhOcTNhbHJOYjM1SlRhN3BmTko2RmVuL0tlZmsvSytmQjNwUndlSDdPamtqdzY1UXYwNFNtSG16YzdDbk5ka2sra2ZFNy9LTWxmWnJqUDZyS09TZklEaDdZenMvV2swdThrK1VqS2xSbC9tSEpVWSt4T1NIay9QaTdsQ013ZHQvaDNWNlVFbW5jbStZT1V6MTZYanN2aEh5MUQySlh5K1h4RVNtKzZkOHA3K3RaTC9PMVhVaFlkKzN6S0taZjNIL3JQMGR4VmQyd0JZQ3ZIcHJ3aGowOTVReHlYY3Yzc1ZTbU4vNXNaMXkwZ2owNDVUUCtaZExmQzExWk9UcGsxZWtKS3M3Z2k1VU42ZWMvamFOdFJLVis0SjZXOEQ2NU5xZWtMS2JObHArem9sSWxudDAxNXIzODc1WFg3WE1ZZlpyWnpURXFJdjNWS2dMczY1Vnp4aFNtdjRaVGRNaVdBM3pybE5id3E1VlRqRnpQK29MYWQyNlFjSVR3eDViTzNQK1ZIeEpkNkhzZC9TemxsL01TVVlEVVd0MHY1amoweDVmdm82SlFmZTk5S2VSOWNrdUZDQ3dNNktza2JVMUxyZFVsT0hYWTRBSlAwd0J4ZWVmSXRHZmVsMnBEZHVla0NNQi9Pc0xPWkFhYm1xSlJaOFJ1L1MxK1Q2UnkxcGpJM3k5YTNUUDJwQWNjRk1EVXZ5ZWJmcGE5UCthNkYwVGcrWlhMZFZqTS9yMHZ5K01GR0J6QWRqMDd6TmZubnByOGx2YUhSSFZObS9HNTMrY2ZYazl4am9ESDJZYzZINXVaYzIxek4rVFdiYzIzM3pIS0xuWDBrRTE4aWwrbjczcFJac2N0ZUEvcUpsSm5EYy9QNGxFdlZqaDk2SUIxNFhzcHlvV05aVUlqdEhaWHltajF2NklGMDRQaVV6OW9janlqZUt1V1N5V1cvVHk5S3Vad1dlclVyNVFaQzM4bnFDMEY4T1BOYTQvbFJLU3NLTGc3TkRiRjJlMWVlbGNOTCtKcUFOQTI3Y3ZnR1V3ZVNQSFBZNGJUcUZpbnJKaHhNdVR4MFRpSGdoSlRyNUZmOVByMDJaZDE4QVoxZTNDNWxVWmFkckFZMWx4QndabTY2ZXVPZlpPc0ZlNmJrS1RsOENkSmkrL1VJQVdPMk8yVzU3eU1ieEpPSEhGUkxqa2x5Vm02NnF0d2NWdUc3YlpZN2pkcTAvZkdoL1VCbm5wbXkwTWRPM3FpTDdhOHo3WE5ZUDVTdGJ5MzZ2Z3g3QTU2ZGVtRzJub1QwK3pFTGVZeHVsc1ByYnh5NVhaZHl4RzZxYnArdGZ4MWZtYkowOWxUZE1lM2RXdnFyU1o3UjcvQ3B3ZDQwei9KZmQvdFNocmtGNzA3c1RybUp5SGIzSUxnd1pRV3ZLVGs2aHc4Zk4yM3Z5amp2TlZDcmsxSk9QMjMzdXYxMnByZVl6UDFTVnJ0c3F1djZsSnQ2VGUwdytCbHA3eVpTRzdlek1zNzduREJSYmQzRmJiUHRiMU9XQzU3Q29lVVRVbTZsdkd4dCt6T2RjN0I3azd3M3k5ZjI1Y3pqOE92VW5ablZia0Qwbmt5bk9Udzc1VE8wYkcxdnpUUXVqOXVWNU1XNTZTbTJOcmZ6ZXF1RzJic2czYjFSRjl2Yk11N2JhVDRsNjkvcDdTMFo3K21PWFVsK0xPVitFcXZXZFcyU2wyVTh0MU91eVMyUy9HTFd1NGY3L3BRckJNWWF1dStZY2s1N25jL2FselB1VXdKM3lXby9JdGJkTHVpcklPYXZqd0J3TU9XYytuL0l1QnJLWFZQdXNyZlQyaTVMOGk4eXJtV1I3NWR5VjdNMnZtd2UzZlBZbSt4S3VhTmJXeDZXY1RYTHg2VGNLR21ucjlzNUdkZHBxajFKbnB0eVk3T2QxdmJXbEJ1RGpjVXRrcncwN2QveVhRQ2djMzBGZ01WMlljb3Rmb2RzbHQrVjVOZXk5VVMvZGJkUHB4eE5HTEtoM0MzSjYzTDRFcisydHJPU25ONWpIWnQ1ZUpJUHBOMHZ3QXNPN2ZQTUZ2ZTVqb2VrL2JrNDF5VjViYmErdFc4ZmRpVjVhc3F0ek51czdjb2t2NXJrenYyVmNoTjdranc5Mjg5amFIc1RBR2hOM3dGZ3NlMUxPVmUyekwybjIzS3ZKSy9LZW1zY3JMSjlOT1dJUUorTEIzMVB5dlg4WGRkMlZzbzEybjFOeWpvNkpURCt4WVl4dEIwQUZ2djk4eVJQUzMrVDZZNUs4djFKM3BGdVg3UHZKSGwxU3Nqb3kvRXB2L2ovWDR0MWJMWjlPOG52SnZtNy9aU1ZwSHhudlRqbDFzaERmSGNLQUxSbXFBQ3cySzVLOG50SmZpRGRMTFJ6bHlRL21YTDVYdHUvaXJmYjlpZjVuWlFKZFYwMGxaT1R2Q0JsRmNhK1g3ZDlTWDR1eWYwN3FHdFh5dEdHWDhubU02bTdDZ0NMN1V0SmZqbkphZW5tYU00RFV4WjRHYUtCZkR6Smo2ZWJPVGw3VWs2cHZETHJ6VHZaeVhZZ0pjRDlSRWUxSFp2eUhmV3F0SC9rY05WTkFGakNtTTdyTFp5VThvdm1iMUpleUhYY0ptVWlUVnN6UVM5SXYrbTV5VFVwcTRHZGxmSXIrcnlVTDVKVjNEWEpQMGp5M1VrZWtkSkl4dkJlMko5eU9kYzVTVDZVY2tqMDJ5dnU0NjRwNS9ZZmxlU3hTZTdUNWdCM1lGL0thL2IrbE5vVzU3QlhjYStVcFUvUFNKbHowSFNPOTdPSC9uMGJ0bnYvZnpGbExzWDdVdXI3N0lyNzMzVm8vNmVuMVBlRWpHZW0vbmtwNzhkelUwTGtSU3YrL1RGSjdwM2t3U2x6Rng2WmNqWE4wQTRtK1dES2Q4bEhVbTY5dTJwdHQwcHkzeVNucHJ4bWo4aDRWZ0p0OC8xLzN5U1hwTnlqWUIyN2t0d3BaZEx3WlMyTnFSVmorTkkvMGd1U3ZEemxrTndYRDIyWHBFd2UyWitTTEwrZGNtandWa21PTzdTZGxQS2xjYmVVRDFpZlg0QkR1eWpsaStxaWxJRHc3U1NYSC9yZmJwbHl6ZnBKaC83elBwbk9JajBIVXM0ZG5wOFNDTCtaY2w3ejZwVEQ2N2RPZVErY2tQTDYzRHZUdWRmQ0ZTbHpQUzVLZVk5Zm5mTCtYamd4NVJEeGQ2WGNST29lS2UvelpRMzUvdjlXa3MrbmhKeXZwSHhtcjlqd3Y1K1E4bXZ4cmpuOG1UMnhsWkYyNzhxVTkrTUZLZS9IYjZaODFxNVBxZW1XS2UvSk82VjgxdlptWEJOZm0xeVdNa2ZuYTRmKzc2K2wxSnVVejlveEtRMys1SlNtT0taSmhrZnE0djIvUDRjL3M1ZW1mR2EvbGZJZU9KRHkvQnlmOHY0K0x1Vkg2T0k5ZnZPVUl5Ky8wZEtZV2pIbVJURnVudklDdHZVaXp0bkpHZmVIY1YxSHBkd2Q3SjVERDZRREo2YjhjanAxNklGMDRMZ2tEemkwemMwdFUwNTduRGIwUURwd1VxYno0MkFJSnlSNTBLRnRGcWEyY2hRQTBBSUJBQUFxSkFBQVFJVUVBQUNva0FBQUFCVVNBQUNnUWdJQUFGUklBQUNBQ2drQUFGQWhBUUFBS2lRQUFFQ0ZCQUFBcUpBQUFBQVZFZ0FBb0VJQ0FBQlVTQUFBZ0FvSkFBQlFJUUVBQUNva0FBQkFoUVFBQUtpUUFBQUFGUklBQUtCQ0FnQUFWRWdBQUlBS0NRQUFVQ0VCQUFBcUpBQUFRSVVFQUFDb2tBQUFBQlVTQUFDZ1FnSUFBRlJJQUFDQUNna0FBRkFoQVFBQUtpUUFBRUNGQkFBQXFKQUFBQUFWRWdBQW9FSUNBQUJVU0FBQWdBb0pBQUJRSVFFQUFDb2tBQUJBaFFRQUFLaVFBQUFBRlJJQUFLQkNBZ0FBVkVnQUFJQUtDUUFBVUNFQkFBQXFKQUFBUUlVRUFBQ29rQUFBQUJVU0FBQ2dRZ0lBQUZSSUFHRHE5aVU1YitoQndJaGRrZVQ5UXcrQzhSRUFtTEtMa2p3eXljT1RmSExnc2NBWTdVL3kyQ1NQU3ZLdWdjZkN5QWdBVE5WRktZMy93aVNYcGdRQklRQU8yNS9rTVVrK2xPU2FKRStLRU1BR0FnQlR0TEg1THdnQmNOakc1cjhnQkhBakFnQlRzMW56WHhBQ1lQUG12eUFFY0FNQmdDbHBhdjRMUWdBMWEycitDMElBU1FRQXBtT1o1cit3Q0FHZjZIUkVNQzdMTlA4RklRQUJnRWxZcGZrdkNBSFVaSlhtdnlBRVZFNEFZT3pXYWY0TGwwVUlZUDdXYWY0TFFrREZCQURHYkNmTmYwRUlZTTUyMHZ3WGhJQktDUUNNVlJ2TmYwRUlZSTdhYVA0TFFrQ0ZCQURHcU0zbXZ5QUVNQ2R0TnY4RklhQXlBZ0JqMDBYelh4QUNtSU11bXYrQ0VGQVJBWUF4Mlpma3pIVFQvQmN1Uy9LU0R2Y1BYYm9peWFQVFRmTmZ1Q2JKQzVJYzZQQXhHQUVCZ0xGWTNOaG5YOGVQYzJxUzEzWDhHTkNGeFkxOVB0eng0NXljNU8xSmp1cjRjUmlZQU1BWWRIbllmNk5Uazd3enlXMDZmaHhvVzVlSC9UYzZPY2w3a3R5OTQ4ZGhCQVFBaHFiNVF6UE5uMDRJQUF4Sjg0ZG1taitkRVFBWWl1WVB6VFIvT2lVQU1BVE5INXBwL25ST0FLQnZtajgwMC96cGhRQkFuelIvYUtiNTB4c0JnTDVvL3RCTTg2ZFhBZ0I5MFB5aG1lWlA3d1FBdXFiNVF6UE5uMEVJQUhSSjg0ZG1taitERVFEb2l1WVB6VFIvQmlVQTBBWE5INXBwL2d4T0FLQnRtajgwMC93WkJRR0FObW4rMEV6elp6UUVBTnFpK1VNenpaOVJFUUJvZytZUHpUUi9Sa2NBWUtjMGYyaW0rVE5LQWdBN29mbERNODJmMFJJQVdKZm1EODAwZjBaTkFHQWRtajgwMC93WlBRR0FWV24rMEV6elp4SUVBRmFoK1VNenpaL0pFQUJZbHVZUHpUUi9Ka1VBWUJtYVB6VFQvSmtjQVlEdGFQN1FUUE5ua2dRQW1taiswRXp6WjdJRUFMYWkrVU16elo5SkV3RFlqT1lQelRSL0prOEE0RWlhUHpUVC9Ka0ZBWUNOTkg5b3B2a3pHd0lBQzVvL05OUDhtUlVCZ0VUemgrMW8vc3lPQUlEbUQ4MDBmMlpKQUtpYjVnL05OSDltU3dDb2wrWVB6VFIvWmswQXFKUG1EODAwZjJaUEFLaVA1Zy9OTkgrcUlBRFVSZk9IWnBvLzFSQUE2cUg1UXpQTm42b0lBSFhRL0tHWjVrOTFCSUQ1MC95aG1lWlBsUVNBZWRQOG9abm1UN1VFZ1BuUy9LR1o1ay9WQklCNTB2eWhtZVpQOVFTQStkSDhvWm5tRHhFQTVrYnpoMmFhUHh3aUFNeUg1Zy9OTkgvWVFBQ1lCODBmbW1uK2NBUUJZUHIySlRrejNUZi8wNUtjbS9FMS8zMUp6aHQ2RUl6YUZVa2VsZTZiLzk0azc4MzRtdjhWU2Q0LzlDQVlId0ZnK2k1S2NtbkhqM0Zha2o5TmNtTEhqN09xZlNsSFBoNlI1RlBERG9VUisycVNMM1g4R0h0VGZ2bnY3Zmh4Vm5WRnlwR1BSNmNFZUxpQkFEQjlEMHR5VHBMak85ci9xVW5la2ZFMS80dVNQRElsQkh3MUpRUjhjc2dCTVZxbnBQd3l2M05IK3o4NXBibnU3V2ovNjlxZjVMRkpQcHprNmlSUFRQS3VRVWZFcUFnQTgzQkdrclBUZmdnWTZ6bi96ZVk4WEpvU0NJUUFObk5La25lbi9SQXcxblArbTgxNXVDYkpreUlFY0lnQU1COXRoNEFwTmY4RklZQW1iWWVBS1RYL0JTR0FHd2dBODlKV0NKaGk4MThRQW1qU1ZnaVlZdk5mRUFKSUlnRE0wVTVEd0pTYi84SWlCSHlpMHhFeFZUc05BVk51L2d0Q0FBTEFUSzBiQXViUS9CZUVBSnFzR3dMbTBQd1hoSURLQ1FEemRVYVNzN0o4Q0poVDgxKzRMRUlBVzFzMUJNeXArUzhJQVJVVEFPYnRvVmt1Qk15eCtTOElBVFJaTmdUTXNma3ZDQUdWRWdEbWI3c1FNT2ZtdnlBRTBHUzdFRERuNXI4Z0JGUklBS2pEVmlHZ2h1YS9JQVRRWktzUVVFUHpYeEFDS2lNQTFPUElFRkJUODE4UUFtaHlaQWlvcWZrdkNBRVZFUURxOHRBa2IwdTVlZEJZYit6VDlZMk5Ma3Z5a2c3M3o3U2RrdEw4SHB6eDN0am4wZW4yeGtiWEpIbEJrZ01kUGdZanNHZm9BZEM3aHgvYXhtWmZ5cmoyZGZ3NHB5VjVmY2VQd2JUZEo4a0hoaDdFSmhZMzl2bHd4NCt6TitWbzRWRWRQdzREY3dTQU1kaDRZNTh1amZYR1JyQ2RqVGYyNmRKWWIyeEVCd1FBaHRibE9mK054anJuQWJiVDVUbi9qY1k2NTRHT0NBQU1TZk9IWnBvL25SRUFHSXJtRDgwMGZ6b2xBREFFelIrYWFmNTBUZ0NnYjVvL05OUDg2WVVBUUo4MGYyaW0rZE1iQVlDK2FQN1FUUE9uVndJQWZkRDhvWm5tVCs4RUFMcW0rVU16elo5QkNBQjBTZk9IWnBvL2d4RUE2SXJtRDgwMGZ3WWxBTkFGelIrYWFmNE1UZ0NnYlpvL05OUDhHUVVCZ0RacC90Qk04MmMwQkFEYW92bERNODJmVVJFQWFJUG1EODAwZjBaSEFHQ25OSDlvcHZrelNnSUFPNkg1UXpQTm45RVNBRmlYNWcvTk5IOUdUUUJnSFpvL05OUDhHVDBCZ0ZWcC90Qk04MmNTQkFCV29mbERNODJmeVJBQVdKYm1EODAwZnlaRkFHQVptajgwMC95WkhBR0E3V2orMEV6elo1SUVBSnBvL3RCTTgyZXlCQUMyb3ZsRE04MmZTUk1BMkl6bUQ4MDBmeVpQQU9CSW1qODAwL3laQlFHQWpUUi9hS2I1TXhzQ0FBdWFQelRUL0prVkFZQkU4NGZ0YVA3TWpnQ0E1Zy9OTkg5bVNRQ29tK1lQelRSL1prc0FxSmZtRDgwMGYyWk5BS2lUNWcvTk5IOW1Ud0NvaitZUHpUUi9xaUFBMUVYemgyYWFQOVVRQU9xaCtVTXp6WitxQ0FCMTBQeWhtZVpQZFFTQStkUDhvWm5tVDVVRWdIblQvS0daNWsrMUJJRDUwdnlobWVaUDFRU0FlZEw4b1pubVQvVUVnUG5SL0tHWjVnOFJBT1pHODRkbW1qOGNJZ0RNaCtZUHpUUi8yRUFBbUFmTkg1cHAvbkFFQVdENk5IOW9wdm5ESmdTQTZkdVg1SktPSCtPMEpPZEc4MmVhTGtueXhZNGZZMitTOTBielowSUVnT2w3V0pKemtoemYwZjVQVGZLT0pDZDJ0SC9vMmlrcHpmbk9IZTMvNUpTQXZMZWovVU1uQklCNU9DUEoyV2svQkRqc3oxeWNrdVRkYVQ4RU9PelBaQWtBODlGMkNORDhtWnUyUTREbXo2UUpBUFBTVmdqUS9KbXJ0a0tBNXMva0NRRHpzOU1Rb1BremR6c05BWm8vc3lBQXpOTzZJVUR6cHhicmhnRE5uOWtRQU9icmpDUm5aZmtRb1BsVG0xVkRnT2JQckFnQTgvYlFMQmNDTkg5cXRXd0kwUHlaSFFGZy9yWUxBWm8vdGRzdUJHait6SklBVUlldFFvRG1EOFZXSVVEelo3WUVnSG9jR1FJMGY3aXhJME9BNXMrc0NRQjFXWVNBaDBYemg4MHNRc0JEb3ZremMzdUdIZ0M5ZTJqS3V1akE1azVKOHBkRER3SzY1Z2dBQUZSSUFBQ0FDZ2tBQUZBaEFRQUFLaVFBQUVDRkJBQUFxSkFBQUFBVkVnQUFvRUlDQUFCVVNBQUFnQW9KQUFCUUlRRUFBQ29rQUFCQWhRUUFBS2lRQUFBQUZSSUFBS0JDQWdBQVZFZ0FBSUFLQ1FBQVVDRUJBQUFxSkFBQVFJVUVBQUNva0FBQUFCVVNBQUNnUWdJQUFGUklBQUNBQ2drQUFGQWhBUUFBS2lRQUFFQ0ZCQUFBcUpBQUFBQVZFZ0FBb0VJQ0FBQlVTQUFBZ0FvSkFBQlFJUUVBQUNva0FBQkFoUVFBQUtpUUFBQUFGUklBQUtCQ0FnQUFWRWdBQUlBS0NRQUFVQ0VCQUFBcUpBQUFRSVVFQUFDb2tBQUFBQlVTQUFDZ1FnSUFBRlJJQUFDQUNna0FBRkFoQVFBQUtpUUFBRUNGQkFBQXFKQUFBQUFWRWdBQW9FSUNBQUJVU0FBQWdBb0pBQUJRSVFFQUFDb2tBQUJBaFFRQUFLaVFBQUFBRlJJQUFLQkNBZ0FBVkVnQUFJQUtDUUFBVUNFQkFBQXFKQUFBUUlVRUFBQ29rQUFBQUJVU0FBQ2dRZ0lBQUZSSUFBQ0FDZ2tBQUZBaEFRQUFLaVFBQUVDRkJBQUFxSkFBQUFBVkVnQUFvRUlDQUFCVVNBQUFnQW9KQUFCUUlRRUFBQ29rQUFCQWhRUUFBS2lRQUFBQUZSSUFBS0JDQWdBQVZFZ0FBSUFLQ1FBQVVDRUJBQUFxSkFBQVFJVUVBQUNva0FBQUFCVVNBQUNnUWdJQUFGUklBQUNBQ2drQUFGQWhBUUFBS2lRQUFFQ0ZCQUFBcU5DZW9RZXdpYmNrT2ErRi9WemR3ajRXL25tU1kxdmNIM1ROKzUrYWpmSDkvNWtXOWdFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUMwYlZlTCszcFNrcjB0N2c4QXVMRjlTZDdXRjQrWmJRQUFBUTVKUkVGVXhvN2FEQUJuSjNsY2kvc0RBRzdzSFVrZTM4YU9kcmV4RXdCZ1dnUUFBS2lRQUFBQUZSSUFBS0JDQWdBQVZFZ0FBSUFLQ1FBQVVDRUJBQUFxSkFBQVFJVUVBQUNva0FBQUFCVVNBQUNnUWdJQUFGUklBQUNBQ2drQUFGQWhBUUFBS3JTbnhYMWRuT1J6TGU0UEFMaXhpNGNlQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVE51dUpKOGRlaEFBUUw5MkpUazQ5Q0FBZ0g3dEhub0FBRUQvQkFBQXFKQUFBQUFWRWdBQW9FSUNBQUJVU0FBQWdBb0pBQUJRSVFFQUFDb2tBQUJBaFFRQUFLaVFBQUFBRlJJQUFLQkNBZ0FBVkVnQUFJQUtDUUFBVUNFQkFBQXF0Q3ZKQzRZZUJBQUFBQUFBQUFBQUFMQzYvdytQWnc4OFE2dkloUUFBQUFCSlJVNUVya0pnZ2c9PVwiIHN0eWxlPVwid2lkdGg6MThweDtoZWlnaHQ6MThweDtmaWx0ZXI6YnJpZ2h0bmVzcygwKSBpbnZlcnQoMC44KTtcIiAvPidcblxuY29uc3QgbWVhc3VyZVN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJtMTUuMTggMy44OS0yLjg1IDIuODUtLjcxLS43IDEuNjEtMS42NUg5di0xaDQuMzJsLTEuNy0xLjY5LjcxLS43ek0wIDE0LjM5di02aDE2djZ6bTE0LTNoMXYtMkgxdjRoMXYtMmgxdjJoMXYtM2gxdjNoMXYtMmgxdjJoMXYtM2gxdjNoMXYtMmgxdjJoMXYtM2gxdjNoMXptLTctOEgyLjY4bDEuNy0xLjY1LS43MS0uN0wuODIgMy44OWwyLjg1IDIuODUuNzEtLjctMS42MS0xLjY1SDd6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nXG5cbmV4cG9ydCBjb25zdCBGSUxURVJfREVGSU5JVElPTlM6IEZpbHRlckRlZltdID0gW1xuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnc3VtbWVyX1NJJywgbmFtZTogJ1NoYWRlIEluZGV4JyxcbiAgICBvcGVyYXRvcjogJzwnLCBtaW46IDAsIG1heDogMSwgc3RlcDogMC4wNSwgZGVmYXVsdFZhbHVlOiAwLjQsXG4gICAgaWNvblR5cGU6ICdzdmcnLCBpY29uU3ZnOiBzdW5TdmcsXG4gICAgZGVzY3JpcHRpb246ICdTcHJpbmcvU3VtbWVyIFNoYWRlIEluZGV4J1xuICB9LFxuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnQUJ3MmtfbWF4JywgbmFtZTogJ05laWdoYm91cmhvb2QgdHJhbnNpdCcsXG4gICAgb3BlcmF0b3I6ICc+JywgbWluOiAwLCBtYXg6IDYyMDcwOCwgc3RlcDogMSwgZGVmYXVsdFZhbHVlOiA5NTIxOCxcbiAgICBpY29uVHlwZTogJ3N2ZycsIGljb25Tdmc6IHBlZGVzdHJpYW5TdmcsXG4gICAgZGVzY3JpcHRpb246ICdCZXR3ZWVubmVzcyBjZW50cmFsaXR5IGF0IDJrbSBzY2FsZSAoaGlnaGVyID0gbW9yZSBjb25uZWN0ZWQgbmVpZ2hib3VyaG9vZCknLFxuICAgIGJyZWFrczogWzAsIDEyNTQzLCAzNDkzNywgNjM0MDQsIDk1MjE4LCAxMzEwOTIsIDE3MTkyNCwgMjIzNjAwLCAyOTczOTEsIDQxNDczMywgNjIwNzA4XVxuICB9LFxuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnQUJ3NWtfbWF4JywgbmFtZTogJ0NpdHkgdHJhbnNpdCcsXG4gICAgb3BlcmF0b3I6ICc+JywgbWluOiAwLCBtYXg6IDkxMTU4NTEsIHN0ZXA6IDEsIGRlZmF1bHRWYWx1ZTogMTE4MTc2NixcbiAgICBpY29uVHlwZTogJ3N2ZycsIGljb25Tdmc6IGNhclN2ZyxcbiAgICBkZXNjcmlwdGlvbjogJ0JldHdlZW5uZXNzIGNlbnRyYWxpdHkgYXQgNWttIHNjYWxlIChoaWdoZXIgPSBtb3JlIGNvbm5lY3RlZCBjaXR5LXdpZGUpJyxcbiAgICBicmVha3M6IFswLCAxMjgzMTUsIDM3Mjk5MCwgNzI0NTM4LCAxMTgxNzY2LCAxNzU1NjExLCAyNDY2Mjg3LCAzMzQwMzcxLCA0NDEzNzEyLCA1ODQ3MzEzLCA5MTE1ODUxXVxuICB9LFxuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnQUl3MWtIX21lYScsIG5hbWU6ICdMb2NhbCBjZW50ZXJzJyxcbiAgICBvcGVyYXRvcjogJz4nLCBtaW46IDAsIG1heDogNDk1LCBzdGVwOiAxLCBkZWZhdWx0VmFsdWU6IDEyNCxcbiAgICBpY29uVHlwZTogJ3BuZycsIGljb25Qbmc6ICd3YWxraW5nLnBuZycsXG4gICAgZGVzY3JpcHRpb246ICdDbG9zZW5lc3MgY2VudHJhbGl0eSBhdCAxa20gc2NhbGUgKGhpZ2hlciA9IGNsb3NlciB0byBsb2NhbCBjZW50ZXJzKScsXG4gICAgYnJlYWtzOiBbMCwgMzQsIDg5LCAxMjQsIDE1OCwgMTkxLCAyMjQsIDI2MCwgMzAxLCAzNjAsIDQ5NV1cbiAgfSxcbiAge1xuICAgIHR5cGU6ICdzbGlkZXInLCBmaWVsZDogJ0ZTSTUwMF9tZWEnLCBuYW1lOiAnQnVpbGRpbmcgZGVuc2l0eScsXG4gICAgb3BlcmF0b3I6ICc+JywgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDAuMSwgZGVmYXVsdFZhbHVlOiAxLjUsXG4gICAgaWNvblR5cGU6ICdzdmcnLCBpY29uU3ZnOiBidWlsZGluZ3NTdmcsXG4gICAgZGVzY3JpcHRpb246ICdGbG9vciBTcGFjZSBJbmRleCB3aXRoaW4gNTAwbSB3YWxraW5nIGRpc3RhbmNlJ1xuICB9LFxuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnQVJ3NTAwbG1fMScsIG5hbWU6ICdDb21tZXJjaWFsIHByb3hpbWl0eScsXG4gICAgb3BlcmF0b3I6ICc+JywgbWluOiAwLCBtYXg6IDIwMCwgc3RlcDogNSwgZGVmYXVsdFZhbHVlOiA2MCxcbiAgICBpY29uVHlwZTogJ3N2ZycsIGljb25Tdmc6IHNob3BwaW5nU3ZnLFxuICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHNob3BzIGFuZCByZXN0YXVyYW50cyB3aXRoaW4gNTAwbSB3YWxraW5nIGRpc3RhbmNlJ1xuICB9LFxuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnQUR3c19tZWFuJywgbmFtZTogJ1NjaG9vbCBwcm94aW1pdHknLFxuICAgIG9wZXJhdG9yOiAnPCcsIG1pbjogMCwgbWF4OiAxMDAwLCBzdGVwOiAyNSwgZGVmYXVsdFZhbHVlOiAzMDAsIHVuaXQ6ICdtJyxcbiAgICBpY29uVHlwZTogJ3BuZycsIGljb25Qbmc6ICdlZHVjYXRpb24ucG5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ1dhbGtpbmcgZGlzdGFuY2UgdG8gdGhlIGNsb3Nlc3Qgc2Nob29sIG9yIHByZXNjaG9vbCdcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdzbGlkZXInLCBmaWVsZDogJ0FEd21fbWVhbicsIG5hbWU6ICdUcmFtL21ldHJvIHByb3hpbWl0eScsXG4gICAgb3BlcmF0b3I6ICc8JywgbWluOiAwLCBtYXg6IDEwMDAsIHN0ZXA6IDI1LCBkZWZhdWx0VmFsdWU6IDMwMCwgdW5pdDogJ20nLFxuICAgIGljb25UeXBlOiAncG5nJywgaWNvblBuZzogJ3RyYW5zcG9ydC5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnV2Fsa2luZyBkaXN0YW5jZSB0byB0aGUgY2xvc2VzdCB0cmFtLCBtZXRybyBvciByYWlsd2F5IHN0YXRpb24nXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdBRHdidV9tZWFuJywgbmFtZTogJ0J1cyBzdG9wIHByb3hpbWl0eScsXG4gICAgb3BlcmF0b3I6ICc8JywgbWluOiAwLCBtYXg6IDEwMDAsIHN0ZXA6IDI1LCBkZWZhdWx0VmFsdWU6IDMwMCwgdW5pdDogJ20nLFxuICAgIGljb25UeXBlOiAncG5nJywgaWNvblBuZzogJ2J1cy5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnV2Fsa2luZyBkaXN0YW5jZSB0byB0aGUgY2xvc2VzdCBidXMgc3RvcCdcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdyYW5nZS1zbGlkZXInLCBmaWVsZDogJ3dpZHRoJywgbmFtZTogJ1N0cmVldCB3aWR0aCcsXG4gICAgbWluOiAwLCBtYXg6IDYwLCBzdGVwOiAxLCBkZWZhdWx0VmFsdWU6IFsyMCwgMzBdIGFzIFtudW1iZXIsIG51bWJlcl0sIHVuaXQ6ICdtJyxcbiAgICBpY29uVHlwZTogJ3N2ZycsIGljb25Tdmc6IG1lYXN1cmVTdmcsXG4gICAgZGVzY3JpcHRpb246ICdTdHJlZXQgd2lkdGggaW4gbWV0ZXJzJ1xuICB9XG5dXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIERhdGFTb3VyY2VNYW5hZ2VyLCBEYXRhU291cmNlQ29tcG9uZW50LCB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCdXR0b24sIFJhZGlvLCBUZXh0SW5wdXQsIExhYmVsIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgRklMVEVSX0RFRklOSVRJT05TLCB0eXBlIEZpbHRlckRlZiB9IGZyb20gJy4uL2ZpbHRlci1kZWZpbml0aW9ucydcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSA9IFJlYWN0XG5cbi8vID09PT09PT09PT09PT09PT09PT09PSBDT05TVEFOVFMgPT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IENBVEVHT1JZX0xBQkVMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgJzEnOiAnPDEwbScsICcyJzogJzEwLTIwbScsICczJzogJzIwLTMwbScsICc0JzogJzQwbScsICc1JzogJz40MG0nXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PSBGSUxURVIgVFlQRVMgPT09PT09PT09PT09PT09PT09PT09XG5cbmludGVyZmFjZSBGaWx0ZXJTdGF0ZSB7XG4gIGFjdGl2ZTogYm9vbGVhblxuICB2YWx1ZTogbnVtYmVyIHwgW251bWJlciwgbnVtYmVyXSB8IG51bWJlcltdXG59XG5cbnR5cGUgRmlsdGVyc01hcCA9IFJlY29yZDxzdHJpbmcsIEZpbHRlclN0YXRlPlxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT0gRklMVEVSIFNRTCA9PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gYnVpbGRDbGF1c2UgKGRlZjogRmlsdGVyRGVmLCBzdGF0ZTogRmlsdGVyU3RhdGUpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGRlZi50eXBlKSB7XG4gICAgY2FzZSAnc2xpZGVyJzpcbiAgICAgIHJldHVybiBgJHtkZWYuZmllbGR9ICR7ZGVmLm9wZXJhdG9yfSAke3N0YXRlLnZhbHVlfWBcbiAgICBjYXNlICdyYW5nZS1zbGlkZXInOiB7XG4gICAgICBjb25zdCBbbG8sIGhpXSA9IHN0YXRlLnZhbHVlIGFzIFtudW1iZXIsIG51bWJlcl1cbiAgICAgIHJldHVybiBgJHtkZWYuZmllbGR9IEJFVFdFRU4gJHtsb30gQU5EICR7aGl9YFxuICAgIH1cbiAgICBjYXNlICdtdWx0aS1zZWxlY3QnOiB7XG4gICAgICBjb25zdCB2YWxzID0gc3RhdGUudmFsdWUgYXMgbnVtYmVyW11cbiAgICAgIHJldHVybiB2YWxzLmxlbmd0aCA+IDAgPyBgJHtkZWYuZmllbGR9IElOICgke3ZhbHMuam9pbignLCcpfSlgIDogJzE9MCdcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRDb21iaW5lZFNxbCAoZmlsdGVyczogRmlsdGVyc01hcCk6IHN0cmluZyB7XG4gIGNvbnN0IGNsYXVzZXM6IHN0cmluZ1tdID0gW11cbiAgZm9yIChjb25zdCBkZWYgb2YgRklMVEVSX0RFRklOSVRJT05TKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBmaWx0ZXJzW2RlZi5maWVsZF1cbiAgICBpZiAoc3RhdGU/LmFjdGl2ZSkge1xuICAgICAgY2xhdXNlcy5wdXNoKGJ1aWxkQ2xhdXNlKGRlZiwgc3RhdGUpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhdXNlcy5sZW5ndGggPiAwID8gY2xhdXNlcy5qb2luKCcgQU5EICcpIDogJzE9MSdcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5pdGlhbEZpbHRlcnMgKCk6IEZpbHRlcnNNYXAge1xuICBjb25zdCBtYXA6IEZpbHRlcnNNYXAgPSB7fVxuICBmb3IgKGNvbnN0IGRlZiBvZiBGSUxURVJfREVGSU5JVElPTlMpIHtcbiAgICBtYXBbZGVmLmZpZWxkXSA9IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZGVmLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnID8gWy4uLmRlZi5kZWZhdWx0VmFsdWVdIDogZGVmLmRlZmF1bHRWYWx1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWFwXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PSBGSUxURVIgVUkgQ09NUE9ORU5UUyA9PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gRmlsdGVySWNvbkltZyAoeyBkZWYgfTogeyBkZWY6IEZpbHRlckRlZiB9KSB7XG4gIGlmIChkZWYuaWNvblR5cGUgPT09ICdzdmcnICYmIGRlZi5pY29uU3ZnKSB7XG4gICAgcmV0dXJuIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVmLmljb25TdmcgfX0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogMTgsIGhlaWdodDogMTggfX0gLz5cbiAgfVxuICBpZiAoZGVmLmljb25UeXBlID09PSAncG5nJyAmJiBkZWYuaWNvblBuZykge1xuICAgIGNvbnN0IGJhc2UgPSAod2luZG93IGFzIGFueSkuamltdUNvbmZpZz8uYmFzZVVybCB8fCAnJ1xuICAgIGNvbnN0IHVybCA9IGAke2Jhc2V9d2lkZ2V0cy9jb21wYWN0LWZpbHRlci9kaXN0L3J1bnRpbWUvYXNzZXRzLyR7ZGVmLmljb25Qbmd9YFxuICAgIHJldHVybiA8aW1nIHNyYz17dXJsfSBhbHQ9e2RlZi5uYW1lfSAvPlxuICB9XG4gIHJldHVybiA8c3Bhbj4/PC9zcGFuPlxufVxuXG5mdW5jdGlvbiBTbGlkZXJDb250ZW50ICh7IGRlZiwgdmFsdWUsIG9uQ2hhbmdlIH06IHtcbiAgZGVmOiBGaWx0ZXJEZWYgJiB7IHR5cGU6ICdzbGlkZXInIH0sIHZhbHVlOiBudW1iZXIsIG9uQ2hhbmdlOiAodjogbnVtYmVyKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IGJyZWFrcyA9IChkZWYgYXMgYW55KS5icmVha3MgYXMgbnVtYmVyW10gfCB1bmRlZmluZWRcblxuICBpZiAoYnJlYWtzICYmIGJyZWFrcy5sZW5ndGggPiAxKSB7XG4gICAgLy8gSmVua3MtYmFzZWQgc2xpZGVyOiBzbGlkZXIgcG9zaXRpb24gbWFwcyB0byBicmVhayBpbmRleFxuICAgIGNvbnN0IGNsb3Nlc3RJZHggPSBicmVha3MucmVkdWNlKChiZXN0LCBiLCBpKSA9PlxuICAgICAgTWF0aC5hYnMoYiAtIHZhbHVlKSA8IE1hdGguYWJzKGJyZWFrc1tiZXN0XSAtIHZhbHVlKSA/IGkgOiBiZXN0LCAwKVxuICAgIGNvbnN0IGRpc3BsYXlWYWwgPSBNYXRoLnJvdW5kKGJyZWFrc1tjbG9zZXN0SWR4XSkudG9Mb2NhbGVTdHJpbmcoKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItc2xpZGVyLXJvdyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci12YWx1ZScgc3R5bGU9e3sgbWluV2lkdGg6IDMwIH19Pkxvdzwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFuZ2UnIGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItc2xpZGVyJ1xuICAgICAgICAgICAgbWluPXswfSBtYXg9e2JyZWFrcy5sZW5ndGggLSAxfSBzdGVwPXsxfSB2YWx1ZT17Y2xvc2VzdElkeH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGJyZWFrc1tOdW1iZXIoZS50YXJnZXQudmFsdWUpXSl9IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci12YWx1ZScgc3R5bGU9e3sgbWluV2lkdGg6IDMwIH19PkhpZ2g8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgY29sb3I6ICcjODg4JywgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgIHtkZWYub3BlcmF0b3IgPT09ICc8JyA/ICdMZXNzIHRoYW4nIDogJ0dyZWF0ZXIgdGhhbid9IHtkaXNwbGF5VmFsfXtkZWYudW5pdCB8fCAnJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDksIGNvbG9yOiAnIzY2NicsIG1hcmdpblRvcDogMiB9fT5cbiAgICAgICAgICBDbGFzcyB7Y2xvc2VzdElkeCArIDF9IG9mIHticmVha3MubGVuZ3RofSAoSmVua3MgbmF0dXJhbCBicmVha3MpXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8gU3RhbmRhcmQgbGluZWFyIHNsaWRlclxuICBjb25zdCBkaXNwbGF5VmFsID0gZGVmLnN0ZXAgPCAxID8gdmFsdWUudG9GaXhlZCgyKSA6IFN0cmluZyh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXNsaWRlci1yb3cnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXZhbHVlJz57ZGVmLm1pbn08L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdyYW5nZScgY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci1zbGlkZXInXG4gICAgICAgICAgbWluPXtkZWYubWlufSBtYXg9e2RlZi5tYXh9IHN0ZXA9e2RlZi5zdGVwfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItdmFsdWUnPntkaXNwbGF5VmFsfXtkZWYudW5pdCB8fCAnJ308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogJyM4ODgnLCBtYXJnaW5Ub3A6IDQgfX0+XG4gICAgICAgIHtkZWYub3BlcmF0b3IgPT09ICc8JyA/ICdMZXNzIHRoYW4nIDogJ0dyZWF0ZXIgdGhhbid9IHtkaXNwbGF5VmFsfXtkZWYudW5pdCB8fCAnJ31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFJhbmdlU2xpZGVyQ29udGVudCAoeyBkZWYsIHZhbHVlLCBvbkNoYW5nZSB9OiB7XG4gIGRlZjogRmlsdGVyRGVmICYgeyB0eXBlOiAncmFuZ2Utc2xpZGVyJyB9LCB2YWx1ZTogW251bWJlciwgbnVtYmVyXSwgb25DaGFuZ2U6ICh2OiBbbnVtYmVyLCBudW1iZXJdKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IFtsbywgaGldID0gdmFsdWVcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXJhbmdlLXJvdyc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItdmFsdWUnPntsb317ZGVmLnVuaXQgfHwgJyd9PC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM4ODgnIH19Pi08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItdmFsdWUnPntoaX17ZGVmLnVuaXQgfHwgJyd9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNCB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTAsIGNvbG9yOiAnIzg4OCcsIG1hcmdpbkJvdHRvbTogMiB9fT5NaW48L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9J3JhbmdlJyBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXNsaWRlcidcbiAgICAgICAgICBtaW49e2RlZi5taW59IG1heD17ZGVmLm1heH0gc3RlcD17ZGVmLnN0ZXB9IHZhbHVlPXtsb31cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGNvbnN0IHYgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpOyBvbkNoYW5nZShbTWF0aC5taW4odiwgaGkpLCBoaV0pIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogJyM4ODgnLCBtYXJnaW5Cb3R0b206IDIgfX0+TWF4PC9kaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdyYW5nZScgY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci1zbGlkZXInXG4gICAgICAgICAgbWluPXtkZWYubWlufSBtYXg9e2RlZi5tYXh9IHN0ZXA9e2RlZi5zdGVwfSB2YWx1ZT17aGl9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBjb25zdCB2ID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTsgb25DaGFuZ2UoW2xvLCBNYXRoLm1heCh2LCBsbyldKSB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09IENBTENVTEFUT1IgVFlQRVMgPT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgUmVzdWx0cyA9IHtcbiAgdG90YWxUcmVlczogbnVtYmVyOyB0b3RhbEV4aXN0aW5nU2hhZGU6IG51bWJlcjsgdG90YWxFeGlzdGluZ1VuZGVyOiBudW1iZXI7XG4gIHRyZWVzVG9BZGQ6IG51bWJlcjsgdG90YWxMZW5ndGg6IG51bWJlcjsgdG90YWxBcmVhOiBudW1iZXI7XG4gIGF2Z1RjY3I6IG51bWJlcjsgYXZnU3BhY2luZzogbnVtYmVyOyBmaWx0ZXJTdW1tYXJ5OiBzdHJpbmdbXTtcbiAgc2VnbWVudENvdW50OiBudW1iZXI7XG4gIGJ5V3R5cGU6IFJlY29yZDxzdHJpbmcsIHsgdHJlZXM6IG51bWJlcjsgdHJlZXNUb0FkZDogbnVtYmVyOyBsZW5ndGg6IG51bWJlcjsgYXJlYTogbnVtYmVyOyB0Y2NyOiBudW1iZXI7IHNwYWNpbmc6IG51bWJlciB9PlxufVxuXG5jb25zdCBjYW5vcHlBcmVhID0gKGQ6IG51bWJlcikgPT4gTWF0aC5QSSAqIE1hdGgucG93KGQgLyAyLCAyKVxuY29uc3QgZm9ybWF0TnVtID0gKHg/OiBudW1iZXIsIGQgPSAyKSA9PiAoIWlzRmluaXRlKE51bWJlcih4KSkgPyAnMCcgOiBOdW1iZXIoeCkudG9GaXhlZChkKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpKVxuY29uc3QgZm10SW50ID0gKHg/OiBudW1iZXIpID0+ICghaXNGaW5pdGUoTnVtYmVyKHgpKSA/ICcwJyA6IE1hdGgucm91bmQoTnVtYmVyKHgpKS50b0xvY2FsZVN0cmluZygpKVxuXG5jb25zdCB0cmFuc2xhdGVGaWx0ZXJzID0gKHNxbDogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBpZiAoIXNxbCB8fCBzcWwgPT09ICcxPTEnIHx8IHNxbCA9PT0gJ05vbmUnKSByZXR1cm4gWydBbGwgc2VnbWVudHM6J11cbiAgY29uc3QgdHJhbnNsYXRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICdzdW1tZXJfU0knOiAnU3ByaW5nL1N1bW1lciBTaGFkZSBJbmRleCcsXG4gICAgJ0FCdzJrX21heCc6ICdOZWlnaGJvdXJob29kIHRyYW5zaXQgKGJldHdlZW5uZXNzIGNlbnRyYWxpdHkgYXQgMmttIHNjYWxlKScsXG4gICAgJ0FCdzVrX21heCc6ICdDaXR5IHRyYW5zaXQgKGJldHdlZW5uZXNzIGNlbnRyYWxpdHkgYXQgNWttIHNjYWxlKScsXG4gICAgJ0FJdzFrSF9tZWEnOiAnTG9jYWwgY2VudGVycyAoY2xvc2VuZXNzIGNlbnRyYWxpdHkgYXQgMWttIHNjYWxlKScsXG4gICAgJ0ZTSTUwMF9tZWEnOiAnRmxvb3IgU3BhY2UgSW5kZXggd2l0aGluIDUwMG0gd2Fsa2luZyBkaXN0YW5jZScsXG4gICAgJ0FSdzUwMGxtXzEnOiAnTnVtYmVyIG9mIHNob3BzIGFuZCByZXN0YXVyYW50cyB3aXRoaW4gNTAwbSB3YWxraW5nIGRpc3RhbmNlJyxcbiAgICAnQUR3c19tZWFuJzogJ1dhbGtpbmcgZGlzdGFuY2UgdG8gdGhlIGNsb3Nlc3Qgc2Nob29sIG9yIHByZXNjaG9vbCcsXG4gICAgJ0FEd21fbWVhbic6ICdXYWxraW5nIGRpc3RhbmNlIHRvIHRoZSBjbG9zZXN0IHRyYW0sIG1ldHJvIG9yIHJhaWx3YXkgc3RhdGlvbicsXG4gICAgJ0FEd2J1X21lYW4nOiAnV2Fsa2luZyBkaXN0YW5jZSB0byB0aGUgY2xvc2VzdCBidXMgc3RvcCcsXG4gICAgJ3dpZHRoJzogJ1N0cmVldCB3aWR0aCdcbiAgfVxuICBsZXQgc2FmZVNxbCA9IHNxbC5yZXBsYWNlKC8oQkVUV0VFTlxccysuKj8pXFxzK0FORFxccysoLio/KS9naSwgJyQxIyNSQU5HRV9BTkQjIyQyJylcbiAgbGV0IGNvbmRpdGlvbnMgPSBzYWZlU3FsLnNwbGl0KC9cXHMrQU5EXFxzKy9naSlcbiAgcmV0dXJuIGNvbmRpdGlvbnMubWFwKChjb25kKSA9PiB7XG4gICAgbGV0IHRleHQgPSBjb25kLnRyaW0oKVxuICAgIGlmICh0ZXh0LnN0YXJ0c1dpdGgoJygnKSAmJiB0ZXh0LmVuZHNXaXRoKCcpJykpIHRleHQgPSB0ZXh0LnNsaWNlKDEsIC0xKS50cmltKClcbiAgICBPYmplY3Qua2V5cyh0cmFuc2xhdGlvbnMpLmZvckVhY2goa2V5ID0+IHsgdGV4dCA9IHRleHQuc3BsaXQoa2V5KS5qb2luKHRyYW5zbGF0aW9uc1trZXldKSB9KVxuICAgIHRleHQgPSB0ZXh0XG4gICAgICAucmVwbGFjZSgvXFxzK0JFVFdFRU5cXHMrL2dpLCAnIGlzIGJldHdlZW4gJylcbiAgICAgIC5yZXBsYWNlKC8jI1JBTkdFX0FORCMjL2csICcgYW5kICcpXG4gICAgICAucmVwbGFjZSgvPFxccyovZywgJzogbGVzcyB0aGFuICcpLnJlcGxhY2UoLz5cXHMqL2csICc6IGdyZWF0ZXIgdGhhbiAnKVxuICAgICAgLnJlcGxhY2UoLzw9XFxzKi9nLCAnOiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJykucmVwbGFjZSgvPj1cXHMqL2csICc6IGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAnKVxuICAgICAgLnJlcGxhY2UoLz1cXHMqL2csICc6IGVxdWFsIHRvICcpXG4gICAgY29uc3QgbG93ZXIgPSB0ZXh0LnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBpc0Rpc3RhbmNlRmllbGQgPSBsb3dlci5pbmNsdWRlcygnd2Fsa2luZyBkaXN0YW5jZSB0bycpIHx8IGxvd2VyLnN0YXJ0c1dpdGgoJ3N0cmVldCB3aWR0aCcpXG4gICAgaWYgKGlzRGlzdGFuY2VGaWVsZCkge1xuICAgICAgaWYgKGxvd2VyLmluY2x1ZGVzKCcgaXMgYmV0d2VlbiAnKSkge1xuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFxkKyg/OlxcLlxcZCspPylcXHMrYW5kXFxzKyhcXGQrKD86XFwuXFxkKyk/KS9pLCAnJDFtIGFuZCAkMm0nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKFxcZCsoXFwuXFxkKyk/KSQvLCAnJDFtJylcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGJ1bGxldCA9IHRleHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnNsaWNlKDEpXG4gICAgYnVsbGV0ID0gYnVsbGV0LnJlcGxhY2UoL1s6XFxzXSskLywgJycpLnRyaW0oKVxuICAgIHJldHVybiBidWxsZXQuZW5kc1dpdGgoJy4nKSA/IGJ1bGxldCA6IGJ1bGxldCArICcuJ1xuICB9KVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT0gTUFJTiBXSURHRVQgPT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICBjb25zdCBjb25maWcgPSBwcm9wcy5jb25maWcgfHwgKHt9IGFzIGFueSlcbiAgY29uc3QgeyB1c2VEYXRhU291cmNlcyB9ID0gcHJvcHNcbiAgY29uc3QgZHNJZCA9IHVzZURhdGFTb3VyY2VzPy5bMF0/LmRhdGFTb3VyY2VJZFxuXG4gIC8vIC0tLSBNYXAgc3RhdGUgLS0tXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXG5cbiAgLy8gLS0tIEZpbHRlciBzdGF0ZSAtLS1cbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGU8RmlsdGVyc01hcD4oY3JlYXRlSW5pdGlhbEZpbHRlcnMpXG4gIGNvbnN0IFtvcGVuUG9wb3Zlciwgc2V0T3BlblBvcG92ZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2hvdmVyZWRJY29uLCBzZXRIb3ZlcmVkSWNvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbcG9wb3ZlclBvcywgc2V0UG9wb3ZlclBvc10gPSB1c2VTdGF0ZTx7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFt0b29sdGlwUG9zLCBzZXRUb29sdGlwUG9zXSA9IHVzZVN0YXRlPHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHwgbnVsbD4obnVsbClcbiAgY29uc3QgcHJldlNxbFJlZiA9IHVzZVJlZjxzdHJpbmc+KCcnKVxuICBjb25zdCBpY29uUmVmcyA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBIVE1MRGl2RWxlbWVudCB8IG51bGw+Pih7fSlcbiAgY29uc3QgZHNSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICBjb25zdCBbZHNSZWFkeSwgc2V0RHNSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyAtLS0gQ2FsY3VsYXRvciBzdGF0ZSAtLS1cbiAgY29uc3QgW3NjZW5hcmlvLCBzZXRTY2VuYXJpb10gPSB1c2VTdGF0ZTwnczEnIHwgJ3MyJz4oJ3MxJylcbiAgY29uc3QgW3N1YlNjZW5hcmlvLCBzZXRTdWJTY2VuYXJpb10gPSB1c2VTdGF0ZTwnMWEnIHwgJzFiJz4oJzFhJylcbiAgY29uc3QgW2RpYW1ldGVyLCBzZXREaWFtZXRlcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDgpXG4gIGNvbnN0IFt0Y2NyR2xvYmFsLCBzZXRUY2NyR2xvYmFsXSA9IHVzZVN0YXRlPG51bWJlcj4oY29uZmlnPy5kZWZhdWx0VGNjciA/PyAwLjYpXG4gIGNvbnN0IFt3dHlwZVRhcmdldHMsIHNldFd0eXBlVGFyZ2V0c10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PihcbiAgICB7ICcxJzogMC41MCwgJzInOiAwLjQwLCAnMyc6IDAuNDAsICc0JzogMC40MCwgJzUnOiAwLjQwIH1cbiAgKVxuICBjb25zdCBbc3BhY2luZywgc2V0U3BhY2luZ10gPSB1c2VTdGF0ZTxudW1iZXI+KDI1KVxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZTxSZXN1bHRzIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3NlZ21lbnRDb3VudCwgc2V0U2VnbWVudENvdW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gIGNvbnN0IHdpZGdldElkID0gcHJvcHMuaWQgfHwgJ3dpZGdldF84MidcblxuICAvLyAtLS0gRGF0YSBzb3VyY2UgaGFuZGxpbmcgLS0tXG4gIGNvbnN0IGhhbmRsZURzQ3JlYXRlZCA9IHVzZUNhbGxiYWNrKChkczogYW55KSA9PiB7XG4gICAgZHNSZWYuY3VycmVudCA9IGRzXG4gICAgcHJldlNxbFJlZi5jdXJyZW50ID0gJydcbiAgICBzZXREc1JlYWR5KHRydWUpXG4gIH0sIFtdKVxuXG4gIC8vIC0tLSBBcHBseSBmaWx0ZXIgU1FMIC0tLVxuICBjb25zdCBhcHBseVNxbCA9IHVzZUNhbGxiYWNrKChjdXJyZW50RmlsdGVyczogRmlsdGVyc01hcCkgPT4ge1xuICAgIGNvbnN0IHNxbCA9IGJ1aWxkQ29tYmluZWRTcWwoY3VycmVudEZpbHRlcnMpXG4gICAgaWYgKHNxbCA9PT0gcHJldlNxbFJlZi5jdXJyZW50KSByZXR1cm5cbiAgICBwcmV2U3FsUmVmLmN1cnJlbnQgPSBzcWxcbiAgICBjb25zdCBkcyA9IGRzUmVmLmN1cnJlbnRcbiAgICBpZiAoIWRzKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgaWYgKGRzLnVwZGF0ZVF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGRzLnVwZGF0ZVF1ZXJ5UGFyYW1zKHsgd2hlcmU6IHNxbCB9LCB3aWRnZXRJZClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbdHJlZS1wbGFudGluZ10gRmFpbGVkIHRvIGFwcGx5IGZpbHRlcnM6JywgZSlcbiAgICB9XG4gIH0sIFt3aWRnZXRJZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZHNSZWFkeSkgYXBwbHlTcWwoZmlsdGVycylcbiAgfSwgW2ZpbHRlcnMsIGFwcGx5U3FsLCBkc1JlYWR5XSlcblxuICAvLyAtLS0gU2VnbWVudCBjb3VudCBwb2xsaW5nIC0tLVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghamltdU1hcFZpZXc/LnZpZXc/Lm1hcCkgcmV0dXJuXG4gICAgY29uc3QgdXBkYXRlQ291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5maW5kKFxuICAgICAgICAgIChsOiBhbnkpID0+IGwudGl0bGUgPT09ICdTZWxlY3RlZCBzdHJlZXRzJyAmJiBsLnR5cGUgPT09ICdmZWF0dXJlJ1xuICAgICAgICApIGFzIGFueVxuICAgICAgICBpZiAoIWxheWVyKSByZXR1cm5cbiAgICAgICAgY29uc3QgcXVlcnkgPSBsYXllci5jcmVhdGVRdWVyeSgpXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgJzE9MSdcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlQ291bnQocXVlcnkpXG4gICAgICAgIGlmICghbG9hZGluZykgc2V0U2VnbWVudENvdW50KGAke3Jlc3VsdC50b0xvY2FsZVN0cmluZygpfSBzdHJlZXQgc2VnbWVudHMgc2VsZWN0ZWQuYClcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogaWdub3JlICovIH1cbiAgICB9XG4gICAgdXBkYXRlQ291bnQoKVxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlQ291bnQsIDIwMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIH0sIFtqaW11TWFwVmlldywgbG9hZGluZ10pXG5cbiAgLy8gLS0tIEZpbHRlciBpbnRlcmFjdGlvbnMgLS0tXG4gIGNvbnN0IHVwZGF0ZUZpbHRlclZhbHVlID0gKGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICBzZXRGaWx0ZXJzKHByZXYgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogeyAuLi5wcmV2W2ZpZWxkXSwgdmFsdWUgfSB9KSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUljb25DbGljayA9IChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBmaWx0ZXJzW2ZpZWxkXVxuICAgIGlmIChzdGF0ZT8uYWN0aXZlKSB7XG4gICAgICBjb25zdCBkZWYgPSBGSUxURVJfREVGSU5JVElPTlMuZmluZChkID0+IGQuZmllbGQgPT09IGZpZWxkKVxuICAgICAgc2V0RmlsdGVycyhwcmV2ID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHsgYWN0aXZlOiBmYWxzZSwgdmFsdWU6IGRlZj8uZGVmYXVsdFZhbHVlID8/IDAgfSB9KSlcbiAgICAgIHNldE9wZW5Qb3BvdmVyKG51bGwpOyBzZXRQb3BvdmVyUG9zKG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlcnMocHJldiA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiB7IC4uLnByZXZbZmllbGRdLCBhY3RpdmU6IHRydWUgfSB9KSlcbiAgICAgIG9wZW5Qb3BvdmVyRm9yKGZpZWxkKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9wZW5Qb3BvdmVyRm9yID0gKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpY29uRWwgPSBpY29uUmVmcy5jdXJyZW50W2ZpZWxkXVxuICAgIGlmIChpY29uRWwpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBpY29uRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHNldFBvcG92ZXJQb3MoeyB0b3A6IHJlY3QuYm90dG9tICsgNiwgbGVmdDogTWF0aC5tYXgocmVjdC5yaWdodCAtIDIyMCwgMTApIH0pXG4gICAgfVxuICAgIHNldE9wZW5Qb3BvdmVyKGZpZWxkKVxuICB9XG5cbiAgY29uc3QgY2xvc2VQb3BvdmVyID0gKCkgPT4geyBzZXRPcGVuUG9wb3ZlcihudWxsKTsgc2V0UG9wb3ZlclBvcyhudWxsKSB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0SG92ZXJlZEljb24oZmllbGQpXG4gICAgY29uc3QgaWNvbkVsID0gaWNvblJlZnMuY3VycmVudFtmaWVsZF1cbiAgICBpZiAoaWNvbkVsKSB7XG4gICAgICBjb25zdCByZWN0ID0gaWNvbkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBzZXRUb29sdGlwUG9zKHsgdG9wOiByZWN0LmJvdHRvbSArIDQsIGxlZnQ6IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHsgc2V0SG92ZXJlZEljb24obnVsbCk7IHNldFRvb2x0aXBQb3MobnVsbCkgfVxuXG4gIGNvbnN0IG9wZW5EZWYgPSBvcGVuUG9wb3ZlciA/IEZJTFRFUl9ERUZJTklUSU9OUy5maW5kKGQgPT4gZC5maWVsZCA9PT0gb3BlblBvcG92ZXIpIDogbnVsbFxuICBjb25zdCBob3ZlcmVkRGVmID0gaG92ZXJlZEljb24gPyBGSUxURVJfREVGSU5JVElPTlMuZmluZChkID0+IGQuZmllbGQgPT09IGhvdmVyZWRJY29uKSA6IG51bGxcblxuICAvLyAtLS0gQ1NWL1BERiBoYW5kbGVycyAtLS1cbiAgY29uc3QgaGFuZGxlQ3N2RG93bmxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKCFyZXN1bHRzKSByZXR1cm5cbiAgICBjb25zdCBoZWFkZXIgPSBcIkNhdGVnb3J5LElkZWFsIG51bWJlciBvZiB0cmVlcyAoaWdub3JpbmcgZXhpc3Rpbmcgc2hhZGUgdHJlZXMpLE51bWJlciBvZiBleGlzdGluZyBzaGFkZSB0cmVlcyxOdW1iZXIgb2YgZXhpc3RpbmcgdW5kZXJkZXZlbG9wZWQgdHJlZXMsTnVtYmVyIG9mIG5ldyB0cmVlcyB0byBwbGFudCxMZW5ndGgobSksVENDUixTcGFjaW5nKG0pXFxuXCJcbiAgICBjb25zdCByb3dzID0gT2JqZWN0LmtleXMocmVzdWx0cy5ieVd0eXBlKS5tYXAoayA9PiB7XG4gICAgICBjb25zdCBnID0gcmVzdWx0cy5ieVd0eXBlW2tdXG4gICAgICByZXR1cm4gYCR7Q0FURUdPUllfTEFCRUxTW2tdIHx8IGt9LCR7Zy50cmVlc30sJHtyZXN1bHRzLnRvdGFsRXhpc3RpbmdTaGFkZX0sJHtyZXN1bHRzLnRvdGFsRXhpc3RpbmdVbmRlcn0sJHtnLnRyZWVzVG9BZGR9LCR7Zy5sZW5ndGgudG9GaXhlZCgxKX0sJHtnLnRjY3IudG9GaXhlZCgyKX0sJHtnLnNwYWNpbmcudG9GaXhlZCgxKX1gXG4gICAgfSkuam9pbihcIlxcblwiKVxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbaGVhZGVyICsgcm93c10sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KVxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICBsaW5rLmhyZWYgPSB1cmw7IGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJ0cmVlX3BsYW50aW5nX3BvdGVudGlhbF9yZXBvcnQuY3N2XCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTsgbGluay5jbGljaygpOyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspOyBVUkwucmV2b2tlT2JqZWN0VVJMKHVybClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVBkZlJlcG9ydCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWppbXVNYXBWaWV3IHx8ICFyZXN1bHRzKSByZXR1cm5cbiAgICBjb25zdCBzY3JlZW5zaG90ID0gYXdhaXQgamltdU1hcFZpZXcudmlldy50YWtlU2NyZWVuc2hvdCh7IGZvcm1hdDogJ3BuZycgfSlcbiAgICBjb25zdCBwcmludFdpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnX2JsYW5rJylcbiAgICBpZiAoIXByaW50V2luZG93KSByZXR1cm5cbiAgICBjb25zdCBtZXRob2REZXNjID0gc2NlbmFyaW8gPT09ICdzMSdcbiAgICAgID8gYE1ldGhvZCAxOiBUYXJnZXQgVENDUiAoJHtzdWJTY2VuYXJpbyA9PT0gJzFhJyA/ICdnbG9iYWwnIDogJ2J5IHN0cmVldCB3aWR0aCd9KWAgOiBgTWV0aG9kIDI6IEZpeGVkIFNwYWNpbmdgXG4gICAgY29uc3QgcGFyYW1TdW1tYXJ5ID0gYENyb3duIERpYW1ldGVyOiAke2RpYW1ldGVyfW0gfCAke3NjZW5hcmlvID09PSAnczEnID8gKHN1YlNjZW5hcmlvID09PSAnMWEnID8gYEdsb2JhbCBUYXJnZXQgVENDUjogJHt0Y2NyR2xvYmFsfWAgOiAnVGFyZ2V0czogcGVyIHdpZHRoIGNsYXNzJykgOiBgRGVzaXJlZCBTcGFjaW5nOiAke3NwYWNpbmd9bWB9YFxuICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKGA8aHRtbD48aGVhZD48dGl0bGU+VHJlZSBQbGFudGluZyBUYXJnZXRzIENhbGN1bGF0aW9uPC90aXRsZT48c3R5bGU+Ym9keXtmb250LWZhbWlseTonU2Vnb2UgVUknLEFyaWFsLHNhbnMtc2VyaWY7cGFkZGluZzoyNXB4O2NvbG9yOiMzMzM7Zm9udC1zaXplOjEwcHg7bGluZS1oZWlnaHQ6MS4zfWgxe2NvbG9yOiMyYzNlNTA7Zm9udC1zaXplOjE2cHg7bWFyZ2luOjAgMCAxNXB4IDB9aDJ7Zm9udC1zaXplOjEycHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtwYWRkaW5nLWJvdHRvbTozcHg7bWFyZ2luOjE1cHggMCA4cHggMH0uc2VjdGlvbi10aXRsZXtmb250LXdlaWdodDpib2xkO21hcmdpbi1ib3R0b206M3B4O2ZvbnQtc2l6ZToxMXB4fXRhYmxle3dpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO21hcmdpbi10b3A6NXB4O2ZvbnQtc2l6ZTo5cHh9dGgsdGR7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO3BhZGRpbmc6NHB4IDZweDt0ZXh0LWFsaWduOmxlZnR9dGh7YmFja2dyb3VuZC1jb2xvcjojZjhmOWZhfS5tYXAtY29udGFpbmVye21hcmdpbjoxMnB4IDA7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO3dpZHRoOjEwMCV9Lm1hcC1pbWd7d2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztkaXNwbGF5OmJsb2NrO21heC1oZWlnaHQ6NDAwcHg7b2JqZWN0LWZpdDpjb250YWluO2JhY2tncm91bmQ6I2VlZX0uZm9vdGVye21hcmdpbi10b3A6MjVweDtwYWRkaW5nLXRvcDo4cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZTt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojNzc3O2ZvbnQtc2l6ZTo4cHh9dWx7cGFkZGluZy1sZWZ0OjE1cHg7bWFyZ2luOjNweCAwfWxpe21hcmdpbi1ib3R0b206MXB4fTwvc3R5bGU+PC9oZWFkPjxib2R5PlxuICAgICAgPGgxPlRyZWUgUGxhbnRpbmcgVGFyZ2V0cyBDYWxjdWxhdGlvbjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkFwcGxpZWQgYXNzdW1wdGlvbnM6PC9kaXY+PHVsPiR7cmVzdWx0cy5maWx0ZXJTdW1tYXJ5Lm1hcChmID0+IGA8bGk+JHtmfTwvbGk+YCkuam9pbignJyl9PC91bD5cbiAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjVweCAwO1wiPjxzdHJvbmc+VG90YWwgbnVtYmVyIG9mIHNlbGVjdGVkIHN0cmVldHMgc2VnbWVudHM6PC9zdHJvbmc+ICR7Zm10SW50KHJlc3VsdHMuc2VnbWVudENvdW50KX0gfCA8c3Ryb25nPlRvdGFsIHN0cmVldCBsZW5ndGg6PC9zdHJvbmc+ICR7Zm10SW50KHJlc3VsdHMudG90YWxMZW5ndGgpfSBtPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5DaG9zZW4gTWV0aG9kOjwvZGl2PjxwIHN0eWxlPVwibWFyZ2luOjJweCAwO1wiPiR7bWV0aG9kRGVzY308YnIvPjxzcGFuIHN0eWxlPVwiY29sb3I6IzY2NjtcIj5QYXJhbWV0ZXJzOiAke3BhcmFtU3VtbWFyeX08L3NwYW4+PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cIm1hcC1jb250YWluZXJcIj48aW1nIGNsYXNzPVwibWFwLWltZ1wiIHNyYz1cIiR7c2NyZWVuc2hvdC5kYXRhVXJsfVwiPjwvZGl2PlxuICAgICAgPGgyPlJlc3VsdHMgU3VtbWFyeTwvaDI+PHRhYmxlPjx0cj48dGg+TWV0cmljPC90aD48dGg+VmFsdWU8L3RoPjwvdHI+XG4gICAgICA8dHI+PHRkPklkZWFsIG51bWJlciBvZiB0cmVlczwvdGQ+PHRkPiR7Zm10SW50KHJlc3VsdHMudG90YWxUcmVlcyl9PC90ZD48L3RyPlxuICAgICAgPHRyPjx0ZD5FeGlzdGluZyBzaGFkZSB0cmVlczwvdGQ+PHRkPiR7Zm10SW50KHJlc3VsdHMudG90YWxFeGlzdGluZ1NoYWRlKX08L3RkPjwvdHI+XG4gICAgICA8dHI+PHRkPkV4aXN0aW5nIHVuZGVyZGV2ZWxvcGVkIHRyZWVzPC90ZD48dGQ+JHtmbXRJbnQocmVzdWx0cy50b3RhbEV4aXN0aW5nVW5kZXIpfTwvdGQ+PC90cj5cbiAgICAgIDx0ciBzdHlsZT1cImZvbnQtd2VpZ2h0OmJvbGQ7XCI+PHRkPk5ldyB0cmVlcyB0byBwbGFudDwvdGQ+PHRkPiR7Zm10SW50KHJlc3VsdHMudHJlZXNUb0FkZCl9PC90ZD48L3RyPlxuICAgICAgPHRyPjx0ZD5BdmVyYWdlIFRDQ1I8L3RkPjx0ZD4ke2Zvcm1hdE51bShyZXN1bHRzLmF2Z1RjY3IpfTwvdGQ+PC90cj5cbiAgICAgIDx0cj48dGQ+QXZlcmFnZSBzcGFjaW5nPC90ZD48dGQ+JHtmbXRJbnQocmVzdWx0cy5hdmdTcGFjaW5nKX0gbTwvdGQ+PC90cj48L3RhYmxlPlxuICAgICAgPGgyPlJlc3VsdHMgYnkgc3RyZWV0IHdpZHRoPC9oMj48dGFibGU+PHRyPjx0aD5XaWR0aDwvdGg+PHRoPlRyZWVzIHRvIEFkZDwvdGg+PHRoPlRDQ1I8L3RoPjx0aD5TcGFjaW5nIChtKTwvdGg+PHRoPkxlbmd0aCAobSk8L3RoPjwvdHI+XG4gICAgICAke09iamVjdC5rZXlzKHJlc3VsdHMuYnlXdHlwZSkuc29ydCgpLm1hcChrID0+IHsgY29uc3QgZyA9IHJlc3VsdHMuYnlXdHlwZVtrXTsgcmV0dXJuIGA8dHI+PHRkPiR7Q0FURUdPUllfTEFCRUxTW2tdIHx8IGt9PC90ZD48dGQ+JHtmbXRJbnQoZy50cmVlc1RvQWRkKX08L3RkPjx0ZD4ke2Zvcm1hdE51bShnLnRjY3IpfTwvdGQ+PHRkPiR7Zm10SW50KGcuc3BhY2luZyl9PC90ZD48dGQ+JHtmbXRJbnQoZy5sZW5ndGgpfTwvdGQ+PC90cj5gIH0pLmpvaW4oJycpfTwvdGFibGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+QmlnIERhdGEgaW4gQXJjaGl0ZWN0dXJhbCBSZXNlYXJjaCBMYWIsIFRlY2huaW9uIHwgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvZGl2PjwvYm9keT48L2h0bWw+YClcbiAgICBwcmludFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHByaW50V2luZG93LnByaW50KCkgfSwgNzAwKVxuICB9XG5cbiAgLy8gLS0tIENvbXB1dGUgLS0tXG4gIGNvbnN0IG9uQ29tcHV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWRzSWQgfHwgIWppbXVNYXBWaWV3KSByZXR1cm5cbiAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0lkKSBhcyBRdWVyaWFibGVEYXRhU291cmNlXG4gICAgaWYgKCFkcykgcmV0dXJuXG4gICAgc2V0TG9hZGluZyh0cnVlKTsgc2V0U2VnbWVudENvdW50KCdGZXRjaGluZyByZWNvcmRzLi4uJylcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGF5ZXIgPSAoZHMgYXMgYW55KS5sYXllclxuICAgICAgaWYgKCFsYXllcikgeyBzZXRTZWdtZW50Q291bnQoJ0xheWVyIG5vdCBhdmFpbGFibGUuJyk7IHNldExvYWRpbmcoZmFsc2UpOyByZXR1cm4gfVxuICAgICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBkcy5nZXRTZWxlY3RlZFJlY29yZElkcz8uKCkgfHwgW11cbiAgICAgIGxldCBmZWF0dXJlczogYW55W10gPSBbXVxuICAgICAgaWYgKHNlbGVjdGVkSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IHNlbGVjdGVkSWRzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGNodW5rID0gc2VsZWN0ZWRJZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyAyMDAwKVxuICAgICAgICAgIGNvbnN0IHEgPSBsYXllci5jcmVhdGVRdWVyeSgpOyBxLm9iamVjdElkcyA9IGNodW5rOyBxLnJldHVybkdlb21ldHJ5ID0gZmFsc2U7IHEub3V0RmllbGRzID0gWycqJ11cbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICAgICAgaWYgKHJlcz8uZmVhdHVyZXM/Lmxlbmd0aCkgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzLmZlYXR1cmVzKVxuICAgICAgICAgIG9mZnNldCArPSAyMDAwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gKGRzIGFzIGFueSkuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zPy4oKSB8fCB7IHdoZXJlOiAnMT0xJyB9XG4gICAgICAgIGxldCBvZmZzZXQgPSAwOyBsZXQgZG9uZSA9IGZhbHNlXG4gICAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICAgIGNvbnN0IHEgPSBsYXllci5jcmVhdGVRdWVyeSgpOyBxLndoZXJlID0gcXVlcnlQYXJhbXMud2hlcmUgfHwgJzE9MSdcbiAgICAgICAgICBxLm91dEZpZWxkcyA9IFsnKiddOyBxLnJldHVybkdlb21ldHJ5ID0gZmFsc2U7IHEuc3RhcnQgPSBvZmZzZXQ7IHEubnVtID0gMjAwMFxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocSlcbiAgICAgICAgICBpZiAocmVzPy5mZWF0dXJlcz8ubGVuZ3RoKSBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChyZXMuZmVhdHVyZXMpXG4gICAgICAgICAgaWYgKCFyZXMuZmVhdHVyZXMgfHwgcmVzLmZlYXR1cmVzLmxlbmd0aCA8IDIwMDApIGRvbmUgPSB0cnVlOyBlbHNlIG9mZnNldCArPSAyMDAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlY3MgPSBmZWF0dXJlcy5tYXAoKGY6IGFueSkgPT4gKHsgZ2V0RmllbGRWYWx1ZTogKGZpZWxkOiBzdHJpbmcpID0+IGYuYXR0cmlidXRlc1tmaWVsZF0gfSkpXG4gICAgICBpZiAocmVjcy5sZW5ndGggPT09IDApIHsgc2V0U2VnbWVudENvdW50KCdObyByZWNvcmRzIGZvdW5kLicpOyBzZXRMb2FkaW5nKGZhbHNlKTsgcmV0dXJuIH1cbiAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlID0gKGRzIGFzIGFueSkuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zPy4oKT8ud2hlcmUgfHwgJ05vbmUnXG4gICAgICBjb25zdCB0cmFuc2xhdGVkID0gKHNlbGVjdGVkSWRzICYmIHNlbGVjdGVkSWRzLmxlbmd0aCA+IDApXG4gICAgICAgID8gW2BNYW51YWwgc2VsZWN0aW9uICgke3JlY3MubGVuZ3RofSBzZWdtZW50cyk6YF0gOiB0cmFuc2xhdGVGaWx0ZXJzKHdoZXJlQ2xhdXNlKVxuICAgICAgY29uc3QgQyA9IGNhbm9weUFyZWEoZGlhbWV0ZXIpOyBjb25zdCByb3dzID0gY29uZmlnLnJvd3MgfHwgMlxuICAgICAgY29uc3Qgc3VtbWFyeTogUmVzdWx0cyA9IHtcbiAgICAgICAgdG90YWxUcmVlczogMCwgdG90YWxFeGlzdGluZ1NoYWRlOiAwLCB0b3RhbEV4aXN0aW5nVW5kZXI6IDAsIHRyZWVzVG9BZGQ6IDAsXG4gICAgICAgIHRvdGFsTGVuZ3RoOiAwLCB0b3RhbEFyZWE6IDAsIGF2Z1RjY3I6IDAsIGF2Z1NwYWNpbmc6IDAsXG4gICAgICAgIGZpbHRlclN1bW1hcnk6IHRyYW5zbGF0ZWQsIHNlZ21lbnRDb3VudDogcmVjcy5sZW5ndGgsIGJ5V3R5cGU6IHt9XG4gICAgICB9XG4gICAgICByZWNzLmZvckVhY2gociA9PiB7XG4gICAgICAgIGNvbnN0IEwgPSBOdW1iZXIoci5nZXRGaWVsZFZhbHVlKGNvbmZpZy5sZW5ndGhGaWVsZCkpIHx8IDBcbiAgICAgICAgY29uc3QgVyA9IE51bWJlcihyLmdldEZpZWxkVmFsdWUoY29uZmlnLndpZHRoRmllbGQpKSB8fCAwXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nU2hhZGUgPSBjb25maWcuZXhpc3RpbmdUcmVlc0ZpZWxkID8gKE51bWJlcihyLmdldEZpZWxkVmFsdWUoY29uZmlnLmV4aXN0aW5nVHJlZXNGaWVsZCkpIHx8IDApIDogMFxuICAgICAgICBjb25zdCBleGlzdGluZ1VuZGVyID0gY29uZmlnLnVuZGVyZGV2ZWxvcGVkVHJlZXNGaWVsZCA/IChOdW1iZXIoci5nZXRGaWVsZFZhbHVlKGNvbmZpZy51bmRlcmRldmVsb3BlZFRyZWVzRmllbGQpKSB8fCAwKSA6IDBcbiAgICAgICAgY29uc3QgdHlwZUlEID0gU3RyaW5nKHIuZ2V0RmllbGRWYWx1ZShjb25maWcud3R5cGVGaWVsZCkgfHwgJzEnKVxuICAgICAgICBjb25zdCBBID0gTCAqIFdcbiAgICAgICAgaWYgKCFzdW1tYXJ5LmJ5V3R5cGVbdHlwZUlEXSkgc3VtbWFyeS5ieVd0eXBlW3R5cGVJRF0gPSB7IHRyZWVzOiAwLCB0cmVlc1RvQWRkOiAwLCBsZW5ndGg6IDAsIGFyZWE6IDAsIHRjY3I6IDAsIHNwYWNpbmc6IDAgfVxuICAgICAgICBsZXQgbl9wb3QgPSBzY2VuYXJpbyA9PT0gJ3MxJ1xuICAgICAgICAgID8gTWF0aC5jZWlsKCgoc3ViU2NlbmFyaW8gPT09ICcxYicgPyAod3R5cGVUYXJnZXRzW3R5cGVJRF0gfHwgMC42KSA6IHRjY3JHbG9iYWwpICogQSkgLyBDKVxuICAgICAgICAgIDogcm93cyAqIChNYXRoLmZsb29yKEwgLyBzcGFjaW5nKSArIDEpXG4gICAgICAgIGNvbnN0IG5fYWRkID0gTWF0aC5tYXgoMCwgbl9wb3QgLSBleGlzdGluZ1NoYWRlKVxuICAgICAgICBzdW1tYXJ5LnRvdGFsVHJlZXMgKz0gbl9wb3Q7IHN1bW1hcnkudG90YWxFeGlzdGluZ1NoYWRlICs9IGV4aXN0aW5nU2hhZGVcbiAgICAgICAgc3VtbWFyeS50b3RhbEV4aXN0aW5nVW5kZXIgKz0gZXhpc3RpbmdVbmRlcjsgc3VtbWFyeS50cmVlc1RvQWRkICs9IG5fYWRkXG4gICAgICAgIHN1bW1hcnkudG90YWxMZW5ndGggKz0gTDsgc3VtbWFyeS50b3RhbEFyZWEgKz0gQVxuICAgICAgICBzdW1tYXJ5LmJ5V3R5cGVbdHlwZUlEXS50cmVlcyArPSBuX3BvdDsgc3VtbWFyeS5ieVd0eXBlW3R5cGVJRF0udHJlZXNUb0FkZCArPSBuX2FkZFxuICAgICAgICBzdW1tYXJ5LmJ5V3R5cGVbdHlwZUlEXS5sZW5ndGggKz0gTDsgc3VtbWFyeS5ieVd0eXBlW3R5cGVJRF0uYXJlYSArPSBBXG4gICAgICB9KVxuICAgICAgc3VtbWFyeS5hdmdUY2NyID0gc3VtbWFyeS50b3RhbEFyZWEgPiAwID8gKHN1bW1hcnkudG90YWxUcmVlcyAqIEMpIC8gc3VtbWFyeS50b3RhbEFyZWEgOiAwXG4gICAgICBzdW1tYXJ5LmF2Z1NwYWNpbmcgPSBzdW1tYXJ5LnRvdGFsVHJlZXMgPiAwID8gc3VtbWFyeS50b3RhbExlbmd0aCAvIChzdW1tYXJ5LnRvdGFsVHJlZXMgLyByb3dzKSA6IDBcbiAgICAgIE9iamVjdC5rZXlzKHN1bW1hcnkuYnlXdHlwZSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgY29uc3QgZyA9IHN1bW1hcnkuYnlXdHlwZVtrXVxuICAgICAgICBnLnRjY3IgPSBnLmFyZWEgPiAwID8gKGcudHJlZXMgKiBDKSAvIGcuYXJlYSA6IDBcbiAgICAgICAgZy5zcGFjaW5nID0gZy50cmVlcyA+IDAgPyBnLmxlbmd0aCAvIChnLnRyZWVzIC8gcm93cykgOiAwXG4gICAgICB9KVxuICAgICAgc2V0UmVzdWx0cyhzdW1tYXJ5KTsgc2V0U2VnbWVudENvdW50KGBDYWxjdWxhdGVkICR7cmVjcy5sZW5ndGh9IHNlZ21lbnRzLmApXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7IHNldFNlZ21lbnRDb3VudCgnRXJyb3IgZmV0Y2hpbmcgZmVhdHVyZXMuJylcbiAgICB9IGZpbmFsbHkgeyBzZXRMb2FkaW5nKGZhbHNlKSB9XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT0gUkVOREVSID09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0IHBvcnRhbENvbnRlbnQgPSAoXG4gICAgPD5cbiAgICAgIHtob3ZlcmVkSWNvbiAmJiAhb3BlblBvcG92ZXIgJiYgaG92ZXJlZERlZiAmJiB0b29sdGlwUG9zICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXRvb2x0aXAnXG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiB0b29sdGlwUG9zLnRvcCwgbGVmdDogdG9vbHRpcFBvcy5sZWZ0LCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9fT5cbiAgICAgICAgICB7aG92ZXJlZERlZi5uYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b3BlblBvcG92ZXIgJiYgb3BlbkRlZiAmJiBwb3BvdmVyUG9zICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItYmFja2Ryb3AnIG9uQ2xpY2s9e2Nsb3NlUG9wb3Zlcn0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItcG9wb3ZlcidcbiAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogcG9wb3ZlclBvcy50b3AsIGxlZnQ6IHBvcG92ZXJQb3MubGVmdCB9fSBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXBvcG92ZXItdGl0bGUnPntvcGVuRGVmLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICB7b3BlbkRlZi5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogJyM5OTknLCBtYXJnaW5Cb3R0b206IDYsIGxpbmVIZWlnaHQ6IDEuMywgZm9udFN0eWxlOiAnaXRhbGljJywgd29yZFdyYXA6ICdicmVhay13b3JkJywgd2hpdGVTcGFjZTogJ25vcm1hbCcsIG1heFdpZHRoOiAyMDAgfX0+e29wZW5EZWYuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge29wZW5EZWYudHlwZSA9PT0gJ3NsaWRlcicgJiYgKFxuICAgICAgICAgICAgICA8U2xpZGVyQ29udGVudCBkZWY9e29wZW5EZWYgYXMgYW55fSB2YWx1ZT17ZmlsdGVyc1tvcGVuUG9wb3Zlcl0udmFsdWUgYXMgbnVtYmVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2ID0+IHVwZGF0ZUZpbHRlclZhbHVlKG9wZW5Qb3BvdmVyLCB2KX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7b3BlbkRlZi50eXBlID09PSAncmFuZ2Utc2xpZGVyJyAmJiAoXG4gICAgICAgICAgICAgIDxSYW5nZVNsaWRlckNvbnRlbnQgZGVmPXtvcGVuRGVmIGFzIGFueX0gdmFsdWU9e2ZpbHRlcnNbb3BlblBvcG92ZXJdLnZhbHVlIGFzIFtudW1iZXIsIG51bWJlcl19XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3YgPT4gdXBkYXRlRmlsdGVyVmFsdWUob3BlblBvcG92ZXIsIHYpfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC10cmVlLXBsYW50aW5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnYXV0bycsIGJhY2tncm91bmQ6ICcjMmIyYjJiJywgY29sb3I6ICcjZWVlJyB9fT5cbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXSAmJiAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXYpID0+IHNldEppbXVNYXBWaWV3KGptdil9IC8+XG4gICAgICApfVxuICAgICAge3Byb3BzLnVzZURhdGFTb3VyY2VzPy5bMF0gJiYgKFxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudCB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlc1swXX0gb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlRHNDcmVhdGVkfSAvPlxuICAgICAgKX1cblxuICAgICAgey8qIEZpbHRlciBiYXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItYmFyJyBzdHlsZT17eyBtYXJnaW46IDAsIGJvcmRlclJhZGl1czogMCB9fT5cbiAgICAgICAge0ZJTFRFUl9ERUZJTklUSU9OUy5tYXAoZGVmID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZSA9IGZpbHRlcnNbZGVmLmZpZWxkXVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17ZGVmLmZpZWxkfVxuICAgICAgICAgICAgICByZWY9e2VsID0+IHsgaWNvblJlZnMuY3VycmVudFtkZWYuZmllbGRdID0gZWwgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29tcGFjdC1maWx0ZXItaWNvbiAke3N0YXRlPy5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBoYW5kbGVJY29uQ2xpY2soZGVmLmZpZWxkKSB9fVxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZU1vdXNlRW50ZXIoZGVmLmZpZWxkKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfT5cbiAgICAgICAgICAgICAgPEZpbHRlckljb25JbWcgZGVmPXtkZWZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSZXNldCBidXR0b24gKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICc0cHggMTBweCAwJyB9fT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldEZpbHRlcnMoY3JlYXRlSW5pdGlhbEZpbHRlcnMoKSk7IHNldE9wZW5Qb3BvdmVyKG51bGwpOyBzZXRQb3BvdmVyUG9zKG51bGwpIH19XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogJyNhYWEnLCBiYWNrZ3JvdW5kOiAnbm9uZScsIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JywgYm9yZGVyUmFkaXVzOiAzLCBwYWRkaW5nOiAnMnB4IDEwcHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICBSZXNldCBGaWx0ZXJzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBJbnN0cnVjdGlvbiArIHNlZ21lbnQgY291bnQgKyBjYWxjdWxhdG9yICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDEwcHgnIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udFN0eWxlOiAnaXRhbGljJywgY29sb3I6ICcjYmJiJywgbGluZUhlaWdodDogMS40LCBtYXJnaW5Cb3R0b206IDQgfX0+XG4gICAgICAgICAgVXNpbmcgdGhlIGFib3ZlIGJ1dHRvbnMsIGZpbHRlciBvdXQgc3RyZWV0cyB0aGF0IGRvIG5vdCByZXF1aXJlIHBsYW50aW5nIChieSBkZWZhdWx0LCBhbGwgdGhlIGNpdHkncyBzdHJlZXRzIGFyZSBjb25zaWRlcmVkKS4gTmV4dCwgY2hvb3NlIHRoZSB0YXJnZXQgY2FsY3VsYXRpb24gbWV0aG9kLCBjaGFuZ2UgdGhlIGNhbGN1bGF0aW9uIHBhcmFtZXRlcnMgYXMgeW91IHdpc2gsIGFuZCBwcmVzcyBDYWxjdWxhdGUuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjNGZjM2Y3JywgbWFyZ2luQm90dG9tOiA2IH19PntzZWdtZW50Q291bnR9PC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAxNSwgbWFyZ2luQm90dG9tOiA0IH19PkNhbGN1bGF0aW9uIE1ldGhvZDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyIH19PlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY3Vyc29yOiAncG9pbnRlcicgfX0+PFJhZGlvIGNoZWNrZWQ9e3NjZW5hcmlvID09PSAnczEnfSBvbkNoYW5nZT17KCkgPT4gc2V0U2NlbmFyaW8oJ3MxJyl9IC8+IE1ldGhvZCAxOiBUYXJnZXQgVHJlZSBDYW5vcHkgQ292ZXIgUmF0aW8gKFRDQ1IpPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDIwLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDIgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogMTEsIGN1cnNvcjogJ3BvaW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzY2VuYXJpbyA9PT0gJ3MxJyAmJiBzdWJTY2VuYXJpbyA9PT0gJzFhJ30gb25DaGFuZ2U9eygpID0+IHsgc2V0U2NlbmFyaW8oJ3MxJyk7IHNldFN1YlNjZW5hcmlvKCcxYScpIH19IHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNCwgbWFyZ2luUmlnaHQ6IDYsIGFjY2VudENvbG9yOiAnIzAwNzljMScgfX0gLz5cbiAgICAgICAgICAgICAgICAxYTogR2xvYmFsXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogMTEsIGN1cnNvcjogJ3BvaW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzY2VuYXJpbyA9PT0gJ3MxJyAmJiBzdWJTY2VuYXJpbyA9PT0gJzFiJ30gb25DaGFuZ2U9eygpID0+IHsgc2V0U2NlbmFyaW8oJ3MxJyk7IHNldFN1YlNjZW5hcmlvKCcxYicpIH19IHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNCwgbWFyZ2luUmlnaHQ6IDYsIGFjY2VudENvbG9yOiAnIzAwNzljMScgfX0gLz5cbiAgICAgICAgICAgICAgICAxYjogQnkgc3RyZWV0IHdpZHRoXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6IDIgfX0+PFJhZGlvIGNoZWNrZWQ9e3NjZW5hcmlvID09PSAnczInfSBvbkNoYW5nZT17KCkgPT4gc2V0U2NlbmFyaW8oJ3MyJyl9IC8+IE1ldGhvZCAyOiBGaXhlZCBTcGFjaW5nPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYsIHBhZGRpbmc6IDgsIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JywgYm9yZGVyUmFkaXVzOiA0IH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogMTUsIG1hcmdpbkJvdHRvbTogNCB9fT5DYWxjdWxhdGlvbiBQYXJhbWV0ZXJzPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgbWFyZ2luQm90dG9tOiAyIH19PkNyb3duIGRpYW1ldGVyIChtKTwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e1N0cmluZyhkaWFtZXRlcil9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGlhbWV0ZXIoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICc0cHggNnB4JywgYmFja2dyb3VuZDogJyMzYTNhM2EnLCBib3JkZXI6ICcxcHggc29saWQgIzU1NScsIGJvcmRlclJhZGl1czogMywgY29sb3I6ICcjZWVlJywgZm9udFNpemU6IDEyIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3NjZW5hcmlvID09PSAnczEnICYmIHN1YlNjZW5hcmlvID09PSAnMWEnICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0IH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgbWFyZ2luQm90dG9tOiAyIH19Pkdsb2JhbCB0YXJnZXQgVENDUiAoMC4wIC0gMS4wKTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17U3RyaW5nKHRjY3JHbG9iYWwpfSBvbkNoYW5nZT17KGUpID0+IHNldFRjY3JHbG9iYWwoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzRweCA2cHgnLCBiYWNrZ3JvdW5kOiAnIzNhM2EzYScsIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JywgYm9yZGVyUmFkaXVzOiAzLCBjb2xvcjogJyNlZWUnLCBmb250U2l6ZTogMTIgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NjZW5hcmlvID09PSAnczEnICYmIHN1YlNjZW5hcmlvID09PSAnMWInICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogNiwgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLCBib3JkZXJSYWRpdXM6IDMsIGZvbnRTaXplOiAxMSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbkJvdHRvbTogNCB9fT5UQ0NSIHRhcmdldHMgYnkgc3RyZWV0IHdpZHRoOjwvZGl2PlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXMod3R5cGVUYXJnZXRzKS5zb3J0KCkubWFwKGlkID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbTogMiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntDQVRFR09SWV9MQUJFTFNbaWRdIHx8IGBDbGFzcyAke2lkfWB9Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtTdHJpbmcod3R5cGVUYXJnZXRzW2lkXSl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0V3R5cGVUYXJnZXRzKHsuLi53dHlwZVRhcmdldHMsIFtpZF06IE51bWJlcihlLnRhcmdldC52YWx1ZSl9KX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwLCBwYWRkaW5nOiAnMnB4IDRweCcsIGJhY2tncm91bmQ6ICcjM2EzYTNhJywgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLCBib3JkZXJSYWRpdXM6IDMsIGNvbG9yOiAnI2VlZScsIGZvbnRTaXplOiAxMSwgdGV4dEFsaWduOiAncmlnaHQnIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2NlbmFyaW8gPT09ICdzMicgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBtYXJnaW5Cb3R0b206IDIgfX0+RGVzaXJlZCBTcGFjaW5nIChtKTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17U3RyaW5nKHNwYWNpbmcpfSBvbkNoYW5nZT17KGUpID0+IHNldFNwYWNpbmcoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzRweCA2cHgnLCBiYWNrZ3JvdW5kOiAnIzNhM2EzYScsIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JywgYm9yZGVyUmFkaXVzOiAzLCBjb2xvcjogJyNlZWUnLCBmb250U2l6ZTogMTIgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25Db21wdXRlfSBkaXNhYmxlZD17IWRzSWQgfHwgbG9hZGluZ31cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnOHB4JywgYmFja2dyb3VuZDogbG9hZGluZyA/ICcjNTU1JyA6ICcjNGE5MGQ5JywgY29sb3I6ICcjZmZmJywgYm9yZGVyOiAnbm9uZScsIGJvcmRlclJhZGl1czogNCwgZm9udFNpemU6IDEzLCBjdXJzb3I6IGxvYWRpbmcgPyAnZGVmYXVsdCcgOiAncG9pbnRlcicsIG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgICB7bG9hZGluZyA/ICdQcm9jZXNzaW5nLi4uJyA6ICdDYWxjdWxhdGUnfVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7cmVzdWx0cyAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxMCwgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLCBib3JkZXJSYWRpdXM6IDQsIGJhY2tncm91bmQ6ICcjMzMzJyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzU1NScsIG1hcmdpbkJvdHRvbTogNiwgcGFkZGluZ0JvdHRvbTogNCwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsIGZvbnRTaXplOiAxMSB9fT5SZXN1bHRzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZm9udFNpemU6IDExIH19PjxzcGFuPlNlbGVjdGVkIHNlZ21lbnRzOjwvc3Bhbj48c3Ryb25nPntmbXRJbnQocmVzdWx0cy5zZWdtZW50Q291bnQpfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGZvbnRTaXplOiAxMSB9fT48c3Bhbj5Ub3RhbCBzdHJlZXQgbGVuZ3RoOjwvc3Bhbj48c3Ryb25nPntmbXRJbnQocmVzdWx0cy50b3RhbExlbmd0aCl9IG08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBmb250U2l6ZTogMTEsIG1hcmdpblRvcDogNCB9fT48c3Bhbj5JZGVhbCB0cmVlczo8L3NwYW4+PHN0cm9uZz57Zm10SW50KHJlc3VsdHMudG90YWxUcmVlcyl9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZm9udFNpemU6IDExIH19PjxzcGFuPkV4aXN0aW5nIHNoYWRlIHRyZWVzOjwvc3Bhbj48c3Ryb25nPntmbXRJbnQocmVzdWx0cy50b3RhbEV4aXN0aW5nU2hhZGUpfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGZvbnRTaXplOiAxMSB9fT48c3Bhbj5VbmRlcmRldmVsb3BlZCB0cmVlczo8L3NwYW4+PHN0cm9uZz57Zm10SW50KHJlc3VsdHMudG90YWxFeGlzdGluZ1VuZGVyKX08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6ICdib2xkJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICM1NTUnLCBwYWRkaW5nQm90dG9tOiA0LCBtYXJnaW5Cb3R0b206IDQgfX0+PHNwYW4+TmV3IHRyZWVzIHRvIHBsYW50Ojwvc3Bhbj48c3Ryb25nPntmbXRJbnQocmVzdWx0cy50cmVlc1RvQWRkKX08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBmb250U2l6ZTogMTEgfX0+PHNwYW4+V2VpZ2h0ZWQgVENDUjo8L3NwYW4+PHN0cm9uZz57Zm9ybWF0TnVtKHJlc3VsdHMuYXZnVGNjcil9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZm9udFNpemU6IDExLCBtYXJnaW5Cb3R0b206IDggfX0+PHNwYW4+QXZnLiBTcGFjaW5nOjwvc3Bhbj48c3Ryb25nPntmbXRJbnQocmVzdWx0cy5hdmdTcGFjaW5nKX0gbTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA4IH19PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNzdkRvd25sb2FkfSBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiAnNHB4IDhweCcsIGJhY2tncm91bmQ6ICcjNGE0YTRhJywgY29sb3I6ICcjZWVlJywgYm9yZGVyOiAnMXB4IHNvbGlkICM2NjYnLCBib3JkZXJSYWRpdXM6IDMsIGZvbnRTaXplOiAxMSwgY3Vyc29yOiAncG9pbnRlcicgfX0+RXhwb3J0IENTVjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBkZlJlcG9ydH0gc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogJzRweCA4cHgnLCBiYWNrZ3JvdW5kOiAnIzRhNGE0YScsIGNvbG9yOiAnI2VlZScsIGJvcmRlcjogJzFweCBzb2xpZCAjNjY2JywgYm9yZGVyUmFkaXVzOiAzLCBmb250U2l6ZTogMTEsIGN1cnNvcjogJ3BvaW50ZXInIH19PlByaW50IFBERjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjNTU1JywgbWFyZ2luQm90dG9tOiA0LCBmb250U2l6ZTogMTEsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19PkFuYWx5c2lzIGJ5IHdpZHRoOjwvZGl2PlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocmVzdWx0cy5ieVd0eXBlKS5zb3J0KCkubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzQ0NCcsIHBhZGRpbmdCb3R0b206IDQsIG1hcmdpbkJvdHRvbTogNCwgZm9udFNpemU6IDExIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGNvbG9yOiAnIzRmYzNmNycgfX0+e0NBVEVHT1JZX0xBQkVMU1trXSB8fCBgQ2xhc3MgJHtrfWB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWRkIDxzdHJvbmc+e2ZtdEludChyZXN1bHRzLmJ5V3R5cGVba10udHJlZXNUb0FkZCl9PC9zdHJvbmc+IHRyZWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UQ0NSOiB7Zm9ybWF0TnVtKHJlc3VsdHMuYnlXdHlwZVtrXS50Y2NyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjODg4JywgZm9udFNpemU6IDEwIH19PlNwYWNpbmc6IHtmbXRJbnQocmVzdWx0cy5ieVd0eXBlW2tdLnNwYWNpbmcpfSBtIHwgTGVuZ3RoOiB7Zm10SW50KHJlc3VsdHMuYnlXdHlwZVtrXS5sZW5ndGgpfSBtPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAge1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChwb3J0YWxDb250ZW50LCBkb2N1bWVudC5ib2R5KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==