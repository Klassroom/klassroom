(function() {
  'use strict';

  angular
    .module('klassroom')
    .directive('masterheader', masterheader);

  function masterheader () {
    return {
      restrict: 'E',
      templateUrl: 'shared/masterheader.html',
      controller: 'masterheaderController',
      controllerAs: 'masterheaderCtrl'
    }
  }
})();