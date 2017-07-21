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
        <div className="logo-window">
          <div className="logo-animation">
            <div className="logo-full" />
            <div className="logo-small" />
          </div>
        </div>
        <i className="fa fa-tachometer fa-2" aria-hidden="true" />
        <i className="fa fa-cog fa-2" aria-hidden="true" />
      </div>
      <div>
        <div>MR Metropolitan Region</div>
      </div>
    </header>
  );
};

export default Header;
