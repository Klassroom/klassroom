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
      url: 'includes/myCourses.html'
    }, {
      title: 'My Progress',
      url: 'includes/myProgress.html'
    }, {
      title: 'Schedule',
      url: 'includes/mySchedule.html'
    }];

    vm.currentTab = 'includes/myCourses.html';

    vm.onClickTab = function (tab) {
      console.log('Tab: ', tab);

      if(tab.url === 'includes/myCourses.html') {
        vm.currentTab = tab.url;

        vm.isActiveTab = function (tabUrl) {
          return tabUrl === vm.currentTab;
        };
      } else if(tab.url === 'includes/myProgress.html') {
        vm.currentTab = tab.url;

        vm.isActiveTab = function (tabUrl) {
          return tabUrl === vm.currentTab;
        };
      } else if(tab.url === 'includes/mySchedule.html') {
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
