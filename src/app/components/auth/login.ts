import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'login',
  template: require('./login.html')
})
export class LoginComponent {
  constructor(
    private _localStorageService: LocalStorageService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.logout();
  }

  logout() {
    this._localStorageService.remove('user');
  }

  submit(loginForm: NgForm) {
    const username = loginForm.value.username;
    if (!username) {
      return;
    }
    this._localStorageService.set('user', username);
    this._router.navigateByUrl('');
  }
}
