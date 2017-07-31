import React from 'react';
import PropTypes from 'prop-types';

const PatientInfo = props => {
  PatientInfo.propTypes = {
    children: PropTypes.object
  };

  const check = () => {
    console.log(props);
  };
  check();

  return (
    <div className="patient-info-wrapper">
      <div className="tab-content clearfix">
        <div className="general-info-form tab-pane active">
          <h3>Insert GENERAL INFO Form</h3>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
