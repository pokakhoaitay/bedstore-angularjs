/**
 * Created by Poka on 1/31/2016.
 */
appService
    .factory('SessionService', function ($http) {
        var service = {};
        service.initSession = function () {
            $http.get('/api/init-session')
                .then(function (response) {
                }, function (response) {

                });
        }
        return service;
    });