(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

    function appConfig($routeProvider) {
      $routeProvider
        .when('/coffee', {
          templateUrl: 'js/components/coffee/coffee.view.html',
          controller: 'coffeeController',
          controllerAs: 'coffeeCtrl'
        })
        .otherwise({
          redirectTo: '/coffee'
        });
    }

})();
