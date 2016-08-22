(function() {
  'use strict';

  angular
    .module('app.product')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('product', {
        url: '/product',
        templateUrl: 'app/product/list.html',
        controller: 'ProductCtrl as vm'
      })
      .state('product/quantity', {
        url: '/product/quantity',
        templateUrl: 'app/product/quantity.html',
        controller: 'ProductCtrl as vm'
      });

  }

})();
