export const routes = {
  config: routesConfig,
  run: runFunc
};

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('chat', {
      url: '/',
      component: 'chat'
    });
}

function runFunc($rootScope, $location, $localStorage) {
  const locationHasChanged = $rootScope.$on('$locationChangeStart', (event, next) => {
    if (!$localStorage.user) {
      if (next.indexOf('login') === -1) {
        $location.path('/login');
      }
    }
  });

  $rootScope.$on('$destroy', locationHasChanged);
}
