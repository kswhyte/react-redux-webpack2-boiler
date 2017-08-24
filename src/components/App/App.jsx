/*eslint no-unused-vars: */

import React from 'react';
import PropTypes from 'prop-types';

const Body = props => {
  Body.propTypes = {
    children: PropTypes.object
  };

  return (
    <div className="app-wrapper">
      <h1>React-Redux-Webpack2 BoilerPlate</h1>
      {props.children}
    </div>
  );
};

export default Body;
