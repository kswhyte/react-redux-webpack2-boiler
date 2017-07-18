import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

  Navigation.propTypes = {
    title : PropTypes.string,
    children : PropTypes.object
  };

  const check = () => {
    console.log(props)
  }
  check();
    return (
        <div className="navigation-wrapper">
            <h1>Navigation</h1>
            <Link to="/confirmpatientinfo">Confirm Patient Info</Link>
        </div>
    );
};


export default Navigation;
