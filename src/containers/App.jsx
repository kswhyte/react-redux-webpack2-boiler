import React, {Component} from 'react';
import Body from "../components/Body";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Navigation';
import { connect } from 'react-redux';

class App extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        // this.props.init();
    }

    render() {
        return (
          <div className="wrapper">
            <Header />
            <Nav />
            <Body />
            <Footer />
          </div>
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

export default connect(mapStateToProps)(App);
