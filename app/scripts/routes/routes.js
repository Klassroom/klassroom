(function() {
  'use strict';

  angular
    .module('klassroom')
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'partials/login.html',
          controller: 'loginController'
        })

        .when('/sign-up', {
          templateUrl: 'partials/sign-up.html',
          controller: 'signupController'
        })

        .when('/dashboard', {
          templateUrl: 'partials/dashboard.html',
          controller: 'dashboardController',
          controllerAs: 'dashboardCtrl'
        })

        .when('/dashboard/myCourse/:id', {
          templateUrl: 'partials/dashboard.html',
          controller: 'dashboardController',
          controllerAs: 'dashboardCtrl'
        })

        .when('/courses', {
          templateUrl: 'partials/courses.html',
          controller: 'coursesController',
          controllerAs: 'coursesCtrl'
        })

        .when('/courses/:id', {
          templateUrl: 'partials/course.html',
          controller: 'courseController',
          controllerAs: 'courseCtrl'
        })

        .when('/account', {
          templateUrl: 'partials/account.html',
          controller: 'accountController',
          controllerAs: 'accountCtrl'
        })

        .when('/ask-course', {
          templateUrl: 'partials/ask-course.html',
          controller: 'askCourseController',
          controllerAs: 'askCourseCtrl'
        })

        .otherwise({
          redirectTo: '/login'
        });

      // $locationProvider.html5Mode(true);
    });
})();
