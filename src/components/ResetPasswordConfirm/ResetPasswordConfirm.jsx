import React from 'react';
// import { Link } from 'react-router-dom';

import HgButton from '@hg/three-ui/HgButton';

import './reset-password-confirm.css';

const ResetPasswordConfirm = () => {
  return (
    <div className="reset-password-confirm-wrapper">
      <h2>RESET YOUR PASSWORD</h2>
      <h3>
        An email was sent to you with further instructions on<br />
        how to retrieve your password.
      </h3>

      <div className="check-confirm-icon" />

      <form>
        <HgButton text="SIGN IN" />
      </form>
    </div>
  );
};

ResetPasswordConfirm.propTypes = {};

export default ResetPasswordConfirm;
