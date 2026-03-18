System.register(["jimu-core/emotion","jimu-core","jimu-core/react-dom"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/compact-filter/src/runtime/style.scss"
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/compact-filter/src/runtime/style.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.compact-filter-root {
  position: relative;
  z-index: 50;
}

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
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/compact-filter/src/runtime/style.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,WAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,QAAA;EACA,YAAA;EACA,iCAAA;EACA,kBAAA;EACA,wCAAA;EACA,uBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,+BAAA;EACA,kBAAA;EACA,eAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,gDAAA;EACA,WAAA;AACF;AACE;EACE,qCAAA;AACJ;AAEE;EACE,kCAAA;EACA,qBAAA;EACA,cAAA;AAAJ;AAGE;EACE,WAAA;EACA,YAAA;EACA,oBAAA;AADJ;AAIE;EACE,iCAAA;AAFJ;AAKE;EACE,yEAAA;AAHJ;;AAOA;EACE,eAAA;EACA,kCAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,oBAAA;EACA,cAAA;AAJF;;AAOA;EACE,eAAA;EACA,kCAAA;EACA,kBAAA;EACA,wCAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,eAAA;AAJF;;AAOA;EACE,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;AAJF;;AAOA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AAJF;;AAOA;EACE,OAAA;EACA,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;AAJF;AAME;EACE,wBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AAJJ;AAOE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;AALJ;;AASA;EACE,eAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,kCAAA;AANF;;AASA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,kBAAA;AANF;;AAUA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;AAPF","sourcesContent":[".compact-filter-root {\n  position: relative;\n  z-index: 50;\n}\n\n.compact-filter-bar {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 3px;\n  padding: 4px;\n  background: rgba(50, 50, 50, 0.9);\n  border-radius: 6px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  justify-content: center;\n}\n\n.compact-filter-icon {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  background: transparent;\n  padding: 4px;\n  position: relative;\n  transition: background 0.15s, border-color 0.15s;\n  color: #ccc;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.15);\n  }\n\n  &.active {\n    background: rgba(0, 121, 193, 0.3);\n    border-color: #0079c1;\n    color: #4fc3f7;\n  }\n\n  img, svg {\n    width: 18px;\n    height: 18px;\n    pointer-events: none;\n  }\n\n  img {\n    filter: brightness(0) invert(0.8);\n  }\n\n  &.active img {\n    filter: brightness(0) invert(0.7) sepia(1) saturate(5) hue-rotate(180deg);\n  }\n}\n\n.compact-filter-tooltip {\n  position: fixed;\n  background: rgba(30, 30, 30, 0.95);\n  color: #eee;\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  white-space: nowrap;\n  pointer-events: none;\n  z-index: 10001;\n}\n\n.compact-filter-popover {\n  position: fixed;\n  background: rgba(50, 50, 50, 0.95);\n  border-radius: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  padding: 12px 14px;\n  min-width: 220px;\n  z-index: 10000;\n  color: #eee;\n  font-size: 12px;\n  cursor: default;\n}\n\n.compact-filter-popover-title {\n  font-weight: 600;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: #ccc;\n}\n\n.compact-filter-slider-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.compact-filter-slider {\n  flex: 1;\n  -webkit-appearance: none;\n  appearance: none;\n  height: 4px;\n  background: #555;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background: #0079c1;\n    cursor: pointer;\n  }\n\n  &::-moz-range-thumb {\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background: #0079c1;\n    cursor: pointer;\n    border: none;\n  }\n}\n\n.compact-filter-value {\n  min-width: 35px;\n  text-align: right;\n  font-size: 11px;\n  color: #aaa;\n  font-variant-numeric: tabular-nums;\n}\n\n.compact-filter-range-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n\n\n.compact-filter-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n}\n"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/compact-filter/src/runtime/style.scss"
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/compact-filter/src/runtime/style.scss ***!
  \***********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/compact-filter/src/runtime/style.scss");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/compact-filter/src/filter-definitions.ts"
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/compact-filter/src/filter-definitions.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FILTER_DEFINITIONS: () => (/* binding */ FILTER_DEFINITIONS)
/* harmony export */ });
// --- SVG icons ---
const sunSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17"><g clip-path="url(#a)"><path fill="currentColor" d="m12.153 6.054-.707-.707 2.2-2.2.708.707zm-9.507 8.092.707.707 2.2-2.2-.706-.707zm8.8-1.493 2.2 2.2.707-.706-2.2-2.2zM5.554 5.347l-2.2-2.2-.707.706 2.2 2.2zM9 1.5H8v3h1zm-1 15h1v-3H8zm8-7v-1h-3v1zm-15 0h3v-1H1zM5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m1 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .5h16v16H0z"/></clipPath></defs></svg>';
const pedestrianSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="9" cy="2.5" r="1.5" fill="currentColor"/><path fill="currentColor" d="M11.5 6.5 9.7 5.2a1.5 1.5 0 0 0-1.7 0L6.5 6.3a1 1 0 0 0-.4.8v2.4h1.2V7.7l1.2-.8-.8 3.6-2.4 2.4.8.8 2.2-2.2 1 2.5h1.3l-1.3-3.5 1-2.5.9 1v2.5h1.2V8.3a1 1 0 0 0-.4-.8z"/></svg>';
const carSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M13.4 5.5l-.9-2.7A1.5 1.5 0 0 0 11.1 2H4.9a1.5 1.5 0 0 0-1.4 1l-.9 2.6A1.5 1.5 0 0 0 2 6.8V11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-.5h6V11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6.8c0-.5-.2-.9-.6-1.2zM4.9 3h6.2l.8 2.5H4.1zM4.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>';
const buildingsSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M2 14V3h5v3h7v8zm1-1h3V4H3zm4 0h2v-2H7zm3 0h2v-2h-2zm3 0h1V7H8V4h1v2h6zM4 6h1V5H4zm0 2h1V7H4zm0 2h1V9H4zm0 2h1v-1H4zm5-4h1V7H9zm0 2h1V9H9zm2-2h1V7h-1zm0 2h1V9h-1z"/></svg>';
const shoppingSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2.3 2H.5v1h1.2l2.1 7.4a1 1 0 0 0 1 .6h6.4a1 1 0 0 0 1-.6L14.5 4H4l.6 2h8l-1.4 4H5.2z"/></svg>';
const measureSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m15.18 3.89-2.85 2.85-.71-.7 1.61-1.65H9v-1h4.32l-1.7-1.69.71-.7zM0 14.39v-6h16v6zm14-3h1v-2H1v4h1v-2h1v2h1v-3h1v3h1v-2h1v2h1v-3h1v3h1v-2h1v2h1v-3h1v3h1zm-7-8H2.68l1.7-1.65-.71-.7L.82 3.89l2.85 2.85.71-.7-1.61-1.65H7z" clip-rule="evenodd"/></svg>';
const FILTER_DEFINITIONS = [
    {
        type: 'slider', field: 'summer_SI', name: 'Shade Index',
        operator: '<', min: 0, max: 1, step: 0.05, defaultValue: 0.4,
        iconType: 'svg', iconSvg: sunSvg
    },
    {
        type: 'slider', field: 'class_2k', name: 'Neighbourhood transit',
        operator: '>', min: 0, max: 7, step: 1, defaultValue: 4,
        iconType: 'svg', iconSvg: pedestrianSvg
    },
    {
        type: 'slider', field: 'class_5k', name: 'City transit',
        operator: '>', min: 0, max: 7, step: 1, defaultValue: 4,
        iconType: 'svg', iconSvg: carSvg
    },
    {
        type: 'slider', field: 'class_ai1k', name: 'Local centers',
        operator: '>', min: 0, max: 7, step: 1, defaultValue: 5,
        iconType: 'png', iconPng: 'walking.png'
    },
    {
        type: 'slider', field: 'FSI500_mea', name: 'Building density',
        operator: '>', min: 0, max: 5, step: 0.1, defaultValue: 1.5,
        iconType: 'svg', iconSvg: buildingsSvg
    },
    {
        type: 'slider', field: 'ARw500lm_1', name: 'Commercial proximity',
        operator: '>', min: 0, max: 200, step: 5, defaultValue: 60,
        iconType: 'svg', iconSvg: shoppingSvg
    },
    {
        type: 'slider', field: 'ADws_mean', name: 'School proximity',
        operator: '<', min: 0, max: 1000, step: 25, defaultValue: 300, unit: 'm',
        iconType: 'png', iconPng: 'education.png'
    },
    {
        type: 'slider', field: 'ADwm_mean', name: 'Tram/metro proximity',
        operator: '<', min: 0, max: 1000, step: 25, defaultValue: 300, unit: 'm',
        iconType: 'png', iconPng: 'transport.png'
    },
    {
        type: 'slider', field: 'ADwbu_mean', name: 'Bus stop proximity',
        operator: '<', min: 0, max: 1000, step: 25, defaultValue: 300, unit: 'm',
        iconType: 'png', iconPng: 'bus.png'
    },
    {
        type: 'range-slider', field: 'width', name: 'Street width',
        min: 0, max: 60, step: 1, defaultValue: [20, 30], unit: 'm',
        iconType: 'svg', iconSvg: measureSvg
    }
];


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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/compact-filter/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ CompactFilterWidget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _filter_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-definitions */ "./your-extensions/widgets/compact-filter/src/filter-definitions.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./your-extensions/widgets/compact-filter/src/runtime/style.scss");

/** @jsx jsx */
/** @jsxFrag React.Fragment */




const { useState, useEffect, useCallback, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
// --- SQL generation ---
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
    for (const def of _filter_definitions__WEBPACK_IMPORTED_MODULE_3__.FILTER_DEFINITIONS) {
        const state = filters[def.field];
        if (state === null || state === void 0 ? void 0 : state.active) {
            clauses.push(buildClause(def, state));
        }
    }
    return clauses.length > 0 ? clauses.join(' AND ') : '1=1';
}
// --- Initial state ---
function createInitialFilters() {
    const map = {};
    for (const def of _filter_definitions__WEBPACK_IMPORTED_MODULE_3__.FILTER_DEFINITIONS) {
        map[def.field] = {
            active: false,
            value: def.type === 'multi-select'
                ? [...def.defaultValue]
                : def.defaultValue
        };
    }
    return map;
}
// --- Icon rendering ---
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
// --- Slider popover content ---
function SliderContent({ def, value, onChange }) {
    const displayVal = def.step < 1 ? value.toFixed(2) : String(value);
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'compact-filter-slider-row', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'compact-filter-value', children: def.min }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'range', className: 'compact-filter-slider', min: def.min, max: def.max, step: def.step, value: value, onChange: e => onChange(Number(e.target.value)) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: 'compact-filter-value', children: [displayVal, def.unit || ''] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { fontSize: 10, color: '#888', marginTop: 4 }, children: [def.operator === '<' ? 'Less than' : 'Greater than', " ", displayVal, def.unit || ''] })] }));
}
// --- Range slider popover content ---
function RangeSliderContent({ def, value, onChange }) {
    const [lo, hi] = value;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'compact-filter-range-row', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: 'compact-filter-value', children: [lo, def.unit || ''] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#888' }, children: "-" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: 'compact-filter-value', children: [hi, def.unit || ''] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 4 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 10, color: '#888', marginBottom: 2 }, children: "Min" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'range', className: 'compact-filter-slider', min: def.min, max: def.max, step: def.step, value: lo, onChange: e => {
                            const v = Number(e.target.value);
                            onChange([Math.min(v, hi), hi]);
                        } })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 10, color: '#888', marginBottom: 2 }, children: "Max" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'range', className: 'compact-filter-slider', min: def.min, max: def.max, step: def.step, value: hi, onChange: e => {
                            const v = Number(e.target.value);
                            onChange([lo, Math.max(v, lo)]);
                        } })] })] }));
}
// --- Main widget ---
function CompactFilterWidget(props) {
    var _a;
    const [filters, setFilters] = useState(createInitialFilters);
    const [openPopover, setOpenPopover] = useState(null);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [popoverPos, setPopoverPos] = useState(null);
    const [tooltipPos, setTooltipPos] = useState(null);
    const prevSqlRef = useRef('');
    const iconRefs = useRef({});
    const dsRef = useRef(null);
    const [dsReady, setDsReady] = useState(false);
    const widgetId = props.id || 'widget_201';
    const handleDsCreated = useCallback((ds) => {
        console.log('[compact-filter] Data source created:', ds === null || ds === void 0 ? void 0 : ds.id);
        dsRef.current = ds;
        prevSqlRef.current = '';
        setDsReady(true);
    }, []);
    // Apply SQL to data source — called whenever filters change
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
            console.error('[compact-filter] Failed to apply filters:', e);
        }
    }, [widgetId]);
    // Apply SQL whenever filters change
    useEffect(() => {
        if (dsReady) {
            applySql(filters);
        }
    }, [filters, applySql, dsReady]);
    // Update a filter's value LIVE (immediately applies to map)
    const updateFilterValue = (field, value) => {
        setFilters(prev => {
            const next = Object.assign({}, prev);
            next[field] = Object.assign(Object.assign({}, next[field]), { value });
            return next;
        });
    };
    // Toggle filter on/off via icon click
    const handleIconClick = (field) => {
        const state = filters[field];
        const isActive = state === null || state === void 0 ? void 0 : state.active;
        if (isActive) {
            // Active filter → deactivate and close popover
            const def = _filter_definitions__WEBPACK_IMPORTED_MODULE_3__.FILTER_DEFINITIONS.find(d => d.field === field);
            setFilters(prev => {
                var _a;
                const next = Object.assign({}, prev);
                next[field] = {
                    active: false,
                    value: (_a = def === null || def === void 0 ? void 0 : def.defaultValue) !== null && _a !== void 0 ? _a : 0
                };
                return next;
            });
            setOpenPopover(null);
            setPopoverPos(null);
        }
        else {
            // Inactive filter → activate with default value and open popover
            setFilters(prev => {
                const next = Object.assign({}, prev);
                next[field] = Object.assign(Object.assign({}, next[field]), { active: true });
                return next;
            });
            openPopoverFor(field);
        }
    };
    const openPopoverFor = (field) => {
        const iconEl = iconRefs.current[field];
        if (iconEl) {
            const rect = iconEl.getBoundingClientRect();
            setPopoverPos({
                top: rect.bottom + 6,
                left: Math.max(rect.right - 220, 10)
            });
        }
        setOpenPopover(field);
    };
    const closePopover = () => {
        setOpenPopover(null);
        setPopoverPos(null);
    };
    const handleMouseEnter = (field) => {
        setHoveredIcon(field);
        const iconEl = iconRefs.current[field];
        if (iconEl) {
            const rect = iconEl.getBoundingClientRect();
            setTooltipPos({
                top: rect.bottom + 4,
                left: rect.left + rect.width / 2
            });
        }
    };
    const handleMouseLeave = () => {
        setHoveredIcon(null);
        setTooltipPos(null);
    };
    const openDef = openPopover ? _filter_definitions__WEBPACK_IMPORTED_MODULE_3__.FILTER_DEFINITIONS.find(d => d.field === openPopover) : null;
    const hoveredDef = hoveredIcon ? _filter_definitions__WEBPACK_IMPORTED_MODULE_3__.FILTER_DEFINITIONS.find(d => d.field === hoveredIcon) : null;
    // Portal content: tooltip and popover rendered on document.body
    const portalContent = ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [hoveredIcon && !openPopover && hoveredDef && tooltipPos && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compact-filter-tooltip', style: { top: tooltipPos.top, left: tooltipPos.left, transform: 'translateX(-50%)' }, children: hoveredDef.name })), openPopover && openDef && popoverPos && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compact-filter-backdrop', onClick: closePopover }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'compact-filter-popover', style: { top: popoverPos.top, left: popoverPos.left }, onClick: e => e.stopPropagation(), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compact-filter-popover-title', children: openDef.name }), openDef.type === 'slider' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SliderContent, { def: openDef, value: filters[openPopover].value, onChange: v => updateFilterValue(openPopover, v) })), openDef.type === 'range-slider' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeSliderContent, { def: openDef, value: filters[openPopover].value, onChange: v => updateFilterValue(openPopover, v) }))] })] }))] }));
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'compact-filter-root', children: [((_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: props.useDataSources[0], onDataSourceCreated: handleDsCreated })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'compact-filter-bar', children: _filter_definitions__WEBPACK_IMPORTED_MODULE_3__.FILTER_DEFINITIONS.map(def => {
                    const state = filters[def.field];
                    const isActive = state === null || state === void 0 ? void 0 : state.active;
                    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: el => { iconRefs.current[def.field] = el; }, className: `compact-filter-icon ${isActive ? 'active' : ''}`, onClick: e => { e.stopPropagation(); handleIconClick(def.field); }, onMouseEnter: () => handleMouseEnter(def.field), onMouseLeave: handleMouseLeave, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FilterIconImg, { def: def }) }, def.field));
                }) }), react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(portalContent, document.body)] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21wYWN0LWZpbHRlci9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdJQUFnSSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUs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QUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQy9DLFlBQVksRUFBRSxnQkFBZ0IsWUFFOUIsZ0VBQUMsYUFBYSxJQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUksSUFQdEIsR0FBRyxDQUFDLEtBQUssQ0FRVixDQUNQO2dCQUNILENBQUMsQ0FBQyxHQUNFLEVBRUwsbURBQXFCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFDaEQsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb21wYWN0LWZpbHRlci9zcmMvcnVudGltZS9zdHlsZS5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFjdC1maWx0ZXIvc3JjL3J1bnRpbWUvc3R5bGUuc2Nzcz80Nzg0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhY3QtZmlsdGVyL3NyYy9maWx0ZXItZGVmaW5pdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbXBhY3QtZmlsdGVyL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb21wYWN0LWZpbHRlci1yb290IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1MDtcbn1cblxuLmNvbXBhY3QtZmlsdGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAzcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29tcGFjdC1maWx0ZXItaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBib3JkZXItY29sb3IgMC4xNXM7XG4gIGNvbG9yOiAjY2NjO1xufVxuLmNvbXBhY3QtZmlsdGVyLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuLmNvbXBhY3QtZmlsdGVyLWljb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjEsIDE5MywgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3OWMxO1xuICBjb2xvcjogIzRmYzNmNztcbn1cbi5jb21wYWN0LWZpbHRlci1pY29uIGltZywgLmNvbXBhY3QtZmlsdGVyLWljb24gc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29tcGFjdC1maWx0ZXItaWNvbiBpbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDAuOCk7XG59XG4uY29tcGFjdC1maWx0ZXItaWNvbi5hY3RpdmUgaW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgwLjcpIHNlcGlhKDEpIHNhdHVyYXRlKDUpIGh1ZS1yb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNvbXBhY3QtZmlsdGVyLXRvb2x0aXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC45NSk7XG4gIGNvbG9yOiAjZWVlO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDAxO1xufVxuXG4uY29tcGFjdC1maWx0ZXItcG9wb3ZlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjk1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIG1pbi13aWR0aDogMjIwcHg7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5jb21wYWN0LWZpbHRlci1wb3BvdmVyLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4uY29tcGFjdC1maWx0ZXItc2xpZGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uY29tcGFjdC1maWx0ZXItc2xpZGVyIHtcbiAgZmxleDogMTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29tcGFjdC1maWx0ZXItc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OWMxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29tcGFjdC1maWx0ZXItc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OWMxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbXBhY3QtZmlsdGVyLXZhbHVlIHtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLmNvbXBhY3QtZmlsdGVyLXJhbmdlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5jb21wYWN0LWZpbHRlci1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk5O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29tcGFjdC1maWx0ZXIvc3JjL3J1bnRpbWUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLHFDQUFBO0FBQ0o7QUFFRTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUlFO0VBQ0UsaUNBQUE7QUFGSjtBQUtFO0VBQ0UseUVBQUE7QUFISjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUpGOztBQU9BO0VBQ0UsT0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBSkY7QUFNRTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUpKO0FBT0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFQRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29tcGFjdC1maWx0ZXItcm9vdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA1MDtcXG59XFxuXFxuLmNvbXBhY3QtZmlsdGVyLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogM3B4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItaWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBib3JkZXItY29sb3IgMC4xNXM7XFxuICBjb2xvcjogI2NjYztcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgfVxcblxcbiAgJi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMSwgMTkzLCAwLjMpO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDc5YzE7XFxuICAgIGNvbG9yOiAjNGZjM2Y3O1xcbiAgfVxcblxcbiAgaW1nLCBzdmcge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMC44KTtcXG4gIH1cXG5cXG4gICYuYWN0aXZlIGltZyB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMC43KSBzZXBpYSgxKSBzYXR1cmF0ZSg1KSBodWUtcm90YXRlKDE4MGRlZyk7XFxuICB9XFxufVxcblxcbi5jb21wYWN0LWZpbHRlci10b29sdGlwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC45NSk7XFxuICBjb2xvcjogI2VlZTtcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAxMDAwMTtcXG59XFxuXFxuLmNvbXBhY3QtZmlsdGVyLXBvcG92ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjk1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICBtaW4td2lkdGg6IDIyMHB4O1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBjb2xvcjogI2VlZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmNvbXBhY3QtZmlsdGVyLXBvcG92ZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItc2xpZGVyLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItc2xpZGVyIHtcXG4gIGZsZXg6IDE7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICMwMDc5YzE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICY6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICMwMDc5YzE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uY29tcGFjdC1maWx0ZXItdmFsdWUge1xcbiAgbWluLXdpZHRoOiAzNXB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XFxufVxcblxcbi5jb21wYWN0LWZpbHRlci1yYW5nZS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuXFxuLmNvbXBhY3QtZmlsdGVyLWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgdHlwZSBGaWx0ZXJUeXBlID0gJ3NsaWRlcicgfCAncmFuZ2Utc2xpZGVyJyB8ICdtdWx0aS1zZWxlY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyRmlsdGVyRGVmIHtcbiAgdHlwZTogJ3NsaWRlcidcbiAgZmllbGQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgb3BlcmF0b3I6ICc8JyB8ICc+J1xuICBtaW46IG51bWJlclxuICBtYXg6IG51bWJlclxuICBzdGVwOiBudW1iZXJcbiAgZGVmYXVsdFZhbHVlOiBudW1iZXJcbiAgdW5pdD86IHN0cmluZ1xuICBpY29uVHlwZTogJ3N2ZycgfCAncG5nJ1xuICBpY29uU3ZnPzogc3RyaW5nXG4gIGljb25Qbmc/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSYW5nZVNsaWRlckZpbHRlckRlZiB7XG4gIHR5cGU6ICdyYW5nZS1zbGlkZXInXG4gIGZpZWxkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIG1pbjogbnVtYmVyXG4gIG1heDogbnVtYmVyXG4gIHN0ZXA6IG51bWJlclxuICBkZWZhdWx0VmFsdWU6IFtudW1iZXIsIG51bWJlcl1cbiAgdW5pdD86IHN0cmluZ1xuICBpY29uVHlwZTogJ3N2ZycgfCAncG5nJ1xuICBpY29uU3ZnPzogc3RyaW5nXG4gIGljb25Qbmc/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVNlbGVjdEZpbHRlckRlZiB7XG4gIHR5cGU6ICdtdWx0aS1zZWxlY3QnXG4gIGZpZWxkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIG9wdGlvbnM6IG51bWJlcltdXG4gIGRlZmF1bHRWYWx1ZTogbnVtYmVyW11cbiAgaWNvblR5cGU6ICdzdmcnIHwgJ3BuZydcbiAgaWNvblN2Zz86IHN0cmluZ1xuICBpY29uUG5nPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIEZpbHRlckRlZiA9IFNsaWRlckZpbHRlckRlZiB8IFJhbmdlU2xpZGVyRmlsdGVyRGVmIHwgTXVsdGlTZWxlY3RGaWx0ZXJEZWZcblxuLy8gLS0tIFNWRyBpY29ucyAtLS1cblxuY29uc3Qgc3VuU3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAxNiAxN1wiPjxnIGNsaXAtcGF0aD1cInVybCgjYSlcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0xMi4xNTMgNi4wNTQtLjcwNy0uNzA3IDIuMi0yLjIuNzA4LjcwN3ptLTkuNTA3IDguMDkyLjcwNy43MDcgMi4yLTIuMi0uNzA2LS43MDd6bTguOC0xLjQ5MyAyLjIgMi4yLjcwNy0uNzA2LTIuMi0yLjJ6TTUuNTU0IDUuMzQ3bC0yLjItMi4yLS43MDcuNzA2IDIuMiAyLjJ6TTkgMS41SDh2M2gxem0tMSAxNWgxdi0zSDh6bTgtN3YtMWgtM3Yxem0tMTUgMGgzdi0xSDF6TTUgOWEzLjUgMy41IDAgMSAxIDcgMCAzLjUgMy41IDAgMCAxLTcgMG0xIDBhMi41IDIuNSAwIDEgMCA1IDAgMi41IDIuNSAwIDAgMC01IDBcIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD1cImFcIj48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMCAuNWgxNnYxNkgwelwiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4nXG5cbmNvbnN0IHBlZGVzdHJpYW5TdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxjaXJjbGUgY3g9XCI5XCIgY3k9XCIyLjVcIiByPVwiMS41XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMS41IDYuNSA5LjcgNS4yYTEuNSAxLjUgMCAwIDAtMS43IDBMNi41IDYuM2ExIDEgMCAwIDAtLjQuOHYyLjRoMS4yVjcuN2wxLjItLjgtLjggMy42LTIuNCAyLjQuOC44IDIuMi0yLjIgMSAyLjVoMS4zbC0xLjMtMy41IDEtMi41LjkgMXYyLjVoMS4yVjguM2ExIDEgMCAwIDAtLjQtLjh6XCIvPjwvc3ZnPidcblxuY29uc3QgY2FyU3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMy40IDUuNWwtLjktMi43QTEuNSAxLjUgMCAwIDAgMTEuMSAySDQuOWExLjUgMS41IDAgMCAwLTEuNCAxbC0uOSAyLjZBMS41IDEuNSAwIDAgMCAyIDYuOFYxMWExIDEgMCAwIDAgMSAxaDFhMSAxIDAgMCAwIDEtMXYtLjVoNlYxMWExIDEgMCAwIDAgMSAxaDFhMSAxIDAgMCAwIDEtMVY2LjhjMC0uNS0uMi0uOS0uNi0xLjJ6TTQuOSAzaDYuMmwuOCAyLjVINC4xek00LjUgOWExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJtNyAwYTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMnpcIi8+PC9zdmc+J1xuXG5jb25zdCBidWlsZGluZ3NTdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIgMTRWM2g1djNoN3Y4em0xLTFoM1Y0SDN6bTQgMGgydi0ySDd6bTMgMGgydi0yaC0yem0zIDBoMVY3SDhWNGgxdjJoNnpNNCA2aDFWNUg0em0wIDJoMVY3SDR6bTAgMmgxVjlINHptMCAyaDF2LTFINHptNS00aDFWN0g5em0wIDJoMVY5SDl6bTItMmgxVjdoLTF6bTAgMmgxVjloLTF6XCIvPjwvc3ZnPidcblxuY29uc3Qgc2hvcHBpbmdTdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUgMTQuNWExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJtNyAwYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMk0yLjMgMkguNXYxaDEuMmwyLjEgNy40YTEgMSAwIDAgMCAxIC42aDYuNGExIDEgMCAwIDAgMS0uNkwxNC41IDRINGwuNiAyaDhsLTEuNCA0SDUuMnpcIi8+PC9zdmc+J1xuXG5jb25zdCBtZWFzdXJlU3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm0xNS4xOCAzLjg5LTIuODUgMi44NS0uNzEtLjcgMS42MS0xLjY1SDl2LTFoNC4zMmwtMS43LTEuNjkuNzEtLjd6TTAgMTQuMzl2LTZoMTZ2NnptMTQtM2gxdi0ySDF2NGgxdi0yaDF2Mmgxdi0zaDF2M2gxdi0yaDF2Mmgxdi0zaDF2M2gxdi0yaDF2Mmgxdi0zaDF2M2gxem0tNy04SDIuNjhsMS43LTEuNjUtLjcxLS43TC44MiAzLjg5bDIuODUgMi44NS43MS0uNy0xLjYxLTEuNjVIN3pcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPidcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9ERUZJTklUSU9OUzogRmlsdGVyRGVmW10gPSBbXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdzdW1tZXJfU0knLCBuYW1lOiAnU2hhZGUgSW5kZXgnLFxuICAgIG9wZXJhdG9yOiAnPCcsIG1pbjogMCwgbWF4OiAxLCBzdGVwOiAwLjA1LCBkZWZhdWx0VmFsdWU6IDAuNCxcbiAgICBpY29uVHlwZTogJ3N2ZycsIGljb25Tdmc6IHN1blN2Z1xuICB9LFxuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnY2xhc3NfMmsnLCBuYW1lOiAnTmVpZ2hib3VyaG9vZCB0cmFuc2l0JyxcbiAgICBvcGVyYXRvcjogJz4nLCBtaW46IDAsIG1heDogNywgc3RlcDogMSwgZGVmYXVsdFZhbHVlOiA0LFxuICAgIGljb25UeXBlOiAnc3ZnJywgaWNvblN2ZzogcGVkZXN0cmlhblN2Z1xuICB9LFxuICB7XG4gICAgdHlwZTogJ3NsaWRlcicsIGZpZWxkOiAnY2xhc3NfNWsnLCBuYW1lOiAnQ2l0eSB0cmFuc2l0JyxcbiAgICBvcGVyYXRvcjogJz4nLCBtaW46IDAsIG1heDogNywgc3RlcDogMSwgZGVmYXVsdFZhbHVlOiA0LFxuICAgIGljb25UeXBlOiAnc3ZnJywgaWNvblN2ZzogY2FyU3ZnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdjbGFzc19haTFrJywgbmFtZTogJ0xvY2FsIGNlbnRlcnMnLFxuICAgIG9wZXJhdG9yOiAnPicsIG1pbjogMCwgbWF4OiA3LCBzdGVwOiAxLCBkZWZhdWx0VmFsdWU6IDUsXG4gICAgaWNvblR5cGU6ICdwbmcnLCBpY29uUG5nOiAnd2Fsa2luZy5wbmcnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdGU0k1MDBfbWVhJywgbmFtZTogJ0J1aWxkaW5nIGRlbnNpdHknLFxuICAgIG9wZXJhdG9yOiAnPicsIG1pbjogMCwgbWF4OiA1LCBzdGVwOiAwLjEsIGRlZmF1bHRWYWx1ZTogMS41LFxuICAgIGljb25UeXBlOiAnc3ZnJywgaWNvblN2ZzogYnVpbGRpbmdzU3ZnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdBUnc1MDBsbV8xJywgbmFtZTogJ0NvbW1lcmNpYWwgcHJveGltaXR5JyxcbiAgICBvcGVyYXRvcjogJz4nLCBtaW46IDAsIG1heDogMjAwLCBzdGVwOiA1LCBkZWZhdWx0VmFsdWU6IDYwLFxuICAgIGljb25UeXBlOiAnc3ZnJywgaWNvblN2Zzogc2hvcHBpbmdTdmdcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdzbGlkZXInLCBmaWVsZDogJ0FEd3NfbWVhbicsIG5hbWU6ICdTY2hvb2wgcHJveGltaXR5JyxcbiAgICBvcGVyYXRvcjogJzwnLCBtaW46IDAsIG1heDogMTAwMCwgc3RlcDogMjUsIGRlZmF1bHRWYWx1ZTogMzAwLCB1bml0OiAnbScsXG4gICAgaWNvblR5cGU6ICdwbmcnLCBpY29uUG5nOiAnZWR1Y2F0aW9uLnBuZydcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdzbGlkZXInLCBmaWVsZDogJ0FEd21fbWVhbicsIG5hbWU6ICdUcmFtL21ldHJvIHByb3hpbWl0eScsXG4gICAgb3BlcmF0b3I6ICc8JywgbWluOiAwLCBtYXg6IDEwMDAsIHN0ZXA6IDI1LCBkZWZhdWx0VmFsdWU6IDMwMCwgdW5pdDogJ20nLFxuICAgIGljb25UeXBlOiAncG5nJywgaWNvblBuZzogJ3RyYW5zcG9ydC5wbmcnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnc2xpZGVyJywgZmllbGQ6ICdBRHdidV9tZWFuJywgbmFtZTogJ0J1cyBzdG9wIHByb3hpbWl0eScsXG4gICAgb3BlcmF0b3I6ICc8JywgbWluOiAwLCBtYXg6IDEwMDAsIHN0ZXA6IDI1LCBkZWZhdWx0VmFsdWU6IDMwMCwgdW5pdDogJ20nLFxuICAgIGljb25UeXBlOiAncG5nJywgaWNvblBuZzogJ2J1cy5wbmcnXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAncmFuZ2Utc2xpZGVyJywgZmllbGQ6ICd3aWR0aCcsIG5hbWU6ICdTdHJlZXQgd2lkdGgnLFxuICAgIG1pbjogMCwgbWF4OiA2MCwgc3RlcDogMSwgZGVmYXVsdFZhbHVlOiBbMjAsIDMwXSBhcyBbbnVtYmVyLCBudW1iZXJdLCB1bml0OiAnbScsXG4gICAgaWNvblR5cGU6ICdzdmcnLCBpY29uU3ZnOiBtZWFzdXJlU3ZnXG4gIH1cbl1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIERhdGFTb3VyY2VDb21wb25lbnQgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgRklMVEVSX0RFRklOSVRJT05TLCB0eXBlIEZpbHRlckRlZiB9IGZyb20gJy4uL2ZpbHRlci1kZWZpbml0aW9ucydcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSA9IFJlYWN0XG5cbi8vIC0tLSBUeXBlcyAtLS1cblxuaW50ZXJmYWNlIEZpbHRlclN0YXRlIHtcbiAgYWN0aXZlOiBib29sZWFuXG4gIHZhbHVlOiBudW1iZXIgfCBbbnVtYmVyLCBudW1iZXJdIHwgbnVtYmVyW11cbn1cblxudHlwZSBGaWx0ZXJzTWFwID0gUmVjb3JkPHN0cmluZywgRmlsdGVyU3RhdGU+XG5cbi8vIC0tLSBTUUwgZ2VuZXJhdGlvbiAtLS1cblxuZnVuY3Rpb24gYnVpbGRDbGF1c2UgKGRlZjogRmlsdGVyRGVmLCBzdGF0ZTogRmlsdGVyU3RhdGUpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGRlZi50eXBlKSB7XG4gICAgY2FzZSAnc2xpZGVyJzpcbiAgICAgIHJldHVybiBgJHtkZWYuZmllbGR9ICR7ZGVmLm9wZXJhdG9yfSAke3N0YXRlLnZhbHVlfWBcbiAgICBjYXNlICdyYW5nZS1zbGlkZXInOiB7XG4gICAgICBjb25zdCBbbG8sIGhpXSA9IHN0YXRlLnZhbHVlIGFzIFtudW1iZXIsIG51bWJlcl1cbiAgICAgIHJldHVybiBgJHtkZWYuZmllbGR9IEJFVFdFRU4gJHtsb30gQU5EICR7aGl9YFxuICAgIH1cbiAgICBjYXNlICdtdWx0aS1zZWxlY3QnOiB7XG4gICAgICBjb25zdCB2YWxzID0gc3RhdGUudmFsdWUgYXMgbnVtYmVyW11cbiAgICAgIHJldHVybiB2YWxzLmxlbmd0aCA+IDAgPyBgJHtkZWYuZmllbGR9IElOICgke3ZhbHMuam9pbignLCcpfSlgIDogJzE9MCdcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRDb21iaW5lZFNxbCAoZmlsdGVyczogRmlsdGVyc01hcCk6IHN0cmluZyB7XG4gIGNvbnN0IGNsYXVzZXM6IHN0cmluZ1tdID0gW11cbiAgZm9yIChjb25zdCBkZWYgb2YgRklMVEVSX0RFRklOSVRJT05TKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBmaWx0ZXJzW2RlZi5maWVsZF1cbiAgICBpZiAoc3RhdGU/LmFjdGl2ZSkge1xuICAgICAgY2xhdXNlcy5wdXNoKGJ1aWxkQ2xhdXNlKGRlZiwgc3RhdGUpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhdXNlcy5sZW5ndGggPiAwID8gY2xhdXNlcy5qb2luKCcgQU5EICcpIDogJzE9MSdcbn1cblxuLy8gLS0tIEluaXRpYWwgc3RhdGUgLS0tXG5cbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxGaWx0ZXJzICgpOiBGaWx0ZXJzTWFwIHtcbiAgY29uc3QgbWFwOiBGaWx0ZXJzTWFwID0ge31cbiAgZm9yIChjb25zdCBkZWYgb2YgRklMVEVSX0RFRklOSVRJT05TKSB7XG4gICAgbWFwW2RlZi5maWVsZF0gPSB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGRlZi50eXBlID09PSAnbXVsdGktc2VsZWN0J1xuICAgICAgICA/IFsuLi5kZWYuZGVmYXVsdFZhbHVlXVxuICAgICAgICA6IGRlZi5kZWZhdWx0VmFsdWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hcFxufVxuXG4vLyAtLS0gSWNvbiByZW5kZXJpbmcgLS0tXG5cbmZ1bmN0aW9uIEZpbHRlckljb25JbWcgKHsgZGVmIH06IHsgZGVmOiBGaWx0ZXJEZWYgfSkge1xuICBpZiAoZGVmLmljb25UeXBlID09PSAnc3ZnJyAmJiBkZWYuaWNvblN2Zykge1xuICAgIHJldHVybiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlZi5pY29uU3ZnIH19IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6IDE4LCBoZWlnaHQ6IDE4IH19IC8+XG4gIH1cbiAgaWYgKGRlZi5pY29uVHlwZSA9PT0gJ3BuZycgJiYgZGVmLmljb25QbmcpIHtcbiAgICBjb25zdCBiYXNlID0gKHdpbmRvdyBhcyBhbnkpLmppbXVDb25maWc/LmJhc2VVcmwgfHwgJydcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlfXdpZGdldHMvY29tcGFjdC1maWx0ZXIvZGlzdC9ydW50aW1lL2Fzc2V0cy8ke2RlZi5pY29uUG5nfWBcbiAgICByZXR1cm4gPGltZyBzcmM9e3VybH0gYWx0PXtkZWYubmFtZX0gLz5cbiAgfVxuICByZXR1cm4gPHNwYW4+Pzwvc3Bhbj5cbn1cblxuLy8gLS0tIFNsaWRlciBwb3BvdmVyIGNvbnRlbnQgLS0tXG5cbmZ1bmN0aW9uIFNsaWRlckNvbnRlbnQgKHsgZGVmLCB2YWx1ZSwgb25DaGFuZ2UgfToge1xuICBkZWY6IEZpbHRlckRlZiAmIHsgdHlwZTogJ3NsaWRlcicgfVxuICB2YWx1ZTogbnVtYmVyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZFxufSkge1xuICBjb25zdCBkaXNwbGF5VmFsID0gZGVmLnN0ZXAgPCAxID8gdmFsdWUudG9GaXhlZCgyKSA6IFN0cmluZyh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXNsaWRlci1yb3cnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXZhbHVlJz57ZGVmLm1pbn08L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3JhbmdlJ1xuICAgICAgICAgIGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItc2xpZGVyJ1xuICAgICAgICAgIG1pbj17ZGVmLm1pbn1cbiAgICAgICAgICBtYXg9e2RlZi5tYXh9XG4gICAgICAgICAgc3RlcD17ZGVmLnN0ZXB9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXZhbHVlJz57ZGlzcGxheVZhbH17ZGVmLnVuaXQgfHwgJyd9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgY29sb3I6ICcjODg4JywgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICB7ZGVmLm9wZXJhdG9yID09PSAnPCcgPyAnTGVzcyB0aGFuJyA6ICdHcmVhdGVyIHRoYW4nfSB7ZGlzcGxheVZhbH17ZGVmLnVuaXQgfHwgJyd9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyAtLS0gUmFuZ2Ugc2xpZGVyIHBvcG92ZXIgY29udGVudCAtLS1cblxuZnVuY3Rpb24gUmFuZ2VTbGlkZXJDb250ZW50ICh7IGRlZiwgdmFsdWUsIG9uQ2hhbmdlIH06IHtcbiAgZGVmOiBGaWx0ZXJEZWYgJiB7IHR5cGU6ICdyYW5nZS1zbGlkZXInIH1cbiAgdmFsdWU6IFtudW1iZXIsIG51bWJlcl1cbiAgb25DaGFuZ2U6ICh2YWx1ZTogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZFxufSkge1xuICBjb25zdCBbbG8sIGhpXSA9IHZhbHVlXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci1yYW5nZS1yb3cnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXZhbHVlJz57bG99e2RlZi51bml0IHx8ICcnfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjODg4JyB9fT4tPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXZhbHVlJz57aGl9e2RlZi51bml0IHx8ICcnfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEwLCBjb2xvcjogJyM4ODgnLCBtYXJnaW5Cb3R0b206IDIgfX0+TWluPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3JhbmdlJ1xuICAgICAgICAgIGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItc2xpZGVyJ1xuICAgICAgICAgIG1pbj17ZGVmLm1pbn1cbiAgICAgICAgICBtYXg9e2RlZi5tYXh9XG4gICAgICAgICAgc3RlcD17ZGVmLnN0ZXB9XG4gICAgICAgICAgdmFsdWU9e2xvfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICBvbkNoYW5nZShbTWF0aC5taW4odiwgaGkpLCBoaV0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTAsIGNvbG9yOiAnIzg4OCcsIG1hcmdpbkJvdHRvbTogMiB9fT5NYXg8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ncmFuZ2UnXG4gICAgICAgICAgY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci1zbGlkZXInXG4gICAgICAgICAgbWluPXtkZWYubWlufVxuICAgICAgICAgIG1heD17ZGVmLm1heH1cbiAgICAgICAgICBzdGVwPXtkZWYuc3RlcH1cbiAgICAgICAgICB2YWx1ZT17aGl9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgdiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIG9uQ2hhbmdlKFtsbywgTWF0aC5tYXgodiwgbG8pXSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gLS0tIE1haW4gd2lkZ2V0IC0tLVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wYWN0RmlsdGVyV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlPEZpbHRlcnNNYXA+KGNyZWF0ZUluaXRpYWxGaWx0ZXJzKVxuICBjb25zdCBbb3BlblBvcG92ZXIsIHNldE9wZW5Qb3BvdmVyXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtob3ZlcmVkSWNvbiwgc2V0SG92ZXJlZEljb25dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3BvcG92ZXJQb3MsIHNldFBvcG92ZXJQb3NdID0gdXNlU3RhdGU8eyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0gfCBudWxsPihudWxsKVxuICBjb25zdCBbdG9vbHRpcFBvcywgc2V0VG9vbHRpcFBvc10gPSB1c2VTdGF0ZTx7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IHByZXZTcWxSZWYgPSB1c2VSZWY8c3RyaW5nPignJylcbiAgY29uc3QgaWNvblJlZnMgPSB1c2VSZWY8UmVjb3JkPHN0cmluZywgSFRNTERpdkVsZW1lbnQgfCBudWxsPj4oe30pXG4gIGNvbnN0IGRzUmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgY29uc3QgW2RzUmVhZHksIHNldERzUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgd2lkZ2V0SWQgPSBwcm9wcy5pZCB8fCAnd2lkZ2V0XzIwMSdcblxuICBjb25zdCBoYW5kbGVEc0NyZWF0ZWQgPSB1c2VDYWxsYmFjaygoZHM6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbY29tcGFjdC1maWx0ZXJdIERhdGEgc291cmNlIGNyZWF0ZWQ6JywgZHM/LmlkKVxuICAgIGRzUmVmLmN1cnJlbnQgPSBkc1xuICAgIHByZXZTcWxSZWYuY3VycmVudCA9ICcnXG4gICAgc2V0RHNSZWFkeSh0cnVlKVxuICB9LCBbXSlcblxuICAvLyBBcHBseSBTUUwgdG8gZGF0YSBzb3VyY2Ug4oCUIGNhbGxlZCB3aGVuZXZlciBmaWx0ZXJzIGNoYW5nZVxuICBjb25zdCBhcHBseVNxbCA9IHVzZUNhbGxiYWNrKChjdXJyZW50RmlsdGVyczogRmlsdGVyc01hcCkgPT4ge1xuICAgIGNvbnN0IHNxbCA9IGJ1aWxkQ29tYmluZWRTcWwoY3VycmVudEZpbHRlcnMpXG4gICAgaWYgKHNxbCA9PT0gcHJldlNxbFJlZi5jdXJyZW50KSByZXR1cm5cbiAgICBwcmV2U3FsUmVmLmN1cnJlbnQgPSBzcWxcblxuICAgIGNvbnN0IGRzID0gZHNSZWYuY3VycmVudFxuICAgIGlmICghZHMpIHJldHVyblxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChkcy51cGRhdGVRdWVyeVBhcmFtcykge1xuICAgICAgICBkcy51cGRhdGVRdWVyeVBhcmFtcyh7IHdoZXJlOiBzcWwgfSwgd2lkZ2V0SWQpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW2NvbXBhY3QtZmlsdGVyXSBGYWlsZWQgdG8gYXBwbHkgZmlsdGVyczonLCBlKVxuICAgIH1cbiAgfSwgW3dpZGdldElkXSlcblxuICAvLyBBcHBseSBTUUwgd2hlbmV2ZXIgZmlsdGVycyBjaGFuZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZHNSZWFkeSkge1xuICAgICAgYXBwbHlTcWwoZmlsdGVycylcbiAgICB9XG4gIH0sIFtmaWx0ZXJzLCBhcHBseVNxbCwgZHNSZWFkeV0pXG5cbiAgLy8gVXBkYXRlIGEgZmlsdGVyJ3MgdmFsdWUgTElWRSAoaW1tZWRpYXRlbHkgYXBwbGllcyB0byBtYXApXG4gIGNvbnN0IHVwZGF0ZUZpbHRlclZhbHVlID0gKGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICBzZXRGaWx0ZXJzKHByZXYgPT4ge1xuICAgICAgY29uc3QgbmV4dCA9IHsgLi4ucHJldiB9XG4gICAgICBuZXh0W2ZpZWxkXSA9IHsgLi4ubmV4dFtmaWVsZF0sIHZhbHVlIH1cbiAgICAgIHJldHVybiBuZXh0XG4gICAgfSlcbiAgfVxuXG4gIC8vIFRvZ2dsZSBmaWx0ZXIgb24vb2ZmIHZpYSBpY29uIGNsaWNrXG4gIGNvbnN0IGhhbmRsZUljb25DbGljayA9IChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBmaWx0ZXJzW2ZpZWxkXVxuICAgIGNvbnN0IGlzQWN0aXZlID0gc3RhdGU/LmFjdGl2ZVxuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAvLyBBY3RpdmUgZmlsdGVyIOKGkiBkZWFjdGl2YXRlIGFuZCBjbG9zZSBwb3BvdmVyXG4gICAgICBjb25zdCBkZWYgPSBGSUxURVJfREVGSU5JVElPTlMuZmluZChkID0+IGQuZmllbGQgPT09IGZpZWxkKVxuICAgICAgc2V0RmlsdGVycyhwcmV2ID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IHsgLi4ucHJldiB9XG4gICAgICAgIG5leHRbZmllbGRdID0ge1xuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IGRlZj8uZGVmYXVsdFZhbHVlID8/IDBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dFxuICAgICAgfSlcbiAgICAgIHNldE9wZW5Qb3BvdmVyKG51bGwpXG4gICAgICBzZXRQb3BvdmVyUG9zKG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEluYWN0aXZlIGZpbHRlciDihpIgYWN0aXZhdGUgd2l0aCBkZWZhdWx0IHZhbHVlIGFuZCBvcGVuIHBvcG92ZXJcbiAgICAgIHNldEZpbHRlcnMocHJldiA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSB7IC4uLnByZXYgfVxuICAgICAgICBuZXh0W2ZpZWxkXSA9IHsgLi4ubmV4dFtmaWVsZF0sIGFjdGl2ZTogdHJ1ZSB9XG4gICAgICAgIHJldHVybiBuZXh0XG4gICAgICB9KVxuICAgICAgb3BlblBvcG92ZXJGb3IoZmllbGQpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb3BlblBvcG92ZXJGb3IgPSAoZmllbGQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGljb25FbCA9IGljb25SZWZzLmN1cnJlbnRbZmllbGRdXG4gICAgaWYgKGljb25FbCkge1xuICAgICAgY29uc3QgcmVjdCA9IGljb25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgc2V0UG9wb3ZlclBvcyh7XG4gICAgICAgIHRvcDogcmVjdC5ib3R0b20gKyA2LFxuICAgICAgICBsZWZ0OiBNYXRoLm1heChyZWN0LnJpZ2h0IC0gMjIwLCAxMClcbiAgICAgIH0pXG4gICAgfVxuICAgIHNldE9wZW5Qb3BvdmVyKGZpZWxkKVxuICB9XG5cbiAgY29uc3QgY2xvc2VQb3BvdmVyID0gKCkgPT4ge1xuICAgIHNldE9wZW5Qb3BvdmVyKG51bGwpXG4gICAgc2V0UG9wb3ZlclBvcyhudWxsKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0SG92ZXJlZEljb24oZmllbGQpXG4gICAgY29uc3QgaWNvbkVsID0gaWNvblJlZnMuY3VycmVudFtmaWVsZF1cbiAgICBpZiAoaWNvbkVsKSB7XG4gICAgICBjb25zdCByZWN0ID0gaWNvbkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBzZXRUb29sdGlwUG9zKHtcbiAgICAgICAgdG9wOiByZWN0LmJvdHRvbSArIDQsXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0SG92ZXJlZEljb24obnVsbClcbiAgICBzZXRUb29sdGlwUG9zKG51bGwpXG4gIH1cblxuICBjb25zdCBvcGVuRGVmID0gb3BlblBvcG92ZXIgPyBGSUxURVJfREVGSU5JVElPTlMuZmluZChkID0+IGQuZmllbGQgPT09IG9wZW5Qb3BvdmVyKSA6IG51bGxcbiAgY29uc3QgaG92ZXJlZERlZiA9IGhvdmVyZWRJY29uID8gRklMVEVSX0RFRklOSVRJT05TLmZpbmQoZCA9PiBkLmZpZWxkID09PSBob3ZlcmVkSWNvbikgOiBudWxsXG5cbiAgLy8gUG9ydGFsIGNvbnRlbnQ6IHRvb2x0aXAgYW5kIHBvcG92ZXIgcmVuZGVyZWQgb24gZG9jdW1lbnQuYm9keVxuICBjb25zdCBwb3J0YWxDb250ZW50ID0gKFxuICAgIDw+XG4gICAgICB7aG92ZXJlZEljb24gJiYgIW9wZW5Qb3BvdmVyICYmIGhvdmVyZWREZWYgJiYgdG9vbHRpcFBvcyAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXRvb2x0aXAnXG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiB0b29sdGlwUG9zLnRvcCwgbGVmdDogdG9vbHRpcFBvcy5sZWZ0LCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9fVxuICAgICAgICA+XG4gICAgICAgICAge2hvdmVyZWREZWYubmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7b3BlblBvcG92ZXIgJiYgb3BlbkRlZiAmJiBwb3BvdmVyUG9zICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItYmFja2Ryb3AnIG9uQ2xpY2s9e2Nsb3NlUG9wb3Zlcn0gLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLXBvcG92ZXInXG4gICAgICAgICAgICBzdHlsZT17eyB0b3A6IHBvcG92ZXJQb3MudG9wLCBsZWZ0OiBwb3BvdmVyUG9zLmxlZnQgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1maWx0ZXItcG9wb3Zlci10aXRsZSc+e29wZW5EZWYubmFtZX08L2Rpdj5cblxuICAgICAgICAgICAge29wZW5EZWYudHlwZSA9PT0gJ3NsaWRlcicgJiYgKFxuICAgICAgICAgICAgICA8U2xpZGVyQ29udGVudFxuICAgICAgICAgICAgICAgIGRlZj17b3BlbkRlZiBhcyBhbnl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlcnNbb3BlblBvcG92ZXJdLnZhbHVlIGFzIG51bWJlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17diA9PiB1cGRhdGVGaWx0ZXJWYWx1ZShvcGVuUG9wb3Zlciwgdil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge29wZW5EZWYudHlwZSA9PT0gJ3JhbmdlLXNsaWRlcicgJiYgKFxuICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXJDb250ZW50XG4gICAgICAgICAgICAgICAgZGVmPXtvcGVuRGVmIGFzIGFueX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyc1tvcGVuUG9wb3Zlcl0udmFsdWUgYXMgW251bWJlciwgbnVtYmVyXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17diA9PiB1cGRhdGVGaWx0ZXJWYWx1ZShvcGVuUG9wb3Zlciwgdil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWZpbHRlci1yb290Jz5cbiAgICAgIHtwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdICYmIChcbiAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgICB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlc1swXX1cbiAgICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVEc0NyZWF0ZWR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtZmlsdGVyLWJhcic+XG4gICAgICAgIHtGSUxURVJfREVGSU5JVElPTlMubWFwKGRlZiA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSBmaWx0ZXJzW2RlZi5maWVsZF1cbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHN0YXRlPy5hY3RpdmVcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17ZGVmLmZpZWxkfVxuICAgICAgICAgICAgICByZWY9e2VsID0+IHsgaWNvblJlZnMuY3VycmVudFtkZWYuZmllbGRdID0gZWwgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29tcGFjdC1maWx0ZXItaWNvbiAke2lzQWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgaGFuZGxlSWNvbkNsaWNrKGRlZi5maWVsZCkgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVNb3VzZUVudGVyKGRlZi5maWVsZCl9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZpbHRlckljb25JbWcgZGVmPXtkZWZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtSZWFjdERPTS5jcmVhdGVQb3J0YWwocG9ydGFsQ29udGVudCwgZG9jdW1lbnQuYm9keSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=