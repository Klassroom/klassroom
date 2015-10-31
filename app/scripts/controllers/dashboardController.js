(function() {
  'use strict';

  angular
    .module('klassroom')
    .controller('dashboardController', dashboardController);

  function dashboardController () {
    var myCoursesList = [
      {
        title: 'Forces and Newtons laws of motion',
        subject: 'Physics'
      },

      {
        title: 'Forces and Newtons laws of motion',
        subject: 'Physics'
      },

      {
        title: 'Forces and Newtons laws of motion',
        subject: 'Physics'
      },

      {
        title: 'Forces and Newtons laws of motion',
        subject: 'Physics'
      },

      {
        title: 'Forces and Newtons laws of motion',
        subject: 'Physics'
      },

      {
        title: 'Forces and Newtons laws of motion',
        subject: 'Physics'
      },

      {
        title: 'Forces and Newtons laws of motion',
        subject: 'Physics'
      },

      {
        title: 'Forces and Newtons laws of motion',
        subject: 'Physics'
      }
    ]

    var vm = this;

    vm.myCoursesList = myCoursesList;
  };
})();
