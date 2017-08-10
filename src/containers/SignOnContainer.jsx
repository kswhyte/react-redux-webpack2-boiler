import React, { Component } from 'react';
import SignOn from '../components/SignOn';
import ResetPassword from '../components/ResetPassword';
import ResetPasswordConfirm from '../components/ResetPasswordConfirm';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import sStorage from '../../tools/sessionStorage_helper';
import routerActions from '../actions/routeACtions';

import sessionActions from '../actions/SessionActions';

let createHandlers = dispatch => {
  let submitLogin = data => {
    dispatch(sessionActions.startLoginClick(data));
  };

  let validationError = data => {
    dispatch(sessionActions.validationError(data));
  };

  let submitPasswordRecoveryEmail = email => {
    dispatch(sessionActions.startResetPasswordClick(email));
  };

  return {
    submitLogin,
    validationError,
    submitPasswordRecoveryEmail
    // other handlers
  };
};

const proptypes = {
  dispatch: PropTypes.func,
  signonType: PropTypes.string,
  validationMessage: PropTypes.string
};

class SignOnContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handlers = createHandlers(this.props.dispatch);
  }

  componentWillMount() {
    if (sStorage.getItem({ key: 'isUserLoggedIn' }).item) {
      this.props.dispatch(routerActions.changeRoute({ route: '/' }));
    }
  }

  render() {
    if (this.props.signonType === 'signOn') {
      return (
        <SignOn
          submitLogin={this.handlers.submitLogin}
          validationError={this.handlers.validationError}
          validationMessage={this.props.validationMessage}
        />
      );
    }

    if (this.props.signonType === 'resetpassword') {
      return (
        <ResetPassword
          validationError={this.handlers.validationError}
          validationMessage={this.props.validationMessage}
          submitPasswordRecoveryEmail={this.handlers.submitPasswordRecoveryEmail}
        />
      );
    }

    if (this.props.signonType === 'resetpasswordconfirm') {
      return <ResetPasswordConfirm />;
    }
  }
}

const mapStateToProps = state => {
  //Select the specific state items you would like here
  const { validationMessage } = state.Session;

  //return state items to be added as props to the container
  return {
    validationMessage
  };
};

SignOnContainer.propTypes = proptypes;

export default connect(mapStateToProps)(SignOnContainer);
