import React from 'react';

import './search-patient.css';

const SearchPatient = () => {
  return (
    <div className="search-patient-block">
      <h2>Patient Information</h2>
      <hr className="line" />
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" />
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input type="text" id="dateOfBirth" />
      <label htmlFor="phone">Phone</label>
      <input type="text" id="phone" />
      <label htmlFor="zipCode">Zip Code</label>
      <input type="text" id="zipCode" />
    </div>
  );
};

SearchPatient.propTypes = {};

export default SearchPatient;