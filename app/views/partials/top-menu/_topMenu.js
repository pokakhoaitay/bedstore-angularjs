/**
 * Created by Poka on 12/14/2015.
 */
'use strict';

angular.module('myApp._topMenu', ['ngRoute', 'ngMaterial'])

    .controller('_TopMenuCtrl',
        function ($scope, $window, $timeout, $mdSidenav, $log, Helper, $document) {
            var vpWidth = 0;

            $scope.toggleSideNav = function () {
                Helper.broadcastWhat('callToggleSideNav');
            }
            var find = $document[0].getElementById('divMainContent');
            //angular.element(find).bind('scroll', function () {
            //        $scope.$apply(function () {
            //            $scope.isFixed = find.scrollTop >= 90;
            //        });
            //    })
            //    .bind('resize', function () {
            //        $scope.$apply();
            //    });
        });