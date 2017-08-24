import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import App from '../components/App';
import NotFound from '../components/NotFound';

// import routeActions from '../actions/RouteActions';
import createBrowserHistory from '../../tools/history';
/// Replaces the dispatcher.es file for each container component.

const proptypes = {
  dispatch: PropTypes.func
};

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Router history={createBrowserHistory}>
        <div className="wrapper">
          <App />
          <div className="router-wrapper">
            <Switch>
              <Route exact path="/" />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

AppContainer.propTypes = proptypes;

const mapStoreToProps = () => {
  //Select the specific Store items you would like here\

  //return state items to be added as props to the container
  return {};
};

export default connect(mapStoreToProps)(AppContainer);
