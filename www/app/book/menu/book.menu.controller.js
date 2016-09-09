(function() {
  'use strict';

  angular
    .module('app.book')
    .controller('BookCtrl', BookCtrl);

  BookCtrl.$inject = ['ClientService', 'UserService'];

  /* @ngInject */
  function BookCtrl(ClientService, UserService) {

    var vm = this;
    vm.clientTypes = [];
    vm.userInfo = {};

    activate();
    getClientTypes();
    setUserInfo();

    function activate() {
      
    }

    function getClientTypes() {
      ClientService.getClientTypes()
        .then(function(clientTypesData){
          vm.clientTypes = clientTypesData.data;
        })
    }

    function setUserInfo() {
      vm.userInfo = UserService.getCurrentUser();
    }

  }
})();
