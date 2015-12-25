'use strict';

angular.module('myApp.buildABed', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/build-a-bed', {
            templateUrl: 'views/build-a-bed/buildABed.html',
            controller: 'BuildABedCtrl',
            preload:true
        })
    }])
    .controller('BuildABedCtrl', function ($scope, $timeout) {
        $scope.isOpenDoors = true;
        $scope.isOpenUnit = false;
        $scope.isOpenUnit2 = false;
        $scope.isCheck = false;

        $scope.bedData = {};
        $scope.bedData.orientation = 'V';
        $scope.bedData.size = 'Single';
        $scope.bedData.frame = 'SupremeSteel';
        $scope.bedData.legHeight = 'Regular';
        $scope.bedData.cabinetGroup = 'Solid';
        $scope.bedData.cabinet = 7;
        $scope.bedData.isLeftCabinet = false;
        $scope.bedData.isRightCabinet = false;
        $scope.bedData.leftUpperAccessory = 0;
        $scope.bedData.rightUpperAccessory = 0;
        $scope.bedData.leftUpperFinish = 9;
        $scope.bedData.rightUpperFinish = 15;
        $scope.bedData.isLeftNightTable = false;
        $scope.bedData.isRightNightTable = false;
        $scope.bedData.leftLowerAccessory = 0;
        $scope.bedData.leftLowerFinish = 9;
        $scope.bedData.rightLowerAccessory = 0;
        $scope.bedData.rightLowerFinish = 9;

        $scope.orientations = [
            {name: 'Vertical', value: 'V'},
            {name: 'Horizontal', value: 'H'}
        ];
        $scope.sizes = [
            {name: 'Single', value: 'Single'},
            {name: 'Double/Full', value: 'DoubleFull'},
            {name: 'Queen', value: 'Queen'}
        ];
        $scope.frames = [
            {name: 'Supreme Steel', value: 'SupremeSteel'},
            {name: 'Elite Aluminum', value: 'EliteAluminum'}
        ];
        $scope.legHeights = [
            {name: 'Regular', value: 'Regular'},
            {name: 'Extended', value: 'Extended'}
        ];
        $scope.cabinetGroups = [
            {name: 'Solid', value: 'Solid'},
            {name: 'Wood Grain', value: 'WoodGrain'},
            {name: 'Textured', value: 'Textured'}
        ];
        $scope.cabinets = [
            {name: 'Black', value: 7, cabinetGroup: 'Solid'},
            {name: 'International White', value: 3, cabinetGroup: 'Solid'},
            {name: 'Alabama Cherry', value: 9, cabinetGroup: 'WoodGrain'},
            {name: 'Blooming Cherry', value: 10, cabinetGroup: 'WoodGrain'},
            {name: 'Candy Apple', value: 8, cabinetGroup: 'WoodGrain'},
            {name: 'Chocolate Pearwood', value: 2, cabinetGroup: 'WoodGrain'},
            {name: 'Cognac Cherry', value: 4, cabinetGroup: 'WoodGrain'},
            {name: 'Montana Walnut', value: 18, cabinetGroup: 'WoodGrain'},
            {name: 'Caramello', value: 15, cabinetGroup: 'Textured'},
            {name: 'Hudson', value: 17, cabinetGroup: 'Textured'},
            {name: 'Sandbank', value: 12, cabinetGroup: 'Textured'},
            {name: 'Toscana', value: 16, cabinetGroup: 'Textured'},
        ];
        $scope.upperAccessories = [
            {name: 'None', value: 0},
            {name: 'Small Door', value: 1},
            {name: 'Wardrobe Door', value: 3},
        ];
        $scope.lowerAccessories = [
            {name: 'None', value: 0},
            {name: 'Small Door', value: 2},
            {name: 'Two Drawers', value: 4},
        ];
        $scope.upperFinishes = [
            {name: 'Alabama Cherry', value: 9},
            {name: 'Black', value: 7},
            {name: 'Blooming Cherry', value: 10},
            {name: 'Candy Apple', value: 8},
            {name: 'Caramello', value: 15},
            {name: 'Chocolate Pearwood', value: 2},
            {name: 'Cognac Cherry', value: 4},
            {name: 'Hudson', value: 17},
            {name: 'International White', value: 3},
            {name: 'Montana Walnut', value: 18},
            {name: 'Sandbank', value: 12},
            {name: 'Toscana', value: 16},
        ];
        $scope.lowerFinishes = [
            {name: 'Alabama Cherry', value: 9},
            {name: 'Black', value: 7},
            {name: 'Blooming Cherry', value: 10},
            {name: 'Candy Apple', value: 8},
            {name: 'Caramello', value: 15},
            {name: 'Chocolate Pearwood', value: 2},
            {name: 'Cognac Cherry', value: 4},
            {name: 'Hudson', value: 17},
            {name: 'International White', value: 3},
            {name: 'Montana Walnut', value: 18},
            {name: 'Sandbank', value: 12},
            {name: 'Toscana', value: 16},
        ];

        $scope.currentStep = 3;
        $scope.isShowPanel = true;

        $scope.changeStep = function (newStep) {
            $scope.isShowPanel = (!$scope.isShowPanel && $scope.currentStep == newStep) || ($scope.currentStep !== newStep);
            $scope.currentStep = newStep;
        }

        $scope.stepDatas = [
            {
                stepNum: 1,
                description: 'Step 1',
                img: function () {
                    return $scope.currentStep !== 1 ? 'img/step-1.png' : 'img/step-1-on.png'
                },
                isSelected: function () {
                    return $scope.currentStep == 1
                },
                isHide: function () {
                    return false;
                }
            },
            {
                stepNum: 2,
                description: 'Step 2',
                img: function () {
                    return $scope.currentStep !== 2 ? 'img/step-2.png' : 'img/step-2-on.png'
                },
                isSelected: function () {
                    return $scope.currentStep == 2
                },
                isHide: function () {
                    return false;
                }
            },
            {
                stepNum: 3,
                description:'Step 3',
                img: function () {
                    return $scope.currentStep !== 3 ?'img/step-3.png': 'img/step-3-on.png'
                },
                isSelected: function () {
                    return $scope.currentStep == 3
                },
                isHide: function () {
                    return $scope.bedData.orientation == 'H';
                }
            },
            {
                stepNum: 4,
                description: 'Step 4',
                img: function () {
                    return $scope.currentStep !== 4 ? 'img/step-4.png' : 'img/step-4-on.png'
                },
                isSelected: function () {
                    return $scope.currentStep == 4
                },
                isHide: function () {
                    return false;
                }
            }
        ]
        $scope.setDelay = function () {
            var timeout = 500;
            if ($scope.bedData.orientation == "H")
                timeout = 30;

            if (!$scope.isCheck) {
                $scope.isOpenDoors = false;
                $scope.isOpenUnit = false;
                $scope.isOpenUnit2 = true;
                $timeout(function () {
                    $scope.isOpenUnit2 = false;
                    $scope.isOpenUnit = true;
                    $scope.isOpenDoors = false;
                }, timeout);
            }
            else {
                $scope.isOpenDoors = false;
                $scope.isOpenUnit = false;
                $scope.isOpenUnit2 = true;
                $timeout(function () {
                    $scope.isOpenUnit = false;
                    $scope.isOpenUnit2 = false;
                    $scope.isOpenDoors = true;

                }, timeout);

            }
        };
    })
