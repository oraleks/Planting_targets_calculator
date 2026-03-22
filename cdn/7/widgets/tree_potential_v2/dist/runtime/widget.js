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
const formatNum = (x, d = 2) => (!isFinite(Number(x)) ? '0' : Number(x).toFixed(d));
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
      <p style="margin:5px 0;"><strong>Total number of selected streets segments:</strong> ${results.segmentCount} | <strong>Total street length:</strong> ${formatNum(results.totalLength, 1)} m</p>
      <div class="section-title">Chosen Method:</div><p style="margin:2px 0;">${methodDesc}<br/><span style="color:#666;">Parameters: ${paramSummary}</span></p>
      <div class="map-container"><img class="map-img" src="${screenshot.dataUrl}"></div>
      <h2>Results Summary</h2><table><tr><th>Metric</th><th>Value</th></tr>
      <tr><td>Ideal number of trees</td><td>${results.totalTrees}</td></tr>
      <tr><td>Existing shade trees</td><td>${results.totalExistingShade}</td></tr>
      <tr><td>Existing underdeveloped trees</td><td>${results.totalExistingUnder}</td></tr>
      <tr style="font-weight:bold;"><td>New trees to plant</td><td>${results.treesToAdd}</td></tr>
      <tr><td>Average TCCR</td><td>${formatNum(results.avgTccr)}</td></tr>
      <tr><td>Average spacing</td><td>${formatNum(results.avgSpacing)} m</td></tr></table>
      <h2>Results by street width</h2><table><tr><th>Width</th><th>Trees to Add</th><th>TCCR</th><th>Spacing (m)</th><th>Length (m)</th></tr>
      ${Object.keys(results.byWtype).sort().map(k => { const g = results.byWtype[k]; return `<tr><td>${CATEGORY_LABELS[k] || k}</td><td>${g.treesToAdd}</td><td>${formatNum(g.tccr)}</td><td>${formatNum(g.spacing, 1)}</td><td>${formatNum(g.length, 1)}</td></tr>`; }).join('')}</table>
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
                }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { textAlign: 'center', padding: '4px 10px 0' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => { setFilters(createInitialFilters()); setOpenPopover(null); setPopoverPos(null); }, style: { fontSize: 10, color: '#aaa', background: 'none', border: '1px solid #555', borderRadius: 3, padding: '2px 10px', cursor: 'pointer' }, children: "Reset Filters" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: '8px 10px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 12, fontStyle: 'italic', color: '#bbb', lineHeight: 1.4, marginBottom: 4 }, children: "Using the above buttons, filter out streets that do not require planting (by default, all the city's streets are considered). Next, choose the target calculation method, change the calculation parameters as you wish, and press Calculate." }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 12, color: '#4fc3f7', marginBottom: 6 }, children: segmentCount }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 6 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 }, children: "Calculation Method" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { fontSize: 12, cursor: 'pointer' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Radio, { checked: scenario === 's1', onChange: () => setScenario('s1') }), " Method 1: Target Tree Canopy Cover Ratio (TCCR)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 2 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: scenario === 's1' && subScenario === '1a', onChange: () => { setScenario('s1'); setSubScenario('1a'); }, style: { width: 14, height: 14, marginRight: 6, accentColor: '#0079c1' } }), "1a: Global"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: scenario === 's1' && subScenario === '1b', onChange: () => { setScenario('s1'); setSubScenario('1b'); }, style: { width: 14, height: 14, marginRight: 6, accentColor: '#0079c1' } }), "1b: By street width"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { fontSize: 12, cursor: 'pointer', marginTop: 2 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Radio, { checked: scenario === 's2', onChange: () => setScenario('s2') }), " Method 2: Fixed Spacing"] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 6, padding: 8, border: '1px solid #555', borderRadius: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 }, children: "Calculation Parameters" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 11, marginBottom: 2 }, children: "Crown diameter (m)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: String(diameter), onChange: (e) => setDiameter(Number(e.target.value)), style: { width: '100%', padding: '4px 6px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 12 } })] }), scenario === 's1' && subScenario === '1a' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 11, marginBottom: 2 }, children: "Global target TCCR (0.0 - 1.0)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: String(tccrGlobal), onChange: (e) => setTccrGlobal(Number(e.target.value)), style: { width: '100%', padding: '4px 6px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 12 } })] })), scenario === 's1' && subScenario === '1b' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: 6, border: '1px solid #555', borderRadius: 3, fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', marginBottom: 4 }, children: "TCCR targets by street width:" }), Object.keys(wtypeTargets).sort().map(id => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [CATEGORY_LABELS[id] || `Class ${id}`, ":"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: String(wtypeTargets[id]), onChange: (e) => setWtypeTargets(Object.assign(Object.assign({}, wtypeTargets), { [id]: Number(e.target.value) })), style: { width: 60, padding: '2px 4px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 11, textAlign: 'right' } })] }, id)))] })), scenario === 's2' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 11, marginBottom: 2 }, children: "Desired Spacing (m)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: String(spacing), onChange: (e) => setSpacing(Number(e.target.value)), style: { width: '100%', padding: '4px 6px', background: '#3a3a3a', border: '1px solid #555', borderRadius: 3, color: '#eee', fontSize: 12 } })] }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: onCompute, disabled: !dsId || loading, style: { width: '100%', padding: '8px', background: loading ? '#555' : '#4a90d9', color: '#fff', border: 'none', borderRadius: 4, fontSize: 13, cursor: loading ? 'default' : 'pointer', marginBottom: 8 }, children: loading ? 'Processing...' : 'Calculate' }), results && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: 10, border: '1px solid #555', borderRadius: 4, background: '#333' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', borderBottom: '1px solid #555', marginBottom: 6, paddingBottom: 4, textTransform: 'uppercase', fontSize: 11 }, children: "Results" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Selected segments:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: results.segmentCount })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Total street length:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: [formatNum(results.totalLength, 1), " m"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11, marginTop: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Ideal trees:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: results.totalTrees })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Existing shade trees:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: results.totalExistingShade })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Underdeveloped trees:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: results.totalExistingUnder })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 'bold', borderBottom: '1px solid #555', paddingBottom: 4, marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "New trees to plant:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: results.treesToAdd })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Weighted TCCR:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: formatNum(results.avgTccr) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Avg. Spacing:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: [formatNum(results.avgSpacing), " m"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: 6, marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handleCsvDownload, style: { flex: 1, padding: '4px 8px', background: '#4a4a4a', color: '#eee', border: '1px solid #666', borderRadius: 3, fontSize: 11, cursor: 'pointer' }, children: "Export CSV" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handlePdfReport, style: { flex: 1, padding: '4px 8px', background: '#4a4a4a', color: '#eee', border: '1px solid #666', borderRadius: 3, fontSize: 11, cursor: 'pointer' }, children: "Print PDF" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', borderBottom: '1px solid #555', marginBottom: 4, fontSize: 11, textTransform: 'uppercase' }, children: "Analysis by width:" }), Object.keys(results.byWtype).sort().map(k => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { borderBottom: '1px solid #444', paddingBottom: 4, marginBottom: 4, fontSize: 11 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 'bold', color: '#4fc3f7' }, children: CATEGORY_LABELS[k] || `Class ${k}` }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["Add ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: results.byWtype[k].treesToAdd }), " trees"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["TCCR: ", formatNum(results.byWtype[k].tccr)] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { color: '#888', fontSize: 10 }, children: ["Spacing: ", formatNum(results.byWtype[k].spacing, 1), " m | Length: ", formatNum(results.byWtype[k].length, 1), " m"] })] }, k)))] })] }))] }), react_dom__WEBPACK_IMPORTED_MODULE_4__.createPortal(portalContent, document.body)] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90cmVlX3BvdGVudGlhbF92Mi9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlJQUF5SSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdB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LFdBQVcsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsYUFDL0UsNEVBQU8sS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxhQUN0RiwyRUFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxRQUFRLEtBQUssSUFBSSxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFJLGtCQUU5TSxFQUNSLDRFQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsYUFDdEYsMkVBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsUUFBUSxLQUFLLElBQUksSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBSSwyQkFFOU0sSUFDSixFQUNOLDRFQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGFBQUUsZ0VBQUMsMENBQUssSUFBQyxPQUFPLEVBQUUsUUFBUSxLQUFLLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFJLGdDQUFnQyxJQUNySyxJQUNGLEVBRU4sMEVBQUssS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGFBQ3BGLHlFQUFLLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLHVDQUE4QixFQUMvRiwwRUFBSyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGFBQzdCLHlFQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxtQ0FBMEIsRUFDdkUsMkVBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzlGLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFJLElBQzdJLEVBQ0wsUUFBUSxLQUFLLElBQUksSUFBSSxXQUFXLEtBQUssSUFBSSxJQUFJLENBQzVDLDBFQUFLLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxD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cmVlX3BvdGVudGlhbF92Mi9zcmMvcnVudGltZS9zdHlsZS5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdHJlZV9wb3RlbnRpYWxfdjIvc3JjL3J1bnRpbWUvc3R5bGUuc2Nzcz9hZTBjIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RyZWVfcG90ZW50aWFsX3YyL3NyYy9maWx0ZXItZGVmaW5pdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0LWRvbVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90cmVlX3BvdGVudGlhbF92Mi9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiA9PT09PT09PT09PT09PT09PT09PT0gRklMVEVSIEJBUiBTVFlMRVMgPT09PT09PT09PT09PT09PT09PT09ICovXG4uY29tcGFjdC1maWx0ZXItYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDNweDtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIDAuOSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb21wYWN0LWZpbHRlci1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMS41cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMsIGJvcmRlci1jb2xvciAwLjE1cztcbiAgY29sb3I6ICNjY2M7XG59XG4uY29tcGFjdC1maWx0ZXItaWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG4uY29tcGFjdC1maWx0ZXItaWNvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMSwgMTkzLCAwLjMpO1xuICBib3JkZXItY29sb3I6ICMwMDc5YzE7XG4gIGNvbG9yOiAjNGZjM2Y3O1xufVxuLmNvbXBhY3QtZmlsdGVyLWljb24gaW1nLCAuY29tcGFjdC1maWx0ZXItaWNvbiBzdmcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jb21wYWN0LWZpbHRlci1pY29uIGltZyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMC44KTtcbn1cbi5jb21wYWN0LWZpbHRlci1pY29uLmFjdGl2ZSBpbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDAuNykgc2VwaWEoMSkgc2F0dXJhdGUoNSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY29tcGFjdC1maWx0ZXItdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjk1KTtcbiAgY29sb3I6ICNlZWU7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMTAwMDE7XG59XG5cbi5jb21wYWN0LWZpbHRlci1wb3BvdmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIDAuOTUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgbWluLXdpZHRoOiAyMjBweDtcbiAgei1pbmRleDogMTAwMDA7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmNvbXBhY3QtZmlsdGVyLXBvcG92ZXItdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5jb21wYWN0LWZpbHRlci1zbGlkZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jb21wYWN0LWZpbHRlci1zbGlkZXIge1xuICBmbGV4OiAxO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb21wYWN0LWZpbHRlci1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDc5YzE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb21wYWN0LWZpbHRlci1zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDc5YzE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY29tcGFjdC1maWx0ZXItdmFsdWUge1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4uY29tcGFjdC1maWx0ZXItcmFuZ2Utcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmNvbXBhY3QtZmlsdGVyLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90cmVlX3BvdGVudGlhbF92Mi9zcmMvcnVudGltZS9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLGtFQUFBO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7QUFERjtBQUdFO0VBQ0UscUNBQUE7QUFESjtBQUlFO0VBQ0Usa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUhKO0FBTUU7RUFDRSxpQ0FBQTtBQUpKO0FBT0U7RUFDRSx5RUFBQTtBQUxKOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBTkY7O0FBU0E7RUFDRSxPQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFORjtBQVFFO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTko7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUEo7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQVJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi8qID09PT09PT09PT09PT09PT09PT09PSBGSUxURVIgQkFSIFNUWUxFUyA9PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uY29tcGFjdC1maWx0ZXItYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAzcHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIDAuOSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb21wYWN0LWZpbHRlci1pY29uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMsIGJvcmRlci1jb2xvciAwLjE1cztcXG4gIGNvbG9yOiAjY2NjO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICB9XFxuXFxuICAmLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTIxLCAxOTMsIDAuMyk7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwNzljMTtcXG4gICAgY29sb3I6ICM0ZmMzZjc7XFxuICB9XFxuXFxuICBpbWcsIHN2ZyB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgwLjgpO1xcbiAgfVxcblxcbiAgJi5hY3RpdmUgaW1nIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgwLjcpIHNlcGlhKDEpIHNhdHVyYXRlKDUpIGh1ZS1yb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmNvbXBhY3QtZmlsdGVyLXRvb2x0aXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjk1KTtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDEwMDAxO1xcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItcG9wb3ZlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIDAuOTUpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIG1pbi13aWR0aDogMjIwcHg7XFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItcG9wb3Zlci10aXRsZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5jb21wYWN0LWZpbHRlci1zbGlkZXItcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jb21wYWN0LWZpbHRlci1zbGlkZXIge1xcbiAgZmxleDogMTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogIzAwNzljMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgJjo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgIHdpZHRoOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogIzAwNzljMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxufVxcblxcbi5jb21wYWN0LWZpbHRlci12YWx1ZSB7XFxuICBtaW4td2lkdGg6IDM1cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcXG59XFxuXFxuLmNvbXBhY3QtZmlsdGVyLXJhbmdlLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB0eXBlIEZpbHRlclR5cGUgPSAnc2xpZGVyJyB8ICdyYW5nZS1zbGlkZXInIHwgJ211bHRpLXNlbGVjdCdcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJGaWx0ZXJEZWYge1xuICB0eXBlOiAnc2xpZGVyJ1xuICBmaWVsZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBvcGVyYXRvcjogJzwnIHwgJz4nXG4gIG1pbjogbnVtYmVyXG4gIG1heDogbnVtYmVyXG4gIHN0ZXA6IG51bWJlclxuICBkZWZhdWx0VmFsdWU6IG51bWJlclxuICB1bml0Pzogc3RyaW5nXG4gIGljb25UeXBlOiAnc3ZnJyB8ICdwbmcnXG4gIGljb25Tdmc/OiBzdHJpbmdcbiAgaWNvblBuZz86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBicmVha3M/OiBudW1iZXJbXSAgLy8gSmVua3MgbmF0dXJhbCBicmVha3MgZm9yIG5vbi1saW5lYXIgc2xpZGVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VTbGlkZXJGaWx0ZXJEZWYge1xuICB0eXBlOiAncmFuZ2Utc2xpZGVyJ1xuICBmaWVsZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBtaW46IG51bWJlclxuICBtYXg6IG51bWJlclxuICBzdGVwOiBudW1iZXJcbiAgZGVmYXVsdFZhbHVlOiBbbnVtYmVyLCBudW1iZXJdXG4gIHVuaXQ/OiBzdHJpbmdcbiAgaWNvblR5cGU6ICdzdmcnIHwgJ3BuZydcbiAgaWNvblN2Zz86IHN0cmluZ1xuICBpY29uUG5nPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlTZWxlY3RGaWx0ZXJEZWYge1xuICB0eXBlOiAnbXVsdGktc2VsZWN0J1xuICBmaWVsZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBvcHRpb25zOiBudW1iZXJbXVxuICBkZWZhdWx0VmFsdWU6IG51bWJlcltdXG4gIGljb25UeXBlOiAnc3ZnJyB8ICdwbmcnXG4gIGljb25Tdmc/OiBzdHJpbmdcbiAgaWNvblBuZz86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBGaWx0ZXJEZWYgPSBTbGlkZXJGaWx0ZXJEZWYgfCBSYW5nZVNsaWRlckZpbHRlckRlZiB8IE11bHRpU2VsZWN0RmlsdGVyRGVmXG5cbi8vIC0tLSBTVkcgaWNvbnMgLS0tXG5cbmNvbnN0IHN1blN2ZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTdcIj48ZyBjbGlwLXBhdGg9XCJ1cmwoI2EpXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMTIuMTUzIDYuMDU0LS43MDctLjcwNyAyLjItMi4yLjcwOC43MDd6bS05LjUwNyA4LjA5Mi43MDcuNzA3IDIuMi0yLjItLjcwNi0uNzA3em04LjgtMS40OTMgMi4yIDIuMi43MDctLjcwNi0yLjItMi4yek01LjU1NCA1LjM0N2wtMi4yLTIuMi0uNzA3LjcwNiAyLjIgMi4yek05IDEuNUg4djNoMXptLTEgMTVoMXYtM0g4em04LTd2LTFoLTN2MXptLTE1IDBoM3YtMUgxek01IDlhMy41IDMuNSAwIDEgMSA3IDAgMy41IDMuNSAwIDAgMS03IDBtMSAwYTIuNSAyLjUgMCAxIDAgNSAwIDIuNSAyLjUgMCAwIDAtNSAwXCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9XCJhXCI+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTAgLjVoMTZ2MTZIMHpcIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+J1xuXG5jb25zdCBwZWRlc3RyaWFuU3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48bGluZSB4MT1cIjFcIiB5MT1cIjNcIiB4Mj1cIjE1XCIgeTI9XCIzXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjxsaW5lIHgxPVwiMVwiIHkxPVwiOFwiIHgyPVwiMTVcIiB5Mj1cIjhcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIi8+PGxpbmUgeDE9XCIxXCIgeTE9XCIxM1wiIHgyPVwiMTVcIiB5Mj1cIjEzXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjxsaW5lIHgxPVwiM1wiIHkxPVwiMVwiIHgyPVwiM1wiIHkyPVwiMTVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIi8+PGxpbmUgeDE9XCI4XCIgeTE9XCIxXCIgeDI9XCI4XCIgeTI9XCIxNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjIuMlwiLz48bGluZSB4MT1cIjEzXCIgeTE9XCIxXCIgeDI9XCIxM1wiIHkyPVwiMTVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIi8+PC9zdmc+J1xuXG5jb25zdCBjYXJTdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxsaW5lIHgxPVwiMVwiIHkxPVwiM1wiIHgyPVwiMTVcIiB5Mj1cIjNcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIi8+PGxpbmUgeDE9XCIxXCIgeTE9XCI4XCIgeDI9XCIxNVwiIHkyPVwiOFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjAuNVwiLz48bGluZSB4MT1cIjFcIiB5MT1cIjEzXCIgeDI9XCIxNVwiIHkyPVwiMTNcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIi8+PGxpbmUgeDE9XCIzXCIgeTE9XCIxXCIgeDI9XCIzXCIgeTI9XCIxNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjAuNVwiLz48bGluZSB4MT1cIjhcIiB5MT1cIjFcIiB4Mj1cIjhcIiB5Mj1cIjE1XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMy41XCIvPjxsaW5lIHgxPVwiOFwiIHkxPVwiMVwiIHgyPVwiOFwiIHkyPVwiMTVcIiBzdHJva2U9XCJyZ2JhKDAsMCwwLDAuOSlcIiBzdHJva2Utd2lkdGg9XCIwLjhcIiBzdHJva2UtZGFzaGFycmF5PVwiMiAxLjVcIi8+PGxpbmUgeDE9XCIxM1wiIHkxPVwiMVwiIHgyPVwiMTNcIiB5Mj1cIjE1XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIvPjwvc3ZnPidcblxuY29uc3QgYnVpbGRpbmdzU3ZnID0gJzxpbWcgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FZQUFBQlhBdm1IQUFBQlJrbEVRVlI0QWV4VjBRN0RJQWpjOXYvL3ZCcVRlL0FDVVFoRXF5NnREbnBjUGM3WTMrZmx2eXRndG9GSE9mQXYzZmJjcFN6dk9zb0J0UEZiL296Y0JaWi9iZW1BdHMrOTdkVDR2UGxtSFZzNkFJWGFQc2Z6M3F6VmUvUGkrN1oyUUZTOFd2SW9CM3FuQnN5SnhvRlhuSTl5QUIzZ1V3UjVucU54ekYvakl4Mm95bGNaam5TQVR4bk5qR2ljK0I2REEyTDk5S1JGQUo4cUhFTU01em0yNG9BWFo0c0FrV0IyMGlLQTl6VEgwTUo1anEwNDRNWFpJa0FrbUozMENORDJOR3VKeGpGL2pUMENhdUVxd3hVdzJ3bVBBOXFwd2xxaWNjeGZZNCtBV3JqS1lCSEFwd3JIME1SNWpxMDQ0TVhaSWtBa21KM01FTUI3bitOUXpSa0NRaGZZSThzVW9PMzkzcHBNenpNRm1CYmlCVjhCM3M1RjFWMEhvanJwNWNseHdMc2FSOTBXQXJRdkplZEg0MTRmUjNrWUI5NG12NFVEL01XTWl0RXh6Rkc4RGMvckhYZ0FBQUQvLzgrdVNKTUFBQUFHU1VSQlZBTUFJZnVjWWZBOHE5d0FBQUFBU1VWT1JLNUNZSUk9XCIgc3R5bGU9XCJ3aWR0aDoxOHB4O2hlaWdodDoxOHB4O2ZpbHRlcjpicmlnaHRuZXNzKDApIGludmVydCgwLjgpO1wiIC8+J1xuXG5jb25zdCBzaG9wcGluZ1N2ZyA9ICc8aW1nIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZ0FBQUFJQUNBWUFBQUQwZU5UNkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBTXFBQUFES2dCdDA0ZzFnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQ0FBU1VSQlZIaWM3ZDE1dUcxblhSL3c3NzI1Z1pBRUVvWXdXY0psS0FIS1VHSVRzQVlpODZCUWkwQXBRNmtXbEE2aXRLRHl0R2lsNnFQV3RpS1BBMHFoVUN3b1JZUmlRb1JBVVVRR29US0ZFQ0JjQXNHUUFNa2xJUUdUbTlzLzNydHpUMjdPV1dmdmZkYjhmajdQc3g0VTdsbjcvZTNwOTkxcnZldGRDUUFBQUFBQUFBQXdCN3RhM05lVGt1eHRjWDhBd0kzdFMvSzJObmJVWmdBNE84bmpXdHdmQUhCajcwankrRFoydEx1Tm5RQUEweUlBQUVDRkJBQUFxSkFBQUFBVkVnQUFvRUlDQUFCVVNBQUFnQW9KQUFCUUlRRUFBQ29rQUFCQWhRUUFBS2lRQUFBQUZSSUFBS0JDQWdBQVZFZ0FBSUFLQ1FBQVVLRTlMZTdyNGlTZmEzRi9BTUNOWFR6MEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVlOcDI3ZkR2ejBseXp6WUdNZ00va3VTOUxlem5PVWwrdG9YOXRPbVJTZmExc0orZlRhbHZUTzdSMG41ZW5lVE1sdmJWaG4wcHIxc2J6azJ5dDZWOXRlRzlLWiszTm55K3BmMjA1YlZKWHRiQ2Z2YW12RzVqOHJLVStuYnF6SlRQRzhubmtqeDIzVC9lczRNSFBqM0pZM2J3OTNOemJFdjdPU0hKM1Z2YVYxdU9ibWsvdDgzNGFtdkxIVE91Mmc2MHVLKzdaRnkxZmFiRmZZMnBycVI4UnRwd2RNWlgyd2t0N2VmWWpLKzJvZHc5eVdsSlByek9IKy9ld1FQLzZBNytGZ0RZdWJWNzhib0I0SlpKbnJidWd3SUFyZmluU1c2MXpoK3VHd0NlbFJJQ0FJRGhISmZrR2V2ODRib0I0SGxyL2gwQTBLNS91YzRmclJNQVRrL3lvSFVlREFCbzNRTlNKZ091WkowQVlQSWZBSXpMeXIxNTFRQmc4aDhBak0vS2t3RlhEUUFtL3dIQStLdzhHWERWQUdEeUh3Q00wMHFUQVZjSkFDYi9BY0I0clRRWmNKVUFZUElmQUl6YjByMTYyUUJnOGg4QWpOL1Nrd0dYRFFEUGpzbC9BREIyeHlWNTVqTC9jTmtBOE56MXh3SUE5T2o1eS95alpRS0F5WDhBTUIxTFRRWmNKZ0NZL0FjQTA3SnQ3OTR1QUpqOEJ3RFRzKzFrd08wQ2dNbC9BREE5MjA0RzNDNEFtUHdIQU5QVU9CbXdLUUNZL0FjQTA5VTRHYkFwQUpqOEJ3RFR0bVV2M3lvQW1Qd0hBTk8zNVdUQXJRS0F5WDhBTUgxYlRnYmNLZ0NZL0FjQTg3RHBaTUROQXNDRFkvSWZBTXpGQTFJbTl0L0laZ0hnZWQyUEJRRG8wVTE2KzVFQndPUS9BSmlmbTB3R1BESUFtUHdIQVBOems4bUFSd1lBay84QVlKNXVOQmx3WXdBdytROEE1dXRHa3dFM0JnQ1Qvd0JnM203bzlZc0FZUElmQU16ZkRaTUJGd0hBNUQ4QW1MOGJKZ011QW9ESmZ3QlFoK2NuSlFDNDdXODdEZzQ5QUlBSytLN2R1UWNrT1gxMzNQYTNMVmNQUFFDQUNsd3o5QUJtNG5tN2t6eDI2RkhNeEpWRER3Q2dBcjVyMi9HNDNVbStQUFFvWnNLYkVxQjdWdzA5Z0puNDR1NGtGd3c5aXBtNGZPZ0JBRlRBZDIwN1Byczd5V2VISHNVTVhKN2s2ME1QQXFBQ2x5WFpQL1FnWnVDQzNVbitmT2hSek1CbmhoNEFRRVVjdWQ2NVA5dWQ1SDFKdmpIMFNDWk9BQURvaisvY25mbEdrZy9zVG5JZ3lUc0hIc3pVZlhUb0FRQlU1Q05ERDJEaTNwSGt3R0lsd0RjTk9aSVplUGZRQXdDb2lPL2NuWGxUY25ncDREOU9jdUZ3WTVtMFM1TjhhdWhCQUZUa0UwbStOdlFnSnVvTFNmNVBjamdBSEVqeW00TU5aOXJlRlV0VEF2VHBZSkp6aHg3RVJMMDhwZWZmRUFDUzVMOG51V0tRNFV6Ykc0Y2VBRUNGM2pEMEFDYm9HMGxldmZoL05nYUEvVWwrcnZmaFROdGxLWk1wQU9qWFdYRWFZRlV2ellaVmEzY2Y4VC8rVnNxNUZaYnp4aVRYRGowSWdBcGRHMGRnVi9HeEpLL2MrRjhjR1FDdVMvTGpjVTU3R2VaTkFBenJONU5jUC9RZ0p1QmdTbTgvc1BHL1BESUFKTWw3ay96WFBrWTBjZjg3RnFNQUdOTDVTZDQ4OUNBbTRGZXp5YXEvbXdXQUpQbVpKTy92ZERqVGRqREpMdzA5Q0FEeWkzSFV1c2tIVTg3OTM4UldBZUM2Sk0rTXV5NXQ1UTFKUGo3MElBREl4NUw4d2RDREdLbXZKM2xhdHBpcnRsVUFTSko5U1o2UTVPcjJ4elJwMzB6eTRnNzMvN2NkN250ZDMybHBQMk9ycmEyNkVyWDFTVzNiRzF0ZFNidXYyNUZlR0hjSVBOSTFTWDR3eVVWYi9ZT21BSkFrSDBqeTlKUWpBaFF2VGZLVkR2ZC81ZmIvcEhkdGplbXFsdmJUbGphZjZ6blhOcmIzcE5yNjIwK2J2dG5odmk5Sjh2TWQ3bjlxRGlSNVZzck4vcmEwWFFCSXlwS0IvenJPc1NSbEVzVnZkZndZWCtwNC82dTZNdTB0RURXMjJyWk14bXVZYzIxZmJuRmZiVkRiOWk3UCtFSnBtNi9iWmw2UjVDODZmb3dwT0pqa3g1TDgwWGIvY0prQWtDUy9tK1NmcGU0akFkOUk4dXgwL3h5YzMvSCtWM1YrMmd0L24yNXBQMjFwODdsV1czL1V0cjJER2Q5VlNsMlA1N3FVSTlZMUx3NTBJTWx6VTFiMjNkYXlBU0JKWHAva3lVbSt2Y2FncHU1Z2toOU84c1VlSHV2U0pKL3Q0WEdXZFpOTFIzYmdveW5ucGNhaThmRFlpc2IyeTBOdHl4bFRiVmNuK2VzVzl6ZW0yajZkZmhyemwxTityTlo0eFBvN0tSUCtYcjNkUDl5Smg2ZThrQWNyMmw3WXlqTzN2RmUwT1BhZGJvOXJ1YmF6UjFEVFlydEh5N1Y5YmdRMUhVdzU5SHVMRnVzNkxzbTNSbERYd2JUL0svSmVJNmhwc2IyOTVkcStmd1ExTGJaZmI3bTI3YnlveGJGUFlic3N5Wm10UEhOTHVFdkt0WVZERjkzSDlzc3RQV2VyK0o0ZGpMZk43YXRKam02NXRtZVBvSzZES1JOYzIvYnpJNmpyWUpMLzJVRnR2eitDdWc2bW0vdVZmR2dFZFIxTThveVc2OXFUTWpsdTZMb09Kam05NWRxVzhaOTNNTjRwYlI5TmNyZVduck9sM1NMSi85akJvS2V3dlNySnJwYWVyMVY5ZE1reGRybjlRZ2QxM1NJbFdBeGQyM002cU8za2xNTndROWYyRHp1bzdZd1IxUFdkbEI4ZmJmdmhFZFQyTjJuM3FNM0NMNDJndHIvcW9LNWw3RW81Rno1MC9WMXVyMGx5VEZ0UDJEcWVtbkw0WWVnbm91M3Q1Vmx0amtUYmZtaUxjZlcxZlRQSjdUcXE3YWNIcnUxektiK091dkI3QTlmMnJvN3FTcEwzREZ6YjczUlUxOUZKdmpCd2JmK3VvOXB1bjNKS2FNamEvbEZIdFMxalY1TC91TW1ZcHI1OUk4bVB0dmMwN2N3ZGtyd2x3ejhwYld3SDB2ODUvNjJjbStHZWgzL2JZVjAzVHptWE8xUnRUK3l3dGp1a1hJSTFSRjNYSm5sZ2g3WGQvOUJqREZIYkZVbnUxR0Z0VHg2b3JvTkpMa2o1VEhSbHlNRDl6ZzdyV3NXTFVtNGFOTlR6ME9iMjVwUmdOenBQU1hKaGhuK0MxdDB1VGZ1VDNuYmlYaW0veFB0K0hqNlE5cy85SCtuN1VpN2I2YnUyTjNSY1Y1TDh5QUIxSFV6eW4zcW9iYWhEeXMvcG9iWS9IS0N1YTVNOHRPTzZqczR3OHh6Mko3bG54N1d0NGdtWjl0SHF6eWY1eDYwL0t5MjdXWktmU0hueGgzN0NWdGsrbUdSdiswL0hqajA5L1NiWHk1TGN0WmZLa24vZlUwMkw3ZndrdCtxbHN2N254NXliNUtnZTZ0cVQvazhGTEhWTmN3dE9TUDlIcG42bWw4cktKTEUrcjk2NlB1WDA4Tmo4blpSTG0vdDhqWGU2WFpWeUdtUFFjLzJydW1PUy81TGh6ejl0dCsxUENTeGRuUk51dzArbHZ6ZmFnM3VxYWVHVkxZMTl1KzNpOUJ2d2JwYmtuSlpyMkdyN1dKSVQreWtyT2ZSWUgrK2dqczIyczlQOTBhaU43cGF5MUhjZnRmMTJUelV0UENUOWZSKy9xS2VhMXJFbnlVOW0vRDlTcjB5NWt1RU8zVHdOL2JoZGtwZWxURm9ZK2duZHVGMmZjbWxUbCtjVjIvU0NsUGtKWFQwZjMwanl2YjFWYzlpdUpMKzJ4bmhYMlM1TU9aM1N0NXNuZWRNYTQxMWwrMUNTay9vcWFJUGJwQ3cwMDJWdGIwMDNNK08zYy9lVXhiaTZyTzBWR1dhUzhlbnA5akQ0OWVuMlptbHR1blBLS2NHeHpRMzRlc292L3R0MFZ2a0Fqa2s1SlBUT0RQdUVIMGk1djhGM2QxdHVKMzR3M1FTcGoyYjRjM1gvS21XVnliWnJPeWZETk1pRlBTbm56YnNJYjY5SmNteC9wZHpFY1VsZXU4bTQydmlNL2tMNk9hV3hsZHNuK2RPMFg5czFTWjdmWXgyYnVWZktpb050MS9iMUpFL3FzWTYyM0QvSjZ6TE1uS1NOMjErbHpPdy9ydHR5aC9mM1VnNXRkSjJ5TjI2WEp2bU5KS2YwVUYrWFRrNTdWMXhjazdKNHpWak9MZDAvWlpuWE5tcTdQT1VtVmtOZXlyblI5eVU1TCszVTlxV1V5MFRINHFrcFM3QzJVZHNua3p5czMrRnZhWGVTZjVOeUJVSWJ0ZjFaa3Z2MVdzSFdqa21aTk5wVzZINXp1bG1qb1UvM1Rqa3kwK2RFd2M4aytaVWs5KzJodmxHNmI4cEVtUCtiOXBjYi9XcktZZjRucHQvemlIMDRNK1VYeWpwSFU2NU91YXZoWFhzZjlmWjJwY3gwWFhmVzh1VXB2eDY3V3NOZ0o0NU91VUpnM1lsbUY2ZGNuam5HWHdqSHA1ejN2VGpyMVhaK3lvSThZL3ljbnBSeUZHZmR5enMvbUhJdC9GQ0xpalhabTdLK3d0Vlp2YTdyVTQ2d2RYMFZROStPVGptUzhiL1MvcUpsVjZWTW92M3BsTUF4cUxHOUlmY2tlVkRLVXJoL1ArV3c5RDJ6M0huNnkxT3VwejAvNVpEMnU1TjhLdVZKSDhLeEtjL3Z0enArbkxzbCtTZEpIcFV5eVdlcjVuQkp5aStRczFOdUU5bmx2Ym5iY3YrVW0xczhJdVdVelZiWFN1OUxDWkJ2VC9JbkdmOE5xM2Fsck5iMzVKVGE3cGZOSjZGZW4vS2Vmay9LK2ZCM3BSd2VIN09qa2p3NjVRdjA0U21IbXpjN0NuTmRraytrZkU3L0tNbGZacmpQNnJLT1NmSURoN1l6cy9XazB1OGsrVWpLbFJsL21ISlVZK3hPU0hrL1BpN2xDTXdkdC9oM1Y2VUVtbmNtK1lPVXoxNlhqc3ZoSHkxRDJKWHkrWHhFU20rNmQ4cDcrdFpML08xWFVoWWQrM3pLS1pmM0gvclAwZHhWZDJ3QllDdkhwcndoajA5NVF4eVhjdjNzVlNtTi81c1oxeTBnajA0NVRQK1pkTGZDMTFaT1RwazFla0pLczdnaTVVTjZlYy9qYU50UktWKzRKNlc4RDY1TnFla0xLYk5scCt6b2xJbG50MDE1cjM4NzVYWDdYTVlmWnJaelRFcUl2M1ZLZ0xzNjVWenhoU212NFpUZE1pV0EzenJsTmJ3cTVWVGpGelArb0xhZDI2UWNJVHd4NWJPM1ArVkh4SmQ2SHNkL1N6bGwvTVNVWURVV3QwdjVqajB4NWZ2bzZKUWZlOTlLZVI5Y2t1RkNDd002S3NrYlUxTHJkVWxPSFhZNEFKUDB3QnhlZWZJdEdmZWwycERkdWVrQ01CL09zTE9aQWFibXFKUlo4UnUvUzErVDZSeTFwakkzeTlhM1RQMnBBY2NGTURVdnllYmZwYTlQK2E2RjBUZytaWExkVmpNL3IwdnkrTUZHQnpBZGowN3pOZm5ucHI4bHZhSFJIVk5tL0c1MytjZlhrOXhqb0RIMlljNkg1dVpjMjF6TitUV2JjMjMzekhLTG5YMGtFMThpbCtuNzNwUlpzY3RlQS9xSmxKbkRjL1A0bEV2VmpoOTZJQjE0WHNweW9XTlpVSWp0SFpYeW1qMXY2SUYwNFBpVXo5b2NqeWplS3VXU3lXVy9UeTlLdVp3V2VyVXI1UVpDMzhucUMwRjhPUE5hNC9sUktTc0tMZzdORGJGMmUxZWVsY05MK0pxQU5BMjdjdmdHVXdlU1BIUFk0YlRxRmluckpoeE11VHgwVGlIZ2hKVHI1RmY5UHIwMlpkMThBWjFlM0M1bFVaYWRyQVkxbHhCd1ptNjZldU9mWk9zRmU2YmtLVGw4Q2RKaSsvVUlBV08yTzJXNTd5TWJ4Sk9ISEZSTGprbHlWbTY2cXR3Y1Z1RzdiWlk3amRxMC9mR2gvVUJubnBteTBNZE8zcWlMN2E4ejdYTllQNVN0YnkzNnZneDdBNTZkZW1HMm5vVDArekVMZVl4dWxzUHJieHk1WFpkeXhHNnFicCt0ZngxZm1iSjA5bFRkTWUzZFd2cXJTWjdSNy9DcHdkNDB6L0pmZC90U2hya0Y3MDdzVHJtSnlIYjNJTGd3WlFXdktUazZodzhmTjIzdnlqanZOVkNyazFKT1AyMzN1djEycHJlWXpQMVNWcnRzcXV2NmxKdDZUZTB3K0JscDd5WlNHN2V6TXM3N25EQlJiZDNGYmJQdGIxT1dDNTdDb2VVVFVtNmx2R3h0K3pPZGM3QjdrN3czeTlmMjVjemo4T3ZVblpuVmJrRDBua3luT1R3NzVUTzBiRzF2elRRdWo5dVY1TVc1NlNtMk5yZnplcXVHMmJzZzNiMVJGOXZiTXU3YmFUNGw2OS9wN1MwWjcrbU9YVWwrTE9WK0VxdldkVzJTbDJVOHQxT3V5UzJTL0dMV3U0ZjcvcFFyQk1ZYXV1K1ljazU3bmMvYWx6UHVVd0ozeVdvL0l0YmRMdWlySU9hdmp3QndNT1djK24vSXVCcktYVlB1c3JmVDJpNUw4aTh5cm1XUjc1ZHlWN00ydm13ZTNmUFltK3hLdWFOYld4NldjVFhMeDZUY0tHbW5yOXM1R2RkcHFqMUpucHR5WTdPZDF2YldsQnVEamNVdGtydzA3ZC95WFFDZ2MzMEZnTVYyWWNvdGZvZHNsdCtWNU5leTlVUy9kYmRQcHh4TkdMS2gzQzNKNjNMNEVyKzJ0ck9Tbk41akhadDVlSklQcE4wdndBc083ZlBNRnZlNWpvZWsvYms0MXlWNWJiYSt0VzhmZGlWNWFzcXR6TnVzN2Nva3Y1cmt6djJWY2hON2tqdzkyODlqYUhzVEFHaE4zd0Znc2UxTE9WZTJ6TDJuMjNLdkpLL0tlbXNjckxKOU5PV0lRSitMQjMxUHl2WDhYZGQyVnNvMTJuMU55am82SlREK3hZWXh0QjBBRnZ2OTh5UlBTMytUNlk1Szh2MUozcEZ1WDdQdkpIbDFTc2pveS9FcHYvai9YNHQxYkxaOU84bnZKdm03L1pTVnBIeG52VGpsMXNoRGZIY0tBTFJtcUFDdzJLNUs4bnRKZmlEZExMUnpseVEvbVhMNVh0dS9pcmZiOWlmNW5aUUpkVjAwbFpPVHZDQmxGY2ErWDdkOVNYNHV5ZjA3cUd0WHl0R0dYOG5tTTZtN0NnQ0w3VXRKZmpuSmFlbm1hTTREVXhaNEdhS0JmRHpKajZlYk9UbDdVazZwdkRMcnpUdlp5WFlnSmNEOVJFZTFIWnZ5SGZXcXRIL2tjTlZOQUZqQ21NN3JMWnlVOG92bWIxSmV5SFhjSm1VaVRWc3pRUzlJdittNXlUVXBxNEdkbGZJcityeVVMNUpWM0RYSlAwankzVWtla2RKSXh2QmUySjl5T2RjNVNUNlVja2owMnl2dTQ2NHA1L1lmbGVTeFNlN1Q1Z0IzWUYvS2EvYitsTm9XNTdCWGNhK1VwVS9QU0psejBIU085N09IL24wYnRudi9mekZsTHNYN1V1cjc3SXI3MzNWby82ZW4xUGVFakdlbS9ua3A3OGR6VTBMa1JTdisvVEZKN3Aza3dTbHpGeDZaY2pYTjBBNG0rV0RLZDhsSFVtNjl1MnB0dDBweTN5U25wcnhtajhoNFZnSnQ4LzEvM3lTWHBOeWpZQjI3a3R3cFpkTHdaUzJOcVJWaitOSS8wZ3VTdkR6bGtOd1hEMjJYcEV3ZTJaK1NMTCtkY21qd1ZrbU9PN1NkbFBLbGNiZVVEMWlmWDRCRHV5amxpK3FpbElEdzdTU1hIL3JmYnBseXpmcEpoLzd6UHBuT0lqMEhVczRkbnA4U0NMK1pjbDd6NnBURDY3ZE9lUStja1BMNjNEdlR1ZGZDRlNselBTNUtlWTlmbmZMK1hqZ3g1UkR4ZDZYY1JPb2VLZS96WlEzNS92OVdrcytuaEp5dnBIeG1yOWp3djUrUThtdnhyam44bVQyeGxaRjI3OHFVOStNRktlL0hiNlo4MXE1UHFlbVdLZS9KTzZWODF2Wm1YQk5mbTF5V01rZm5hNGYrNzYrbDFKdVV6OW94S1EzKzVKU21PS1pKaGtmcTR2Mi9QNGMvczVlbWZHYS9sZkllT0pEeS9CeWY4djQrTHVWSDZPSTlmdk9VSXkrLzBkS1lXakhtUlRGdW52SUN0dlVpenRuSkdmZUhjVjFIcGR3ZDdKNURENlFESjZiOGNqcDE2SUYwNExna0R6aTB6YzB0VTA1N25EYjBRRHB3VXFiejQyQUlKeVI1MEtGdEZxYTJjaFFBMEFJQkFBQXFKQUFBUUlVRUFBQ29rQUFBQUJVU0FBQ2dRZ0lBQUZSSUFBQ0FDZ2tBQUZBaEFRQUFLaVFBQUVDRkJBQUFxSkFBQUFBVkVnQUFvRUlDQUFCVVNBQUFnQW9KQUFCUUlRRUFBQ29rQUFCQWhRUUFBS2lRQUFBQUZSSUFBS0JDQWdBQVZFZ0FBSUFLQ1FBQVVDRUJBQUFxSkFBQVFJVUVBQUNva0FBQUFCVVNBQUNnUWdJQUFGUklBQUNBQ2drQUFGQWhBUUFBS2lRQUFFQ0ZCQUFBcUpBQUFBQVZFZ0FBb0VJQ0FBQlVTQUFBZ0FvSkFBQlFJUUVBQUNva0FBQkFoUVFBQUtpUUFBQUFGUklBQUtCQ0FnQUFWRWdBQUlBS0NRQUFVQ0VCQUFBcUpBQUFRSVVFQUFDb2tBQUFBQlVTQUFDZ1FnSUFBRlJJQUdEcTlpVTViK2hCd0loZGtlVDlRdytDOFJFQW1MS0xrand5eWNPVGZITGdzY0FZN1UveTJDU1BTdkt1Z2NmQ3lBZ0FUTlZGS1kzL3dpU1hwZ1FCSVFBTzI1L2tNVWsrbE9TYUpFK0tFTUFHQWdCVHRMSDVMd2dCY05qRzVyOGdCSEFqQWdCVHMxbnpYeEFDWVBQbXZ5QUVjQU1CZ0NscGF2NExRZ0ExYTJyK0MwSUFTUVFBcG1PWjVyK3dDQUdmNkhSRU1DN0xOUDhGSVFBQmdFbFlwZmt2Q0FIVVpKWG12eUFFVkU0QVlPeldhZjRMbDBVSVlQN1dhZjRMUWtERkJBREdiQ2ZOZjBFSVlNNTIwdndYaElCS0NRQ01WUnZOZjBFSVlJN2FhUDRMUWtDRkJBREdxTTNtdnlBRU1DZHROdjhGSWFBeUFnQmowMFh6WHhBQ21JTXVtditDRUZBUkFZQXgyWmZrekhUVC9CY3VTL0tTRHZjUFhib2l5YVBUVGZOZnVDYkpDNUljNlBBeEdBRUJnTEZZM05oblg4ZVBjMnFTMTNYOEdOQ0Z4WTE5UHR6eDQ1eWM1TzFKanVyNGNSaVlBTUFZZEhuWWY2TlRrN3d6eVcwNmZoeG9XNWVIL1RjNk9jbDdrdHk5NDhkaEJBUUFocWI1UXpQTm4wNElBQXhKODRkbW1qK2RFUUFZaXVZUHpUUi9PaVVBTUFUTkg1cHAvblJPQUtCdm1qODAwL3pwaFFCQW56Ui9hS2I1MHhzQmdMNW8vdEJNODZkWEFnQjkwUHlobWVaUDd3UUF1cWI1UXpQTm4wRUlBSFJKODRkbW1qK0RFUURvaXVZUHpUUi9CaVVBMEFYTkg1cHAvZ3hPQUtCdG1qODAwL3daQlFHQU5tbiswRXp6WnpRRUFOcWkrVU16elo5UkVRQm9nK1lQelRSL1JrY0FZS2MwZjJpbStUTktBZ0E3b2ZsRE04MmYwUklBV0pmbUQ4MDBmMFpOQUdBZG1qODAwL3daUFFHQVZXbiswRXp6WnhJRUFGYWgrVU16elovSkVBQllsdVlQelRSL0prVUFZQm1hUHpUVC9Ka2NBWUR0YVA3UVRQTm5rZ1FBbW1qKzBFenpaN0lFQUxhaStVTXp6WjlKRXdEWWpPWVB6VFIvSms4QTRFaWFQelRUL0prRkFZQ05OSDlvcHZrekd3SUFDNW8vTk5QOG1SVUJnRVR6aCsxby9zeU9BSURtRDgwMGYyWkpBS2liNWcvTk5IOW1Td0NvbCtZUHpUUi9aazBBcUpQbUQ4MDBmMlpQQUtpUDVnL05OSCtxSUFEVVJmT0hacG8vMVJBQTZxSDVRelBObjZvSUFIWFEvS0daNWs5MUJJRDUwL3lobWVaUGxRU0FlZFA4b1pubVQ3VUVnUG5TL0tHWjVrL1ZCSUI1MHZ5aG1lWlA5UVNBK2RIOG9abm1EeEVBNWtiemgyYWFQeHdpQU15SDVnL05OSC9ZUUFDWUI4MGZtbW4rY0FRQllQcjJKVGt6M1RmLzA1S2NtL0UxLzMxSnpodDZFSXphRlVrZWxlNmIvOTRrNzgzNG12OFZTZDQvOUNBWUh3RmcraTVLY21uSGozRmFrajlOY21MSGo3T3FmU2xIUGg2UjVGUEREb1VSKzJxU0wzWDhHSHRUZnZudjdmaHhWblZGeXBHUFI2Y0VlTGlCQURCOUQwdHlUcExqTzlyL3FVbmVrZkUxLzR1U1BESWxCSHcxSlFSOGNzZ0JNVnFucFB3eXYzTkgrejg1cGJudTdXai82OXFmNUxGSlBwems2aVJQVFBLdVFVZkVxQWdBODNCR2tyUFRmZ2dZNnpuL3plWThYSm9TQ0lRQU5uTktrbmVuL1JBdzFuUCttODE1dUNiSmt5SUVjSWdBTUI5dGg0QXBOZjhGSVlBbWJZZUFLVFgvQlNHQUd3Z0E4OUpXQ0poaTgxOFFBbWpTVmdpWVl2TmZFQUpJSWdETTBVNUR3SlNiLzhJaUJIeWkweEV4VlRzTkFWTnUvZ3RDQUFMQVRLMGJBdWJRL0JlRUFKcXNHd0xtMFB3WGhJREtDUUR6ZFVhU3M3SjhDSmhUODErNExFSUFXMXMxQk15cCtTOElBUlVUQU9idG9Wa3VCTXl4K1M4SUFUUlpOZ1RNc2ZrdkNBR1ZFZ0RtYjdzUU1PZm12eUFFMEdTN0VERG41cjhnQkZSSUFLakRWaUdnaHVhL0lBVFFaS3NRVUVQelh4QUNLaU1BMU9QSUVGQlQ4MThRQW1oeVpBaW9xZmt2Q0FFVkVRRHE4dEFrYjB1NWVkQlliK3pUOVkyTkxrdnlrZzczejdTZGt0TDhIcHp4M3RqbjBlbjJ4a2JYSkhsQmtnTWRQZ1lqc0dmb0FkQzdoeC9heG1aZnlyajJkZnc0cHlWNWZjZVB3YlRkSjhrSGhoN0VKaFkzOXZsd3g0K3pOK1ZvNFZFZFB3NERjd1NBTWRoNFk1OHVqZlhHUnJDZGpUZjI2ZEpZYjJ4RUJ3UUFodGJsT2YrTnhqcm5BYmJUNVRuL2pjWTY1NEdPQ0FBTVNmT0hacG8vblJFQUdJcm1EODAwZnpvbEFEQUV6UithYWY1MFRnQ2diNW8vTk5QODZZVUFRSjgwZjJpbStkTWJBWUMrYVA3UVRQT25Wd0lBZmREOG9abm1UKzhFQUxxbStVTXp6WjlCQ0FCMFNmT0hacG8vZ3hFQTZJcm1EODAwZndZbEFOQUZ6UithYWY0TVRnQ2diWm8vTk5QOEdRVUJnRFpwL3RCTTgyYzBCQURhb3ZsRE04MmZVUkVBYUlQbUQ4MDBmMFpIQUdDbk5IOW9wdmt6U2dJQU82SDVRelBObjlFU0FGaVg1Zy9OTkg5R1RRQmdIWm8vTk5QOEdUMEJnRlZwL3RCTTgyY1NCQUJXb2ZsRE04MmZ5UkFBV0pibUQ4MDBmeVpGQUdBWm1qODAwL3laSEFHQTdXaiswRXp6WjVJRUFKcG8vdEJNODJleUJBQzJvdmxETTgyZlNSTUEySXptRDgwMGZ5WlBBT0JJbWo4MDAveVpCUUdBalRSL2FLYjVNeHNDQUF1YVB6VFQvSmtWQVlCRTg0ZnRhUDdNamdDQTVnL05OSDltU1FDb20rWVB6VFIvWmtzQXFKZm1EODAwZjJaTkFLaVQ1Zy9OTkg5bVR3Q29qK1lQelRSL3FpQUExRVh6aDJhYVA5VVFBT3FoK1VNenpaK3FDQUIxMFB5aG1lWlBkUVNBK2RQOG9abm1UNVVFZ0huVC9LR1o1aysxQklENTB2eWhtZVpQMVFTQWVkTDhvWm5tVC9VRWdQblIvS0daNWc4UkFPWkc4NGRtbWo4Y0lnRE1oK1lQelRSLzJFQUFtQWZOSDVwcC9uQUVBV0Q2Tkg5b3B2bkRKZ1NBNmR1WDVKS09IK08wSk9kRzgyZWFMa255eFk0ZlkyK1M5MGJ6WjBJRWdPbDdXSkp6a2h6ZjBmNVBUZktPSkNkMnRIL28yaWtwemZuT0hlMy81SlNBdkxlai9VTW5CSUI1T0NQSjJXay9CRGpzejF5Y2t1VGRhVDhFT096UFpBa0E4OUYyQ05EOG1adTJRNERtejZRSkFQUFNWZ2pRL0ptcnRrS0E1cy9rQ1FEenM5TVFvUGt6ZHpzTkFaby9zeUFBek5PNklVRHpweGJyaGdETm45a1FBT2JyakNSblpma1FvUGxUbTFWRGdPYlByQWdBOC9iUUxCY0NOSDlxdFd3STBQeVpIUUZnL3JZTEFaby90ZHN1QkdqK3pKSUFVSWV0UW9EbUQ4VldJVUR6WjdZRWdIb2NHUUkwZjdpeEkwT0E1cytzQ1FCMVdZU0FoMFh6aDgwc1FzQkRvdmt6YzN1R0hnQzllMmpLdXVqQTVrNUo4cGRERHdLNjVnZ0FBRlJJQUFDQUNna0FBRkFoQVFBQUtpUUFBRUNGQkFBQXFKQUFBQUFWRWdBQW9FSUNBQUJVU0FBQWdBb0pBQUJRSVFFQUFDb2tBQUJBaFFRQUFLaVFBQUFBRlJJQUFLQkNBZ0FBVkVnQUFJQUtDUUFBVUNFQkFBQXFKQUFBUUlVRUFBQ29rQUFBQUJVU0FBQ2dRZ0lBQUZSSUFBQ0FDZ2tBQUZBaEFRQUFLaVFBQUVDRkJBQUFxSkFBQUFBVkVnQUFvRUlDQUFCVVNBQUFnQW9KQUFCUUlRRUFBQ29rQUFCQWhRUUFBS2lRQUFBQUZSSUFBS0JDQWdBQVZFZ0FBSUFLQ1FBQVVDRUJBQUFxSkFBQVFJVUVBQUNva0FBQUFCVVNBQUNnUWdJQUFGUklBQUNBQ2drQUFGQWhBUUFBS2lRQUFFQ0ZCQUFBcUpBQUFBQVZFZ0FBb0VJQ0FBQlVTQUFBZ0FvSkFBQlFJUUVBQUNva0FBQkFoUVFBQUtpUUFBQUFGUklBQUtCQ0FnQUFWRWdBQUlBS0NRQUFVQ0VCQUFBcUpBQUFRSVVFQUFDb2tBQUFBQlVTQUFDZ1FnSUFBRlJJQUFDQUNna0FBRkFoQVFBQUtpUUFBRUNGQkFBQXFKQUFBQUFWRWdBQW9FSUNBQUJVU0FBQWdBb0pBQUJRSVFFQUFDb2tBQUJBaFFRQUFLaVFBQUFBRlJJQUFLQkNBZ0FBVkVnQUFJQUtDUUFBVUNFQkFBQXFKQUFBUUlVRUFBQ29rQUFBQUJVU0FBQ2dRZ0lBQUZSSUFBQ0FDZ2tBQUZBaEFRQUFLaVFBQUVDRkJBQUFxTkNlb1Fld2liY2tPYStGL1Z6ZHdqNFcvbm1TWTF2Y0gzVE4rNSthamZIOS81a1c5Z0VBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQzBiVmVMKzNwU2tyMHQ3ZzhBdUxGOVNkN1dGNCtaYlFBQUFRNUpSRUZVeG83YURBQm5KM2xjaS9zREFHN3NIVWtlMzhhT2RyZXhFd0JnV2dRQUFLaVFBQUFBRlJJQUFLQkNBZ0FBVkVnQUFJQUtDUUFBVUNFQkFBQXFKQUFBUUlVRUFBQ29rQUFBQUJVU0FBQ2dRZ0lBQUZSSUFBQ0FDZ2tBQUZBaEFRQUFLclNueFgxZG5PUnpMZTRQQUxpeGk0Y2VBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFUTnV1Sko4ZGVoQUFRTDkySlRrNDlDQUFnSDd0SG5vQUFFRC9CQUFBcUpBQUFBQVZFZ0FBb0VJQ0FBQlVTQUFBZ0FvSkFBQlFJUUVBQUNva0FBQkFoUVFBQUtpUUFBQUFGUklBQUtCQ0FnQUFWRWdBQUlBS0NRQUFVQ0VCQUFBcXRDdkpDNFllQkFBQUFBQUFBQUFBQUxDNi93K1Badzg4UTZ2SWhRQUFBQUJKUlU1RXJrSmdnZz09XCIgc3R5bGU9XCJ3aWR0aDoxOHB4O2hlaWdodDoxOHB4O2ZpbHRlcjpicmlnaHRuZXNzKDApIGludmVydCgwLjgpO1wiIC8+J1xuXG5jb25zdCBtZWFzdXJlU3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm0xNS4xOCAzLjg5LTIuODUgMi44NS0uNzEtLjcgMS42MS0xLjY1SDl2LTFoNC4zMmwtMS43LTEuNjkuNzEtLjd6TTAgMTQuMzl2LTZoMTZ2NnptMTQtM2gxdi0ySDF2NGgxdi0yaDF2Mmgxdi0zaDF2M2gxdi0yaDF2Mmgxdi0zaDF2M2gxdi0yaDF2Mmgxdi0zaDF2M2gxem0tNy04SDIuNjhsMS43LTEuNjUtLjcxLS43TC44MiAzLjg5bDIuODUgMi44NS43MS0uNy0xLjYxLTEuNjVIN3pcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPidcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9ERUZJTklUSU9OUzogRmlsdGVyRGVmW10gPSBbXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdzdW1tZXJfU0knLCBuYW1lOiAnU2hhZGUgSW5kZXgnLFxuICAgIG9wZXJhdG9yOiAnPCcsIG1pbjogMCwgbWF4OiAxLCBzdGVwOiAwLjA1LCBkZWZhdWx0VmFsdWU6IDAuNCxcbiAgICBpY29uVHlwZTogJ3N2ZycsIGljb25Tdmc6IHN1blN2ZyxcbiAgICBkZXNjcmlwdGlvbjogJ1NwcmluZy9TdW1tZXIgU2hhZGUgSW5kZXgnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdBQncya19tYXgnLCBuYW1lOiAnTmVpZ2hib3VyaG9vZCB0cmFuc2l0JyxcbiAgICBvcGVyYXRvcjogJz4nLCBtaW46IDAsIG1heDogNjIwNzA4LCBzdGVwOiAxLCBkZWZhdWx0VmFsdWU6IDk1MjE4LFxuICAgIGljb25UeXBlOiAnc3ZnJywgaWNvblN2ZzogcGVkZXN0cmlhblN2ZyxcbiAgICBkZXNjcmlwdGlvbjogJ0JldHdlZW5uZXNzIGNlbnRyYWxpdHkgYXQgMmttIHNjYWxlIChoaWdoZXIgPSBtb3JlIGNvbm5lY3RlZCBuZWlnaGJvdXJob29kKScsXG4gICAgYnJlYWtzOiBbMCwgMTI1NDMsIDM0OTM3LCA2MzQwNCwgOTUyMTgsIDEzMTA5MiwgMTcxOTI0LCAyMjM2MDAsIDI5NzM5MSwgNDE0NzMzLCA2MjA3MDhdXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdBQnc1a19tYXgnLCBuYW1lOiAnQ2l0eSB0cmFuc2l0JyxcbiAgICBvcGVyYXRvcjogJz4nLCBtaW46IDAsIG1heDogOTExNTg1MSwgc3RlcDogMSwgZGVmYXVsdFZhbHVlOiAxMTgxNzY2LFxuICAgIGljb25UeXBlOiAnc3ZnJywgaWNvblN2ZzogY2FyU3ZnLFxuICAgIGRlc2NyaXB0aW9uOiAnQmV0d2Vlbm5lc3MgY2VudHJhbGl0eSBhdCA1a20gc2NhbGUgKGhpZ2hlciA9IG1vcmUgY29ubmVjdGVkIGNpdHktd2lkZSknLFxuICAgIGJyZWFrczogWzAsIDEyODMxNSwgMzcyOTkwLCA3MjQ1MzgsIDExODE3NjYsIDE3NTU2MTEsIDI0NjYyODcsIDMzNDAzNzEsIDQ0MTM3MTIsIDU4NDczMTMsIDkxMTU4NTFdXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdBSXcxa0hfbWVhJywgbmFtZTogJ0xvY2FsIGNlbnRlcnMnLFxuICAgIG9wZXJhdG9yOiAnPicsIG1pbjogMCwgbWF4OiA0OTUsIHN0ZXA6IDEsIGRlZmF1bHRWYWx1ZTogMTI0LFxuICAgIGljb25UeXBlOiAncG5nJywgaWNvblBuZzogJ3dhbGtpbmcucG5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Nsb3NlbmVzcyBjZW50cmFsaXR5IGF0IDFrbSBzY2FsZSAoaGlnaGVyID0gY2xvc2VyIHRvIGxvY2FsIGNlbnRlcnMpJyxcbiAgICBicmVha3M6IFswLCAzNCwgODksIDEyNCwgMTU4LCAxOTEsIDIyNCwgMjYwLCAzMDEsIDM2MCwgNDk1XVxuICB9LFxuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnRlNJNTAwX21lYScsIG5hbWU6ICdCdWlsZGluZyBkZW5zaXR5JyxcbiAgICBvcGVyYXRvcjogJz4nLCBtaW46IDAsIG1heDogNSwgc3RlcDogMC4xLCBkZWZhdWx0VmFsdWU6IDEuNSxcbiAgICBpY29uVHlwZTogJ3N2ZycsIGljb25Tdmc6IGJ1aWxkaW5nc1N2ZyxcbiAgICBkZXNjcmlwdGlvbjogJ0Zsb29yIFNwYWNlIEluZGV4IHdpdGhpbiA1MDBtIHdhbGtpbmcgZGlzdGFuY2UnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdBUnc1MDBsbV8xJywgbmFtZTogJ0NvbW1lcmNpYWwgcHJveGltaXR5JyxcbiAgICBvcGVyYXRvcjogJz4nLCBtaW46IDAsIG1heDogMjAwLCBzdGVwOiA1LCBkZWZhdWx0VmFsdWU6IDYwLFxuICAgIGljb25UeXBlOiAnc3ZnJywgaWNvblN2Zzogc2hvcHBpbmdTdmcsXG4gICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2Ygc2hvcHMgYW5kIHJlc3RhdXJhbnRzIHdpdGhpbiA1MDBtIHdhbGtpbmcgZGlzdGFuY2UnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdBRHdzX21lYW4nLCBuYW1lOiAnU2Nob29sIHByb3hpbWl0eScsXG4gICAgb3BlcmF0b3I6ICc8JywgbWluOiAwLCBtYXg6IDEwMDAsIHN0ZXA6IDI1LCBkZWZhdWx0VmFsdWU6IDMwMCwgdW5pdDogJ20nLFxuICAgIGljb25UeXBlOiAncG5nJywgaWNvblBuZzogJ2VkdWNhdGlvbi5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnV2Fsa2luZyBkaXN0YW5jZSB0byB0aGUgY2xvc2VzdCBzY2hvb2wgb3IgcHJlc2Nob29sJ1xuICB9LFxuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnQUR3bV9tZWFuJywgbmFtZTogJ1RyYW0vbWV0cm8gcHJveGltaXR5JyxcbiAgICBvcGVyYXRvcjogJzwnLCBtaW46IDAsIG1heDogMTAwMCwgc3RlcDogMjUsIGRlZmF1bHRWYWx1ZTogMzAwLCB1bml0OiAnbScsXG4gICAgaWNvblR5cGU6ICdwbmcnLCBpY29uUG5nOiAndHJhbnNwb3J0LnBuZycsXG4gICAgZGVzY3JpcHRpb246ICdXYWxraW5nIGRpc3RhbmNlIHRvIHRoZSBjbG9zZXN0IHRyYW0sIG1ldHJvIG9yIHJhaWx3YXkgc3RhdGlvbidcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdzbGlkZXInLCBmaWVsZDogJ0FEd2J1X21lYW4nLCBuYW1lOiAnQnVzIHN0b3AgcHJveGltaXR5JyxcbiAgICBvcGVyYXRvcjogJzwnLCBtaW46IDAsIG1heDogMTAwMCwgc3RlcDogMjUsIGRlZmF1bHRWYWx1ZTogMzAwLCB1bml0OiAnbScsXG4gICAgaWNvblR5cGU6ICdwbmcnLCBpY29uUG5nOiAnYnVzLnBuZycsXG4gICAgZGVzY3JpcHRpb246ICdXYWxraW5nIGRpc3RhbmNlIHRvIHRoZSBjbG9zZXN0IGJ1cyBzdG9wJ1xuICB9LFxuICB7XG4gICAgdHlwZTogJ3JhbmdlLXNsaWRlcicsIGZpZWxkOiAnd2lkdGgnLCBuYW1lOiAnU3RyZWV0IHdpZHRoJyxcbiAgICBtaW46IDAsIG1heDogNjAsIHN0ZXA6IDEsIGRlZmF1bHRWYWx1ZTogWzIwLCAzMF0gYXMgW251bWJlciwgbnVtYmVyXSwgdW5pdDogJ20nLFxuICAgIGljb25UeXBlOiAnc3ZnJywgaWNvblN2ZzogbWVhc3VyZVN2ZyxcbiAgICBkZXNjcmlwdGlvbjogJ1N0cmVldCB3aWR0aCBpbiBtZXRlcnMnXG4gIH1cbl1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgRGF0YVNvdXJjZU1hbmFnZXIsIERhdGFTb3VyY2VDb21wb25lbnQsIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEJ1dHRvbiwgUmFkaW8sIFRleHRJbnB1dCwgTGFiZWwgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBGSUxURVJfREVGSU5JVElPTlMsIHR5cGUgRmlsdGVyRGVmIH0gZnJvbSAnLi4vZmlsdGVyLWRlZmluaXRpb25zJ1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9ID0gUmVhY3RcblxuLy8gPT09PT09PT09PT09PT09PT09PT09IENPTlNUQU5UUyA9PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgQ0FURUdPUllfTEFCRUxTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnMSc6ICc8MTBtJywgJzInOiAnMTAtMjBtJywgJzMnOiAnMjAtMzBtJywgJzQnOiAnNDBtJywgJzUnOiAnPjQwbSdcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09IEZJTFRFUiBUWVBFUyA9PT09PT09PT09PT09PT09PT09PT1cblxuaW50ZXJmYWNlIEZpbHRlclN0YXRlIHtcbiAgYWN0aXZlOiBib29sZWFuXG4gIHZhbHVlOiBudW1iZXIgfCBbbnVtYmVyLCBudW1iZXJdIHwgbnVtYmVyW11cbn1cblxudHlwZSBGaWx0ZXJzTWFwID0gUmVjb3JkPHN0cmluZywgRmlsdGVyU3RhdGU+XG5cbi8vID09PT09PT09PT09PT09PT09PT09PSBGSUxURVIgU1FMID09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBidWlsZENsYXVzZSAoZGVmOiBGaWx0ZXJEZWYsIHN0YXRlOiBGaWx0ZXJTdGF0ZSk6IHN0cmluZyB7XG4gIHN3aXRjaCAoZGVmLnR5cGUpIHtcbiAgICBjYXNlICdzbGlkZXInOlxuICAgICAgcmV0dXJuIGAke2RlZi5maWVsZH0gJHtkZWYub3BlcmF0b3J9ICR7c3RhdGUudmFsdWV9YFxuICAgIGNhc2UgJ3JhbmdlLXNsaWRlcic6IHtcbiAgICAgIGNvbnN0IFtsbywgaGldID0gc3RhdGUudmFsdWUgYXMgW251bWJlciwgbnVtYmVyXVxuICAgICAgcmV0dXJuIGAke2RlZi5maWVsZH0gQkVUV0VFTiAke2xvfSBBTkQgJHtoaX1gXG4gICAgfVxuICAgIGNhc2UgJ211bHRpLXNlbGVjdCc6IHtcbiAgICAgIGNvbnN0IHZhbHMgPSBzdGF0ZS52YWx1ZSBhcyBudW1iZXJbXVxuICAgICAgcmV0dXJuIHZhbHMubGVuZ3RoID4gMCA/IGAke2RlZi5maWVsZH0gSU4gKCR7dmFscy5qb2luKCcsJyl9KWAgOiAnMT0wJ1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZENvbWJpbmVkU3FsIChmaWx0ZXJzOiBGaWx0ZXJzTWFwKTogc3RyaW5nIHtcbiAgY29uc3QgY2xhdXNlczogc3RyaW5nW10gPSBbXVxuICBmb3IgKGNvbnN0IGRlZiBvZiBGSUxURVJfREVGSU5JVElPTlMpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGZpbHRlcnNbZGVmLmZpZWxkXVxuICAgIGlmIChzdGF0ZT8uYWN0aXZlKSB7XG4gICAgICBjbGF1c2VzLnB1c2goYnVpbGRDbGF1c2UoZGVmLCBzdGF0ZSkpXG4gICAgfVxuICB9XG4gIHJldHVybiBjbGF1c2VzLmxlbmd0aCA+IDAgPyBjbGF1c2VzLmpvaW4oJyBBTkQgJykgOiAnMT0xJ1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbml0aWFsRmlsdGVycyAoKTogRmlsdGVyc01hcCB7XG4gIGNvbnN0IG1hcDogRmlsdGVyc01hcCA9IHt9XG4gIGZvciAoY29uc3QgZGVmIG9mIEZJTFRFUl9ERUZJTklUSU9OUykge1xuICAgIG1hcFtkZWYuZmllbGRdID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBkZWYudHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgPyBbLi4uZGVmLmRlZmF1bHRWYWx1ZV0gOiBkZWYuZGVmYXVsdFZhbHVlXG4gICAgfVxuICB9XG4gIHJldHVybiBtYXBcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09IEZJTFRFUiBVSSBDT01QT05FTlRTID09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBGaWx0ZXJJY29uSW1nICh7IGRlZiB9OiB7IGRlZjogRmlsdGVyRGVmIH0pIHtcbiAgaWYgKGRlZi5pY29uVHlwZSA9PT0gJ3N2ZycgJiYgZGVmLmljb25TdmcpIHtcbiAgICByZXR1cm4gPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZWYuaWNvblN2ZyB9fSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAxOCwgaGVpZ2h0OiAxOCB9fSAvPlxuICB9XG4gIGlmIChkZWYuaWNvblR5cGUgPT09ICdwbmcnICYmIGRlZi5pY29uUG5nKSB7XG4gICAgY29uc3QgYmFzZSA9ICh3aW5kb3cgYXMgYW55KS5qaW11Q29uZmlnPy5iYXNlVXJsIHx8ICcnXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZX13aWRnZXRzL2NvbXBhY3QtZmlsdGVyL2Rpc3QvcnVudGltZS9hc3NldHMvJHtkZWYuaWNvblBuZ31gXG4gICAgcmV0dXJuIDxpbWcgc3JjPXt1cmx9IGFsdD17ZGVmLm5hbWV9IC8+XG4gIH1cbiAgcmV0dXJuIDxzcGFuPj88L3NwYW4+XG59XG5cbmZ1bmN0aW9uIFNsaWRlckNvbnRlbnQgKHsgZGVmLCB2YWx1ZSwgb25DaGFuZ2UgfToge1xuICBkZWY6IEZpbHRlckRlZiAmIHsgdHlwZTogJ3NsaWRlcicgfSwgdmFsdWU6IG51bWJlciwgb25DaGFuZ2U6ICh2OiBudW1iZXIpID0+IHZvaWRcbn0pIHtcbiAgY29uc3QgYnJlYWtzID0gKGRlZiBhcyBhbnkpLmJyZWFrcyBhcyBudW1iZXJbXSB8IHVuZGVmaW5lZFxuXG4gIGlmIChicmVha3MgJiYgYnJlYWtzLmxlbmd0aCA+IDEpIHtcbiAgICAvLyBKZW5rcy1iYXNlZCBzbGlkZXI6IHNsaWRlciBwb3NpdGlvbiBtYXBzIHRvIGJyZWFrIGluZGV4XG4gICAgY29uc3QgY2xvc2VzdElkeCA9IGJyZWFrcy5yZWR1Y2UoKGJlc3QsIGIsIGkpID0+XG4gICAgICBNYXRoLmFicyhiIC0gdmFsdWUpIDwgTWF0aC5hYnMoYnJlYWtzW2Jlc3RdIC0gdmFsdWUpID8gaSA6IGJlc3QsIDApXG4gICAgY29uc3QgZGlzcGxheVZhbCA9IE1hdGgucm91bmQoYnJlYWtzW2Nsb3Nlc3RJZHhdKS50b0xvY2FsZVN0cmluZygpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci1zbGlkZXItcm93Jz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXZhbHVlJyBzdHlsZT17eyBtaW5XaWR0aDogMzAgfX0+TG93PC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYW5nZScgY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci1zbGlkZXInXG4gICAgICAgICAgICBtaW49ezB9IG1heD17YnJlYWtzLmxlbmd0aCAtIDF9IHN0ZXA9ezF9IHZhbHVlPXtjbG9zZXN0SWR4fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoYnJlYWtzW051bWJlcihlLnRhcmdldC52YWx1ZSldKX0gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXZhbHVlJyBzdHlsZT17eyBtaW5XaWR0aDogMzAgfX0+SGlnaDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogJyM4ODgnLCBtYXJnaW5Ub3A6IDQgfX0+XG4gICAgICAgICAge2RlZi5vcGVyYXRvciA9PT0gJzwnID8gJ0xlc3MgdGhhbicgOiAnR3JlYXRlciB0aGFuJ30ge2Rpc3BsYXlWYWx9e2RlZi51bml0IHx8ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogOSwgY29sb3I6ICcjNjY2JywgbWFyZ2luVG9wOiAyIH19PlxuICAgICAgICAgIENsYXNzIHtjbG9zZXN0SWR4ICsgMX0gb2Yge2JyZWFrcy5sZW5ndGh9IChKZW5rcyBuYXR1cmFsIGJyZWFrcylcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyBTdGFuZGFyZCBsaW5lYXIgc2xpZGVyXG4gIGNvbnN0IGRpc3BsYXlWYWwgPSBkZWYuc3RlcCA8IDEgPyB2YWx1ZS50b0ZpeGVkKDIpIDogU3RyaW5nKHZhbHVlKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItc2xpZGVyLXJvdyc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItdmFsdWUnPntkZWYubWlufTwvc3Bhbj5cbiAgICAgICAgPGlucHV0IHR5cGU9J3JhbmdlJyBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXNsaWRlcidcbiAgICAgICAgICBtaW49e2RlZi5taW59IG1heD17ZGVmLm1heH0gc3RlcD17ZGVmLnN0ZXB9IHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci12YWx1ZSc+e2Rpc3BsYXlWYWx9e2RlZi51bml0IHx8ICcnfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTAsIGNvbG9yOiAnIzg4OCcsIG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAge2RlZi5vcGVyYXRvciA9PT0gJzwnID8gJ0xlc3MgdGhhbicgOiAnR3JlYXRlciB0aGFuJ30ge2Rpc3BsYXlWYWx9e2RlZi51bml0IHx8ICcnfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gUmFuZ2VTbGlkZXJDb250ZW50ICh7IGRlZiwgdmFsdWUsIG9uQ2hhbmdlIH06IHtcbiAgZGVmOiBGaWx0ZXJEZWYgJiB7IHR5cGU6ICdyYW5nZS1zbGlkZXInIH0sIHZhbHVlOiBbbnVtYmVyLCBudW1iZXJdLCBvbkNoYW5nZTogKHY6IFtudW1iZXIsIG51bWJlcl0pID0+IHZvaWRcbn0pIHtcbiAgY29uc3QgW2xvLCBoaV0gPSB2YWx1ZVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItcmFuZ2Utcm93Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci12YWx1ZSc+e2xvfXtkZWYudW5pdCB8fCAnJ308L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzg4OCcgfX0+LTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci12YWx1ZSc+e2hpfXtkZWYudW5pdCB8fCAnJ308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0IH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgY29sb3I6ICcjODg4JywgbWFyZ2luQm90dG9tOiAyIH19Pk1pbjwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT0ncmFuZ2UnIGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItc2xpZGVyJ1xuICAgICAgICAgIG1pbj17ZGVmLm1pbn0gbWF4PXtkZWYubWF4fSBzdGVwPXtkZWYuc3RlcH0gdmFsdWU9e2xvfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgY29uc3QgdiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7IG9uQ2hhbmdlKFtNYXRoLm1pbih2LCBoaSksIGhpXSkgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTAsIGNvbG9yOiAnIzg4OCcsIG1hcmdpbkJvdHRvbTogMiB9fT5NYXg8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9J3JhbmdlJyBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXNsaWRlcidcbiAgICAgICAgICBtaW49e2RlZi5taW59IG1heD17ZGVmLm1heH0gc3RlcD17ZGVmLnN0ZXB9IHZhbHVlPXtoaX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGNvbnN0IHYgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpOyBvbkNoYW5nZShbbG8sIE1hdGgubWF4KHYsIGxvKV0pIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT0gQ0FMQ1VMQVRPUiBUWVBFUyA9PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBSZXN1bHRzID0ge1xuICB0b3RhbFRyZWVzOiBudW1iZXI7IHRvdGFsRXhpc3RpbmdTaGFkZTogbnVtYmVyOyB0b3RhbEV4aXN0aW5nVW5kZXI6IG51bWJlcjtcbiAgdHJlZXNUb0FkZDogbnVtYmVyOyB0b3RhbExlbmd0aDogbnVtYmVyOyB0b3RhbEFyZWE6IG51bWJlcjtcbiAgYXZnVGNjcjogbnVtYmVyOyBhdmdTcGFjaW5nOiBudW1iZXI7IGZpbHRlclN1bW1hcnk6IHN0cmluZ1tdO1xuICBzZWdtZW50Q291bnQ6IG51bWJlcjtcbiAgYnlXdHlwZTogUmVjb3JkPHN0cmluZywgeyB0cmVlczogbnVtYmVyOyB0cmVlc1RvQWRkOiBudW1iZXI7IGxlbmd0aDogbnVtYmVyOyBhcmVhOiBudW1iZXI7IHRjY3I6IG51bWJlcjsgc3BhY2luZzogbnVtYmVyIH0+XG59XG5cbmNvbnN0IGNhbm9weUFyZWEgPSAoZDogbnVtYmVyKSA9PiBNYXRoLlBJICogTWF0aC5wb3coZCAvIDIsIDIpXG5jb25zdCBmb3JtYXROdW0gPSAoeD86IG51bWJlciwgZCA9IDIpID0+ICghaXNGaW5pdGUoTnVtYmVyKHgpKSA/ICcwJyA6IE51bWJlcih4KS50b0ZpeGVkKGQpKVxuXG5jb25zdCB0cmFuc2xhdGVGaWx0ZXJzID0gKHNxbDogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBpZiAoIXNxbCB8fCBzcWwgPT09ICcxPTEnIHx8IHNxbCA9PT0gJ05vbmUnKSByZXR1cm4gWydBbGwgc2VnbWVudHM6J11cbiAgY29uc3QgdHJhbnNsYXRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICdzdW1tZXJfU0knOiAnU3ByaW5nL1N1bW1lciBTaGFkZSBJbmRleCcsXG4gICAgJ0FCdzJrX21heCc6ICdOZWlnaGJvdXJob29kIHRyYW5zaXQgKGJldHdlZW5uZXNzIGNlbnRyYWxpdHkgYXQgMmttIHNjYWxlKScsXG4gICAgJ0FCdzVrX21heCc6ICdDaXR5IHRyYW5zaXQgKGJldHdlZW5uZXNzIGNlbnRyYWxpdHkgYXQgNWttIHNjYWxlKScsXG4gICAgJ0FJdzFrSF9tZWEnOiAnTG9jYWwgY2VudGVycyAoY2xvc2VuZXNzIGNlbnRyYWxpdHkgYXQgMWttIHNjYWxlKScsXG4gICAgJ0ZTSTUwMF9tZWEnOiAnRmxvb3IgU3BhY2UgSW5kZXggd2l0aGluIDUwMG0gd2Fsa2luZyBkaXN0YW5jZScsXG4gICAgJ0FSdzUwMGxtXzEnOiAnTnVtYmVyIG9mIHNob3BzIGFuZCByZXN0YXVyYW50cyB3aXRoaW4gNTAwbSB3YWxraW5nIGRpc3RhbmNlJyxcbiAgICAnQUR3c19tZWFuJzogJ1dhbGtpbmcgZGlzdGFuY2UgdG8gdGhlIGNsb3Nlc3Qgc2Nob29sIG9yIHByZXNjaG9vbCcsXG4gICAgJ0FEd21fbWVhbic6ICdXYWxraW5nIGRpc3RhbmNlIHRvIHRoZSBjbG9zZXN0IHRyYW0sIG1ldHJvIG9yIHJhaWx3YXkgc3RhdGlvbicsXG4gICAgJ0FEd2J1X21lYW4nOiAnV2Fsa2luZyBkaXN0YW5jZSB0byB0aGUgY2xvc2VzdCBidXMgc3RvcCcsXG4gICAgJ3dpZHRoJzogJ1N0cmVldCB3aWR0aCdcbiAgfVxuICBsZXQgc2FmZVNxbCA9IHNxbC5yZXBsYWNlKC8oQkVUV0VFTlxccysuKj8pXFxzK0FORFxccysoLio/KS9naSwgJyQxIyNSQU5HRV9BTkQjIyQyJylcbiAgbGV0IGNvbmRpdGlvbnMgPSBzYWZlU3FsLnNwbGl0KC9cXHMrQU5EXFxzKy9naSlcbiAgcmV0dXJuIGNvbmRpdGlvbnMubWFwKChjb25kKSA9PiB7XG4gICAgbGV0IHRleHQgPSBjb25kLnRyaW0oKVxuICAgIGlmICh0ZXh0LnN0YXJ0c1dpdGgoJygnKSAmJiB0ZXh0LmVuZHNXaXRoKCcpJykpIHRleHQgPSB0ZXh0LnNsaWNlKDEsIC0xKS50cmltKClcbiAgICBPYmplY3Qua2V5cyh0cmFuc2xhdGlvbnMpLmZvckVhY2goa2V5ID0+IHsgdGV4dCA9IHRleHQuc3BsaXQoa2V5KS5qb2luKHRyYW5zbGF0aW9uc1trZXldKSB9KVxuICAgIHRleHQgPSB0ZXh0XG4gICAgICAucmVwbGFjZSgvXFxzK0JFVFdFRU5cXHMrL2dpLCAnIGlzIGJldHdlZW4gJylcbiAgICAgIC5yZXBsYWNlKC8jI1JBTkdFX0FORCMjL2csICcgYW5kICcpXG4gICAgICAucmVwbGFjZSgvPFxccyovZywgJzogbGVzcyB0aGFuICcpLnJlcGxhY2UoLz5cXHMqL2csICc6IGdyZWF0ZXIgdGhhbiAnKVxuICAgICAgLnJlcGxhY2UoLzw9XFxzKi9nLCAnOiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJykucmVwbGFjZSgvPj1cXHMqL2csICc6IGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAnKVxuICAgICAgLnJlcGxhY2UoLz1cXHMqL2csICc6IGVxdWFsIHRvICcpXG4gICAgY29uc3QgbG93ZXIgPSB0ZXh0LnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBpc0Rpc3RhbmNlRmllbGQgPSBsb3dlci5pbmNsdWRlcygnd2Fsa2luZyBkaXN0YW5jZSB0bycpIHx8IGxvd2VyLnN0YXJ0c1dpdGgoJ3N0cmVldCB3aWR0aCcpXG4gICAgaWYgKGlzRGlzdGFuY2VGaWVsZCkge1xuICAgICAgaWYgKGxvd2VyLmluY2x1ZGVzKCcgaXMgYmV0d2VlbiAnKSkge1xuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFxkKyg/OlxcLlxcZCspPylcXHMrYW5kXFxzKyhcXGQrKD86XFwuXFxkKyk/KS9pLCAnJDFtIGFuZCAkMm0nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKFxcZCsoXFwuXFxkKyk/KSQvLCAnJDFtJylcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGJ1bGxldCA9IHRleHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnNsaWNlKDEpXG4gICAgYnVsbGV0ID0gYnVsbGV0LnJlcGxhY2UoL1s6XFxzXSskLywgJycpLnRyaW0oKVxuICAgIHJldHVybiBidWxsZXQuZW5kc1dpdGgoJy4nKSA/IGJ1bGxldCA6IGJ1bGxldCArICcuJ1xuICB9KVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT0gTUFJTiBXSURHRVQgPT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICBjb25zdCBjb25maWcgPSBwcm9wcy5jb25maWcgfHwgKHt9IGFzIGFueSlcbiAgY29uc3QgeyB1c2VEYXRhU291cmNlcyB9ID0gcHJvcHNcbiAgY29uc3QgZHNJZCA9IHVzZURhdGFTb3VyY2VzPy5bMF0/LmRhdGFTb3VyY2VJZFxuXG4gIC8vIC0tLSBNYXAgc3RhdGUgLS0tXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXG5cbiAgLy8gLS0tIEZpbHRlciBzdGF0ZSAtLS1cbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGU8RmlsdGVyc01hcD4oY3JlYXRlSW5pdGlhbEZpbHRlcnMpXG4gIGNvbnN0IFtvcGVuUG9wb3Zlciwgc2V0T3BlblBvcG92ZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2hvdmVyZWRJY29uLCBzZXRIb3ZlcmVkSWNvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbcG9wb3ZlclBvcywgc2V0UG9wb3ZlclBvc10gPSB1c2VTdGF0ZTx7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFt0b29sdGlwUG9zLCBzZXRUb29sdGlwUG9zXSA9IHVzZVN0YXRlPHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHwgbnVsbD4obnVsbClcbiAgY29uc3QgcHJldlNxbFJlZiA9IHVzZVJlZjxzdHJpbmc+KCcnKVxuICBjb25zdCBpY29uUmVmcyA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBIVE1MRGl2RWxlbWVudCB8IG51bGw+Pih7fSlcbiAgY29uc3QgZHNSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICBjb25zdCBbZHNSZWFkeSwgc2V0RHNSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyAtLS0gQ2FsY3VsYXRvciBzdGF0ZSAtLS1cbiAgY29uc3QgW3NjZW5hcmlvLCBzZXRTY2VuYXJpb10gPSB1c2VTdGF0ZTwnczEnIHwgJ3MyJz4oJ3MxJylcbiAgY29uc3QgW3N1YlNjZW5hcmlvLCBzZXRTdWJTY2VuYXJpb10gPSB1c2VTdGF0ZTwnMWEnIHwgJzFiJz4oJzFhJylcbiAgY29uc3QgW2RpYW1ldGVyLCBzZXREaWFtZXRlcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDgpXG4gIGNvbnN0IFt0Y2NyR2xvYmFsLCBzZXRUY2NyR2xvYmFsXSA9IHVzZVN0YXRlPG51bWJlcj4oY29uZmlnPy5kZWZhdWx0VGNjciA/PyAwLjYpXG4gIGNvbnN0IFt3dHlwZVRhcmdldHMsIHNldFd0eXBlVGFyZ2V0c10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PihcbiAgICB7ICcxJzogMC41MCwgJzInOiAwLjQwLCAnMyc6IDAuNDAsICc0JzogMC40MCwgJzUnOiAwLjQwIH1cbiAgKVxuICBjb25zdCBbc3BhY2luZywgc2V0U3BhY2luZ10gPSB1c2VTdGF0ZTxudW1iZXI+KDI1KVxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZTxSZXN1bHRzIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3NlZ21lbnRDb3VudCwgc2V0U2VnbWVudENvdW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gIGNvbnN0IHdpZGdldElkID0gcHJvcHMuaWQgfHwgJ3dpZGdldF84MidcblxuICAvLyAtLS0gRGF0YSBzb3VyY2UgaGFuZGxpbmcgLS0tXG4gIGNvbnN0IGhhbmRsZURzQ3JlYXRlZCA9IHVzZUNhbGxiYWNrKChkczogYW55KSA9PiB7XG4gICAgZHNSZWYuY3VycmVudCA9IGRzXG4gICAgcHJldlNxbFJlZi5jdXJyZW50ID0gJydcbiAgICBzZXREc1JlYWR5KHRydWUpXG4gIH0sIFtdKVxuXG4gIC8vIC0tLSBBcHBseSBmaWx0ZXIgU1FMIC0tLVxuICBjb25zdCBhcHBseVNxbCA9IHVzZUNhbGxiYWNrKChjdXJyZW50RmlsdGVyczogRmlsdGVyc01hcCkgPT4ge1xuICAgIGNvbnN0IHNxbCA9IGJ1aWxkQ29tYmluZWRTcWwoY3VycmVudEZpbHRlcnMpXG4gICAgaWYgKHNxbCA9PT0gcHJldlNxbFJlZi5jdXJyZW50KSByZXR1cm5cbiAgICBwcmV2U3FsUmVmLmN1cnJlbnQgPSBzcWxcbiAgICBjb25zdCBkcyA9IGRzUmVmLmN1cnJlbnRcbiAgICBpZiAoIWRzKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgaWYgKGRzLnVwZGF0ZVF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGRzLnVwZGF0ZVF1ZXJ5UGFyYW1zKHsgd2hlcmU6IHNxbCB9LCB3aWRnZXRJZClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbdHJlZS1wbGFudGluZ10gRmFpbGVkIHRvIGFwcGx5IGZpbHRlcnM6JywgZSlcbiAgICB9XG4gIH0sIFt3aWRnZXRJZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZHNSZWFkeSkgYXBwbHlTcWwoZmlsdGVycylcbiAgfSwgW2ZpbHRlcnMsIGFwcGx5U3FsLCBkc1JlYWR5XSlcblxuICAvLyAtLS0gU2VnbWVudCBjb3VudCBwb2xsaW5nIC0tLVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghamltdU1hcFZpZXc/LnZpZXc/Lm1hcCkgcmV0dXJuXG4gICAgY29uc3QgdXBkYXRlQ291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5maW5kKFxuICAgICAgICAgIChsOiBhbnkpID0+IGwudGl0bGUgPT09ICdTZWxlY3RlZCBzdHJlZXRzJyAmJiBsLnR5cGUgPT09ICdmZWF0dXJlJ1xuICAgICAgICApIGFzIGFueVxuICAgICAgICBpZiAoIWxheWVyKSByZXR1cm5cbiAgICAgICAgY29uc3QgcXVlcnkgPSBsYXllci5jcmVhdGVRdWVyeSgpXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgJzE9MSdcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlQ291bnQocXVlcnkpXG4gICAgICAgIGlmICghbG9hZGluZykgc2V0U2VnbWVudENvdW50KGAke3Jlc3VsdC50b0xvY2FsZVN0cmluZygpfSBzdHJlZXQgc2VnbWVudHMgc2VsZWN0ZWQuYClcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogaWdub3JlICovIH1cbiAgICB9XG4gICAgdXBkYXRlQ291bnQoKVxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlQ291bnQsIDIwMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIH0sIFtqaW11TWFwVmlldywgbG9hZGluZ10pXG5cbiAgLy8gLS0tIEZpbHRlciBpbnRlcmFjdGlvbnMgLS0tXG4gIGNvbnN0IHVwZGF0ZUZpbHRlclZhbHVlID0gKGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICBzZXRGaWx0ZXJzKHByZXYgPT4gKHsgLi4ucHJldiwgW2ZpZWxkXTogeyAuLi5wcmV2W2ZpZWxkXSwgdmFsdWUgfSB9KSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUljb25DbGljayA9IChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBmaWx0ZXJzW2ZpZWxkXVxuICAgIGlmIChzdGF0ZT8uYWN0aXZlKSB7XG4gICAgICBjb25zdCBkZWYgPSBGSUxURVJfREVGSU5JVElPTlMuZmluZChkID0+IGQuZmllbGQgPT09IGZpZWxkKVxuICAgICAgc2V0RmlsdGVycyhwcmV2ID0+ICh7IC4uLnByZXYsIFtmaWVsZF06IHsgYWN0aXZlOiBmYWxzZSwgdmFsdWU6IGRlZj8uZGVmYXVsdFZhbHVlID8/IDAgfSB9KSlcbiAgICAgIHNldE9wZW5Qb3BvdmVyKG51bGwpOyBzZXRQb3BvdmVyUG9zKG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlcnMocHJldiA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiB7IC4uLnByZXZbZmllbGRdLCBhY3RpdmU6IHRydWUgfSB9KSlcbiAgICAgIG9wZW5Qb3BvdmVyRm9yKGZpZWxkKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9wZW5Qb3BvdmVyRm9yID0gKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpY29uRWwgPSBpY29uUmVmcy5jdXJyZW50W2ZpZWxkXVxuICAgIGlmIChpY29uRWwpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBpY29uRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHNldFBvcG92ZXJQb3MoeyB0b3A6IHJlY3QuYm90dG9tICsgNiwgbGVmdDogTWF0aC5tYXgocmVjdC5yaWdodCAtIDIyMCwgMTApIH0pXG4gICAgfVxuICAgIHNldE9wZW5Qb3BvdmVyKGZpZWxkKVxuICB9XG5cbiAgY29uc3QgY2xvc2VQb3BvdmVyID0gKCkgPT4geyBzZXRPcGVuUG9wb3ZlcihudWxsKTsgc2V0UG9wb3ZlclBvcyhudWxsKSB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0SG92ZXJlZEljb24oZmllbGQpXG4gICAgY29uc3QgaWNvbkVsID0gaWNvblJlZnMuY3VycmVudFtmaWVsZF1cbiAgICBpZiAoaWNvbkVsKSB7XG4gICAgICBjb25zdCByZWN0ID0gaWNvbkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBzZXRUb29sdGlwUG9zKHsgdG9wOiByZWN0LmJvdHRvbSArIDQsIGxlZnQ6IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHsgc2V0SG92ZXJlZEljb24obnVsbCk7IHNldFRvb2x0aXBQb3MobnVsbCkgfVxuXG4gIGNvbnN0IG9wZW5EZWYgPSBvcGVuUG9wb3ZlciA/IEZJTFRFUl9ERUZJTklUSU9OUy5maW5kKGQgPT4gZC5maWVsZCA9PT0gb3BlblBvcG92ZXIpIDogbnVsbFxuICBjb25zdCBob3ZlcmVkRGVmID0gaG92ZXJlZEljb24gPyBGSUxURVJfREVGSU5JVElPTlMuZmluZChkID0+IGQuZmllbGQgPT09IGhvdmVyZWRJY29uKSA6IG51bGxcblxuICAvLyAtLS0gQ1NWL1BERiBoYW5kbGVycyAtLS1cbiAgY29uc3QgaGFuZGxlQ3N2RG93bmxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKCFyZXN1bHRzKSByZXR1cm5cbiAgICBjb25zdCBoZWFkZXIgPSBcIkNhdGVnb3J5LElkZWFsIG51bWJlciBvZiB0cmVlcyAoaWdub3JpbmcgZXhpc3Rpbmcgc2hhZGUgdHJlZXMpLE51bWJlciBvZiBleGlzdGluZyBzaGFkZSB0cmVlcyxOdW1iZXIgb2YgZXhpc3RpbmcgdW5kZXJkZXZlbG9wZWQgdHJlZXMsTnVtYmVyIG9mIG5ldyB0cmVlcyB0byBwbGFudCxMZW5ndGgobSksVENDUixTcGFjaW5nKG0pXFxuXCJcbiAgICBjb25zdCByb3dzID0gT2JqZWN0LmtleXMocmVzdWx0cy5ieVd0eXBlKS5tYXAoayA9PiB7XG4gICAgICBjb25zdCBnID0gcmVzdWx0cy5ieVd0eXBlW2tdXG4gICAgICByZXR1cm4gYCR7Q0FURUdPUllfTEFCRUxTW2tdIHx8IGt9LCR7Zy50cmVlc30sJHtyZXN1bHRzLnRvdGFsRXhpc3RpbmdTaGFkZX0sJHtyZXN1bHRzLnRvdGFsRXhpc3RpbmdVbmRlcn0sJHtnLnRyZWVzVG9BZGR9LCR7Zy5sZW5ndGgudG9GaXhlZCgxKX0sJHtnLnRjY3IudG9GaXhlZCgyKX0sJHtnLnNwYWNpbmcudG9GaXhlZCgxKX1gXG4gICAgfSkuam9pbihcIlxcblwiKVxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbaGVhZGVyICsgcm93c10sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KVxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICBsaW5rLmhyZWYgPSB1cmw7IGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJ0cmVlX3BsYW50aW5nX3BvdGVudGlhbF9yZXBvcnQuY3N2XCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTsgbGluay5jbGljaygpOyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspOyBVUkwucmV2b2tlT2JqZWN0VVJMKHVybClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVBkZlJlcG9ydCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWppbXVNYXBWaWV3IHx8ICFyZXN1bHRzKSByZXR1cm5cbiAgICBjb25zdCBzY3JlZW5zaG90ID0gYXdhaXQgamltdU1hcFZpZXcudmlldy50YWtlU2NyZWVuc2hvdCh7IGZvcm1hdDogJ3BuZycgfSlcbiAgICBjb25zdCBwcmludFdpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnX2JsYW5rJylcbiAgICBpZiAoIXByaW50V2luZG93KSByZXR1cm5cbiAgICBjb25zdCBtZXRob2REZXNjID0gc2NlbmFyaW8gPT09ICdzMSdcbiAgICAgID8gYE1ldGhvZCAxOiBUYXJnZXQgVENDUiAoJHtzdWJTY2VuYXJpbyA9PT0gJzFhJyA/ICdnbG9iYWwnIDogJ2J5IHN0cmVldCB3aWR0aCd9KWAgOiBgTWV0aG9kIDI6IEZpeGVkIFNwYWNpbmdgXG4gICAgY29uc3QgcGFyYW1TdW1tYXJ5ID0gYENyb3duIERpYW1ldGVyOiAke2RpYW1ldGVyfW0gfCAke3NjZW5hcmlvID09PSAnczEnID8gKHN1YlNjZW5hcmlvID09PSAnMWEnID8gYEdsb2JhbCBUYXJnZXQgVENDUjogJHt0Y2NyR2xvYmFsfWAgOiAnVGFyZ2V0czogcGVyIHdpZHRoIGNsYXNzJykgOiBgRGVzaXJlZCBTcGFjaW5nOiAke3NwYWNpbmd9bWB9YFxuICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKGA8aHRtbD48aGVhZD48dGl0bGU+VHJlZSBQbGFudGluZyBUYXJnZXRzIENhbGN1bGF0aW9uPC90aXRsZT48c3R5bGU+Ym9keXtmb250LWZhbWlseTonU2Vnb2UgVUknLEFyaWFsLHNhbnMtc2VyaWY7cGFkZGluZzoyNXB4O2NvbG9yOiMzMzM7Zm9udC1zaXplOjEwcHg7bGluZS1oZWlnaHQ6MS4zfWgxe2NvbG9yOiMyYzNlNTA7Zm9udC1zaXplOjE2cHg7bWFyZ2luOjAgMCAxNXB4IDB9aDJ7Zm9udC1zaXplOjEycHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtwYWRkaW5nLWJvdHRvbTozcHg7bWFyZ2luOjE1cHggMCA4cHggMH0uc2VjdGlvbi10aXRsZXtmb250LXdlaWdodDpib2xkO21hcmdpbi1ib3R0b206M3B4O2ZvbnQtc2l6ZToxMXB4fXRhYmxle3dpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO21hcmdpbi10b3A6NXB4O2ZvbnQtc2l6ZTo5cHh9dGgsdGR7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO3BhZGRpbmc6NHB4IDZweDt0ZXh0LWFsaWduOmxlZnR9dGh7YmFja2dyb3VuZC1jb2xvcjojZjhmOWZhfS5tYXAtY29udGFpbmVye21hcmdpbjoxMnB4IDA7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO3dpZHRoOjEwMCV9Lm1hcC1pbWd7d2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztkaXNwbGF5OmJsb2NrO21heC1oZWlnaHQ6NDAwcHg7b2JqZWN0LWZpdDpjb250YWluO2JhY2tncm91bmQ6I2VlZX0uZm9vdGVye21hcmdpbi10b3A6MjVweDtwYWRkaW5nLXRvcDo4cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZTt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojNzc3O2ZvbnQtc2l6ZTo4cHh9dWx7cGFkZGluZy1sZWZ0OjE1cHg7bWFyZ2luOjNweCAwfWxpe21hcmdpbi1ib3R0b206MXB4fTwvc3R5bGU+PC9oZWFkPjxib2R5PlxuICAgICAgPGgxPlRyZWUgUGxhbnRpbmcgVGFyZ2V0cyBDYWxjdWxhdGlvbjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkFwcGxpZWQgYXNzdW1wdGlvbnM6PC9kaXY+PHVsPiR7cmVzdWx0cy5maWx0ZXJTdW1tYXJ5Lm1hcChmID0+IGA8bGk+JHtmfTwvbGk+YCkuam9pbignJyl9PC91bD5cbiAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjVweCAwO1wiPjxzdHJvbmc+VG90YWwgbnVtYmVyIG9mIHNlbGVjdGVkIHN0cmVldHMgc2VnbWVudHM6PC9zdHJvbmc+ICR7cmVzdWx0cy5zZWdtZW50Q291bnR9IHwgPHN0cm9uZz5Ub3RhbCBzdHJlZXQgbGVuZ3RoOjwvc3Ryb25nPiAke2Zvcm1hdE51bShyZXN1bHRzLnRvdGFsTGVuZ3RoLCAxKX0gbTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+Q2hvc2VuIE1ldGhvZDo8L2Rpdj48cCBzdHlsZT1cIm1hcmdpbjoycHggMDtcIj4ke21ldGhvZERlc2N9PGJyLz48c3BhbiBzdHlsZT1cImNvbG9yOiM2NjY7XCI+UGFyYW1ldGVyczogJHtwYXJhbVN1bW1hcnl9PC9zcGFuPjwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYXAtY29udGFpbmVyXCI+PGltZyBjbGFzcz1cIm1hcC1pbWdcIiBzcmM9XCIke3NjcmVlbnNob3QuZGF0YVVybH1cIj48L2Rpdj5cbiAgICAgIDxoMj5SZXN1bHRzIFN1bW1hcnk8L2gyPjx0YWJsZT48dHI+PHRoPk1ldHJpYzwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxuICAgICAgPHRyPjx0ZD5JZGVhbCBudW1iZXIgb2YgdHJlZXM8L3RkPjx0ZD4ke3Jlc3VsdHMudG90YWxUcmVlc308L3RkPjwvdHI+XG4gICAgICA8dHI+PHRkPkV4aXN0aW5nIHNoYWRlIHRyZWVzPC90ZD48dGQ+JHtyZXN1bHRzLnRvdGFsRXhpc3RpbmdTaGFkZX08L3RkPjwvdHI+XG4gICAgICA8dHI+PHRkPkV4aXN0aW5nIHVuZGVyZGV2ZWxvcGVkIHRyZWVzPC90ZD48dGQ+JHtyZXN1bHRzLnRvdGFsRXhpc3RpbmdVbmRlcn08L3RkPjwvdHI+XG4gICAgICA8dHIgc3R5bGU9XCJmb250LXdlaWdodDpib2xkO1wiPjx0ZD5OZXcgdHJlZXMgdG8gcGxhbnQ8L3RkPjx0ZD4ke3Jlc3VsdHMudHJlZXNUb0FkZH08L3RkPjwvdHI+XG4gICAgICA8dHI+PHRkPkF2ZXJhZ2UgVENDUjwvdGQ+PHRkPiR7Zm9ybWF0TnVtKHJlc3VsdHMuYXZnVGNjcil9PC90ZD48L3RyPlxuICAgICAgPHRyPjx0ZD5BdmVyYWdlIHNwYWNpbmc8L3RkPjx0ZD4ke2Zvcm1hdE51bShyZXN1bHRzLmF2Z1NwYWNpbmcpfSBtPC90ZD48L3RyPjwvdGFibGU+XG4gICAgICA8aDI+UmVzdWx0cyBieSBzdHJlZXQgd2lkdGg8L2gyPjx0YWJsZT48dHI+PHRoPldpZHRoPC90aD48dGg+VHJlZXMgdG8gQWRkPC90aD48dGg+VENDUjwvdGg+PHRoPlNwYWNpbmcgKG0pPC90aD48dGg+TGVuZ3RoIChtKTwvdGg+PC90cj5cbiAgICAgICR7T2JqZWN0LmtleXMocmVzdWx0cy5ieVd0eXBlKS5zb3J0KCkubWFwKGsgPT4geyBjb25zdCBnID0gcmVzdWx0cy5ieVd0eXBlW2tdOyByZXR1cm4gYDx0cj48dGQ+JHtDQVRFR09SWV9MQUJFTFNba10gfHwga308L3RkPjx0ZD4ke2cudHJlZXNUb0FkZH08L3RkPjx0ZD4ke2Zvcm1hdE51bShnLnRjY3IpfTwvdGQ+PHRkPiR7Zm9ybWF0TnVtKGcuc3BhY2luZywgMSl9PC90ZD48dGQ+JHtmb3JtYXROdW0oZy5sZW5ndGgsIDEpfTwvdGQ+PC90cj5gIH0pLmpvaW4oJycpfTwvdGFibGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+QmlnIERhdGEgaW4gQXJjaGl0ZWN0dXJhbCBSZXNlYXJjaCBMYWIsIFRlY2huaW9uIHwgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvZGl2PjwvYm9keT48L2h0bWw+YClcbiAgICBwcmludFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHByaW50V2luZG93LnByaW50KCkgfSwgNzAwKVxuICB9XG5cbiAgLy8gLS0tIENvbXB1dGUgLS0tXG4gIGNvbnN0IG9uQ29tcHV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWRzSWQgfHwgIWppbXVNYXBWaWV3KSByZXR1cm5cbiAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0lkKSBhcyBRdWVyaWFibGVEYXRhU291cmNlXG4gICAgaWYgKCFkcykgcmV0dXJuXG4gICAgc2V0TG9hZGluZyh0cnVlKTsgc2V0U2VnbWVudENvdW50KCdGZXRjaGluZyByZWNvcmRzLi4uJylcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGF5ZXIgPSAoZHMgYXMgYW55KS5sYXllclxuICAgICAgaWYgKCFsYXllcikgeyBzZXRTZWdtZW50Q291bnQoJ0xheWVyIG5vdCBhdmFpbGFibGUuJyk7IHNldExvYWRpbmcoZmFsc2UpOyByZXR1cm4gfVxuICAgICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBkcy5nZXRTZWxlY3RlZFJlY29yZElkcz8uKCkgfHwgW11cbiAgICAgIGxldCBmZWF0dXJlczogYW55W10gPSBbXVxuICAgICAgaWYgKHNlbGVjdGVkSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IHNlbGVjdGVkSWRzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGNodW5rID0gc2VsZWN0ZWRJZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyAyMDAwKVxuICAgICAgICAgIGNvbnN0IHEgPSBsYXllci5jcmVhdGVRdWVyeSgpOyBxLm9iamVjdElkcyA9IGNodW5rOyBxLnJldHVybkdlb21ldHJ5ID0gZmFsc2U7IHEub3V0RmllbGRzID0gWycqJ11cbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHEpXG4gICAgICAgICAgaWYgKHJlcz8uZmVhdHVyZXM/Lmxlbmd0aCkgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzLmZlYXR1cmVzKVxuICAgICAgICAgIG9mZnNldCArPSAyMDAwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gKGRzIGFzIGFueSkuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zPy4oKSB8fCB7IHdoZXJlOiAnMT0xJyB9XG4gICAgICAgIGxldCBvZmZzZXQgPSAwOyBsZXQgZG9uZSA9IGZhbHNlXG4gICAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICAgIGNvbnN0IHEgPSBsYXllci5jcmVhdGVRdWVyeSgpOyBxLndoZXJlID0gcXVlcnlQYXJhbXMud2hlcmUgfHwgJzE9MSdcbiAgICAgICAgICBxLm91dEZpZWxkcyA9IFsnKiddOyBxLnJldHVybkdlb21ldHJ5ID0gZmFsc2U7IHEuc3RhcnQgPSBvZmZzZXQ7IHEubnVtID0gMjAwMFxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocSlcbiAgICAgICAgICBpZiAocmVzPy5mZWF0dXJlcz8ubGVuZ3RoKSBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChyZXMuZmVhdHVyZXMpXG4gICAgICAgICAgaWYgKCFyZXMuZmVhdHVyZXMgfHwgcmVzLmZlYXR1cmVzLmxlbmd0aCA8IDIwMDApIGRvbmUgPSB0cnVlOyBlbHNlIG9mZnNldCArPSAyMDAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlY3MgPSBmZWF0dXJlcy5tYXAoKGY6IGFueSkgPT4gKHsgZ2V0RmllbGRWYWx1ZTogKGZpZWxkOiBzdHJpbmcpID0+IGYuYXR0cmlidXRlc1tmaWVsZF0gfSkpXG4gICAgICBpZiAocmVjcy5sZW5ndGggPT09IDApIHsgc2V0U2VnbWVudENvdW50KCdObyByZWNvcmRzIGZvdW5kLicpOyBzZXRMb2FkaW5nKGZhbHNlKTsgcmV0dXJuIH1cbiAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlID0gKGRzIGFzIGFueSkuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zPy4oKT8ud2hlcmUgfHwgJ05vbmUnXG4gICAgICBjb25zdCB0cmFuc2xhdGVkID0gKHNlbGVjdGVkSWRzICYmIHNlbGVjdGVkSWRzLmxlbmd0aCA+IDApXG4gICAgICAgID8gW2BNYW51YWwgc2VsZWN0aW9uICgke3JlY3MubGVuZ3RofSBzZWdtZW50cyk6YF0gOiB0cmFuc2xhdGVGaWx0ZXJzKHdoZXJlQ2xhdXNlKVxuICAgICAgY29uc3QgQyA9IGNhbm9weUFyZWEoZGlhbWV0ZXIpOyBjb25zdCByb3dzID0gY29uZmlnLnJvd3MgfHwgMlxuICAgICAgY29uc3Qgc3VtbWFyeTogUmVzdWx0cyA9IHtcbiAgICAgICAgdG90YWxUcmVlczogMCwgdG90YWxFeGlzdGluZ1NoYWRlOiAwLCB0b3RhbEV4aXN0aW5nVW5kZXI6IDAsIHRyZWVzVG9BZGQ6IDAsXG4gICAgICAgIHRvdGFsTGVuZ3RoOiAwLCB0b3RhbEFyZWE6IDAsIGF2Z1RjY3I6IDAsIGF2Z1NwYWNpbmc6IDAsXG4gICAgICAgIGZpbHRlclN1bW1hcnk6IHRyYW5zbGF0ZWQsIHNlZ21lbnRDb3VudDogcmVjcy5sZW5ndGgsIGJ5V3R5cGU6IHt9XG4gICAgICB9XG4gICAgICByZWNzLmZvckVhY2gociA9PiB7XG4gICAgICAgIGNvbnN0IEwgPSBOdW1iZXIoci5nZXRGaWVsZFZhbHVlKGNvbmZpZy5sZW5ndGhGaWVsZCkpIHx8IDBcbiAgICAgICAgY29uc3QgVyA9IE51bWJlcihyLmdldEZpZWxkVmFsdWUoY29uZmlnLndpZHRoRmllbGQpKSB8fCAwXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nU2hhZGUgPSBjb25maWcuZXhpc3RpbmdUcmVlc0ZpZWxkID8gKE51bWJlcihyLmdldEZpZWxkVmFsdWUoY29uZmlnLmV4aXN0aW5nVHJlZXNGaWVsZCkpIHx8IDApIDogMFxuICAgICAgICBjb25zdCBleGlzdGluZ1VuZGVyID0gY29uZmlnLnVuZGVyZGV2ZWxvcGVkVHJlZXNGaWVsZCA/IChOdW1iZXIoci5nZXRGaWVsZFZhbHVlKGNvbmZpZy51bmRlcmRldmVsb3BlZFRyZWVzRmllbGQpKSB8fCAwKSA6IDBcbiAgICAgICAgY29uc3QgdHlwZUlEID0gU3RyaW5nKHIuZ2V0RmllbGRWYWx1ZShjb25maWcud3R5cGVGaWVsZCkgfHwgJzEnKVxuICAgICAgICBjb25zdCBBID0gTCAqIFdcbiAgICAgICAgaWYgKCFzdW1tYXJ5LmJ5V3R5cGVbdHlwZUlEXSkgc3VtbWFyeS5ieVd0eXBlW3R5cGVJRF0gPSB7IHRyZWVzOiAwLCB0cmVlc1RvQWRkOiAwLCBsZW5ndGg6IDAsIGFyZWE6IDAsIHRjY3I6IDAsIHNwYWNpbmc6IDAgfVxuICAgICAgICBsZXQgbl9wb3QgPSBzY2VuYXJpbyA9PT0gJ3MxJ1xuICAgICAgICAgID8gTWF0aC5jZWlsKCgoc3ViU2NlbmFyaW8gPT09ICcxYicgPyAod3R5cGVUYXJnZXRzW3R5cGVJRF0gfHwgMC42KSA6IHRjY3JHbG9iYWwpICogQSkgLyBDKVxuICAgICAgICAgIDogcm93cyAqIChNYXRoLmZsb29yKEwgLyBzcGFjaW5nKSArIDEpXG4gICAgICAgIGNvbnN0IG5fYWRkID0gTWF0aC5tYXgoMCwgbl9wb3QgLSBleGlzdGluZ1NoYWRlKVxuICAgICAgICBzdW1tYXJ5LnRvdGFsVHJlZXMgKz0gbl9wb3Q7IHN1bW1hcnkudG90YWxFeGlzdGluZ1NoYWRlICs9IGV4aXN0aW5nU2hhZGVcbiAgICAgICAgc3VtbWFyeS50b3RhbEV4aXN0aW5nVW5kZXIgKz0gZXhpc3RpbmdVbmRlcjsgc3VtbWFyeS50cmVlc1RvQWRkICs9IG5fYWRkXG4gICAgICAgIHN1bW1hcnkudG90YWxMZW5ndGggKz0gTDsgc3VtbWFyeS50b3RhbEFyZWEgKz0gQVxuICAgICAgICBzdW1tYXJ5LmJ5V3R5cGVbdHlwZUlEXS50cmVlcyArPSBuX3BvdDsgc3VtbWFyeS5ieVd0eXBlW3R5cGVJRF0udHJlZXNUb0FkZCArPSBuX2FkZFxuICAgICAgICBzdW1tYXJ5LmJ5V3R5cGVbdHlwZUlEXS5sZW5ndGggKz0gTDsgc3VtbWFyeS5ieVd0eXBlW3R5cGVJRF0uYXJlYSArPSBBXG4gICAgICB9KVxuICAgICAgc3VtbWFyeS5hdmdUY2NyID0gc3VtbWFyeS50b3RhbEFyZWEgPiAwID8gKHN1bW1hcnkudG90YWxUcmVlcyAqIEMpIC8gc3VtbWFyeS50b3RhbEFyZWEgOiAwXG4gICAgICBzdW1tYXJ5LmF2Z1NwYWNpbmcgPSBzdW1tYXJ5LnRvdGFsVHJlZXMgPiAwID8gc3VtbWFyeS50b3RhbExlbmd0aCAvIChzdW1tYXJ5LnRvdGFsVHJlZXMgLyByb3dzKSA6IDBcbiAgICAgIE9iamVjdC5rZXlzKHN1bW1hcnkuYnlXdHlwZSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgY29uc3QgZyA9IHN1bW1hcnkuYnlXdHlwZVtrXVxuICAgICAgICBnLnRjY3IgPSBnLmFyZWEgPiAwID8gKGcudHJlZXMgKiBDKSAvIGcuYXJlYSA6IDBcbiAgICAgICAgZy5zcGFjaW5nID0gZy50cmVlcyA+IDAgPyBnLmxlbmd0aCAvIChnLnRyZWVzIC8gcm93cykgOiAwXG4gICAgICB9KVxuICAgICAgc2V0UmVzdWx0cyhzdW1tYXJ5KTsgc2V0U2VnbWVudENvdW50KGBDYWxjdWxhdGVkICR7cmVjcy5sZW5ndGh9IHNlZ21lbnRzLmApXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7IHNldFNlZ21lbnRDb3VudCgnRXJyb3IgZmV0Y2hpbmcgZmVhdHVyZXMuJylcbiAgICB9IGZpbmFsbHkgeyBzZXRMb2FkaW5nKGZhbHNlKSB9XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT0gUkVOREVSID09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0IHBvcnRhbENvbnRlbnQgPSAoXG4gICAgPD5cbiAgICAgIHtob3ZlcmVkSWNvbiAmJiAhb3BlblBvcG92ZXIgJiYgaG92ZXJlZERlZiAmJiB0b29sdGlwUG9zICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXRvb2x0aXAnXG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiB0b29sdGlwUG9zLnRvcCwgbGVmdDogdG9vbHRpcFBvcy5sZWZ0LCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9fT5cbiAgICAgICAgICB7aG92ZXJlZERlZi5uYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b3BlblBvcG92ZXIgJiYgb3BlbkRlZiAmJiBwb3BvdmVyUG9zICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItYmFja2Ryb3AnIG9uQ2xpY2s9e2Nsb3NlUG9wb3Zlcn0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItcG9wb3ZlcidcbiAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogcG9wb3ZlclBvcy50b3AsIGxlZnQ6IHBvcG92ZXJQb3MubGVmdCB9fSBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXBvcG92ZXItdGl0bGUnPntvcGVuRGVmLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICB7b3BlbkRlZi5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogJyM5OTknLCBtYXJnaW5Cb3R0b206IDYsIGxpbmVIZWlnaHQ6IDEuMywgZm9udFN0eWxlOiAnaXRhbGljJywgd29yZFdyYXA6ICdicmVhay13b3JkJywgd2hpdGVTcGFjZTogJ25vcm1hbCcsIG1heFdpZHRoOiAyMDAgfX0+e29wZW5EZWYuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge29wZW5EZWYudHlwZSA9PT0gJ3NsaWRlcicgJiYgKFxuICAgICAgICAgICAgICA8U2xpZGVyQ29udGVudCBkZWY9e29wZW5EZWYgYXMgYW55fSB2YWx1ZT17ZmlsdGVyc1tvcGVuUG9wb3Zlcl0udmFsdWUgYXMgbnVtYmVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2ID0+IHVwZGF0ZUZpbHRlclZhbHVlKG9wZW5Qb3BvdmVyLCB2KX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7b3BlbkRlZi50eXBlID09PSAncmFuZ2Utc2xpZGVyJyAmJiAoXG4gICAgICAgICAgICAgIDxSYW5nZVNsaWRlckNvbnRlbnQgZGVmPXtvcGVuRGVmIGFzIGFueX0gdmFsdWU9e2ZpbHRlcnNbb3BlblBvcG92ZXJdLnZhbHVlIGFzIFtudW1iZXIsIG51bWJlcl19XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3YgPT4gdXBkYXRlRmlsdGVyVmFsdWUob3BlblBvcG92ZXIsIHYpfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC10cmVlLXBsYW50aW5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnYXV0bycsIGJhY2tncm91bmQ6ICcjMmIyYjJiJywgY29sb3I6ICcjZWVlJyB9fT5cbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXSAmJiAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXYpID0+IHNldEppbXVNYXBWaWV3KGptdil9IC8+XG4gICAgICApfVxuICAgICAge3Byb3BzLnVzZURhdGFTb3VyY2VzPy5bMF0gJiYgKFxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudCB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlc1swXX0gb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlRHNDcmVhdGVkfSAvPlxuICAgICAgKX1cblxuICAgICAgey8qIEZpbHRlciBiYXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItYmFyJyBzdHlsZT17eyBtYXJnaW46IDAsIGJvcmRlclJhZGl1czogMCB9fT5cbiAgICAgICAge0ZJTFRFUl9ERUZJTklUSU9OUy5tYXAoZGVmID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZSA9IGZpbHRlcnNbZGVmLmZpZWxkXVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17ZGVmLmZpZWxkfVxuICAgICAgICAgICAgICByZWY9e2VsID0+IHsgaWNvblJlZnMuY3VycmVudFtkZWYuZmllbGRdID0gZWwgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29tcGFjdC1maWx0ZXItaWNvbiAke3N0YXRlPy5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBoYW5kbGVJY29uQ2xpY2soZGVmLmZpZWxkKSB9fVxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZU1vdXNlRW50ZXIoZGVmLmZpZWxkKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfT5cbiAgICAgICAgICAgICAgPEZpbHRlckljb25JbWcgZGVmPXtkZWZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSZXNldCBidXR0b24gKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICc0cHggMTBweCAwJyB9fT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldEZpbHRlcnMoY3JlYXRlSW5pdGlhbEZpbHRlcnMoKSk7IHNldE9wZW5Qb3BvdmVyKG51bGwpOyBzZXRQb3BvdmVyUG9zKG51bGwpIH19XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogJyNhYWEnLCBiYWNrZ3JvdW5kOiAnbm9uZScsIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JywgYm9yZGVyUmFkaXVzOiAzLCBwYWRkaW5nOiAnMnB4IDEwcHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICBSZXNldCBGaWx0ZXJzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBJbnN0cnVjdGlvbiArIHNlZ21lbnQgY291bnQgKyBjYWxjdWxhdG9yICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnOHB4IDEwcHgnIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udFN0eWxlOiAnaXRhbGljJywgY29sb3I6ICcjYmJiJywgbGluZUhlaWdodDogMS40LCBtYXJnaW5Cb3R0b206IDQgfX0+XG4gICAgICAgICAgVXNpbmcgdGhlIGFib3ZlIGJ1dHRvbnMsIGZpbHRlciBvdXQgc3RyZWV0cyB0aGF0IGRvIG5vdCByZXF1aXJlIHBsYW50aW5nIChieSBkZWZhdWx0LCBhbGwgdGhlIGNpdHkncyBzdHJlZXRzIGFyZSBjb25zaWRlcmVkKS4gTmV4dCwgY2hvb3NlIHRoZSB0YXJnZXQgY2FsY3VsYXRpb24gbWV0aG9kLCBjaGFuZ2UgdGhlIGNhbGN1bGF0aW9uIHBhcmFtZXRlcnMgYXMgeW91IHdpc2gsIGFuZCBwcmVzcyBDYWxjdWxhdGUuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjNGZjM2Y3JywgbWFyZ2luQm90dG9tOiA2IH19PntzZWdtZW50Q291bnR9PC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAxNSwgbWFyZ2luQm90dG9tOiA0IH19PkNhbGN1bGF0aW9uIE1ldGhvZDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyIH19PlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY3Vyc29yOiAncG9pbnRlcicgfX0+PFJhZGlvIGNoZWNrZWQ9e3NjZW5hcmlvID09PSAnczEnfSBvbkNoYW5nZT17KCkgPT4gc2V0U2NlbmFyaW8oJ3MxJyl9IC8+IE1ldGhvZCAxOiBUYXJnZXQgVHJlZSBDYW5vcHkgQ292ZXIgUmF0aW8gKFRDQ1IpPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDIwLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDIgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogMTEsIGN1cnNvcjogJ3BvaW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzY2VuYXJpbyA9PT0gJ3MxJyAmJiBzdWJTY2VuYXJpbyA9PT0gJzFhJ30gb25DaGFuZ2U9eygpID0+IHsgc2V0U2NlbmFyaW8oJ3MxJyk7IHNldFN1YlNjZW5hcmlvKCcxYScpIH19IHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNCwgbWFyZ2luUmlnaHQ6IDYsIGFjY2VudENvbG9yOiAnIzAwNzljMScgfX0gLz5cbiAgICAgICAgICAgICAgICAxYTogR2xvYmFsXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogMTEsIGN1cnNvcjogJ3BvaW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzY2VuYXJpbyA9PT0gJ3MxJyAmJiBzdWJTY2VuYXJpbyA9PT0gJzFiJ30gb25DaGFuZ2U9eygpID0+IHsgc2V0U2NlbmFyaW8oJ3MxJyk7IHNldFN1YlNjZW5hcmlvKCcxYicpIH19IHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNCwgbWFyZ2luUmlnaHQ6IDYsIGFjY2VudENvbG9yOiAnIzAwNzljMScgfX0gLz5cbiAgICAgICAgICAgICAgICAxYjogQnkgc3RyZWV0IHdpZHRoXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6IDIgfX0+PFJhZGlvIGNoZWNrZWQ9e3NjZW5hcmlvID09PSAnczInfSBvbkNoYW5nZT17KCkgPT4gc2V0U2NlbmFyaW8oJ3MyJyl9IC8+IE1ldGhvZCAyOiBGaXhlZCBTcGFjaW5nPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYsIHBhZGRpbmc6IDgsIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JywgYm9yZGVyUmFkaXVzOiA0IH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogMTUsIG1hcmdpbkJvdHRvbTogNCB9fT5DYWxjdWxhdGlvbiBQYXJhbWV0ZXJzPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgbWFyZ2luQm90dG9tOiAyIH19PkNyb3duIGRpYW1ldGVyIChtKTwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e1N0cmluZyhkaWFtZXRlcil9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGlhbWV0ZXIoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICc0cHggNnB4JywgYmFja2dyb3VuZDogJyMzYTNhM2EnLCBib3JkZXI6ICcxcHggc29saWQgIzU1NScsIGJvcmRlclJhZGl1czogMywgY29sb3I6ICcjZWVlJywgZm9udFNpemU6IDEyIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3NjZW5hcmlvID09PSAnczEnICYmIHN1YlNjZW5hcmlvID09PSAnMWEnICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0IH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMSwgbWFyZ2luQm90dG9tOiAyIH19Pkdsb2JhbCB0YXJnZXQgVENDUiAoMC4wIC0gMS4wKTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17U3RyaW5nKHRjY3JHbG9iYWwpfSBvbkNoYW5nZT17KGUpID0+IHNldFRjY3JHbG9iYWwoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzRweCA2cHgnLCBiYWNrZ3JvdW5kOiAnIzNhM2EzYScsIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JywgYm9yZGVyUmFkaXVzOiAzLCBjb2xvcjogJyNlZWUnLCBmb250U2l6ZTogMTIgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NjZW5hcmlvID09PSAnczEnICYmIHN1YlNjZW5hcmlvID09PSAnMWInICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogNiwgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLCBib3JkZXJSYWRpdXM6IDMsIGZvbnRTaXplOiAxMSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbkJvdHRvbTogNCB9fT5UQ0NSIHRhcmdldHMgYnkgc3RyZWV0IHdpZHRoOjwvZGl2PlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXMod3R5cGVUYXJnZXRzKS5zb3J0KCkubWFwKGlkID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbTogMiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntDQVRFR09SWV9MQUJFTFNbaWRdIHx8IGBDbGFzcyAke2lkfWB9Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtTdHJpbmcod3R5cGVUYXJnZXRzW2lkXSl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0V3R5cGVUYXJnZXRzKHsuLi53dHlwZVRhcmdldHMsIFtpZF06IE51bWJlcihlLnRhcmdldC52YWx1ZSl9KX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwLCBwYWRkaW5nOiAnMnB4IDRweCcsIGJhY2tncm91bmQ6ICcjM2EzYTNhJywgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLCBib3JkZXJSYWRpdXM6IDMsIGNvbG9yOiAnI2VlZScsIGZvbnRTaXplOiAxMSwgdGV4dEFsaWduOiAncmlnaHQnIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2NlbmFyaW8gPT09ICdzMicgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBtYXJnaW5Cb3R0b206IDIgfX0+RGVzaXJlZCBTcGFjaW5nIChtKTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17U3RyaW5nKHNwYWNpbmcpfSBvbkNoYW5nZT17KGUpID0+IHNldFNwYWNpbmcoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzRweCA2cHgnLCBiYWNrZ3JvdW5kOiAnIzNhM2EzYScsIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JywgYm9yZGVyUmFkaXVzOiAzLCBjb2xvcjogJyNlZWUnLCBmb250U2l6ZTogMTIgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25Db21wdXRlfSBkaXNhYmxlZD17IWRzSWQgfHwgbG9hZGluZ31cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnOHB4JywgYmFja2dyb3VuZDogbG9hZGluZyA/ICcjNTU1JyA6ICcjNGE5MGQ5JywgY29sb3I6ICcjZmZmJywgYm9yZGVyOiAnbm9uZScsIGJvcmRlclJhZGl1czogNCwgZm9udFNpemU6IDEzLCBjdXJzb3I6IGxvYWRpbmcgPyAnZGVmYXVsdCcgOiAncG9pbnRlcicsIG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgICB7bG9hZGluZyA/ICdQcm9jZXNzaW5nLi4uJyA6ICdDYWxjdWxhdGUnfVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7cmVzdWx0cyAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxMCwgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLCBib3JkZXJSYWRpdXM6IDQsIGJhY2tncm91bmQ6ICcjMzMzJyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzU1NScsIG1hcmdpbkJvdHRvbTogNiwgcGFkZGluZ0JvdHRvbTogNCwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsIGZvbnRTaXplOiAxMSB9fT5SZXN1bHRzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZm9udFNpemU6IDExIH19PjxzcGFuPlNlbGVjdGVkIHNlZ21lbnRzOjwvc3Bhbj48c3Ryb25nPntyZXN1bHRzLnNlZ21lbnRDb3VudH08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBmb250U2l6ZTogMTEgfX0+PHNwYW4+VG90YWwgc3RyZWV0IGxlbmd0aDo8L3NwYW4+PHN0cm9uZz57Zm9ybWF0TnVtKHJlc3VsdHMudG90YWxMZW5ndGgsIDEpfSBtPC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZm9udFNpemU6IDExLCBtYXJnaW5Ub3A6IDQgfX0+PHNwYW4+SWRlYWwgdHJlZXM6PC9zcGFuPjxzdHJvbmc+e3Jlc3VsdHMudG90YWxUcmVlc308L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBmb250U2l6ZTogMTEgfX0+PHNwYW4+RXhpc3Rpbmcgc2hhZGUgdHJlZXM6PC9zcGFuPjxzdHJvbmc+e3Jlc3VsdHMudG90YWxFeGlzdGluZ1NoYWRlfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGZvbnRTaXplOiAxMSB9fT48c3Bhbj5VbmRlcmRldmVsb3BlZCB0cmVlczo8L3NwYW4+PHN0cm9uZz57cmVzdWx0cy50b3RhbEV4aXN0aW5nVW5kZXJ9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZm9udFNpemU6IDExLCBmb250V2VpZ2h0OiAnYm9sZCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjNTU1JywgcGFkZGluZ0JvdHRvbTogNCwgbWFyZ2luQm90dG9tOiA0IH19PjxzcGFuPk5ldyB0cmVlcyB0byBwbGFudDo8L3NwYW4+PHN0cm9uZz57cmVzdWx0cy50cmVlc1RvQWRkfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGZvbnRTaXplOiAxMSB9fT48c3Bhbj5XZWlnaHRlZCBUQ0NSOjwvc3Bhbj48c3Ryb25nPntmb3JtYXROdW0ocmVzdWx0cy5hdmdUY2NyKX08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBmb250U2l6ZTogMTEsIG1hcmdpbkJvdHRvbTogOCB9fT48c3Bhbj5BdmcuIFNwYWNpbmc6PC9zcGFuPjxzdHJvbmc+e2Zvcm1hdE51bShyZXN1bHRzLmF2Z1NwYWNpbmcpfSBtPC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3N2RG93bmxvYWR9IHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6ICc0cHggOHB4JywgYmFja2dyb3VuZDogJyM0YTRhNGEnLCBjb2xvcjogJyNlZWUnLCBib3JkZXI6ICcxcHggc29saWQgIzY2NicsIGJvcmRlclJhZGl1czogMywgZm9udFNpemU6IDExLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5FeHBvcnQgQ1NWPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUGRmUmVwb3J0fSBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiAnNHB4IDhweCcsIGJhY2tncm91bmQ6ICcjNGE0YTRhJywgY29sb3I6ICcjZWVlJywgYm9yZGVyOiAnMXB4IHNvbGlkICM2NjYnLCBib3JkZXJSYWRpdXM6IDMsIGZvbnRTaXplOiAxMSwgY3Vyc29yOiAncG9pbnRlcicgfX0+UHJpbnQgUERGPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICM1NTUnLCBtYXJnaW5Cb3R0b206IDQsIGZvbnRTaXplOiAxMSwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX0+QW5hbHlzaXMgYnkgd2lkdGg6PC9kaXY+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXN1bHRzLmJ5V3R5cGUpLnNvcnQoKS5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjNDQ0JywgcGFkZGluZ0JvdHRvbTogNCwgbWFyZ2luQm90dG9tOiA0LCBmb250U2l6ZTogMTEgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICcjNGZjM2Y3JyB9fT57Q0FURUdPUllfTEFCRUxTW2tdIHx8IGBDbGFzcyAke2t9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgPHN0cm9uZz57cmVzdWx0cy5ieVd0eXBlW2tdLnRyZWVzVG9BZGR9PC9zdHJvbmc+IHRyZWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UQ0NSOiB7Zm9ybWF0TnVtKHJlc3VsdHMuYnlXdHlwZVtrXS50Y2NyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjODg4JywgZm9udFNpemU6IDEwIH19PlNwYWNpbmc6IHtmb3JtYXROdW0ocmVzdWx0cy5ieVd0eXBlW2tdLnNwYWNpbmcsIDEpfSBtIHwgTGVuZ3RoOiB7Zm9ybWF0TnVtKHJlc3VsdHMuYnlXdHlwZVtrXS5sZW5ndGgsIDEpfSBtPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAge1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChwb3J0YWxDb250ZW50LCBkb2N1bWVudC5ib2R5KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==