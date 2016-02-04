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
                var deferred = $q.defer();
                var $http = $injector.get('$http');
                var $cookies = $injector.get('$cookies');
                var tokenName = $http.defaults.xsrfCookieName;
                var cook = $cookies.get(tokenName);

                if (!$cookies.get(tokenName)) {
                    $http.get('api/init-session')
                        .then(function (response) {
                            console.log('Renew session On request success');
                        }, function (response) {

                        });
                }
                return deferred.promise;
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

                // do something on success
                return response;
            },

            // optional method
            'responseError': function (rejection) {
                if (rejection.config.url.indexOf('api/') < 0)
                    return $q.reject(rejection);
                if (rejection.config.config.url.indexOf('api/init-session') >= 0)
                    return $q.reject(rejection);
                var deferred = $q.defer();
                var $http = $injector.get('$http');
                var $cookies = $injector.get('$cookies');
                var tokenName = $http.defaults.xsrfCookieName;
                var cook = $cookies.get(tokenName);

                if (!$cookies.get(tokenName)) {
                    $http.get('api/init-session')
                        .then(function (response) {
                            console.log('Renew session On response success');
                        }, function (response) {

                        });
                }
                //var SessionService = $injector.get('SessionService');
                //var $http = $injector.get('$http');
                //var $cookies = $injector.get('$cookies');
                //var deferred = $q.defer();
                //var tokenName = $http.defaults.xsrfCookieName;
                //
                //if (!$cookies.get(tokenName)) {
                //    return function () {
                //        SessionService.initSession();
                //    }
                //}

                console.log(rejection);
                // do something on error
                //if (canRecover(rejection)) {
                //    return responseOrNewPromise
                //}
                return $q.reject(rejection);
            }
        };
    })