(function() {
  'use strict';

  angular
    .module('app.service')
    .service('VisitService', VisitService);

  VisitService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function VisitService($http, RESOURCE) {

    this.getVisitsByClient = getVisitsByClient;
    this.createVisit = createVisit;

    function getVisitsByClient(client) {
      var request = {
        method: 'GET',
        url: RESOURCE.API_URL + 'Visit?idClient=' + client.idClient,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(request);
    }

    function createVisit(visit) {
      var postRequest = {
        method: 'POST',
        url:  RESOURCE.API_URL + 'Visit',
        headers: {
          'Content-Type': 'application/json'
        },
        data: visit
      };

      return $http(postRequest);
    }

  }

})();
