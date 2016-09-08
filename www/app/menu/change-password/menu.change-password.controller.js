(function() {
  'use strict';

  angular
    .module('app.menu')
    .controller('MenuChangePasswordCtrl', MenuChangePasswordCtrl);

  MenuChangePasswordCtrl.$inject = ['LoginService', 'UserService', '$ionicPopup', '$state', '$stateParams'];

  /* @ngInject */
  function MenuChangePasswordCtrl(LoginService, UserService, $ionicPopup, $state, $stateParams) {

    var vm = this;
    vm.userData = {}; // Contains required information to change user password (username, password, newPassword)
    vm.changePassword = changePassword;

    activate();

    function activate() {
      
    }

    function changePassword() {
      vm.userData.username = UserService.getCurrentUser().username;
      LoginService.changePassword(vm.userData)
      .then(function(data) {
        vm.userData = {};
        showAlert('Éxito', 'Contraseña actualizada exitosamente', true);
      })
      .catch(function(error) {
        vm.userData = {};
        showAlert('Error', 'Por favor verifica los datos', false);
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
