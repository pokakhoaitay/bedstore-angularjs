/**
 * Created by Poka on 1/31/2016.
 */
appService
    .factory('ContactService', function ($http) {
        var contact = {};

        contact.test = function () {
            $http.get('api/contact/test-header')
                .then(function (response) {
                }, function (response) {

                });
        }

        return contact;
    });