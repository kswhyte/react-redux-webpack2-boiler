import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import PatientInfo from '../PatientInfo';
import PatientAppointments from '../PatientAppointments';
import PatientNotes from '../PatientNotes';

import './patient-tabs.css';

const propTypes = {
    children: PropTypes.object,
    patientInfo: PropTypes.object,
    submitPatientInfo:PropTypes.func
  };

let tabs = {
  general : 'GENERAL',
  appointments : 'APPOINTMENTS',
  notes :'NOTES'
}

export class PatientTabs extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      currentTab : tabs.general
    }

    this.handleTabState = this.handleTabState.bind(this);
  }

  handleTabState(e) {
    let className = e.currentTarget.className;
    if(className.match(/general/)){
      this.setState({currentTab: tabs.general})
    } else if(className.match(/appointments/)){
      this.setState({currentTab: tabs.appointments})
    } else if(className.match(/notes/)) {
      this.setState({currentTab: tabs.notes})
    }
  }

  render(){
    return (
      <div className="patient-tabs-wrapper">
        <div className="row sm-spacer">
          <ul className="nav nav-tabs">
            <li onClick={this.handleTabState} className={`general-info-tab ${this.state.currentTab === tabs.general ? 'active' : ''}`}>
              <Link to="/patientinfo/generalinfo">General Info</Link>
            </li>
            <li onClick={this.handleTabState} className={`appointments-tab ${this.state.currentTab === tabs.appointments ? 'active' : ''}`}>
              <Link to="/patientinfo/appointments">PatientName Appointments</Link>
            </li>
            <li onClick={this.handleTabState} className={`notes-tab ${this.state.currentTab === tabs.notes ? 'active' : ''}`}>
              <Link to="/patientinfo/notes">Notes</Link>
            </li>
          </ul>

          <div className="tabs-line" />
          <div className="break-line" />
         
          <Route
            exact
            path="/patientinfo/generalinfo"
            render={() => <PatientInfo generalInfo={this.props.patientInfo.generalInfo} submitPatientInfo={this.props.submitPatientInfo} />}
          />
          <Route
            exact
            path="/patientinfo/appointments"
            render={() => <PatientAppointments appointments={this.props.patientInfo.appointments} />}
          />
          <Route exact path="/patientinfo/notes" render={() => <PatientNotes notes={this.props.patientInfo.notes} />} />
        </div>
      </div>
    )
  }
}

PatientTabs.propTypes = propTypes;

export default PatientTabs;