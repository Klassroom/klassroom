(function() {
  'use strict';

  angular
    .module('klassroom')
    .factory('MyCoursesListService', MyCoursesListService);

  function MyCoursesListService ($http) {
    var request = {
      url: 'https://gist.githubusercontent.com/BuKinoshita/8c031e6c1eba998e151c/raw/fdad091a7a92e2eee74eedf6eac915f9358e13f4/courses.json',
      method: 'GET'
    };

    return {
      getMyCourses: function () {
        return $http(request);
      }
    }
  }
})();