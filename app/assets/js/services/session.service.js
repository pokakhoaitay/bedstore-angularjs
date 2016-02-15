/**
 * Created by Poka on 1/31/2016.
 */
appService
    .factory('SessionService', function ($http, $cookies) {
        var service = {};
        service.initSession = function () {
            $http.get(utils.GetApiUrl('init-session'))
                .then(function (response) {
                    //console.log('Renew session success');
                }, function (response) {

                });
        }
        return service;
    });