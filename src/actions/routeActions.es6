import * as types from '../constants/actionTypes';

const actions = {
  changeRoute: data => ({
    type: types.CHANGE_ROUTE,
    data
  })
};

export default {
  ...actions
};
