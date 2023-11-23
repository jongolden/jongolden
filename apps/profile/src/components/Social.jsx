import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSocial } from '../hooks';
import getIcon from '../utils/getIcon';

const Social = () => {
  const social = useSocial();

  return (
    <p className="buttons are-medium">
      {
        social.map((link) => (
          <a
            key={link.title}
            className="button is-rounded is-info"
            href={link.href}
            outlined="true"
            title={link.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FontAwesomeIcon icon={getIcon(link.icon)} size="lg" />
            </span>
          </a>
        ))
      }
    </p>
  );
};

export default Social;
