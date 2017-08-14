import React, { Component } from 'react';
import PatientTabs from '../components/PatientTabs';
import { connect } from 'react-redux';
import patientInfoActions from '../actions/PatientInfoActions';
import { PropTypes } from 'prop-types';

let createHandlers = function(dispatch) {
  let getPatientInfo = function(node, data) {
    dispatch(patientInfoActions.getPatientInfo(data));
  };

let submitPatientInfo = data => {
    dispatch(patientInfoActions.savePatientInfo(data));
  };

  return {
    getPatientInfo,
    submitPatientInfo
  };
};

const proptypes = {
  dispatch: PropTypes.func,
  PatientInfo: PropTypes.object.required,
  patientId: PropTypes.string.required
};

class PatientTabsContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handlers = createHandlers(this.props.dispatch);
  }

  componentWillMount() {
    // this.props.init();
  }

  componentDidMount() {
    //TODO:PatientId need to be passed here, query param??
    this.handlers.getPatientInfo(this.props.patientId);
    
  }

  render() {
    return (
      <div className="confirm-patient-info-wrapper">
        <PatientTabs patientInfo={this.props.PatientInfo.patientInfo} submitPatientInfo={this.handlers.submitPatientInfo} />
      </div>
    );
  }
}

PatientTabsContainer.propTypes = proptypes;
const mapStateToProps = store => {
  //Select the specific state items you would like here

  const { PatientInfo } = store;

  //return state items to be added as props to the container
  return {
    PatientInfo
  };
};

export default connect(mapStateToProps)(PatientTabsContainer);
