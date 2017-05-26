import angular from 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'ngstorage';

import {routes} from './routes';
import {main} from './app/components/main';
import {header} from './app/components/layout/header';
import {footer} from './app/components/layout/footer';
import {chat} from './app/components/chat/chat';
import {msg} from './app/components/chat/msg';
import {chatFooter} from './app/components/chat/chatFooter';
import {login} from './app/components/auth/login';
import {FakeChatService} from './app/services/fakeChatService';

import './index.scss';

angular
  .module('app', ['ui.router', 'ngStorage'])
  .config(routes.config)
  .run(routes.run)
  .service('FakeChatService', FakeChatService)
  .component('app', main)
  .component('fountainHeader', header)
  .component('chat', chat)
  .component('msg', msg)
  .component('chatFooter', chatFooter)
  .component('login', login)
  .component('fountainFooter', footer);
