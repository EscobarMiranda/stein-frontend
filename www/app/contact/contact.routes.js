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
        templateUrl: 'app/contact/menu.html',
        controller: 'ContactCtrl as vm'
      })
      .state('contact/list', {
        url: '/contact/list',
        templateUrl: 'app/contact/list.html',
        controller: 'ContactCtrl as vm'
      })
      .state('contact/information', {
        url: '/contact/information',
        templateUrl: 'app/contact/information.html',
        controller: 'ContactCtrl as vm'
      })
      .state('contact/location', {
        url: '/contact/location',
        templateUrl: 'app/contact/location.html',
        controller: 'ContactCtrl as vm'
      })
      .state('contact/comments', {
        url: '/contact/comments',
        templateUrl: 'app/contact/comments.html',
        controller: 'ContactCtrl as vm'
      });

  }

})();
