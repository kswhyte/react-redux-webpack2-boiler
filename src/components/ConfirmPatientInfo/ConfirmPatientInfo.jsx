import React from 'react';
import PropTypes from 'prop-types';

import './confirmPatientInfo'

const ConfirmPatientInfo = (props) => {

  ConfirmPatientInfo.propTypes = {
    title : PropTypes.string
  };

   const check = () => {
    console.log(props)
  }
  check();

    return (
        <div className="confirmPatientInfo-wrapper">
            <h1>ConfirmPatientInfo</h1>
        </div>
    );
};

export default ConfirmPatientInfo;
