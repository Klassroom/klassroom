(function() {
  'use strict';

  angular
    .module('klassroom')
    .factory('AuthService', AuthService);

  function AuthService () {
    return {
      isAuthenticated: function () {
        return true;
      }
    }
  }
})();