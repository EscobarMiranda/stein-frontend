(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$window', 'UserService'];

  /* @ngInject */
  function LoginCtrl($window, UserService) {

    var vm = this;
    vm.param = {};
    vm.user = {};
    vm.param.idUser = 2;

    activate();
    getUser();

    function activate() {
      
    }

    function getUser() {
      UserService.getUser(vm.param)
        .then(function(userData){
          vm.user = userData.data;
          console.log(vm.user);
          console.log('set');
          UserService.setCurrentUser(vm.user);
        })  
    }

  }
})();
