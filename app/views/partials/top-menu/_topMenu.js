/**
 * Created by Poka on 12/14/2015.
 */
'use strict';

angular.module('myApp._topMenu',['ngRoute','ngMaterial'])

    .controller('_TopMenuCtrl', ['$scope','$window',function ($scope,$window) {
        $scope.myTest='Nguyen Hong Tron';
        angular.element($window).bind('scroll', function () {
            if (this.pageYOffset >= 32) {
              var test=  angular.element(document.querySelector('md-toolbar.main-toolbar'));
                $scope.$apply(function () {
                    $scope.isFixed=true;
                });
            } else {
                $scope.$apply(function () {
                    $scope.isFixed=false;
                });

            }
        })
    }]);