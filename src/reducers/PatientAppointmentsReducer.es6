import * as types from '../constants/actionTypes';

//inital state is set inside the store/initialState.es6
const patientAppointmentsReducer = (store = {}, action) => {
  switch (action.type) {
    case types.GET_PATIENT_APPOINTMENTS_SUCCESS:
      return Object.assign({}, store, action.data);
    default:
      return store;
  }
};

export default patientAppointmentsReducer;
