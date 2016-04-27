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

});