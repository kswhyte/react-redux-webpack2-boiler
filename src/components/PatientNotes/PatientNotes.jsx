import React from 'react';
import PropTypes from 'prop-types';

const PatientNotes = props => {
  PatientNotes.propTypes = {
    children: PropTypes.object
  };

  const check = () => {
    console.log(props);
  };
  check();

  return (
    <div className="patient-notes-wrapper">
      <div className="tab-content clearfix">
        <div className="patient-notes-form tab-pane active">
          <h3>Insert NOTES Form</h3>
        </div>
      </div>
    </div>
  );
};

export default PatientNotes;
