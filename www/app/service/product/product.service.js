(function() {
  'use strict';

  angular
    .module('app.service')
    .service('ProductService', ProductService);

  ProductService.$inject = ['$http', 'RESOURCE'];

  /* @ngInject */
  function ProductService($http, RESOURCE) {

    this.getProducts = getProducts;
    this.addProduct = addProduct;
    this.setCurrentProducts = setCurrentProducts;
    this.getCurrentProducts = getCurrentProducts;

    clearCurrentProducts();

    function getProducts() {
      var request = {
        method: 'GET',
        url: RESOURCE.API_URL + 'Product',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http(request);
    }

    function addProduct(product) {
      var tmpList = getCurrentProducts();
      tmpList.push(product);
      setCurrentProducts(tmpList);
    }

    function setCurrentProducts(CurrentProducts) {
      localStorage.setItem("CurrentProductList", JSON.stringify(CurrentProducts));
    }

    function getCurrentProducts() {
      return JSON.parse(localStorage.getItem("CurrentProductList"));
    }

    function clearCurrentProducts() {
      setCurrentProducts([]);
    }

  }

})();
