(function () {
"use strict";

angular.module('public')
.controller('submittedController', submittedController);

submittedController.$inject = ['submitInfo'];
function submittedController(submitInfo) {
   var $ctrl = this;
   $ctrl.submitInfo = submitInfo;
}

})();
