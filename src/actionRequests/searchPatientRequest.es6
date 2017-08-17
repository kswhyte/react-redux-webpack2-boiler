/*eslint no-unused-vars: */

import actions from '../actions/SessionActions';
import { URI } from '../../tools/app_config';

const searchPatientRequest = (dispatch) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';
  const postModel = {
    firstName: 'Danny',
    lastName: 'Robinson',
    dateOfBirth: '08/05/1989',
    phone: '720-771-7277',
    zipCode: '80202'
  };

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
