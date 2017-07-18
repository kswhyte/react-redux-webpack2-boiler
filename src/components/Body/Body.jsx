import React from 'react';
import PropTypes from 'prop-types';

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
            <h1>Body</h1>
        </div>
    );
};

export default Body;
