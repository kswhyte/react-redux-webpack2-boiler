import * as types from '../constants/actionTypes';

//inital state is set inside the store/initialState.es6
export default (store = {}, action) => {
  switch (action.type) {
    case types.TOGGLE_HEADER:
        return Object.assign({}, store, { headerSize: action.headerSize });
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
    default:
        return store;
  }
};
