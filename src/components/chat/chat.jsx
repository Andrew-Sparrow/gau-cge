import React from 'react';

import { sections } from '../../db/sections';
import { Message } from '../message/message';
import { messages } from '../../db/messages';

function getMessagesBySectionId(clickedSectionId) {
  if (clickedSectionId) {
    return sections
      .find((item) => item.section.id === clickedSectionId).section.messagesId
      .map((messageId => messages.find((item) => item.message.id === messageId).message));
  } else {
    return [];
  }
}

function Chat(props) {
  const { clickedIdSection } = props;

  return (
    <div className='chat'>
      {
        getMessagesBySectionId(clickedIdSection)
          .map((message) => <Message {...message} key={message.id} />)
      }
    </div>
  );
}

export { Chat };
