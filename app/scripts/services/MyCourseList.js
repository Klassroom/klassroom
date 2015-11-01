(function() {
  'use strict';

  angular
    .module('klassroom')
    .factory('MyCoursesList', MyCoursesList);

  function MyCoursesList () {
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
    ];

    return {
      myCoursesList
    }
  }
})();