import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

import './search-patient-notfound.css';


const _propTypes = {
  validationError: propTypes.string,
  enterNewPatient: propTypes.func.isRequired
};

const SearchPatientNotFound = (props) => {
  return (
    <div className="search-patient-notfound-wrapper">
      <form
        onSubmit={ e => {
          e.preventDefault();
          // TODO: potentially pull all info from PatientSearch and populate new form for creating new patient
          const userFirstName = escape(document.querySelector('#firstName').value);
          const userLastName = escape(document.querySelector('#lastName').value);
          const DOB_month = escape(document.querySelector('#birthMonth').value);
          const DOB_day = escape(document.querySelector('#birthDay').value);
          const DOB_year = escape(document.querySelector('#birthYear').value);
          const Moment_formatted = moment(`${DOB_month} ${DOB_day}, ${DOB_year}`).format();

          const userData = {
            userFirstName,
            userLastName,
            userDOB : Moment_formatted,
            tel: escape(document.querySelector('#phone').value),
            zip: escape(document.querySelector('#zipCode').value)
          };
          props.enterNewPatient(userData);
        }}
      >
        <div className="row sm-spacer">
          <div className="col-xs-8 no-margin">
            <h4 className="patient-notfound-msg">This patient is not found in hg smartaccess.</h4>
          </div>
          <div className="col-xs-4 no-margin">
            <button className="primary-btn long" type="submit">
              Enter New Patient
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

SearchPatientNotFound.propTypes = _propTypes;

export default SearchPatientNotFound;
