'use strict';

angular.module('myApp.contact', ['ui.router'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('root.contact', {
                url: '/contact',
                views: {
                    '@': {
                        templateUrl: "views/ui/contact/contact.html",
                        controller: 'ContactCtrl',
                    }
                }

            })
    })

    .controller('ContactCtrl', function (Helper, $scope, ContactService) {
        $scope.contact = {};
        ContactService.testHeader();
    });