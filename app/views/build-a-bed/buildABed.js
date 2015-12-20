'use strict';

angular.module('myApp.buildABed', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/build-a-bed', {
            templateUrl: 'views/build-a-bed/buildABed.html',
            controller: 'BuildABedCtrl'
        })
    }])
    .controller('BuildABedCtrl', function ($scope) {
        $scope.bedData = {};
        $scope.bedData.cabinet = 2;
        $scope.currentStep = 1;

        $scope.changeCabinet = function (value) {
            $scope.bedData.cabinet = value;
        }

        $scope.changeStep = function (newStep) {
            $scope.currentStep = newStep;
        }

        $scope.stepDatas = [
            {
                stepNum: 1,
                description: 'Step 1',
                img: function () {
                    return $scope.currentStep == 1 ? 'img/step-1.png' : 'img/step-1-on.png'
                },
                isSelected: function () {
                    return $scope.currentStep == 1
                }
            },
            {
                stepNum: 2,
                description: 'Step 2',
                img: function () {
                    return $scope.currentStep == 2 ? 'img/step-2.png' : 'img/step-2-on.png'
                },
                isSelected: function () {
                    return $scope.currentStep == 2
                }
            },
            {
                stepNum: 3,
                description: 'Step 3',
                img: function () {
                    return $scope.currentStep == 3 ? 'img/step-3.png' : 'img/step-3-on.png'
                },
                isSelected: function () {
                    return $scope.currentStep == 3
                }
            },
            {
                stepNum: 4,
                description: 'Step 4',
                img: function () {
                    return $scope.currentStep == 4 ? 'img/step-4.png' : 'img/step-4-on.png'
                },
                isSelected: function () {
                    return $scope.currentStep == 4
                }
            }
        ]

    })
