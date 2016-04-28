<?php get_header(); ?>

<div id='post'>

<?php if ( have_posts() ) : ?>

	<?php /* The loop */ ?>
	<?php while ( have_posts() ) : the_post(); ?>
	
		<?php if ( has_post_thumbnail() && ! post_password_required() && ! is_attachment() ) : ?>
	    <div id='cover-image'>
	        <?php
	            $src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 5600,1000 ), false, '' );
	        ?>
	        <img src='<?php echo $src[0]; ?>' />
	    </div>
	    <?php endif; ?>

	    <div class='post-navigation'>
		    <?php

				if ( is_singular( 'post' ) ) {
					// Previous/next post navigation.
					the_post_navigation( array(
						'next_text' => '<div class="next"><span>Next</span><i class="icon-arrow-next"></i></div>',
						'prev_text' => '<div class="previous"><i class="icon-arrow-prev"></i><span>Prev</span></div>',
					) );
				}

			?>

		</div>

	    <div id="content">

	    	<div id='post-content'>

	    		<h1><?php the_title(); ?></h1>
	    		<?php the_content(''); ?>

	    <?php

	    	if ( comments_open() || get_comments_number() ) {
				comments_template();
			}

		?>

			</div>
		</div>

	<?php endwhile; ?>

<?php else : ?>
	<?php get_template_part( 'content', 'none' ); ?>
<?php endif; ?>

</div>

<?php get_footer(); ?>