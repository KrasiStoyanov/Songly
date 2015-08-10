'use strict';

app.controller('HomeController', function($scope) {
	$scope.persons = [];

	$scope.addPerson = function() {
		$scope.persons.push({
			name: $scope.name,
			age: $scope.age
		});
	}
});