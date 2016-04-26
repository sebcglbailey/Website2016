<?php get_header(); ?>

		<div id="blog-posts">

			<?php if ( have_posts() ) : ?>

			<div id='blog-cards'>

			<?php

				while ( have_posts() ) : the_post(); 

					get_template_part( 'content', 'card' );

				endwhile; ?>

			</div>

		</div>

		<div id='navigation'>

			<?php 
				posts_nav_link(
					" ",
					"<div class='filter title'>Previous</div>",
					"<div class='filter title'>Next</div>"
				);
				
			?>

		</div>

			<?php else : 
				get_template_part( 'content', 'none' );

			endif; ?>

	</div>


<?php get_footer(); ?>