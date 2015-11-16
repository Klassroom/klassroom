(function() {
  'use strict';

  angular
    .module('klassroom')
    .controller('loginController', loginController);

  function loginController () {
    var vm = this;

    vm.login = function (form) {
      console.log('Login Info: ', form);
    }
  }
})();