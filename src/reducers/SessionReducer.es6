import * as types from '../constants/actionTypes';

const defaultState = {
    showSpinner: false,
    startError: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.TOGGLE_HEADER:
        return Object.assign({}, state, { headerSize: action.headerSize });
    case types.START_SPINNER:
        return Object.assign({}, state, { showSpinner: true });
    case types.STOP_SPINNER:
        return Object.assign({}, state, { showSpinner: false });
    case types.START_FAIL:
        return Object.assign({}, state, { startError: 'ERROR' });
    case types.START_TIMEOUT:
        return Object.assign({}, state, { startError: 'TIMEOUT' });
    case types.START_SUCCESS:
        return Object.assign({}, state, { startError: null });
    case types.START_SESSION:
        return Object.assign({}, state, { startError: null });
    default:
        return state;
  }
};
