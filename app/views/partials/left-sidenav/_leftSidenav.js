/**
 * Created by Poka on 12/17/2015.
 */
'use stricts';

angular.module('myApp._leftSidenav', ['ngRoute'])

    .controller('_LeftSidenavCtrl',
        function ($scope, $log, Helper, $document, $mdSidenav, $window, $timeout) {
            var body = angular.element($document[0].querySelector('body'));
            $scope.$watch(function () {//https://docs.angularjs.org/api/ng/type/$rootScope.Scope
                return window.innerWidth; //Lắng nghe cái gì?
            }, function (value) {//Invoke khi lắng nghe cái gì ở trên change
                if (value >= 640) {
                    $mdSidenav('leftSideNav').close();
                }
            });


            $scope.$on('callToggleSideNav', function (event, args) {
                // var scrollbarWidth = Helper.getScrollBarWidth();
                $mdSidenav('leftSideNav')
                    .toggle()
                    .then(function () {
                    });

            });

            $scope.close = function () {
                $mdSidenav('leftSideNav')
                    .close()
                    .then(function () {
                    });
            }
        });