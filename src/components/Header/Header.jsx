import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

const Header = props => {
  Header.propTypes = {
    headerSize: PropTypes.string
  };

  return (
    <header className={props.headerSize === 'small' ? 'small' : null}>
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
