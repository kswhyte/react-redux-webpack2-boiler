import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

  Navigation.propTypes = {
    title : PropTypes.string,
    children : PropTypes.object
  };

  const check = () => {
    console.log(props)
  }
  check();
    return (
        <div className="navigation-wrapper">
            <h1>Navigation</h1>
            <Link to="/login">Login</Link>
            <Link to="/patientsearch">Search for Patients</Link>
            <Link to="/users">User Management Page</Link>
            <Link to="/patientinfo">Confirm Patient Info</Link>
            <Link to="/searchandcalendar">Search and Calendar</Link>
            <Link to="/confirm">Confirm</Link>
        </div>
    );
};


export default Navigation;
