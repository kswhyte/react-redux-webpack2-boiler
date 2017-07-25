import React from 'react';
import PropTypes from 'prop-types';
import HgRow from '@hg/three-ui/HgRow';
import HgButton from '@hg/three-ui/HgButton';

import './welcome.css';

const Welcome = props => {
  return (
    <div className="start-call-banner-block">
      <HgRow className="no-margin">
        <h1>Welcome</h1>
        <hr />
        <HgButton
          className="new-session-button"
          tabIndex={1}
          onClick={props.startSessionClick}
          text="Begin New Session"
        />
        <div className="error-container">
          {(props.startError === 'ERROR') && (<h3>Something went wrong.</h3>)}
          {(props.startError === 'TIMEOUT') && (<h3>Request timed out.</h3>)}
        </div>
      </HgRow>
    </div>
  );
};

Welcome.propTypes = {
    startSessionClick: PropTypes.func,
    startError: PropTypes.bool
};

export default Welcome;
