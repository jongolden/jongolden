import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  title,
  subtitle,
  description,
  role,
  url,
  stack,
}) => (
  <a href={url} target="_blank" rel="noreferrer">
    <h4 className="title is-size-4-tablet is-size-5-mobile">{title}</h4>
    <p className="subtitle is-6 has-text-dark">{subtitle}</p>
    <div className="content has-text-dark">
      {description}
    </div>
    <div>
      <span className="tag is-link mr-2">{role}</span>
      {stack.map((stack) => (
        <span key={stack} className="tag is-info mr-2 mb-1">{stack}</span>
      ))}
    </div>
  </a>
);

Project.defaultProps = {
  subtitle: '',
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Project;
