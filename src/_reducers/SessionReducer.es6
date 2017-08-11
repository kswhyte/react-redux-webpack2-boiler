import * as types from '../constants/actionTypes';

//inital state is set inside the store/initialState.es6
const sessionReducer = (store = {}, action) => {
  switch (action.type) {
    case types.START_SPINNER:
      return Object.assign({}, store, { showSpinner: true });
    case types.STOP_SPINNER:
      return Object.assign({}, store, { showSpinner: false });
    case types.START_FAIL:
      return Object.assign({}, store, { startError: 'ERROR' });
    case types.START_TIMEOUT:
      return Object.assign({}, store, { startError: 'TIMEOUT' });
    case types.START_SUCCESS:
      return Object.assign({}, store, { startError: null, sessionStarted: true });
    case types.START_SESSION:
      return Object.assign({}, store, { startError: null });
    case types.START_LOGIN:
      return Object.assign({}, store, { loginError: null, validationMessage: '' });
    case types.LOGIN_FAIL:
      return Object.assign({}, store, { loginError: 'ERROR', validationMessage: action.validationMessage });
    case types.VALIDATION_ERROR:
      return Object.assign({}, store, { validationMessage: action.data });
    case types.LOGIN_SUCCESS: {
      let newStore = Object.assign({}, store);
      newStore.user.credentials = action.data;
      newStore.user.isActive = true;
      return Object.assign({}, store, newStore);
    }
    case types.LOGOUT_SUCCESS: {
      let newStore = Object.assign({}, store);
      let user = { isActive: false, credentials: {} };
      newStore.user = user;
      newStore.sessionStarted = false;
      return Object.assign({}, store, newStore);
    }
    case types.SHOW_MODAL: {
      return Object.assign({}, store, { currentModal: action.modal });
    }
    case types.HIDE_MODAL: {
      return Object.assign({}, store, { currentModal: null });
    }
    case types.RESET_PASSWORD: {
      return Object.assign({}, store, { email: action.message });
    }
    case types.RESETPASSWORD_START: {
      return store;
    }
    case types.RESETPASSWORD_SUCCESS: {
      return Object.assign({}, store, { message: action.data.message });
    }
    case types.CHANGEPASSWORD_START : {
      return store;
    }
    case types.CHANGEPASSWORD_SUCCESS: {
      return Object.assign({}, store, {message: action.data.message});
    }
    case types.CHANGEPASSWORD_FAIL: {
      return Object.assign({}, store, {validationMessage: action.data.message});
    }
    case types.PASSWORD_MISMATCH: {
      return Object.assign({}, store, {passwordMismatch: true});
    }
    case types.PASSWORD_MATCH: {
      return Object.assign({}, store, {passwordMismatch: false});
    }
    default:
      return store;
  }
};

export default sessionReducer;
