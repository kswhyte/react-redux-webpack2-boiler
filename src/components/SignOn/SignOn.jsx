import React from 'react';
import { Route, Link } from 'react-router-dom';

import HgRow from '@hg/three-ui/HgRow';
import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
import HgButton from '@hg/three-ui/HgButton';

import ResetPassword from '../ResetPassword';

import './sign-on.css';

const SignOn = () => {
  return (
    <div className="sign-on-wrapper">
      <h2>SIGN ON</h2>
      <h3>Please enter your email address and password below.</h3>

      <form>
        <HgRow>
          <div className="col-sm-6">
            <TextInput label="USER NAME (EMAIL)" placeholder="Your Email Address &#42;" />
          </div>
          <div className="col-sm-6">
            <TextInput label="PASSWORD" placeholder="Your Password" />
          </div>
        </HgRow>
        <HgButton text="SIGN ON" />

        <label>
          <input type="checkbox" name="Remember Me" checked="" value="rememberUser" />
          Remember Me
        </label>
      </form>

      <Link to="/login/resetpassword">Forgot your password?</Link>
      <Route exact path="/login/resetpassword" component={ResetPassword} />
    </div>
  );
};

SignOn.propTypes = {};

export default SignOn;
