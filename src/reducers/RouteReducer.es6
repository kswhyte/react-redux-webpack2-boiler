import * as types from '../constants/actionTypes';
import history from '../../tools/history';

const routeReducer = (store = {}, action) => {
  switch (action.type) {
    case types.ROUTE_PUSH:
      console.log('----history', action.data.route);
      history.push(action.data.route);
      return store;
    default:
      return store;
  }
};

export default routeReducer;
