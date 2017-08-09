import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as Modal_Names from '../constants/modals';

import LogoutAreYouSure from '../components/Modal/components/logoutAreYouSure';

const _propTypes = {
  currentModal : PropTypes.string
}

const ModalConductor = props => {
  switch (props.currentModal) {
    case Modal_Names.LOGOUT_MODAL:
      return <LogoutAreYouSure {...props}/>;
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
