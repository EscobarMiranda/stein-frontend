(function() {
  'use strict';

  angular
    .module('app.visit')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('visit', {
        url: '/visit',
        templateUrl: 'app/visit/menu/menu.html',
        controller: 'VisitMenuCtrl as vm'
      });

  }

})();
