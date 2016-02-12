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

    .controller('ContactCtrl', function (Helper, $scope, ContactService, $http) {
        $scope.contact = {name: null, email: null, messages: null};
        $scope.contactOriginal = angular.copy($scope.contact);
        $scope.canPost = function () {
            return $scope.contactForm.$dirty &&
                $scope.contactForm.$valid;
        }
        $scope.createContact = function (contact) {
            ContactService.createContact(contact, function (response) {
                if(response.data.status)
                {
                    $scope.contact = angular.copy($scope.contactOriginal);
                    $scope.contactForm.$setPristine();
                    $scope.contactForm.$setUntouched();
                    alert('Thank you!');//TODO: implement angular material modal
                }

            });

        }

        $scope.test = function () {
            $http.get(GetApiUrl('test')).then(function (res) {
                console.log(res.data.data);
            }, function (res) {
                console.log(res);
            });
        }
        $scope.testPost = function () {
            $http.post(
                GetApiUrl('test-post'),
                $.param({'name': 'Hong Tron 100%', 'age': 26,'mes':'^dds $# @30 <> < > ? /'})
            ).then(function (response) {
                console.log(response.data.data);
            }, function (res) {
                console.log(res);
            });
        }
    });