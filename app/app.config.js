/**
 * Created by Poka on 2/2/2016.
 */
/**
 * Created by Poka on 2/2/2016.
 */
myApp

    .provider('Bootstrap', function ($httpProvider) {

        return {
            initApp: function (options) {
                $httpProvider.defaults.xsrfHeaderName = 'X-BSTokenWeb';
                $httpProvider.defaults.xsrfCookieName = 'BSTokenWeb';//TODO: For Admin CMS we going to use BSTokenAdmin
                $httpProvider.interceptors.push('ApiHttpIntercepter');
            },
            $get: function () {
                return {}
            }
        }
    })

    .config(function ($locationProvider, $mdThemingProvider, $urlRouterProvider, $uiViewScrollProvider, $stateProvider, BootstrapProvider) {
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

        BootstrapProvider.initApp({
            setting1: 'value1',
            setting2: 'value2',
        });
    })

    .run(function ($rootScope, $location, $stateParams, $anchorScroll, $http, SessionService) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            if ($stateParams.scrollTo) {
                $location.hash($stateParams.scrollTo);
                $anchorScroll();
            }
        });

        SessionService.initSession();
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