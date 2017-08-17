/*eslint no-unused-vars: */

import actions from '../../actions/PatientInfoActions';
import { URI } from '../../../tools/app_config';

const searchPatientRequest = (dispatch, postModel) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';

  const requestEnd = () => {
    const _res = {
      body: {
        //Sami to fill in?
      }
    };
    dispatch(actions.searchPatientSuccess(_res.body));

    // FOR TESTING ERRORS
    // _res.err = {

    // };
    // dispatch(actions.searchPatientFail(_res.err));
  };

  return { hostedUrlPath, postRoute, requestEnd, postModel };
};

export default searchPatientRequest;
