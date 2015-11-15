(function() {
  'use strict';

  angular
    .module('klassroom')
    .factory('CoursesListService', CoursesListService);

  function CoursesListService ($http) {
    var request = {
      url: 'https://gist.githubusercontent.com/BuKinoshita/8c031e6c1eba998e151c/raw/25390d2b91aee5aaf750c041f65cb0cefd191e39/courses.json',
      method: 'GET'
    };

    return {
      getCourse: function() {
        return $http(request);
      }
    }
  }
})();