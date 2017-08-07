import actions from '../../actions/PatientAppointmentsActions';
import { URI } from '../../../tools/app_config';

const getPatientAppointmentsRequest = (dispatch, ...args) => {
    const hostedUrlPath = URI.baseUISVC_URI;
    const getRoute = '/Appointment/last/#fake';
    const requestEnd = () => {
      console.log('---- args : ', args)
      const _res = {
                    body:[{"patientId":"991335e2-6f23-4d5d-acc6-bca150459e9f",
                        "appointmentId":"74ebb375-91f9-409e-af3e-5d628462b2a2",
                        "oasAppointmentId":"6901",
                        "appointmentDate":"7/13/2017",
                        "appointmentTime":"8:40 AM",
                        "status":"BOOKED",
                        "providerName":"Dr. Evan Dvorin, MD",
                        "dateBooked":"7/7/2017 12:00:00 AM",
                        "agentName":"Admin Admin LName(Saminathan V)"
                      },
                      {"patientId":"991335e2-6f23-4d5d-acc6-bca150459e9f",
                      "appointmentId":"6d20e353-1a8c-4d2b-8e02-c66e4b98a583",
                      "oasAppointmentId":"6896",
                      "appointmentDate":"7/11/2017",
                      "appointmentTime":"9:40 AM",
                      "status":"BOOKED",
                      "providerName":"Dr. Evan Dvorin, MD",
                      "dateBooked":"7/7/2017 12:00:00 AM",
                      "agentName":"Admin Admin LName(Saminathan V)"}
                      ]
      };
      dispatch(actions.getPatientAppointmentsSuccess(_res.body));
    };

    return {hostedUrlPath, getRoute, requestEnd};
};

export default getPatientAppointmentsRequest;
