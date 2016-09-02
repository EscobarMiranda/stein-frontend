(function() {
  'use strict';

  angular
    .module('app.book')
    .controller('BookCtrl', BookCtrl);

  BookCtrl.$inject = ['ClientService'];

  /* @ngInject */
  function BookCtrl(ClientService) {

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
