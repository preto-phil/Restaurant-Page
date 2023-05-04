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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./CaslonAntique.ttf */ "./src/CaslonAntique.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./CaslonAntique-Bold.ttf */ "./src/CaslonAntique-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./logo-cropped.png */ "./src/logo-cropped.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./body-photo.png */ "./src/body-photo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'MyFont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 800;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  font-size: 8rem;\n  font-family: 'MyFont';\n  font-weight: 700;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n\n  font-family: 'MyFont';\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1fr 10fr 0.5fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 8fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header button {\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  cursor: pointer;\n  border: none;\n  padding: 50px;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#sign-btn {\n  width: 60%;\n  height: 80%;\n\n  border-radius: 10px;\n  \n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n#name-btn {\n  font-size: 8rem;\n  font-weight: 800;\n}\n\n#menu-btn,\n#about-btn,\n#contact-btn {\n  font-size: 6rem;\n  font-weight: 800;\n}\n\n#menu-btn:hover,\n#about-btn:hover,\n#contact-btn:hover {\n  font-size: 6.5rem;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#home,\n#menu,\n#about,\n#contact {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  6fr 3fr;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-breakfast {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-light-meals {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-mains {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-desserts {\n  grid-area: 3 / 2 / 4 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-drinks {\n  grid-area: 2 / 3 / 4 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  font-size: 3rem;\n  font-weight: 500;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 20px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'MyFont';\n  src: url('./CaslonAntique.ttf') format('truetype'),\n    url('./CaslonAntique-Bold.ttf') format('truetype');\n  font-weight: 800;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  font-size: 8rem;\n  font-family: 'MyFont';\n  font-weight: 700;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n\n  font-family: 'MyFont';\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1fr 10fr 0.5fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 8fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header button {\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  cursor: pointer;\n  border: none;\n  padding: 50px;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#sign-btn {\n  width: 60%;\n  height: 80%;\n\n  border-radius: 10px;\n  \n  background: url('./logo-cropped.png');\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n#name-btn {\n  font-size: 8rem;\n  font-weight: 800;\n}\n\n#menu-btn,\n#about-btn,\n#contact-btn {\n  font-size: 6rem;\n  font-weight: 800;\n}\n\n#menu-btn:hover,\n#about-btn:hover,\n#contact-btn:hover {\n  font-size: 6.5rem;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#home,\n#menu,\n#about,\n#contact {\n  background: url('./body-photo.png');\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  6fr 3fr;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-breakfast {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-light-meals {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-mains {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-desserts {\n  grid-area: 3 / 2 / 4 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-drinks {\n  grid-area: 2 / 3 / 4 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  font-size: 3rem;\n  font-weight: 500;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 20px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 20px;\n}\n"],"sourceRoot":""}]);
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
  signBtn.innerText = '';
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

/***/ "./src/CaslonAntique-Bold.ttf":
/*!************************************!*\
  !*** ./src/CaslonAntique-Bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15800ff39887644a78a0.ttf";

/***/ }),

/***/ "./src/CaslonAntique.ttf":
/*!*******************************!*\
  !*** ./src/CaslonAntique.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1969c960b6fe07c983be.ttf";

/***/ }),

/***/ "./src/body-photo.png":
/*!****************************!*\
  !*** ./src/body-photo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9d2ec55d70012314212.png";

/***/ }),

/***/ "./src/logo-cropped.png":
/*!******************************!*\
  !*** ./src/logo-cropped.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4e7c696d0bdecedefaf.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0M7QUFDQTtBQUNKO0FBQ0U7QUFDSTtBQUNGO0FBQ2Y7O0FBRXJCO0FBQ0EsRUFBRSxtREFBWTtBQUNkLEVBQUUsaURBQWM7QUFDaEIsRUFBRSxpREFBVTtBQUNaLEVBQUUsa0RBQVc7QUFDYixFQUFFLG9EQUFhO0FBQ2YsRUFBRSxtREFBWTtBQUNkOztBQUVBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0Nhc2xvbkFudGlxdWUudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9DYXNsb25BbnRpcXVlLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9sb2dvLWNyb3BwZWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9ib2R5LXBob3RvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAwLjVmcjtcXG59XFxuXFxuXFxuXFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOGZyIDJmciAyZnIgMmZyO1xcblxcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDAzYztcXG4gIGNvbG9yOiAjZTdlNWU0O1xcbn1cXG5cXG4jaGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4jaGVhZGVyLXNpZ24ge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NpZ24tYnRuIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4jbmFtZS1idG4ge1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuI21lbnUtYnRuLFxcbiNhYm91dC1idG4sXFxuI2NvbnRhY3QtYnRuIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbiNtZW51LWJ0bjpob3ZlcixcXG4jYWJvdXQtYnRuOmhvdmVyLFxcbiNjb250YWN0LWJ0bjpob3ZlciB7XFxuICBmb250LXNpemU6IDYuNXJlbTtcXG59XFxuXFxuI2hlYWRlci1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1tZW51IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA1O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1jb250YWN0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiNob21lLFxcbiNtZW51LFxcbiNhYm91dCxcXG4jY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuXFxuXFxuI2hvbWUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbiNob21lLXRvcCB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNob21lLWxlZnQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbn1cXG5cXG4jaG9tZS1yaWdodCB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuXFxufVxcblxcblxcblxcbiNtZW51IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAgNmZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbiNtZW51LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNtZW51LWJyZWFrZmFzdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNtZW51LWxpZ2h0LW1lYWxzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI21lbnUtbWFpbnMge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jbWVudS1kZXNzZXJ0cyB7XFxuICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNtZW51LWRyaW5rcyB7XFxuICBncmlkLWFyZWE6IDIgLyAzIC8gNCAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcblxcbiNhYm91dCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgIDlmcjtcXG59XFxuXFxuI2Fib3V0LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNhYm91dC1ib2R5IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuXFxuI2NvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA5ZnI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2NvbnRhY3QtYm9keSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcblxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxuXFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jZm9vdGVyLW9wdGlvbnMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jZm9vdGVyLW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXItdGV4dCB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQjs4REFDb0Q7RUFDcEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7O0VBRWIsU0FBUztFQUNULFVBQVU7O0VBRVYscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7Ozs7QUFLQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7O0VBRTFDLHdCQUF3Qjs7RUFFeEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVzs7RUFFWCxtQkFBbUI7O0VBRW5CLG1EQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7O0FBR0E7Ozs7RUFJRSxtREFBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7OztBQUlBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZixpQkFBaUI7O0FBRW5COzs7O0FBSUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLDRCQUE0Qjs7RUFFNUIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7O0FBSUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYixxQ0FBcUM7O0VBRXJDLHlCQUF5QjtFQUN6QixjQUFjOztFQUVkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1COztFQUVuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vQ2FzbG9uQW50aXF1ZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybCgnLi9DYXNsb25BbnRpcXVlLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnIgMC41ZnI7XFxufVxcblxcblxcblxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmciAyZnIgMmZyIDJmcjtcXG5cXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2U3ZTVlNDtcXG59XFxuXFxuI2hlYWRlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDAzYztcXG4gIGNvbG9yOiAjZTdlNWU0O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuI2hlYWRlci1zaWduIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzaWduLWJ0biB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vbG9nby1jcm9wcGVkLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuI25hbWUtYnRuIHtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbiNtZW51LWJ0bixcXG4jYWJvdXQtYnRuLFxcbiNjb250YWN0LWJ0biB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jbWVudS1idG46aG92ZXIsXFxuI2Fib3V0LWJ0bjpob3ZlcixcXG4jY29udGFjdC1idG46aG92ZXIge1xcbiAgZm9udC1zaXplOiA2LjVyZW07XFxufVxcblxcbiNoZWFkZXItbmFtZSB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItbWVudSB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLWFib3V0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItY29udGFjdCB7XFxuICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jaG9tZSxcXG4jbWVudSxcXG4jYWJvdXQsXFxuI2NvbnRhY3Qge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2JvZHktcGhvdG8ucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG5cXG5cXG4jaG9tZSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuI2hvbWUtdG9wIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2hvbWUtbGVmdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuXFxufVxcblxcbiNob21lLXJpZ2h0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG5cXG59XFxuXFxuXFxuXFxuI21lbnUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA2ZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuI21lbnUtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI21lbnUtYnJlYWtmYXN0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI21lbnUtbGlnaHQtbWVhbHMge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jbWVudS1tYWlucyB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNtZW51LWRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI21lbnUtZHJpbmtzIHtcXG4gIGdyaWQtYXJlYTogMiAvIDMgLyA0IC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuXFxuI2Fib3V0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAgOWZyO1xcbn1cXG5cXG4jYWJvdXQtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2Fib3V0LWJvZHkge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5cXG4jY29udGFjdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgIDlmcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jY29udGFjdC1ib2R5IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuXFxuXFxuI2Zvb3RlciB7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2U3ZTVlNDtcXG5cXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNmb290ZXItb3B0aW9ucyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNmb290ZXItbWUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3Rlci10ZXh0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dCcpO1xuICBhYm91dERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0RGl2KTtcblxuICBhYm91dEhlYWRlcigpO1xuICBhYm91dEJvZHkoKTtcbn1cblxuZnVuY3Rpb24gYWJvdXRIZWFkZXIoKSB7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gIGNvbnN0IGFib3V0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtaGVhZGVyJyk7XG4gIGFib3V0SGVhZGVyLmlubmVyVGV4dCA9IFwiQWJvdXRcIjtcbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpO1xufVxuXG5cbmZ1bmN0aW9uIGFib3V0Qm9keSgpIHtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgY29uc3QgYWJvdXRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0Qm9keS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWJvZHknKTtcbiAgYWJvdXRCb2R5LmlubmVyVGV4dCA9IFwiQSBicmllZiBoaXN0b3J5IG9mIHRoZSB0aHJlZSBicm9vbXN0aWNrcy4uLlwiO1xuICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dEJvZHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFib3V0KCkge1xuICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xuICBhYm91dERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gIGNvbnRhY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxuICBjb250YWN0SGVhZGVyKCk7XG4gIGNvbnRhY3RCb2R5KCk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RIZWFkZXIoKSB7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWhlYWRlcicpO1xuICBjb250YWN0SGVhZGVyLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xufVxuXG5cbmZ1bmN0aW9uIGNvbnRhY3RCb2R5KCkge1xuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbiAgY29uc3QgY29udGFjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWJvZHknKTtcbiAgY29udGFjdEJvZHkuaW5uZXJUZXh0ID0gXCJDb250YWN0IGluZm9ybWF0aW9uLi4uXCI7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEJvZHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICBjb250YWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG5cbiAgZm9vdGVyT3B0aW9ucygpO1xuICBmb290ZXJNZSgpO1xuICBmb290ZXJUZXh0KCk7XG59XG5cbmZ1bmN0aW9uIGZvb3Rlck1lKCkge1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG4gIGNvbnN0IGZvb3Rlck1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlck1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyLW1lJyk7XG4gIGZvb3Rlck1lLmlubmVyVGV4dCA9ICdDcmVhdGVkIGJ5IHByZXRvLXBoaWwnO1xuICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyTWUpO1xufVxuXG5mdW5jdGlvbiBmb290ZXJUZXh0KCkge1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3Rlci10ZXh0Jyk7XG4gIGZvb3RlclRleHQuaW5uZXJUZXh0ID0gJ1NvbWUgdGV4dCB0byBiZSBhZGRlZCBoZXJlJztcbiAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xufVxuXG5mdW5jdGlvbiBmb290ZXJPcHRpb25zKCkge1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG4gIGNvbnN0IGZvb3Rlck9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyT3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3Rlci1vcHRpb25zJyk7XG4gIGZvb3Rlck9wdGlvbnMuaW5uZXJUZXh0ID0gJ1NvbWUgb3RoZXIgdGV4dCB0byBiZSBhZGRlZCBoZXJlJztcbiAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3Rlck9wdGlvbnMpO1xufSIsImltcG9ydCB7IGhpZGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgaGlkZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7IFxuaW1wb3J0IHsgaGlkZUFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCB7IGhpZGVDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICBoZWFkZXJTaWduKCk7XG4gIGhlYWRlck5hbWUoKTtcbiAgaGVhZGVyTWVudSgpO1xuICBoZWFkZXJBYm91dCgpO1xuICBoZWFkZXJDb250YWN0KCk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlclNpZ24oKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJTaWduLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLXNpZ24nKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclNpZ24pO1xuXG4gIGNvbnN0IHNpZ25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2lnbkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpZ24tYnRuJyk7XG4gIHNpZ25CdG4uaW5uZXJUZXh0ID0gJyc7XG4gIGhlYWRlclNpZ24uYXBwZW5kQ2hpbGQoc2lnbkJ0bik7XG5cbiAgc2lnbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgICAvLyBzZXQgYWxsIG90aGVyIGJvZGllcyBkaXNwbGF5IHRvIG5vbmVcbiAgICBoaWRlTWVudSgpO1xuICAgIGhpZGVBYm91dCgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgaG9tZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTsgXG59XG5cbmZ1bmN0aW9uIGhlYWRlck5hbWUoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLW5hbWUnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlck5hbWUpO1xuXG4gIGNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmFtZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUtYnRuJyk7XG4gIG5hbWVCdG4uaW5uZXJUZXh0ID0gXCJUaGUgVGhyZWUgQnJvb21zdGlja3NcIlxuICBoZWFkZXJOYW1lLmFwcGVuZENoaWxkKG5hbWVCdG4pO1xuXG4gIG5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBoaWRlQWJvdXQoKTtcbiAgICBoaWRlQ29udGFjdCgpO1xuICAgIGhvbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlck1lbnUoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLW1lbnUnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlck1lbnUpO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnRuJyk7XG4gIG1lbnVCdG4uaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICBoaWRlSG9tZSgpO1xuICAgIGhpZGVBYm91dCgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgbWVudURpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyQWJvdXQoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItYWJvdXQnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckFib3V0KTtcblxuICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhYm91dEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWJ0bicpO1xuICBhYm91dEJ0bi5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gIGhlYWRlckFib3V0LmFwcGVuZENoaWxkKGFib3V0QnRuKTtcblxuXG4gIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gICAgaGlkZUhvbWUoKTtcbiAgICBoaWRlTWVudSgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgYWJvdXREaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckNvbnRhY3QoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLWNvbnRhY3QnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhY3QpXG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idG4nKTtcbiAgY29udGFjdEJ0bi5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgaGVhZGVyQ29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICAgIGhpZGVIb21lKCk7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBoaWRlQWJvdXQoKTtcbiAgICBjb250YWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIH0pO1xufSIsIi8vIEltcG9ydCBwYWdlIGZvciBlYWNoIGRpZmZlcmVudCBtZW51XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuXG4gIHRvcEhvbWVQYWdlKCk7XG4gIGxlZnRIb21lUGFnZSgpO1xuICByaWdodEhvbWVQYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHRvcEhvbWVQYWdlKCkge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgY29uc3QgaG9tZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lVG9wLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS10b3AnKTtcbiAgaG9tZVRvcC5pbm5lclRleHQgPSAnV2VsY29tZSBUbyBUaGUgVGhyZWUgQnJvb21zdGlja3MnO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVUb3ApO1xufVxuXG5mdW5jdGlvbiBsZWZ0SG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBob21lTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lTGVmdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtbGVmdCcpO1xuICBob21lTGVmdC5pbm5lclRleHQgPSAnSG9tZSBvZiB0aGUgRmluZXN0IEJ1dHRlcmJlZXIhJztcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lTGVmdCk7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0SG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBob21lUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZVJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1yaWdodCcpO1xuICBob21lUmlnaHQuaW5uZXJUZXh0ID0gJ1N0dWRlbnQgU3BlY2lhbHMnO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVSaWdodCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gIGhvbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICBtZW51RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbiAgbWVudUhlYWRlcigpO1xuICBtZW51QnJlYWtmYXN0KCk7XG4gIG1lbnVMaWdodE1lYWxzKCk7XG4gIG1lbnVNYWlucygpO1xuICBtZW51RGVzc2VydHMoKTtcbiAgbWVudURyaW5rcygpO1xuXG59XG5cbmZ1bmN0aW9uIG1lbnVIZWFkZXIoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWhlYWRlcicpO1xuICBtZW51SGVhZGVyLmlubmVyVGV4dCA9IFwiTUVOVVwiO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xufVxuXG5cbmZ1bmN0aW9uIG1lbnVCcmVha2Zhc3QoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBicmVha2Zhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJlYWtmYXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1icmVha2Zhc3QnKTtcbiAgYnJlYWtmYXN0LmlubmVyVGV4dCA9IFwiQnJlYWtmYXN0XCI7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0KTtcbn1cblxuZnVuY3Rpb24gbWVudUxpZ2h0TWVhbHMoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBsaWdodE1lYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpZ2h0TWVhbHMuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWxpZ2h0LW1lYWxzJyk7XG4gIGxpZ2h0TWVhbHMuaW5uZXJUZXh0ID0gXCJMaWdodCBNZWFsc1wiO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGxpZ2h0TWVhbHMpO1xufVxuXG5mdW5jdGlvbiBtZW51TWFpbnMoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBtYWluQ291cnNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ291cnNlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtbWFpbnMnKTtcbiAgbWFpbkNvdXJzZXMuaW5uZXJUZXh0ID0gXCJNYWluIENvdXJzZXNcIjtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChtYWluQ291cnNlcyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVEZXNzZXJ0cygpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc3NlcnRzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1kZXNzZXJ0cycpO1xuICBkZXNzZXJ0cy5pbm5lclRleHQgPSBcIkRlc3NlcnRzXCI7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydHMpO1xufVxuXG5mdW5jdGlvbiBtZW51RHJpbmtzKCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyaW5rcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtZHJpbmtzJyk7XG4gIGRyaW5rcy5pbm5lclRleHQgPSBcIkRyaW5rc1wiO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRyaW5rcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlTWVudSgpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIG1lbnVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjcmVhdGVIb21lUGFnZSgpO1xuICBjcmVhdGVNZW51KCk7XG4gIGNyZWF0ZUFib3V0KCk7XG4gIGNyZWF0ZUNvbnRhY3QoKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmNyZWF0ZVBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=