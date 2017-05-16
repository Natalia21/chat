;(function() {

  'use strict';

  angular
    .module('chat')
    .directive('schrollBottom', schrollBottom);

  function schrollBottom() {

    return {
      scope: {
        schrollBottom: "="
      },
      link: function (scope, element) {
        scope.$watchCollection('schrollBottom', function (newValue) {
          if (newValue) {
            $(element).scrollTop($(element)[0].scrollHeight);
          }
        });
      }
    }

  }

})();
