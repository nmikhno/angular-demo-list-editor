'use strict';

angular.module('myApp')
    .directive('addItem', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/addItem/addItem.html',
            controller: 'addCtrl',
            scope: true,
            replace: true
        }
    });