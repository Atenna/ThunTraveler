'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.travel',
  'myApp.about'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/travel', {
    templateUrl: 'components/travel/index.html'
  });

  $routeProvider.when('/about', {
    templateUrl: 'components/about/index.html'
  });

  $routeProvider.otherwise({redirectTo: '/travel'});
}]);
