import React from 'react';
import PropTypes from 'prop-types';
import HgRow from '@hg/three-ui/HgRow';
import HgButton from '@hg/three-ui/HgButton';
import { withRouter } from 'react-router';
import sStorage from '../../../tools/sessionStorage_helper';

import './dashboard.css';

const Dashboard = props => {
  if(!sStorage.getItem({key:'isUserLoggedIn'}).status){
    props.history.push('/login')
  }
  return (
    <div className="start-call-banner-wrapper">
      <HgRow className="no-margin">
        <h1>Dashboard</h1>
        <hr />
        <HgButton
          className="dashboard-button"
          tabIndex={1}
          onClick={props.startSessionClick}
          text="Begin New Session"
        />
        <HgButton
          className="dashboard-button"
          tabIndex={1}
          text="Manage My Account"
        />
        <div className="error-container">
          {props.startError === 'ERROR' && <h3>Something went wrong.</h3>}
          {props.startError === 'TIMEOUT' && <h3>Request timed out.</h3>}
        </div>
      </HgRow>
    </div>
  );
};

Dashboard.propTypes = {
  startSessionClick: PropTypes.func.isRequired,
  startError: PropTypes.bool,
  history : PropTypes.object.isRequired,
  userLoggedIn: PropTypes.bool.isRequired
};

const DashboardWithRouter = withRouter(Dashboard);

export default DashboardWithRouter;
