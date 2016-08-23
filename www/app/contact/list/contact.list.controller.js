(function() {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactListCtrl', ContactListCtrl);

  ContactListCtrl.$inject = ['ClientService', '$stateParams'];

  /* @ngInject */
  function ContactListCtrl(ClientService, $stateParams) {

    var vm = this;
    vm.param = {};
    vm.param.idUser = $stateParams.idUser;
    vm.param.idClientType = $stateParams.idClientType;
    vm.clients = [];

    activate();
    getClients();

    function activate() {
      
    }

    function getClients() {
      ClientService.getClients(vm.param)
        .then(function(clientsData){
          vm.clients = clientsData.data;
        })
    }

  }
})();
