import React from 'react';
// import { PropTypes } from 'prop-types';
// import Moment from 'moment';

import './patient-results.css';

const propTypes = {};

const tempPeeps = [{
    patientId: 1,
    firstName: 'Bro',
    lastName: 'Beans',
    dateOfBirth: 'Feb 27, 1000',
    phone: '720-771-7277',
    zipCode: '80202',
    modified: 'Jun 16, 2017'
},{
    patientId: 2,
    firstName: 'Bro2',
    lastName: 'Beans',
    dateOfBirth: 'Feb 27, 1000',
    phone: '720-771-7277',
    zipCode: '80202',
    modified: 'Jun 16, 2017'
}]

const PatientResults = () => {
  return (
    <div className="patient-results-wrapper">
        <h3>Available Patient Records</h3>
        <table className="appt-tables">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Date of Birth</th>
              <th>Phone</th>
              <th>Zip</th>
              <th>Modified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tempPeeps.map(person => {
              return (
                <tr key={person.patientId} >
                  <td>{person.firstName} {person.lastName}</td>
                  <td>{person.dateOfBirth}</td>
                  <td>{person.phone}</td>
                  <td>{person.zipCode}</td>
                  <td>{person.modified}</td>
                  <td><button>VIEW THIS RECORD</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
};

PatientResults.propTypes = propTypes;

export default PatientResults;
