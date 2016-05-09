<?php get_header(); ?>

<div id='post'>

<?php if ( have_posts() ) : ?>

	<?php /* The loop */ ?>
	<?php while ( have_posts() ) : the_post(); ?>
	
		<?php if ( has_post_thumbnail() && ! post_password_required() && ! is_attachment() ) : ?>
	    <div id='cover-image'>
	        <?php
	            $src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 600, 400 ), false, '' );
                $srcset = wp_get_attachment_image_srcset( get_post_thumbnail_id($post->ID) );
	        ?>
	        <img srcset="<?php echo $srcset; ?>" src='<?php echo $src[0]; ?>' />
	    </div>
	    <?php endif; ?>

	    <div id="content">

	    	<div id='post-content'>
				
				<div id='top-post-navigation'>
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

	    		<h1><?php the_title(); ?></h1>
	    		<?php the_content(''); ?>

	    		<div id='bottom-post-navigation'>
					<?php

						if ( is_singular( 'post' ) ) {
							// Previous/next post navigation.
							the_post_navigation( array(
								'next_text' => '<div class="next"><span>Next Post</span><h3>%title</h3></div>',
								'prev_text' => '<div class="previous"><span>Previous Post</span><h3>%title</h3></div>',
							) );
						}

					?>
				</div>

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

<div id='back-to-top'>Back To Top</div>

<?php get_footer(); ?>