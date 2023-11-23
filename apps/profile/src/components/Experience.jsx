import React from 'react';
import SectionTitle from './SectionTitle';
import TimelineHeader from './TimelineHeader';
import TimelineItem from './TimelineItem';
import Section from './Section';

const Experience = () => {

  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      <div className="timeline">
        <TimelineHeader>Current</TimelineHeader>
        <TimelineItem
          date="January 2021 - Current"
          label="Acting Technical Director"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis. Cur-
abitur dictum gravida mauris. Nam arcu libero, nonummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue eu
neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo. Cras viverra
metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus eu tellus sit amet tortor gravida placerat. Integer
sapien est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi do-
lor nulla, malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci eget risus. Duis nibh mi,
congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim rutrum.
        </TimelineItem>
        <TimelineHeader>2021</TimelineHeader>
        <TimelineItem
          label="Senior Software Engineer"
          date="February 2019 - Current"
        >
          <ul>
            <li>Delivered micro-service based data quality framework for American Express Cornerstone big data lake.</li>
            <li>Lead migration of legacy user-interface to a micro-UI based architecture.</li>
            <li>Mentored colleages and interns on modern coding practice and agile methodologies.</li>
            <li>Designed, developed, and maintained inner and open-sourced React and Node libraries.</li>
            <li>Provided rule engine capabilities for the American Express Credit Authorization System in TPF C, React, and Java.</li>
            <li>Developed and implemented strategic roadmaps for migrating legacy front-end and mainframe applications towards more modern technologies and development practices.</li>
            <li>Trained colleages on modern software development practices including automated testing, CI/CD, and functional, maintainable, programming</li>
          </ul>
        </TimelineItem>
        <TimelineHeader>2019</TimelineHeader>
        <TimelineItem
          label="Software Engineer"
          date="February 2016"
        >
          <ul>
            <li>Delivered micro-service based data quality framework for American Express Cornerstone big data lake.</li>
            <li>Lead migration of legacy user-interface to a micro-UI based architecture.</li>
            <li>Mentored colleages and interns on modern coding practice and agile methodologies.</li>
            <li>Designed, developed, and maintained inner and open-sourced React and Node libraries.</li>
            <li>Provided rule engine capabilities for the American Express Credit Authorization System in TPF C, React, and Java.</li>
            <li>Developed and implemented strategic roadmaps for migrating legacy front-end and mainframe applications towards more modern technologies and development practices.</li>
            <li>Trained colleages on modern software development practices including automated testing, CI/CD, and functional, maintainable, programming</li>
          </ul>
        </TimelineItem>
        <TimelineHeader>2016</TimelineHeader>
        <TimelineItem
          label="Software Intern"
          date="July 2015"
        >
          <ul>
            <li>Provided rule engine capabilities for the American Express Credit Authorization System in TPF C, React, and Java.</li>
            <li>Developed and implemented strategic roadmaps for migrating legacy front-end and mainframe applications towards more modern technologies and development practices.</li>
            <li>Trained colleages on modern software development practices including automated testing, CI/CD, and functional, maintainable, programming</li>
          </ul>
        </TimelineItem>
      </div>
    </Section>
  );
};

export default Experience;
