import patientAppointmentsRequest from '../actionRequests/patientInfoRequest';
import fireGet from '../../tools/fireGet';
import * as types from '../constants/actionTypes';

const actions = {
  
  getPatientAppointmentsSuccess: data => ({
    type: types.GET_PATIENT_APPOINTMENTS_SUCCESS,
    data
  }),
   getPatientAppointmentsFail: data => ({
    type: types.GET_PATIENT_APPOINTMENTS_FAIL,
    data
  })
};

const thunks = {
  getPatientAppointments: patientId => {
    return dispatch => {
      const request=patientAppointmentsRequest(dispatch,patientId);
     // dispatch(actions.getPatientAppointmentsSuccess(patientId));
      fireGet(request,dispatch);
    };
  }
};

export default {
  ...actions,
  ...thunks
};
