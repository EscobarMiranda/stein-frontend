(function() {
  'use strict';

  angular
    .module('app.service')
    .service('LoginService', LoginService);

  LoginService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function LoginService($http, RESOURCE) {

    this.changePassword = changePassword;

    function changePassword(data) {
      var request = {
        method: 'PUT',
        url: RESOURCE.API_URL + 'Login',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      return $http(request);
    }

  }

})();
