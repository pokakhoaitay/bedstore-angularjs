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
        'ocLazyLoad': 'bower_components/oclazyload/dist/ocLazyLoad.min',
        'svg4everybody': 'bower_components/svg4everybody/dist/svg4everybody.min',
        'route-resolver': 'assets/js/implement/routeResolver',
        'oc-lazy-load': 'assets/js/implement/ocLazyLoad',
        'appjs': 'assets/js/main',
        'app': 'app',
        'appCtrl': 'app.ctrl',
        //'appConfig': 'app.config',
    }, shim: {
        'angular': {'exports': 'angular', deps: ['jQuery']},
        'jQuery': {'exports': 'jQuery'},
        'angularCookie': {deps: ['angular']},
        'uiRouter': {deps: ['angular']},
        //'angularMaterial': {deps: ['angular']},
        'angularAnimate': {deps: ['angular']},
        'angularAria': {deps: ['angular']},
        'angularMessage': {deps: ['angular']},
        'angularMaterial': {deps: ['angular','angularMessage','angularAnimate','angularAria']},
        'sliderRevolutionPlugin': {deps: ['jQuery']},
        'sliderRevolution': {deps: ['jQuery']},
        'route-resolver': {deps: ['uiRouter']},
        'oc-lazy-load': {deps: ['uiRouter']},
        'md5': {deps: ['jQuery']},
        'appConfig': ['oc-lazy-load', 'angular'],
        'appCtrl': ['angular','app'],
        'app': {deps: ['oc-lazy-load']}
    }
});


//Load deps applcation level
require(['angular', 'angularMaterial', 'uiRouter', 'route-resolver', 'oc-lazy-load', 'app','angularCookie','appjs','appCtrl'], function () {

    angular.bootstrap(document, ['myApp']);
});