import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './app/store';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes()}
    </Router>
  </Provider>,
  document.getElementById('root')
);
