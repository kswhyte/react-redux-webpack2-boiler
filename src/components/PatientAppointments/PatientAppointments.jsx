import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import './patient-appointments.css';

const PatientAppointments = props => {
  PatientAppointments.propTypes = {
    children: PropTypes.object,
    appointments: PropTypes.arrayOf(PropTypes.object),
  };

  // Why was the typeof check added?
  // const pastAppts = () => {
  //   if(typeof props.appointments === "object"){
  //     props.appointments.filter(appt => {
  //       return Moment(appt.appointmentDateTime) < Moment();
  //     });
  //   }
  // };


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
          {typeof props.appointments === "object" && props.appointments.length === 0 &&
            <div className="page-instructions">
              <p>Patient has no appointment history</p>
            </div>}
          <table className="appt-tables header-table">
            <tbody>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Provider Name</th>
              <th>Phone</th>
              <th>Scheduler</th>
              <th>Actions</th>
            </tr>
            </tbody>
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
    pastAppts: PropTypes.array
  };
  return (
    <table className="appt-tables">
      <thead>
        <tr>
          <th colSpan={6} className="past-appt-head">
            Past Appointments
          </th>
        </tr>
      </thead>
      <tbody>
        {props.pastAppts.map(appt => {
          return (
            <tr key={appt.appointmentID} >
              <td>{Moment(appt.appointmentDateTime).format('LL')}</td>
              <td>{Moment(appt.appointmentDateTime).format('LT')}</td>
              <td>{appt.providerName}</td>
              <td>{appt.officePhone}</td>
              <td>{appt.agentName}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const UpcomingAppointments = props => {
  UpcomingAppointments.propTypes = {
    upcomingAppts: PropTypes.array
  };
  return (
    <table className="appt-tables">
      <tbody>
        <tr>
          <th colSpan={6} className="upcoming-appt-head">
            Upcoming Appointments
          </th>
        </tr>
        {props.upcomingAppts.map(appt => {
          return (
            <tr key={appt.appointmentID} >
              <td>{Moment(appt.appointmentDateTime).format('LL')}</td>
              <td>{Moment(appt.appointmentDateTime).format('LT')}</td>
              <td>{appt.providerName}</td>
              <td>{appt.officePhone}</td>
              <td>{appt.agentName}</td>
              <td><button>CANCEL</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PatientAppointments;
