import React from 'react';

import PatientTabs from '../PatientTabs/PatientTabs';

import './confirm-patient-info.css';

const ConfirmPatientInfo = () => {
  return (
    <div className="confirm-patient-info-wrapper">
      <h1>PatientName</h1>
      <PatientTabs />
      <div className="footer-line" />
    </div>
  );
};

ConfirmPatientInfo.propTypes = {};

export default ConfirmPatientInfo;
