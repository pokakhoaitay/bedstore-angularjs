/**
 * Created by Poka on 1/31/2016.
 */
var ngService = angular.module('module.services', ['ui.router'])
    .factory('ContactService', function () {
        var contact = {};
        contact.say= function () {
            alert('I am Contact');
        }
        return contact;
    });