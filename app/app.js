/**
 * 
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('chat', [
      'ngRoute',
      'LocalStorageModule'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/chat.html',
        controller: 'ChatController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/logout', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }


  /**
   * Run block
   */
  angular
    .module('chat')
    .run(run);

  run.$inject = ['$rootScope', '$location', 'localStorageService'];

  function run($rootScope, $location, localStorageService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if (!localStorageService.get('user')) {
        if (next.templateUrl != 'views/login.html') {
          $location.path('/login');
        }
      }
    });

  }


})();