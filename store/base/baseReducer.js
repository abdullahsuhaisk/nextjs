import { combineReducers } from "redux";
import { ActionTypes } from "./baseActions";

const csInitialState = {};

const initialUserState = {};

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case ActionTypes.ASYNC_OP_END: {
      const [profile] =
        action.payload.entityType === "userProfile"
          ? [action.payload.profile]
          : [state];
      return {
        ...state,
        ...profile
      };
    }
    case ActionTypes.SET_USER_ID: {
      return initialUserState;
    }
    case ActionTypes.RESET_USERS: {
      return initialUserState;
    }
    default:
      return state;
  }
}

const initialState = {
  status: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ASYNC_OP_START:
      return {
        ...state,
        status: "processing"
      };
    case ActionTypes.ASYNC_OP_END:
      return {
        ...state,
        status: action.payload.status
      };

    case ActionTypes.ASYNC_OP_RESET_STATUS:
      return {
        ...state,
        status: ""
      };
    default:
      return state;
  }
}

const modalInfoTypeReducer = (
  state = { modalType: null, modalSection: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MODAL:
      return state.modalType
        ? { modalType: null, modalSection: null }
        : action.payload || { modalType: null, modalSection: null };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  asynOperation: reducer,
  modalInfo: modalInfoTypeReducer
});
