webpackHotUpdate("static\\development\\pages\\image.js",{

/***/ "./components/overlay/OverlayPortal.js":
/*!*********************************************!*\
  !*** ./components/overlay/OverlayPortal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-element-queries/src/ResizeSensor */ "./node_modules/css-element-queries/src/ResizeSensor.js");
/* harmony import */ var css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable no-new */





var aspectRatio = 1.777;

var OverlayPortal = function OverlayPortal(_ref) {
  var children = _ref.children,
      container = _ref.container;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var updateLayout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var containerWidth = 800;
    var containerHeight = 454;
    var containerAspectRatio = containerWidth / containerHeight;
    var rightLeftMargin = 0;
    var topBottomMargin = 0;

    if (containerAspectRatio >= aspectRatio) {
      var width = containerHeight * aspectRatio;
      rightLeftMargin = Math.round((containerWidth - width) / 2);
    } else {
      var height = containerWidth / aspectRatio;
      topBottomMargin = Math.round((containerHeight - height) / 2);
    } // if (apolloClientRef.current) {
    //   const data = {
    //     layout: {
    //       __typename: "Layout",
    //       width: containerWidth,
    //       height: containerHeight,
    //       safeArea: {
    //         __typename: "SafeArea",
    //         top: topBottomMargin,
    //         right: rightLeftMargin,
    //         bottom: topBottomMargin,
    //         left: rightLeftMargin
    //       }
    //     }
    //   };
    //   apolloClientRef.current.writeData({ data });
    // }

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    updateLayout();
    new css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_3___default.a(containerRef.current, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["throttle"])(updateLayout, 100));
  }, []);
  return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(__jsx("div", {
    ref: containerRef,
    className: "overlay-container",
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      pointerEvents: "none"
    }
  }, children), container);
};

OverlayPortal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OverlayPortal);

/***/ })

})
//# sourceMappingURL=image.js.87087a2bc30f6c6b5d43.hot-update.js.map