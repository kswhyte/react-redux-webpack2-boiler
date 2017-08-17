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

        <div className="sm-spacer">
          <div className="col-xs-4">
            <button className="new-session-button primary-btn long" tabIndex="1" onClick={props.startSessionClick}>
              BEGIN NEW SESSION
            </button>
          </div>
        </div>
        <div className="sm-spacer">
          <div className="col-xs-offset-1 col-xs-4">
            <button className="primary-btn long" tabIndex="1">
              MANAGE MY ACCOUNT
            </button>
          </div>
        </div>

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
