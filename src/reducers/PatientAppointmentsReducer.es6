import * as types from '../constants/actionTypes';

//inital state is set inside the store/initialState.es6
const patientAppointmentsReducer = (store = {}, action) => {
  switch (action.type) {
    case types.:
      return Object.assign({}, store, { showSpinner: true });
    default:
      return store;
  }
};

export default sessionReducer;
