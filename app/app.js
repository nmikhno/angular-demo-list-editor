'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl:'components/views/list/list.html',
            controller:'listCtrl'
        })
        .when('/list/add', {
            templateUrl:'components/views/list/add.html',
            controller:'addCtrl'
        })
        .when('/list/edit/:id', {
            templateUrl:'components/views/list/edit.html',
            controller:'editCtrl'
        })
        .otherwise({
            redirectTo:'/'
        })

}]);
