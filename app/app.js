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
    'ngMaterial'
]).
config(function ($routeProvider,$locationProvider, $mdThemingProvider) {

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
    .controller('AppCtrl', function () {

    })
;
