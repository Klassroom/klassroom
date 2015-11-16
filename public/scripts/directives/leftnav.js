(function() {
  'use strict';

  angular
    .module('klassroom')
    .directive('leftnav', leftnav);

  function leftnav () {
    return {
      restrict: 'E',
      controller: 'leftnavController',
      controllerAs: 'leftnavCtrl',
      templateUrl: 'shared/leftnav'
    };
  }
})();