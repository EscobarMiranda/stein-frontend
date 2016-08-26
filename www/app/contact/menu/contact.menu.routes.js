(function() {
  'use strict';

  angular
    .module('app.contact')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/menu/menu.html',
        controller: 'ContactCtrl as vm'
      });

  }

})();
