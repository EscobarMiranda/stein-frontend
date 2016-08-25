(function() {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductQuantityCtrl', ProductQuantityCtrl);

  ProductQuantityCtrl.$inject = ['ProductService', '$stateParams', '$ionicPopup'];

  /* @ngInject */
  function ProductQuantityCtrl(ProductService, $stateParams, $ionicPopup) {

    var vm = this;
    vm.param = {};
    vm.param.product = {};
    vm.param.product.FK_product = $stateParams.idProduct;
    vm.param.product.quantity;
    vm.idClient = $stateParams.idClient;
    vm.addProduct = addProduct;
    vm.showAlert = showAlert;

    activate();

    function activate() {
      console.log(vm.param);
    }

    function addProduct() {
      ProductService.addProduct(vm.param.product);
      console.log(ProductService.getCurrentProducts());
      showAlert();
    }

    function showAlert() {
      var alertPopup = $ionicPopup.alert({
        title: 'Éxito',
        template: 'Muestra agregada'
      });
    }

  }
})();
