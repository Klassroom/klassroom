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