(function() {
  'use strict';

  angular
    .module('app.resource')
    .constant('RESOURCE', {
      'API_URL': 'http://stein-backend.azurewebsites.net/api/'
    });

})();
