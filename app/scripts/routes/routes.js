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

        .when('/dashboard/:tab', {
          templateUrl: 'partials/dashboard.html',
          controller: 'dashboardController',
          controllerAs: 'dashboardCtrl'
        })

        .when('/courses', {
          templateUrl: 'partials/courses.html',
          controller: 'coursesController',
          controllerAs: 'coursesCtrl'
        })

        .otherwise({
          redirectTo: '/login'
        });

      // $locationProvider.html5Mode(true);
    });
})();
