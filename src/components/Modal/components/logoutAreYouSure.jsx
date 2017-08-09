import React from 'react';
import { PropTypes } from 'prop-types';

import ModalWrapper from '../ModalWrapper.jsx';

const _propTypes = {
  hideModal: PropTypes.func,
  logOutAreYouSure: PropTypes.func
}

const LogOutAreYouSure = props => {

  const logOutAreYouSurehandler = provider => {
    props.hideModal();
    props.logOutAreYouSure(provider);
  };

  return (
    <ModalWrapper
      {...props}
      title="Sign in"
      width={400}
      showOk={false}
    >
      <p>Logout</p>
      <button onClick={logOutAreYouSurehandler}>LogOut</button>
    </ModalWrapper>
  );
};

LogOutAreYouSure.propTypes = _propTypes;

export default LogOutAreYouSure;
