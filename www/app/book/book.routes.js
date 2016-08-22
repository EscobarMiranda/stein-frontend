(function() {
  'use strict';

  angular
    .module('app.book')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('book', {
        url: '/book',
        templateUrl: 'app/book/menu.html',
        controller: 'BookCtrl as vm'
      })
      .state('book/list', {
        url: '/book/list',
        templateUrl: 'app/book/list.html',
        controller: 'BookCtrl as vm'
      });

  }

})();
