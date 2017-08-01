import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router';

import TextInput from '@hg/three-ui/HgInputsV2/TextInput';
import HgButton from '@hg/three-ui/HgButton';

import isEmail from '../../helpers/isEmail';
import isLongEnough from '../../helpers/isLongEnough';
// import {HgReform} from '@hg/three-ui/HgReform';

import './sign-on.css';

const propTypes = {
  submitLogin: PropTypes.func.isRequired,
  validationError: PropTypes.func,
  validationMessage: PropTypes.string,
  history: PropTypes.object.isRequired
};

const SignOn = (props) => {
  return (
    <div className="sign-on-wrapper">
        <div className="row">
            <h2>SIGN ON</h2>
            <div className="page-instructions col-xs-offset-4 col-xs-4">
                <h4>Please enter your email address and password below.</h4>
            </div>
        </div>
        {
            (props.validationMessage) && (
                <div className="sm-spacer validation-error">
                    <h5>{props.validationMessage}</h5>
                </div>
            )
        }
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const loginEmail = document.getElementById("loginEmail").value;
                const loginPassword = document.getElementById("loginPassword").value;
                const emailValidation = isEmail(loginEmail);
                if (!emailValidation) {
                  console.log("Email Validation", emailValidation);
                  props.validationError("Must enter a valid email.");
                  return;
                }
                const data = {
                    loginEmail,
                    loginPassword
                }
                props.submitLogin(data);
                this.props.history.push('/')
            }}
          >
            <div className="row md-spacer">
                <div className="col-sm-6 input-row">
                   <TextInput
                        id="loginEmail"
                        className="form-group"
                        placeholder={'Your Email Address'}
                        label="User Name (Email)"
                        required={true}
                    />
                </div>
                <div className="col-sm-6 input-row">
                    <input
                        id="loginPassword"
                        type="password"
                        className="form-group hg-input v2"
                        placeholder={'Your Password'}
                        label="Your Password"
                        required={true}
                    />
                </div>
            </div>
            <div className="row lg-spacer">
                <div className="col-xs-offset-3 col-xs-6 flex-column">
                    <HgButton
                        className="primary"
                        text="SIGN ON"
                    />
                    <div className="row sm-spacer">
                        <div
                            className="remember-checkbox">
                            <div className="checkaroo">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                        </div>
                        <label>Remember Me</label>
                    </div>
                    <div className="row md-spacer forgot-password">
                        <Link to="/login/resetpassword">Forgot your password?</Link>
                    </div>
                </div>
            </div>
        </form>
    </div>
  );
};

SignOn.propTypes = propTypes;

const SignOnWithRouter = withRouter(SignOn);

export default SignOnWithRouter;
