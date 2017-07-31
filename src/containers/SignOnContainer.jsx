import React, { Component } from 'react';
import SignOn from '../components/SignOn';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import sessionActions from '../actions/SessionActions';


let createHandlers = function(dispatch) {
  let submitLogin = function(data) {
    dispatch(sessionActions.startLoginClick(data));
  };

  return {
    submitLogin
    // other handlers
  };
};

const proptypes = {
  dispatch: PropTypes.func
};

class SignOnContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handlers = createHandlers(this.props.dispatch);
  }

  componentWillMount() {
    // this.props.init();
  }

  render() {
    return (<SignOn
              submitLogin={this.handlers.submitLogin}
            />);
  }
}

const mapStateToProps = state => {
  //Select the specific state items you would like here

  const {
    model,
    modelFull,
    validating,
    validation
  } = state;

  //return state items to be added as props to the container
  return {
    model,
    modelFull,
    validating,
    validation
  };
};

SignOnContainer.propTypes = proptypes;

export default connect(mapStateToProps)(SignOnContainer);
