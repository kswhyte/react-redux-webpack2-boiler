import React, { Component } from 'react';
import SearchPatient from '../components/SearchPatient';
import SearchPatientNotFound from '../components/SearchPatientNotFound';
import PatientResults from '../components/PatientResults';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import patientInfoActions from '../actions/PatientInfoActions';

let createHandlers = function(dispatch) {
  let searchPatient = data => {
    dispatch(patientInfoActions.searchPatient(data));
  };

  let showError = err => {
    dispatch(patientInfoActions.searchValidationError(err));
  };

  return {
    searchPatient,
    showError
  };
};

const propTypes = {
  dispatch: PropTypes.func,
  showResults: PropTypes.bool,
  noResults: PropTypes.bool,
  validationError: PropTypes.bool,
  patientSearchResults: PropTypes.array
};

class SearchPatientContainer extends Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
  }

  componentWillMount() {
    // this.props.init();
  }

  render() {
    return (
        <div className="search-patient-container">
            <SearchPatient
              submitSearch={this.handlers.searchPatient}
              validationError={this.props.validationError}
              showError={this.handlers.showError}
            />
            <hr className="line" />
            <h3 className="sub-header">Available Patient Records</h3>
            {(!this.props.showResults && !this.props.noResults) && (
              <hr className="line" />
            )}
            {(this.props.showResults) && (
              <PatientResults patientSearchResults={this.props.patientSearchResults} />
            )}
            {(this.props.noResults) && (
              <SearchPatientNotFound />
            )}
        </div>
      );
  }
}

SearchPatientContainer.propTypes = propTypes;

const mapStateToProps = state => {
  //Select the specific state items you would like here
  const { showResults, noResults, validationError, patientSearchResults } = state.PatientInfo;

  //return state items to be added as props to the container
  return {
    showResults,
    noResults,
    validationError,
    patientSearchResults
  };
};

export default connect(mapStateToProps)(SearchPatientContainer);
