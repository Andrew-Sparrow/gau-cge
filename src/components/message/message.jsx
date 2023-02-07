import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const options = {
  month: "numeric",
  day: "numeric",
  hour: 'numeric',
  minute: 'numeric',
};

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
        <p className="message__date">{new Date(sendDate).toLocaleDateString("ru-RU", options)}</p>
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
