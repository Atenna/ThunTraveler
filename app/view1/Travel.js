'use strict';

angular.module('myApp.travel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/travel', {
    templateUrl: 'view1/travel.html',
    controller: 'TravelViewController'
  });
}])

.controller('TravelViewController', [function() {

}]);