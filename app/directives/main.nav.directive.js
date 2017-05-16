;(function() {

  'use strict';

  /**
   * Main navigation, just a HTML template
   * @author Jozef Butko
   * @ngdoc  Directive
   *
   * @example
   * <main-nav><main-nav/>
   *
   */
  angular
    .module('chat')
    .directive('mainNav', tinMainNav)
    .controller('NavController', NavController);

  NavController.$inject = ['$scope', 'localStorageService'];

  function tinMainNav() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'app/directives/main-nav.html',
      controller: 'NavController'
    };

    return directiveDefinitionObject;
  }

  function NavController ($scope, localStorageService) {
    $scope.$watch(function () {
      return localStorageService.get('user');
    }, function (newVal) {
      $scope.userIsLoggedIn = newVal;
    });
  }


})();