(function() {
  'use strict';

  angular
    .module('app.book')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('book/list', {
        url: '/book/list/:idUser/:idClientType',
        templateUrl: 'app/book/list/list.html',
        controller: 'BookListCtrl as vm'
      });

  }

})();
