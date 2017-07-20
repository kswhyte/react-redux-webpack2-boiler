import * as types from '../constants/actionTypes.es6';

//value is small or full
export function toggle_header(headerSize) {
  return {
    type: types.TOGGLE_HEADER,
    headerSize
  };
}
