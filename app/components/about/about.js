'use strict';

angular.module('myApp.travel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/travel', {
    templateUrl: 'travel/travel.html',
    controller: 'TravelCtrl'
  });
}])

.controller('TravelCtrl', [function() {

}]);