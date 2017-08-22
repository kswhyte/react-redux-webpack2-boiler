import searchPatientRequest from '../actionRequests/mocks/searchPatientRequest';
import {getPatientInfoRequest,savePatientInfoRequest} from '../actionRequests/mocks/patientInfoRequest';
import fireGet from '../../tools/mocks/fireGet';
import firePost from '../../tools/mocks/firePost';
import * as types from '../constants/actionTypes';
const actions = {

   getPatientInfo: data => ({
     type: types.GET_PATIENT_INFO,
     data
   }),
  getPatientInfoSuccess: data => ({
    type: types.GET_PATIENT_INFO_SUCCESS,
    data
  }),
  savePatientInfoSuccess: data => ({
    type: types.SAVE_PATIENT_INFO_SUCCESS,
    data
  }),
  searchPatientClick: data => ({
    type: types.SEARCH_PATIENT_CLICK,
    data
  }),
  searchPatientSuccess: data => ({
    type: types.SEARCH_PATIENT_SUCCESS,
    data
  }),
  searchPatientFail: err => ({
    type: types.SEARCH_PATIENT_FAIL,
    err
  }),
  searchValidationError: err => ({
    type: types.SEARCH_VALIDATION_ERROR,
    err
  }),
  enterNewPatient: data => ({
    type: types.ENTER_NEW_PATIENT,
    data
  })
};

const thunks = {
  getPatientInfoClick: (patientId) => {
    return dispatch => {
      console.log(`======
      ${patientId}
      =====`)
      if(patientId !== null){
        const request=getPatientInfoRequest(dispatch,patientId);
        fireGet(request);
      }
    };
  },

  savePatientInfo:(data)=>{
    return dispatch => {
      //TODO:Implementation pending
      const request=savePatientInfoRequest(dispatch,data);
    //  dispatch(actions.patientSearch(postModel));
      firePost(request, dispatch);
    };
  },

  searchPatient: (data) => {
    return dispatch => {
      dispatch(actions.searchPatientClick(data));
      const model = {};
      const request = searchPatientRequest(dispatch, model);
      firePost(request, dispatch);
    }
  }

};

export default {
  ...actions,
  ...thunks
};
