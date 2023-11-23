import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';

const About = () => (
  <Section>
    <SectionTitle>What I'm about</SectionTitle>
    <div className="content larger">
      <p>I'm a software developer based in Phoenix, Arizona.</p>
      <p>My focus has mainly been in building micro-UI React applications, but I'm also skilled in back-end development with Node.js, GraphQL, and Java.</p>
      <p>When I'm not generating surplus value, I'm providing software solutions for activists and organizing projects <span role="img" aria-label="fist">✊</span> or just putzing around on my bike.</p>
    </div>
  </Section>
);

export default About;
