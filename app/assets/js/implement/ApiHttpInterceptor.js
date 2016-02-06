/**
 * Created by Poka on 1/31/2016.
 */

//TODO: refer to the following link to implement session recovery
//http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
angular.module('module.common', ['ui.router', 'ngCookies'])
    .factory('ApiHttpIntercepter', function ($q, $injector) {
        return {
            // optional method
            'request': function (config) {
                if (config.url.indexOf('api/') < 0)
                    return config;
                if (config.url.indexOf('api/init-session') >= 0)
                    return config;

                // do something on success
                var $http = $injector.get('$http');
                var $cookies = $injector.get('$cookies');

                if ($cookies.checkCookieExpired()) {
                    var deferred = $q.defer();
                    var lastUrl = config.url;
                    $http.get(GetApiUrl('init-session'))
                        .then(function (response) {
                            console.log('Renew session On request success');
                            $http.get(lastUrl)
                                .then(function (response) {
                                    deferred.resolve(config);
                                }, function (response) {
                                    deferred.resolve(config);
                                });
                        }, function (response) {
                            console.log('Renew session On request failed');
                        });
                    return deferred.promise;
                }
                return config;
            },

            // optional method
            'requestError': function (rejection) {
                // do something on error
                if (canRecover(rejection)) {
                    return responseOrNewPromise
                }
                return $q.reject(rejection);
            },


            // optional method
            'response': function (response) {

                if(response.data.Reload===1){
                    window.location.reload();
                }
                // do something on success
                return response;
            },

            // optional method
            'responseError': function (rejection) {

                console.log(rejection);
                // do something on error
                //if (canRecover(rejection)) {
                //    return responseOrNewPromise
                //}
                return $q.reject(rejection);
            }
        };
    })