import * as types from '../constants/actionTypes';

const actions = {
  push: data => ({
    type: types.ROUTE_PUSH,
    data
  })
};

export default {
  ...actions
};
