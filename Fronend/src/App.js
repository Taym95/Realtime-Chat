import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Link } from 'react-router-dom';

import MainComponent from './components/MainComponent';
import SecondComponent from './components/SecondComponent';
import { store, history } from './store';
//import Counter from './components/counter';
import ChatComponent from './components/chat';

const render = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {/*<p>hello to ourApp</p><Counter />*/}
        <ul>
          <li><Link to="/">main</Link></li>
          <li><Link to="/second">second</Link></li>
          <li><Link to="/chat">chat</Link></li>
        </ul>
        <Route exact path="/" component={MainComponent}/>
        <Route exact path="/second" component={SecondComponent}/>
        <Route exact path="/chat" component={ChatComponent}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default render;
