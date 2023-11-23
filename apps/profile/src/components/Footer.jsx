import React from 'react';
import Social from './Social';

const Footer = () => (
  <footer className="footer flex flex-justify-center has-background-dark has-text-white">
    <div className="content has-text-centered">
      <p>
        {`© ${new Date().getFullYear()} by Jonathan Golden`}
      </p>
      <Social />
    </div>
  </footer>
);

export default Footer;
