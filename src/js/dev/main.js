var app = angular.module('myWebsite', ['ngRoute', 'wu.masonry', 'ngAnimate']);
	
app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: '_partials/home.html',
			controller: 'mainController'
		})
		.when('/work', {
			templateUrl: '_partials/work.html',
			controller: 'workController'
		})
		.when('/work/project/:projectName', {
			templateUrl: '_partials/project.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: '_partials/about.html',
			controller: 'aboutController'
		})
		.when('/contact', {
			templateUrl: '_partials/contact.html',
			controller: 'contactController'
		})
		.otherwise({ redirectTo: '/' });
	$locationProvider.html5Mode(true);
});

app.factory('instagram', ['$http', function($http){

	return {
		fetchPopular: function(callback){
            
            var endPoint = "https://api.instagram.com/v1/users/230978815/media/recent/?access_token=230978815.467ede5.1e39f843afb441068cdeb30c8747c12b&callback=JSON_CALLBACK";
            
            $http.jsonp(endPoint).success(function(response){
                callback(response.data);
            });
		}
	}

}]);

app.controller('mainController', function($scope, $routeParams) {
    $scope.name = "mainController";
    $scope.projectList = projects;
    $scope.params = $routeParams;
    $scope.$on('$viewContentLoaded', function(){
    	$('#header').removeClass('clicked');
    });
});
app.controller('workController', function($scope) {
	$scope.name = "workController";
	$scope.workList = work;
	$scope.workType = workType;
	$scope.$on('$viewContentLoaded', function(){
     	$('#header').removeClass('clicked');
    });
});
app.controller('aboutController', function($scope, $routeParams) {
    $scope.name = "aboutController";
    $scope.skillList = skills;
    $scope.educationList = education;
    $scope.experienceList = experience;
    $scope.hobbyList = hobbies;
    $scope.setActive = function(item) {
    	$scope.activeItem = item;
    	var hobbyCards = $('#hobby-cards').offset().top - 95;
    	$('html, body').animate({scrollTop: hobbyCards});
    };
    $scope.aboutList = aboutType;
    $scope.params = $routeParams;
    $scope.$on('$viewContentLoaded', function(){
    	$('#header').removeClass('clicked');
    });
});
app.controller('contactController', ['$scope', 'instagram' , function ($scope, instagram) {
	$scope.name = "contactController";
	$scope.contactList = contact;
	$scope.pics = [];
	instagram.fetchPopular(function(data){
		$scope.pics = data;
	});
	$scope.setActive = function(item) {
    	$scope.activeItem = item;
    };
	$scope.$on('$viewContentLoaded', function(){
    	$('#header').removeClass('clicked');
    });
}]);

angular.element(window).load(function(){
	    $('#loader').hide();
	});

@import 'projects-list.js';
@import 'work-list.js';
@import 'about-list.js';
@import 'contact-list.js';

var workType = [
	['gd', 'Graphic Design'],
	['ph', 'Photography'],
	['wd', 'Web Design'],
	['ar', 'architecture']
];

var aboutType = [
	['sk', 'Skills'],
	['ex', 'Experience'],
	['ed', 'Education'],
	['ho', 'Hobbies / Interests']	
];

$(document).ready(function(){

	$('.burger-menu').click(function(){
		$(this).parents('#header').toggleClass('clicked');
	});

});