(function() {
  'use strict';

  angular
    .module('app.service')
    .service('ClientService', ClientService);

  ClientService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function ClientService($http, RESOURCE) {

    this.getClientTypes = getClientTypes;
    this.getClient = getClient;
    this.getClients = getClients;
    this.setActualClient = setActualClient;
    this.getActualClient = getActualClient;
    this.actualClient = {};

    function getClientTypes() {
      var request = {
        method: 'GET',
        url: RESOURCE.API_URL + 'ClientTypes',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(request);
    }

    function getClient(client) {
      var request = {
        method: 'GET',
        url: RESOURCE.API_URL + 'Client/' + client.idClient,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(request);
    }

    function getClients(param) {
      var request = {
        method: 'GET',
        url: RESOURCE.API_URL + 'Client?clientTypeId='+ param.idClientType +'&userId=' + param.idUser,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(request);
    }

    function setActualClient(client) {
      this.actualClient = client;
    }

    function getActualClient() {
      return this.actualClient;
    }

  }

})();
