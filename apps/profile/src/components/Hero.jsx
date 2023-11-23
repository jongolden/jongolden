import React from 'react';
import Social from './Social';

const Hero = ({ title, subtitle }) => (
  <section className="hero is-dark has-background-black-ter is-medium">
    <div className="hero-body flex flex-column flex-align-center flex-justify-center">
      <h1 className="title is-size-1-tablet is-size-3-mobile has-text-centered-mobile">
        {title}
      </h1>
      <p className="subtitle is-4 has-text-centered-mobile">
        {subtitle}
      </p>
      <Social />
    </div>
  </section>
);

export default Hero;
