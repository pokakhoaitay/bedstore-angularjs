/**
 * Created by Poka on 1/31/2016.
 */
var ngService = angular.module('module.services', ['ui.router'])
    .factory('ContactService', function ($http) {
        var contact = {};
        contact.testHeader= function () {
            $http.get('/api/contact/test-header')
                .then(function (response) {
                    console.log(response.data.header)
                }, function (error) {

                })
        }
        return contact;
    });