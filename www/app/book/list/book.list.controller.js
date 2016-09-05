(function() {
  'use strict';

  angular
    .module('app.book')
    .controller('BookListCtrl', BookListCtrl);

  BookListCtrl.$inject = ['BookService', 'UserService', '$stateParams'];

  /* @ngInject */
  function BookListCtrl(BookService, UserService, $stateParams) {

    var vm = this;
    vm.param = {};
    vm.param.idUser = $stateParams.idUser;
    vm.param.idClientType = $stateParams.idClientType;
    vm.param.month = new Date().getMonth() + 1 ;
    vm.visits = [];

    activate();
    getFrequency();
    getUser();

    function activate() {
      
    }

    function getFrequency() {
      BookService.getFrequencyByUser(vm.param)
        .then(function(visitsData){
          vm.visits = visitsData.data;
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
