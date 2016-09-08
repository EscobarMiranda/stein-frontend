(function() {
  'use strict';

  angular
    .module('app.segmentation')
    .controller('SegmentationCtrl', SegmentationCtrl);

  SegmentationCtrl.$inject = ['ClientService', 'UserService'];

  /* @ngInject */
  function SegmentationCtrl(ClientService, UserService) {

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
