import {addpatientNotesRequest,getPatientNotesRequest} from '../actionRequests/patientNotesRequest';
import fireGet from '../../tools/fireGet';
import firePost from '../../tools/firePost';

import * as types from '../constants/actionTypes';

const actions = {
  
  addPatientNotesSuccess:data=>({
      type:types.ADD_PATIENT_NOTES_SUCCESS,
    data
    }),
  getPatientNotesSuccess: data => ({
    type: types.GET_PATIENT_NOTES_SUCCESS,
    data
  }),
   getPatientNotesFail: data => ({
    type: types.GET_PATIENT_NOTES_FAIL,
    data
  })
};

const thunks = {
  getPatientNotes: patientId => {
    return dispatch => {
      const request=getPatientNotesRequest(dispatch,patientId);
     // dispatch(actions.getPatientAppointmentsSuccess(patientId));
      fireGet(request,dispatch);
    };
  },
  addPatientNotes:notesFormData=>{
    return dispatch=>{
            const request=addPatientNotesRequest(dispatch,notesFormData);
            firePost(request,dispatch);
    }
  }
};

export default {
  ...actions,
  ...thunks
};
