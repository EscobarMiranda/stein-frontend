(function() {
  'use strict';

  angular
    .module('app.menu')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuCtrl as vm'
      })
      .state('menu/change-password', {
        url: '/menu/change-password',
        templateUrl: 'app/menu/change-password.html',
        controller: 'MenuCtrl as vm'
      });

  }

})();
