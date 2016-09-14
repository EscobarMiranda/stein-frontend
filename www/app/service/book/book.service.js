(function() {
  'use strict';

  angular
    .module('app.service')
    .service('BookService', BookService);

  BookService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function BookService($http, RESOURCE) {

    this.getFrequencyByUser = getFrequencyByUser;

    function getFrequencyByUser(param) {
      var request = {
        method: 'GET',
        url: RESOURCE.API_URL + 'Visit?month='+ param.month +'&type=' + param.idClientType +'&IdUser=' + param.idUser, 
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(request);
    }

  }

})();
