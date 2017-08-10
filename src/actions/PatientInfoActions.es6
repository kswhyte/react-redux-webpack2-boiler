import getPatientInfoRequest from '../actionRequests/mocks/patientInfoRequest';
import fireGet from '../../tools/mocks/fireGet';
import * as types from '../constants/actionTypes';

const actions = {
  
  getPatientInfo: data => ({
    type: types.GET_PATIENT_INFO,
    data
  }),
  getPatientInfoSuccess: data => ({
    type: types.GET_PATIENT_INFO_SUCCESS,
    data
  })
};

const thunks = {
  getPatientInfo: (patientId) => {
    return dispatch => {
      //TODO:Implementation pending
      const request=getPatientInfoRequest(dispatch,patientId);
    //  dispatch(actions.patientSearch(postModel));
      fireGet(request, dispatch);
    };
  }
 
};

export default {
  ...actions,
  ...thunks
};
