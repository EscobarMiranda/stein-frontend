(function() {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactLocationCtrl', ContactLocationCtrl)
    .directive('map', MapDirective);

  ContactLocationCtrl.$inject = ['ClientService'];

  /* @ngInject */
  function ContactLocationCtrl(ClientService) {

    var vm = this;
    vm.client = {};

    activate();
    getActualClient();

    function activate() {
      
    }

    function getActualClient() {
      vm.client = ClientService.getActualClient();
    }

  }

  function MapDirective() {
    return {
        restrict: 'A',
        link:function(scope, element, attrs){

          var zValue = scope.$eval(attrs.zoom);
          var lat = scope.$eval(attrs.lat);
          var lng = scope.$eval(attrs.lng);


          var myLatlng = new google.maps.LatLng(lat,lng),
          mapOptions = {
              zoom: zValue,
              center: myLatlng
          },
          map = new google.maps.Map(element[0],mapOptions),
          marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                draggable:false
          });
        }
    };
  }

})();
