import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import HgRow from '@hg/three-ui/HgRow';
import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
import HgButton from '@hg/three-ui/HgButton';

import './reset-password.css';

const ResetPassword = props => {
  return (
    <div className="reset-password-wrapper">
      <h2>RESET YOUR PASSWORD</h2>
      <h3>Just enter your email and we&#39;ll send you instructions.</h3>

      <form>
        <HgRow>
          <div className="col-sm-6">
            <TextInput label="Your Email" placeholder="Your Email" />
          </div>
        </HgRow>
        <HgButton onClick={props.resetPassword} text="RESET PASSWORD" />
        {/* TODO: for RESET-btn, onClick sends a dispatch to
                  1. update client credentials
                  2. reroute to PassWordConfirm component */}
        <HgButton text="RESET PASSWORD" />
      </form>

      <Link to="/login">Back to Sign in</Link>
    </div>
  );
};

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired
};

export default ResetPassword;
