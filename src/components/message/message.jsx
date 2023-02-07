import React from 'react';
import PropTypes from 'prop-types';


function Message(props) {
  const {
    id,
    isMy,
    isUnread,
    text,
    sendDate
  } = props;

  return (
    <div>
      <p>Здравствуйте</p>
    </div>
  );
}

Message.propTypes = {
  id: PropTypes.number,
  isMy: PropTypes.bool,
  isUnread: PropTypes.bool,
  text: PropTypes.string,
  sendDate: PropTypes.string
};

export { Message };
