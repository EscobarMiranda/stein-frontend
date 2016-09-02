(function() {
  'use strict';

  angular
    .module('app.service')
    .service('UserService', UserService);

  UserService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function UserService($http, RESOURCE) {

    this.getUser = getUser;

    function getUser(user) {
      var request = {
        method: 'GET',
        url: RESOURCE.API_URL + 'User/' + user.idUser,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(request);
    }

  }

})();
