import { spawn } from 'redux-saga/effects';
import todoSaga from './todoSaga';
import chatSaga from './chatSaga';

export default function* ourSagas() {
  yield [
    spawn(todoSaga),
    spawn(chatSaga)
  ]
}