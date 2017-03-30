import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import counter from './reducers/counterReducer';
import chat from './reducers/chatReducer';
import sagas from './saga';

const combinedReducers = combineReducers({ counter, chat, router: routerReducer });
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const store = createStore(combinedReducers, applyMiddleware(routerMiddleware, sagaMiddleware));
sagaMiddleware.run(sagas);
export {history, store};
