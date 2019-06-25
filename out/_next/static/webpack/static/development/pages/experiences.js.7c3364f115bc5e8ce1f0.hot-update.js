webpackHotUpdate("static/development/pages/experiences.js",{

/***/ "./pages/experiences.js":
/*!******************************!*\
  !*** ./pages/experiences.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/info */ "./data/info.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/kyo/code/blog/pages/experiences.js";




var device = _config__WEBPACK_IMPORTED_MODULE_3__["default"].device,
    color = _config__WEBPACK_IMPORTED_MODULE_3__["default"].color;
var CenteredHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "experiences__CenteredHeader",
  componentId: "kibeeo-0"
})(["text-align:center;margin-bottom:1.25em;"]); // const ContainerRow = styled.li`
//     min-height: 90px;
//     h3 {
//         text-decoration: underline;
//     }
// `;
// const Grid = styled.div`
//     width: 80%;
//     height: 29.7cm;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: 1fr 3fr;
//     grid-gap: 10px;
//     grid-auto-rows: minmax(50px, auto);
// `;

var DetailColumn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "experiences__DetailColumn",
  componentId: "kibeeo-1"
})(["grid-row:1;display:grid;text-align:left;"]);
var DateRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "experiences__DateRow",
  componentId: "kibeeo-2"
})(["display:grid;grid-template-columns:3fr 1fr;margin-top:10px;padding:10px;background:green;p{margin:0;font-family:'QuicksandBold';:nth-child(1){}:nth-child(2){text-align:right;}}@media ", "{grid-template-columns:1fr;grid-auto-rows:minmax(10px,auto);p{:nth-child(1){order:2;}:nth-child(2){order:1;}}}"], device.mobile);
var DetailRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "experiences__DetailRow",
  componentId: "kibeeo-3"
})(["margin-top:30px;box-shadow:rgb(136,136,136) 5px 5px 5px;"]);
var BulletRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "experiences__BulletRow",
  componentId: "kibeeo-4"
})(["list-style-type:square;margin-left:18px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenteredHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Experiences"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, _data_info__WEBPACK_IMPORTED_MODULE_2__["default"].experiences.map(function (exp, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailRow, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateRow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, exp.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, exp.rightContent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, exp.bullets.map(function (bullet, idx) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BulletRow, {
        key: idx,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, bullet);
    })));
  })));
});

/***/ })

})
//# sourceMappingURL=experiences.js.7c3364f115bc5e8ce1f0.hot-update.js.map