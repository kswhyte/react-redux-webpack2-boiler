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
        <div className="footer-wrapper">
            <h1>Footer</h1>
        </div>
    );
};

export default Footer;