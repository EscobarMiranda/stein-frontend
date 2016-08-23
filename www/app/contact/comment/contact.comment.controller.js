(function() {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactCommentCtrl', ContactCommentCtrl);

  ContactCommentCtrl.$inject = ['VisitService', '$stateParams'];

  /* @ngInject */
  function ContactCommentCtrl(VisitService, $stateParams) {

    var vm = this;
    vm.client = {};
    vm.client.idClient = $stateParams.idClient;
    vm.visits = [];

    activate();
    getComments();

    function activate() {
      
    }

    function getComments() {
      VisitService.getVisitsByClient(vm.client)
        .then(function(visitsData){
          vm.visits = visitsData.data;
        })
    }  

  }

})();
