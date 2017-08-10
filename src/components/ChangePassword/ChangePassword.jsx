import React from 'react';
import { PropTypes } from 'prop-types';

import './change-password.css';

const propTypes = {
  submitLogin: PropTypes.func.isRequired,
  validationError: PropTypes.func,
  validationMessage: PropTypes.string
};

const ChangePassword = () => {
  return (
    <div className="change-password-wrapper card">
        <img src="images/pattern-dots.png" className="dots-pattern" />
        <div className="row">
          <h2>UPDATE PASSWORD</h2>
          <div className="page-instructions col-xs-offset-4 col-xs-4">
            <p>Please enter and confirm your new password below.</p>
          </div>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log("Ze Submission");
          }}
        >
          <div className="row md-spacer">
            <div className="col-sm-offset-1 col-sm-5 input-row">
              <label forHtml="loginChangePassword">NEW PASSWORD</label>
              <input
                id="loginChangePassword"
                type="password"
                placeholder="Your New Password"
                required
              />
            </div>
            <div className="col-sm-5 input-row">
              <label forHtml="loginChangePasswordConfirm">CONFIRM PASSWORD</label>
              <input
                id="loginChangePasswordConfirm"
                type="password"
                placeholder="Confirm Password"
                label="Confirm Password"
                required
              />
            </div>
          </div>
          <div className="row lg-spacer">
            <div className="col-xs-offset-3 col-xs-6">
              <button className="primary-btn">
                CHANGE PASSWORD
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}

ChangePassword.propTypes = propTypes;

export default ChangePassword;