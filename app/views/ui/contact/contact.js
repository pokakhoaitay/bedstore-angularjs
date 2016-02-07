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
        $scope.canPost = function () {
            return $scope.contactForm.$dirty &&
                $scope.contactForm.$valid;
        }
        $scope.createContact= function (contact) {
            ContactService.createContact(contact, function () {
                $scope.contactForm.$setPristine();
                $scope.contact={};
                alert('Thank you!');
            });

        }
    });