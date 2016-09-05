(function() {
  'use strict';

  angular
    .module('app.segmentation')
    .controller('SegmentationCtrl', SegmentationCtrl);

  SegmentationCtrl.$inject = ['ClientService'];

  /* @ngInject */
  function SegmentationCtrl(ClientService) {

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
