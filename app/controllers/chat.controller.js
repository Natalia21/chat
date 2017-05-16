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
    .controller('ChatController', ChatController);

  ChatController.$inject = ['$scope', '$interval', 'localStorageService', 'QueryService'];


  function ChatController($scope, $interval, localStorageService, QueryService) {
    $scope.msgsList = [];
    $scope.msg = null;
    $scope.send = function () {
      if (!$scope.msg) {
        return;
      }
      $scope.msgsList.push({
        name: localStorageService.get('user'),
        text: $scope.msg,
        time: new Date()
      });
      $scope.msg = null;
    };

    //PRIVATE

    var audio = new Audio('audio/msg.mp3');

    //INIT

    QueryService.getChatData().success(function (data) {
      $interval(function () {
        var randomMsgIndex = Math.floor(Math.random() * data.length);
        var msg = data[randomMsgIndex];
        msg.time = new Date();
        $scope.msgsList.push(msg);
        audio.play();
      }, 5000);
    });
  }


})();
