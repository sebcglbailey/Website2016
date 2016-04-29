    <div class='card blog-card'>

        <?php if ( has_post_thumbnail() && ! post_password_required() && ! is_attachment() ) : ?>
        <div class='cover-image'>
                <?php
                    $src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 5600,1000 ), false, '' );
                ?>
                <img src='<?php echo $src[0]; ?>' />
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