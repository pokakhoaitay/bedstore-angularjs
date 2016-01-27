'use strict';

angular.module('myApp.contact', ['ui.router'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('root.contact', {
                url: '/contact',
                views:{
                    '@':{
                        templateUrl: "views/ui/contact/contact.html",
                        controller: 'ContactCtrl',
                    }
                }

            })
    })

    .controller('ContactCtrl', function (Helper, $scope) {
        $scope.contact={};
        $scope.postContact= function (contact) {
            console.log(contact)
        }
        $scope.canPost= function () {
            return $scope.contactForm.$dirty &&
                $scope.contactForm.$valid;
        }
    });