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

        .otherwise({
          redirectTo: '/login'
        });

      $locationProvider.html5Mode(true);
    });
})();
