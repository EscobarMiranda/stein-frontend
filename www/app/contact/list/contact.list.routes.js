(function() {
  'use strict';

  angular
    .module('app.contact')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('contact/list', {
        url: '/contact/list/:idUser/:idClientType',
        templateUrl: 'app/contact/list/list.html',
        controller: 'ContactListCtrl as vm'
      });

  }

})();
