'use strict';

angular.module('myApp.buildABed', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/build-a-bed', {
            templateUrl: 'views/build-a-bed/buildABed.html',
            controller: 'BuildABedCtrl'
        })
    }])
    .controller('BuildABedCtrl', function ($scope) {
        $scope.bedData={};
        $scope.bedData.cabinet=2;

        $scope.changeCabinet= function (value) {
            $scope.bedData.cabinet=value;
        }

    })
