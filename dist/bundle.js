/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* https://piccalil.li/blog/a-modern-css-reset */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  /* border: 1px solid red; */
}

/* font size */

html {
  font-size: 10px;
}

/* Remove default margin padding */
* {
  padding: 0;
  margin: 0;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Inter', sans-serif;
  position: relative;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,gDAAgD;;AAIhD,qBAAqB;AACrB;;;EAGE,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA,cAAc;;AAEd;EACE,eAAe;AACjB;;AAEA,kCAAkC;AAClC;EACE,UAAU;EACV,SAAS;AACX;AACA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;EAChB,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["/* https://piccalil.li/blog/a-modern-css-reset */\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');\r\n\r\n/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n/* font size */\r\n\r\nhtml {\r\n  font-size: 10px;\r\n}\r\n\r\n/* Remove default margin padding */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\n\r\n/* Set core root defaults */\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n  font-family: 'Inter', sans-serif;\r\n  position: relative;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n    scroll-behavior: auto;\r\n  }\r\n\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.logo {
  width: 10rem;
  height: 10rem;
}

header {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 5rem;
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
}

.nav-link {
  color: #000;
  text-decoration: none;
  font-weight: 500;
}

svg {
  width: 20px;
  height: 15px;
}

footer {
  border-top: 0.3rem solid #000;
  height: 5rem;
  font-size: 1.4rem;
}

.footer-text {
  width: 80%;
  margin: 0 auto;
  padding-top: 1rem;
  color: #000;
  font-weight: 500;
}

.nav_link img {
  width: 70px;
  height: 50px;
  border-radius: 45%;
  margin: 10px;
}

#imgg img {
  width: 110px;
  height: 95px;
}

.interactive-btns {
  display: flex;
  flex-direction: column;
}

.nav_link ul {
  display: flex;
  list-style: none;
  gap: 20px;
  margin-left: 700px;
}

.section {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  padding-bottom: 18rem;
}

.body_sec {
  display: flex;
}

.body_sec2 {
  display: flex;
  margin-top: 70px;
  justify-content: center;
}

.meal-item {
  display: flex;
  flex-direction: column;
  width: 18rem;
  gap: 1.2rem;
}

.meal-item-img {
  width: 100%;
}

.meal-item-title {
  font-size: 1.4rem;
}

.meal-item-like-btn {
  width: 2.4rem;

  /* comment popup */

  .comment-popup {
    top: 0;
    bottom: 0;
    left: 2rem;
    right: 0;
    z-index: 100;
    background-color: #fff;
    display: block;
    width: 90%;
    height: min-content;
    position: absolute;
    border: 0.5rem solid #000;
    text-align: center;
  }

  .comment-popup-img {
    margin: 3.2rem auto;
    clear: both;
    width: 30rem;
    height: 24rem;
  }

  .comment-popup-title {
    text-align: center;
  }

  .comment-popup-exit-btn {
    width: 4.2rem;
    height: 4.2rem;
    float: right;
    margin-top: 2rem;
    margin-right: 2rem;
  }

  .comment-popup-meal-details-list {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  }

  .popup-comment-section {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .popup-comments-item {
    font-size: 1.3rem;
    font-weight: 500;
  }

  /* comment popup form */

  .popup-comment-submit-form {
    width: 60%;
    padding: 2.5rem;
    margin: 0 auto;
  }

  .comment-input {
    margin-top: 3rem;
    display: block;
    margin-bottom: 2rem;
    border: 0.3rem solid #000;
    padding: 0.7rem;
  }

  .popup-comment-submit-form-insights {
    height: 5em;
  }

  .popup-comment-submit-form-comment-btn {
    display: block;
    padding: 0.8rem 1.2rem;
    margin-left: 0;
    border: 0.3rem solid #000;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #fff;
  }

  @media (min-width: 764px) {
    .comment-popup {
      left: 20rem;
      width: 70%;
    }

    .comment-popup-img {
      width: 40rem;
      height: 30rem;
    }

    .comment-popup-exit-btn {
      margin-top: 4rem;
      margin-right: 5rem;
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,iBAAiB;EACjB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,eAAe;EACf,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;;EAEb,kBAAkB;;EAElB;IACE,MAAM;IACN,SAAS;IACT,UAAU;IACV,QAAQ;IACR,YAAY;IACZ,sBAAsB;IACtB,cAAc;IACd,UAAU;IACV,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;IACnB,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA,uBAAuB;;EAEvB;IACE,UAAU;IACV,eAAe;IACf,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,cAAc;IACd,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,cAAc;IACd,sBAAsB;IACtB,cAAc;IACd,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,sBAAsB;EACxB;;EAEA;IACE;MACE,WAAW;MACX,UAAU;IACZ;;IAEA;MACE,YAAY;MACZ,aAAa;IACf;;IAEA;MACE,gBAAgB;MAChB,kBAAkB;IACpB;EACF;AACF","sourcesContent":[".logo {\r\n  width: 10rem;\r\n  height: 10rem;\r\n}\r\n\r\nheader {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.4rem;\r\n  gap: 5rem;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2.4rem;\r\n}\r\n\r\n.nav-link {\r\n  color: #000;\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n}\r\n\r\nsvg {\r\n  width: 20px;\r\n  height: 15px;\r\n}\r\n\r\nfooter {\r\n  border-top: 0.3rem solid #000;\r\n  height: 5rem;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.footer-text {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  padding-top: 1rem;\r\n  color: #000;\r\n  font-weight: 500;\r\n}\r\n\r\n.nav_link img {\r\n  width: 70px;\r\n  height: 50px;\r\n  border-radius: 45%;\r\n  margin: 10px;\r\n}\r\n\r\n#imgg img {\r\n  width: 110px;\r\n  height: 95px;\r\n}\r\n\r\n.interactive-btns {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.nav_link ul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 20px;\r\n  margin-left: 700px;\r\n}\r\n\r\n.section {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2.4rem;\r\n  padding-bottom: 18rem;\r\n}\r\n\r\n.body_sec {\r\n  display: flex;\r\n}\r\n\r\n.body_sec2 {\r\n  display: flex;\r\n  margin-top: 70px;\r\n  justify-content: center;\r\n}\r\n\r\n.meal-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 18rem;\r\n  gap: 1.2rem;\r\n}\r\n\r\n.meal-item-img {\r\n  width: 100%;\r\n}\r\n\r\n.meal-item-title {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.meal-item-like-btn {\r\n  width: 2.4rem;\r\n\r\n  /* comment popup */\r\n\r\n  .comment-popup {\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 2rem;\r\n    right: 0;\r\n    z-index: 100;\r\n    background-color: #fff;\r\n    display: block;\r\n    width: 90%;\r\n    height: min-content;\r\n    position: absolute;\r\n    border: 0.5rem solid #000;\r\n    text-align: center;\r\n  }\r\n\r\n  .comment-popup-img {\r\n    margin: 3.2rem auto;\r\n    clear: both;\r\n    width: 30rem;\r\n    height: 24rem;\r\n  }\r\n\r\n  .comment-popup-title {\r\n    text-align: center;\r\n  }\r\n\r\n  .comment-popup-exit-btn {\r\n    width: 4.2rem;\r\n    height: 4.2rem;\r\n    float: right;\r\n    margin-top: 2rem;\r\n    margin-right: 2rem;\r\n  }\r\n\r\n  .comment-popup-meal-details-list {\r\n    font-size: 1.5rem;\r\n    font-weight: 400;\r\n    text-align: center;\r\n  }\r\n\r\n  .popup-comment-section {\r\n    padding-top: 2.5rem;\r\n    padding-bottom: 2.5rem;\r\n  }\r\n\r\n  .popup-comments-item {\r\n    font-size: 1.3rem;\r\n    font-weight: 500;\r\n  }\r\n\r\n  /* comment popup form */\r\n\r\n  .popup-comment-submit-form {\r\n    width: 60%;\r\n    padding: 2.5rem;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .comment-input {\r\n    margin-top: 3rem;\r\n    display: block;\r\n    margin-bottom: 2rem;\r\n    border: 0.3rem solid #000;\r\n    padding: 0.7rem;\r\n  }\r\n\r\n  .popup-comment-submit-form-insights {\r\n    height: 5em;\r\n  }\r\n\r\n  .popup-comment-submit-form-comment-btn {\r\n    display: block;\r\n    padding: 0.8rem 1.2rem;\r\n    margin-left: 0;\r\n    border: 0.3rem solid #000;\r\n    font-size: 1.2rem;\r\n    font-weight: 500;\r\n    background-color: #fff;\r\n  }\r\n\r\n  @media (min-width: 764px) {\r\n    .comment-popup {\r\n      left: 20rem;\r\n      width: 70%;\r\n    }\r\n\r\n    .comment-popup-img {\r\n      width: 40rem;\r\n      height: 30rem;\r\n    }\r\n\r\n    .comment-popup-exit-btn {\r\n      margin-top: 4rem;\r\n      margin-right: 5rem;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/modules/Involvement.js":
/*!************************************!*\
  !*** ./src/modules/Involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Involvement {
  #APP_ID;

  #BASE_URL;

  constructor() {
    this.#APP_ID = 'EI6t8oJ571YKMWTnlNDB';
    this.#BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${
      this.#APP_ID
    }/`;
  }

  async getComments(mealId) {
    try {
      const res = await fetch(`${this.#BASE_URL}comments?item_id=${mealId}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error('errror in retriving comments!');
      }
      return data;
    } catch (error) {
      return [];
    }
  }

  async setComment(mealId, userName, comment) {
    try {
      const res = await fetch(`${this.#BASE_URL}comments`, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        method: 'POST',
        body: JSON.stringify({
          item_id: mealId,
          username: userName,
          comment,
        }),
      });
      if (res.ok) {
        return {
          success: true,
          message: 'Comment Saved Successfully',
        };
      }
      return {
        success: false,
        message: 'Error Saving Comment',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error Saving Comment',
      };
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Involvement);


/***/ }),

/***/ "./src/modules/comments/commentListExtracter.js":
/*!******************************************************!*\
  !*** ./src/modules/comments/commentListExtracter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentListExtracter = async (mealId, involvement) => {
  const commentSectionTitle = document.createElement('h1');
  const commentDetailsList = document.createElement('ul');

  commentDetailsList.classList.add('popup-comment-details-list');
  commentSectionTitle.setAttribute('data-comment-section-id', mealId);
  commentDetailsList.setAttribute('data-comment-section-id', mealId);

  const commentsData = await involvement.getComments(mealId);

  commentSectionTitle.innerText = `Comments(${commentsData.length})`;

  commentsData.forEach((element) => {
    const listItem = document.createElement('p');
    listItem.classList.add('popup-comments-item');
    listItem.innerText = `${element.creation_date} ${element.username} : ${element.comment}`;
    commentDetailsList.appendChild(listItem);
  });
  return [commentSectionTitle, commentDetailsList];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentListExtracter);


/***/ }),

/***/ "./src/modules/comments/comments.js":
/*!******************************************!*\
  !*** ./src/modules/comments/comments.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_exit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/exit.svg */ "./src/assets/exit.svg");
/* harmony import */ var _commentListExtracter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentListExtracter.js */ "./src/modules/comments/commentListExtracter.js");
/* harmony import */ var _createComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createComment.js */ "./src/modules/comments/createComment.js");




const createCommentsEl = async (meal, involvement) => {
  const commentSectionEl = document.createElement('div');

  commentSectionEl.classList.add('popup-comment-section');

  commentSectionEl.setAttribute('data-comment-section-id', meal.idMeal);

  const commentTitleAndList = await (0,_commentListExtracter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
    meal.idMeal,
    involvement,
  );

  commentSectionEl.appendChild(commentTitleAndList[0]);
  commentSectionEl.appendChild(commentTitleAndList[1]);

  return commentSectionEl;
};

const createMealDetailsListEl = (meal) => {
  const mealDetailsList = document.createElement('ul');
  const mealCategoryEl = document.createElement('li');
  const mealRegionEl = document.createElement('li');
  const mealTag = document.createElement('li');

  mealDetailsList.classList.add('comment-popup-meal-details-list');

  mealCategoryEl.innerText = `Meal Category : ${meal.strCategory}`;
  mealRegionEl.innerText = `Meal Region : ${meal.strArea}`;
  mealTag.innerText = `Meal Tags : ${meal.strTags}`;

  mealDetailsList.appendChild(mealCategoryEl);
  mealDetailsList.appendChild(mealRegionEl);
  mealDetailsList.appendChild(mealTag);

  return mealDetailsList;
};
const renderCommentPopUp = async (meal, involvement) => {
  const popUpEl = document.createElement('div');
  const mealImage = document.createElement('img');
  const mealTitle = document.createElement('h1');
  const exitBtnEl = document.createElement('img');

  mealImage.src = new URL(meal.strMealThumb);
  exitBtnEl.src = _assets_exit_svg__WEBPACK_IMPORTED_MODULE_0__;

  exitBtnEl.addEventListener('click', async (e) => {
    e.target.parentNode.remove();
  });

  mealTitle.innerText = meal.strMeal;

  popUpEl.setAttribute('data-mealID', meal.idMeal);
  mealImage.setAttribute('data-mealID', meal.idMeal);
  mealTitle.setAttribute('data-mealID', meal.idMeal);

  popUpEl.classList.add('comment-popup');
  mealImage.classList.add('comment-popup-img');
  mealTitle.classList.add('comment-popup-title');
  exitBtnEl.classList.add('comment-popup-exit-btn');

  popUpEl.appendChild(exitBtnEl);
  popUpEl.appendChild(mealImage);
  popUpEl.appendChild(mealTitle);

  popUpEl.appendChild(createMealDetailsListEl(meal));
  popUpEl.appendChild(await createCommentsEl(meal, involvement));
  popUpEl.appendChild((0,_createComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(meal));

  document.body.appendChild(popUpEl);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCommentPopUp);


/***/ }),

/***/ "./src/modules/comments/createComment.js":
/*!***********************************************!*\
  !*** ./src/modules/comments/createComment.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createNewComment = (meal) => {
  const createCommentSection = document.createElement('form');
  const createCommentFormTitle = document.createElement('h1');
  const commentUserNameEl = document.createElement('input');
  const commentUserInsightsEl = document.createElement('textarea');
  const commentBtnEl = document.createElement('button');

  createCommentSection.classList.add('popup-comment-submit-form');
  createCommentFormTitle.classList.add('popup-comment-submit-form-title');
  commentUserNameEl.classList.add(
    'popup-comment-submit-form-user-name',
    'comment-input',
  );
  commentUserInsightsEl.classList.add(
    'popup-comment-submit-form-insights',
    'comment-input',
  );
  commentBtnEl.classList.add('popup-comment-submit-form-comment-btn');

  createCommentSection.setAttribute('data-mealID', meal.idMeal);
  createCommentFormTitle.setAttribute('data-mealID', meal.idMeal);
  commentUserNameEl.setAttribute('data-mealID', meal.idMeal);
  commentUserInsightsEl.setAttribute('data-mealID', meal.idMeal);
  commentBtnEl.setAttribute('data-mealID', meal.idMeal);

  createCommentFormTitle.innerText = 'Add a comment';
  commentUserNameEl.placeholder = 'Your name';
  commentUserInsightsEl.placeholder = 'Your insights';
  commentBtnEl.innerText = 'Comment';

  commentUserNameEl.name = 'userName';
  commentUserInsightsEl.name = 'insightEl';

  commentUserNameEl.id = `commentUserNameField${meal.idMeal}`;
  commentUserInsightsEl.id = `commentUserInsights${meal.idMeal}`;
  commentBtnEl.type = 'submit';

  createCommentSection.appendChild(createCommentFormTitle);
  createCommentSection.appendChild(commentUserNameEl);
  createCommentSection.appendChild(commentUserInsightsEl);
  createCommentSection.appendChild(commentBtnEl);

  return createCommentSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewComment);


/***/ }),

/***/ "./src/modules/comments/initComments.js":
/*!**********************************************!*\
  !*** ./src/modules/comments/initComments.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mealDB_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mealDB.js */ "./src/modules/mealDB.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments/comments.js");



const initCommentPopUp = (id, involvement) => {
  const mealContainer = document.querySelector('.section');
  mealContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('comment-btn')) {
      const mealDb = new _mealDB_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      const meal = await mealDb.lookUpMeal(id);
      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(meal, involvement);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCommentPopUp);


/***/ }),

/***/ "./src/modules/comments/initCreateComment.js":
/*!***************************************************!*\
  !*** ./src/modules/comments/initCreateComment.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentListExtracter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentListExtracter.js */ "./src/modules/comments/commentListExtracter.js");


const initCreateComment = (involvement) => {
  document.body.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('popup-comment-submit-form-comment-btn')) {
      const form = document.querySelector('.popup-comment-submit-form');
      const formData = new FormData(form);
      const formProps = Object.fromEntries(formData);
      if (formProps.userName === '' || formProps.insightEl === '') {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = 'Please Provide Valid UserName and Comment';
        form.prepend(errorMessage);
      }
      const res = await involvement.setComment(
        e.target.dataset.mealid,
        formProps.userName,
        formProps.insightEl,
      );
      if (res.success) {
        const commentSectionEl = document.querySelector(
          '.popup-comment-section',
        );
        const commentListData = await (0,_commentListExtracter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
          e.target.dataset.mealid,
          involvement,
        );
        commentSectionEl.innerHTML = '';
        commentSectionEl.appendChild(commentListData[0]);
        commentSectionEl.appendChild(commentListData[1]);
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCreateComment);


/***/ }),

/***/ "./src/modules/displayMeals.js":
/*!*************************************!*\
  !*** ./src/modules/displayMeals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _meal_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal_list.js */ "./src/modules/meal_list.js");
/* harmony import */ var _assets_heart_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/heart.svg */ "./src/assets/heart.svg");



async function displayMeals() {
  const meals = await (0,_meal_list_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const mainSection = document.querySelector('.section');

  meals.forEach((meal) => {
    const mealElement = document.createElement('div');
    const imgEl = document.createElement('img');
    const mealTitleEl = document.createElement('h1');
    const likeBtn = document.createElement('img');
    const likeCounter = document.createElement('p');

    const commentBtn = document.createElement('button');
    const reservationBtn = document.createElement('button');

    mealElement.setAttribute('data-mealID', meal.idMeal);
    imgEl.setAttribute('data-mealID', meal.idMeal);
    mealTitleEl.setAttribute('data-mealID', meal.idMeal);
    likeBtn.setAttribute('data-mealID', meal.idMeal);
    likeCounter.setAttribute('data-mealID', meal.idMeal);
    commentBtn.setAttribute('data-mealID', meal.idMeal);
    reservationBtn.setAttribute('data-mealID', meal.idMeal);

    imgEl.src = new URL(meal.strMealThumb);
    mealTitleEl.innerText = meal.strMeal;
    likeBtn.src = _assets_heart_svg__WEBPACK_IMPORTED_MODULE_1__;
    commentBtn.innerText = 'Comments';
    reservationBtn.innerText = 'Reservations';

    mealElement.classList.add('meal-item');
    imgEl.classList.add('meal-item-img');
    mealTitleEl.classList.add('meal-item-title');
    likeBtn.classList.add('meal-item-like-btn');
    commentBtn.classList.add('meal-item-comment-btn');
    reservationBtn.classList.add('meal-item-reservation-btn');

    mealElement.appendChild(imgEl);
    mealElement.appendChild(mealTitleEl);
    mealElement.appendChild(likeBtn);
    mealElement.appendChild(likeCounter);
    mealElement.appendChild(commentBtn);
    mealElement.appendChild(reservationBtn);

    mainSection.appendChild(mealElement);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeals);


/***/ }),

/***/ "./src/modules/mealDB.js":
/*!*******************************!*\
  !*** ./src/modules/mealDB.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MealDb {
  #URL;

  #LOOKUP;

  constructor() {
    this.#URL = 'https://www.themealdb.com/api/json/v1/1/';
    this.#LOOKUP = 'lookup.php?i=';
  }

  async lookUpMeal(id) {
    try {
      const res = await fetch(`${this.#URL}${this.#LOOKUP}${id}`, {
        method: 'GET',
      });
      const data = await res.json();
      return data.meals[0];
    } catch (error) {
      throw new Error(error);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MealDb);


/***/ }),

/***/ "./src/modules/meal_list.js":
/*!**********************************!*\
  !*** ./src/modules/meal_list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=p';

async function fetchMealsFromApi() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP Response Status: ${response.status}`);
    }
    const result = await response.json();
    return result.meals; // Return the array of meals
  } catch (error) {
    return []; // Return an empty array if there's an error
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMealsFromApi);


/***/ }),

/***/ "./src/assets/exit.svg":
/*!*****************************!*\
  !*** ./src/assets/exit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "exit.svg";

/***/ }),

/***/ "./src/assets/heart.svg":
/*!******************************!*\
  !*** ./src/assets/heart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "heart.svg";

/***/ }),

/***/ "./src/assets/meal_logo.jpg":
/*!**********************************!*\
  !*** ./src/assets/meal_logo.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "meal_logo.jpg";

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
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _assets_meal_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/meal_logo.jpg */ "./src/assets/meal_logo.jpg");
/* harmony import */ var _modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/displayMeals.js */ "./src/modules/displayMeals.js");
/* harmony import */ var _modules_comments_initComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments/initComments.js */ "./src/modules/comments/initComments.js");
/* harmony import */ var _modules_comments_initCreateComment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/comments/initCreateComment.js */ "./src/modules/comments/initCreateComment.js");
/* harmony import */ var _modules_Involvement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Involvement.js */ "./src/modules/Involvement.js");








const involvement = new _modules_Involvement_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

(0,_modules_comments_initComments_js__WEBPACK_IMPORTED_MODULE_4__["default"])('52774', involvement);
(0,_modules_comments_initCreateComment_js__WEBPACK_IMPORTED_MODULE_5__["default"])(involvement);

(0,_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map