(function() {
  'use strict';

  angular
    .module('app.service')
    .service('UserService', UserService);

  UserService.$inject = ['$http', 'RESOURCE', '$window'];

  /* @ngInject */
  function UserService($http, RESOURCE, $window) {

    this.getUser = getUser;
    this.setCurrentUser = setCurrentUser;
    this.getCurrentUser = getCurrentUser;
    this.clearCurrentUser = clearCurrentUser;

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

    function setCurrentUser(user) {
      sessionStorage.setItem("CurrentUser", JSON.stringify(user));
    }

    function getCurrentUser() {
      return JSON.parse(sessionStorage.getItem("CurrentUser"));
    }

    function clearCurrentUser() {
      setCurrentUser({});
    }

  }

})();
