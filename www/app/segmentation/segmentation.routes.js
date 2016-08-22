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
        templateUrl: 'app/segmentation/menu.html',
        controller: 'SegmentationCtrl as vm'
      })
      .state('segmentation/form', {
        url: '/segmentation/form',
        templateUrl: 'app/segmentation/form.html',
        controller: 'SegmentationCtrl as vm'
      });

  }

})();
