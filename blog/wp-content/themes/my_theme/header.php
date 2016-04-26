<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="author" content="Palringo">
    <meta charset="<?php bloginfo( 'charset' ); ?>">
	
	<link rel='shortcut icon' type="image/x-icon" href="<?php bloginfo('template_url'); ?>/img/favicon.png" />
	<meta name="theme-color" content="#000">

	<title><?php wp_title( '|', true, 'right' ); ?> <?php bloginfo('name'); ?></title>

	<link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" type="text/css" />

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>
<body>

<div id="container">

	<div id="header">
		<div id="logo">
			<a href='/'>
				<picture>
					<source srcset='<?php bloginfo('template_url'); ?>/img/logo-white.svg'>
					<img src='<?php bloginfo('template_url'); ?>/img/logo-white.png' alt='Sebastian Bailey Logo' />
				</picture>
			</a>
		</div>
		<div class="burger-menu">
			<div></div>
		</div>
		<ul>
			<a href="/">
				<li>projects</li>
			</a>
			<a href="/work">
				<li>work</li>
			</a>
			<a href="/about">
				<li>about</li>
			</a>
			<a href="/blog/" target="_self">
				<li>blog</li>
			</a>
			<a href="/contact">
				<li>contact</li>
			</a>
		</ul>
	</div>

	<div id='content'>