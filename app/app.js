// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
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
angular.module('templates',[]);
var appConfig = {
    apiRoute: 'http://dev.bedstore.com:9999/proxy/',
    lastUrl: '',
    xsrfHeaderName: 'X-BSTokenWeb',
    xsrfCookieName: 'BSTokenWeb',
}

function GetApiUrl(path) {
    return appConfig.apiRoute + path;
}