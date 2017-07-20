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
        <header>
          <div>
            <div>hg smartaccess</div>
          </div>
          <div>
            <div>MR Metropolitan Region</div>
          </div>
        </header>
    );
};

export default Header;
