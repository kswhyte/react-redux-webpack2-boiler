import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from '../Welcome';


const Body = (props) => {

  Body.propTypes = {
    title : PropTypes.string
  };

  const check = () => {
    console.log(props)
  }
  check();

    return (
        <div className="body-wrapper">
            <BrowserRouter>
                <div className="card">
                    <Route exact path="/" component={Welcome} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default Body;
