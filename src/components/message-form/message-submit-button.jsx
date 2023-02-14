import React from 'react';
import PropTypes from 'prop-types';

function MessageSubmitButton(props) {
  const {disabled, isSending} = props;

  return (
    <button
      className="message-form__submit-button"
      type="submit"
      disabled={disabled}
    >
      {isSending ? 'Sending ...' : 'Submit'}
    </button>
  );
}

MessageSubmitButton.propTypes = {
  disabled: PropTypes.bool,
  isSending: PropTypes.bool,
};

export { MessageSubmitButton };
