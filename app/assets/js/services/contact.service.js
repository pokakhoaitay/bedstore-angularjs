/**
 * Created by Poka on 1/31/2016.
 */
appService
    .factory('ContactService', function ($http) {
        var contact = {};

        contact.createContact = function (submitData, callback) {
            var data = $.param(submitData)
            $http.post(GetApiUrl('contact/create-contact'), data)
                .then(function (response) {
                    if(response.data){
                        callback();
                    }
                }, function (response) {
                    console.log(response);
                });
        }

        return contact;
    });