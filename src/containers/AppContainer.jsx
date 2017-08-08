import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import SignOnContainer from './SignOnContainer';
import SearchPatientContainer from './SearchPatientContainer';
import UserManagementContainer from './UserManagementContainer';
import ConfirmPatientInfoContainer from './ConfirmPatientInfoContainer';
import SearchAndCalendarContainer from './SearchAndCalendarContainer';
import ConfirmContainer from './ConfirmContainer';
import headerActions from '../actions/HeaderActions';
import sessionActions from '../actions/SessionActions';
import sStorage from '../../tools/sessionStorage_helper';
import createBrowserHistory from '../../tools/history';
/// Replaces the dispatcher.es file for each container component.

let createHandlers = function(dispatch) {
  let startSessionClick = function(node, data) {
    dispatch(sessionActions.startSessionClick(data));
  };
  let toggleHeader = function(data) {
    dispatch(headerActions.toggleHeader(data));
  };

  let logoutUser = function(data) {
    dispatch(sessionActions.startLogoutClick(data));
  };

  return {
    startSessionClick,
    toggleHeader,
    logoutUser
    // other handlers
  };
};
const proptypes = {
  dispatch: PropTypes.func,
  headerSize: PropTypes.string,
  showSpinner: PropTypes.bool,
  startError: PropTypes.string,
  user: PropTypes.object
};
class App extends Component {
  constructor(props) {
    super(props);
    this.toggleHeaderSize = 'full';
    this.headerToggleTolerance = 50;
    this.props = props;
    this.handlers = createHandlers(this.props.dispatch);
    this.userIsActive = false;
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > this.headerToggleTolerance && this.toggleHeaderSize !== 'small') {
        this.toggleHeaderSize = 'small';
        this.handlers.toggleHeader(this.toggleHeaderSize);
      } else if (window.scrollY < this.headerToggleTolerance && this.toggleHeaderSize !== 'full') {
        this.toggleHeaderSize = 'full';
        this.handlers.toggleHeader(this.toggleHeaderSize);
      }
    });
  }
  componentWillMount() {}

  render() {
    if (sStorage.getItem({ key: 'isUserLoggedIn' }).item) {
      this.userIsActive = true;
    } else {
      this.userIsActive = false;
    }
    return (
      <Router history={createBrowserHistory}>
        <div className={this.userIsActive ? 'wrapper ' : 'wrapper signed-out'}>
          <Header headerSize={this.props.headerSize} logout={this.handlers.logoutUser} />
          <section className="body-wrapper">
            <Nav />
            <div className="router-wrapper">
              {this.props.showSpinner &&
                <div className="smaccess-spinner">
                  <img src="http://camspex.com/graphbase/icons/processing_circle_rotate.gif" />
                </div>}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() =>
                    <Dashboard
                      startSessionClick={this.handlers.startSessionClick}
                      startError={this.props.startError}
                      userLoggedIn={this.props.user.isActive}
                    />}
                />
                <Route path="/login" render={() => <SignOnContainer signonType="signOn" />} />
                <Route path="/resetpassword" render={() => <SignOnContainer signonType="resetpassword" />} />
                <Route
                  path="/resetpasswordconfirm"
                  render={() => <SignOnContainer signonType="resetpasswordconfirm" />}
                />
                <Route path="/patientsearch" component={SearchPatientContainer} />
                <Route path="/users" component={UserManagementContainer} />
                <Route path="/patientinfo" component={ConfirmPatientInfoContainer} />
                <Route path="/searchandcalendar" component={SearchAndCalendarContainer} />
                <Route path="/confirm" component={ConfirmContainer} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}
App.propTypes = proptypes;
const mapStoreToProps = store => {
  //Select the specific Store items you would like here\
  const { headerSize } = store.Header;
  const { showSpinner, startError, user } = store.Session;
  //return state items to be added as props to the container
  return {
    headerSize,
    showSpinner,
    startError,
    user
  };
};
export default connect(mapStoreToProps)(App);
