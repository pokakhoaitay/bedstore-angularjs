// Declare app level module which depends on views, and components
define(function () {
    var app = angular.module('myApp', [
            //'ngRoute',
            'oc.lazyLoad',
            'routeResolver',
            //'myApp.home',
            //'myApp.about',
            //'myApp.buildABed',
            //'myApp.contact',
            //'myApp._topMenu',
            //'myApp._sidebar',


            //'module.utils',
            //'module.services',
            //'module.common',
            'ngMessages',
            'ngMaterial',
            'ngAnimate',
            'ui.router',
            'ngCookies',
            'templates',

        ])
        .provider('Bootstrap', Bootstrap)
        .config(Config)
        .run(Run);

    function Bootstrap($httpProvider) {

        return {
            initApp: function (options) {
                $httpProvider.defaults.xsrfHeaderName = appConfig.xsrfHeaderName;
                $httpProvider.defaults.xsrfCookieName = appConfig.xsrfCookieName;//TODO: For Admin CMS we going to use BSTokenAdmin
                $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
                //$httpProvider.interceptors.push('ApiHttpIntercepter');
            },
            $get: function () {
                return {}
            }
        }
    }

    function Config($locationProvider, $mdThemingProvider, $urlRouterProvider, $uiViewScrollProvider, $stateProvider, BootstrapProvider, $ocLazyLoadProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise(function ($injector, $location) {
            $injector.get('$state').go('404');
        });
        //$uiViewScrollProvider.useAnchorScroll();

        $stateProvider
            .state('root', {
                abstract: true,
                url: '',
                views: {
                    'footer': {
                        templateUrl: 'views/partials/footer/_footer.html'
                    },
                    'sidebar': {
                        templateUrl: 'views/partials/sidebar/_sidebar.html',
                        controller: '_SidebarCtrl',
                    },
                    'topmenu': {
                        templateUrl: 'views/partials/top-menu/_topMenu.html',
                        controller: '_TopMenuCtrl',
                    },
                }
            })
            .state('404', {
                templateUrl: 'views/pages/404.html'
            })
        ;


        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('deep-orange');

        BootstrapProvider.initApp({
            setting1: 'value1',
            setting2: 'value2',
        });


        $ocLazyLoadProvider.config({
            events: true,
            debug: true,
            asyncLoader: require,
            modules: [
                {
                    name: 'contact',
                    files: [
                        'views/ui/contact/contact.js'
                    ]
                }
            ]
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
    };
    angular.module('templates', []);
    return app;
})


