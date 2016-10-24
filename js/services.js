(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    const baseURL = 'https://salty-inlet-28526.herokuapp.com/coffee/';
    this.getAllCoffee = function() {
      return $http.get(baseURL);
    };
    this.getSingleCoffee = function(id) {
      return $http.get(`${baseURL}${id}`);
    };
  }

})();
