import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import isEmail from '../../helpers/isEmail';

import './sign-on.css';

const propTypes = {
  submitLogin: PropTypes.func.isRequired,
  validationError: PropTypes.func,
  validationMessage: PropTypes.string
};

class SignOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: ''
    };
  }

  componentDidMount() {
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail !== '') {
      this.setState({ loginEmail: storedUserEmail });
    }
  }

  storeEmail(e) {
    this.setState({ loginEmail: e.target.value });
  }

  render() {
    return (
      <div className="sign-on-wrapper">
        <img src="images/pattern-dots.png" className="dots-pattern" />
        <div className="row">
          <h2>SIGN ON</h2>
          <div className="page-instructions col-xs-offset-4 col-xs-4">
            <p>Please enter your email address and password below.</p>
          </div>
        </div>
        {this.props.validationMessage &&
          <div className="sm-spacer validation-error">
            <h5>
              {this.props.validationMessage}
            </h5>
          </div>}
        <form
          onSubmit={e => {
            e.preventDefault();
            const loginEmail = escape(document.getElementById('loginEmail').value);
            const loginPassword = escape(document.getElementById('loginPassword').value);
            const emailValidation = isEmail(loginEmail);
            if (!emailValidation) {
              this.props.validationError('Must enter a valid email.');
              return;
            }
            const data = {
              loginEmail,
              loginPassword
            };
            this.props.submitLogin(data);
          }}
        >
          <div className="row md-spacer">
            <div className="col-sm-6 input-row">
              <label forHtml="loginEmail">USER NAME (EMAIL)</label>
              <input
                value={this.state.loginEmail}
                onChange={this.storeEmail}
                id="loginEmail"
                className="form-group hg-input v2"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="col-sm-6 input-row">
              <label forHtml="loginPassword">PASSWORD</label>
              <input
                id="loginPassword"
                type="password"
                className="form-group hg-input v2"
                placeholder="Your Password"
                label="Your Password"
                required
              />
            </div>
          </div>
          <label>Remember Me</label>
          <div className="row lg-spacer">
            <div className="col-xs-offset-3 col-xs-6">
              <button className="primary">SIGN ON</button>
              <div className="row remember-me-row">
                <input
                  className="remember-checkbox"
                  onClick={() => {
                    const loginEmail = escape(document.getElementById('loginEmail').value);
                    localStorage.setItem('userEmail', loginEmail);
                  }}
                  id="remember-checkbox"
                  type="checkbox"
                />
                <label htmlFor="remember-checkbox">Remember Me</label>
              </div>
              <div className="row forgot-password-row">
                <Link to="/resetpassword">Forgot your password?</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SignOn.propTypes = propTypes;

export default SignOn;
