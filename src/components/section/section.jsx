import React from 'react';
import PropTypes from 'prop-types';

import './section.scss';


function Section(props) {
  const {
    id,
    name,
    unreadCount
  } = props;

  function handleClickStatement(evt) {
    console.log(evt.target.id);
  }

  return (
    <div className='section' onClick={handleClickStatement} id={id}>
      <p className='section__name'>{name}</p> {
        unreadCount !== 0 ? (
          <p className="section__unread">{unreadCount}</p>
        ) : ''
      }
    </div>
  );
}

Section.propTypes = {
  id: PropTypes.number,
  code: PropTypes.string,
  unreadCount: PropTypes.number,
};

export { Section };
