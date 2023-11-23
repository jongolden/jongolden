import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import '../styles.scss';

library.add(fab, faEnvelope, faFileAlt);

const Layout = ({ children }) => (
  <>
    <main className="is-family-monospace has-background-white-ter" style={{ position: 'relative' }}>
      {children}
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
