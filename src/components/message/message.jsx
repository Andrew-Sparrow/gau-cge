import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';


function Message(props) {
  const {
    id,
    isMy,
    isUnread,
    text,
    sendDate
  } = props;

  return (
      <div className={"message" + (isMy ? ' message--isMy' : '')}>
        <p className='message__text'>{text}</p>
        <p className="message__date">{sendDate}</p>
      </div>
  )
}

Message.propTypes = {
  id: PropTypes.number,
  isMy: PropTypes.bool,
  isUnread: PropTypes.bool,
  text: PropTypes.string,
  sendDate: PropTypes.string
};

export { Message };
