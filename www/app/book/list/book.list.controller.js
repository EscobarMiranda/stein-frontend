(function() {
  'use strict';

  angular
    .module('app.book')
    .controller('BookListCtrl', BookListCtrl);

  BookListCtrl.$inject = ['ClientService', 'UserService', 'VisitService', '$stateParams'];

  /* @ngInject */
  function BookListCtrl(ClientService, UserService, VisitService, $stateParams) {

    var vm = this;
    vm.param = {};
    vm.param.idUser = $stateParams.idUser;
    vm.param.idClientType = $stateParams.idClientType;
    vm.param.month = new Date().getMonth() + 1 ;
    vm.clients = [];

    activate();
    getClients();
    getUser();

    function activate() {
      
    }

    function getClients() {
      VisitService.getFrequencyByUser(vm.param)
        .then(function(clientsData){
          vm.clients = clientsData.data;
        })
    }

    function getUser() {
      UserService.getUser(vm.param)
        .then(function(userData){
          vm.user = userData.data;
        })
    }

  }
})();
