(function() {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactInformationCtrl', ContactInformationCtrl);

  ContactInformationCtrl.$inject = ['ClientService', '$stateParams'];

  /* @ngInject */
  function ContactInformationCtrl(ClientService, $stateParams) {

    var vm = this;
    vm.client = {};
    vm.client.idClient = $stateParams.idClient;

    activate();
    getClient();

    function activate() {
      
    }

    function getClient() {
      ClientService.getClient(vm.client)
        .then(function(clientData){
          vm.client = clientData.data;
          ClientService.setActualClient(vm.client);
        })
    }

  }
})();
