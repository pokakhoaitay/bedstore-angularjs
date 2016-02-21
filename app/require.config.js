/**
 * Created by Poka on 2/18/2016.
 */


require.config({
    paths: {
        'jQuery': 'assets/js/vendor/jquery-1.11.3.min',
        'angular': 'bower_components/angular/angular',
        'angularCookie': 'bower_components/angular-cookies/angular-cookies.min',
        'uiRouter': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'angularAnimate': 'bower_components/angular-animate/angular-animate.min',
        'angularAria': 'bower_components/angular-aria/angular-aria.min',
        'angularMessage': 'bower_components/angular-messages/angular-messages.min',
        'angularMaterial': 'bower_components/angular-material/angular-material.min',
        'sliderRevolutionPlugin': 'bower_components/slider-revolution/src/js/jquery.themepunch.plugins.min',
        'sliderRevolution': 'bower_components/slider-revolution/src/js/jquery.themepunch.revolution.min',
        'md5': 'bower_components/angular-md5/angular-md5.min',
        'svg4everybody': 'bower_components/svg4everybody/dist/svg4everybody.min',
        //'route-resolver': 'assets/js/implement/routeResolver',
        'oc-lazy-load': 'bower_components/oclazyload/dist/ocLazyLoad',
        'appjs': 'assets/js/main',
        'app': 'app',
        'appCtrl': 'app.ctrl',
        'lazyLoadConfig': 'lazyload.config',
        'appConfig': 'app.config',
        'routerConfig': 'router.config',

        'sessionService': 'assets/js/services/session.service',
        'httpInterceptor': 'assets/js/implement/ApiHttpInterceptor',
    }, shim: {
        'angular': {'exports': 'angular'},
        'jQuery': {'exports': 'jQuery'},
        'angularCookie': {deps: ['angular']},
        'uiRouter': {deps: ['angular']},
        //'angularMaterial': {deps: ['angular']},
        'angularAnimate': {deps: ['angular']},
        'angularAria': {deps: ['angular']},
        'angularMessage': {deps: ['angular']},
        'angularMaterial': {deps: ['angular', 'angularMessage', 'angularAnimate', 'angularAria']},
        'sliderRevolutionPlugin': {deps: ['jQuery']},
        'sliderRevolution': {deps: ['jQuery']},
        //'route-resolver': {deps: ['uiRouter']},
        'oc-lazy-load': {deps: ['uiRouter','angular']},
        'md5': {deps: ['jQuery']},
        'appConfig': ['oc-lazy-load','lazyLoadConfig','routerConfig','sessionService','httpInterceptor'],
        'appCtrl': ['angular', 'app'],
        'app': {deps: ['oc-lazy-load','jQuery']},
        'lazyLoadConfig': {deps: ['oc-lazy-load']},
        'routerConfig': {deps: ['oc-lazy-load']},
        'sessionService': {deps: ['oc-lazy-load']},
        'httpInterceptor': {deps: ['oc-lazy-load']},
    }
});


//Load deps application level
require([
    'angularMaterial', 'appConfig',
    'oc-lazy-load', 'app', 'angularCookie', 'appjs', 'appCtrl'
], function () {

    angular.bootstrap(document, ['myApp']);
});