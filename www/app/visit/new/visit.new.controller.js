(function() {
  'use strict';

  angular
  .module('app.visit')
  .controller('VisitNewCtrl', VisitNewCtrl);

  VisitNewCtrl.$inject = ['$stateParams', 'ReactionService', 'VisitService', 'ClientService', 'UserService', '$ionicPopup', '$state'];

  /* @ngInject */
  function VisitNewCtrl($stateParams, ReactionService, VisitService, ClientService, UserService, $ionicPopup, $state) {

    var vm = this;
    vm.param = {};
    vm.param.idUser = UserService.getCurrentUser().idUser;
    vm.param.FK_client = $stateParams.idClient;
    vm.param.FK_visitType = $stateParams.idClientType;
    vm.param.FK_reaction = "";
    vm.param.comment = "";
    vm.reactions = [];
    vm.createVisit = createVisit;
    vm.showAlert = showAlert;

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
      VisitService.createVisit(vm.param)
      .then(function(data) {
        showAlert();
      })
      .catch(function(error) {
        console.log('Ocurrió un error con la conexión');
      });
    }

    function showAlert() {
      var alertPopup = $ionicPopup.alert({
        title: 'Éxito',
        template: 'Visita realizada exitosamente'
      });

      alertPopup.then(function(res) {
        $state.go('visit');
      });
    }

   }

 })();
