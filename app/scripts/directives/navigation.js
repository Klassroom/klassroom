(function() {
  'use strict';

  angular
    .module('klassroom')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'E',
      templateUrl: 'shared/navigation.html'
    };
  }
})();