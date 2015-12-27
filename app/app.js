'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.about',
    'myApp.buildABed',
    'myApp._topMenu',
    'myApp._leftSidenav',

    'myApp.version',
    'utils',
    'ngMaterial',
    'ngAnimate'
]).
    config(function ($routeProvider, $locationProvider, $mdThemingProvider) {

        $routeProvider.otherwise({redirectTo: '/404'});
        $locationProvider.html5Mode(true);

        //Custom template: https://material.angularjs.org/latest/Theming/03_configuring_a_theme
        //$mdThemingProvider.definePalette('amazingPaletteName', {
        //    '50': 'ffebee',
        //    '100': 'ffcdd2',
        //    '200': 'ef9a9a',
        //    '300': 'e57373',
        //    '400': 'ef5350',
        //    '500': 'f44336',
        //    '600': 'e53935',
        //    '700': 'd32f2f',
        //    '800': 'c62828',
        //    '900': 'b71c1c',
        //    'A100': 'ff8a80',
        //    'A200': 'ff5252',
        //    'A400': 'ff1744',
        //    'A700': 'd50000',
        //    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        //                                        // on this palette should be dark or light
        //    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        //        '200', '300', '400', 'A100'],
        //    'contrastLightColors': undefined    // could also specify this if default was 'dark'
        //});

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('deep-purple');
    })
    //.run(function ($templateCache, $route, $http) {
    //    var url;
    //    for(var i in $route.routes)
    //    {
    //        if (url = $route.routes[i].templateUrl)
    //        {
    //            $http.get(url, {cache: $templateCache});
    //        }
    //    }
    //})
    .controller('AppCtrl',
        function ($scope, $document, $window,Helper,$location, $route) {
            var appVm = this;
            var lastScrollTop = 0;
            appVm.isHideBodyScrollbar = false;
            appVm.currentYOffset = 0;
            appVm.isHomePage=false;

            var find = $document[0];//.getElementById('divMainContent');
            angular.element($window).bind('scroll', function () {
                    $scope.$apply(function () {
                       // appVm.isHideTopbar = !isScrollTop($window);//$window.pageYOffset > 0;
                        appVm.currentYOffset = $window.pageYOffset;
                    });
                })
                .bind('resize', function () {
                    $scope.$apply();
                });

            $scope.$on('handlToggleBodyScrollbar', function (event, agrs) {
                appVm.isHideBodyScrollbar = agrs;
            });

            $scope.$on('$routeChangeSuccess', function(scope, next, current){
                var currentControllerName=$route.current.controller;
                appVm.isHomePage=currentControllerName=='HomeCtrl';
            });

            $scope.$on('$viewContentLoaded', function(){
                var currentControllerName=$route.current.controller;
                appVm.isHomePage=currentControllerName=='HomeCtrl';
            });



            //
            function isScrollTop(window) {
                var st = window.pageYOffset || document.documentElement.scrollTop;
                var isTop = false;
                if (st >= lastScrollTop || Helper.isPageScrollToBottom()) {
                    isTop = false;
                } else {
                    isTop = true;
                }
                lastScrollTop = st;
                return isTop;
            }
        })
;
