(function() {
  'use strict';

  angular
    .module('app.contact')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('contact/location', {
        url: '/contact/location',
        templateUrl: 'app/contact/location/location.html',
        controller: 'ContactLocationCtrl as vm'
      })

  }

})();
