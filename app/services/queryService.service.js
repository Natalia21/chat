;(function() {


  'use strict';


  angular
    .module('chat')
    .factory('QueryService', [
      '$http', QueryService
    ]);


  function QueryService($http) {

    var service = {
      getChatData: getChatData
    };

    return service;

    function getChatData() {
      return $http.get('fakeChat.json');
    }

  }


})();
