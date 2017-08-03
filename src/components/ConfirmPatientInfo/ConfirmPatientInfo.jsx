import React from 'react';

import PatientTabs from '../PatientTabs/PatientTabs';

import './confirm-patient-info.css';

const ConfirmPatientInfo = () => {
  return (
    <div className="confirm-patient-info-wrapper">
      <PatientTabs />
      <div className="footer-line" />
    </div>
  );
};

ConfirmPatientInfo.propTypes = {};

export default ConfirmPatientInfo;
