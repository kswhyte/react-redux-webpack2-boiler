/*eslint no-unused-vars: */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './navigation.css';

const Navigation = props => {
  Navigation.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object
  };

  return (
    <nav className="navigation-wrapper">
      <Link to="/login">SignOn</Link>
      <Link to="/patientsearch">Search for Patients</Link>
      <Link to="/users">User Management Page</Link>
      <Link to="/patientinfo">Confirm Patient Info</Link>
      <Link to="/searchandcalendar">Search and Calendar</Link>
      <Link to="/confirm">Confirm</Link>
    </nav>
  );
};

export default Navigation;
