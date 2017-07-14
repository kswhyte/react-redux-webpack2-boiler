import React from 'react';
import PropTypes from 'prop-types';
import HgRow from '@hg/three-ui/HgRow';


const Welcome = (props) => {
    return (
        <div className="start-call-banner-block">
            <HgRow>
                <h4>Welcome back, {props.agent ? props.agent.FirstName : ''}</h4>
                <h1 className="banner-header">Booking Portal</h1>
                {
                    (props.showError) && (
                        <h3>Something went wrong.</h3>
                    )
                }
                {
                    (props.startCallTimeout) && (
                        <h3>Request timed out.</h3>
                    )
                }
            </HgRow>
        </div>
    )
}

Welcome.PropTypes = {
    agent: PropTypes.object,
    createCall: PropTypes.func,
    showError: PropTypes.func,
    startCallTimeout: PropTypes.func
}

export default Welcome;