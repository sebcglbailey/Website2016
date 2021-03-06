var app = angular.module('myWebsite', ['ngRoute', 'wu.masonry']);
	
app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '_partials/home.html',
			controller: 'mainController as list'
		})
		.when('/work', {
			templateUrl: '_partials/work.html',
			controller: 'workController as list'
		});
});

app.controller('mainController', function($scope) {
     $scope.message = "HOME PAGE! with projects:";
     $scope.name = "mainController";;
     $scope.projectList = projects;
});
app.controller('workController', function($scope) {
	$scope.message = "work page! single projects:";
	$scope.name = "workController";
	$scope.workList = work;
	$scope.workType = workType;
});

var projects = [

	{	
		arNo: '0',
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
		]
	}, 

	{	
		arNo: '1',
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
		]
	},

	{	
		arNo: '2',
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
		]
	},

	{
		arNo: '3',
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
		]
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

var workType = [
	['gd', 'Graphic Design'],
	['ph', 'Photography'],
	['wd', 'Web Design'],
	['ar', 'architecture']
]