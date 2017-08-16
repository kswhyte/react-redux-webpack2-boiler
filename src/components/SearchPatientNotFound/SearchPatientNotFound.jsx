import React from 'react';

import './search-patient-notfound.css';

const SearchPatientNotFound = () => {
  return (
    <div className="search-patient-notfound-wrapper">
      <form
        onSubmit={e => {
          e.preventDefault();
          // TODO: potentially pull all info from PatientSearch and populate new form for creating new patient
          // const userFirstName = escape(document.querySelector('#first-name').value);
          // const userLastName = escape(document.querySelector('#last-name').value);
          // props.validationError('');
          // const userData = {
          // firstName,
          // lastName
          // };
          // props.enterNewPatient(userData);
        }}
      >
        <div className="row sm-spacer">
          <div className="col-xs-8 no-margin">
            <h3 className="patient-notfound-msg">This patient is not found in hg smartaccess.</h3>
          </div>
          <div className="col-xs-4 no-margin">
            <div className="new-patient-icon" />
            <button className="primary-btn" type="submit">
              {/* <i className="fa fa-plus-circle" aria-hidden="true" />
              <i className="fa fa-user" aria-hidden="true" /> */}
              Enter New Patient
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

SearchPatientNotFound.propTypes = {};

export default SearchPatientNotFound;
