import React from 'react';
import PropTypes from 'prop-types';


const Body = (props) => {

  Body.propTypes = {
    children : PropTypes.object
  };

  const check = () => {
    console.log(props)
  }
  check();

    return (
      <div>
        {props.children}
      </div>
    );
};

export default Body;
