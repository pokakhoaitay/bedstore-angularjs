/**
 * Created by Poka on 12/14/2015.
 */
'use strict';

angular.module('myApp._topMenu', ['ngRoute', 'ngMaterial'])

    .controller('_TopMenuCtrl',
        function ($scope, $window, $timeout, $mdSidenav, $log, Helper, $document) {
            var vpWidth = 0;
            $scope.isHideTopMenu = false;
            $scope.isFixed = false;

            $scope.$watch(function () {//https://docs.angularjs.org/api/ng/type/$rootScope.Scope
                return window.innerWidth; //Lắng nghe cái gì?
            }, function (value) {//Invoke khi lắng nghe cái gì ở trên change
                vpWidth = value;
                $scope.isHideTopMenu = value < 640;

            });

            $scope.toggleSideNav = function () {
                Helper.broadcastWhat('callToggleSideNav');
            }
            var find = $document[0].getElementById('divMainContent');
            angular.element(find).bind('scroll', function () {
                    $scope.$apply(function () {
                        $scope.isFixed = find.scrollTop >= 90;
                    });
                })
                .bind('resize', function () {
                    $scope.$apply();
                });
        });