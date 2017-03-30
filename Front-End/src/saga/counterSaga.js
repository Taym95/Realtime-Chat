import { delay, buffers } from 'redux-saga';
import { put, take, actionChannel } from 'redux-saga/effects';
//import { push } from 'react-router-redux';
import { INCREMENT_REQUEST, increment } from '../reducers/counterReducer';

export default function* todoSaga() {
  // buffing just the first 2 actions
  const incrementRequestChan = yield actionChannel(INCREMENT_REQUEST, buffers.sliding(2));
  while (true) {
    yield take(incrementRequestChan);
    yield delay(4000);
    yield put(increment());
  }
  /*while (true) {
    yield delay(1000);
    yield put(push('/second'));
    yield delay(1000);
    yield put(push('/'));
  }*/
}