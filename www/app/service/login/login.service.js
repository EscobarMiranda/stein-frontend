(function() {
  'use strict';

  angular
    .module('app.service')
    .service('LoginService', LoginService);

  LoginService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function LoginService($http, RESOURCE) {

    this.login = login;
    this.changePassword = changePassword;

    function login(userCredentials) {
      var request = {
        method: 'POST',
        url: RESOURCE.API_URL + 'Login',
        headers: {
          'Content-Type': 'application/json'
        },
        data: userCredentials
      };

      return $http(request);
    }

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
