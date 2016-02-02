/**
 * Created by Poka on 1/31/2016.
 */

//TODO: refer to the following link to implement session recovery
//http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
angular.module('module.common',[ 'ui.router'])
.factory('ApiHttpIntercepter', function ($q,$injector) {
    return {
        // optional method
        'request': function(config) {
            // do something on success
            return config;
        },

        // optional method
        'requestError': function(rejection) {
            // do something on error
            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        },



        // optional method
        'response': function(response) {

            // do something on success
            return response;
        },

        // optional method
        'responseError': function(rejection) {
            var SessionService = $injector.get('SessionService');
            var $http = $injector.get('$http');
            var deferred = $q.defer();

            //SessionService.initSession();

            // do something on error
            //if (canRecover(rejection)) {
            //    return responseOrNewPromise
            //}
            return $q.reject(rejection);
        }
    };
})