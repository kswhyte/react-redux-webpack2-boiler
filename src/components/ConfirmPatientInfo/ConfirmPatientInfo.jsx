import React from 'react';
import { PropTypes } from 'prop-types';

import PatientTabs from '../PatientTabs/PatientTabs';

// import HgRow from '@hg/three-ui/HgRow';
// import HgButton from '@hg/three-ui/HgButton';

import './confirm-patient-info.css';

const ConfirmPatientInfo = props => {
   

  return (
    <div className="confirm-patient-info-wrapper">
      <PatientTabs patientInfo={props.patientInfo} />
      <div className="footer-line" />
      <div className="break-line footer-line" />
      <div className="button-wrapper">
        <div>
          <div className="col-sm-6">
            <button className="back-btn" tabIndex={1}>
              BACK
            </button>
          </div>

          <div className="col-sm-6">
            <button className="next-btn" tabIndex={1}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ConfirmPatientInfo.propTypes = {
  patientInfo: PropTypes.object.required
};

export default ConfirmPatientInfo;
