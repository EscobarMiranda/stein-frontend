(function() {
  'use strict';

  angular
    .module('app.medicContact')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('medicContact', {
        url: '/visit/medicContact',
        templateUrl: 'app/medic-contact/mediccontact.html',
        controller: 'MedicContactCtrl as vm'
      });

  }

})();
