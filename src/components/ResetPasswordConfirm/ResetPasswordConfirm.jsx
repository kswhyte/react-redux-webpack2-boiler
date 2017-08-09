import React from 'react';

import './reset-password-confirm.css';

const ResetPasswordConfirm = () => {
  return (
    <div className="reset-password-confirm-wrapper card">
      <img src="images/pattern-dots.png" className="dots-pattern" />
      <h2>RESET YOUR PASSWORD</h2>
      <div className="page-instructions col-xs-offset-3 col-xs-6">
        <p>
          An email was sent to you with further instructions on<br />
          how to retrieve your password.
        </p>
      </div>

      <div className="row lg-spacer">
        <div className="col-xs-offset-3 col-xs-6">
          <span className="lnr lnr-checkmark-circle" />
        </div>
      </div>

      <form>
        <div className="row sm-spacer">
          <div className="col-xs-offset-3 col-xs-6">
            <button className="primary">SIGN IN</button>
          </div>
        </div>
      </form>
    </div>
  );
};

ResetPasswordConfirm.propTypes = {};

export default ResetPasswordConfirm;
