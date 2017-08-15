import React from 'react';

import './search-patient.css';

const SearchPatient = () => {
  return (
    <div className="search-patient-block">
        <h2>Patient Information</h2>
        <hr className="line" />
        <form>
            <div className="row" >
                <div className="col-sm-5">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" />
                </div>
                <div className="col-sm-5">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" />
                </div>
            </div>
            <div className="row sm-spacer">
                <div className="col-sm-3">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="text" id="dateOfBirth" />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" />
                </div>
                <div className="col-sm-3">
                    <button>Find Patient Record</button>
                </div>
            </div>
        </form>
    </div>
  );
};

SearchPatient.propTypes = {};

export default SearchPatient;