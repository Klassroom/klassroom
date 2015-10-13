(function() {
  'use strict';

  angular
    .module('klassroom')
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
      .when('/home', {
        templateUrl: 'partials/home',
        controller: 'homeController'
      })

      .otherwise({
        redirectTo: '/home'
      });

      $locationProvider.html5Mode(true);
    })
})();
