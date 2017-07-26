import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import PatientInfo from '../PatientInfo';
import PatientAppointments from '../PatientAppointments';
import PatientNotes from '../PatientNotes';

const PatientTabs = props => {
  PatientTabs.propTypes = {
    children: PropTypes.object
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

      <Route exact path="/patientinfo/generalinfo" component={PatientInfo} />
      <Route exact path="/patientinfo/appointments" component={PatientAppointments} />
      <Route exact path="/patientinfo/notes" component={PatientNotes} />
    </div>
  );
};

export default PatientTabs;
