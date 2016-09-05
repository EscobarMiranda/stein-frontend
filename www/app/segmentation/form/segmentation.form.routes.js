(function() {
  'use strict';

  angular
    .module('app.segmentation')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('segmentation/form', {
        url: '/segmentation/form/:idClient',
        templateUrl: 'app/segmentation/form/form.html',
        controller: 'SegmentationFormCtrl as vm'
      })

  }

})();
