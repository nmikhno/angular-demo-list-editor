'use strict'

angular.module('myApp')
    .controller('editCtrl', ['$scope', 'itemsService', '$routeParams', '$timeout', editCtrl]);

function editCtrl($scope, itemsService, $routeParams, $timeout) {
    var itemId = $routeParams.id;

    $scope.editedItem = itemsService.getById(itemId).text;

    $scope.saveChanges = function () {
        itemsService.update(itemId, $scope.editedItem.trim());
        $scope.userMessage = 'Item successfully updated';

        $timeout(function () {
            $scope.userMessage = '';
        }, 1500);

    }
}
