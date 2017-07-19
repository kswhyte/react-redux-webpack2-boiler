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
        <header className="header-wrapper">
            <h1>Header</h1>
            <span>test</span>
        </header>
    );
};

export default Header;
