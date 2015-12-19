/**
 * Created by Poka on 12/17/2015.
 */

angular.module('utils', ['ngRoute'])
    .factory('Helper', ['$rootScope',function ($rootScope) {
        return {
            getScrollBarWidth: function () {
                var html = '<div style="position: absolute; top: -9999px; left: 0; overflow: scroll;">' +
                    '<div style="width: 100px; height: 100px;"></div>' +
                    '</div>';
                var $testDiv = $(html);
                var $testDivChild = $testDiv.find('div');

                $testDiv.appendTo('body');

                return $testDiv.width() - $testDivChild.width();
            },
            broadcastWhat: function (event) {
                $rootScope.$broadcast(event);
            }
        }
    }])
