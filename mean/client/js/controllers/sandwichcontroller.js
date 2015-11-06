var sandwichbarApp = angular.module("sandwichbarApp",[]);

sandwichbarApp.controller("sandwichController",['$scope', function($scope){
	$scope.Sandwiches = [
		{ Name:"Martino", Price:3.00},
		{Name:"Club",Price:2.5 },
		{Name:"Mozarella",Price:3.20}
		];
		
	$scope.PlaceOrder = function(data){
		console.log(data.Name);
		console.log(data.Price);
		$scope.Sandwiches.push(data);
	};
}]);


sandwichbarApp.controller("orderController",['$scope',function($scope){
	
}]);