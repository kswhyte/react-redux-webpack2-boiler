import React from 'react';

import HgButton from '@hg/three-ui/HgButton';
import TextInput from '@hg/three-ui/HgInputsV2/TextInput';

import './sign-on.css';

const SignOn = () => {
  return (
    <div className="sign-on-wrapper">
      <h1>Sign On</h1>
      <h5>Please enter your email address and password below</h5>
      <TextInput
            className="form-group"
            {...this.props.firstName}
            placeholder={'First Name*'}
            label="Patient First Name*:"
            required={true}
        />

    </div>
  );
};

SignOn.propTypes = {};

export default SignOn;
