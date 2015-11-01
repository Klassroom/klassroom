(function() {
  'use strict';

  angular
    .module('klassroom')
    .controller('dashboardController', dashboardController);

  function dashboardController (MyCoursesList) {
    var vm = this;

    vm.myCoursesList = MyCoursesList.myCoursesList;
  }
})();
