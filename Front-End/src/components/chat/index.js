import React, {
  Component,
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addMessageRequest } from '../../reducers/chatReducer';
import ChatForm from './chatForm';
import MessagesList from './messagesList';

class ChatComponent extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addMessageRequest({ text: event.target.message.value });
    event.target.message.value = '';
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        <MessagesList messages={messages}/>
        <ChatForm submit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addMessageRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
