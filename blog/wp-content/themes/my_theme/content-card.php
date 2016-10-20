    <div class='card blog-card'>

        <?php if ( has_post_thumbnail() && ! post_password_required() && ! is_attachment() ) : ?>
        <div class='cover-image'>
                <?php
                    $src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 600, 400 ), false, '' );
                    $srcset = wp_get_attachment_image_srcset( get_post_thumbnail_id($post->ID) );
                ?>
                <a href="<?php the_permalink(); ?>">
                    <img srcset="<?php echo $srcset; ?>" src='<?php echo $src[0]; ?>' sizes="(min-width: 640px) 50vw, (min-width: 1080px) 33vw, 100vw" />
                </a>
        </div>

        <a href="<?php the_permalink(); ?>">
            <div class='info-container'>

        <?php else : ?>

        <a href="<?php the_permalink(); ?>">
            <div class='info-container no-cover'>

        <?php endif; ?>

                <h2><?php the_title(); ?></h2>
                <h6><?php the_date(); ?></h6>
                <p><?php the_excerpt(); ?></p>
                <i class='icon-arrow-next'></i>
            </div>
        </a>

    </div>