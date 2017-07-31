import React from 'react';
import { Route, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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
        <div className="row sm-spacer">
            <h2>SIGN ON</h2>
            <div className="page-instructions col-xs-offset-4 col-xs-4">
                <h4>Please enter your email address and password below.</h4>
            </div>
        </div>
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
            <div className="row md-spacer">
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
                        text="Sign On"
                    />
                    <div className="row sm-spacer">
                        <div
                            className="remember-checkbox">
                            <div className="checkaroo">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                        </div>
                        <label>Remember Me?</label>
                    </div>
                    <div className="row md-spacer forgot-password">
                        <Link to="/login/resetpassword">Forgot your password?</Link>
                        <Route exact path="/login/resetpassword" component={ResetPassword} />
                    </div>
                </div>
            </div>
        </form>
    </div>
  );
};

SignOn.propTypes = propTypes;

export default SignOn;
