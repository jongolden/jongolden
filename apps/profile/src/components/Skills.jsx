import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';
import Programming from '../components/Programming';
import Technologies from '../components/Technologies';

const Skills = () => (
  <Section>
    <SectionTitle>What I'm good at</SectionTitle>
    <div className="content larger">
      I've dabbled in a lot of different technologies over the years.  Below
      are the programming languages, frameworks, and auxilary technologies that
      I use from day to day.
    </div>
    <div className="columns">
      <div className="column">
        <SectionSubtitle>Programming</SectionSubtitle>
        <Programming />
      </div>
      <div className="column">
        <SectionSubtitle>Technologies</SectionSubtitle>
        <Technologies />
      </div>
    </div>
  </Section>
);

export default Skills;
