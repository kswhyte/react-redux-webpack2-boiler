import * as types from '../constants/actionTypes';

const routeReducer = (store = {}, action) => {
  switch (action.type) {
    case types.ROUTE_PUSH:
    console.log('---', action.data.history)
      action.data.history.push(action.data.route);
      return store;
    default:
      return store;
  }
};

export default routeReducer;
