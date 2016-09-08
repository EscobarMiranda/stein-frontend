(function() {
  'use strict';

  angular
    .module('app.menu')
    .controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = ['UserService'];

  /* @ngInject */
  function MenuCtrl(UserService) {

    var vm = this;
    vm.userInfo = {};

    activate();
    setUserInfo();
    
    function activate() {
      
    }

    function setUserInfo() {
      vm.userInfo = UserService.getCurrentUser();
    }

  }
})();
