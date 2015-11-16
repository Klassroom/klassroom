(function() {
  'use strict';

  angular
    .module('klassroom')
    .controller('dashboardController', dashboardController);

  function dashboardController (MyCoursesListService, $routeParams) {
    var vm = this;

    MyCoursesListService.getMyCourses()
      .then(
        function successCallback (response) {
          vm.myCoursesList = response.data;
        },
        function errorCallback (error) {
          console.log('Course Error: ', error);
        }
      );

    vm.tabs = [{
      title: 'My Courses',
      url: 'includes/myCourses'
    }, {
      title: 'My Progress',
      url: 'includes/myProgress'
    }, {
      title: 'Schedule',
      url: 'includes/mySchedule'
    }];

    vm.currentTab = 'includes/myCourses';

    vm.onClickTab = function (tab) {
      console.log('Tab: ', tab);

      if(tab.url === 'includes/myCourses') {
        vm.currentTab = tab.url;

        vm.isActiveTab = function (tabUrl) {
          return tabUrl === vm.currentTab;
        };
      } else if(tab.url === 'includes/myProgress') {
        vm.currentTab = tab.url;

        vm.isActiveTab = function (tabUrl) {
          return tabUrl === vm.currentTab;
        };
      } else if(tab.url === 'includes/mySchedule') {
        vm.currentTab = tab.url;

        vm.isActiveTab = function (tabUrl) {
          return tabUrl === vm.currentTab;
        };
      }
    };

    vm.isActiveTab = function (tabUrl) {
      return tabUrl === vm.currentTab;
    };
  }
})();
