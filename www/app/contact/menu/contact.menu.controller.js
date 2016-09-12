(function() {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['ClientService', 'UserService'];

  /* @ngInject */
  function ContactCtrl(ClientService, UserService) {

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
