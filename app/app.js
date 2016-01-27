// Declare app level module which depends on views, and components
angular.module('myApp', [
    //'ngRoute',
    'myApp.home',
    'myApp.about',
    'myApp.buildABed',
    'myApp.contact',
    'myApp._topMenu',
    'myApp._leftSidenav',

    'utils',
    'ngMessages',
    'ngMaterial',
    'ngAnimate',
    'ui.router'

]).
    config(function ($locationProvider, $mdThemingProvider, $urlRouterProvider, $uiViewScrollProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        //$uiViewScrollProvider.useAnchorScroll();

        $stateProvider
            .state('root', {
                abstract: true,
                url: '',
                views: {
                    'footer': {
                        templateUrl: 'views/partials/footer/_footer.html'
                    },
                }
            });
        ;


        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('deep-orange');
    })
    .run(function ($rootScope, $location, $stateParams, $anchorScroll) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            if ($stateParams.scrollTo) {
                $location.hash($stateParams.scrollTo);
                $anchorScroll();
            }
        });
    })

;
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