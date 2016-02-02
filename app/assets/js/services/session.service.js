/**
 * Created by Poka on 1/31/2016.
 */
appService.factory('SessionService', function ($http) {
    var service = {};
    service.renewCookie = function () {
        $http.get('/api/renew-cookie')
            .then(function (response) {
                alert('hehe');
            }, function (response) {

            })
    }
    return service;
});