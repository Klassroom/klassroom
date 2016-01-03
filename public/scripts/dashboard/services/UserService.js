(function() {
  'use strict';

  angular
    .module('klassroom')
    .factory('UserService', UserService);

  var user = {
      "name": "Kane Harisson"
    , "photo": "https://s3.amazonaws.com/uifaces/faces/twitter/kaibrach/128.jpg"
    , "teacher": false
    , "courses": {
      "01": {
          "id": "01"
        , "title": "Business Logic"
        , "description": ""
        , "favorite": true
        , "teacher": {
            "name": "Johnson Kelly"
          , "stars": "5"
        }
      }
    }
  };

  function UserService () {
    return {
      getUser: function() {
        return user;
      }
    }
  }
})();