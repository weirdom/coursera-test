(function (){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.constant('apiBasePath',"https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController  (MenuSearchService) {
    var matchedItems = this;
    
	matchedItems.found = [];
	
	matchedItems.search = function (searchTerm) {
	  MenuSearchService.getMatchedMenuItems (searchTerm).then (
	    function (result) {
		   matchedItems.found = result;
		} 
	  );
    }
   
    matchedItems.removeItem = function (index) {
      matchedItems.found.splice(index, 1);
    };  
	
};

MenuSearchService.$inject = ['$http','apiBasePath'];
function MenuSearchService($http,apiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
		           method:"GET",
				   url: apiBasePath + "/menu_items.json"
				 }).then(function (result) {
					var foundItems = [];
					// process result and only keep items that match					 
					
					for (var i = 0; i < result.data.menu_items.length; i++) { 
						if ( result.data.menu_items[i].description.indexOf(searchTerm) >= 0) {
							foundItems.push(result.data.menu_items[i]);
						}
					}
					return foundItems;
				});

  };
  

};

function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsTemplate.html',
	scope: {
      found: '<',
	  onRemove: '&'
    },
	controller: foundItemsDirectiveController,
	controllerAs: 'items',
	bindToController: true
  };

  return ddo;
}

function foundItemsDirectiveController () {
	return true;
}

})();