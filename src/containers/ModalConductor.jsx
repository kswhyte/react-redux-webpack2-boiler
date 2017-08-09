import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as Modal_Names from '../constants/modals';
import sessionActions from '../actions/SessionActions';

import LogoutAreYouSure from '../components/Modal/components/logoutAreYouSure';

const _propTypes = {
  currentModal : PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func
}

const ModalConductor = props => {

  const logout = () => {
    props.hideModal();
    props.dispatch(sessionActions.startLogoutClick());
  }

  switch (props.currentModal) {
    case Modal_Names.LOGOUT_MODAL:
      return <LogoutAreYouSure logout={logout}  modalType={'danger'} {...props}/>;
    default:
      return null;
  }
};

const mapStateToProps = (state) => {

    //Select the specific state items you would like here

    //return state items to be added as props to the container
    return state
}

ModalConductor.propTypes = _propTypes;

export default connect(mapStateToProps)(ModalConductor);
