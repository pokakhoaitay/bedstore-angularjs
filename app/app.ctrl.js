angular.module('myApp')

    .controller('AppCtrl',
        function ($scope, $document, $window, Helper, $location, $route,$mdSidenav) {
            var appVm = this;
            var lastScrollTop = 0;
            appVm.isHideBodyScrollbar = false;
            appVm.currentYOffset = 0;
            appVm.isHomePage = false;

            angular.element($window).bind('scroll', function () {
                $scope.$apply(function () {
                    appVm.currentYOffset = $window.pageYOffset;
                });
            })

            $scope.$on('handlToggleBodyScrollbar', function (event, agrs) {
                appVm.isHideBodyScrollbar = agrs;
            });

            $scope.$on('$routeChangeSuccess', function (scope, next, current) {
                var currentControllerName = $route.current.controller;
                appVm.isHomePage = currentControllerName == 'HomeCtrl';
            });

            $scope.$on('$viewContentLoaded', function () {
                var currentControllerName = $route.current.controller;
                appVm.isHomePage = currentControllerName == 'HomeCtrl';
            });

            //region # SIDEBAR #
            $scope.$watch(function () {
                return $mdSidenav('leftSideNav').isOpen();
            }, function (value) {
                appVm.isHideBodyScrollbar = value;
            });

            $scope.openAside= function () {
                $mdSidenav('leftSideNav').open();
            }

            $scope.closeAside= function () {
                $mdSidenav('leftSideNav').close();
            }
            //endregion END SIDEBAR

        });