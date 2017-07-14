import React, {Component} from 'react';
import Welcome from '../components/Welcome';

class WelcomeContainer extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        // this.props.init();
    }

    render() {
        return (
            <Welcome />
        )
    }
}

export default WelcomeContainer;