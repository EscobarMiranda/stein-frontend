(function() {
  'use strict';

  angular
    .module('app.contact')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('contact/comment', {
        url: '/contact/comment/:idClient',
        templateUrl: 'app/contact/comment/comment.html',
        controller: 'ContactCommentCtrl as vm'
      })

  }

})();
