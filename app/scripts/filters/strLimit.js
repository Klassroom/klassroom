(function() {
  'use strict';

  angular
    .module('klassroom')
    .filter('strLimit', strLimit);

  function strLimit ($filter) {
    return function(input, limit) {
      if(! input) {
        return;
      }

      if(input.length <= limit) {
        return input;
      }

      return $filter('limitTo')(input, limit) + '...';
    };
  }
})();
  