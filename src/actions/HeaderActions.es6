import * as types from '../constants/actionTypes';

const actions = {
  toggleHeader: headerSize => ({
    type: types.TOGGLE_HEADER,
    headerSize
  })
};

export default {
  ...actions
};
