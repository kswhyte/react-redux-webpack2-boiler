import * as types from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.TOGGLE_HEADER:
      return Object.assign({}, state, { headerSize: action.headerSize });

    default:
      return state;
  }
};
