/**
 * Created by Poka on 2/18/2016.
 */


require.config({
    paths: {
        'jQuery': 'assets/js/vendor/jquery-1.11.3.min',
        'angular': 'libs/angular/angular',
        'angularCookie': 'libs/angular-cookies/angular-cookies',
        'uiRouter': 'libs/angular-ui-router/release/angular-ui-router',
        'angularAnimate': 'libs/angular-animate/angular-animate',
        'angularAria': 'libs/angular-aria/angular-aria',
        'angularMessage': 'libs/angular-messages/angular-messages',
        'angularMaterial': 'libs/angular-material/angular-material',
        'sliderRevolutionPlugin': 'libs/slider-revolution/src/js/jquery.themepunch.plugins.min',
        'sliderRevolution': 'libs/slider-revolution/src/js/jquery.themepunch.revolution',
        'loading-bar': 'libs/angular-loading-bar/build/loading-bar',
        'md5': 'libs/angular-md5/angular-md5',
        'svg4everybody': 'libs/svg4everybody/dist/svg4everybody',
        //'route-resolver': 'assets/js/implement/routeResolver',
        'oc-lazy-load': 'libs/oclazyload/dist/ocLazyLoad',
        'appjs': 'assets/js/main',
        'app': 'app',
        'appCtrl': 'app.ctrl',
        'lazyLoadConfig': 'lazyload.config',
        'appConfig': 'app.config',
        'routerConfig': 'router.config',

        'sessionService': 'assets/js/services/session.service',
        'httpInterceptor': 'assets/js/implement/ApiHttpInterceptor',
        'utils': 'assets/js/my-utils/utils'
    }, shim: {
        'angular': { 'exports': 'angular', deps: ['jQuery'] },
        'jQuery': { 'exports': 'jQuery' },
        'utils': { 'deps': ['jQuery', 'oc-lazy-load'] },
        'angularCookie': { deps: ['angular'] },
        'uiRouter': { deps: ['angular'] },
        //'angularMaterial': {deps: ['angular']},
        'angularAnimate': { deps: ['angular'] },
        'angularAria': { deps: ['angular'] },
        'angularMessage': { deps: ['angular'] },
        'angularMaterial': { deps: ['angular'] },
        'sliderRevolutionPlugin': { deps: ['jQuery'] },
        'sliderRevolution': { deps: ['jQuery'] },
        //'route-resolver': {deps: ['uiRouter']},
        'oc-lazy-load': { deps: ['uiRouter', 'angular'] },
        'md5': { deps: ['jQuery'] },
        'appConfig': ['oc-lazy-load', 'lazyLoadConfig', 'routerConfig'],
        'appCtrl': ['angular', 'app'],
        'app': { deps: ['oc-lazy-load'] },
        'lazyLoadConfig': { deps: ['oc-lazy-load'] },
        'routerConfig': { deps: ['oc-lazy-load'] },
        'sessionService': { deps: ['oc-lazy-load'] },
        'httpInterceptor': { deps: ['oc-lazy-load'] },
        'loading-bar': { deps: ['angular'] },
    },
    waitSeconds: 0
});

require(['angular', 'appjs'], function() {
    loadCSS("libs/angular-material/angular-material.css", document.getElementById("loadcss"));
    loadCSS("assets/js/vendor/google-material-icons/style.css", document.getElementById("loadcss"));
    loadCSS("libs/angular-loading-bar/build/loading-bar.css", document.getElementById("loadcss"));
    loadCSS("assets/js/vendor/outline-icons/themify-icons/themify-icons.css", document.getElementById("loadcss"));
    loadCSS("assets/js/vendor/outline-icons/Tonicons-Outline/style.css", document.getElementById("loadcss"));
    loadCSS("libs/slider-revolution/src/css/settings.css", document.getElementById("loadcss"));
    loadCSS("assets/svgs/svg-icon-default.theme.css", document.getElementById("loadcss"));
    fetchData().then(bootstrapApplication);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");
        var $log = initInjector.get("$log");
        return $http.get(utils.GetApiUrl('init-session')).then(function(response) {
            //angular.element('#divLoading').hide();
            $log.debug('Session init completed success');
        }, function(errorResponse) {
            $log.error('Session init completed fail');
        });
    }

    function bootstrapApplication() {
        //Load deps application level
        require([
            'angularMaterial', 'appConfig', 'httpInterceptor', 'utils', 'sessionService', 'loading-bar', 'angularAnimate',
            'oc-lazy-load', 'app', 'angularCookie', 'appjs', 'appCtrl', 'jQuery'
            , 'angularMessage', 'angularAria'
        ], function() {
            angular.element(document).ready(function() {
                angular.bootstrap(document, ['myApp']);
                angular.element('#divLoading').hide();
            });
        });

    }
})

