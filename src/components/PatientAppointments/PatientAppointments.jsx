import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

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
    return Moment(appt.appointmentDateTime) < Moment();
  });

  const upcomingAppts = props.appointments.filter(appt => {
    return Moment(appt.appointmentDateTime) > Moment();
  });

  return (
    <div className="patient-appointments-wrapper">
      <div className="tab-content clearfix">
        <div className="patient-appointments-form tab-pane active">
          {props.appointments.length === 0 && <h1>Patient has no appointment history</h1>}
          <table className="appt-tables header-table">
            <th>Date</th>
            <th>Time</th>
            <th>Provider Name</th>
            <th>Phone</th>
            <th>Scheduler</th>
            <th>Actions</th>
          </table>
          {upcomingAppts.length > 0 && <UpcomingAppointments upcomingAppts={upcomingAppts} />}
          {pastAppts.length > 0 && <PastAppointments pastAppts={pastAppts} />}
        </div>
      </div>
    </div>
  );
};

const PastAppointments = props => {
  PastAppointments.propTypes = {
    pastAppts: PropTypes.array.required
  };
  return (
    <table className="appt-tables">
      <tr>
        <th colSpan={6}>Past Appointments</th>
      </tr>
      {props.pastAppts.map(appt => {
        return (
          <tr key={appt.appointmentID}>
            <td>
              {Moment(appt.appointmentDateTime).format('LL')}
            </td>
            <td>
              {Moment(appt.appointmentDateTime).format('LT')}
            </td>
            <td>Dr Name Name</td>
            <td>123-567-8910</td>
            <td>Name</td>
            <td />
          </tr>
        );
      })}
    </table>
  );
};

const UpcomingAppointments = props => {
  UpcomingAppointments.propTypes = {
    upcomingAppts: PropTypes.array.required
  };
  return (
    <table className="appt-tables">
      <tr>
        <th colSpan={6}>Upcoming Appointments</th>
      </tr>
      {props.upcomingAppts.map(appt => {
        return (
          <tr key={appt.appointmentID}>
            <td>
              {Moment(appt.appointmentDateTime).format('LL')}
            </td>
            <td>
              {Moment(appt.appointmentDateTime).format('LT')}
            </td>
            <td>Dr Name Name</td>
            <td>123-567-8910</td>
            <td>Name</td>
            <td>
              <button className="primary">Cancel</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default PatientAppointments;
