import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './header.css';

const Header = props => {
  Header.propTypes = {
    headerSize: PropTypes.string
  };

  //handle no margin getting overwritten?
  return (
    <header className={props.headerSize === 'small' ? 'small' : null}>
      <div className="row no-margin">
        <div className="logo-window col-xs-6">
          <div className="logo-animation">
            <div className="logo-full" />
            <div className="logo-small" />
          </div>
        </div>

        <div className="col-xs-6">
          <div className="pull-right">
            <Link to="/">
              <i className="fa fa-tachometer fa-2" aria-hidden="true" />
              <div className="text-small-o">Dashboard</div>
            </Link>
            <Link to="/">
              <i className="fa fa-cog fa-2" aria-hidden="true" />
              <div className="text-small-o">Settings</div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div>MR Metropolitan Region</div>
      </div>
    </header>
  );
};

export default Header;
