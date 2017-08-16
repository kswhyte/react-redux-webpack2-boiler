import React from 'react';

import SearchPatientNotFound from '../SearchPatientNotFound';

import './search-patient.css';

const SearchPatient = () => {
  return (
    <div className="search-patient-block">
      <h2>Patient Information</h2>
      <hr className="line" />

      <SearchPatientNotFound />
    </div>
  );
};

SearchPatient.propTypes = {};

export default SearchPatient;
