'use strict';
// angular.module('nazov modulu', [dependency on other modules]);
angular.module('myApp.travel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/travel', {
    templateUrl: 'travel/travel.html',
    controller: 'TravelViewController'
  });
}])

.controller('TravelViewController', [function($scope) {
  this.selectedPlaceFrom = "";
  this.selectedPlaceTo = "";

  this.places = [
    {name: 'Bern'},
    {name: 'Thun'},
    {name: 'Zürich'}
  ];

  this.setPlaces = function(placeA, placeB) {
    this.selectedPlaceFrom = placeA;
    this.selectedPlaceTo = placeB;
  }
}]);

