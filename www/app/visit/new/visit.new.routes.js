(function() {
  'use strict';

  angular
    .module('app.visit')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('visit/new', {
        url: '/visit/new/:idClient/:idClientType',
        templateUrl: 'app/visit/new/add.html',
        controller: 'VisitNewCtrl as vm'
      });

  }

})();
