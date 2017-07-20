import React from 'react';
import PropTypes from 'prop-types';

import './header.css'

const Header = (props) => {

  Header.propTypes = {
    headerSize : PropTypes.string
  };

    return (
        <header>
          <div className={props.headerSize === 'small'? 'small' : null}>
            <div>hg smartaccess</div>
          </div>
          <div>
            <div>MR Metropolitan Region</div>
          </div>
        </header>
    );
};

export default Header;
