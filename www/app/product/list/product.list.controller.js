(function() {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductListCtrl', ProductListCtrl);

  ProductListCtrl.$inject = ['$stateParams', 'ProductService'];

  /* @ngInject */
  function ProductListCtrl($stateParams, ProductService) {

    var vm = this;
    vm.param = {};
    vm.param.idClient = $stateParams.idClient;
    vm.products = [];
    
    activate();
    getProducts();

    function activate() {
      
    }

    function getProducts() {
      ProductService.getProducts()
        .then(function(productsData){
          vm.products = productsData.data;
        })
    }

  }
})();
