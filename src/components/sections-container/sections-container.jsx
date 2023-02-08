import React from 'react';
import PropTypes from 'prop-types';

import { Section } from '../section/section';
import { sections } from '../../db/sections';
import { getSectionsById } from './utils';


function SectionsContainer(props) {
  const {
    sectionsId,
    onClickSectionHandler
  } = props;

  return (
    <div>
      {getSectionsById(sectionsId, sections).map((item) => {
        return (
          <Section
            key={item.section.id}
            id={item.section.id}
            name={item.section.name}
            unreadCount={item.section.unreadCount}
            onClickSectionHandler={onClickSectionHandler}
          />);
      })}
    </div>
  );
}

SectionsContainer.propTypes = {
  sectionsId: PropTypes.array,
  onClickSectionHandler: PropTypes.func
};


export { SectionsContainer };
