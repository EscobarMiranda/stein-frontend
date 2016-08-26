(function() {
  'use strict';

  angular
    .module('app.contact')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('contact/information', {
        url: '/contact/information/:idClient',
        templateUrl: 'app/contact/information/information.html',
        controller: 'ContactInformationCtrl as vm'
      })

  }

})();
