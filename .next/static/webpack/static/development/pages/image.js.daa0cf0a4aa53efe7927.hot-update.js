webpackHotUpdate("static\\development\\pages\\image.js",{

/***/ "./components/overlay/OverlayContainer.js":
/*!************************************************!*\
  !*** ./components/overlay/OverlayContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OverlayPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverlayPortal */ "./components/overlay/OverlayPortal.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var OverlayContainer = function OverlayContainer(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      container = _useState[0],
      setcontainer = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setcontainer(document && document.getElementsByClassName("image-service")[0]);
  }, []);

  if (container) {
    return __jsx(_OverlayPortal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      container: container
    }, children);
  }

  return null;
};

OverlayContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OverlayContainer);

/***/ })

})
//# sourceMappingURL=image.js.daa0cf0a4aa53efe7927.hot-update.js.map