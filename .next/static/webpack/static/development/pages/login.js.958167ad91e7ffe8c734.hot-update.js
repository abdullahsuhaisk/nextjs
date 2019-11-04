webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./credentials/client.js":
/*!*******************************!*\
  !*** ./credentials/client.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  apiKey: "AIzaSyBscxgekJKPGOMV8320G9NM4vUVoALSAWA",
  authDomain: "clickableimage-f74a8.firebaseapp.com",
  databaseURL: "https://clickableimage-f74a8.firebaseio.com",
  projectId: "clickableimage-f74a8",
  storageBucket: "clickableimage-f74a8.appspot.com",
  messagingSenderId: "1013607966308",
  appId: "1:1013607966308:web:92b14b817897cbb02ca171",
  measurementId: "G-BDF4PB1EVC"
};

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../credentials/client */ "./credentials/client.js");
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_credentials_client__WEBPACK_IMPORTED_MODULE_15__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;







var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Index, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref) {
        var req, query, user, messages;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                user = req && req.session ? req.session.decodedToken : null; // don't fetch anything from firebase if the user is not found
                // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
                // const messages = snap && snap.val()

                messages = null;
                return _context.abrupt("return", {
                  user: user,
                  messages: messages
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index).call(this, props));
    _this.state = {
      user: _this.props.user,
      value: '',
      messages: _this.props.messages
    };
    _this.addDbListener = _this.addDbListener.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.removeDbListener = _this.removeDbListener.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.initializeApp(_credentials_client__WEBPACK_IMPORTED_MODULE_15___default.a);
      if (this.state.user) this.addDbListener();
      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          _this2.setState({
            user: user
          });

          return user.getIdToken().then(function (token) {
            // eslint-disable-next-line no-undef
            return fetch('/api/login', {
              method: 'POST',
              // eslint-disable-next-line no-undef
              headers: new Headers({
                'Content-Type': 'application/json'
              }),
              credentials: 'same-origin',
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                token: token
              })
            });
          }).then(function (res) {
            return _this2.addDbListener();
          });
        } else {
          _this2.setState({
            user: null
          }); // eslint-disable-next-line no-undef


          fetch('/api/logout', {
            method: 'POST',
            credentials: 'same-origin'
          }).then(function () {
            return _this2.removeDbListener();
          });
        }
      });
    }
  }, {
    key: "addDbListener",
    value: function addDbListener() {
      var _this3 = this;

      var db = firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.firestore();
      var unsubscribe = db.collection('messages').onSnapshot(function (querySnapshot) {
        var messages = {};
        querySnapshot.forEach(function (doc) {
          messages[doc.id] = doc.data();
        });
        if (messages) _this3.setState({
          messages: messages
        });
      }, function (error) {
        console.error(error);
      });
      this.setState({
        unsubscribe: unsubscribe
      });
    }
  }, {
    key: "removeDbListener",
    value: function removeDbListener() {
      // firebase.database().ref('messages').off()
      if (this.state.unsubscribe) {
        this.state.unsubscribe();
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var db = firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.firestore();
      var date = new Date().getTime();
      db.collection('messages').doc("".concat(date)).set({
        id: date,
        text: this.state.value
      });
      this.setState({
        value: ''
      });
    }
  }, {
    key: "handleLogin",
    value: function handleLogin() {
      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth().signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth.GoogleAuthProvider());
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.auth().signOut();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          user = _this$state.user,
          value = _this$state.value,
          messages = _this$state.messages;
      return __jsx("div", null, user ? __jsx("button", {
        onClick: this.handleLogout
      }, "Logout") : __jsx("button", {
        onClick: this.handleLogin
      }, "Login"), user && __jsx("div", null, __jsx("form", {
        onSubmit: this.handleSubmit
      }, __jsx("input", {
        type: 'text',
        onChange: this.handleChange,
        placeholder: 'add message...',
        value: value
      })), __jsx("ul", null, messages && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(messages).map(function (key) {
        return __jsx("li", {
          key: key
        }, messages[key].text);
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=login.js.958167ad91e7ffe8c734.hot-update.js.map