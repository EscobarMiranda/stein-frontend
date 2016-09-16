(function() {
  'use strict';

  angular
    .module('app.product')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('product/quantity', {
        url: '/product/quantity/:idProduct/:name',
        templateUrl: 'app/product/quantity/quantity.html',
        controller: 'ProductQuantityCtrl as vm'
      });

  }

})();
