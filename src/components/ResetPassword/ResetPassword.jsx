import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import isEmail from '../../helpers/isEmail';

import './reset-password.css';

const propTypes = {
  resetPassword: PropTypes.func.isRequired,
  validationError: PropTypes.func,
  validationMessage: PropTypes.string
};

const ResetPassword = props => {
  return (
    <div className="reset-password-wrapper card">
      <img src="images/pattern-dots.png" className="dots-pattern" />
      <div className="row">
        <h2>RESET YOUR PASSWORD</h2>
        <div className="page-instructions col-xs-offset-3 col-xs-6">
          <p>Just enter your email and we&#39;ll send you instructions.</p>
        </div>
      </div>

      {props.validationMessage &&
        <div className="sm-spacer validation-error">
          <h5>
            {props.validationMessage}
          </h5>
        </div>}

      <form
        onSubmit={e => {
          e.preventDefault();
          const userEmail = escape(document.querySelector('#reset-email').value);
          const emailValidation = isEmail(userEmail);
          if (!emailValidation) {
            props.validationError('The email entered is not recognized. Please enter a valid email address.');
            return false;
          }
          // TODO: setup an action and reducer to send out an email to to user to handle reseting the users password via a unique link
          // ...something like the following...
          // const userData = {
          //   userEmail
          // };
          // this.props.submitRecoveryEmail(userData);
          {
            /* TODO: for RESET-btn, onSubmit sends a dispatch to
            1. update client credentials
            2. reroute to PassWordConfirm component */
          }
          props.resetPassword;
        }}
      >
        <div className="row lg-spacer">
          <div className="col-sm-offset-3 col-sm-6 input-row">
            <input
              id="reset-email"
              className={props.validationMessage ? 'input-error form-group' : 'form-group'}
              type="text"
              placeholder="Your Email Address"
              label="Your Email"
              required
            />
          </div>
        </div>
        <div className="row lg-spacer">
          <div className="col-xs-offset-3 col-xs-6">
            <button className="primary-btn" type="submit">
              RESET PASSWORD
            </button>
          </div>
        </div>
      </form>

      <div className="row back-to-sign-in-row">
        <Link to="/login">Back to Sign in</Link>
      </div>
    </div>
  );
};

ResetPassword.propTypes = propTypes;

export default ResetPassword;
