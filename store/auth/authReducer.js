import {
  REGISTER_FAIL,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS,
  RESET_ERRORS
} from "./authActions";
/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCES";
export const LOGIN_ERROR = "LOGIN_ERROR";

const loginInitialState = {
  error: null,
  loginStatus: null,
  hasError: null,
  errorMessage: null
};

const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case REGISTER_FAIL:
    case SIGNOUT_ERROR: {
      return { ...state, error: action.payload };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        loginStatus: "error",
        hasError: true,
        errorMessage: action.payload,
        error: action.payload
      };
    }
    case LOGIN_SUCCESS: {
      return {
        loginStatus: "loggedIn",
        hasError: false,
        errorMessage: null,
        error: null
      };
    }
    case RESET_ERRORS:
    case SIGNOUT_SUCCESS: {
      const payload = action.payload || {};
      return { ...loginInitialState, ...payload };
    }
    default:
      return state;
  }
};

export default loginReducer;
