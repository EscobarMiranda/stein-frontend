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
      });

  }

})();
