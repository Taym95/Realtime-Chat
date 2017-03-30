import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Link } from 'react-router-dom';

import MainComponent from './components/MainComponent';
import Counter from './components/counter';
import { store, history } from './store';
//import Counter from './components/counter';
import ChatComponent from './components/chat';

const render = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ul>
          <li><Link to="/">main</Link></li>
          <li><Link to="/async-counter">async counter</Link></li>
          <li><Link to="/chat">chat</Link></li>
        </ul>
        <Route exact path="/" component={MainComponent}/>
        <Route exact path="/async-counter" component={Counter}/>
        <Route exact path="/chat" component={ChatComponent}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default render;
