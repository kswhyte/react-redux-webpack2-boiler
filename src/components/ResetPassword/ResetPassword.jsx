import React from 'react';
import { Route, Link } from 'react-router-dom';

import './sign-on.css';

const ResetPassword = () => {
  return (
    <div className="sign-on-wrapper">
      <h2>RESET YOUR PASSWORD</h2>
      <h3>Just enter your email and we'll send you instructions.</h3>

      <form />
      <Link to="/login/resetpassword">Forgot your password?</Link>
      <Route exact path="/login/resetpassword" component={ResetPassword} />
    </div>
  );
};

ResetPassword.propTypes = {};

export default ResetPassword;
