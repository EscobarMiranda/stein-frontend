(function() {
  'use strict';

  angular
    .module('app.visit')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('visit/list', {
        url: '/visit/list/:idClientType',
        templateUrl: 'app/visit/list/list.html',
        controller: 'VisitListCtrl as vm'
      });

  }

})();
