(function() {
  'use strict';

  angular
    .module('klassroom')
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'partials/login',
          controller: 'loginController',
          controllerAs: 'loginCtrl'
        })

        .when('/sign-up', {
          templateUrl: 'partials/sign-up',
          controller: 'signupController',
          controllerAs: 'signupCtrl'
        })

        .when('/dashboard', {
          templateUrl: 'partials/dashboard',
          controller: 'dashboardController',
          controllerAs: 'dashboardCtrl'
        })

        .when('/dashboard/myCourse/:id', {
          templateUrl: 'partials/dashboard',
          controller: 'dashboardController',
          controllerAs: 'dashboardCtrl'
        })

        .when('/courses', {
          templateUrl: 'partials/courses',
          controller: 'coursesController',
          controllerAs: 'coursesCtrl'
        })

        .when('/courses/:id', {
          templateUrl: 'partials/course',
          controller: 'courseController',
          controllerAs: 'courseCtrl'
        })

        .when('/account', {
          templateUrl: 'partials/account',
          controller: 'accountController',
          controllerAs: 'accountCtrl'
        })

        .when('/ask-course', {
          templateUrl: 'partials/ask-course',
          controller: 'askCourseController',
          controllerAs: 'askCourseCtrl'
        })

        .otherwise({
          redirectTo: '/login'
        });

      // $locationProvider.html5Mode(true);
    });
})();
