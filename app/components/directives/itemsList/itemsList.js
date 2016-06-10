'use strict';

angular.module('myApp')
    .directive('itemsList', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/itemsList/itemsList.html',
            controller: 'listCtrl',
            scope: true,
            replace: true
        };
    });


