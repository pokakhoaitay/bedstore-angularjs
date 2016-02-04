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

var appConfig={
    apiRoute:'http://dev.bedstore.com:9999/api/',
    lastUrl:'',
}

function GetApiUrl(path){
    return appConfig.apiRoute+path;
}