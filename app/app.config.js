/**
 * Created by Poka on 2/2/2016.
 */
/**
 * Created by Poka on 2/2/2016.
 */

define(['app'], function (app) {
    app.provider('Bootstrap', Bootstrap)
        .config(Config)
        .run(Run);

    function Bootstrap($httpProvider) {

        return {
            initApp: function (options) {
                $httpProvider.defaults.xsrfHeaderName = appConfig.xsrfHeaderName;
                $httpProvider.defaults.xsrfCookieName = appConfig.xsrfCookieName;//TODO: For Admin CMS we going to use BSTokenAdmin
                $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
                // $httpProvider.interceptors.push('ApiHttpIntercepter');
            },
            $get: function () {
                return {}
            }
        }
    }

    function Config($mdThemingProvider, BootstrapProvider) {


        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('deep-orange');

        BootstrapProvider.initApp({
            setting1: 'value1',
            setting2: 'value2',
        });
    }

    function Run($rootScope, $location, $stateParams, $anchorScroll, $http, $cookies) {
        //Keep page scroll to top when refresh (F5) the page
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            if ($stateParams.scrollTo) {
                $location.hash($stateParams.scrollTo);
                $anchorScroll();
            }
        });

        //Extend (like extension method in c#) methods should define here
        angular.extend($cookies, {
            checkCookieExpired: function () {
                return !$cookies.get(appConfig.xsrfCookieName);
            }
        });
        // SessionService.initSession();
    }

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

});