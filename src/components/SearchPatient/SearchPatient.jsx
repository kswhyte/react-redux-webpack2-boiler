import React from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'moment';

import { months, days, years } from '../../helpers/dateOptions';
import isZipCode from '../../helpers/isZipCode';
import isPhone from '../../helpers/isPhone';

import './search-patient.css';

const searchFormSubmit = (validCallback, errorCallback) => {
  const firstName = escape(document.querySelector('#firstName').value);
  const lastName = escape(document.querySelector('#lastName').value);
  const birthMonth = escape(document.querySelector('#birthMonth').value);
  const birthDay = escape(document.querySelector('#birthDay').value);
  const birthYear = escape(document.querySelector('#birthYear').value);
  const phone = escape(document.querySelector('#phone').value);
  const zipCode = escape(document.querySelector('#zipCode').value);
  const birthDate = Moment(`${birthMonth}-${birthDay}-${birthYear}`).format();
  if ((isZipCode(zipCode) || !zipCode) && (isPhone(phone) || !phone)) {
    const postData = { firstName, lastName, birthDate, phone, zipCode };
    validCallback(postData);
  } else if (!isPhone(phone)) {
    errorCallback('PHONE');
  } else if (!isZipCode(zipCode)) {
    errorCallback('ZIP');
  }
};

const propTypes = {
  submitSearch: PropTypes.func,
  validationError: PropTypes.string,
  showError: PropTypes.func
};

const mapOptions = options => {
  {
    return options.map(option =>
      <option value={option.id} key={option.id} label={option.text}>
        {option.text}
      </option>
    );
  }
};

const SearchPatient = props => {
  return (
    <div className="search-patient-block">
      <h3>Patient Information</h3>
      <hr className="sm-line" />
      <form
        onSubmit={e => {
          e.preventDefault();
          searchFormSubmit(props.submitSearch, props.showError);
        }}
      >
        <div className="row">
          <div className="col-sm-5">
            <label htmlFor="firstName">First Name &#42;</label>
            <input type="text" id="firstName" placeholder="First Name" required />
          </div>
          <div className="col-sm-5">
            <label htmlFor="lastName">Last Name &#42;</label>
            <input type="text" id="lastName" placeholder="Last Name" required />
          </div>
        </div>
        <div className="row sm-spacer">
          <div className="col-sm-2 no-margin">
            <label>DATE OF BIRTH &#42;</label>
            <select id="birthMonth" className="select-dropdown form-control" required>
              {mapOptions(months)}
            </select>
          </div>

          <div className="col-sm-1 no-margin">
            <label />
            <select id="birthDay" className="select-dropdown dropdown-affiliate form-control" required>
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
          <div className="col-sm-2 no-margin">
              <label htmlFor="phone">PHONE</label>
              <input type="tel" id="phone" placeholder="(xxx) xxx-xxxx" />
              {
                  (props.validationError === 'PHONE') && (
                      <div className="error-title">Invalid Phone</div>
                  )
              }
          </div>
          <div className="col-sm-2 no-margin">
              <label htmlFor="zipCode">ZIP CODE</label>
              <input type="text" id="zipCode" placeholder="Zip Code" />
              {
                  (props.validationError === 'ZIP') && (
                      <h5>Invalid Zip Code</h5>
                  )
              }
          </div>
          <div className="col-sm-4 no-margin">
              <button className="primary-btn long">FIND PATIENT RECORD</button>
          </div>
        </div>
      </form>
    </div>
  );
};

SearchPatient.propTypes = propTypes;

export default SearchPatient;
