import React, {
  Component,
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addMessageRequest } from '../../reducers/chatReducer';

class ChatComponent extends Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addMessageRequest({ text: event.target.message.value });
    event.target.message.value = '';
  }
  render() {
    const { messages } = this.props;
    return (
      <div>
        <ul>
          {
            messages.map((message, i) => (
              <div key={i}>{message}</div>
            ))
          }
        </ul>
        <form onSubmit={this.onSubmit}>
          <input name="message" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addMessageRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
