var app = angular.module('myWebsite', ['ngRoute', 'wu.masonry', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: '_partials/home.html',
			controller: 'homeController'
		})
		.when('/work', {
			templateUrl: '_partials/work.html',
			controller: 'workController'
		})
		.when('/project/:projectName', {
			templateUrl: '_partials/project.html',
			controller: 'projectController'
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
	$locationProvider.hashPrefix('!');
}]);

app.factory('Page', function(){
  var title = 'Portfolio Website';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});

app.factory('instagram', ['$http', function($http){
	return {
		fetchData: function(callback){
            var endPoint = "https://api.instagram.com/v1/users/3197786970/media/recent/?access_token=230978815.467ede5.1e39f843afb441068cdeb30c8747c12b&callback=JSON_CALLBACK";
            $http.jsonp(endPoint).success(function(response){
                callback(response.data);
            });
		}
	}
}]);
app.factory('lastfm', ['$http', function($http) {
	var topArtists = {};
	topArtists.getArtists = function() {
		return $http({
			method: 'GET',
			url: 'http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&limit=20&user=sebcglbailey&api_key=facf48415f1494c1a72a48ca0055093b&format=json'
		});
	}
	return topArtists;
}]);

function contentLoaded() {
	$('#header').removeClass('clicked');
}
function contentLoadedDelay() {
	$('html, body').scrollTop( $('html, body').offset().top );
}

app.controller('mainController', ['$scope', 'Page', function($scope, Page){
	$scope.Page = Page;
}]);

app.controller('homeController', ['$scope', '$routeParams', '$http', 'Page', function($scope, $routeParams, $http, Page) {
    $scope.projectList = projects;
    $scope.params = $routeParams;
    Page.setTitle('Projects');
    $scope.$on('$viewContentLoaded', function(){
    	contentLoaded();
    	setTimeout(contentLoadedDelay, 510);
    });
}]);
app.controller('projectController', ['$scope', '$routeParams', '$http', 'Page', 'filterFilter', function($scope, $routeParams, $http, Page, filterFilter) {
    $scope.projectList = projects;
    $scope.params = $routeParams;
    $scope.p = filterFilter(projects, {name: $scope.params.projectName})[0];
    Page.setTitle($scope.p.title);
    $('meta[name="description"]').attr('content', $scope.p.description);
    $scope.$on('$viewContentLoaded', function(){
    	contentLoaded();
    	setTimeout(contentLoadedDelay, 510);
    });
}]);
app.controller('workController', ['$scope', 'Page', function($scope, Page) {
	$scope.workList = work;
	$scope.workType = workType;
	Page.setTitle('Work');
	$('meta[name="description"]').attr('content', workDescription);
	$scope.$on('$viewContentLoaded', function(){
     	contentLoaded();
     	setTimeout(contentLoadedDelay, 510);
    });
}]);
app.controller('aboutController', ['$scope', '$routeParams', 'Page', function($scope, $routeParams, Page) {
    $scope.skillList = skills;
    $scope.educationList = education;
    $scope.experienceList = experience;
    $scope.hobbyList = hobbies;
    Page.setTitle('About');
    $('meta[name="description"]').attr('content', aboutDescription);
    $scope.setActive = function(item) {
    	$scope.activeItem = item;
    	var hobbyCards = $('#hobby-cards').offset().top - 95;
    	$('html, body').animate({scrollTop: hobbyCards});
    };
    $scope.aboutList = aboutType;
    $scope.params = $routeParams;
    $scope.$on('$viewContentLoaded', function(){
    	contentLoaded();
    	setTimeout(contentLoadedDelay, 510);
    });
}]);
app.controller('contactController', ['$scope', 'instagram', 'lastfm', 'Page', function ($scope, instagram, lastfm, Page) {
	$scope.contactList = contact;
	$scope.pics = [];
	Page.setTitle('Contact');
	$('meta[name="description"]').attr('content', contactDescription);
	instagram.fetchData(function(data){
		$scope.pics = data;
		$scope.activeItemIn = data[0];
	});
	$scope.topArtists = [];
	lastfm.getArtists().success(function(response) {
		$scope.topArtists = response;
		$scope.activeItemLf = response.topartists.artist[0];
	});
	$scope.setActiveIn = function(item) {
    	$scope.activeItemIn = item;
    	var instaCards = $('#insta-cards').offset().top - 95;
    	if ( $(window).width() < 640 ) {
    		$('html, body').animate({scrollTop: instaCards});
    	}
    };
    $scope.setActiveLf = function(item) {
    	$scope.activeItemLf = item;
    	var lastFmCards = $('#lastfm-cards').offset().top - 95;
    	if ( $(window).width() < 640 ) {
    		$('html, body').animate({scrollTop: lastFmCards});
    	}
    };
	$scope.$on('$viewContentLoaded', function(){
    	contentLoaded();
    	setTimeout(contentLoadedDelay, 510);
    });
}]);

angular.element(window).load(function(){
	angular.element(window).imagesLoaded().always(function(){
		$('#loader').hide();
	});
});

$(document).ready(function(){

	$('.burger-menu').click(function(){
		$(this).parents('#header').toggleClass('clicked');
	});

	$(window).click(function(){
		$('#splash-logo-container').fadeOut();
	});

	$(window).scroll(function(){
		$('#splash-logo-container').fadeOut();
	});

	$('#header a').click(function(event) {
		var windowPos = $(window).scrollTop();
		if (windowPos > 0) {
			var link = $(this).attr('href').toString();
			var $location = window.location.href;
			if (($location.indexOf(link) > -1) || ($location == 'http://sebastianbailey.co.uk/' && link == '/projects')) {
				event.preventDefault();
				$('html, body').animate({scrollTop: 0});
			}
		}
	});

});