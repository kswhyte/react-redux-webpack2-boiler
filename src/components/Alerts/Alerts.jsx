import React from 'react';

const Alerts = (props) => {
    return (
        <div className="alerts">

            <div className={`alert alert-${props.alertType}`} role="alert">
            {props.message}<a onClick={props.closeAlert} className="close" aria-label="close">&times;</a>
            </div>

        </div>
    );
};

export default Alerts;
