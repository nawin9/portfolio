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
var _jsxFileName = "/Users/kyo/code/blog/pages/experiences.js";



var CenteredHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "experiences__CenteredHeader",
  componentId: "kibeeo-0"
})(["text-align:center;margin-bottom:1.25em;"]);
var ContainerRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "experiences__ContainerRow",
  componentId: "kibeeo-1"
})(["min-height:90px;h3{text-decoration:underline;}"]);
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "experiences__Grid",
  componentId: "kibeeo-2"
})(["width:80%;height:29.7cm;margin:0 auto;display:grid;grid-template-columns:1fr 3fr;grid-gap:10px;grid-auto-rows:minmax(50px,auto);"]);
var DetailColumn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "experiences__DetailColumn",
  componentId: "kibeeo-3"
})(["grid-row:1;grid-column:2;display:grid;text-align:left;"]);
var DateRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "experiences__DateRow",
  componentId: "kibeeo-4"
})(["display:grid;grid-template-columns:3fr 1fr;margin-top:10px;"]);
var BulletRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "experiences__BulletRow",
  componentId: "kibeeo-5"
})(["list-style-type:square;margin-left:18px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenteredHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Experiences"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, _data_info__WEBPACK_IMPORTED_MODULE_2__["default"].skills.map(function (s, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerRow, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, s.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, s.description));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, _data_info__WEBPACK_IMPORTED_MODULE_2__["default"].experiences.map(function (bodyItem, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index //  style={{ ...styles().body }}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, bodyItem.content.map(function (contentItem, j) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "bc".concat(index, "-").concat(j),
        style: {
          // ...styles().bodyContentHeaders,
          padding: 0,
          marginBottom: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          background: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, contentItem.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          background: 'blue',
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, contentItem.rightContent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, contentItem.bullets.map(function (bullet, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BulletRow, {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, bullet);
      })));
    }));
  })));
});

/***/ })

})
//# sourceMappingURL=experiences.js.03c9991942013c1ff7a5.hot-update.js.map