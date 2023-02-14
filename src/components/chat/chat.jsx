import React from 'react';

import './chat.scss';
import { sections } from '../../db/sections';
import { Message } from '../message/message';
import { MessageForm } from '../message-form/message-form';

import { messages } from '../../db/messages';
import { getMessagesBySectionId } from './utils';


function Chat(props) {
  const { clickedIdSection } = props;

  return (
    <div className='chat'>
      {
        getMessagesBySectionId(clickedIdSection, sections, messages)
          .map((message) => <Message {...message} key={message.id} />)
      }
      <MessageForm />
    </div>
  );
}

export { Chat };
