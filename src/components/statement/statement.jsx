import React from 'react';
import PropTypes from 'prop-types';

import './statement.scss';

function Statement(props) {
  const {
    code,
    className = '',
    unreadCount
  } = props;

  function onClickHandle() {
    console.log('click');
  }

  return (
    <div className={`statement ${ className }`} onClick={onClickHandle}>
      <p className='statement__code'>{code}</p> {
        unreadCount !== 0 ? (
          <p className="statement__unread">{unreadCount}</p>
        ) : ''
      }
    </div>
  );
}

Statement.propTypes = {
  code: PropTypes.string,
  className: PropTypes.string,
};

export { Statement };
