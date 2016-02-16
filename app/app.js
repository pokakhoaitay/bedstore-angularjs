// Declare app level module which depends on views, and components
angular.module('myApp', [
    //'ngRoute',
    'myApp.home',
    'myApp.about',
    'myApp.buildABed',
    'myApp.contact',
    'myApp._topMenu',
    'myApp._sidebar',


    'module.utils',
    'module.services',
    'module.common',
    'ngMessages',
    'ngMaterial',
    'ngAnimate',
    'ui.router',
    'ngCookies',
    'templates',

]);
angular.module('templates', []);
