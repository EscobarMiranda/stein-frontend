(function() {
  'use strict';

  angular
    .module('app.visit')
    .controller('VisitListCtrl', VisitListCtrl);

  VisitListCtrl.$inject = ['ClientService', 'UserService', '$stateParams'];

  /* @ngInject */
  function VisitListCtrl(ClientService, UserService, $stateParams) {

    var vm = this;
    vm.param = {};
    vm.param.idUser = UserService.getCurrentUser().idUser;
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
