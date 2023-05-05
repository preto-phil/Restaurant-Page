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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'MyFont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  font-family: 'MyFont';\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n\n  font-family: 'MyFont';\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1.1fr 10fr 0.7fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 8fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header button {\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  cursor: pointer;\n  border: none;\n  padding: 20px;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#sign-btn {\n  width: 60%;\n  height: 80%;\n\n  border-radius: 10px;\n  \n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n#name-btn {\n  font-size: 3rem;\n  font-weight: 700;\n  padding: 0px;\n}\n\n#name-btn:hover {\n  color: #bbb7b5;\n}\n\n#menu-btn,\n#about-btn,\n#contact-btn {\n  font-size: 2rem;\n  font-weight: 800;\n}\n\n#menu-btn:hover,\n#about-btn:hover,\n#contact-btn:hover {\n  font-size: 2.2rem;\n  color: #bbb7b5;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#home,\n#menu,\n#about,\n#contact {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: none;\n  background-size: 100% 100%;\n\n  font-size: 2rem;\n  color: whitesmoke;\n}\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 2fr 8fr;\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n}\n\n#menu-content {\n  grid-area: 2 / 1 / 3 / 2;\n\n\n  display: grid;\n  grid-template-rows: repeat(5, 1fr);\n\n  width: 60%;\n  height: auto;\n  padding: 40px;\n  background-color: rgb(0, 0, 0, 0.7);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n\n#menu-breakfast,\n#menu-light-meals,\n#menu-mains,\n#menu-desserts,\n#menu-drinks {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-breakfast {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n#menu-light-meals {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n#menu-mains {\n  grid-area: 3 / 1 / 4 / 2;\n}\n\n#menu-desserts {\n  grid-area: 4 / 1 / 5 / 2;\n}\n\n#menu-drinks {\n  grid-area: 5 / 1 / 6 / 2;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 2fr  8fr;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n#about-content {\n  width: 60%;\n  height: auto;\n  padding: 20px;\n\n  background-color: rgb(0, 0, 0, 0.7);\n\n  margin-bottom: 50px;\n}\n\n#about-content-header,\n#about-content-P1,\n#about-content-P2,\n#contact-content-P1,\n#contact-content-P2  {\n  padding-bottom: 20px;\n}\n\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 2fr  8fr;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n\n#contact-content {\n  width: 60%;\n  height: auto;\n  padding: 40px;\n\n  background-color: rgb(0, 0, 0, 0.7);\n\n  margin-bottom: 50px;\n}\n\n#contact-content-header {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 60px;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 50px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#footer-created {\n  grid-area: 1 / 1 / 2 / 2;\n  \n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\n#footer-icon {\n  grid-area: 1 / 2 / 2 / 3;\n  \n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#footer-btn {\n  height: 70%;\n  width: 30%;\n  \n  cursor: pointer;\n\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n\n  border: none;\n}\n\n#footer-btn:hover {\n  height: 80%;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'MyFont';\n  src: url('./CaslonAntique.ttf') format('truetype'),\n    url('./CaslonAntique-Bold.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  font-family: 'MyFont';\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n\n  font-family: 'MyFont';\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1.1fr 10fr 0.7fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 8fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header button {\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  cursor: pointer;\n  border: none;\n  padding: 20px;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#sign-btn {\n  width: 60%;\n  height: 80%;\n\n  border-radius: 10px;\n  \n  background: url('./logo-cropped.png');\n  background-repeat: none;\n  background-size: 100% 100%;\n}\n\n#name-btn {\n  font-size: 3rem;\n  font-weight: 700;\n  padding: 0px;\n}\n\n#name-btn:hover {\n  color: #bbb7b5;\n}\n\n#menu-btn,\n#about-btn,\n#contact-btn {\n  font-size: 2rem;\n  font-weight: 800;\n}\n\n#menu-btn:hover,\n#about-btn:hover,\n#contact-btn:hover {\n  font-size: 2.2rem;\n  color: #bbb7b5;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#home,\n#menu,\n#about,\n#contact {\n  background: url('./body-photo.png');\n  background-repeat: none;\n  background-size: 100% 100%;\n\n  font-size: 2rem;\n  color: whitesmoke;\n}\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 2fr 8fr;\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n}\n\n#menu-content {\n  grid-area: 2 / 1 / 3 / 2;\n\n\n  display: grid;\n  grid-template-rows: repeat(5, 1fr);\n\n  width: 60%;\n  height: auto;\n  padding: 40px;\n  background-color: rgb(0, 0, 0, 0.7);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n\n#menu-breakfast,\n#menu-light-meals,\n#menu-mains,\n#menu-desserts,\n#menu-drinks {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-breakfast {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n#menu-light-meals {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n#menu-mains {\n  grid-area: 3 / 1 / 4 / 2;\n}\n\n#menu-desserts {\n  grid-area: 4 / 1 / 5 / 2;\n}\n\n#menu-drinks {\n  grid-area: 5 / 1 / 6 / 2;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 2fr  8fr;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n#about-content {\n  width: 60%;\n  height: auto;\n  padding: 20px;\n\n  background-color: rgb(0, 0, 0, 0.7);\n\n  margin-bottom: 50px;\n}\n\n#about-content-header,\n#about-content-P1,\n#about-content-P2,\n#contact-content-P1,\n#contact-content-P2  {\n  padding-bottom: 20px;\n}\n\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 2fr  8fr;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n\n#contact-content {\n  width: 60%;\n  height: auto;\n  padding: 40px;\n\n  background-color: rgb(0, 0, 0, 0.7);\n\n  margin-bottom: 50px;\n}\n\n#contact-content-header {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 60px;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 50px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#footer-created {\n  grid-area: 1 / 1 / 2 / 2;\n  \n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\n#footer-icon {\n  grid-area: 1 / 2 / 2 / 3;\n  \n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#footer-btn {\n  height: 70%;\n  width: 30%;\n  \n  cursor: pointer;\n\n  background: url('./gh-icon.svg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n\n  border: none;\n}\n\n#footer-btn:hover {\n  height: 80%;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 50px;\n}\n"],"sourceRoot":""}]);
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
  aboutHeader.innerText = "ABOUT";
  aboutDiv.appendChild(aboutHeader);
}


function aboutBody() {
  const aboutDiv = document.getElementById('about');
  const aboutBody = document.createElement('div');
  aboutBody.setAttribute('id', 'about-body');
  aboutDiv.appendChild(aboutBody);

  aboutContent();
}

function aboutContent() {
  const aboutBody = document.getElementById('about-body');
  const aboutContent = document.createElement('div');
  aboutContent.setAttribute('id', 'about-content');
  aboutBody.appendChild(aboutContent);


  const aboutContentHeader = document.createElement('div');
  aboutContentHeader.setAttribute('id', 'about-content-header');
  aboutContentHeader.innerText = "A brief history of the three broomsticks...";
  aboutContent.appendChild(aboutContentHeader);

  const aboutContentP1 = document.createElement('div');
  aboutContentP1.setAttribute('id', 'about-content-P1');
  aboutContentP1.innerText = "Established in 1452, the Three Broomsticks was located in Hogsmeade, an all-wizarding village in Scotland, and was alleged to be the village founder Hengist of Woodcroft's old home. It can be suggested that the village grew over time, as it was so near Hogwarts School of Witchcraft and Wizardry.";
  aboutContent.appendChild(aboutContentP1);  

  const aboutContentP2 = document.createElement('div');
  aboutContentP2.setAttribute('id', 'about-content-P2');
  aboutContentP2.innerText = "The Three Broomsticks Inn (established 1452) was a popular inn and pub in the all wizarding village of Hogsmeade, which was often frequented by students from the neighbouring Hogwarts School of Witchcraft and Wizardry. The inn was often warm, crowded, and a bit smoky, but clean and welcoming.";
  aboutContent.appendChild(aboutContentP2);  

  const aboutContentP3 = document.createElement('div');
  aboutContentP3.setAttribute('id', 'about-content-P3');
  aboutContentP3.innerText = "A mirror behind the bar reflected the cosy atmosphere, and popular drinks such as Butterbeer and Firewhisky were served in glasses and in foaming pewter tankards, as well as gillywater, Mulled Mead, red currant rum, and even cherry syrup and soda with ice and an umbrella. The Three Broomsticks was owned and operated by Madam Rosmerta.";
  aboutContent.appendChild(aboutContentP3);
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
  contactHeader.innerText = "CONTACT";
  contactDiv.appendChild(contactHeader);
}


function contactBody() {
  const contactDiv = document.getElementById('contact');
  const contactBody = document.createElement('div');
  contactBody.setAttribute('id', 'contact-body');
  contactDiv.appendChild(contactBody);

  contactContent();
}

function contactContent() {
  const contactBody = document.getElementById('contact-body');
  const contactContent = document.createElement('div');
  contactContent.setAttribute('id', 'contact-content');
  contactBody.appendChild(contactContent);


  const contactContentHeader = document.createElement('div');
  contactContentHeader.setAttribute('id', 'contact-content-header');
  contactContentHeader.innerText = "You Can Reach Us At The Following:";
  contactContent.appendChild(contactContentHeader);

  const contactContentP1 = document.createElement('div');
  contactContentP1.setAttribute('id', 'contact-content-P1');
  contactContentP1.innerText = "Contact number: +351 151 2352";
  contactContent.appendChild(contactContentP1);  

  const contactContentP2 = document.createElement('div');
  contactContentP2.setAttribute('id', 'contact-content-P2');
  contactContentP2.innerText = "Email: the3broomsticks@wizarding.com";
  contactContent.appendChild(contactContentP2);  

  const contactContentP3 = document.createElement('div');
  contactContentP3.setAttribute('id', 'contact-content-P3');
  contactContentP3.innerText = "Owl Address: 6 Aberwith Street, Hogsmeade, Scotland";
  contactContent.appendChild(contactContentP3);
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

function footerOptions() {
  const footerDiv = document.getElementById('footer');
  const footerOptions = document.createElement('div');
  footerOptions.setAttribute('id', 'footer-options');
  footerOptions.innerText = 'Some text to be added here';
  footerDiv.appendChild(footerOptions);
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
  footerText.innerText = 'Some other text to be added here';
  footerDiv.appendChild(footerText);
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
  menuContent();
}

function menuHeader() {
  const menuDiv = document.getElementById('menu');
  const menuHeader = document.createElement('div');
  menuHeader.setAttribute('id', 'menu-header');
  menuHeader.innerText = "MENU";
  menuDiv.appendChild(menuHeader);
}


function menuContent() {
  const menuDiv = document.getElementById('menu');
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');
  menuDiv.appendChild(menuContent);

  menuBreakfast();
  menuLightMeals();
  menuMains();
  menuDesserts();
  menuDrinks();
}

function menuBreakfast() {
  const menuContent = document.getElementById('menu-content');
  const breakfast = document.createElement('div');
  breakfast.setAttribute('id', 'menu-breakfast');
  breakfast.innerText = "Breakfast";
  menuContent.appendChild(breakfast);
}

function menuLightMeals() {
  const menuContent = document.getElementById('menu-content');
  const lightMeals = document.createElement('div');
  lightMeals.setAttribute('id', 'menu-light-meals');
  lightMeals.innerText = "Light Meals";
  menuContent.appendChild(lightMeals);
}

function menuMains() {
  const menuContent = document.getElementById('menu-content');
  const mainCourses = document.createElement('div');
  mainCourses.setAttribute('id', 'menu-mains');
  mainCourses.innerText = "Main Courses";
  menuContent.appendChild(mainCourses);
}

function menuDesserts() {
  const menuContent = document.getElementById('menu-content');
  const desserts = document.createElement('div');
  desserts.setAttribute('id', 'menu-desserts');
  desserts.innerText = "Desserts";
  menuContent.appendChild(desserts);
}

function menuDrinks() {
  const menuContent = document.getElementById('menu-content');
  const drinks = document.createElement('div');
  drinks.setAttribute('id', 'menu-drinks');
  drinks.innerText = "Drinks";
  menuContent.appendChild(drinks);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLFNBQVMsS0FBSyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLE9BQU8sS0FBSyxjQUFjLFdBQVcsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sU0FBUyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsV0FBVyxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsT0FBTyxTQUFTLFlBQVksU0FBUyxLQUFLLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxjQUFjLFdBQVcsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLGFBQWEsV0FBVyxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxzQ0FBc0MsMEJBQTBCLGdIQUFnSCx3QkFBd0IsdUJBQXVC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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNBO0FBQ0o7QUFDRTtBQUNJO0FBQ0Y7QUFDZjs7QUFFckI7QUFDQSxFQUFFLG1EQUFZO0FBQ2QsRUFBRSxpREFBYztBQUNoQixFQUFFLGlEQUFVO0FBQ1osRUFBRSxrREFBVztBQUNiLEVBQUUsb0RBQWE7QUFDZixFQUFFLG1EQUFZO0FBQ2Q7O0FBRUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ2FzbG9uQW50aXF1ZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0Nhc2xvbkFudGlxdWUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2xvZ28tY3JvcHBlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2JvZHktcGhvdG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9naC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjFmciAxMGZyIDAuN2ZyO1xcbn1cXG5cXG5cXG5cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnIgMmZyIDJmciAyZnI7XFxuXFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2U3ZTVlNDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNoZWFkZXItc2lnbiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lnbi1idG4ge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogODAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIFxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNuYW1lLWJ0biB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4jbmFtZS1idG46aG92ZXIge1xcbiAgY29sb3I6ICNiYmI3YjU7XFxufVxcblxcbiNtZW51LWJ0bixcXG4jYWJvdXQtYnRuLFxcbiNjb250YWN0LWJ0biB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jbWVudS1idG46aG92ZXIsXFxuI2Fib3V0LWJ0bjpob3ZlcixcXG4jY29udGFjdC1idG46aG92ZXIge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBjb2xvcjogI2JiYjdiNTtcXG59XFxuXFxuI2hlYWRlci1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1tZW51IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA1O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1jb250YWN0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiNob21lLFxcbiNtZW51LFxcbiNhYm91dCxcXG4jY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG5cXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5cXG5cXG4jaG9tZSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuI2hvbWUtdG9wIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNob21lLWxlZnQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUtcmlnaHQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuI21lbnUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmcjtcXG59XFxuXFxuI21lbnUtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNtZW51LWNvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuXFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4jbWVudS1icmVha2Zhc3QsXFxuI21lbnUtbGlnaHQtbWVhbHMsXFxuI21lbnUtbWFpbnMsXFxuI21lbnUtZGVzc2VydHMsXFxuI21lbnUtZHJpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWJyZWFrZmFzdCB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxufVxcblxcbiNtZW51LWxpZ2h0LW1lYWxzIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG59XFxuXFxuI21lbnUtbWFpbnMge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcbn1cXG5cXG4jbWVudS1kZXNzZXJ0cyB7XFxuICBncmlkLWFyZWE6IDQgLyAxIC8gNSAvIDI7XFxufVxcblxcbiNtZW51LWRyaW5rcyB7XFxuICBncmlkLWFyZWE6IDUgLyAxIC8gNiAvIDI7XFxufVxcblxcblxcbiNhYm91dCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgIDhmcjtcXG59XFxuXFxuI2Fib3V0LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jYWJvdXQtYm9keSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWJvdXQtY29udGVudCB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcblxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuI2Fib3V0LWNvbnRlbnQtaGVhZGVyLFxcbiNhYm91dC1jb250ZW50LVAxLFxcbiNhYm91dC1jb250ZW50LVAyLFxcbiNjb250YWN0LWNvbnRlbnQtUDEsXFxuI2NvbnRhY3QtY29udGVudC1QMiAge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcblxcblxcbiNjb250YWN0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAgOGZyO1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2NvbnRhY3QtYm9keSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbiNjb250YWN0LWNvbnRlbnQge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDQwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbiNjb250YWN0LWNvbnRlbnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbn1cXG5cXG5cXG5cXG4jZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDAzYztcXG4gIGNvbG9yOiAjZTdlNWU0O1xcblxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jZm9vdGVyLW9wdGlvbnMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4jZm9vdGVyLW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4jZm9vdGVyLWNyZWF0ZWQge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZm9vdGVyLWljb24ge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXItYnRuIHtcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2Zvb3Rlci1idG46aG92ZXIge1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbiNmb290ZXItdGV4dCB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZy1yaWdodDogNTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQjs4REFDb0Q7RUFDcEQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLFNBQVM7RUFDVCxVQUFVOztFQUVWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7Ozs7O0FBS0E7RUFDRSxhQUFhO0VBQ2IsMENBQTBDOztFQUUxQyx3QkFBd0I7O0VBRXhCLHlCQUF5QjtFQUN6Qixj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O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhOztFQUViLG1DQUFtQzs7RUFFbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7Ozs7QUFJQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHFDQUFxQzs7RUFFckMseUJBQXlCO0VBQ3pCLGNBQWM7O0VBRWQsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7O0VBRW5CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7O0VBRVYsZUFBZTs7RUFFZixtREFBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDBCQUEwQjs7RUFFMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vQ2FzbG9uQW50aXF1ZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybCgnLi9DYXNsb25BbnRpcXVlLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjFmciAxMGZyIDAuN2ZyO1xcbn1cXG5cXG5cXG5cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnIgMmZyIDJmciAyZnI7XFxuXFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxufVxcblxcbiNoZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2U3ZTVlNDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNoZWFkZXItc2lnbiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lnbi1idG4ge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogODAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIFxcbiAgYmFja2dyb3VuZDogdXJsKCcuL2xvZ28tY3JvcHBlZC5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbiNuYW1lLWJ0biB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4jbmFtZS1idG46aG92ZXIge1xcbiAgY29sb3I6ICNiYmI3YjU7XFxufVxcblxcbiNtZW51LWJ0bixcXG4jYWJvdXQtYnRuLFxcbiNjb250YWN0LWJ0biB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jbWVudS1idG46aG92ZXIsXFxuI2Fib3V0LWJ0bjpob3ZlcixcXG4jY29udGFjdC1idG46aG92ZXIge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBjb2xvcjogI2JiYjdiNTtcXG59XFxuXFxuI2hlYWRlci1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1tZW51IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA1O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1jb250YWN0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiNob21lLFxcbiNtZW51LFxcbiNhYm91dCxcXG4jY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYm9keS1waG90by5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuXFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuXFxuXFxuI2hvbWUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbiNob21lLXRvcCB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jaG9tZS1sZWZ0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNob21lLXJpZ2h0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbiNtZW51IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA4ZnI7XFxufVxcblxcbiNtZW51LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jbWVudS1jb250ZW50IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcblxcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuI21lbnUtYnJlYWtmYXN0LFxcbiNtZW51LWxpZ2h0LW1lYWxzLFxcbiNtZW51LW1haW5zLFxcbiNtZW51LWRlc3NlcnRzLFxcbiNtZW51LWRyaW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWVudS1icmVha2Zhc3Qge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbn1cXG5cXG4jbWVudS1saWdodC1tZWFscyB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxufVxcblxcbiNtZW51LW1haW5zIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG59XFxuXFxuI21lbnUtZGVzc2VydHMge1xcbiAgZ3JpZC1hcmVhOiA0IC8gMSAvIDUgLyAyO1xcbn1cXG5cXG4jbWVudS1kcmlua3Mge1xcbiAgZ3JpZC1hcmVhOiA1IC8gMSAvIDYgLyAyO1xcbn1cXG5cXG5cXG4jYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyICA4ZnI7XFxufVxcblxcbiNhYm91dC1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2Fib3V0LWJvZHkge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Fib3V0LWNvbnRlbnQge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbiNhYm91dC1jb250ZW50LWhlYWRlcixcXG4jYWJvdXQtY29udGVudC1QMSxcXG4jYWJvdXQtY29udGVudC1QMixcXG4jY29udGFjdC1jb250ZW50LVAxLFxcbiNjb250YWN0LWNvbnRlbnQtUDIgIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG4jY29udGFjdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgIDhmcjtcXG59XFxuXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNjb250YWN0LWJvZHkge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4jY29udGFjdC1jb250ZW50IHtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiA0MHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxuXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4jY29udGFjdC1jb250ZW50LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG59XFxuXFxuXFxuXFxuI2Zvb3RlciB7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2U3ZTVlNDtcXG5cXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2Zvb3Rlci1vcHRpb25zIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuXFxuI2Zvb3Rlci1tZSB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuI2Zvb3Rlci1jcmVhdGVkIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3Rlci1pY29uIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZm9vdGVyLWJ0biB7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIGJhY2tncm91bmQ6IHVybCgnLi9naC1pY29uLnN2ZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jZm9vdGVyLWJ0bjpob3ZlciB7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuI2Zvb3Rlci10ZXh0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dCcpO1xuICBhYm91dERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0RGl2KTtcblxuICBhYm91dEhlYWRlcigpO1xuICBhYm91dEJvZHkoKTtcbn1cblxuZnVuY3Rpb24gYWJvdXRIZWFkZXIoKSB7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gIGNvbnN0IGFib3V0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtaGVhZGVyJyk7XG4gIGFib3V0SGVhZGVyLmlubmVyVGV4dCA9IFwiQUJPVVRcIjtcbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpO1xufVxuXG5cbmZ1bmN0aW9uIGFib3V0Qm9keSgpIHtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgY29uc3QgYWJvdXRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0Qm9keS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWJvZHknKTtcbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRCb2R5KTtcblxuICBhYm91dENvbnRlbnQoKTtcbn1cblxuZnVuY3Rpb24gYWJvdXRDb250ZW50KCkge1xuICBjb25zdCBhYm91dEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtYm9keScpO1xuICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtY29udGVudCcpO1xuICBhYm91dEJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KTtcblxuXG4gIGNvbnN0IGFib3V0Q29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhYm91dENvbnRlbnRIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1jb250ZW50LWhlYWRlcicpO1xuICBhYm91dENvbnRlbnRIZWFkZXIuaW5uZXJUZXh0ID0gXCJBIGJyaWVmIGhpc3Rvcnkgb2YgdGhlIHRocmVlIGJyb29tc3RpY2tzLi4uXCI7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnRIZWFkZXIpO1xuXG4gIGNvbnN0IGFib3V0Q29udGVudFAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0Q29udGVudFAxLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtY29udGVudC1QMScpO1xuICBhYm91dENvbnRlbnRQMS5pbm5lclRleHQgPSBcIkVzdGFibGlzaGVkIGluIDE0NTIsIHRoZSBUaHJlZSBCcm9vbXN0aWNrcyB3YXMgbG9jYXRlZCBpbiBIb2dzbWVhZGUsIGFuIGFsbC13aXphcmRpbmcgdmlsbGFnZSBpbiBTY290bGFuZCwgYW5kIHdhcyBhbGxlZ2VkIHRvIGJlIHRoZSB2aWxsYWdlIGZvdW5kZXIgSGVuZ2lzdCBvZiBXb29kY3JvZnQncyBvbGQgaG9tZS4gSXQgY2FuIGJlIHN1Z2dlc3RlZCB0aGF0IHRoZSB2aWxsYWdlIGdyZXcgb3ZlciB0aW1lLCBhcyBpdCB3YXMgc28gbmVhciBIb2d3YXJ0cyBTY2hvb2wgb2YgV2l0Y2hjcmFmdCBhbmQgV2l6YXJkcnkuXCI7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnRQMSk7ICBcblxuICBjb25zdCBhYm91dENvbnRlbnRQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhYm91dENvbnRlbnRQMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWNvbnRlbnQtUDInKTtcbiAgYWJvdXRDb250ZW50UDIuaW5uZXJUZXh0ID0gXCJUaGUgVGhyZWUgQnJvb21zdGlja3MgSW5uIChlc3RhYmxpc2hlZCAxNDUyKSB3YXMgYSBwb3B1bGFyIGlubiBhbmQgcHViIGluIHRoZSBhbGwgd2l6YXJkaW5nIHZpbGxhZ2Ugb2YgSG9nc21lYWRlLCB3aGljaCB3YXMgb2Z0ZW4gZnJlcXVlbnRlZCBieSBzdHVkZW50cyBmcm9tIHRoZSBuZWlnaGJvdXJpbmcgSG9nd2FydHMgU2Nob29sIG9mIFdpdGNoY3JhZnQgYW5kIFdpemFyZHJ5LiBUaGUgaW5uIHdhcyBvZnRlbiB3YXJtLCBjcm93ZGVkLCBhbmQgYSBiaXQgc21va3ksIGJ1dCBjbGVhbiBhbmQgd2VsY29taW5nLlwiO1xuICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50UDIpOyAgXG5cbiAgY29uc3QgYWJvdXRDb250ZW50UDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRDb250ZW50UDMuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1jb250ZW50LVAzJyk7XG4gIGFib3V0Q29udGVudFAzLmlubmVyVGV4dCA9IFwiQSBtaXJyb3IgYmVoaW5kIHRoZSBiYXIgcmVmbGVjdGVkIHRoZSBjb3N5IGF0bW9zcGhlcmUsIGFuZCBwb3B1bGFyIGRyaW5rcyBzdWNoIGFzIEJ1dHRlcmJlZXIgYW5kIEZpcmV3aGlza3kgd2VyZSBzZXJ2ZWQgaW4gZ2xhc3NlcyBhbmQgaW4gZm9hbWluZyBwZXd0ZXIgdGFua2FyZHMsIGFzIHdlbGwgYXMgZ2lsbHl3YXRlciwgTXVsbGVkIE1lYWQsIHJlZCBjdXJyYW50IHJ1bSwgYW5kIGV2ZW4gY2hlcnJ5IHN5cnVwIGFuZCBzb2RhIHdpdGggaWNlIGFuZCBhbiB1bWJyZWxsYS4gVGhlIFRocmVlIEJyb29tc3RpY2tzIHdhcyBvd25lZCBhbmQgb3BlcmF0ZWQgYnkgTWFkYW0gUm9zbWVydGEuXCI7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnRQMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWJvdXQoKSB7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gIGFib3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4gIGNvbnRhY3RIZWFkZXIoKTtcbiAgY29udGFjdEJvZHkoKTtcbn1cblxuZnVuY3Rpb24gY29udGFjdEhlYWRlcigpIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaGVhZGVyJyk7XG4gIGNvbnRhY3RIZWFkZXIuaW5uZXJUZXh0ID0gXCJDT05UQUNUXCI7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG59XG5cblxuZnVuY3Rpb24gY29udGFjdEJvZHkoKSB7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICBjb25zdCBjb250YWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0Qm9keS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtYm9keScpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5KTtcblxuICBjb250YWN0Q29udGVudCgpO1xufVxuXG5mdW5jdGlvbiBjb250YWN0Q29udGVudCgpIHtcbiAgY29uc3QgY29udGFjdEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1ib2R5Jyk7XG4gIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1jb250ZW50Jyk7XG4gIGNvbnRhY3RCb2R5LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcblxuXG4gIGNvbnN0IGNvbnRhY3RDb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RDb250ZW50SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1jb250ZW50LWhlYWRlcicpO1xuICBjb250YWN0Q29udGVudEhlYWRlci5pbm5lclRleHQgPSBcIllvdSBDYW4gUmVhY2ggVXMgQXQgVGhlIEZvbGxvd2luZzpcIjtcbiAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnRIZWFkZXIpO1xuXG4gIGNvbnN0IGNvbnRhY3RDb250ZW50UDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdENvbnRlbnRQMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtY29udGVudC1QMScpO1xuICBjb250YWN0Q29udGVudFAxLmlubmVyVGV4dCA9IFwiQ29udGFjdCBudW1iZXI6ICszNTEgMTUxIDIzNTJcIjtcbiAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnRQMSk7ICBcblxuICBjb25zdCBjb250YWN0Q29udGVudFAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RDb250ZW50UDIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWNvbnRlbnQtUDInKTtcbiAgY29udGFjdENvbnRlbnRQMi5pbm5lclRleHQgPSBcIkVtYWlsOiB0aGUzYnJvb21zdGlja3NAd2l6YXJkaW5nLmNvbVwiO1xuICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudFAyKTsgIFxuXG4gIGNvbnN0IGNvbnRhY3RDb250ZW50UDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdENvbnRlbnRQMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtY29udGVudC1QMycpO1xuICBjb250YWN0Q29udGVudFAzLmlubmVyVGV4dCA9IFwiT3dsIEFkZHJlc3M6IDYgQWJlcndpdGggU3RyZWV0LCBIb2dzbWVhZGUsIFNjb3RsYW5kXCI7XG4gIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50UDMpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcblxuICBmb290ZXJPcHRpb25zKCk7XG4gIGZvb3Rlck1lKCk7XG4gIGZvb3RlclRleHQoKTtcbn1cblxuZnVuY3Rpb24gZm9vdGVyT3B0aW9ucygpIHtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICBjb25zdCBmb290ZXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlck9wdGlvbnMuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItb3B0aW9ucycpO1xuICBmb290ZXJPcHRpb25zLmlubmVyVGV4dCA9ICdTb21lIHRleHQgdG8gYmUgYWRkZWQgaGVyZSc7XG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJPcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gZm9vdGVyTWUoKSB7XG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgY29uc3QgZm9vdGVyTWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyTWUuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItbWUnKTtcblxuICBjb25zdCBmb290ZXJDcmVhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNyZWF0ZWQuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItY3JlYXRlZCcpO1xuICBmb290ZXJDcmVhdGVkLmlubmVyVGV4dCA9ICdDcmVhdGVkIGJ5IHByZXRvLXBoaWwnO1xuICBmb290ZXJNZS5hcHBlbmRDaGlsZChmb290ZXJDcmVhdGVkKTtcblxuICBjb25zdCBmb290ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlckljb24uc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItaWNvbicpO1xuICBmb290ZXJJY29uLmlubmVyVGV4dCA9ICcnO1xuICBmb290ZXJNZS5hcHBlbmRDaGlsZChmb290ZXJJY29uKTtcblxuICBjb25zdCBmb290ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZm9vdGVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyLWJ0bicpO1xuICBmb290ZXJJY29uLmFwcGVuZENoaWxkKGZvb3RlckJ0bik7XG4gIGZvb3RlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL3ByZXRvLXBoaWwnKTtcbiAgfSk7XG5cbiAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3Rlck1lKTtcbn1cblxuZnVuY3Rpb24gZm9vdGVyVGV4dCgpIHtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlclRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItdGV4dCcpO1xuICBmb290ZXJUZXh0LmlubmVyVGV4dCA9ICdTb21lIG90aGVyIHRleHQgdG8gYmUgYWRkZWQgaGVyZSc7XG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbn1cbiIsImltcG9ydCB7IGhpZGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgaGlkZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7IFxuaW1wb3J0IHsgaGlkZUFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCB7IGhpZGVDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICBoZWFkZXJTaWduKCk7XG4gIGhlYWRlck5hbWUoKTtcbiAgaGVhZGVyTWVudSgpO1xuICBoZWFkZXJBYm91dCgpO1xuICBoZWFkZXJDb250YWN0KCk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlclNpZ24oKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJTaWduLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLXNpZ24nKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclNpZ24pO1xuXG4gIGNvbnN0IHNpZ25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2lnbkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpZ24tYnRuJyk7XG4gIHNpZ25CdG4uaW5uZXJUZXh0ID0gJyc7XG4gIGhlYWRlclNpZ24uYXBwZW5kQ2hpbGQoc2lnbkJ0bik7XG5cbiAgc2lnbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgICAvLyBzZXQgYWxsIG90aGVyIGJvZGllcyBkaXNwbGF5IHRvIG5vbmVcbiAgICBoaWRlTWVudSgpO1xuICAgIGhpZGVBYm91dCgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgaG9tZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTsgXG59XG5cbmZ1bmN0aW9uIGhlYWRlck5hbWUoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLW5hbWUnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlck5hbWUpO1xuXG4gIGNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmFtZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUtYnRuJyk7XG4gIG5hbWVCdG4uaW5uZXJUZXh0ID0gXCJUaGUgVGhyZWUgQnJvb21zdGlja3NcIlxuICBoZWFkZXJOYW1lLmFwcGVuZENoaWxkKG5hbWVCdG4pO1xuXG4gIG5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBoaWRlQWJvdXQoKTtcbiAgICBoaWRlQ29udGFjdCgpO1xuICAgIGhvbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlck1lbnUoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLW1lbnUnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlck1lbnUpO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnRuJyk7XG4gIG1lbnVCdG4uaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICBoaWRlSG9tZSgpO1xuICAgIGhpZGVBYm91dCgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgbWVudURpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyQWJvdXQoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItYWJvdXQnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckFib3V0KTtcblxuICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhYm91dEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWJ0bicpO1xuICBhYm91dEJ0bi5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gIGhlYWRlckFib3V0LmFwcGVuZENoaWxkKGFib3V0QnRuKTtcblxuXG4gIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gICAgaGlkZUhvbWUoKTtcbiAgICBoaWRlTWVudSgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgYWJvdXREaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckNvbnRhY3QoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLWNvbnRhY3QnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhY3QpXG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idG4nKTtcbiAgY29udGFjdEJ0bi5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgaGVhZGVyQ29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICAgIGhpZGVIb21lKCk7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBoaWRlQWJvdXQoKTtcbiAgICBjb250YWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuXG4gIHRvcEhvbWVQYWdlKCk7XG4gIGxlZnRIb21lUGFnZSgpO1xuICByaWdodEhvbWVQYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHRvcEhvbWVQYWdlKCkge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgY29uc3QgaG9tZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lVG9wLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS10b3AnKTtcbiAgaG9tZVRvcC5pbm5lclRleHQgPSAnV2VsY29tZSBUbyBUaGUgVGhyZWUgQnJvb21zdGlja3MnO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVUb3ApO1xufVxuXG5mdW5jdGlvbiBsZWZ0SG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBob21lTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lTGVmdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtbGVmdCcpO1xuICBob21lTGVmdC5pbm5lclRleHQgPSAnSG9tZSBvZiB0aGUgRmluZXN0IEJ1dHRlcmJlZXIhJztcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lTGVmdCk7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0SG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBob21lUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZVJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1yaWdodCcpO1xuICBob21lUmlnaHQuaW5uZXJUZXh0ID0gJ1N0dWRlbnQgU3BlY2lhbHMnO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVSaWdodCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gIGhvbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICBtZW51RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbiAgbWVudUhlYWRlcigpO1xuICBtZW51Q29udGVudCgpO1xufVxuXG5mdW5jdGlvbiBtZW51SGVhZGVyKCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1oZWFkZXInKTtcbiAgbWVudUhlYWRlci5pbm5lclRleHQgPSBcIk1FTlVcIjtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcbn1cblxuXG5mdW5jdGlvbiBtZW51Q29udGVudCgpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1jb250ZW50Jyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuXG4gIG1lbnVCcmVha2Zhc3QoKTtcbiAgbWVudUxpZ2h0TWVhbHMoKTtcbiAgbWVudU1haW5zKCk7XG4gIG1lbnVEZXNzZXJ0cygpO1xuICBtZW51RHJpbmtzKCk7XG59XG5cbmZ1bmN0aW9uIG1lbnVCcmVha2Zhc3QoKSB7XG4gIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY29udGVudCcpO1xuICBjb25zdCBicmVha2Zhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJlYWtmYXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1icmVha2Zhc3QnKTtcbiAgYnJlYWtmYXN0LmlubmVyVGV4dCA9IFwiQnJlYWtmYXN0XCI7XG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGJyZWFrZmFzdCk7XG59XG5cbmZ1bmN0aW9uIG1lbnVMaWdodE1lYWxzKCkge1xuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWNvbnRlbnQnKTtcbiAgY29uc3QgbGlnaHRNZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaWdodE1lYWxzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1saWdodC1tZWFscycpO1xuICBsaWdodE1lYWxzLmlubmVyVGV4dCA9IFwiTGlnaHQgTWVhbHNcIjtcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobGlnaHRNZWFscyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVNYWlucygpIHtcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb250ZW50Jyk7XG4gIGNvbnN0IG1haW5Db3Vyc2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Db3Vyc2VzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1tYWlucycpO1xuICBtYWluQ291cnNlcy5pbm5lclRleHQgPSBcIk1haW4gQ291cnNlc1wiO1xuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtYWluQ291cnNlcyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVEZXNzZXJ0cygpIHtcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb250ZW50Jyk7XG4gIGNvbnN0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc3NlcnRzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1kZXNzZXJ0cycpO1xuICBkZXNzZXJ0cy5pbm5lclRleHQgPSBcIkRlc3NlcnRzXCI7XG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcbn1cblxuZnVuY3Rpb24gbWVudURyaW5rcygpIHtcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb250ZW50Jyk7XG4gIGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcmlua3Muc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWRyaW5rcycpO1xuICBkcmlua3MuaW5uZXJUZXh0ID0gXCJEcmlua3NcIjtcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNZW51KCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgbWVudURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG4gIGNyZWF0ZU1lbnUoKTtcbiAgY3JlYXRlQWJvdXQoKTtcbiAgY3JlYXRlQ29udGFjdCgpO1xuICBjcmVhdGVGb290ZXIoKTtcbn1cblxuY3JlYXRlUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==