import { spawn } from 'redux-saga/effects';
import counterSaga from './counterSaga';
import chatSaga from './chatSaga';

export default function* ourSagas() {
  yield [
    spawn(counterSaga),
    spawn(chatSaga)
  ]
}