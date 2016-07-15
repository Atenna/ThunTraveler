'use strict';
// angular.module('nazov modulu', [dependency on other modules]);


angular.module('myApp.travel', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/travel', {
    templateUrl: './index.html',
    controller: 'TravelController'
  });
}])

.controller('TravelController', ['$http', '$routeParams', '$scope', function($http, $routeParams, $scope) {
  this.selectedPlaceFrom = "";
  this.selectedPlaceTo = "";

  $scope.places = [
    {name: 'Bern'},
    {name: 'Thun'},
    {name: 'Zürich'}
  ];

  this.employees = [];

  this.setPlaces = function(placeA, placeB) {
    this.selectedPlaceFrom = placeA;
    this.selectedPlaceTo = placeB;
  }

  var controller = this;

  $http({method: 'GET',
        url: 'https://vm-iis75/DEVELOPMENT/Nexplore.Core/api/Core/Domain/IEmployeeProfileRepository/GetAll',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json'}
        })
      .success(function (data) {
          controller.employees = data;
      });
}])

    .directive('card', function() {
      return {
        restrict: 'E',
        templateUrl: 'card.html',
        scope: {
           // name: "=",
           // surname: "@",
           // position: "@"
        }
      };
    });

