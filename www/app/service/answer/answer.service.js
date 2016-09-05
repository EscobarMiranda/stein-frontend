(function() {
  'use strict';

  angular
    .module('app.service', ['ngLodash'])
    .service('AnswerService', AnswerService);

  AnswerService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function AnswerService($http, RESOURCE, lodash) {

    this.saveAnswers = saveAnswers;
    this.buildAnswers = buildAnswers;

    function saveAnswers(answers) {
      var request = {
        method: 'POST',
        url: RESOURCE.API_URL + 'Answer',
        headers: {
          'Content-Type': 'application/json'
        },
        data: answers
      };

      return $http(request);
    }

    function buildAnswers(idClient, answers) {
      var simpleAnswers = [];
      _.forEach(answers, function(value, key) {
        var answer = {};
        answer.FK_client = idClient;
        answer.FK_option = key;
        simpleAnswers.push(answer);
      });
      return simpleAnswers;
    }

  }

})();
