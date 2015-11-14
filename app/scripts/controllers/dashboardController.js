(function() {
  'use strict';

  angular
    .module('klassroom')
    .controller('dashboardController', dashboardController);

  function dashboardController (MyCoursesList, $routeParams) {
    var vm = this;

    vm.nice = function (tab) {
      alert(tab);
    }

    vm.myCoursesList = MyCoursesList.myCoursesList;

    vm.tabs = [{
      title: 'My Courses',
      url: 'myCourses.html'
    }, {
      title: 'My Progress',
      url: 'myProgress.html'
    }, {
      title: 'Schedule',
      url: 'mySchedule.html'
    }];

    vm.currentTab = 'myCourses.html';

    vm.onClickTab = function (tab) {
      console.log('Tab: ', tab);

      if(tab.url === 'myCourses.html') {
        vm.currentTab = tab.url;

        vm.isActiveTab = function (tabUrl) {
          return tabUrl === vm.currentTab;
        };
      } else if(tab.url === 'myProgress.html') {
        vm.currentTab = tab.url;

        vm.isActiveTab = function (tabUrl) {
          return tabUrl === vm.currentTab;
        };
      } else if(tab.url === 'mySchedule.html') {
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
