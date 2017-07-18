import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../Welcome';
import ConfirmPatientInfo from '../ConfirmPatientInfo';

import NotFound from '../NotFound';


const Router = (props) => {

  Router.propTypes = {
    title : PropTypes.string
  };

  const check = () => {
    console.log(props)
  }
  check();

    return (
        <BrowserRouter>
            <div className="router-wrapper">
                <div className="card">
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/confirmpatientinfo" component={ConfirmPatientInfo} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Router;
