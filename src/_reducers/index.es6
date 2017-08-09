import { combineReducers } from 'redux';
import Header from './HeaderReducer.es6';
import Session from './SessionReducer.es6';
import Routes from './RouteReducer.es6';
import PatientInfo from './PatientInfoReducer.es6'
const rootReducer = combineReducers({
  Header,
  Session,
  Routes,
  PatientInfo
});

export default rootReducer;
