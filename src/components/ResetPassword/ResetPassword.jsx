import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './reset-password.css';

const ResetPassword = props => {
  return (
    <div className="reset-password-wrapper card">
      <img src="images/pattern-dots.png" className="dots-pattern" />
      <h2>RESET YOUR PASSWORD</h2>
      <div className="page-instructions col-xs-offset-3 col-xs-6">
        <p>Just enter your email and we&#39;ll send you instructions.</p>
      </div>

      <form>
        <div className="row lg-spacer">
          <div className="col-sm-offset-3 col-sm-6 input-row">
            <input
              id="reset-email"
              className="form-group hg-input v2"
              type="text"
              placeholder="Your Email Address"
              label="Your Email"
              required
            />
          </div>
        </div>
        {/* TODO: for RESET-btn, onClick sends a dispatch to
                  1. update client credentials
                  2. reroute to PassWordConfirm component */}
        <div className="row lg-spacer">
          <div className="col-xs-offset-3 col-xs-6">
            <button className="primary" onClick={props.resetPassword}>
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

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired
};

export default ResetPassword;
