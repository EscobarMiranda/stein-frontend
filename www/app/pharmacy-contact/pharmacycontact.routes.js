(function() {
  'use strict';

  angular
    .module('app.phamacyContact')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('pharmacyContact', {
        url: '/visit/phamacyContact',
        templateUrl: 'app/pharmacy-contact/pharmacycontact.html',
        controller: 'PhamacyContactCtrl as vm'
      });

  }

})();
