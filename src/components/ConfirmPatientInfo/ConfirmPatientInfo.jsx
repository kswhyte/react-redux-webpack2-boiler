import React from 'react';

import PatientTabs from '../PatientTabs/PatientTabs';

import HgRow from '@hg/three-ui/HgRow';
import HgButton from '@hg/three-ui/HgButton';

import './confirm-patient-info.css';

const ConfirmPatientInfo = () => {
  return (
    <div className="confirm-patient-info-wrapper">
      <h1>PatientName</h1>
      <PatientTabs />
      <div className="footer-line" />
      <HgRow>
        <div className="col-sm-3">
          <HgButton className="back-btn" tabIndex={1} text="Begin New Session" />
        </div>

        <div className="col-sm-3">
          <HgButton className="next-btn" tabIndex={1} text="Begin New Session" />
        </div>
      </HgRow>
    </div>
  );
};

ConfirmPatientInfo.propTypes = {};

export default ConfirmPatientInfo;
