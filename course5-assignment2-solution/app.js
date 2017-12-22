(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.isBought = function (index) {
    ShoppingListCheckOffService.isBought(index);
  }
  
  toBuyList.isEmpty = function () {
	  return ShoppingListCheckOffService.getToBuyIsEmpty ();
  }
};




AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  boughtList.isToBuy = function (index) {
    ShoppingListCheckOffService.isToBuy(index);
  }
  
  
  boughtList.isEmpty = function () {
	  return ShoppingListCheckOffService.getBoughtIsEmpty ();
  }
  
  
};



//Service
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = ['Buy 10 cookies','Buy 10 cigars','Buy 5 bags of chips'];
  var boughtItems = ['Buy 6 pack of beers'];


  service.isBought = function (toBuyItemIdex) {
    boughtItems.push(toBuyItems[toBuyItemIdex]); //copy item from to buy into bought
	toBuyItems.splice(toBuyItemIdex, 1);         //remove item from to buy
  };
  
  service.isToBuy = function (boughtItemIdex) {
    toBuyItems.push(boughtItems[boughtItemIdex]); //copy item from bought into to buy 
	boughtItems.splice(boughtItemIdex, 1);        //remove item from bought
  };
  
  service.getToBuyItems = function () {
    return toBuyItems;
  };
  
  service.getBoughtItems = function () {
    return boughtItems;
  };  
  
  service.getToBuyIsEmpty = function () {
	  
	  if (toBuyItems.length == 0){
				  return true  
	  }
	  else {
		  return false
	  };
 
  };
  
  service.getBoughtIsEmpty = function () {

	  if (boughtItems.length == 0){
				  return true  
	  }
	  else {
		  return false
	  };
	  
  };  
  
}

})();