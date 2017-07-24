import React from 'react';
// import { Route } from 'react-router-dom';

// import PatientInfo from '../PatientInfo';
// import PatientAppointments from '../PatientAppointments';
// import PatientNotes from '../PatientNotes';

import { Link } from 'react-router-dom';

import './confirm-patient-info.css';

const ConfirmPatientInfo = () => {
  return (
    <div className="confirm-patient-info-block">
      <h1>ConfirmPatientInfo</h1>
      <ul className="nav nav-tabs">
        <li className="general-info-tab active">
          <Link to="patientinfo/generalinfo">General Info</Link>
        </li>
        <li className="appointments-tab">
          <Link to="patientinfo/appoinments">PatientName Appointments</Link>
        </li>
        <li className="notes-tab">
          <Link to="patientinfo/notes">Notes</Link>
        </li>
      </ul>
    </div>
  );
};

ConfirmPatientInfo.propTypes = {};

export default ConfirmPatientInfo;
