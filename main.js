function contentLoaded(){$("#header").removeClass("clicked")}function contentLoadedDelay(){$("html, body").scrollTop($("html, body").offset().top)}var app=angular.module("myWebsite",["ngRoute","wu.masonry","ngAnimate"]);app.config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"_partials/home.html",controller:"homeController"}).when("/work",{templateUrl:"_partials/work.html",controller:"workController"}).when("/work/project/:projectName",{templateUrl:"_partials/project.html",controller:"projectController"}).when("/about",{templateUrl:"_partials/about.html",controller:"aboutController"}).when("/contact",{templateUrl:"_partials/contact.html",controller:"contactController"}).otherwise({redirectTo:"/"}),b.html5Mode(!0),b.hashPrefix("!")}]),app.factory("Page",function(){var a="Portfolio Website";return{title:function(){return a},setTitle:function(b){a=b}}}),app.factory("instagram",["$http",function(a){return{fetchData:function(b){var c="https://api.instagram.com/v1/users/3197786970/media/recent/?access_token=230978815.467ede5.1e39f843afb441068cdeb30c8747c12b&callback=JSON_CALLBACK";a.jsonp(c).success(function(a){b(a.data)})}}}]),app.factory("lastfm",["$http",function(a){var b={};return b.getArtists=function(){return a({method:"GET",url:"http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&limit=20&user=sebcglbailey&api_key=facf48415f1494c1a72a48ca0055093b&format=json"})},b}]),app.controller("mainController",["$scope","Page",function(a,b){a.Page=b}]),app.controller("homeController",["$scope","$routeParams","$http","Page",function(a,b,c,d){a.projectList=projects,a.params=b,d.setTitle("Projects"),a.$on("$viewContentLoaded",function(){contentLoaded(),setTimeout(contentLoadedDelay,510)})}]),app.controller("projectController",["$scope","$routeParams","$http","Page",function(a,b,c,d){a.projectList=projects,a.params=b,d.setTitle(a.params.projectName),a.$on("$viewContentLoaded",function(){contentLoaded(),setTimeout(contentLoadedDelay,510)})}]),app.controller("workController",["$scope","Page",function(a,b){a.workList=work,a.workType=workType,b.setTitle("Work"),a.$on("$viewContentLoaded",function(){contentLoaded(),setTimeout(contentLoadedDelay,510)})}]),app.controller("aboutController",["$scope","$routeParams","Page",function(a,b,c){a.skillList=skills,a.educationList=education,a.experienceList=experience,a.hobbyList=hobbies,c.setTitle("About"),a.setActive=function(b){a.activeItem=b;var c=$("#hobby-cards").offset().top-95;$("html, body").animate({scrollTop:c})},a.aboutList=aboutType,a.params=b,a.$on("$viewContentLoaded",function(){contentLoaded(),setTimeout(contentLoadedDelay,510)})}]),app.controller("contactController",["$scope","instagram","lastfm","Page",function(a,b,c,d){a.contactList=contact,a.pics=[],d.setTitle("Contact"),b.fetchData(function(b){a.pics=b,a.activeItemIn=b[0]}),a.topArtists=[],c.getArtists().success(function(b){a.topArtists=b,a.activeItemLf=b.topartists.artist[0]}),a.setActiveIn=function(b){a.activeItemIn=b;var c=$("#insta-cards").offset().top-95;$(window).width()<640&&$("html, body").animate({scrollTop:c})},a.setActiveLf=function(b){a.activeItemLf=b;var c=$("#lastfm-cards").offset().top-95;$(window).width()<640&&$("html, body").animate({scrollTop:c})},a.$on("$viewContentLoaded",function(){contentLoaded(),setTimeout(contentLoadedDelay,510)})}]),angular.element(window).load(function(){angular.element(window).imagesLoaded().always(function(){$("#loader").hide()})}),$(document).ready(function(){$(".burger-menu").click(function(){$(this).parents("#header").toggleClass("clicked")}),$(window).click(function(){$("#splash-logo-container").fadeOut()}),$(window).scroll(function(){$("#splash-logo-container").fadeOut()}),$("#header a").click(function(a){var b=$(window).scrollTop();if(b>0){var c=$(this).attr("href").toString(),d=window.location.href;console.log(c),console.log(d),(d.indexOf(c)>-1||"http://sebastianbailey.co.uk/"==d&&"/projects"==c)&&(a.preventDefault(),$("html, body").animate({scrollTop:0}))}})});
//# sourceMappingURL=main.js.map