(function () {
  'use strict';

  angular
    .module('klassroom')
    .controller('coursesController', coursesController);

  function coursesController (FeaturedCoursesList, CoursesList) {
    var vm = this;

    vm.featuredCoursesList = FeaturedCoursesList.featuredCoursesList;
    vm.coursesList = CoursesList.coursesList;
  }
})();