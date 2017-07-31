import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {

  Footer.propTypes = {
    title : PropTypes.string
  };

  const check = () => {
    console.log(props)
  }
  check();

    return (
        <footer className="footer-wrapper">
            <h1>Footer</h1>
        </footer>
    );
};

export default Footer;
