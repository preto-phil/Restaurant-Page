/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./body-photo.png */ "./src/body-photo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  border: 1px solid snow;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1fr 10fr 0.5fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 5fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header button {\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  cursor: pointer;\n\n  padding: 50px;\n\n  font-size: 5rem;\n  font-weight: 500;\n\n  border: 3px solid whitesmoke;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#home,\n#menu,\n#about,\n#contact {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n\n  color: #292524;\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  6fr 3fr;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-breakfast {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-light-meals {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-mains {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-desserts {\n  grid-area: 3 / 2 / 4 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-drinks {\n  grid-area: 2 / 3 / 4 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 20px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n  border: 1px solid snow;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1fr 10fr 0.5fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 5fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header button {\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  cursor: pointer;\n\n  padding: 50px;\n\n  font-size: 5rem;\n  font-weight: 500;\n\n  border: 3px solid whitesmoke;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#home,\n#menu,\n#about,\n#contact {\n  background: url('./body-photo.png');\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n\n  color: #292524;\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  6fr 3fr;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-breakfast {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-light-meals {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-mains {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-desserts {\n  grid-area: 3 / 2 / 4 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-drinks {\n  grid-area: 2 / 3 / 4 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 20px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAbout),
/* harmony export */   "hideAbout": () => (/* binding */ hideAbout)
/* harmony export */ });
function createAbout() {
  const contentDiv = document.getElementById('content');
  const aboutDiv = document.createElement('div');
  aboutDiv.setAttribute('id', 'about');
  aboutDiv.style.display = 'none';
  contentDiv.appendChild(aboutDiv);

  aboutHeader();
  aboutBody();
}

function aboutHeader() {
  const aboutDiv = document.getElementById('about');
  const aboutHeader = document.createElement('div');
  aboutHeader.setAttribute('id', 'about-header');
  aboutHeader.innerText = "About";
  aboutDiv.appendChild(aboutHeader);
}


function aboutBody() {
  const aboutDiv = document.getElementById('about');
  const aboutBody = document.createElement('div');
  aboutBody.setAttribute('id', 'about-body');
  aboutBody.innerText = "A brief history of the three broomsticks...";
  aboutDiv.appendChild(aboutBody);
}

function hideAbout() {
  const aboutDiv = document.getElementById('about');
  aboutDiv.style.display = 'none';
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact),
/* harmony export */   "hideContact": () => (/* binding */ hideContact)
/* harmony export */ });
function createContact() {
  const contentDiv = document.getElementById('content');
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('id', 'contact');
  contactDiv.style.display = 'none';
  contentDiv.appendChild(contactDiv);

  contactHeader();
  contactBody();
}

function contactHeader() {
  const contactDiv = document.getElementById('contact');
  const contactHeader = document.createElement('div');
  contactHeader.setAttribute('id', 'contact-header');
  contactHeader.innerText = "Contact";
  contactDiv.appendChild(contactHeader);
}


function contactBody() {
  const contactDiv = document.getElementById('contact');
  const contactBody = document.createElement('div');
  contactBody.setAttribute('id', 'contact-body');
  contactBody.innerText = "Contact information...";
  contactDiv.appendChild(contactBody);
}

function hideContact() {
  const contactDiv = document.getElementById('contact');
  contactDiv.style.display = 'none';
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
  const contentDiv = document.getElementById('content');
  const footerDiv = document.createElement('div');
  footerDiv.setAttribute('id', 'footer');
  contentDiv.appendChild(footerDiv);

  footerOptions();
  footerMe();
  footerText();
}

function footerMe() {
  const footerDiv = document.getElementById('footer');
  const footerMe = document.createElement('div');
  footerMe.setAttribute('id', 'footer-me');
  footerMe.innerText = 'Created by preto-phil';
  footerDiv.appendChild(footerMe);
}

function footerText() {
  const footerDiv = document.getElementById('footer');
  const footerText = document.createElement('div');
  footerText.setAttribute('id', 'footer-text');
  footerText.innerText = 'Some text to be added here';
  footerDiv.appendChild(footerText);
}

function footerOptions() {
  const footerDiv = document.getElementById('footer');
  const footerOptions = document.createElement('div');
  footerOptions.setAttribute('id', 'footer-options');
  footerOptions.innerText = 'Some other text to be added here';
  footerDiv.appendChild(footerOptions);
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");

 



function createHeader() {
  const contentDiv = document.getElementById('content');
  const headerDiv = document.createElement('div');
  headerDiv.setAttribute('id', 'header');
  contentDiv.appendChild(headerDiv);

  headerSign();
  headerName();
  headerMenu();
  headerAbout();
  headerContact();
}

function headerSign() {
  const headerDiv = document.getElementById('header');
  const headerSign = document.createElement('div');
  headerSign.setAttribute('id', 'header-sign');
  headerDiv.appendChild(headerSign);

  const signBtn = document.createElement('button');
  signBtn.setAttribute('id', 'sign-btn');
  signBtn.innerText = 'Logo';
  headerSign.appendChild(signBtn);

  signBtn.addEventListener('click', () => {
    const homeDiv = document.getElementById('home');
    // set all other bodies display to none
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.hideMenu)();
    (0,_about__WEBPACK_IMPORTED_MODULE_2__.hideAbout)();
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.hideContact)();
    homeDiv.style.display = 'grid';
  }); 
}

function headerName() {
  const headerDiv = document.getElementById('header');
  const headerName = document.createElement('div');
  headerName.setAttribute('id', 'header-name');
  headerDiv.appendChild(headerName);

  const nameBtn = document.createElement('button');
  nameBtn.setAttribute('id', 'name-btn');
  nameBtn.innerText = "The Three Broomsticks"
  headerName.appendChild(nameBtn);

  nameBtn.addEventListener('click', () => {
    const homeDiv = document.getElementById('home');
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.hideMenu)();
    (0,_about__WEBPACK_IMPORTED_MODULE_2__.hideAbout)();
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.hideContact)();
    homeDiv.style.display = 'grid';
  });
}

function headerMenu() {
  const headerDiv = document.getElementById('header');
  const headerMenu = document.createElement('div');
  headerMenu.setAttribute('id', 'header-menu');
  headerDiv.appendChild(headerMenu);

  const menuBtn = document.createElement('button');
  menuBtn.setAttribute('id', 'menu-btn');
  menuBtn.innerText = "Menu";
  headerMenu.appendChild(menuBtn);

  menuBtn.addEventListener('click', () => {
    const menuDiv = document.getElementById('menu');
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.hideHome)();
    (0,_about__WEBPACK_IMPORTED_MODULE_2__.hideAbout)();
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.hideContact)();
    menuDiv.style.display = 'grid';
  });
}

function headerAbout() {
  const headerDiv = document.getElementById('header');
  const headerAbout = document.createElement('div');
  headerAbout.setAttribute('id', 'header-about');
  headerDiv.appendChild(headerAbout);

  const aboutBtn = document.createElement('button');
  aboutBtn.setAttribute('id', 'about-btn');
  aboutBtn.innerText = "About";
  headerAbout.appendChild(aboutBtn);


  aboutBtn.addEventListener('click', () => {
    const aboutDiv = document.getElementById('about');
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.hideHome)();
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.hideMenu)();
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.hideContact)();
    aboutDiv.style.display = 'grid';
  });
}

function headerContact() {
  const headerDiv = document.getElementById('header');
  const headerContact = document.createElement('div');
  headerContact.setAttribute('id', 'header-contact');
  headerDiv.appendChild(headerContact)

  const contactBtn = document.createElement('button');
  contactBtn.setAttribute('id', 'contact-btn');
  contactBtn.innerText = "Contact";
  headerContact.appendChild(contactBtn);

  contactBtn.addEventListener('click', () => {
    const contactDiv = document.getElementById('contact');
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.hideHome)();
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.hideMenu)();
    (0,_about__WEBPACK_IMPORTED_MODULE_2__.hideAbout)();
    contactDiv.style.display = 'grid';
  });
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomePage),
/* harmony export */   "hideHome": () => (/* binding */ hideHome)
/* harmony export */ });
// Import page for each different menu

function createHomePage() {
  const contentDiv = document.getElementById('content');
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('id', 'home');
  contentDiv.appendChild(homeDiv);

  topHomePage();
  leftHomePage();
  rightHomePage();
}

function topHomePage() {
  const homeDiv = document.getElementById('home');
  const homeTop = document.createElement('div');
  homeTop.setAttribute('id', 'home-top');
  homeTop.innerText = 'Welcome To The Three Broomsticks';
  homeDiv.appendChild(homeTop);
}

function leftHomePage() {
  const homeDiv = document.getElementById('home');
  const homeLeft = document.createElement('div');
  homeLeft.setAttribute('id', 'home-left');
  homeLeft.innerText = 'Home of the Finest Butterbeer!';
  homeDiv.appendChild(homeLeft);
}

function rightHomePage() {
  const homeDiv = document.getElementById('home');
  const homeRight = document.createElement('div');
  homeRight.setAttribute('id', 'home-right');
  homeRight.innerText = 'Student Specials';
  homeDiv.appendChild(homeRight);
}

function hideHome() {
  const homeDiv = document.getElementById('home');
  homeDiv.style.display = 'none';
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu),
/* harmony export */   "hideMenu": () => (/* binding */ hideMenu)
/* harmony export */ });
function createMenu() {
  const contentDiv = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('id', 'menu');
  menuDiv.style.display = 'none';
  contentDiv.appendChild(menuDiv);

  menuHeader();
  menuBreakfast();
  menuLightMeals();
  menuMains();
  menuDesserts();
  menuDrinks();

}

function menuHeader() {
  const menuDiv = document.getElementById('menu');
  const menuHeader = document.createElement('div');
  menuHeader.setAttribute('id', 'menu-header');
  menuHeader.innerText = "MENU";
  menuDiv.appendChild(menuHeader);
}


function menuBreakfast() {
  const menuDiv = document.getElementById('menu');
  const breakfast = document.createElement('div');
  breakfast.setAttribute('id', 'menu-breakfast');
  breakfast.innerText = "Breakfast";
  menuDiv.appendChild(breakfast);
}

function menuLightMeals() {
  const menuDiv = document.getElementById('menu');
  const lightMeals = document.createElement('div');
  lightMeals.setAttribute('id', 'menu-light-meals');
  lightMeals.innerText = "Light Meals";
  menuDiv.appendChild(lightMeals);
}

function menuMains() {
  const menuDiv = document.getElementById('menu');
  const mainCourses = document.createElement('div');
  mainCourses.setAttribute('id', 'menu-mains');
  mainCourses.innerText = "Main Courses";
  menuDiv.appendChild(mainCourses);
}

function menuDesserts() {
  const menuDiv = document.getElementById('menu');
  const desserts = document.createElement('div');
  desserts.setAttribute('id', 'menu-desserts');
  desserts.innerText = "Desserts";
  menuDiv.appendChild(desserts);
}

function menuDrinks() {
  const menuDiv = document.getElementById('menu');
  const drinks = document.createElement('div');
  drinks.setAttribute('id', 'menu-drinks');
  drinks.innerText = "Drinks";
  menuDiv.appendChild(drinks);
}

function hideMenu() {
  const menuDiv = document.getElementById('menu');
  menuDiv.style.display = 'none';
}

/***/ }),

/***/ "./src/body-photo.png":
/*!****************************!*\
  !*** ./src/body-photo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9d2ec55d70012314212.png";

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








function createPage() {
  (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_footer__WEBPACK_IMPORTED_MODULE_5__["default"])();
}

createPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VDcEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNBO0FBQ0o7QUFDRTtBQUNJO0FBQ0Y7QUFDZjs7QUFFckI7QUFDQSxFQUFFLG1EQUFZO0FBQ2QsRUFBRSxpREFBYztBQUNoQixFQUFFLGlEQUFVO0FBQ1osRUFBRSxrREFBVztBQUNiLEVBQUUsb0RBQWE7QUFDZixFQUFFLG1EQUFZO0FBQ2Q7O0FBRUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYm9keS1waG90by5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCBzbm93O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAwLjVmcjtcXG59XFxuXFxuXFxuXFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmciAyZnIgMmZyO1xcblxcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDAzYztcXG4gIGNvbG9yOiAjZTdlNWU0O1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBwYWRkaW5nOiA1MHB4O1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlc21va2U7XFxufVxcblxcbiNoZWFkZXItc2lnbiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLW5hbWUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLW1lbnUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1hYm91dCB7XFxuICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLWNvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNSAvIDIgLyA2O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2hvbWUsXFxuI21lbnUsXFxuI2Fib3V0LFxcbiNjb250YWN0IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG5cXG5cXG4jaG9tZSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5cXG4gIGNvbG9yOiAjMjkyNTI0O1xcbn1cXG5cXG4jaG9tZS10b3Age1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jaG9tZS1sZWZ0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG5cXG59XFxuXFxuI2hvbWUtcmlnaHQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbn1cXG5cXG5cXG5cXG4jbWVudSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgIDZmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzE2YztcXG4gIGNvbG9yOiAjMjkyNTI0O1xcbn1cXG5cXG4jbWVudS1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21lbnUtYnJlYWtmYXN0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWxpZ2h0LW1lYWxzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LW1haW5zIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWRyaW5rcyB7XFxuICBncmlkLWFyZWE6IDIgLyAzIC8gNCAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA5ZnI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3MTZjO1xcbiAgY29sb3I6ICMyOTI1MjQ7XFxufVxcblxcbiNhYm91dC1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Fib3V0LWJvZHkge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2NvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA5ZnI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3MTZjO1xcbiAgY29sb3I6ICMyOTI1MjQ7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC1ib2R5IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxufVxcblxcbiNmb290ZXItb3B0aW9ucyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNmb290ZXItbWUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3Rlci10ZXh0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOzs7OztBQUtBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQzs7RUFFMUMsd0JBQXdCOztFQUV4Qix5QkFBeUI7RUFD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O0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7O0VBRW5CLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCBzbm93O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAwLjVmcjtcXG59XFxuXFxuXFxuXFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmciAyZnIgMmZyO1xcblxcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDAzYztcXG4gIGNvbG9yOiAjZTdlNWU0O1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBwYWRkaW5nOiA1MHB4O1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlc21va2U7XFxufVxcblxcbiNoZWFkZXItc2lnbiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLW5hbWUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLW1lbnUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1hYm91dCB7XFxuICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLWNvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNSAvIDIgLyA2O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2hvbWUsXFxuI21lbnUsXFxuI2Fib3V0LFxcbiNjb250YWN0IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9ib2R5LXBob3RvLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuXFxuXFxuI2hvbWUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuXFxuICBjb2xvcjogIzI5MjUyNDtcXG59XFxuXFxuI2hvbWUtdG9wIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2hvbWUtbGVmdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuXFxufVxcblxcbiNob21lLXJpZ2h0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG5cXG59XFxuXFxuXFxuXFxuI21lbnUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA2ZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODcxNmM7XFxuICBjb2xvcjogIzI5MjUyNDtcXG59XFxuXFxuI21lbnUtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWJyZWFrZmFzdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWVudS1saWdodC1tZWFscyB7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWVudS1tYWlucyB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWVudS1kZXNzZXJ0cyB7XFxuICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWVudS1kcmlua3Mge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMyAvIDQgLyA0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2Fib3V0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAgOWZyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzE2YztcXG4gIGNvbG9yOiAjMjkyNTI0O1xcbn1cXG5cXG4jYWJvdXQtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhYm91dC1ib2R5IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiNjb250YWN0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAgOWZyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzE2YztcXG4gIGNvbG9yOiAjMjkyNTI0O1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtYm9keSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4jZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDAzYztcXG4gIGNvbG9yOiAjZTdlNWU0O1xcbn1cXG5cXG4jZm9vdGVyLW9wdGlvbnMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jZm9vdGVyLW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXItdGV4dCB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQnKTtcbiAgYWJvdXREaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dERpdik7XG5cbiAgYWJvdXRIZWFkZXIoKTtcbiAgYWJvdXRCb2R5KCk7XG59XG5cbmZ1bmN0aW9uIGFib3V0SGVhZGVyKCkge1xuICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xuICBjb25zdCBhYm91dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhYm91dEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWhlYWRlcicpO1xuICBhYm91dEhlYWRlci5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0SGVhZGVyKTtcbn1cblxuXG5mdW5jdGlvbiBhYm91dEJvZHkoKSB7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gIGNvbnN0IGFib3V0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhYm91dEJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1ib2R5Jyk7XG4gIGFib3V0Qm9keS5pbm5lclRleHQgPSBcIkEgYnJpZWYgaGlzdG9yeSBvZiB0aGUgdGhyZWUgYnJvb21zdGlja3MuLi5cIjtcbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRCb2R5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBYm91dCgpIHtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgYWJvdXREaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICBjb250YWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG5cbiAgY29udGFjdEhlYWRlcigpO1xuICBjb250YWN0Qm9keSgpO1xufVxuXG5mdW5jdGlvbiBjb250YWN0SGVhZGVyKCkge1xuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbiAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1oZWFkZXInKTtcbiAgY29udGFjdEhlYWRlci5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbn1cblxuXG5mdW5jdGlvbiBjb250YWN0Qm9keSgpIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gIGNvbnN0IGNvbnRhY3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RCb2R5LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1ib2R5Jyk7XG4gIGNvbnRhY3RCb2R5LmlubmVyVGV4dCA9IFwiQ29udGFjdCBpbmZvcm1hdGlvbi4uLlwiO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbiAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xuXG4gIGZvb3Rlck9wdGlvbnMoKTtcbiAgZm9vdGVyTWUoKTtcbiAgZm9vdGVyVGV4dCgpO1xufVxuXG5mdW5jdGlvbiBmb290ZXJNZSgpIHtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICBjb25zdCBmb290ZXJNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJNZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3Rlci1tZScpO1xuICBmb290ZXJNZS5pbm5lclRleHQgPSAnQ3JlYXRlZCBieSBwcmV0by1waGlsJztcbiAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3Rlck1lKTtcbn1cblxuZnVuY3Rpb24gZm9vdGVyVGV4dCgpIHtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlclRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItdGV4dCcpO1xuICBmb290ZXJUZXh0LmlubmVyVGV4dCA9ICdTb21lIHRleHQgdG8gYmUgYWRkZWQgaGVyZSc7XG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbn1cblxuZnVuY3Rpb24gZm9vdGVyT3B0aW9ucygpIHtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICBjb25zdCBmb290ZXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlck9wdGlvbnMuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItb3B0aW9ucycpO1xuICBmb290ZXJPcHRpb25zLmlubmVyVGV4dCA9ICdTb21lIG90aGVyIHRleHQgdG8gYmUgYWRkZWQgaGVyZSc7XG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJPcHRpb25zKTtcbn0iLCJpbXBvcnQgeyBoaWRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGhpZGVNZW51IH0gZnJvbSBcIi4vbWVudVwiOyBcbmltcG9ydCB7IGhpZGVBYm91dCB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBoaWRlQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgaGVhZGVyU2lnbigpO1xuICBoZWFkZXJOYW1lKCk7XG4gIGhlYWRlck1lbnUoKTtcbiAgaGVhZGVyQWJvdXQoKTtcbiAgaGVhZGVyQ29udGFjdCgpO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJTaWduKCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRlclNpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyU2lnbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1zaWduJyk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJTaWduKTtcblxuICBjb25zdCBzaWduQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNpZ25CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzaWduLWJ0bicpO1xuICBzaWduQnRuLmlubmVyVGV4dCA9ICdMb2dvJztcbiAgaGVhZGVyU2lnbi5hcHBlbmRDaGlsZChzaWduQnRuKTtcblxuICBzaWduQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICAgIC8vIHNldCBhbGwgb3RoZXIgYm9kaWVzIGRpc3BsYXkgdG8gbm9uZVxuICAgIGhpZGVNZW51KCk7XG4gICAgaGlkZUFib3V0KCk7XG4gICAgaGlkZUNvbnRhY3QoKTtcbiAgICBob21lRGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIH0pOyBcbn1cblxuZnVuY3Rpb24gaGVhZGVyTmFtZSgpIHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICBjb25zdCBoZWFkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlck5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItbmFtZScpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyTmFtZSk7XG5cbiAgY29uc3QgbmFtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuYW1lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZS1idG4nKTtcbiAgbmFtZUJ0bi5pbm5lclRleHQgPSBcIlRoZSBUaHJlZSBCcm9vbXN0aWNrc1wiXG4gIGhlYWRlck5hbWUuYXBwZW5kQ2hpbGQobmFtZUJ0bik7XG5cbiAgbmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgICBoaWRlTWVudSgpO1xuICAgIGhpZGVBYm91dCgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgaG9tZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyTWVudSgpIHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICBjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlck1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItbWVudScpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyTWVudSk7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idG4nKTtcbiAgbWVudUJ0bi5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgaGVhZGVyTWVudS5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICAgIGhpZGVIb21lKCk7XG4gICAgaGlkZUFib3V0KCk7XG4gICAgaGlkZUNvbnRhY3QoKTtcbiAgICBtZW51RGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJBYm91dCgpIHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICBjb25zdCBoZWFkZXJBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJBYm91dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1hYm91dCcpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyQWJvdXQpO1xuXG4gIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFib3V0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtYnRuJyk7XG4gIGFib3V0QnRuLmlubmVyVGV4dCA9IFwiQWJvdXRcIjtcbiAgaGVhZGVyQWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pO1xuXG5cbiAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgICBoaWRlSG9tZSgpO1xuICAgIGhpZGVNZW51KCk7XG4gICAgaGlkZUNvbnRhY3QoKTtcbiAgICBhYm91dERpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyQ29udGFjdCgpIHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICBjb25zdCBoZWFkZXJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItY29udGFjdCcpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFjdClcblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWJ0bicpO1xuICBjb250YWN0QnRuLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICBoZWFkZXJDb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gICAgaGlkZUhvbWUoKTtcbiAgICBoaWRlTWVudSgpO1xuICAgIGhpZGVBYm91dCgpO1xuICAgIGNvbnRhY3REaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59IiwiLy8gSW1wb3J0IHBhZ2UgZm9yIGVhY2ggZGlmZmVyZW50IG1lbnVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG5cbiAgdG9wSG9tZVBhZ2UoKTtcbiAgbGVmdEhvbWVQYWdlKCk7XG4gIHJpZ2h0SG9tZVBhZ2UoKTtcbn1cblxuZnVuY3Rpb24gdG9wSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBob21lVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVUb3Auc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXRvcCcpO1xuICBob21lVG9wLmlubmVyVGV4dCA9ICdXZWxjb21lIFRvIFRoZSBUaHJlZSBCcm9vbXN0aWNrcyc7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZVRvcCk7XG59XG5cbmZ1bmN0aW9uIGxlZnRIb21lUGFnZSgpIHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gIGNvbnN0IGhvbWVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVMZWZ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1sZWZ0Jyk7XG4gIGhvbWVMZWZ0LmlubmVyVGV4dCA9ICdIb21lIG9mIHRoZSBGaW5lc3QgQnV0dGVyYmVlciEnO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVMZWZ0KTtcbn1cblxuZnVuY3Rpb24gcmlnaHRIb21lUGFnZSgpIHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gIGNvbnN0IGhvbWVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lUmlnaHQuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXJpZ2h0Jyk7XG4gIGhvbWVSaWdodC5pbm5lclRleHQgPSAnU3R1ZGVudCBTcGVjaWFscyc7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZVJpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVIb21lKCkge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgaG9tZURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gIG1lbnVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcblxuICBtZW51SGVhZGVyKCk7XG4gIG1lbnVCcmVha2Zhc3QoKTtcbiAgbWVudUxpZ2h0TWVhbHMoKTtcbiAgbWVudU1haW5zKCk7XG4gIG1lbnVEZXNzZXJ0cygpO1xuICBtZW51RHJpbmtzKCk7XG5cbn1cblxuZnVuY3Rpb24gbWVudUhlYWRlcigpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtaGVhZGVyJyk7XG4gIG1lbnVIZWFkZXIuaW5uZXJUZXh0ID0gXCJNRU5VXCI7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG59XG5cblxuZnVuY3Rpb24gbWVudUJyZWFrZmFzdCgpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IGJyZWFrZmFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmVha2Zhc3Quc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJyZWFrZmFzdCcpO1xuICBicmVha2Zhc3QuaW5uZXJUZXh0ID0gXCJCcmVha2Zhc3RcIjtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3QpO1xufVxuXG5mdW5jdGlvbiBtZW51TGlnaHRNZWFscygpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IGxpZ2h0TWVhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGlnaHRNZWFscy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtbGlnaHQtbWVhbHMnKTtcbiAgbGlnaHRNZWFscy5pbm5lclRleHQgPSBcIkxpZ2h0IE1lYWxzXCI7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQobGlnaHRNZWFscyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVNYWlucygpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IG1haW5Db3Vyc2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Db3Vyc2VzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1tYWlucycpO1xuICBtYWluQ291cnNlcy5pbm5lclRleHQgPSBcIk1haW4gQ291cnNlc1wiO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKG1haW5Db3Vyc2VzKTtcbn1cblxuZnVuY3Rpb24gbWVudURlc3NlcnRzKCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzc2VydHMuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWRlc3NlcnRzJyk7XG4gIGRlc3NlcnRzLmlubmVyVGV4dCA9IFwiRGVzc2VydHNcIjtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVEcmlua3MoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJpbmtzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1kcmlua3MnKTtcbiAgZHJpbmtzLmlubmVyVGV4dCA9IFwiRHJpbmtzXCI7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNZW51KCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgbWVudURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG4gIGNyZWF0ZU1lbnUoKTtcbiAgY3JlYXRlQWJvdXQoKTtcbiAgY3JlYXRlQ29udGFjdCgpO1xuICBjcmVhdGVGb290ZXIoKTtcbn1cblxuY3JlYXRlUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==