/* eslint jsx-a11y/aria-role: 0 */
import React from 'react';
import { useProgramming } from '../hooks';

const Programming = () => {
  const programming = useProgramming();

  return (
    <ul className="block-list is-outlined">
      {programming.map((item) => (
        <li key={item.label} className="has-background-white mb-3">
          <div className="media">
            <div className="media-left">
              <h3 className="title is-5">{item.label}</h3>
            </div>
            <div className="media-content has-text-right">
              <h3 className="title is-5 has-text-info">
                {`${item.experience}/5`}
              </h3>
            </div>
          </div>
          <progress
            className="progress is-small mt-3"
            role="progress"
            value={item.experience}
            max="5"
          />
        </li>
      ))}
    </ul>
  );
}

export default Programming;
