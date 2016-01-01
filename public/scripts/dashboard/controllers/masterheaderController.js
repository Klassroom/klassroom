(function() {
  'use strict';

  angular
    .module('klassroom')
    .controller('masterheaderController', masterheaderController);

  function masterheaderController (AuthService, UserService, Notification) {
    var vm = this;

    /**
    * function to get user data.
    */
    vm.getUser = function () {
      var user = UserService.getUser();

      console.log('User: ', user);

      vm.username = user.name;
      vm.photo = user.photo;
      vm.isTeacher = user.teacher;
    }

    /**
    * checking if the user is authenticated
    * if it is, get user data.
    */
    console.log('User is Authenticated: ', AuthService.isAuthenticated());

    if(AuthService.isAuthenticated()) {
      vm.getUser();
    } else {
      Notification.error({message: 'You\'re not authenticated.'})
    }
  }
})();