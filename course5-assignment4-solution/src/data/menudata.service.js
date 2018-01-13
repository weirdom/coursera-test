(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('apiBasePath',"https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http','apiBasePath']
function MenuDataService($http,apiBasePath) {
  var service = this;
  service.getAllCategories = function () {
	  return $http({
		           method:"GET",
				   url: apiBasePath + "/categories.json"
				 }).then(function (result) {
					return result;
				});
  };


  service.getItemsForCategory = function (categoryShortName) {
	  return $http({
		           method:"GET",
				   url: apiBasePath + "/menu_items.json?category=" + categoryShortName
				 }).then(function (result) {
					return result;
				});	  
  };
}

})();
