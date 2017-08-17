/*eslint no-unused-vars: */

import actions from '../../actions/PatientInfoActions';
import { URI } from '../../../tools/app_config';

const searchPatientRequest = (dispatch, postModel) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';

  const requestEnd = () => {
    const _res = {
      body: [{
          patientId: 1,
          firstName: 'Julialemon',
          lastName: 'Sugerhillgang',
          dateOfBirth: 'Feb 27, 1000',
          phone: '720-771-7277',
          zipCode: '80202',
          modified: 'Jun 16, 2017'
      },{
          patientId: 2,
          firstName: 'Julialemon',
          lastName: 'Sugarhillgang',
          dateOfBirth: 'Feb 27, 1000',
          phone: '720-771-7277',
          zipCode: '80202',
          modified: 'Jun 16, 2017'
      }]
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
