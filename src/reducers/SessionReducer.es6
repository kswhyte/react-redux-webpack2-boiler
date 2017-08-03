import * as types from '../constants/actionTypes';
import sStorage from '../../tools/sessionStorage_helper';

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
      return Object.assign({}, store, { startError: null });
    case types.START_SESSION:
      return Object.assign({}, store, { startError: null });
    case types.START_LOGIN:
      return Object.assign({}, store, { loginError: null, validationMessage: '' });
    case types.LOGIN_FAIL:
      return Object.assign({}, store, { loginError: 'ERROR', message: action });
    case types.VALIDATION_ERROR:
      return Object.assign({}, store, { validationMessage: action.data });
    case types.LOGIN_SUCCESS: {
      let newStore = Object.assign({}, store);
      newStore.user.credentials = action.data;
      newStore.user.isActive = true;
      sStorage.setItem({ key: 'user', value: JSON.stringify(action.data) });
      sStorage.setItem({ key: 'isUserLoggedIn', value: true });
      return Object.assign({}, store, newStore);
    }
    case types.LOGOUT_SUCCESS: {
      let newStore = Object.assign({}, store);
      let user = { isActive: false, credentials: {} };
      newStore.user = user;
      sStorage.removeItem({ key: 'user' });
      sStorage.removeItem({ key: 'isUserLoggedIn' });
      return Object.assign({}, store, newStore);
    }
    default:
      return store;
  }
};

export default sessionReducer;
