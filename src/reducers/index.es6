import { combineReducers } from 'redux';
import Header from './HeaderReducer.es6';
import Session from './SessionReducer.es6';

const rootReducer = combineReducers({
  Header,
  Session
});

export default rootReducer;
