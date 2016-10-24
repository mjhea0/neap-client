(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'coffeeService'];

  function coffeeController($scope, coffeeService) {
    /*jshint validthis: true */
    const vm = this;
    coffeeService.getAllCoffee()
    .then((coffees) => {
      vm.coffee = coffees.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
    coffeeService.getSingleCoffee(1)
    .then((coffee) => {
      console.log(coffee);
    })
    .catch((err) => {
      console.log(err);
    });
  }

})();
