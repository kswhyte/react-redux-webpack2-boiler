import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Navigation';
import Welcome from '../components/Welcome';
import NotFound from '../components/NotFound';

import LoginContainer from './LoginContainer';
import SearchPatientContainer from './SearchPatientContainer';
import UserManagementContainer from './UserManagementContainer';
import ConfirmPatientInfoContainer from './ConfirmPatientInfoContainer';
import SearchAndCalendarContainer from './SearchAndCalendarContainer';
import ConfirmContainer from './ConfirmContainer';

import { toggle_header } from '../actions/SessionActions';
import sessionActions from '../actions/SessionActions';

let createHandlers = function(dispatch) {
  let startSessionClick = function(node, data) {
    dispatch(sessionActions.startSessionClick(data))
  };

  return {
    startSessionClick,
    // other handlers
  };
}

const proptypes = {
  dispatch: PropTypes.func,
  headerSize: PropTypes.string
};

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleHeaderSize = 'full';
    this.headerToggleTolerance = 60;
    this.props = props;
    this.handlers = createHandlers(this.props.dispatch);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > this.headerToggleTolerance && this.toggleHeaderSize !== 'small') {
        this.toggleHeaderSize = 'small';
        console.log(`toggle -full :  ${this.toggleHeaderSize} : ${window.scrollY}`);

        this.props.dispatch(toggle_header(this.toggleHeaderSize));
      } else if (window.scrollY < this.headerToggleTolerance && this.toggleHeaderSize !== 'full') {
        this.toggleHeaderSize = 'full';
        console.log(`toggle -full :  ${this.toggleHeaderSize} : ${window.scrollY}`);

        this.props.dispatch(toggle_header(this.toggleHeaderSize));
      }
    });
  }

  componentWillMount() {
    // this.props.init();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header headerSize={this.props.headerSize} />
          <section className="body-wrapper">
            <Nav />
            <div className="router-wrapper">
              <Switch>
                <Route exact path="/" render={() => <Welcome startSessionClick={this.handlers.startSessionClick} />}  />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/patientsearch" component={SearchPatientContainer} />
                <Route exact path="/users" component={UserManagementContainer} />
                <Route exact path="/patientinfo" component={ConfirmPatientInfoContainer} />
                <Route exact path="/searchandcalendar" component={SearchAndCalendarContainer} />
                <Route exact path="/confirm" component={ConfirmContainer} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = proptypes;

const mapStateToProps = state => {
  //Select the specific state items you would like here
  const { test } = state;
  const { headerSize } = state.Session;
  console.log('test ---', headerSize);

  //return state items to be added as props to the container
  return {
    test,
    headerSize
  };
};

export default connect(mapStateToProps)(App);
