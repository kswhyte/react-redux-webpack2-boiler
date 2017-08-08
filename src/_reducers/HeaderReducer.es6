import * as types from '../constants/actionTypes';

const headerReducer = (store = {}, action) => {
  switch (action.type) {
    case types.TOGGLE_HEADER:
      return Object.assign({}, store, { headerSize: action.headerSize });
    default:
      return store;
  }
};

export default headerReducer;
