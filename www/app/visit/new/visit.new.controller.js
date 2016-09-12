(function() {
  'use strict';

  angular
    .module('app.visit')
    .controller('VisitNewCtrl', VisitNewCtrl);

  VisitNewCtrl.$inject = ['$stateParams', 'ReactionService', 'VisitService', 'ClientService', 'UserService', 'ProductService', '$ionicPopup', '$state'];

  /* @ngInject */
  function VisitNewCtrl($stateParams, ReactionService, VisitService, ClientService, UserService, ProductService, $ionicPopup, $state) {

    var vm = this;
    vm.client = {};
    vm.param = {};
    vm.param.idUser = UserService.getCurrentUser().idUser;
    vm.param.FK_client = $stateParams.idClient;
    vm.param.FK_visitType = $stateParams.idClientType;
    vm.param.FK_reaction = "";
    vm.param.comment = "";
    vm.reactions = [];
    vm.param.ProductsPerVisits = [];
    vm.createVisit = createVisit;
    vm.showAlert = showAlert;
    vm.addProduct = addProduct;

    activate();
    getReactions();
    getClient();

    function activate() {
      
    }

    function getReactions() {
      ReactionService.getReactions()
        .then(function(reactionsData){
          vm.reactions = reactionsData.data;
        })
    }

    function getClient() {
      vm.param.idClient = vm.param.FK_client;
      ClientService.getClient(vm.param)
        .then(function(clientsData){
          vm.client = clientsData.data;
        })
    }

    function createVisit() {
      vm.param.date = new Date();
      vm.param.ProductsPerVisits = ProductService.getCurrentProducts();
      VisitService.createVisit(vm.param)
        .then(function(data) {
          vm.param = {};
          showAlert('Éxito', 'Visita guardada exitosamente', true);
        })
        .catch(function(error) {
          vm.param = {};
          showAlert('Error', 'Ocurrió un error con la conexión', false);
        });
    }

    function showAlert(title ,msg, success) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: msg
      });
      if(success) {
        alertPopup.then(function(res) {
          $state.go('menu');
        });
      }
    }

    function addProduct() {
      ClientService.setCurrentClient(vm.param);
      $state.go('product');
    }

  }

})();
