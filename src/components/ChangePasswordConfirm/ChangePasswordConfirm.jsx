import React from 'react';
import { Link } from 'react-router-dom';

import './change-password-confirm.css';

const ChangePasswordConfirm = () => {
  return (
    <div className="change-password-confirm-wrapper card">
      <img src="images/pattern-dots.png" className="dots-pattern" />
      <h2>PASSWORD UPDATED</h2>
      <div className="page-instructions md-spacer col-xs-offset-3 col-xs-6">
        <p>
          Your password has been updated. Follow the link below to login with your updated credentials.
        </p>
      </div>

      <div className="row lg-spacer">
        <div className="col-xs-offset-3 col-xs-6 sm-spacer">
          <span className="lnr lnr-checkmark-circle" />
        </div>
      </div>

      <form>
        <div className="row sm-spacer">
          <div className="col-xs-offset-3 col-xs-6 sm-spacer">
            <Link to="/login" className="primary-btn btn-link">
              SIGN IN
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

ChangePasswordConfirm.propTypes = {};

export default ChangePasswordConfirm;
