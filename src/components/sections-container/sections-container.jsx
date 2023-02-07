import React from 'react';

import { Section } from '../section/section';
import { sections } from '../../db/sections';

function getSectionsById(sectionsId) {
  return sectionsId.map((id) => sections.find((item) => item.section.id === id));
}

function SectionsContainer(props) {
  const { sectionsId } = props;

  return (
    <div>
      {getSectionsById(sectionsId).map((item) => {
        return (
          <Section
            key={item.section.id}
            id={item.section.id}
            name={item.section.name}
            unreadCount={item.section.unreadCount}
          />);
      })}
    </div>
  );
}

export { SectionsContainer };
