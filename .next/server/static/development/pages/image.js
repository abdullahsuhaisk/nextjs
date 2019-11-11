module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/overlay/OverlayContainer.js":
/*!************************************************!*\
  !*** ./components/overlay/OverlayContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OverlayPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverlayPortal */ "./components/overlay/OverlayPortal.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const OverlayContainer = ({
  children
}) => {
  const {
    0: container,
    1: setcontainer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setcontainer(document && document.getElementsByClassName("image-service")[0]);
  }, []);
  console.log(container);

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

/***/ }),

/***/ "./components/overlay/OverlayPortal.js":
/*!*********************************************!*\
  !*** ./components/overlay/OverlayPortal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-element-queries/src/ResizeSensor */ "css-element-queries/src/ResizeSensor");
/* harmony import */ var css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable no-new */





const aspectRatio = 1.777;

const OverlayPortal = props => {
  const {
    container
  } = props;
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: layout,
    1: setLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const updateLayout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const containerWidth = 800;
    const containerHeight = 454;
    const containerAspectRatio = containerWidth / containerHeight;
    let rightLeftMargin = 0;
    let topBottomMargin = 0;

    if (containerAspectRatio >= aspectRatio) {
      const width = containerHeight * aspectRatio;
      rightLeftMargin = Math.round((containerWidth - width) / 2);
    } else {
      const height = containerWidth / aspectRatio;
      topBottomMargin = Math.round((containerHeight - height) / 2);
    }

    const alayout = {
      __typename: "Layout",
      width: containerWidth,
      height: containerHeight,
      safeArea: {
        __typename: "SafeArea",
        top: topBottomMargin,
        right: rightLeftMargin,
        bottom: topBottomMargin,
        left: rightLeftMargin
      }
    };
    setLayout(alayout);
    console.log(layout);
    console.log(alayout); // if (apolloClientRef.current) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateLayout();
    new css_element_queries_src_ResizeSensor__WEBPACK_IMPORTED_MODULE_3___default.a(containerRef.current, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["throttle"])(updateLayout, 100));
  }, []);
  const children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, (child, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      // PassToProps
      container,
      layout
    });
  });
  return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(__jsx("div", {
    ref: containerRef,
    className: "overlay-container",
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      pointerEvents: "auto"
    }
  }, children), container);
};

OverlayPortal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OverlayPortal);

/***/ }),

/***/ "./components/overlay/OverlayScreen.js":
/*!*********************************************!*\
  !*** ./components/overlay/OverlayScreen.js ***!
  \*********************************************/
/*! exports provided: OverlayScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayScreen", function() { return OverlayScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OverlayScreen = () => {
  console.log("Overlay Screen");
  return __jsx("div", {
    className: "overlay-screen",
    style: {
      position: "absolute",
      width: "100%",
      height: "100%"
    }
  }, __jsx("div", {
    style: {
      position: "relative",
      backgroundColor: "black"
    }
  }));
};

/***/ }),

/***/ "./pages/image.js":
/*!************************!*\
  !*** ./pages/image.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_overlay_OverlayContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/overlay/OverlayContainer */ "./components/overlay/OverlayContainer.js");
/* harmony import */ var _components_overlay_OverlayScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/overlay/OverlayScreen */ "./components/overlay/OverlayScreen.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Image = () => {
  return __jsx("div", {
    style: {
      width: "100%",
      height: "100%",
      overflow: "hidden"
    },
    className: "jsx-1816125377" + " " + "image-container"
  }, __jsx("img", {
    src: "/static/image.jpg",
    className: "jsx-1816125377" + " " + "image-service"
  }), __jsx(_components_overlay_OverlayContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_overlay_OverlayScreen__WEBPACK_IMPORTED_MODULE_3__["OverlayScreen"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1816125377"
  }, "div.jsx-1816125377{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcQ2xpY2tBYmxlSW1hZ2VcXHdpdGgtYW50LWRlc2lnblxccGFnZXNcXGltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCUyxBQUd3QixXQUNDLFlBQ0MsMEVBQ1UsbUdBQ3pCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcQ2xpY2tBYmxlSW1hZ2VcXHdpdGgtYW50LWRlc2lnblxccGFnZXNcXGltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgT3ZlcmxheUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9vdmVybGF5L092ZXJsYXlDb250YWluZXJcIjtcclxuaW1wb3J0IHsgT3ZlcmxheVNjcmVlbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL292ZXJsYXkvT3ZlcmxheVNjcmVlblwiO1xyXG5cclxuY29uc3QgSW1hZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCJcclxuICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fVxyXG4gICAgPlxyXG4gICAgICB7XHJcbiAgICAgICAgLy9UT0RPOiBTcGlubmVyIHdpbGwgY29tZSBoZXJlXHJcbiAgICAgIH1cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZS1zZXJ2aWNlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZS5qcGdcIj48L2ltZz5cclxuICAgICAgPE92ZXJsYXlDb250YWluZXI+XHJcbiAgICAgICAgPE92ZXJsYXlTY3JlZW4gLz5cclxuICAgICAgPC9PdmVybGF5Q29udGFpbmVyPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iXX0= */\n/*@ sourceURL=D:\\Projects\\ClickAbleImage\\with-ant-design\\pages\\image.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/image.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\ClickAbleImage\with-ant-design\pages\image.js */"./pages/image.js");


/***/ }),

/***/ "css-element-queries/src/ResizeSensor":
/*!*******************************************************!*\
  !*** external "css-element-queries/src/ResizeSensor" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("css-element-queries/src/ResizeSensor");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=image.js.map