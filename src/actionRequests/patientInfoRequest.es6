/*eslint no-unused-vars: */

import actions from '../../actions/PatientInfoActions';
import { URI } from '../../../tools/app_config';

const patientsearchRequest = (dispatch, ...args) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';
  const postModel = {
    firstName: 'saminathan',
    lastName: 'v',
    DOB: '02-02-1980',
    clientId: '1005'
  };

  const requestEnd = () => {
    const _res = {
      body: [
        {
          patientId: '1f47af8b-ec5c-4b53-b734-22a30eff3519',
          firstName: 'Saminathan',
          middleName: '',
          lastName: 'v',
          dob: '1980-02-02T00:00:00',
          address1: '4444 Leetsdale Dr. | Glendale',
          address2: '',
          city: 'Denver',
          stateCode: 'CO',
          zipCode: '80246',
          homePhoneNumber: '7204012488',
          mobilePhone: '7204012488',
          emailAddress: 'saminathan.v@happiestminds.com',
          gender: '',
          sourceId: '00000000-0000-0000-0000-000000000000',
          clientId: 1005,
          isActive: true,
          clientName: 'OCHNer_new',
          createDate: '2017-06-15T00:00:00',
          modifiedDate: '2017-06-15T00:00:00',
          createdBy: 'SaminathanV',
          modifiedBy: 'SaminathanV',
          futureAppointments: null,
          pastAppointments: null,
          insuranceCarrierCode: ''
        }
      ]
    };
    dispatch(actions.patientSearchSuccess(_res.body));
  };

  return { hostedUrlPath, postRoute, requestEnd, postModel };
};

export default patientsearchRequest;
