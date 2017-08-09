import * as types from '../constants/actionTypes';
import history from '../../tools/history';

const routeReducer = (store = {}, action) => {
  switch (action.type) {
    case types.CHANGE_ROUTE:
      history.push(action.data.route);
      return store;
    default:
      return store;
  }
};

export default routeReducer;
