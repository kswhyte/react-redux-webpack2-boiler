import React from 'react';
import { PropTypes } from 'prop-types';

import './search-patient.css';

const searchFormSubmit = (validCallback) => {
    const firstName = escape(document.querySelector('#firstName').value);
    const lastName = escape(document.querySelector('#lastName').value);
    const dateOfBirth = escape(document.querySelector('#dateOfBirth').value);
    const phone = escape(document.querySelector('#phone').value);
    const zipCode = escape(document.querySelector('#zipCode').value);
    const postData = { firstName, lastName, dateOfBirth, phone, zipCode };
    console.log("Post Data", postData);
    console.log("Valid call", validCallback);
    validCallback(postData);
}

const propTypes = {
    submitSearch: PropTypes.func,
}

const SearchPatient = props => {
    return (
        <div className="search-patient-block">
            <h2>Patient Information</h2>
            <hr className="line" />
            <form
                onSubmit={e => {
                  e.preventDefault();
                  searchFormSubmit(props.submitSearch);
                }}
            >
                <div className="row" >
                    <div className="col-sm-5">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" required />
                    </div>
                    <div className="col-sm-5">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" required />
                    </div>
                </div>
                <div className="row sm-spacer">
                    <div className="col-sm-3">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="text" id="dateOfBirth" required />
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

SearchPatient.propTypes = propTypes;

export default SearchPatient;