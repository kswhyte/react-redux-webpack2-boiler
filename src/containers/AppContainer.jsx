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
import PatientTabsContainer from './PatientTabsContainer';
import SearchAndCalendarContainer from './SearchAndCalendarContainer';
import ConfirmContainer from './ConfirmContainer';
import headerActions from '../actions/HeaderActions';
import sessionActions from '../actions/SessionActions';
import sStorage from '../../tools/sessionStorage_helper';
import createBrowserHistory from '../../tools/history';
import ModalConductor from './ModalConductor';
import * as modal_names from '../constants/modals';
/// Replaces the dispatcher.es file for each container component.

let createHandlers = function(dispatch) {
  let startSessionClick = function(node, data) {
    dispatch(sessionActions.startSessionClick(data));
  };
  let toggleHeader = function(data) {
    dispatch(headerActions.toggleHeader(data));
  };

  let logOutUser = function() {
    dispatch(sessionActions.startLogoutClick());
  };

  let changePassword = function(data) {
    dispatch(sessionActions.startChangePasswordClick(data));
  };
  return {
    startSessionClick,
    toggleHeader,
    logOutUser,
    changePassword
    // other handlers
  };
};
const proptypes = {
  dispatch: PropTypes.func,
  headerSize: PropTypes.string,
  showSpinner: PropTypes.bool,
  startError: PropTypes.string,
  user: PropTypes.object,
  sessionStarted: PropTypes.bool,
  currentModal: PropTypes.string
};
class App extends Component {
  constructor(props) {
    super(props);
    this.toggleHeaderSize = 'full';
    this.headerToggleTolerance = 50;
    this.props = props;
    this.handlers = createHandlers(this.props.dispatch, this.props);
    this.userIsActive = false;

    this.logoutUserHandler = this.logoutUserHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  logoutUserHandler() {
    if (this.props.sessionStarted) {
      this.props.dispatch(sessionActions.showModal(modal_names.LOGOUT_MODAL));
    } else {
      this.props.dispatch(sessionActions.startLogoutClick());
    }
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

  hideModal() {
    this.props.dispatch(sessionActions.hideModal());
  }

  render() {
    if (sStorage.getItem({ key: 'isUserLoggedIn' }).item) {
      this.userIsActive = true;
    } else {
      this.userIsActive = false;
    }
    return (
      <Router history={createBrowserHistory}>
        <div className={this.userIsActive ? 'wrapper ' : 'wrapper signed-out'}>
          <Header headerSize={this.props.headerSize} logout={this.logoutUserHandler} />
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
                <Route
                  path="/changepassword"
                  render={() =>
                    <SignOnContainer signonType="changepassword" changePassword={this.handlers.changePassword} />}
                />
                <Route path="/patientsearch" component={SearchPatientContainer} />
                <Route path="/users" component={UserManagementContainer} />
                <Route path="/patientinfo" component={PatientTabsContainer} />
                <Route path="/searchandcalendar" component={SearchAndCalendarContainer} />
                <Route path="/confirm" component={ConfirmContainer} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>
          <Footer />
          <ModalConductor hideModal={this.hideModal} currentModal={this.props.currentModal} />
        </div>
      </Router>
    );
  }
}

App.propTypes = proptypes;

const mapStoreToProps = store => {
  //Select the specific Store items you would like here\
  const { headerSize } = store.Header;
  const { showSpinner, startError, user, sessionStarted, currentModal } = store.Session;
  //return state items to be added as props to the container
  return {
    headerSize,
    showSpinner,
    startError,
    user,
    sessionStarted,
    currentModal
  };
};
export default connect(mapStoreToProps)(App);
