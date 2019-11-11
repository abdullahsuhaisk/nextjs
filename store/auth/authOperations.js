// import { connect } from 'react-redux';
import { Actions } from "./authActions";
import { setHttpHeader } from "../../../utils/http";
// import { CompanyServices } from '../../services-importer';
// import { setShowWizard } from '../wizard/wizardOperations';

export const login = credetentials => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(
          credetentials.email,
          credetentials.password
        );
      // When we logged in, we must send an event to service.
      const AUTH_TOKEN = res.user.ra;
      setHttpHeader("Authorization", `Bearer ${AUTH_TOKEN}`);
      dispatch(Actions.resetError());
      dispatch(Actions.loginSuccess());
    } catch (error) {
      dispatch(Actions.loginError(error.code));
    }
  };
};

export const createUserWithEmailAndPasswordFirebase = credentials => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
      await response.user.updateProfile({
        displayName: credentials.name
      });
    } catch (error) {
      dispatch(Actions.userRegistrationFail(error.code));
    }
  };
};

export const loginWithGoogle = async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  firebase.auth().useDeviceLanguage();
  try {
    const res = await firebase.auth().signInWithPopup(provider);
    const AUTH_TOKEN = res.user.ra;
    // console.log(res);
    setHttpHeader("Authorization", `Bearer ${AUTH_TOKEN}`);
  } catch (error) {
    dispatch(Actions.loginError(error.code));
  }
};

export const facebookLogin = async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("user_birthday");
  // firebase.auth().languageCode = 'fr_FR';
  firebase.auth().useDeviceLanguage();
  provider.setCustomParameters({ display: "popup" });
  try {
    const res = await firebase.auth().signInWithPopup(provider);
    const AUTH_TOKEN = res.user.ra;
    setHttpHeader("Authorization", `Bearer ${AUTH_TOKEN}`);
  } catch (error) {
    dispatch(Actions.loginError(error.code));
  }
};

export const signout = async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    dispatch(Actions.signoutSuccess());
  } catch (error) {
    dispatch(Actions.signoutError(error.code));
  }
};
