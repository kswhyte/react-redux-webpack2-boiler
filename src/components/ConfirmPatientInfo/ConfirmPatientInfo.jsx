import React from 'react';
import { PropTypes } from 'prop-types';

import PatientTabs from '../PatientTabs/PatientTabs';

import './confirm-patient-info.css';

const ConfirmPatientInfo = props => {
   

  return (
    <div className="confirm-patient-info-wrapper">
      <PatientTabs patientInfo={props.patientInfo} />
      <div className="footer-line" />
    </div>
  );
};

ConfirmPatientInfo.propTypes = {
  patientInfo: PropTypes.object.required
};

export default ConfirmPatientInfo;
