'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'views/home/home.html',controller: 'HomeCtrl'})
            .when('/home', {templateUrl: 'views/home/home.html',controller: 'HomeCtrl'});
    }])

    .controller('HomeCtrl', [function () {
        $(document).ready(function() {
            $('.banner').revolution({
                delay: 9000,
                startwidth: 1170,
                startheight: 500,
                hideThumbs: 10,
                fullWidth: "on",
                autoHeight:'on',
                forceFullWidth: "on",
                hideTimerBar:'on',
               // fullScreen:'on'
onHoverStop:'off'
            });

        });
    }]);