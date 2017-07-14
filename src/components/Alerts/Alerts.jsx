import React from 'react';
import PropTypes from 'prop-types';

const Alerts = (props) => {

  Alerts.propTypes = {
    alertType: PropTypes.string,
    message: PropTypes.string,
    closeAlert: PropTypes.string
  };

    return (
        <div className="alerts">

            <div className={`alert alert-${props.alertType}`} role="alert">
            {props.message}<a onClick={props.closeAlert} className="close" aria-label="close">&times;</a>
            </div>
            
        </div>
    );
};

export default Alerts;
