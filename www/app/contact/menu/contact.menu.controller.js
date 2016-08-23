(function() {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['ClientService'];

  /* @ngInject */
  function ContactCtrl(ClientService) {

    var vm = this;
    vm.clientTypes = [];

    activate();
    getClientTypes();

    function activate() {
      
    }

    function getClientTypes() {
      ClientService.getClientTypes()
        .then(function(clientTypesData){
          vm.clientTypes = clientTypesData.data;
        })
    }

  }
})();
