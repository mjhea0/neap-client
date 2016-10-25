(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(routeStart);

  function appConfig($routeProvider) {
    $routeProvider
      .when('/coffee', {
        templateUrl: 'js/components/coffee/coffee.view.html',
        controller: 'coffeeController',
        controllerAs: 'coffeeCtrl',
        access: true
      })
      .when('/members', {
        template: "<h1>Members only</h1>",
        access: false
      })
      .when('/user', {
        templateUrl: 'js/components/user/user.view.html',
        controller: 'userController',
        controllerAs: 'userCtrl',
        access: true
      })
      .otherwise({
        redirectTo: '/coffee'
      });
  }

function routeStart($rootScope, $location, $route, userService) {
  $rootScope.$on('$routeChangeStart', (event, next, current) => {
    if (!next.access) {
      if (!localStorage.getItem('token')) {
        $location.path('/user');
      }
    }
  });
}


})();
