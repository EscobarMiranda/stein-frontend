(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['LoginService', 'UserService', '$state', '$ionicPopup'];

  /* @ngInject */
  function LoginCtrl(LoginService, UserService, $state, $ionicPopup) {

    var vm = this;
    vm.userCredentials = {};
    vm.login = login;

    activate();
    clearLogin();

    function activate() {
      
    }

    function clearLogin() {
      UserService.clearCurrentUser();
    }

    function login() {
      LoginService.login(vm.userCredentials)
      .then(function(data) {
        vm.userCredential = {};
        UserService.setCurrentUser(data.data);
        $state.go('menu');
      })
      .catch(function(error) {
        vm.userCredential = {};
        showAlert('Error', 'Por favor ingrese de nuevo la información', false);
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
