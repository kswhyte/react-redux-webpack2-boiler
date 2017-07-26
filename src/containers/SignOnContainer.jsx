import React, { Component } from 'react';
import SignOn from '../components/SignOn';
import { connect } from 'react-redux';

class SignOnContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.props.init();
  }

  render() {
    return <SignOn />;
  }
}

const mapStateToProps = state => {
  //Select the specific state items you would like here
  const { test } = state;

  //return state items to be added as props to the container
  return {
    test
  };
};

export default connect(mapStateToProps)(SignOnContainer);
