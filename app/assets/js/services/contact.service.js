/**
 * Created by Poka on 1/31/2016.
 */
var appService = angular.module('module.services', ['ui.router'])
    .factory('ContactService', function ($http) {
        var contact = {};

        return contact;
    });