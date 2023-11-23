import React from 'react';

const Section = ({ children }) => (
  <section className="section">
    <div className="container is-max-desktop">
      {children}
    </div>
  </section>
);

export default Section;
