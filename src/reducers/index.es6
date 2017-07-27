import { combineReducers } from 'redux';
import Header from '../reducers/HeaderReducer.es6';
import Session from '../reducers/SessionReducer.es6';

const rootReducer = combineReducers({
  Header,
  Session
});

export default rootReducer;
