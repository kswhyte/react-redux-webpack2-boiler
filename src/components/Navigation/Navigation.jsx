import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props) => {

  Navigation.propTypes = {
    title : PropTypes.string
  };

  const check = () => {
    console.log(props)
  }
  check();
    return (
        <div className="navigation-wrapper">
            <h1>Navigation</h1>
        </div>
    );
};


export default Navigation;
