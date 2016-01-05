'use strict';

angular.module('myApp.home', ['ui.router'])

    .config(function ($stateProvider) {
        $stateProvider
        .state('root.home', {
            url: '/',
            views:{
                '@':{
                    templateUrl: "views/ui/home/home.html",
                    controller: 'HomeCtrl',
                }
            }

        })
    })

    .controller('HomeCtrl', function (Helper) {
        Helper.broadcastWhat('handlChangeIsHomePage', true);


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