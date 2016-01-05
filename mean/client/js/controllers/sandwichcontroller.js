var sandwichbarApp = angular.module("sandwichbarApp",['ngResource']);

sandwichbarApp.controller("sandwichController",['$scope','$resource', function($scope, $resource){
	//define  the server controller
	var Sandwich = $resource('/api/sandwiches/');

	Sandwich.query(function(results){
		$scope.Sandwiches = results;
	});

	$scope.PlaceOrder = function(){
		var sandwich = new Sandwich();
		// Copy values to server object.
		sandwich.name = $scope.name;
		sandwich.price = $scope.price;

		// Save server object
		sandwich.$save(function(result){
			// push the server result back to the client scope.
			$scope.Sandwiches.push(result);
			$scope.name = '';
			$scope.price= '';
		});
	};
}]);
