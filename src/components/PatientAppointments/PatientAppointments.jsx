import React from 'react';
import PropTypes from 'prop-types';

const PatientAppointments = props => {
  PatientAppointments.propTypes = {
    children: PropTypes.object
  };

  const check = () => {
    console.log(props);
  };
  check();

  return (
    <div className="patient-appointments-wrapper">
      {props.children}
      <div className="tab-content clearfix">
        <div className="patient-appointments-form tab-pane">
          <h3>Insert APPOINTMENTS Form</h3>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
