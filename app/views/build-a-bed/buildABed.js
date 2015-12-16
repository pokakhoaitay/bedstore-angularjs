'use strict';

angular.module('myApp.buildABed',['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/build-a-bed',{
            templateUrl:'views/build-a-bed/buildABed.html',
            controller:'BuildABedCtrl'
        })
    }])
.controller('BuildABedCtrl',['$scope', function ($scope) {

}])
