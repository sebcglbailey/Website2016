angular.module('myWebsite', ['ngRoute'])
	.controller('MainController', function($scope, $route, $routeParams, $location) {
	     $scope.$route = $route;
	     $scope.$location = $location;
	     $scope.$routeParams = $routeParams;
	 })
	.controller('projectController', function($scope, $routeParams){
		$scope.name = "projectController";
		$scope.projectList = projects;
	})
	.controller('workController', function($scope, $routeParams){
		$scope.name = "workController";
		$scope.workList = work;
		$scope.workType = workType;
	})
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'projects.php',
				controller: 'projectController as list'
			})
			.when('/work', {
				templateUrl: 'work.php',
				controller: 'workController as list'
			});
	}]);

@import 'projects-list.js';
@import 'work-list.js';

var workType = [
	['gd', 'Graphic Design'],
	['ph', 'Photography'],
	['wd', 'Web Design'],
	['ar', 'architecture']
]