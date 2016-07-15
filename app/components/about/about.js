'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: './index.html',
    controller: 'AboutController'
  });
}])

.controller('AboutController', [function() {

}]);