import React, { PropTypes } from 'react';

function ChatForm({submit}) {
  return (
    <form onSubmit={submit}>
      <input name="message" />
    </form>
  );
}

ChatForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ChatForm;