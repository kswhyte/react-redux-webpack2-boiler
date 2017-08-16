import React, { Component } from 'react';
import SearchPatient from '../components/SearchPatient';
import PatientResults from '../components/PatientResults';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import patientInfoActions from '../actions/PatientInfoActions';

let createHandlers = function(dispatch) {

  let searchPatient = data => {
    dispatch(patientInfoActions.searchPatient(data));
  };

  return {
    searchPatient
  };
};

const propTypes = {
  dispatch: PropTypes.func,
  showResults: PropTypes.bool,
  noResults: PropTypes.bool
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
            />
            {(this.props.showResults) && (
              <PatientResults />
            )}
            {(this.props.noResults) && (
              <h1>No Results</h1>
            )}
        </div>
      );
  }
}

SearchPatientContainer.propTypes = propTypes;

const mapStateToProps = state => {
  //Select the specific state items you would like here
  const { showResults, noResults } = state.PatientInfo;

  //return state items to be added as props to the container
  return {
    showResults,
    noResults
  };
};

export default connect(mapStateToProps)(SearchPatientContainer);
