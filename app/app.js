'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.about',
    'myApp.version',
    'ngMaterial'
]).
config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);
