import React from 'react';
import { useTechnologies } from '../hooks';

const Technologies = () => {
  const technologies = useTechnologies();

  return (
    <ul className="block-list is-outlined">
      {technologies.map((tech) => <li key={tech.id} className="has-background-white mb-3">{tech.label}</li>)}
    </ul>
  );
};

export default Technologies;
