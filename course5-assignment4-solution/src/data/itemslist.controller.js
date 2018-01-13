(function () {
'use strict';

angular.module('data')
.controller('itemsListController', itemsListController);


itemsListController.$inject = ['items'];
function itemsListController(items) {
  var itemsList = this;
  itemsList.items = items.data.menu_items;	
  itemsList.category = items.data.category.name;
}

})();
