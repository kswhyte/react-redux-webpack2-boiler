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
  })
};

const thunks = {
  getPatientInfoClick: (patientId) => {
    return dispatch => {
      const request=getPatientInfoRequest(dispatch,patientId);
      fireGet(request);
    };
  },

  savePatientInfo:(data)=>{
 return dispatch => {
      //TODO:Implementation pending
      const request=savePatientInfoRequest(dispatch,data);
    //  dispatch(actions.patientSearch(postModel));
      firePost(request, dispatch);
    };

  }

};

export default {
  ...actions,
  ...thunks
};
