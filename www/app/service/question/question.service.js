(function() {
  'use strict';

  angular
    .module('app.service')
    .service('QuestionService', QuestionService);

  QuestionService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function QuestionService($http, RESOURCE) {

    this.getQuestions = getQuestions;

    function getQuestions() {
      var request = {
        method: 'GET',
        url: RESOURCE.API_URL + 'Question',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(request);
    }

  }

})();
