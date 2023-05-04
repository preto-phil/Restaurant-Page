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
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./gh-icon.svg */ "./src/gh-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'MyFont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 800;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  font-family: 'MyFont';\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n\n  font-family: 'MyFont';\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1.1fr 10fr 0.7fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 8fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header button {\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  cursor: pointer;\n  border: none;\n  padding: 50px;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#sign-btn {\n  width: 60%;\n  height: 80%;\n\n  border-radius: 10px;\n  \n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n#name-btn {\n  font-size: 8rem;\n  font-weight: 800;\n}\n\n#name-btn:hover {\n  font-size: 8.2rem;\n  color: #bbb7b5;\n}\n\n#menu-btn,\n#about-btn,\n#contact-btn {\n  font-size: 6rem;\n  font-weight: 800;\n}\n\n#menu-btn:hover,\n#about-btn:hover,\n#contact-btn:hover {\n  font-size: 6.5rem;\n  color: #bbb7b5;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#home,\n#menu,\n#about,\n#contact {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  6fr 3fr;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-breakfast {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-light-meals {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-mains {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-desserts {\n  grid-area: 3 / 2 / 4 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-drinks {\n  grid-area: 2 / 3 / 4 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  font-size: 5rem;\n  font-weight: 500;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 50px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#footer-created {\n  grid-area: 1 / 1 / 2 / 2;\n  \n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\n#footer-icon {\n  grid-area: 1 / 2 / 2 / 3;\n  \n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#footer-btn {\n  height: 70%;\n  width: 30%;\n  \n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n\n  border: none;\n}\n\n#footer-btn:hover {\n  height: 80%;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'MyFont';\n  src: url('./CaslonAntique.ttf') format('truetype'),\n    url('./CaslonAntique-Bold.ttf') format('truetype');\n  font-weight: 800;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  font-family: 'MyFont';\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n\n  font-family: 'MyFont';\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1.1fr 10fr 0.7fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 8fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header button {\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  cursor: pointer;\n  border: none;\n  padding: 50px;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#sign-btn {\n  width: 60%;\n  height: 80%;\n\n  border-radius: 10px;\n  \n  background: url('./logo-cropped.png');\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n#name-btn {\n  font-size: 8rem;\n  font-weight: 800;\n}\n\n#name-btn:hover {\n  font-size: 8.2rem;\n  color: #bbb7b5;\n}\n\n#menu-btn,\n#about-btn,\n#contact-btn {\n  font-size: 6rem;\n  font-weight: 800;\n}\n\n#menu-btn:hover,\n#about-btn:hover,\n#contact-btn:hover {\n  font-size: 6.5rem;\n  color: #bbb7b5;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#home,\n#menu,\n#about,\n#contact {\n  background: url('./body-photo.png');\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  6fr 3fr;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-breakfast {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-light-meals {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-mains {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-desserts {\n  grid-area: 3 / 2 / 4 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#menu-drinks {\n  grid-area: 2 / 3 / 4 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5rem;\n  color: whitesmoke;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  font-size: 5rem;\n  font-weight: 500;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 50px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#footer-created {\n  grid-area: 1 / 1 / 2 / 2;\n  \n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\n#footer-icon {\n  grid-area: 1 / 2 / 2 / 3;\n  \n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#footer-btn {\n  height: 70%;\n  width: 30%;\n  \n  background: url('./gh-icon.svg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n\n  border: none;\n}\n\n#footer-btn:hover {\n  height: 80%;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 50px;\n}\n"],"sourceRoot":""}]);
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

  const footerCreated = document.createElement('div');
  footerCreated.setAttribute('id', 'footer-created');
  footerCreated.innerText = 'Created by preto-phil';
  footerMe.appendChild(footerCreated);

  const footerIcon = document.createElement('div');
  footerIcon.setAttribute('id', 'footer-icon');
  footerIcon.innerText = '';
  footerMe.appendChild(footerIcon);

  const footerBtn = document.createElement('button');
  footerBtn.setAttribute('id', 'footer-btn');
  footerIcon.appendChild(footerBtn);
  footerBtn.addEventListener('click', () => {
    window.open('https://github.com/preto-phil');
  });

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

/***/ "./src/gh-icon.svg":
/*!*************************!*\
  !*** ./src/gh-icon.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04be58c17b3d5e974442.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNBO0FBQ0o7QUFDRTtBQUNJO0FBQ0Y7QUFDZjs7QUFFckI7QUFDQSxFQUFFLG1EQUFZO0FBQ2QsRUFBRSxpREFBYztBQUNoQixFQUFFLGlEQUFVO0FBQ1osRUFBRSxrREFBVztBQUNiLEVBQUUsb0RBQWE7QUFDZixFQUFFLG1EQUFZO0FBQ2Q7O0FBRUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ2FzbG9uQW50aXF1ZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0Nhc2xvbkFudGlxdWUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2xvZ28tY3JvcHBlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2JvZHktcGhvdG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9naC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjFmciAxMGZyIDAuN2ZyO1xcbn1cXG5cXG5cXG5cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnIgMmZyIDJmciAyZnI7XFxuXFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2U3ZTVlNDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbiNoZWFkZXItc2lnbiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lnbi1idG4ge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogODAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIFxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNuYW1lLWJ0biB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jbmFtZS1idG46aG92ZXIge1xcbiAgZm9udC1zaXplOiA4LjJyZW07XFxuICBjb2xvcjogI2JiYjdiNTtcXG59XFxuXFxuI21lbnUtYnRuLFxcbiNhYm91dC1idG4sXFxuI2NvbnRhY3QtYnRuIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbiNtZW51LWJ0bjpob3ZlcixcXG4jYWJvdXQtYnRuOmhvdmVyLFxcbiNjb250YWN0LWJ0bjpob3ZlciB7XFxuICBmb250LXNpemU6IDYuNXJlbTtcXG4gIGNvbG9yOiAjYmJiN2I1O1xcbn1cXG5cXG4jaGVhZGVyLW5hbWUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLW1lbnUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1hYm91dCB7XFxuICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLWNvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNSAvIDIgLyA2O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2hvbWUsXFxuI21lbnUsXFxuI2Fib3V0LFxcbiNjb250YWN0IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG5cXG5cXG4jaG9tZSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuI2hvbWUtdG9wIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2hvbWUtbGVmdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuXFxufVxcblxcbiNob21lLXJpZ2h0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG5cXG59XFxuXFxuXFxuXFxuI21lbnUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA2ZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuI21lbnUtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI21lbnUtYnJlYWtmYXN0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI21lbnUtbGlnaHQtbWVhbHMge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jbWVudS1tYWlucyB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNtZW51LWRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI21lbnUtZHJpbmtzIHtcXG4gIGdyaWQtYXJlYTogMiAvIDMgLyA0IC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuXFxuI2Fib3V0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAgOWZyO1xcbn1cXG5cXG4jYWJvdXQtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2Fib3V0LWJvZHkge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5cXG4jY29udGFjdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgIDlmcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jY29udGFjdC1ib2R5IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuXFxuXFxuI2Zvb3RlciB7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2U3ZTVlNDtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNmb290ZXItb3B0aW9ucyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcblxcbiNmb290ZXItbWUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbiNmb290ZXItY3JlYXRlZCB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXItaWNvbiB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3Rlci1idG4ge1xcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogMzAlO1xcbiAgXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jZm9vdGVyLWJ0bjpob3ZlciB7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuI2Zvb3Rlci10ZXh0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCOzhEQUNvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7O0VBRWIsU0FBUztFQUNULFVBQVU7O0VBRVYscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7Ozs7QUFLQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7O0VBRTFDLHdCQUF3Qjs7RUFFeEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVzs7RUFFWCxtQkFBbUI7O0VBRW5CLG1EQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFB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QUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTs7RUFFVixtREFBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDBCQUEwQjs7RUFFMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vQ2FzbG9uQW50aXF1ZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybCgnLi9DYXNsb25BbnRpcXVlLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjFmciAxMGZyIDAuN2ZyO1xcbn1cXG5cXG5cXG5cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnIgMmZyIDJmciAyZnI7XFxuXFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2U3ZTVlNDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbiNoZWFkZXItc2lnbiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lnbi1idG4ge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogODAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIFxcbiAgYmFja2dyb3VuZDogdXJsKCcuL2xvZ28tY3JvcHBlZC5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNuYW1lLWJ0biB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jbmFtZS1idG46aG92ZXIge1xcbiAgZm9udC1zaXplOiA4LjJyZW07XFxuICBjb2xvcjogI2JiYjdiNTtcXG59XFxuXFxuI21lbnUtYnRuLFxcbiNhYm91dC1idG4sXFxuI2NvbnRhY3QtYnRuIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbiNtZW51LWJ0bjpob3ZlcixcXG4jYWJvdXQtYnRuOmhvdmVyLFxcbiNjb250YWN0LWJ0bjpob3ZlciB7XFxuICBmb250LXNpemU6IDYuNXJlbTtcXG4gIGNvbG9yOiAjYmJiN2I1O1xcbn1cXG5cXG4jaGVhZGVyLW5hbWUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLW1lbnUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1hYm91dCB7XFxuICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLWNvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNSAvIDIgLyA2O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2hvbWUsXFxuI21lbnUsXFxuI2Fib3V0LFxcbiNjb250YWN0IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9ib2R5LXBob3RvLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuXFxuXFxuI2hvbWUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbiNob21lLXRvcCB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNob21lLWxlZnQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbn1cXG5cXG4jaG9tZS1yaWdodCB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuXFxufVxcblxcblxcblxcbiNtZW51IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAgNmZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbiNtZW51LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNtZW51LWJyZWFrZmFzdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNtZW51LWxpZ2h0LW1lYWxzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI21lbnUtbWFpbnMge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jbWVudS1kZXNzZXJ0cyB7XFxuICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNtZW51LWRyaW5rcyB7XFxuICBncmlkLWFyZWE6IDIgLyAzIC8gNCAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcblxcbiNhYm91dCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgIDlmcjtcXG59XFxuXFxuI2Fib3V0LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNhYm91dC1ib2R5IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuXFxuI2NvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA5ZnI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2NvbnRhY3QtYm9keSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcblxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jZm9vdGVyLW9wdGlvbnMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4jZm9vdGVyLW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4jZm9vdGVyLWNyZWF0ZWQge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZm9vdGVyLWljb24ge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXItYnRuIHtcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIFxcbiAgYmFja2dyb3VuZDogdXJsKCcuL2doLWljb24uc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNmb290ZXItYnRuOmhvdmVyIHtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4jZm9vdGVyLXRleHQge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhYm91dERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0Jyk7XG4gIGFib3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xuXG4gIGFib3V0SGVhZGVyKCk7XG4gIGFib3V0Qm9keSgpO1xufVxuXG5mdW5jdGlvbiBhYm91dEhlYWRlcigpIHtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgY29uc3QgYWJvdXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1oZWFkZXInKTtcbiAgYWJvdXRIZWFkZXIuaW5uZXJUZXh0ID0gXCJBYm91dFwiO1xuICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dEhlYWRlcik7XG59XG5cblxuZnVuY3Rpb24gYWJvdXRCb2R5KCkge1xuICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xuICBjb25zdCBhYm91dEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRCb2R5LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtYm9keScpO1xuICBhYm91dEJvZHkuaW5uZXJUZXh0ID0gXCJBIGJyaWVmIGhpc3Rvcnkgb2YgdGhlIHRocmVlIGJyb29tc3RpY2tzLi4uXCI7XG4gIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0Qm9keSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWJvdXQoKSB7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gIGFib3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4gIGNvbnRhY3RIZWFkZXIoKTtcbiAgY29udGFjdEJvZHkoKTtcbn1cblxuZnVuY3Rpb24gY29udGFjdEhlYWRlcigpIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaGVhZGVyJyk7XG4gIGNvbnRhY3RIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG59XG5cblxuZnVuY3Rpb24gY29udGFjdEJvZHkoKSB7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICBjb25zdCBjb250YWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0Qm9keS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtYm9keScpO1xuICBjb250YWN0Qm9keS5pbm5lclRleHQgPSBcIkNvbnRhY3QgaW5mb3JtYXRpb24uLi5cIjtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0Qm9keSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcblxuICBmb290ZXJPcHRpb25zKCk7XG4gIGZvb3Rlck1lKCk7XG4gIGZvb3RlclRleHQoKTtcbn1cblxuZnVuY3Rpb24gZm9vdGVyTWUoKSB7XG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgY29uc3QgZm9vdGVyTWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyTWUuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItbWUnKTtcblxuICBjb25zdCBmb290ZXJDcmVhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNyZWF0ZWQuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItY3JlYXRlZCcpO1xuICBmb290ZXJDcmVhdGVkLmlubmVyVGV4dCA9ICdDcmVhdGVkIGJ5IHByZXRvLXBoaWwnO1xuICBmb290ZXJNZS5hcHBlbmRDaGlsZChmb290ZXJDcmVhdGVkKTtcblxuICBjb25zdCBmb290ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlckljb24uc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItaWNvbicpO1xuICBmb290ZXJJY29uLmlubmVyVGV4dCA9ICcnO1xuICBmb290ZXJNZS5hcHBlbmRDaGlsZChmb290ZXJJY29uKTtcblxuICBjb25zdCBmb290ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZm9vdGVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyLWJ0bicpO1xuICBmb290ZXJJY29uLmFwcGVuZENoaWxkKGZvb3RlckJ0bik7XG4gIGZvb3RlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL3ByZXRvLXBoaWwnKTtcbiAgfSk7XG5cbiAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3Rlck1lKTtcbn1cblxuZnVuY3Rpb24gZm9vdGVyVGV4dCgpIHtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlclRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItdGV4dCcpO1xuICBmb290ZXJUZXh0LmlubmVyVGV4dCA9ICdTb21lIHRleHQgdG8gYmUgYWRkZWQgaGVyZSc7XG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbn1cblxuZnVuY3Rpb24gZm9vdGVyT3B0aW9ucygpIHtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICBjb25zdCBmb290ZXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlck9wdGlvbnMuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItb3B0aW9ucycpO1xuICBmb290ZXJPcHRpb25zLmlubmVyVGV4dCA9ICdTb21lIG90aGVyIHRleHQgdG8gYmUgYWRkZWQgaGVyZSc7XG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJPcHRpb25zKTtcbn0iLCJpbXBvcnQgeyBoaWRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGhpZGVNZW51IH0gZnJvbSBcIi4vbWVudVwiOyBcbmltcG9ydCB7IGhpZGVBYm91dCB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBoaWRlQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgaGVhZGVyU2lnbigpO1xuICBoZWFkZXJOYW1lKCk7XG4gIGhlYWRlck1lbnUoKTtcbiAgaGVhZGVyQWJvdXQoKTtcbiAgaGVhZGVyQ29udGFjdCgpO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJTaWduKCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRlclNpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyU2lnbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1zaWduJyk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJTaWduKTtcblxuICBjb25zdCBzaWduQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNpZ25CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzaWduLWJ0bicpO1xuICBzaWduQnRuLmlubmVyVGV4dCA9ICcnO1xuICBoZWFkZXJTaWduLmFwcGVuZENoaWxkKHNpZ25CdG4pO1xuXG4gIHNpZ25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gICAgLy8gc2V0IGFsbCBvdGhlciBib2RpZXMgZGlzcGxheSB0byBub25lXG4gICAgaGlkZU1lbnUoKTtcbiAgICBoaWRlQWJvdXQoKTtcbiAgICBoaWRlQ29udGFjdCgpO1xuICAgIGhvbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7IFxufVxuXG5mdW5jdGlvbiBoZWFkZXJOYW1lKCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1uYW1lJyk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJOYW1lKTtcblxuICBjb25zdCBuYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduYW1lLWJ0bicpO1xuICBuYW1lQnRuLmlubmVyVGV4dCA9IFwiVGhlIFRocmVlIEJyb29tc3RpY2tzXCJcbiAgaGVhZGVyTmFtZS5hcHBlbmRDaGlsZChuYW1lQnRuKTtcblxuICBuYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICAgIGhpZGVNZW51KCk7XG4gICAgaGlkZUFib3V0KCk7XG4gICAgaGlkZUNvbnRhY3QoKTtcbiAgICBob21lRGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJNZW51KCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyTWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1tZW51Jyk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJNZW51KTtcblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJ0bicpO1xuICBtZW51QnRuLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICBoZWFkZXJNZW51LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgaGlkZUhvbWUoKTtcbiAgICBoaWRlQWJvdXQoKTtcbiAgICBoaWRlQ29udGFjdCgpO1xuICAgIG1lbnVEaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckFib3V0KCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRlckFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckFib3V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLWFib3V0Jyk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJBYm91dCk7XG5cbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWJvdXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1idG4nKTtcbiAgYWJvdXRCdG4uaW5uZXJUZXh0ID0gXCJBYm91dFwiO1xuICBoZWFkZXJBYm91dC5hcHBlbmRDaGlsZChhYm91dEJ0bik7XG5cblxuICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xuICAgIGhpZGVIb21lKCk7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBoaWRlQ29udGFjdCgpO1xuICAgIGFib3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJDb250YWN0KCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRlckNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1jb250YWN0Jyk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJDb250YWN0KVxuXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtYnRuJyk7XG4gIGNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gIGhlYWRlckNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbiAgICBoaWRlSG9tZSgpO1xuICAgIGhpZGVNZW51KCk7XG4gICAgaGlkZUFib3V0KCk7XG4gICAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTtcbn0iLCIvLyBJbXBvcnQgcGFnZSBmb3IgZWFjaCBkaWZmZXJlbnQgbWVudVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcblxuICB0b3BIb21lUGFnZSgpO1xuICBsZWZ0SG9tZVBhZ2UoKTtcbiAgcmlnaHRIb21lUGFnZSgpO1xufVxuXG5mdW5jdGlvbiB0b3BIb21lUGFnZSgpIHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gIGNvbnN0IGhvbWVUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZVRvcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtdG9wJyk7XG4gIGhvbWVUb3AuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgVG8gVGhlIFRocmVlIEJyb29tc3RpY2tzJztcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lVG9wKTtcbn1cblxuZnVuY3Rpb24gbGVmdEhvbWVQYWdlKCkge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgY29uc3QgaG9tZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZUxlZnQuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWxlZnQnKTtcbiAgaG9tZUxlZnQuaW5uZXJUZXh0ID0gJ0hvbWUgb2YgdGhlIEZpbmVzdCBCdXR0ZXJiZWVyISc7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZUxlZnQpO1xufVxuXG5mdW5jdGlvbiByaWdodEhvbWVQYWdlKCkge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgY29uc3QgaG9tZVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVSaWdodC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtcmlnaHQnKTtcbiAgaG9tZVJpZ2h0LmlubmVyVGV4dCA9ICdTdHVkZW50IFNwZWNpYWxzJztcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lUmlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUhvbWUoKSB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBob21lRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgbWVudURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuXG4gIG1lbnVIZWFkZXIoKTtcbiAgbWVudUJyZWFrZmFzdCgpO1xuICBtZW51TGlnaHRNZWFscygpO1xuICBtZW51TWFpbnMoKTtcbiAgbWVudURlc3NlcnRzKCk7XG4gIG1lbnVEcmlua3MoKTtcblxufVxuXG5mdW5jdGlvbiBtZW51SGVhZGVyKCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1oZWFkZXInKTtcbiAgbWVudUhlYWRlci5pbm5lclRleHQgPSBcIk1FTlVcIjtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcbn1cblxuXG5mdW5jdGlvbiBtZW51QnJlYWtmYXN0KCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgYnJlYWtmYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJyZWFrZmFzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnJlYWtmYXN0Jyk7XG4gIGJyZWFrZmFzdC5pbm5lclRleHQgPSBcIkJyZWFrZmFzdFwiO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdCk7XG59XG5cbmZ1bmN0aW9uIG1lbnVMaWdodE1lYWxzKCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgbGlnaHRNZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaWdodE1lYWxzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1saWdodC1tZWFscycpO1xuICBsaWdodE1lYWxzLmlubmVyVGV4dCA9IFwiTGlnaHQgTWVhbHNcIjtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChsaWdodE1lYWxzKTtcbn1cblxuZnVuY3Rpb24gbWVudU1haW5zKCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgbWFpbkNvdXJzZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvdXJzZXMuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LW1haW5zJyk7XG4gIG1haW5Db3Vyc2VzLmlubmVyVGV4dCA9IFwiTWFpbiBDb3Vyc2VzXCI7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWFpbkNvdXJzZXMpO1xufVxuXG5mdW5jdGlvbiBtZW51RGVzc2VydHMoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNzZXJ0cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtZGVzc2VydHMnKTtcbiAgZGVzc2VydHMuaW5uZXJUZXh0ID0gXCJEZXNzZXJ0c1wiO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcbn1cblxuZnVuY3Rpb24gbWVudURyaW5rcygpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcmlua3Muc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWRyaW5rcycpO1xuICBkcmlua3MuaW5uZXJUZXh0ID0gXCJEcmlua3NcIjtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkcmlua3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBtZW51RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVBYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlSG9tZVBhZ2UoKTtcbiAgY3JlYXRlTWVudSgpO1xuICBjcmVhdGVBYm91dCgpO1xuICBjcmVhdGVDb250YWN0KCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5jcmVhdGVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9