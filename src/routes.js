import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {reactLocalStorage} from 'reactjs-localstorage';
import Main from './app/components/main';
import Chat from './app/components/chat/chat';
import Login from './app/components/auth/login';

function loggedIn() {
  return reactLocalStorage.get('username');
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    });
  }
}

export default function routes() {
  return (
    <Route path="/" component={Main}>
      <IndexRoute component={Chat}/>
      <Route path="chat" component={Chat} onEnter={requireAuth}/>
      <Route path="login" component={Login}/>
    </Route>
  );
}
