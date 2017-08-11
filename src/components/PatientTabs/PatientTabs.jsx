import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import PatientInfo from '../PatientInfo';
import PatientAppointments from '../PatientAppointments';
import PatientNotes from '../PatientNotes';

import './patient-tabs.css';

const PatientTabs = props => {
  PatientTabs.propTypes = {
    children: PropTypes.object,
    patientInfo: PropTypes.object
  };

  const check = () => {
    console.log(props);
  };
  check();

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

      <Route
        exact
        path="/patientinfo/generalinfo"
        render={() => <PatientInfo generalInfo={props.patientInfo.generalInfo} />}
      />
      <Route
        exact
        path="/patientinfo/appointments"
        render={() => <PatientAppointments appointments={props.patientInfo.appointments} />}
      />
      <Route exact path="/patientinfo/notes" render={() => <PatientNotes notes={props.patientInfo.notes} />} />
    </div>
  );
};

export default PatientTabs;
