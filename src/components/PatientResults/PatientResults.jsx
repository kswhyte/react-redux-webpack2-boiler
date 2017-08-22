import React from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'moment';

import './patient-results.css';

const propTypes = {
    patientSearchResults: PropTypes.array
};

const PatientResults = (props) => {
  return (
    <div className="patient-results-wrapper sm-spacer">
        <table className="patient-table">
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
            {props.patientSearchResults.map(person => {
              return (
                <tr key={person.patientId} >
                  <td>{person.firstName} {person.lastName}</td>
                  <td>{Moment(person.dateOfBirth).format('MMMM Do, YYYY')}</td>
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
