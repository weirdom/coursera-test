(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);	

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

    $scope.buttonClick = function () {

		if ( $scope.inputList ) {
			var itemsArray = $scope.inputList.split(",")
			if ( itemsArray.length <= 3 ) {
				$scope.message = "Enjoy!"
			}
			else {
				$scope.message = "Too Much!"
			};			
		}	
        else {
            $scope.message = "Please enter data first"
		}

    };

};
})();