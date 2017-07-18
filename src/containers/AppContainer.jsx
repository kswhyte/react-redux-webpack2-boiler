import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Navigation';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome';
import NotFound from '../components/NotFound';

class App extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        // this.props.init();
    }

    render() {
        return (
        <BrowserRouter>
          <div className="wrapper">
            <Header />
            <Nav />
            <div className="router-wrapper">
                <div className="card">
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
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
