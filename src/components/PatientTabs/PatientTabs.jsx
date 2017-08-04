import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import PatientInfo from '../PatientInfo';
import PatientAppointments from '../PatientAppointments';
import PatientNotes from '../PatientNotes';

import './patient-tabs.css';

const PatientTabs = props => {
  PatientTabs.propTypes = {
    children: PropTypes.object
  };

  const check = () => {
    console.log(props);
  };
  check();


  //TODO: Going to be replaced w/ a Mock patient appointments request
  const testAppointments = [{
      appointmentID: "12345",
      appointmentDateTime: "2017-09-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12346",
      appointmentDateTime: "2017-09-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },
    {
      appointmentID: "12347",
      appointmentDateTime: "2017-09-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },{
      appointmentID: "12348",
      appointmentDateTime: "2017-07-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    },{
      appointmentID: "12349",
      appointmentDateTime: "2017-07-03T15:38:54-06:00",
      providerName: "Dr Name Name",
      agentName: "Name",
      officePhone: "123-456-7891"
    }];

  return (
    <div className="patient-tabs-wrapper">
      <ul className="nav nav-tabs">
        <li className="general-info-tab active">
          <Link to="/patientinfo/generalinfo">General Info</Link>
        </li>
        <li className="appointments-tab">
          <Link to="/patientinfo/appointments">PatientName Appointments</Link>
        </li>
        <li className="notes-tab">
          <Link to="/patientinfo/notes">Notes</Link>
        </li>
      </ul>
      <div className="tabs-line" />
      <div className="break-line" />

      <Route exact path="/patientinfo/generalinfo" component={PatientInfo} />
      <Route exact path="/patientinfo/appointments" render={() => <PatientAppointments appointments={testAppointments} />}  />
      <Route exact path="/patientinfo/notes" component={PatientNotes} />
    </div>
  );
};

export default PatientTabs;
