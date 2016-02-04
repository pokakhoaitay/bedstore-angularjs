/**
 * Created by Poka on 1/31/2016.
 */
appService
    .factory('ContactService', function ($http) {
        var contact = {};

        contact.test = function () {
            $http.get(GetApiUrl('contact/test-header'))
                .then(function (response) {
                    console.log(response);
                }, function (response) {
                    console.log(response);
                });
        }

        return contact;
    });