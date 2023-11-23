import React from 'react';

const TimelineItem = ({ date, label, children }) => (
  <div className="timeline-item has-background-white pr-3">
    <div className="timeline-marker" />
    <div className="timeline-content">
      <p className="heading">{date}</p>
      <p className="title is-size-6">{label}</p>
      <div className="content mt-2">
        {children}
      </div>
    </div>
  </div>
);

export default TimelineItem;
