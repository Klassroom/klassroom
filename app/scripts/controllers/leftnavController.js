(function() {
  'use strict';

  angular
    .module('klassroom')
    .controller('leftnavController', leftnavController);

  function leftnavController () {
    var vm = this;

    vm.leftnavToggle = '';
    vm.fullContent = '';

    vm.toggleLeftnav = function () {
      if(vm.leftnavToggle === '') {
        vm.leftnavToggle = 'is-hidden';
        vm.fullContent = 'full-width';
      } else {
        vm.leftnavToggle = '';
        vm.fullContent = '';
      }
    }
  }
})();
