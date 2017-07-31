import React from 'react';
import { Route, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import HgRow from '@hg/three-ui/HgRow';
import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
import HgButton from '@hg/three-ui/HgButton';

import ResetPassword from '../ResetPassword';
// import {HgReform} from '@hg/three-ui/HgReform';

import './sign-on.css';

const propTypes = {
    submitLogin: PropTypes.func
}

const SignOn = (props) => {
  return (
    <div className="sign-on-wrapper">
      <h2>SIGN ON</h2>
      <h3>Please enter your email address and password below.</h3>

      <form
        onSubmit={(e) => {
                e.preventDefault();
                const loginEmail = document.getElementById("loginEmail").value;
                const loginPassword = document.getElementById("loginPassword").value;
                const data = {
                    loginEmail,
                    loginPassword
                }
                props.submitLogin(data);
            }}
        >
        <HgRow>
          <div className="col-sm-6">
               <TextInput
                    id="loginEmail"
                    className="form-group"
                    placeholder={'Your Email Address'}
                    label="User Name (Email)"
                    required={true}
                />
          </div>
          <div className="col-sm-6">
            <TextInput
                id="loginPassword"
                className="form-group"
                placeholder={'Password'}
                label="Your Password"
                required={true}
            />
        </div>
        </HgRow>
            <HgButton
                className="primary" text="Sign On"
            />
            <label>Remember Me?</label>
            <input
                onClick={() => {console.log("Remember Me")}}
                id="checkBox"
                type="checkbox" />

        </form>
        <Link to="/login/resetpassword">Forgot your password?</Link>
        <Route exact path="/login/resetpassword" component={ResetPassword} />
    </div>
  );
};

SignOn.propTypes = propTypes;

export default SignOn;
