(function() {
  'use strict';

  angular
    .module('app.visit')
    .controller('VisitMenuCtrl', VisitMenuCtrl);

  VisitMenuCtrl.$inject = ['ClientService'];

  /* @ngInject */
  function VisitMenuCtrl(ClientService) {

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
