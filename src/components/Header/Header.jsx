import React from 'react';
import PropTypes from 'prop-types';

import './header.css'

const Header = (props) => {

  Header.propTypes = {
    title : PropTypes.string
  };

   const check = () => {
    console.log(props)
  }
  check();

    return (
        <div className="header-wrapper">
            <h1>Welcome</h1>
        </div>
    );
};

export default Header;
