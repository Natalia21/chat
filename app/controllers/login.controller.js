/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('chat')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$location', 'localStorageService', 'QueryService'];


  function LoginController($scope, $location, localStorageService, QueryService) {
    $scope.username = null;
    localStorageService.remove('user');
    $scope.submit = function () {
      localStorageService.set('user', $scope.username);
      $location.path('/');
    };
  }


})();