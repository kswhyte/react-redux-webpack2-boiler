/*eslint no-unused-vars: */

import React from 'react';
import PropTypes from 'prop-types';

const Body = props => {
  Body.propTypes = {
    children: PropTypes.object
  };

  return (
    <div className="body-wrapper">
      {props.children}
    </div>
  );
};

export default Body;
