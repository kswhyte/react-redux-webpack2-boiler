import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import sStorage from '../../../tools/sessionStorage_helper';

import './dashboard.css';

export const Dashboard = props => {
  if (!sStorage.getItem({ key: 'isUserLoggedIn' }).status) {
    props.history.push('/login');
  }
  return (
    <div className="start-call-banner-wrapper">
      <div className="no-margin">
        <h2 className="dashboard-text">Dashboard</h2>
        <hr />
        <button
          className="new-session-button primary dashboard-button"
          tabIndex="1"
          onClick={props.startSessionClick}
        >
          Begin New Session
        </button>
        <button
          className="dashboard-button primary"
          tabIndex="1"
        >
          Manage My Account
        </button>
        <div className="error-container">
          {props.startError === 'ERROR' && <h3>Something went wrong.</h3>}
          {props.startError === 'TIMEOUT' && <h3>Request timed out.</h3>}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  startSessionClick: PropTypes.func.isRequired,
  startError: PropTypes.string,
  history: PropTypes.object.isRequired,
  userLoggedIn: PropTypes.bool.isRequired
};

const DashboardWithRouter = withRouter(Dashboard);

export default DashboardWithRouter;
