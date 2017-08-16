import React from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'moment';

import { months, days, years } from '../../helpers/dateOptions';

import './search-patient.css';

const searchFormSubmit = (validCallback) => {
    const firstName = escape(document.querySelector('#firstName').value);
    const lastName = escape(document.querySelector('#lastName').value);
    const birthMonth = escape(document.querySelector('#birthMonth').value);
    const birthDay = escape(document.querySelector('#birthDay').value);
    const birthYear = escape(document.querySelector('#birthYear').value);
    const phone = escape(document.querySelector('#phone').value);
    const zipCode = escape(document.querySelector('#zipCode').value);
    const birthDate = Moment(`${birthMonth}-${birthDay}-${birthYear}`).format();
    console.log("Birth Date??", birthDate);
    const postData = { firstName, lastName, birthDate, phone, zipCode };
    validCallback(postData);
}

const propTypes = {
    submitSearch: PropTypes.func,
}

const mapOptions = (options) => {
    {
      return options.map(option =>
        <option value={option.id} key={option.id} label={option.text}>
          {option.text}
        </option>
      );
    }
}

const SearchPatient = props => {
    return (
        <div className="search-patient-block">
            <h2>Patient Information</h2>
            <hr className="sm-line" />
            <form
                onSubmit={e => {
                  e.preventDefault();
                  searchFormSubmit(props.submitSearch);
                }}
            >
                <div className="row" >
                    <div className="col-sm-5">
                        <label htmlFor="firstName">First Name &#42;</label>
                        <input type="text" id="firstName" required />
                    </div>
                    <div className="col-sm-5">
                        <label htmlFor="lastName">Last Name &#42;</label>
                        <input type="text" id="lastName" required />
                    </div>
                </div>
                <div className="row sm-spacer">
                   <div className="col-sm-2 no-margin">
                      <label>DATE OF BIRTH &#42;</label>
                      <select
                        id="birthMonth"
                        className="select-dropdown form-control"
                        required
                      >
                        {mapOptions(months)}
                      </select>
                    </div>

                    <div className="col-sm-1 no-margin">
                      <label />
                      <select
                        id="birthDay"
                        className="select-dropdown dropdown-affiliate form-control"
                        required
                      >
                        {mapOptions(days)}
                      </select>
                    </div>

                    <div className="col-sm-1 no-margin">
                      <label />
                      <select
                        id="birthYear"
                        className="select-dropdown dropdown-affiliate form-control"
                        required
                      >
                        {mapOptions(years)}
                      </select>
                    </div>
                    <div className="col-sm-3 no-margin">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" />
                    </div>
                    <div className="col-sm-2 no-margin">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" id="zipCode" />
                    </div>
                    <div className="col-sm-3 no-margin">
                        <button>FIND PATIENT RECORD</button>
                    </div>
                </div>
            </form>
            <hr className="line" />
        </div>
    );
};

SearchPatient.propTypes = propTypes;

export default SearchPatient;