$(document).ready(function(){

	var $grid = $('masonry');

	$('masonry').imagesLoaded(function(){
		$grid.masonry('layout');
		$('#loader').hide();
	});

	$('.filter').click(function(){
		$('.filter').not(this).removeClass('clicked');
		$(this).toggleClass('clicked');
		$grid.masonry('reloadItems');
		$grid.masonry('layout');
	});

	$('#load-more').click(function(){
		$grid.imagesLoaded().progress(function(){
			$grid.masonry('reloadItems');
			$grid.masonry('layout');
		});
	});	
});