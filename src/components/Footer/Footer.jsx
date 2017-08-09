/*eslint no-unused-vars: */

import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  Footer.propTypes = {
    title: PropTypes.string
  };

  return (
    <footer className="footer-wrapper">
      <h1>Footer</h1>
    </footer>
  );
};

export default Footer;
