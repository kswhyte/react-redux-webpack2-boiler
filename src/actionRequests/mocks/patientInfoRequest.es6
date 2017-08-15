import actions from '../../actions/PatientInfoActions';
import { URI } from '../../../tools/app_config';

const getPatientInfoRequest = (dispatch) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const getRoute = '/#fake';
  const requestEnd = () => {
    const _res = {
      body: {
        generalInfo: {
          patientId: '1f47af8b-ec5c-4b53-b734-22a30eff3519',
          firstName: 'Saminathan',
          middleName: '',
          lastName: 'venkat',
          dob: '1980-03-02T00:00:00',
          dobMonth:'March',
          dobDay:'02',
          dobYear:'1980',
          street: '4444 Leetsdale Dr. | Glendale',
          address2: '',
          city: 'Denver',
          stateCode: 'CO',
          zipCode: '80246',
          phoneNumber: '7204012488',
          phoneType:'1',
          mobilePhone: '7204012488',
          emailAddress: 'saminathan.v@happiestminds.com',
          gender: 'M',
          sourceId: '00000000-0000-0000-0000-000000000000',
          clientId: 1005,
          isActive: true,
          clientName: 'OCHNer_new',
          createDate: '2017-06-15T00:00:00',
          modifiedDate: '2017-06-15T00:00:00',
          createdBy: 'SaminathanV',
          modifiedBy: 'SaminathanV',
          insuranceCarrier: 'cigna',
          planType:'planType',
          planNumber:'1234',
          insuranceCarrierAlternate: '',
          planTypeAlternate:'',
          planNumberAlternate:''
        },
        appointments: [
          {
            appointmentID: '991335e2-6f23-4d5d-acc6-bca150459e9f',
            appointmentDateTime: '2017-08-03T15:38:54-06:00',
            providerName: 'Dr. Evan Dvorin, MD',
            agentName: 'Admin LName',
            officePhone: '123-456-7891'
          },
          {
            appointmentID: '12346',
            appointmentDateTime: '2017-07-03T15:38:54-06:00',
            providerName: 'Dr Name Name',
            agentName: 'Name',
            officePhone: '123-456-7891'
          },
          {
            appointmentID: '12347',
            appointmentDateTime: '2017-06-03T15:38:54-06:00',
            providerName: 'Dr Name Name',
            agentName: 'Name',
            officePhone: '123-456-7891'
          },
          {
            appointmentID: '12348',
            appointmentDateTime: '2017-10-03T15:38:54-06:00',
            providerName: 'Dr Name Name',
            agentName: 'Name',
            officePhone: '123-456-7891'
          },
          {
            appointmentID: '12349',
            appointmentDateTime: '2017-10-03T15:38:54-06:00',
            providerName: 'Dr Name Name',
            agentName: 'Name',
            officePhone: '123-456-7891'
          }
        ],
        notes: [
          {
            noteId: 1,
            patientId: '12349',
            dateTime: '2017-10-03T15:38:54-06:00',
            description: 'Note title and description goes here'
          },
          {
            noteId: 2,
            patientId: '12349',
            dateTime: '2017-11-03T17:38:54-06:00',
            description: 'Note title and description-2'
          }
        ]
      }
    };
    dispatch(actions.getPatientInfoSuccess(_res.body));
  };

  return { hostedUrlPath, getRoute, requestEnd };
};


const savePatientInfoRequest = (dispatch,patientInfo) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';
  const requestEnd = () => {

    dispatch(actions.savePatientInfoSuccess(patientInfo));
  };

  return { hostedUrlPath, postRoute, requestEnd, patientInfo };
};




export {getPatientInfoRequest,savePatientInfoRequest};
