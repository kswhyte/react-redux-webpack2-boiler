import React, {Component} from 'react';
import ConfirmPatientInfo from '../components/ConfirmPatientInfo';
import { connect } from 'react-redux';

class ConfirmPatientInfoContainer extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        // this.props.init();
    }

    render() {
        return (
            <ConfirmPatientInfo />
        )
    }
}

const mapStateToProps = (state) => {

    //Select the specific state items you would like here
    const { test } = state;

    //return state items to be added as props to the container
    return {
        test
    }
}

export default connect(mapStateToProps)(ConfirmPatientInfoContainer);
