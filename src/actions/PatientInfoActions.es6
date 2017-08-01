import patientSearchRequest from '../actionRequests/mocks/patientInfoRequest';
import firePost from '../../tools/mocks/firePost';
import * as types from '../constants/actionTypes';

const actions = {
  
  patientSearch: data => ({
    type: types.PATIENT_SEARCH,
    data
  }),
  patientSearchSuccess: data => ({
    type: types.PATIENT_SEARCH_SUCCESS,
    data
  })
};

const thunks = {
  patientSearchClick: () => {
    return dispatch => {
      //TODO:Implementation pending
      //Need to get clientId of agent from state.
      const postModel=patientSearchRequest(dispatch);
      dispatch(actions.patientSearch(postModel));
      firePost(postModel, dispatch);
    };
  }
 
};

export default {
  ...actions,
  ...thunks
};
