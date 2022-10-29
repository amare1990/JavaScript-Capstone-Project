"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjavascript_capstone_project"] = self["webpackChunkjavascript_capstone_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  list-style: none;\\n}\\n\\nbody {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  font-style: normal;\\n  font-size: 16px;\\n  font-weight: 400;\\n  background-color: steelblue;\\n}\\n\\nimg {\\n  width: initial;\\n}\\n\\n.wrapper {\\n  width: 100%;\\n  height: auto;\\n  margin: 0 auto;\\n  background-color: #2d2013;\\n}\\n\\nheader {\\n  background-color: #23180d;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.logo,\\n.navlink {\\n  padding: 0 100px;\\n}\\n\\n.navlink {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n}\\n\\n.menu-item {\\n  padding-left: 20px;\\n}\\n\\n.menu-link {\\n  color: #fff;\\n  font-weight: 600;\\n}\\n\\n.active,\\n.menu-link:hover {\\n  background-color: #c52d2f;\\n  padding: 5px 12px;\\n  border-radius: 3px;\\n  line-height: 24px;\\n  display: inline-block;\\n}\\n\\n.meal-img {\\n  width: 300px;\\n  height: 300px;\\n}\\n\\n.menu-grids {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  text-align: center;\\n  row-gap: 40px;\\n  padding-bottom: 20px;\\n}\\n\\n.title,\\n.like-text {\\n  color: #fff;\\n}\\n\\n.forum-links-wrapper {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.forum-links {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.meal-search {\\n  width: 120px;\\n  padding: 5px 0 5px 10px;\\n  border-radius: 4px;\\n  background-color: #fff;\\n  margin-left: 10px;\\n}\\n\\n.menu-description {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.like-wrapper {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: row;\\n  justify-content: center;\\n  gap: 30px;\\n}\\n\\n.like-btn {\\n  cursor: pointer;\\n}\\n\\n.like-btn:active {\\n  color: rgb(228, 35, 115);\\n}\\n\\n.like-btn:hover {\\n  color: purple;\\n}\\n\\n.likes-number-wrapper {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  padding-right: 50px;\\n  gap: 3px;\\n}\\n\\n.number-span {\\n  color: #fff;\\n  font-weight: 700;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.comment-btn {\\n  background-color: #0d302b;\\n  color: #fff;\\n  padding: 5px 7px;\\n  border-radius: 5px;\\n  font-size: 16px;\\n}\\n\\n/* Footer style */\\n.footer {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  font-size: 1em;\\n  background-color: #10141a;\\n  color: #d2d1d3;\\n  height: 100px;\\n}\\n\\n.footer a {\\n  color: #e1362c;\\n  text-decoration: none;\\n}\\n\\n.footer a:hover {\\n  color: green;\\n  transition: all 0.3s ease-in;\\n  transform: scale(1.1);\\n}\\n\\n.copyright {\\n  color: #fff;\\n}\\n\\n/* Homepage styling */\\n.homepage-container {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.homepage-desc {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: center;\\n  color: #fff;\\n}\\n\\n.meal-title {\\n  font-size: 36px;\\n}\\n\\n.btn-group {\\n  background-color: #fb0;\\n  width: 150px;\\n  align-content: center;\\n}\\n\\n.paypal,\\n.subscribe {\\n  padding: 3px 0;\\n  border: none;\\n  background-color: #fb0;\\n}\\n\\n.horiz {\\n  width: 90%;\\n  margin: 0 auto;\\n  height: 3px;\\n  background-color: #fff;\\n  margin-bottom: 20px;\\n}\\n\\n.total-menu-item {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 10px;\\n  padding-bottom: 20px;\\n}\\n\\n.item-counter-text,\\n.item-counter {\\n  color: #fff;\\n}\\n\\n.item-counter {\\n  font-size: 24px;\\n  font-weight: 700;\\n}\\n\\n@media screen and (max-width: 767.98px) {\\n  .navlink {\\n    display: none;\\n  }\\n\\n  .humburger {\\n    margin-right: 20px;\\n    border: none;\\n    font-size: 15px;\\n    background-color: #fff;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_getmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getmenu.js */ \"./src/modules/getmenu.js\");\n/* harmony import */ var _assets_resources_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/resources/logo.png */ \"./src/assets/resources/logo.png\");\n/* harmony import */ var _assets_resources_mealicon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/resources/mealicon.png */ \"./src/assets/resources/mealicon.png\");\n/* harmony import */ var _assets_resources_iconcounter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/resources/iconcounter.png */ \"./src/assets/resources/iconcounter.png\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_itemscounter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/itemscounter.js */ \"./src/modules/itemscounter.js\");\n\n\n\n\n\n\n\n\nconst parser = new DOMParser();\n\nconst logoImage = new Image();\nlogoImage.src = _assets_resources_logo_png__WEBPACK_IMPORTED_MODULE_2__;\nlogoImage.className = 'logo-img';\nlogoImage.alt = 'Logo Image';\nconst logoDiv = document.querySelector('.logo');\nlogoDiv.append(logoImage);\n\nconst logoIcon = new Image();\nlogoIcon.src = _assets_resources_mealicon_png__WEBPACK_IMPORTED_MODULE_3__;\nlogoIcon.className = 'logo-icon-homepage';\nlogoIcon.alt = 'Logo Icon in the Homepage';\nconst logoIconDiv = document.querySelector('.logo-icon-home');\nlogoIconDiv.append(logoIcon);\n\nconst logoIcon2 = new Image();\nlogoIcon2.src = _assets_resources_mealicon_png__WEBPACK_IMPORTED_MODULE_3__;\nlogoIcon2.className = 'logo-icon-homepage';\nlogoIcon2.alt = 'Logo Icon in the Homepage';\nconst logoIconDiv2 = document.querySelector('.logo-icon-home2');\nlogoIconDiv2.append(logoIcon2);\n\n// let menuArray = [];\nwindow.onload = async () => {\n  const menuArray = await (0,_modules_getmenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const likesArray = await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.getNumberOfLikes)();\n  const likedMenuArray = [];\n\n  for (let i = 0; i < menuArray.length; i += 1) {\n    for (let j = 0; j < likesArray.length; j += 1) {\n      if (likesArray[j].item_id === menuArray[i].idMeal) {\n        likedMenuArray.push({\n          idMeal: menuArray[i].idMeal,\n          strMealThumb: menuArray[i].strMealThumb,\n          strMeal: menuArray[i].strMeal,\n          likes: likesArray.length === null ? 0 : likesArray[j].likes,\n        });\n      }\n    }\n  }\n\n  const menuGrids = document.querySelector('.menu-grids');\n  likedMenuArray.forEach((menuItem) => {\n    const mealsGridsSring = `\n      <div class=\"menu-item\">\n        <img src=\"${menuItem.strMealThumb}\" class=\"meal-img\" alt=\"Meal Image\">\n          <div class=\"menu-description\">\n            <div class=\"like-wrapper\"> \n              <p class=\"title\">${menuItem.strMeal}</p>        \n              <button type=\"button\" class=\"click-like-btn\">\n                <i class=\"fa fa-heart like-btn\"></i>\n              </button>\n            </div>\n            <div class=\"likes-number-wrapper\"> \n              <span class=\"number-span\"> ${menuItem.likes} </span>\n              <p class=\"like-text\"> likes </p>\n            </div>\n          </div>\n          <button type=\"button\" class=\"comment-btn\">Comments</button>\n      </div>`;\n    const parsedElement = parser.parseFromString(mealsGridsSring, 'text/html').body.firstChild;\n\n    menuGrids.append(parsedElement);\n\n    const likeBtn = parsedElement.querySelector('.like-btn');\n    const likesFigure = parsedElement.querySelector('.number-span');\n    likeBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.clickLoveBtn)(menuItem.idMeal);\n      menuItem.likes += 1;\n      likesFigure.innerHTML = `${menuItem.likes}`; // To display the updated number of likes before refreshing the page\n    });\n  }); // End of forEach loop\n\n  // Item Counter\n  const mealCounterIcon = new Image();\n  mealCounterIcon.src = _assets_resources_iconcounter_png__WEBPACK_IMPORTED_MODULE_4__;\n  mealCounterIcon.className = 'counter-icon-homepage';\n  mealCounterIcon.alt = 'Meal Icon in the Homepage';\n  const mealCounterDiv = document.querySelector('.mealicon-counter');\n  mealCounterDiv.append(mealCounterIcon);\n  const mealCounter = document.querySelector('.item-counter');\n  mealCounter.innerHTML = `${(0,_modules_itemscounter_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()}`;\n}; // End of window onload functions\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/getmenu.js":
/*!********************************!*\
  !*** ./src/modules/getmenu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMenu = async () => {\n  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian', {\n    method: 'GET',\n  });\n  const responseJSON = await response.json();\n  return responseJSON.meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMenu);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getmenu.js?");

/***/ }),

/***/ "./src/modules/itemscounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemscounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCounter = () => {\n  const menuItem = document.querySelectorAll('.menu-grids > div');\n  return menuItem.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/itemscounter.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickLoveBtn\": () => (/* binding */ clickLoveBtn),\n/* harmony export */   \"getNumberOfLikes\": () => (/* binding */ getNumberOfLikes)\n/* harmony export */ });\n// curl -X POST -d 'name -Amare' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps to create API ID\n\nconst clickLoveBtn = async (menuId) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCijE8yJ7svuzQLIyTFd/likes', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: menuId,\n    }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  const responseText = await response.text();\n  return responseText;\n};\n\nconst getNumberOfLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCijE8yJ7svuzQLIyTFd/likes');\n  const responseJSON = await response.json();\n  return responseJSON;\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/likes.js?");

/***/ }),

/***/ "./src/assets/resources/iconcounter.png":
/*!**********************************************!*\
  !*** ./src/assets/resources/iconcounter.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/iconcounter.png\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/assets/resources/iconcounter.png?");

/***/ }),

/***/ "./src/assets/resources/logo.png":
/*!***************************************!*\
  !*** ./src/assets/resources/logo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/logo.png\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/assets/resources/logo.png?");

/***/ }),

/***/ "./src/assets/resources/mealicon.png":
/*!*******************************************!*\
  !*** ./src/assets/resources/mealicon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/mealicon.png\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/assets/resources/mealicon.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);