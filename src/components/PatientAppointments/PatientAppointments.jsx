import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// import HgRow from '@hg/three-ui/HgRow';
// import SelectInput from '@hg/three-ui/HgInputsV2/SelectInput';
// import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
// import MaskedTextInput from '../ExtraFormElements/maskedInputs';
// import HgButton from '@hg/three-ui/HgButton';

const PatientAppointments = props => {
  PatientAppointments.propTypes = {
    children: PropTypes.object,
    appointments: PropTypes.array.required
  };

  const check = () => {
    console.log(props);
  };
  check();
  const pastAppts = props.appointments.filter(appt => {
    console.log(Moment(appt.appointmentDateTime).format('LLL'));
    return (Moment(appt.appointmentDateTime) < Moment());
  });

  const upcomingAppts = props.appointments.filter(appt => {
    return (Moment(appt.appointmentDateTime) > Moment());
  });

  console.log('Past Appts', pastAppts);
  console.log('Upcoming Appts', upcomingAppts);

  return (
    <div className="patient-appointments-wrapper">
      <div className="tab-content clearfix">
        <div className="patient-appointments-form tab-pane active">
            {
              (props.appointments.length === 0) && (
                <h1>Patient has no appointment history</h1>
              )
            }
          <UpcomingAppointments upcomingAppts={upcomingAppts} />
          <PastAppointments pastAppts={pastAppts} />
        </div>
      </div>
    </div>
  );
};

const PastAppointments = pastAppts => {
  console.log("Past Aptts: ", pastAppts);
  return (
    <table>
      <tr>
        <th colSpan={6}>Past Appointments</th>
      </tr>
      {
        pastAppts.pastAppts.map(appt => {
          return (
            <tr key={appt.appointmentID} >
              <td>{Moment(appt.appointmentDateTime).format('LL')}</td>
              <td>{Moment(appt.appointmentDateTime).format('LT')}</td>
              <td>Dr Name Name</td>
              <td>123-567-8910</td>
              <td>Name</td>
              <td></td>
            </tr>
          )
        })
      }
    </table>

  )
}

const UpcomingAppointments = upcomingAppts => {
  console.log("Past Aptts: ", upcomingAppts);
  return (
    <table>
      <tr>
        <th colSpan={6}>Upcoming Appointments</th>
      </tr>
      {
        upcomingAppts.upcomingAppts.map(appt => {
          return (
            <tr key={appt.appointmentID} >
              <td>{Moment(appt.appointmentDateTime).format('LL')}</td>
              <td>{Moment(appt.appointmentDateTime).format('LT')}</td>
              <td>Dr Name Name</td>
              <td>123-567-8910</td>
              <td>Name</td>
              <td></td>
            </tr>
          )
        })
      }
    </table>

  )
}

export default PatientAppointments;
