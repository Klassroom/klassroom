(function() {
  'use strict';

  angular
    .module('klassroom')
    .factory('MyCoursesListService', MyCoursesListService);

  function MyCoursesListService ($http) {
    var request = {
      url: 'https://gist.githubusercontent.com/BuKinoshita/8c031e6c1eba998e151c/raw/b4c6101721a9543668c85536dea007ec1a2ff7e2/courses.json',
      method: 'GET'
    };

    return {
      getMyCourses: function () {
        return $http(request);
      }
    }
  }
})();