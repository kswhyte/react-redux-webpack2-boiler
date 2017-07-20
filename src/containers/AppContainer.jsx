import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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


class App extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        // this.props.init();
    }

    render() {
        return (
        <BrowserRouter>
          <div className="wrapper">
            <Header />
            <section className="body-wrapper">
              <Nav />
              <div className="router-wrapper">
                <Switch>
                    <Route exact path="/" component={ Welcome } />
                    <Route exact path="/login" component={ LoginContainer } />
                    <Route exact path="/patientsearch" component={ SearchPatientContainer } />
                    <Route exact path="/users" component={ UserManagementContainer } />
                    <Route exact path="/patientinfo" component={ ConfirmPatientInfoContainer } />
                    <Route exact path="/searchandcalendar" component={ SearchAndCalendarContainer } />
                    <Route exact path="/confirm" component={ ConfirmContainer } />
                    <Route component={ NotFound } />
                </Switch>
              </div>
            </section>
            <Footer />
          </div>
        </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {

    //Select the specific state items you would like here
    const { test } = state;

    //return state items to be added as props to the container
    return {
        test
    }
}

export default connect(mapStateToProps)(App);
