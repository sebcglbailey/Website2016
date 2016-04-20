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

var projects = [

	{	
		arNo: 0,
		name: 'ArchitectureOne',
		type: ['ar', 'Architecture'],
		filename: 'xgames.php', // MUST MATCH PHP FILENAME in work/projects !!!
		title: 'ArchitectureOne',
		coverImage: {
			large: '/src/img/projects/xgames/X-01.jpg'
		},
		projectImages: [
			'/src/img/projects/xgames/X-01.jpg',
			'/src/img/projects/xgames/X-02.jpg',
			'/src/img/projects/xgames/X-03.jpg',
			'/src/img/projects/xgames/X-04.jpg',
			'/src/img/projects/xgames/X-05.jpg',
			'/src/img/projects/xgames/X-06.jpg',
			'/src/img/projects/xgames/X-07.jpg',
			'/src/img/projects/xgames/X-08.jpg',
			'/src/img/projects/xgames/X-09.jpg',
			'/src/img/projects/xgames/X-10.jpg',
			'/src/img/projects/xgames/X-11.jpg',
			'/src/img/projects/xgames/X-12.jpg',
		],
		layout: 'long-image'
	}, 

	{	
		arNo: 1,
		name: 'China',
		type: ['ph', 'Photography'],
		filename: 'china.php', // MUST MATCH PHP FILENAME in work/projects !!!
		title: 'China Photographs',
		description: 'A collection of photographs from a trip to Beijing and Chengdu, China in November 2014.',
		coverImage: {
			large: '/src/img/projects/china/CH_09.jpg'
		},
		projectImages: [
			'/src/img/projects/china/CH_01.jpg',
			'/src/img/projects/china/CH_02.jpg',
			'/src/img/projects/china/CH_03.jpg',
			'/src/img/projects/china/CH_04.jpg',
			'/src/img/projects/china/CH_05.jpg',
			'/src/img/projects/china/CH_06.jpg',
			'/src/img/projects/china/CH_07.jpg',
			'/src/img/projects/china/CH_08.jpg',
			'/src/img/projects/china/CH_09.jpg',
			'/src/img/projects/china/CH_10.jpg',
			'/src/img/projects/china/CH_11.jpg',
			'/src/img/projects/china/CH_12.jpg'
		],
		layout: 'single-images'
	},

	{	
		arNo: 2,
		name: 'Landseer-Snowboards',
		type: ['gd', 'Graphic Design'],
		filename: 'landseer-snowboards.php', // MUST MATCH PHP FILENAME in work/projects !!!
		title: 'Landseer Snowboards',
		description: 'A collection of snowboard designs for the fictional company "Landseer Snowboards."',
		coverImage: {
			large: '/src/img/projects/landseer-snowboards/LB_cover.jpg'
		},
		projectImages: [
			'/src/img/projects/landseer-snowboards/LB_01.jpg'
		],
		layout: 'single-images'
	},

	{
		arNo: 3,
		name: 'XGames',
		type: ['ux', 'User Experience'],
		filename: 'xgames.php', // MUST MATCH PHP FILENAME in work/projects !!!
		title: 'X-Games Mobile App Design',
		description: 'iOS app design for X-Games Aspen 2016. Attendees and fans of the competition can keep up to date with all the latest news, videos, results and timings of the the event from one central, easy application.',
		coverImage: {
			large: '/src/img/projects/xgames/X-01.jpg'
		},
		projectImages: [
			'/src/img/projects/xgames/X-01.jpg',
			'/src/img/projects/xgames/X-02.jpg',
			'/src/img/projects/xgames/X-03.jpg',
			'/src/img/projects/xgames/X-04.jpg',
			'/src/img/projects/xgames/X-05.jpg',
			'/src/img/projects/xgames/X-06.jpg',
			'/src/img/projects/xgames/X-07.jpg',
			'/src/img/projects/xgames/X-08.jpg',
			'/src/img/projects/xgames/X-09.jpg',
			'/src/img/projects/xgames/X-10.jpg',
			'/src/img/projects/xgames/X-11.jpg',
			'/src/img/projects/xgames/X-12.jpg',
		],
		layout: 'long-image'
	}

];
var work = [
	{
		type: 'ph',
		title: 'Roman Villa',
		image: '/src/img/work/ph/RO_03.jpg'
	},
	{
		type: 'gd',
		title: 'The Joker',
		image: '/src/img/work/gd/GA_03.jpg'
	},
	{
		type: 'ph',
		title: 'Roman Steps',
		image: '/src/img/work/ph/RO_04.jpg'
	},
	{
		type: 'gd',
		title: 'Day of the Dead',
		image: '/src/img/work/gd/GA_02.jpg'
	},
	{
		type: 'gd',
		title: 'Imprima Glass Mural',
		image: '/src/img/work/gd/IMP_01.jpg'
	},
	{
		type: 'ph',
		title: 'The Pantheon – Rome',
		image: '/src/img/work/ph/RO_02.jpg',
	},
	{
		type: 'ar',
		title: '3D Wireframe Render for Foster + Partners',
		image: '/src/img/work/ar/FP_02.jpg'
	},
	{
		type: 'ar',
		title: '3D Render for Foster + Partners',
		image: '/src/img/work/ar/FP_01.jpg'
	},
	{
		type: 'gd',
		title: 'ArcSoc Bar Graphic',
		image: '/src/img/work/gd/GA_01.jpg'
	},
	{
		type: 'ph',
		title: 'Parco Della Musica – Rome',
		image: '/src/img/work/ph/RO_01.jpg'
	}
];
var skills = [
	['sk','skills'],
	{
		skill: 'Ps',
		level: '80%'
	},
	{
		skill: 'Ai',
		level: '90%'
	},
	{
		skill: 'Id',
		level: '60%'
	},
	{
		skill: 'Ae',
		level: '45%'
	},
	{
		skill: 'Xd',
		level: '95%'
	},
	{
		skill: 'HTML5',
		level: '85%'
	},
	{
		skill: 'CSS3',
		level: '80%'
	},
	{
		skill: 'Javascript',
		level: '60%'
	},
	{
		skill: 'JQuery',
		level: '75%'
	},
	{
		skill: 'PHP',
		level: '45%'
	},
	{
		skill: 'SASS',
		level: '80%'
	},
	{
		skill: 'AngularJS',
		level: '60%'
	}
];

var experience = [
	['ex','experience'],
	{
		image: '/src/img/about/palringo.jpg',
		company: 'Palringo Ltd',
		dates: 'March 2015 - Present',
		title: 'Graphic Designer, Web Designer'
	},
	{
		image: '/src/img/about/imprima.jpg',
		company: 'Imprima',
		dates: 'May 2013 - February 2015',
		title: 'Head of Design, Graphic Designer'
	},
	{
		image: '/src/img/about/burton.png',
		company: 'Burton Menswear – Arcadia Group Ltd',
		dates: 'June 2012 - May 2013',
		title: 'Sales Assistant'
	},
	{
		image: '/src/img/about/fosters.jpg',
		company: 'Foster + Partners',
		dates: 'June 2008, June 2009',
		title: 'Work Experience, Architectural Assistant'
	}
];

var education = [
	['ed','education'],
	{
		image: '/src/img/about/sidney-sussex.jpg',
		name: 'Cambridge University – Sidney Sussex College',
		dates: '2009 - 2012',
		cert: 'Architecture, BA Hons. (Cantab.), RIBA Part I',
		clubs: 'Member of Sidney Sussex Porcupines\' Sporting Society for participating in College Rugby and Snowboarding' 
	},
	{
		image: '/src/img/about/whitgift.jpg',
		name: 'Whitgift School',
		dates: '2002 - 2009',
		cert: 'A Levels, 4 A\'s, Further Mathematics, Mathematics, Physics, Art, GCSE\'s, 6 A*s, 3 As, 2 Bs, Design & Technology, English Language, Japanese, Mathematics, Physics, Theology & Philosophy, Chemistry, English Literature, French, Biology, Fine Art'
	}
	
];

var hobbies = [
	['ho','hobbies / interests'],
	{
		hobby: 'Snowboarding',
		text: 'Snowboarding is my real passion in life. there really is no better feeling than gliding over a fresh dump of powder with the sun beating down on your back, and not hearing a sound except the crunch of snow beneath the board. I\'ve been snowboarding since i was 10 years old, and try to go for at least one week a year.',
		image: '/src/img/about/sbd-med.jpg'
	},
	{
		hobby: 'Photography',
		text: 'I use photography in a lot of my work, and try to base a lot of my designs off of the photos that I take myself, rather than use boring stock photographs! Whenever I go somewhere new, I will try to take my SLR with me, but I always have my phone handy to take some shots for Instagram if I don\'t!',
		image: '/src/img/about/photo-med.jpg'
	},
	{
		hobby: 'Skiing',
		text: 'Skiing isn\'t as good as snowboarding (here\'s where the skiiers go \'boo-hiss\'), but it\'s still one of my favourite past-times. I\'ve been skiing since I can remember (with a big gap in the middle to learn to snowboard) so it\'s easy to understand why I love winter and snow so much.',
		image: '/src/img/about/ski-med.jpg'
	},
	{
		hobby: 'Travelling',
		text: 'I\'m not exactly a veteran traveller, but I do love to go to different places when I get the chance to. Experiencing a different culture can be particularly rewarding and you get to learn so much. Wherever I go, I always try and find some interesting places to take photos of, and to not just be a \'standard tourist.\'',
		image: '/src/img/about/travel-med.jpg'
	},
	{
		hobby: 'Karate',
		text: 'I started karate when I was about 8 years old and became a black belt when I was 15. It\'s really helped me to learn about discipline and is definitely one of the greatest achievements in my life. I have never been as tired as I was after enduring the three hour grading for my black belt.',
		image: '/src/img/about/karate.gif'
	},
	{
		hobby: 'Music',
		text: 'Life can\'t exist without music. It\'s as simple as that. I literally can\'t go a day without listening to something. You will rarely see me without a pair of headphones or just nodding along to a tune I have in my head.',
		image: '/src/img/about/music-med.jpg'
	},
	{
		hobby: 'DJing',
		text: 'With my love for music comes the djing. I\'m not really into the whole gig thing – it\'s more just for personal pleasure. I try to mess around on the decks every now and then (electronic), but I would really love to get into vinyl djing to really get back to the roots.',
		image: '/src/img/about/dj-med.jpg'
	},
	{
		hobby: 'Cooking',
		text: 'I\'ll never consider myself to be a decent cook - my family will always manage to out-do me by a long shot - but I do like to throw together some ingredients in the kitchen and see how it turns out. If i\'m trying to impress though, a recipe is definitely the way to go.',
		image: '/src/img/about/cooking-med.jpg'
	}
];
var contact = [
	{
		href: "http://www.instagram.com/sebcglbailey",
		title: "Instagram",
		name: "Ig",
		type: "ig"
	},
	{
		href: "http://www.twitter.com/sebcglbailey",
		title: "Twitter",
		name: "Tw",
		type: "tw"
	},
	{
		href: "https://www.linkedin.com/pub/sebastian-bailey/5a/365/311",
		title: "LinkedIn",
		name: "Li",
		type: "li"
	},
	{
		href: "https://www.behance.net/sebcglbailey",
		title: "Behance",
		name: "Be",
		type: "be"
	},
	{
		href: "http://www.last.fm",
		title: "LastFM",
		name: "Lf",
		type: "lf"
	}
]

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