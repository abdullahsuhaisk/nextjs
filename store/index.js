/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import {
  getFirebase,
  reactReduxFirebase,
  firebaseReducer
} from "react-redux-firebase";
import axios, { configureAxios } from "../../common/axios";

// App reducers

import loginInfoReducer from "./auth/authReducer";
import base from "./base/baseReducer";
import firebaseConfig from "../../common/firebase";
import companyReducer from "./company/companyReducer";
import brandReducer from "./brand/brandReducer";
import productReducer from "./product/productReducer";
import videoReducer from "./video/videoReducer";
import campaignReducer from "./campaign/campaignReducer";
import prodLinkReducer from "./prodLink/prodLinkReducer";
import listViewReducer from "./listView/listViewReducer";
import approvalReducer from "./approval/approvalReducer";
import wizardReducer from "./wizard/wizardReducer";
import editorReducer from "./editor/editorReducer";

// App middleware
import appMiddleware from "./middlewares/appMiddleware";

// DONE: @lamine -> eslint config
// @ts-ignore

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    loginInfo: loginInfoReducer,
    base,
    firebase: firebaseReducer,
    companies: companyReducer,
    brands: brandReducer,
    products: productReducer,
    videos: videoReducer,
    campaigns: campaignReducer,
    prodLinks: prodLinkReducer,
    listView: listViewReducer,
    approval: approvalReducer,
    wizard: wizardReducer,
    editor: editorReducer
  }),
  composeEnhancers(
    reactReduxFirebase(firebaseConfig, { attachAuthIsReady: true }),
    applyMiddleware(
      reduxThunk.withExtraArgument({ getFirebase }),
      appMiddleware
    )
    // redux binding for firebase
  )
);
configureAxios(axios, store);
export default store;
