(function () {
  'use strict';

  angular
    .module('klassroom')
    .controller('coursesController', coursesController);

  function coursesController (CoursesListService) {
    var vm = this;

    CoursesListService.getCourse()
      .then(
        function successCallback (response) {
          vm.coursesList = response.data;
        },
        function errorCallback (error) {
          console.log('Course Error: ', error)
        }
      );
  }
})();