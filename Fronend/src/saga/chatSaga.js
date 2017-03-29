import io from 'socket.io-client';
import { take, call, apply, fork, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { addMessageRequest, ADD_MESSAGE_REQUEST, addMessage } from '../reducers/chatReducer';

const socket = io('192.168.1.12:8080');

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

function* receiveSaga() {
  const chatChannel = yield call(createChatChannel, socket);
  while (true) {
    const payload = yield take(chatChannel);
    console.log('receiving a message from socket', payload);
    yield put(addMessage(payload));
  }
}

function* sendMessageListener() {
  while (true) {
    const { payload } = yield take(ADD_MESSAGE_REQUEST);

    // console.log('reveive from component ', payload);
    socket.emit('chat message', payload);
    //yield fork([socket, socket.emit], ['chat message', payload]);
  }
}

export default function* chatSaga() {
  yield [
    fork(sendMessageListener),
    fork(receiveSaga),
  ];
}

//export default io();

