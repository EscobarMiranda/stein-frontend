(function() {
  'use strict';

  angular
    .module('app.segmentation')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('segmentation/list', {
        url: '/segmentation/list/:idUser/:idClientType',
        templateUrl: 'app/segmentation/list/list.html',
        controller: 'SegmentationListCtrl as vm'
      });

  }

})();
