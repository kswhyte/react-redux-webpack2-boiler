import React from 'react';
import { PropTypes } from 'prop-types';

import ModalWrapper from '../ModalWrapper.jsx';

const _propTypes = {
  hideModal: PropTypes.func,
  logout: PropTypes.func
}

const LogOutAreYouSure = props => {


  return (
    <ModalWrapper
      {...props}
      title="Are you sure you want to log out?"
      width={400}
      showOk={false}
    >
      <p>You are in the middle of a session and all unsaved changes may be lost</p>
      <div className="row">
        <div className="col-xs-12">
         <div className="pull-right">
          <button onClick={props.hideModal} className="btn-default btn">Cancel</button>
          <button onClick={props.logout} className="btn-primary btn">LogOut</button>
        </div>
        </div>
      </div>

    </ModalWrapper>
  );
};

LogOutAreYouSure.propTypes = _propTypes;

export default LogOutAreYouSure;
