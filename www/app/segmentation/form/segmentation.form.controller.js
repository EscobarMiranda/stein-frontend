(function() {
  'use strict';

  angular
    .module('app.segmentation')
    .controller('SegmentationFormCtrl', SegmentationFormCtrl);

  SegmentationFormCtrl.$inject = ['ClientService', 'QuestionService', 'AnswerService', '$ionicPopup', '$state', '$stateParams'];

  /* @ngInject */
  function SegmentationFormCtrl(ClientService, QuestionService, AnswerService, $ionicPopup, $state, $stateParams) {

    var vm = this;
    vm.saveAnswers = saveAnswers;
    vm.client = {};
    vm.client.idClient = $stateParams.idClient;
    vm.questionList = [];
    vm.answers = {};

    activate();
    getClient();
    getQuestions();

    function activate() {
      
    }

    function getClient() {
      ClientService.getClient(vm.client)
        .then(function(clientData){
          vm.client = clientData.data;
          ClientService.setActualClient(vm.client);
        })
    }

    function getQuestions() {
      QuestionService.getQuestions()
        .then(function(questionData){
          vm.questionList = questionData.data;
        })
    }

    function saveAnswers() {
      AnswerService.saveAnswers(AnswerService.buildAnswers(vm.client.idClient, vm.answers))
      .then(function(data) {
        vm.answers = {};
        showAlert('Éxito', 'Respuestas guardadas exitosamente', true);
      })
      .catch(function(error) {
        vm.answers = {};
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

  }
})();
