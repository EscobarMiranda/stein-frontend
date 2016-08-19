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
        templateUrl: 'app/visit/menu.html',
        controller: 'VisitCtrl as vm'
      })
      .state('visit/list', {
        url: '/visit/list',
        templateUrl: 'app/visit/list.html',
        controller: 'VisitCtrl as vm'
      })
      .state('visit/add', {
        url: '/visit/add',
        templateUrl: 'app/visit/add.html',
        controller: 'VisitCtrl as vm'
      });

  }
  
})();
