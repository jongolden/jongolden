import React from 'react';

const TimelineHeader = ({ children }) => (
  <header className="timeline-header">
    <span className="tag is-info">{children}</span>
  </header>
);

export default TimelineHeader;
