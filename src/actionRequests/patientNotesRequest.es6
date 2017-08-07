import actions from '../../actions/PatientNotesActions';
import { URI } from '../../../tools/app_config';


const addPatientNotesRequest = (dispatch, ...args) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';
  const postModel = {
    
  };

  const requestEnd = () => {
    console.log('---- args : ', args);
    const _res = {
      body: {
      }
    };
    dispatch(actions.addPatientNotesSuccess(_res.body));

  };

  return { hostedUrlPath, postRoute, requestEnd, postModel };
};

const getPatientNotesRequest = (dispatch, ...args) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const getRoute = '/#fake';

  const requestEnd = () => {
    console.log('---- args : ', args);
    const _res = {
      body: {
      }
    };
    dispatch(actions.getPatientNotesSuccess(_res.body));
  };

  return { hostedUrlPath, getRoute, requestEnd };
};

export {addPatientNotesRequest,getPatientNotesRequest}
