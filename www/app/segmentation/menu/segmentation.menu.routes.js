(function() {
  'use strict';

  angular
    .module('app.segmentation')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('segmentation', {
        url: '/segmentation',
        templateUrl: 'app/segmentation/menu/menu.html',
        controller: 'SegmentationCtrl as vm'
      });

  }

})();
