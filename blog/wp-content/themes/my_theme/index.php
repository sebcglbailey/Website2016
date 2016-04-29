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
					"<div>Newer</div>",
					"<div>Older</div>"
				);
				
			?>

		</div>

			<?php else : 
				get_template_part( 'content', 'none' );

			endif; ?>

	</div>


<?php get_footer(); ?>