(function() {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductQuantityCtrl', ProductQuantityCtrl);

  ProductQuantityCtrl.$inject = ['ProductService', 'ClientService', '$stateParams', '$ionicPopup'];

  /* @ngInject */
  function ProductQuantityCtrl(ProductService, ClientService, $stateParams, $ionicPopup) {

    var vm = this;
    vm.param = {};
    vm.param.product = {};
    vm.param.product.FK_product = $stateParams.idProduct;
    vm.param.product.name = $stateParams.name;
    vm.param.product.quantity;
    vm.idClient = ClientService.getCurrentClient().FK_client;
    vm.idClientType = ClientService.getCurrentClient().FK_visitType;
    vm.addProduct = addProduct;
    vm.showAlert = showAlert;

    activate();

    function activate() {
    
    }

    function addProduct() {
      ProductService.addProduct(vm.param.product);
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
