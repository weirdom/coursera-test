(function () {
"use strict";

angular.module('public')
.controller('FormSignupController', FormSignupController);

FormSignupController.$inject = ['menuItems','MenuService'];
function FormSignupController(menuItems,MenuService) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems;
  $ctrl.InfoSaved = false;


  $ctrl.submit = function () { 
  	 var submitInfo = {};
     submitInfo.firstname = $ctrl.firstname;
     submitInfo.lastname = $ctrl.lastname;
     submitInfo.phonenum = $ctrl.phonenum;
     submitInfo.emailaddr = $ctrl.emailaddr;
     submitInfo.shortname = $ctrl.shortname;
     submitInfo.chooseItem = $ctrl.chooseItem;
  	 MenuService.saveSubmit(submitInfo);
  	 $ctrl.InfoSaved = true;
  };


  $ctrl.validateShortName  = function ()  { 
     
     $ctrl.shortNameValid = false;
  	 for(var i = 0; i < $ctrl.menuItems.menu_items.length; i++) {
		  if(menuItems.menu_items[i].short_name == $ctrl.shortname)
		  {
            $ctrl.shortNameValid = true;
            $ctrl.chooseItem = menuItems.menu_items[i];
            console.log($ctrl.shortNameValid);
		    return true;
		  }
	 }
	 console.log($ctrl.shortNameValid);
     return false;

  };

}

})();
