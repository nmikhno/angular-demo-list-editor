'use strict';

angular.module('myApp')
    .controller('addCtrl', ['$scope', 'itemsService', '$timeout', function ($scope, itemsService, $timeout) {
        $scope.save = function (newItem) {


            if ($scope.addItemForm.newItem.$valid) {
                itemsService.addItem(newItem);
                $scope.addItemForm.$setPristine();
                $scope.addItemForm.$setUntouched();
                $scope.newItem = '';

                $scope.userMessage = 'itemAdded';

                $timeout(function () {
                    $scope.userMessage = '';
                }, 1500);

            }else{
                return;
            }
        }
    }]);