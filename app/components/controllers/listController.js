'use strict'

angular.module('myApp')
    .controller('listCtrl', ['$scope', 'itemsService', function($scope, itemsService){
        $scope.items = itemsService.getAll();

        $scope.deleteItem = function (itemId){
            itemsService.deleteItem(itemId);
            // update items on page
            $scope.items = itemsService.getAll();

        };
    }]);