(function() {
  'use strict';

  angular
    .module('app.menu')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('menu/change-password', {
        url: '/menu/change-password',
        templateUrl: 'app/menu/change-password/change-password.html',
        controller: 'MenuChangePasswordCtrl as vm'
      });

  }

})();
