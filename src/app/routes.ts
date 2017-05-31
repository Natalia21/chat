import {Component} from '@angular/core';
import {RouterModule, Routes, Router, NavigationStart} from '@angular/router';
import {LocalStorageService} from 'angular-2-local-storage';
import {ChatComponent} from './components/chat/chat';
import {LoginComponent} from './components/auth/login';

@Component({
  selector: 'fountain-root',
  template: require('./main.html')
})
export class RootComponent {
  constructor(
    private _router: Router,
    private _localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart &&
          !this._localStorageService.get('user') &&
          event.url !== '/login') {
        this._router.navigateByUrl('/login');
      }
    });
  }
}

export const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/chat',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
