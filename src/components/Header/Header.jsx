import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './header.css';

const propTypes = {
  headerSize: PropTypes.string,
  logout: PropTypes.func.isRequired
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }

  render() {
    //handle no margin getting overwritten?
    return (
      <header className={this.props.headerSize === 'small' ? 'small' : null}>
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
                <div className="dashboard-text text-small-o">Dashboard</div>
              </Link>
              <Link to="/">
                <i className="fa fa-cog fa-2" aria-hidden="true" />
                <div className="settings-text text-small-o">Settings</div>
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

              <a
                className="logout"
                onClick={e => {
                  e.preventDefault();
                  this.props.logout();
                }}
                href="#"
              >
                Log out
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
