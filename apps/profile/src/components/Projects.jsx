import React from 'react';
import Project from './Project';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { useProjects } from '../hooks';

const Projects = () => {
  const projects = useProjects();

  return (
    <Section>
      <SectionTitle>
        Some of what I&apos;ve been working on
      </SectionTitle>
      <div className="content larger">
        Here are a few a projects that I have either authored or actively maintain. Unfortunately, some of my best work is proprietary and close-sourced.
      </div>
      <ul className="block-list is-outlined">
        {projects.map((project) => (
          <li key={project.id} className="mb-3 has-background-white hoverable">
            <Project
              title={project.title}
              subtitle={project.subtitle}
              packageName={project.packageName}
              description={project.description}
              url={project.url}
              role={project.role}
              stack={project.stack}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};



export default Projects;
