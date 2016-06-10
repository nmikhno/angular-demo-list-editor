'use strict';

angular.module('myApp')
    .service('itemsService', [function(){

        this.getAll = function () {
            var items = [];

            // It would be better to use angular.forEach
            // but http://stackoverflow.com/questions/37744935/angular-foreach-does-not-return-the-last-item-in-object

            //angular.forEach(localStorage, function(value, key){
            //    console.log('Key ',key);
            //    items.push({
            //        'id'    : key,
            //        'text'  : value
            //    });
            //});

            // that's why I used simple for loop
            for(var key in localStorage){
                if(localStorage.hasOwnProperty(key)){
                    items.push({
                        'id'    : key,
                        'text'  : localStorage[key]
                    });
                }
            }
            return items;
        };

        this.update =  function (itemId, updatedValue) {
            localStorage.setItem(itemId, updatedValue);
        };

        this.getById = function (id) {
            return {
                id:id,
                text:localStorage.getItem(id)
            }
        }

        this.addItem = function (newItem) {

            var itemsIds = Object.keys(localStorage);
            // if no items in localStorage
            if(itemsIds.length === 0 ){
                itemsIds = [0];
            }

            localStorage.setItem(Math.max.apply(Math, itemsIds) + 1, newItem);
        }

        this.deleteItem = function (itemId) {
            localStorage.removeItem(itemId);
        }
    }]);