$(document).ready(function(){

	$('.burger-menu').click(function(){
		$(this).parents('#header').toggleClass('clicked');
	});

	var $cont = $('#blog-cards').masonry({
		itemSelector: '.card'
	});

	$cont.imagesLoaded().progress(function(){
		$cont.masonry('layout');
	});

	$(window).resize(function(){
		$cont.imagesLoaded().progress(function(){
			$cont.masonry('layout');
		});
	});

	$(window).scroll(function(){
		var $windowPos = $(window).scrollTop();
		var $windowHeight = $(window).height();
		if ( $windowPos > $windowHeight ) {
			$('#back-to-top').fadeIn();
		}
		else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#header a').click(function(event) {
		var windowPos = $(window).scrollTop();
		if (windowPos > 0) {
			var link = $(this).attr('href').toString();
			var $location = window.location.href;
			console.log(link);
			console.log($location);
			if (($location.indexOf(link) > -1) || ($location == 'http://sebastianbailey.co.uk/' && link == '/projects')) {
				event.preventDefault();
				$('html, body').animate({scrollTop: 0});
			}
		}
	});

});