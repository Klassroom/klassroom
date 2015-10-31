(function() {
  'use strict';

  angular
    .module('klassroom')
    .directive('leftnav', leftnav);

  function leftnav () {
    return {
      restrict: 'E',
      templateUrl: 'shared/leftnav.html'
    }
  };
})();