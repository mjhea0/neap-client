// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.coffee',
      'myApp.services'
    ]);

})();
