(function() {
  'use strict';

  angular
    .module('klassroom')
    .factory('CoursesListService', CoursesListService);

  function CoursesListService ($http) {
    var request = {
      url: 'https://gist.githubusercontent.com/BuKinoshita/8c031e6c1eba998e151c/raw/fdad091a7a92e2eee74eedf6eac915f9358e13f4/courses.json',
      method: 'GET'
    };

    return {
      getCourse: function() {
        return $http(request);
      }
    }
  }
})();