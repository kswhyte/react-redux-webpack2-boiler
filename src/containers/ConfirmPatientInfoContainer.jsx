import React, {Component} from 'react';
import ConfirmPatientInfo from '../components/ConfirmPatientInfo';
import { connect } from 'react-redux';
import patientInfoActions from '../actions/PatientInfoActions';
import { PropTypes } from 'prop-types';

let createHandlers = function(dispatch) {
let getPatientInfo = function(node, data) {
    dispatch(patientInfoActions.getPatientInfo(data));
  };

  return {
    getPatientInfo
  };
};

const proptypes = {
  dispatch: PropTypes.func,
  PatientInfo:PropTypes.object.required,
  patientId:PropTypes.string.required
};
class ConfirmPatientInfoContainer extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.handlers = createHandlers(this.props.dispatch);
    }

    componentWillMount() {
        // this.props.init();
    }

    componentDidMount(){
        //TODO:PatientId need to be passed here, query param??
        this.handlers.getPatientInfo(this.props.patientId);
    }

    render() {
        return (
            <ConfirmPatientInfo patientInfo={this.props.PatientInfo.patientInfo} />
        )
    }
}
ConfirmPatientInfoContainer.propTypes = proptypes;
const mapStateToProps = (store) => {

    //Select the specific state items you would like here
  
    const{PatientInfo}=store;
  
    //return state items to be added as props to the container
    return {
        PatientInfo
    }
}

export default connect(mapStateToProps)(ConfirmPatientInfoContainer);
