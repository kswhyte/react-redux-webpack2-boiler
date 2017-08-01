import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router';

import HgRow from '@hg/three-ui/HgRow';
import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
import HgButton from '@hg/three-ui/HgButton';

import isEmail from '../../helpers/isEmail';
import isLongEnough from '../../helpers/isLongEnough';
// import {HgReform} from '@hg/three-ui/HgReform';

import './sign-on.css';

const propTypes = {
    submitLogin: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

class SignOn extends Component {
    constructor(props){
      super(props);
      this.state = {
        errors: []
      }
    }

    render(){

      return (
        <div className="sign-on-wrapper">
          <h2>SIGN ON</h2>
          <h3>Please enter your email address and password below.</h3>

          <form
            onSubmit={(e) => {
                    e.preventDefault();
                    const loginEmail = document.getElementById("loginEmail").value;
                    const loginPassword = document.getElementById("loginPassword").value;
                    const emailValidation = isEmail(loginEmail);
                    const passwordValidation = isLongEnough(loginPassword, 6);
                    if (!emailValidation) {
                      console.log("Email Validation", emailValidation);
                    }
                    if (!passwordValidation) {
                      console.log("Password Validation", passwordValidation);
                    }
                    const data = {
                        loginEmail,
                        loginPassword
                    }
                    this.props.submitLogin(data);
                    // this.props.history.push('/')
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
            <Link to="/resetpassword">Forgot your password?</Link>
        </div>
      );
    }

}

SignOn.propTypes = propTypes;

const SignOnWithRouter = withRouter(SignOn);

export default SignOnWithRouter;
