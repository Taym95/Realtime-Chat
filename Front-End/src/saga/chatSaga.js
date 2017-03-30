import io from 'socket.io-client';
import { take, call, apply, fork, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ADD_MESSAGE_REQUEST, addMessage } from '../reducers/chatReducer';

function createChatChannel(socket) {
  function channelHandler(emitter) {
    function handler(msg) {
      emitter(msg);
    }
    socket.on('chat message', handler);
    return function unsubscribe() {
      socket.off('chat message', handler);
    }
  }

  return eventChannel(channelHandler);
}

function* receiveSaga(socket) {
  const chatChannel = yield call(createChatChannel, socket);
  while (true) {
    const payload = yield take(chatChannel);
    console.log('receiving a message from socket', payload);
    yield put(addMessage(payload));
  }
}

function* sendMessageListener(socket) {
  while (true) {
    const { payload } = yield take(ADD_MESSAGE_REQUEST);
    // sending the message to the backend
    yield apply(socket, socket.emit, ['chat message', payload]);
  }
}

export default function* chatSaga() {
  const socket = io('localhost:3000');
  yield [
    fork(sendMessageListener, socket),
    fork(receiveSaga, socket),
  ];
}
