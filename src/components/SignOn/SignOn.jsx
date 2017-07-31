import React from 'react';
import { Route, Link } from 'react-router-dom';

import HgRow from '@hg/three-ui/HgRow';
import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
import HgButton from '@hg/three-ui/HgButton';

import ResetPassword from '../ResetPassword';

import HgButton from '@hg/three-ui/HgButton';
import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
// import {HgReform} from '@hg/three-ui/HgReform';

import './sign-on.css';

const SignOn = () => {
  return (
    <div className="sign-on-wrapper">
      <h2>SIGN ON</h2>
      <h3>Please enter your email address and password below.</h3>

      <form>
        <HgRow>
          <div className="col-sm-6">
               <TextInput
                    className="form-group"
                    placeholder={'Your Email Address'}
                    label="User Name (Email)"
                    required={true}
                />
          </div>
          <div className="col-sm-6">
            <TextInput
                className="form-group"
                placeholder={'Password'}
                label="Your Password"
                required={true}
            />
          </div>
        </HgRow>
        <HgButton text="SIGN ON" />

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
