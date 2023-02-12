import React from 'react';
import PropTypes from 'prop-types';

import './statement.scss';

function Statement(props) {
  const {
    id,
    code,
    onClickStatementHandler,
    unreadCount
  } = props;

  function handleClickStatement(evt) {
    onClickStatementHandler(+evt.target.id);
  }

  return (
    <div className={`statement`} onClick={handleClickStatement} id={id}>
      <p className='statement__code'>{code}</p> {
        unreadCount > 0 ? (
          <p className="statement__unread">{unreadCount}</p>
        ) : ''
      }
    </div>
  );
}

Statement.propTypes = {
  id: PropTypes.number,
  code: PropTypes.string,
  onClickStatementHandler: PropTypes.func,
};

export { Statement };
