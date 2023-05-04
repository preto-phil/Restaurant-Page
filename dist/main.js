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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  border: 1px solid snow;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1fr 10fr 0.5fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 5fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  6fr 3fr;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-breakfast {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-light-meals {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-mains {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-desserts {\n  grid-area: 3 / 2 / 4 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-drinks {\n  grid-area: 2 / 3 / 4 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 20px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,aAAa;EACb,kCAAkC;AACpC;;;;;AAKA;EACE,aAAa;EACb,0CAA0C;;EAE1C,wBAAwB;;EAExB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;;;;;AAMA;EACE,wBAAwB;;EAExB,aAAa;EACb,2BAA2B;EAC3B,qCAAqC;;EAErC,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;;;AAIA;EACE,wBAAwB;;EAExB,aAAa;EACb,gCAAgC;EAChC,qCAAqC;;EAErC,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;;AAGA;EACE,wBAAwB;;EAExB,aAAa;EACb,4BAA4B;;EAE5B,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;;AAGA;EACE,wBAAwB;;EAExB,aAAa;EACb,4BAA4B;;EAE5B,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;;;AAIA;EACE,wBAAwB;;EAExB,aAAa;EACb,qCAAqC;;EAErC,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;;EAExB,aAAa;EACb,oBAAoB;EACpB,mBAAmB;;EAEnB,mBAAmB;AACrB","sourcesContent":["* {\n  box-sizing: border-box;\n  border: 1px solid snow;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  \n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  \n  display: grid;\n  grid-template-rows: 1fr 10fr 0.5fr;\n}\n\n\n\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 5fr 2fr 2fr 2fr;\n\n  grid-area: 1 / 1 / 2 / 2;\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#header-sign {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-name {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n#header-menu {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-about {\n  grid-area: 1 / 4 / 2 / 5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-contact {\n  grid-area: 1 / 5 / 2 / 6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n\n\n#home {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: repeat(2, 1fr);\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#home-top {\n  grid-area: 1 / 1 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#home-left {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#home-right {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n#menu {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  6fr 3fr;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#menu-header {\n  grid-area: 1 / 1 / 2 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-breakfast {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-light-meals {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-mains {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-desserts {\n  grid-area: 3 / 2 / 4 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu-drinks {\n  grid-area: 2 / 3 / 4 / 4;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#about {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#about-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#about-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#contact {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-rows: 1fr  9fr;\n\n  background-color: #78716c;\n  color: #292524;\n}\n\n#contact-header {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#contact-body {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n#footer {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  background-color: #44403c;\n  color: #e7e5e4;\n}\n\n#footer-options {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n\n  padding-left: 20px;\n}\n\n#footer-me {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#footer-text {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  padding-right: 20px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCBzbm93O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAwLjVmcjtcXG59XFxuXFxuXFxuXFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmciAyZnIgMmZyO1xcblxcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDAzYztcXG4gIGNvbG9yOiAjZTdlNWU0O1xcbn1cXG5cXG4jaGVhZGVyLXNpZ24ge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1tZW51IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA1O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1jb250YWN0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcblxcbiNob21lIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzE2YztcXG4gIGNvbG9yOiAjMjkyNTI0O1xcbn1cXG5cXG4jaG9tZS10b3Age1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUtbGVmdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZS1yaWdodCB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4jbWVudSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgIDZmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzE2YztcXG4gIGNvbG9yOiAjMjkyNTI0O1xcbn1cXG5cXG4jbWVudS1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21lbnUtYnJlYWtmYXN0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWxpZ2h0LW1lYWxzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LW1haW5zIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWRyaW5rcyB7XFxuICBncmlkLWFyZWE6IDIgLyAzIC8gNCAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA5ZnI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3MTZjO1xcbiAgY29sb3I6ICMyOTI1MjQ7XFxufVxcblxcbiNhYm91dC1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Fib3V0LWJvZHkge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2NvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA5ZnI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3MTZjO1xcbiAgY29sb3I6ICMyOTI1MjQ7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC1ib2R5IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxufVxcblxcbiNmb290ZXItb3B0aW9ucyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNmb290ZXItbWUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3Rlci10ZXh0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOzs7OztBQUtBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQzs7RUFFMUMsd0JBQXdCOztFQUV4Qix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFNQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixxQ0FBcUM7O0VBRXJDLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7O0FBSUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMscUNBQXFDOztFQUVyQyx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7O0FBR0E7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYiw0QkFBNEI7O0VBRTVCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsNEJBQTRCOztFQUU1Qix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7O0FBSUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYixxQ0FBcUM7O0VBRXJDLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7O0VBRW5CLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCBzbm93O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAwLjVmcjtcXG59XFxuXFxuXFxuXFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmciAyZnIgMmZyO1xcblxcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDAzYztcXG4gIGNvbG9yOiAjZTdlNWU0O1xcbn1cXG5cXG4jaGVhZGVyLXNpZ24ge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1tZW51IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA1O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1jb250YWN0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcblxcbiNob21lIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzE2YztcXG4gIGNvbG9yOiAjMjkyNTI0O1xcbn1cXG5cXG4jaG9tZS10b3Age1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUtbGVmdCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZS1yaWdodCB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4jbWVudSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgIDZmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzE2YztcXG4gIGNvbG9yOiAjMjkyNTI0O1xcbn1cXG5cXG4jbWVudS1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21lbnUtYnJlYWtmYXN0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWxpZ2h0LW1lYWxzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LW1haW5zIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWRyaW5rcyB7XFxuICBncmlkLWFyZWE6IDIgLyAzIC8gNCAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA5ZnI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3MTZjO1xcbiAgY29sb3I6ICMyOTI1MjQ7XFxufVxcblxcbiNhYm91dC1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Fib3V0LWJvZHkge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2NvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyICA5ZnI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3MTZjO1xcbiAgY29sb3I6ICMyOTI1MjQ7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC1ib2R5IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNlN2U1ZTQ7XFxufVxcblxcbiNmb290ZXItb3B0aW9ucyB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNmb290ZXItbWUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3Rlci10ZXh0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhYm91dERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0Jyk7XG4gIGFib3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xuXG4gIGFib3V0SGVhZGVyKCk7XG4gIGFib3V0Qm9keSgpO1xufVxuXG5mdW5jdGlvbiBhYm91dEhlYWRlcigpIHtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgY29uc3QgYWJvdXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1oZWFkZXInKTtcbiAgYWJvdXRIZWFkZXIuaW5uZXJUZXh0ID0gXCJBYm91dFwiO1xuICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dEhlYWRlcik7XG59XG5cblxuZnVuY3Rpb24gYWJvdXRCb2R5KCkge1xuICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xuICBjb25zdCBhYm91dEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRCb2R5LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtYm9keScpO1xuICBhYm91dEJvZHkuaW5uZXJUZXh0ID0gXCJBIGJyaWVmIGhpc3Rvcnkgb2YgdGhlIHRocmVlIGJyb29tc3RpY2tzLi4uXCI7XG4gIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0Qm9keSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWJvdXQoKSB7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gIGFib3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgY29udGFjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4gIGNvbnRhY3RIZWFkZXIoKTtcbiAgY29udGFjdEJvZHkoKTtcbn1cblxuZnVuY3Rpb24gY29udGFjdEhlYWRlcigpIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaGVhZGVyJyk7XG4gIGNvbnRhY3RIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG59XG5cblxuZnVuY3Rpb24gY29udGFjdEJvZHkoKSB7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICBjb25zdCBjb250YWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0Qm9keS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtYm9keScpO1xuICBjb250YWN0Qm9keS5pbm5lclRleHQgPSBcIkNvbnRhY3QgaW5mb3JtYXRpb24uLi5cIjtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0Qm9keSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcblxuICBmb290ZXJPcHRpb25zKCk7XG4gIGZvb3Rlck1lKCk7XG4gIGZvb3RlclRleHQoKTtcbn1cblxuZnVuY3Rpb24gZm9vdGVyTWUoKSB7XG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgY29uc3QgZm9vdGVyTWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyTWUuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItbWUnKTtcbiAgZm9vdGVyTWUuaW5uZXJUZXh0ID0gJ0NyZWF0ZWQgYnkgcHJldG8tcGhpbCc7XG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJNZSk7XG59XG5cbmZ1bmN0aW9uIGZvb3RlclRleHQoKSB7XG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyLXRleHQnKTtcbiAgZm9vdGVyVGV4dC5pbm5lclRleHQgPSAnU29tZSB0ZXh0IHRvIGJlIGFkZGVkIGhlcmUnO1xuICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGZvb3Rlck9wdGlvbnMoKSB7XG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgY29uc3QgZm9vdGVyT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJPcHRpb25zLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyLW9wdGlvbnMnKTtcbiAgZm9vdGVyT3B0aW9ucy5pbm5lclRleHQgPSAnU29tZSBvdGhlciB0ZXh0IHRvIGJlIGFkZGVkIGhlcmUnO1xuICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyT3B0aW9ucyk7XG59IiwiaW1wb3J0IHsgaGlkZUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBoaWRlTWVudSB9IGZyb20gXCIuL21lbnVcIjsgXG5pbXBvcnQgeyBoaWRlQWJvdXQgfSBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHsgaGlkZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gIGhlYWRlclNpZ24oKTtcbiAgaGVhZGVyTmFtZSgpO1xuICBoZWFkZXJNZW51KCk7XG4gIGhlYWRlckFib3V0KCk7XG4gIGhlYWRlckNvbnRhY3QoKTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyU2lnbigpIHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICBjb25zdCBoZWFkZXJTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlclNpZ24uc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItc2lnbicpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyU2lnbik7XG5cbiAgY29uc3Qgc2lnbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzaWduQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lnbi1idG4nKTtcbiAgc2lnbkJ0bi5pbm5lclRleHQgPSAnTG9nbyc7XG4gIGhlYWRlclNpZ24uYXBwZW5kQ2hpbGQoc2lnbkJ0bik7XG5cbiAgc2lnbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgICAvLyBzZXQgYWxsIG90aGVyIGJvZGllcyBkaXNwbGF5IHRvIG5vbmVcbiAgICBoaWRlTWVudSgpO1xuICAgIGhpZGVBYm91dCgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgaG9tZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTsgXG59XG5cbmZ1bmN0aW9uIGhlYWRlck5hbWUoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLW5hbWUnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlck5hbWUpO1xuXG4gIGNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmFtZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUtYnRuJyk7XG4gIG5hbWVCdG4uaW5uZXJUZXh0ID0gXCJUaGUgVGhyZWUgQnJvb21zdGlja3NcIlxuICBoZWFkZXJOYW1lLmFwcGVuZENoaWxkKG5hbWVCdG4pO1xuXG4gIG5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBoaWRlQWJvdXQoKTtcbiAgICBoaWRlQ29udGFjdCgpO1xuICAgIGhvbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlck1lbnUoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLW1lbnUnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlck1lbnUpO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnRuJyk7XG4gIG1lbnVCdG4uaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICBoaWRlSG9tZSgpO1xuICAgIGhpZGVBYm91dCgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgbWVudURpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyQWJvdXQoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItYWJvdXQnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckFib3V0KTtcblxuICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhYm91dEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWJ0bicpO1xuICBhYm91dEJ0bi5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gIGhlYWRlckFib3V0LmFwcGVuZENoaWxkKGFib3V0QnRuKTtcblxuXG4gIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gICAgaGlkZUhvbWUoKTtcbiAgICBoaWRlTWVudSgpO1xuICAgIGhpZGVDb250YWN0KCk7XG4gICAgYWJvdXREaXYuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckNvbnRhY3QoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLWNvbnRhY3QnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhY3QpXG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idG4nKTtcbiAgY29udGFjdEJ0bi5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgaGVhZGVyQ29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICAgIGhpZGVIb21lKCk7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBoaWRlQWJvdXQoKTtcbiAgICBjb250YWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIH0pO1xufSIsIi8vIEltcG9ydCBwYWdlIGZvciBlYWNoIGRpZmZlcmVudCBtZW51XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuXG4gIHRvcEhvbWVQYWdlKCk7XG4gIGxlZnRIb21lUGFnZSgpO1xuICByaWdodEhvbWVQYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHRvcEhvbWVQYWdlKCkge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgY29uc3QgaG9tZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lVG9wLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS10b3AnKTtcbiAgaG9tZVRvcC5pbm5lclRleHQgPSAnV2VsY29tZSBUbyBUaGUgVGhyZWUgQnJvb21zdGlja3MnO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVUb3ApO1xufVxuXG5mdW5jdGlvbiBsZWZ0SG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBob21lTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lTGVmdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtbGVmdCcpO1xuICBob21lTGVmdC5pbm5lclRleHQgPSAnSG9tZSBvZiB0aGUgRmluZXN0IEJ1dHRlcmJlZXIhJztcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lTGVmdCk7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0SG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBob21lUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZVJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1yaWdodCcpO1xuICBob21lUmlnaHQuaW5uZXJUZXh0ID0gJ1N0dWRlbnQgU3BlY2lhbHMnO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVSaWdodCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gIGhvbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICBtZW51RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbiAgbWVudUhlYWRlcigpO1xuICBtZW51QnJlYWtmYXN0KCk7XG4gIG1lbnVMaWdodE1lYWxzKCk7XG4gIG1lbnVNYWlucygpO1xuICBtZW51RGVzc2VydHMoKTtcbiAgbWVudURyaW5rcygpO1xuXG59XG5cbmZ1bmN0aW9uIG1lbnVIZWFkZXIoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWhlYWRlcicpO1xuICBtZW51SGVhZGVyLmlubmVyVGV4dCA9IFwiTUVOVVwiO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xufVxuXG5cbmZ1bmN0aW9uIG1lbnVCcmVha2Zhc3QoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBicmVha2Zhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJlYWtmYXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1icmVha2Zhc3QnKTtcbiAgYnJlYWtmYXN0LmlubmVyVGV4dCA9IFwiQnJlYWtmYXN0XCI7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0KTtcbn1cblxuZnVuY3Rpb24gbWVudUxpZ2h0TWVhbHMoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBsaWdodE1lYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpZ2h0TWVhbHMuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWxpZ2h0LW1lYWxzJyk7XG4gIGxpZ2h0TWVhbHMuaW5uZXJUZXh0ID0gXCJMaWdodCBNZWFsc1wiO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGxpZ2h0TWVhbHMpO1xufVxuXG5mdW5jdGlvbiBtZW51TWFpbnMoKSB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICBjb25zdCBtYWluQ291cnNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ291cnNlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtbWFpbnMnKTtcbiAgbWFpbkNvdXJzZXMuaW5uZXJUZXh0ID0gXCJNYWluIENvdXJzZXNcIjtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChtYWluQ291cnNlcyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVEZXNzZXJ0cygpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc3NlcnRzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1kZXNzZXJ0cycpO1xuICBkZXNzZXJ0cy5pbm5lclRleHQgPSBcIkRlc3NlcnRzXCI7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydHMpO1xufVxuXG5mdW5jdGlvbiBtZW51RHJpbmtzKCkge1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyaW5rcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtZHJpbmtzJyk7XG4gIGRyaW5rcy5pbm5lclRleHQgPSBcIkRyaW5rc1wiO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRyaW5rcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlTWVudSgpIHtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIG1lbnVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVBYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlSG9tZVBhZ2UoKTtcbiAgY3JlYXRlTWVudSgpO1xuICBjcmVhdGVBYm91dCgpO1xuICBjcmVhdGVDb250YWN0KCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5jcmVhdGVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9