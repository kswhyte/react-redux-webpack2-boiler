import React from 'react';

import { Route, Link } from 'react-router-dom';

import HgButton from '@hg/three-ui/HgButton';
import TextInput from '@hg/three-ui/HgInputsV2/TextInput';

import './sign-on.css';

const SignOn = () => {
  return (
    <div className="sign-on-wrapper">
      <h1>Sign On</h1>
      <h5>Please enter your email address and password below</h5>
        <form
            statePath="session"
        >
            <TextInput
                className="form-group"
                placeholder={'Your Email Address'}
                label="User Name (Email)"
                required={true}
            />
            <TextInput
                className="form-group"
                placeholder={'Password'}
                label="Your Password"
                required={true}
            />
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

SignOn.propTypes = {};

export default SignOn;
