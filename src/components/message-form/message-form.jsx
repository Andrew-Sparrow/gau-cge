import React, { useState } from 'react';

import './message-form.scss';
import { MessageSubmitButton } from './message-submit-button';

function MessageForm(props) {
  const [messageText, setMessageText] = useState('');

  const handleChangeMessageText = (evt) => {
    setMessageText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // dispatch(sendComment(id, commentText, rating));
    console.log('handleSubmit');
  };

  return (
    <form
      className='message-form'
      action=''
      method='post'
      onSubmit={handleSubmit}
    >
      <textarea
        className="message-form__textarea"
        onChange={handleChangeMessageText}
        id="review"
        value={messageText}
        name="review"
      >
      </textarea>
      <MessageSubmitButton />
    </form>
  );
}

export { MessageForm };
