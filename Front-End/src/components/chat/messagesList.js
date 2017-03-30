import React, { PropTypes } from 'react';

function MessagesList({messages}) {
  return (
    <ul>
      {
        messages.map((message, i) => (
          // we are using the index (i) as key just for simplicity purpose
          <div key={i}>{message}</div>
        ))
      }
    </ul>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MessagesList;

