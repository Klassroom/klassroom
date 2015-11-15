(function() {
  'use strict';

  angular
    .module('klassroom')
    .controller('courseController', courseController);

  function courseController ($routeParams, CoursesListService) {
    var vm = this;

    CoursesListService.getCourse()
      .then(
        function successCallback (response) {
          var id = response.data[$routeParams.id - 1];

          vm.name = id.course.name;
          vm.author = id.course.author;
          vm.subject = id.course.subject;
          vm.duration = id.course.duration;
          vm.description = id.course.description;
          vm.dateCreated = id.course.dateCreated;
          vm.dateEnd = id.course.dateEnd;
          vm.image = id.course.image;
          vm.featured = id.course.featured;
          vm.icon = id.course.icon;
          vm.total = id.fund.total;
          vm.pledged = id.fund.pledged;
        },
        function errorCallback (error) {
          console.log('Course Error: ', error);
        }
      );
  }
})();