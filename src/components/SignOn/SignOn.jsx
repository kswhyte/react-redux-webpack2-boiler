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
      loginEmail: '',
      rememberMeValue: 'off'
    };
    this.rememberMe = this.rememberMe.bind(this);
  }

  componentDidMount() {
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail !== null && storedUserEmail !== undefined && storedUserEmail !== '') {
      this.setState({
        loginEmail: storedUserEmail,
        rememberMeValue: 'on'
      });
    }
  }

  rememberMe() {
    let userEmailValue = escape(document.querySelector('#loginEmail').value);
    if (this.state.rememberMeValue === 'off') {
      this.setState({ rememberMeValue: 'on' });
      localStorage.setItem('userEmail', userEmailValue);
    } else {
      this.setState({ rememberMeValue: 'off' });
      localStorage.removeItem('userEmail');
    }
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
            const loginEmail = escape(document.querySelector('#loginEmail').value);
            const loginPassword = escape(document.querySelector('#loginPassword').value);
            const emailValidation = isEmail(loginEmail);
            if (!emailValidation) {
              this.props.validationError(
                'The information entered is not recognized. Please enter a valid username and password.'
              );
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
                className={
                  this.props.validationMessage ? 'input-error form-group hg-input v2' : 'form-group hg-input v2'
                }
                value={this.state.loginEmail}
                onChange={e => {
                  this.setState({ loginEmail: e.target.value });
                }}
                type="text"
                id="loginEmail"
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
          <div className="row lg-spacer">
            <div className="col-xs-offset-3 col-xs-6">
              <button className="primary">SIGN ON</button>
              <div className="row remember-me-row">
                <input
                  className="remember-checkbox"
                  checked={this.state.rememberMeValue === 'on' ? 'checked' : ''}
                  onClick={this.rememberMe}
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
