import * as type from '../constants/actionTypes';


export default (state={}, action) => {

  switch(action.type){

    case type.TOGGLE_HEADER:
      console.log('TOGGLE HEADER IN REDUCER', action.headerSize);
      const newState = Object.assign({}, state, {headerSize: action.headerSize});
      return newState;
      break;

    default:
      return state;
      break;
  }
}
