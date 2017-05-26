class LoginController {
  /** @ngInject */
  constructor($location, $localStorage) {
    this.$location = $location;
    this.$localStorage = $localStorage;
    this.logout();
  }

  logout() {
    this.username = null;
    delete this.$localStorage.user;
  }

  submit() {
    if (!this.username) {
      return;
    }
    this.$localStorage.user = this.username;
    this.$location.path('/');
  }
}

export const login = {
  template: require('./login.html'),
  controller: LoginController
};
