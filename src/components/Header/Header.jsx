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

      <div className="row no-margin">
        <div className="col-xs-12 col-sm-3">
          <div className="manager-logo" />
        </div>

        <div className="col-xs-12 col-sm-9">
          <div className="pull-right">
            <div className="sign-in-status">
              Currently signed in as<br />
              <span>AgentUsername</span>
            </div>
            <div className="subheader-pipe">|</div>
            {/* {make this a tag, below, into a Link and connect to logout path} */}
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
