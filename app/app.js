// Declare app level module which depends on views, and components
define(function () {
    var app = angular.module('myApp', [
            //'ngRoute',
            'oc.lazyLoad',
            //'routeResolver',
            //'myApp.home',
            //'myApp.about',
            //'myApp.buildABed',
            //'myApp.contact',
            //'myApp._topMenu',
            //'myApp._sidebar',


            'module.utils',
            //'module.services',
            //'module.common',
            'ngMessages',
            'ngMaterial',
            'ngAnimate',
            'ui.router',
            'ngCookies',
            'templates',

        ])
    angular.module('templates', []);
    return app;
})


