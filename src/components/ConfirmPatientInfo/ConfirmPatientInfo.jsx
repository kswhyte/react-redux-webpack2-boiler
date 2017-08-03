import React from 'react';

import PatientTabs from '../PatientTabs/PatientTabs';

import HgRow from '@hg/three-ui/HgRow';
// import HgButton from '@hg/three-ui/HgButton';

import './confirm-patient-info.css';

const ConfirmPatientInfo = () => {
  return (
    <div className="confirm-patient-info-wrapper">
      <h1>PatientName</h1>
      <PatientTabs />
      <div className="break-line footer-line" />
      <div className="button-wrapper">
        <HgRow>
          <div className="col-sm-3">
            <button className="back-btn" tabIndex={1}>
              BACK
            </button>
          </div>

          <div className="col-sm-3">
            <button className="next-btn" tabIndex={1}>
              NEXT
            </button>
          </div>
        </HgRow>
      </div>
    </div>
  );
};

ConfirmPatientInfo.propTypes = {};

export default ConfirmPatientInfo;
