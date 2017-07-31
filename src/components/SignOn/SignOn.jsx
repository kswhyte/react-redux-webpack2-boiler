import React from 'react';
import { Route, Link } from 'react-router-dom';

import './sign-on.css';

const SignOn = () => {
  return (
    <div className="sign-on-wrapper">
      <h2>SIGN ON</h2>
      <Link to="/login/forgotpassword">Forgot your password?</Link>
      <Route exact path="/login/forgotpassword" component={ForgotPassword} />
    </div>
  );
};

SignOn.propTypes = {};

export default SignOn;
