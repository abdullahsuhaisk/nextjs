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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/clock.js":
/*!*****************************!*\
  !*** ./components/clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  lastUpdate,
  light
}) => {
  return __jsx("div", {
    className: "jsx-805894256" + " " + ((light ? 'light' : '') || "")
  }, format(new Date(lastUpdate)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "805894256"
  }, "div.jsx-805894256{padding:15px;display:inline-block;color:#82fa58;font:50px menlo,monaco,monospace;background-color:#000;}.light.jsx-805894256{background-color:#999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcQ2xpY2tBYmxlSW1hZ2VcXHdpdGgtYW50LWRlc2lnblxcY29tcG9uZW50c1xcY2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSW9CLEFBRzBCLEFBT1MsYUFORCxTQU92QixZQU5nQixjQUNxQixpQ0FDYixzQkFDeEIiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxDbGlja0FibGVJbWFnZVxcd2l0aC1hbnQtZGVzaWduXFxjb21wb25lbnRzXFxjbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGxhc3RVcGRhdGUsIGxpZ2h0IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtsaWdodCA/ICdsaWdodCcgOiAnJ30+XHJcbiAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShsYXN0VXBkYXRlKSl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogIzgyZmE1ODtcclxuICAgICAgICAgICAgZm9udDogNTBweCBtZW5sbywgbW9uYWNvLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlnaHQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGZvcm1hdCA9IHQgPT5cclxuICAgIGAke3BhZCh0LmdldFVUQ0hvdXJzKCkpfToke3BhZCh0LmdldFVUQ01pbnV0ZXMoKSl9OiR7cGFkKHQuZ2V0VVRDU2Vjb25kcygpKX1gXHJcbiAgXHJcbiAgY29uc3QgcGFkID0gbiA9PiAobiA8IDEwID8gYDAke259YCA6IG4pIl19 */\n/*@ sourceURL=D:\\Projects\\ClickAbleImage\\with-ant-design\\components\\clock.js */"));
});

const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const pad = n => n < 10 ? `0${n}` : n;

/***/ }),

/***/ "./components/counter.js":
/*!*******************************!*\
  !*** ./components/counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const count = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.count);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx("div", null, __jsx("h1", null, "Count: ", __jsx("span", null, count)), __jsx("button", {
    onClick: () => dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_2__["incrementCount"])())
  }, "+1"), __jsx("button", {
    onClick: () => dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_2__["decrementCount"])())
  }, "-1"), __jsx("button", {
    onClick: () => dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_2__["resetCount"])())
  }, "Reset"));
});

/***/ }),

/***/ "./components/examples.js":
/*!********************************!*\
  !*** ./components/examples.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock */ "./components/clock.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter */ "./components/counter.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const lastUpdate = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.lastUpdate);
  const light = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.light);
  return __jsx("div", null, __jsx(_clock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lastUpdate: lastUpdate,
    light: light
  }), __jsx(_counter__WEBPACK_IMPORTED_MODULE_3__["default"], null));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./pages/clock.js":
/*!************************!*\
  !*** ./pages/clock.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _components_examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/examples */ "./components/examples.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Clock extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    reduxStore,
    req
  }) {
    console.log(!!req, reduxStore);
    const isServer = !!req;
    reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_2__["serverRenderClock"])(isServer));
    return {};
  }

  componentDidMount() {
    const {
      dispatch
    } = this.props;

    this.timer = () => Object(_store__WEBPACK_IMPORTED_MODULE_2__["startClock"])(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props);
    return __jsx(_components_examples__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(Clock));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, serverRenderClock, startClock, incrementCount, decrementCount, resetCount, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderClock", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCount", function() { return incrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCount", function() { return decrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCount", function() { return resetCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);





const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};
const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}; // REDUCERS

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case actionTypes.INCREMENT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        count: state.count + 1
      });

    case actionTypes.DECREMENT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        count: state.count - 1
      });

    case actionTypes.RESET:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        count: exampleInitialState.count
      });

    default:
      return state;
  }
}; // ACTIONS

const serverRenderClock = isServer => dispatch => {
  return dispatch({
    type: actionTypes.TICK,
    light: !isServer,
    ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  });
};
const startClock = dispatch => {
  return setInterval(() => {
    dispatch({
      type: actionTypes.TICK,
      light: true,
      ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
    });
  }, 1000);
};
const incrementCount = () => {
  return {
    type: actionTypes.INCREMENT
  };
};
const decrementCount = () => {
  return {
    type: actionTypes.DECREMENT
  };
};
const resetCount = () => {
  return {
    type: actionTypes.RESET
  };
};
function initializeStore(initialState = exampleInitialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/clock.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\ClickAbleImage\with-ant-design\pages\clock.js */"./pages/clock.js");


/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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
//# sourceMappingURL=clock.js.map