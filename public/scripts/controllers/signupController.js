(function() {
  'use strict';

  angular
    .module('klassroom')
    .controller('signupController', signupController);

  function signupController () {
    var vm = this;

    vm.register = function (form) {
      console.log('Register Info: ', form);
    }
  }
})();