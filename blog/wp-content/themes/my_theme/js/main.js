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
		console.log($windowPos);
		console.log($windowHeight);
		if ( $windowPos > $windowHeight ) {
			$('#back-to-top').fadeIn();
		}
		else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function(){
		var top = $('html, body').offset().top;
		$('html, body').animate({scrollTop: top});
	});

});