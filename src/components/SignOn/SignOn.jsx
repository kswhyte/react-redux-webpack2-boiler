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
      rememberMeValue: 'off',
      loginAttempts: 0
    };
    this.handleInputEmailChange = this.handleInputEmailChange.bind(this);
    this.rememberMe = this.rememberMe.bind(this);
    this.checkLoginAttempts = this.checkLoginAttempts.bind(this);
  }

  componentDidMount() {
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail !== null && storedUserEmail !== undefined && storedUserEmail !== '') {
      this.setState({
        loginEmail: storedUserEmail,
        rememberMeValue: 'on',
        loginAttempts: 0
      });
    }
  }

  handleInputEmailChange(e) {
    this.setState({ loginEmail: e.target.value });
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

  checkLoginAttempts() {
    if (this.state.loginAttempts < 2) {
      let updatedCount = this.state.loginAttempts;
      updatedCount += 1;
      this.setState({ loginAttempts: updatedCount });
    } else if (this.state.loginAttempts >= 2) {
      this.setState({ loginAttempts: 0 });
    }
  }

  render() {
    return (
      <div className="sign-on-wrapper card">
        <img src="images/pattern-dots.png" className="dots-pattern" />
        <div className="row">
          <h2>SIGN ON</h2>
          <div className="page-instructions col-xs-offset-4 col-xs-4">
            <p>Please enter your email address and password below.</p>
          </div>
        </div>
        <div className="sm-spacer validation-error">
          {this.props.validationMessage &&
            <h5>
              {this.props.validationMessage}
            </h5>}
        </div>

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
              return false;
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
                id="loginEmail"
                type="text"
                className={this.props.validationMessage ? 'input-error form-group' : 'form-group'}
                value={this.state.loginEmail}
                onChange={this.handleInputEmailChange}
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="col-sm-6 input-row">
              <label forHtml="loginPassword">PASSWORD</label>
              <input
                id="loginPassword"
                className={this.props.validationMessage ? 'input-error form-group' : 'form-group'}
                type="password"
                placeholder="Your Password"
                label="Your Password"
                required
              />
            </div>
          </div>
          <div className="row lg-spacer">
            <div className="col-xs-offset-3 col-xs-6">
              <button onClick={this.checkLoginAttempts} className="primary">
                SIGN ON
              </button>
              <div className="row checkbox-row">
                <input
                  className="checkbox"
                  checked={this.state.rememberMeValue === 'on' ? 'checked' : ''}
                  onClick={this.rememberMe}
                  id="remember-checkbox"
                  type="checkbox"
                />
                <label className="checkbox-label" htmlFor="remember-checkbox">
                  Remember Me
                </label>
              </div>
              <div className="row forgot-password-row">
                <Link className={this.state.loginAttempts >= 2 ? 'attention-animation' : ''} to="/resetpassword">
                  Forgot your password?
                </Link>
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
