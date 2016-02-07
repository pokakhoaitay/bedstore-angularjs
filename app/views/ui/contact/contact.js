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
        $scope.contact = {name: null, email: null, messages: null};
        $scope.contactOriginal = angular.copy($scope.contact);
        $scope.canPost = function () {
            return $scope.contactForm.$dirty &&
                $scope.contactForm.$valid;
        }
        $scope.createContact = function (contact) {
            ContactService.createContact(contact, function () {
                $scope.contact =angular.copy($scope.contactOriginal);
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
                alert('Thank you!');//TODO: implement angular material modal

            });

        }
    });