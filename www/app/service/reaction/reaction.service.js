(function() {
  'use strict';

  angular
    .module('app.service')
    .service('ReactionService', ReactionService);

  ReactionService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function ReactionService($http, RESOURCE) {

    this.getReactions = getReactions;

    function getReactions() {
      var request = {
        method: 'GET',
        url: RESOURCE.API_URL + 'Reaction',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(request);
    }

  }

})();
