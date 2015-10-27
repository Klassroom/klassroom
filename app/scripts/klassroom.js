(function() {
  'use strict';

  angular
    .module('klassroom', [
      'ngRoute'
    ])

    .config(function($routeProvider) {
      $routeProvider
      .when('/home', {
        templateUrl: 'partials/home',
        controller: 'homeController'
      })

      .otherwise({
        redirectTo: '/home'
      });

      // $locationProvider.html5Mode(true);
    })
})();