// Declare app level module which depends on views, and components
var myApp=angular.module('myApp', [
    //'ngRoute',
    'myApp.home',
    'myApp.about',
    'myApp.buildABed',
    'myApp.contact',
    'myApp._topMenu',
    'myApp._leftSidenav',


    'module.utils',
    'module.services',
    'module.common',
    'ngMessages',
    'ngMaterial',
    'ngAnimate',
    'ui.router'

]);