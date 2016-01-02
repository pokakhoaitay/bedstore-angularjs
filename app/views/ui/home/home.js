'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'views/ui/home/home.html', controller: 'HomeCtrl'})
            .when('/home', {templateUrl: 'views/ui/home/home.html', controller: 'HomeCtrl'});
    }])

    .controller('HomeCtrl', function (Helper) {
        Helper.broadcastWhat('handlChangeIsHomePage',true);






        $(document).ready(function () {
            $('.banner').revolution({
                delay: 9000,
                startwidth: 1170,
                startheight: 500,
                hideThumbs: 10,
                fullWidth: "on",
                autoHeight: 'on',
                forceFullWidth: "on",
                hideTimerBar: 'on',
                // fullScreen:'on'
                onHoverStop: 'off'
            });

        });
    });