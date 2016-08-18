(function() {
  'use strict';

  angular
    .module('app.menu')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('menu', {
        url: '/visit/menu',
        templateUrl: 'app/visits-menu/menu.html',
        controller: 'MenuCtrl as vm'
      });

  }

})();
