import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
//import patientAppointmentsReducer from '../reducers/PatientAppointmentsReducer';
import InitialStore from '../store/initalStore';
import logger from 'redux-logger';

export default function configureStore(initalStore=InitialStore) {
  const store = createStore(
    rootReducer,
    initalStore,
   // patientAppointmentsReducer,
    applyMiddleware(logger, thunkMiddleware)
  );
  return store;
}
