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
        templateUrl: 'app/book/menu/menu.html',
        controller: 'BookCtrl as vm'
      });

  }

})();
