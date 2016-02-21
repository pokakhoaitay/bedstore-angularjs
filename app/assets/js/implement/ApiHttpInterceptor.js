/**
 * Created by Poka on 1/31/2016.
 */

//TODO: refer to the following link to implement session recovery
//http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
angular.module('module.common', ['ui.router', 'ngCookies'])
    .factory('ApiHttpIntercepter', function ($q, $injector, $exceptionHandler) {
        return {
            // optional method
            'request': function (config) {
                var $cookies = $injector.get('$cookies');
                var $http = $injector.get('$http');


                if (!$cookies.checkCookieExpired() && config.url.indexOf('proxy/') < 0)
                    return config;
                if (config.url.indexOf('proxy/init-session') >= 0)
                    return config;

                if ($cookies.checkCookieExpired()) {
                    var deferred = $q.defer();
                    var lastUrl = config.url;
                    $http.get(utils.GetApiUrl('init-session'))
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
                //if (canRecover(rejection)) {
                //    return responseOrNewPromise
                //}
                utils.logWithCheck(rejection);
                return $q.reject(rejection);
            },


            // optional method
            'response': function (response) {

                if (response.data.Reload === 1) {
                    alert('Your session was expired. The web page will be reload now!')
                    window.location.reload();
                }
                // do something on success
                return response;
            },

            // optional method
            'responseError': function (rejection) {
                if (rejection.status != 404) {
                    var $mdDialog = $injector.get('$mdDialog');
                    var $mdMedia = $injector.get('$mdMedia');


                    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
                    $mdDialog.show({
                            locals: {
                                errorContent: {
                                    data: rejection.data,
                                    status: rejection.status,
                                    statusText: rejection.statusText,
                                }
                            },
                            controller: DialogController,
                            templateUrl: 'views/partials/popup/dev.errorpopup.html',
                            parent: angular.element(document.body),
                            //targetEvent: ev,
                            clickOutsideToClose: true,
                            fullscreen: useFullScreen
                        })
                        .then(function (answer) {
                        }, function () {
                        });
                    utils.logWithCheck(rejection);
                } else {//Error 404
                    //Check out this: http://stackoverflow.com/questions/31509183/how-to-remove-file-not-found-error-in-angular-js
                    //$exceptionHandler(
                    //    new Error(
                    //        rejection.config.method + ' ' +
                    //        rejection.config.url + ' ' +
                    //        rejection.status + ' ' +
                    //        '(' + rejection.statusText + ')')
                    //);
                }


                // do something on error
                //if (canRecover(rejection)) {
                //    return responseOrNewPromise
                //}
                return $q.reject(rejection);
            }
        };
    });


function DialogController($scope, $mdDialog, errorContent, $sce) {
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.errorHtml = $sce.trustAsHtml(errorContent.data);
    $scope.errorContent = errorContent;
}