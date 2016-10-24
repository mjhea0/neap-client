(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'coffeeService'];

  function coffeeController($scope, coffeeService) {
    /*jshint validthis: true */
    const vm = this;
    vm.form = false;
    vm.coffeeObj = init();
    vm.showForm = function() {
      vm.form = true;
    };
    vm.addCoffee = function() {
      coffeeService.addCoffee(vm.coffeeObj)
      .then(() => {
        coffeeService.getAllCoffee()
        .then((coffees) => {
          vm.coffee = coffees.data.data;
        })
        .catch((err) => {
          console.log(err); // handle this error
        });
        vm.coffeeObj = init();
        vm.form = false;
      });
    };
    coffeeService.getAllCoffee()
    .then((coffees) => {
      vm.coffee = coffees.data.data;
    })
    .catch((err) => {
      console.log(err); // handle this error
    });
    // coffeeService.getSingleCoffee(1)
    // .then((coffee) => {
    //   console.log(coffee);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  function init() {
    const coffeeObj = {
      name: 'Chrismas Blend',
      roaster: 'Sweet Bloom',
      origin: 'Derek\'s backyard',
      roast: 'Medium',
      caffeine: 22,
      decaf: 'false',
      price: 888888,
      quantity: 1
    };
    return coffeeObj;
  }

})();
