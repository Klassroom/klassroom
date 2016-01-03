(function () {
  'use strict';

  angular
    .module('klassroom', ['ui-notification'])
    .config(function(NotificationProvider) {
      NotificationProvider.setOptions({
        delay: 3000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
      });
    });
})();
(function() {
  'use strict';
  
  angular
    .module('klassroom')
    .controller('dashboardController', dashboardController);

  function dashboardController () {

  }
})();
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
(function() {
  'use strict';

  angular
    .module('klassroom')
    .directive('masterheader', masterheader);

  function masterheader () {
    return {
      restrict: 'E',
      templateUrl: 'shared/masterheader.html',
      controller: 'masterheaderController',
      controllerAs: 'masterheaderCtrl'
    }
  }
})();
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
(function() {
  'use strict';

  angular
    .module('klassroom')
    .factory('UserService', UserService);

  var user = {
      "name": "Kane Harisson"
    , "photo": "https://s3.amazonaws.com/uifaces/faces/twitter/kaibrach/128.jpg"
    , "teacher": false
  };

  function UserService () {
    return {
      getUser: function() {
        return user;
      }
    }
  }
})();