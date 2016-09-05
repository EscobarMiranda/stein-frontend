(function() {
  'use strict';

  angular
    .module('app.segmentation')
    .controller('SegmentationListCtrl', SegmentationListCtrl);

  SegmentationListCtrl.$inject = ['ClientService', '$stateParams'];

  /* @ngInject */
  function SegmentationListCtrl(ClientService, $stateParams) {

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
