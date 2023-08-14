<?php
/**
 * Server-side rendering of the `core/post-featured-image` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/post-featured-image` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the featured image for the current post.
 */
function render_block_core_post_featured_image( $attributes, $content, $block ) {
	if ( ! isset( $block->context['postId'] ) ) {
		return '';
	}
	$post_ID = $block->context['postId'];

	// Check is needed for backward compatibility with third-party plugins
	// that might rely on the `in_the_loop` check; calling `the_post` sets it to true.
	if ( ! in_the_loop() && have_posts() ) {
		the_post();
	}

	$is_link        = isset( $attributes['isLink'] ) && $attributes['isLink'];
	$size_slug      = isset( $attributes['sizeSlug'] ) ? $attributes['sizeSlug'] : 'post-thumbnail';
	$attr           = get_block_core_post_featured_image_border_attributes( $attributes );
	$overlay_markup = get_block_core_post_featured_image_overlay_element_markup( $attributes );

	if ( $is_link ) {
		if ( get_the_title( $post_ID ) ) {
			$attr['alt'] = trim( strip_tags( get_the_title( $post_ID ) ) );
		} else {
			$attr['alt'] = sprintf(
				// translators: %d is the post ID.
				__( 'Untitled post %d' ),
				$post_ID
			);
		}
	}

	$extra_styles = '';

	// Aspect ratio with a height set needs to override the default width/height.
	if ( ! empty( $attributes['aspectRatio'] ) ) {
		$extra_styles .= 'width:100%;height:100%;';
	} elseif ( ! empty( $attributes['height'] ) ) {
		$extra_styles .= "height:{$attributes['height']};";
	}

	if ( ! empty( $attributes['scale'] ) ) {
		$extra_styles .= "object-fit:{$attributes['scale']};";
	}

	if ( ! empty( $extra_styles ) ) {
		$attr['style'] = empty( $attr['style'] ) ? $extra_styles : $attr['style'] . $extra_styles;
	}

	$featured_image = get_the_post_thumbnail( $post_ID, $size_slug, $attr );
	if ( ! $featured_image ) {
		return '';
	}
	if ( $is_link ) {
		$link_target    = $attributes['linkTarget'];
		$rel            = ! empty( $attributes['rel'] ) ? 'rel="' . esc_attr( $attributes['rel'] ) . '"' : '';
		$height         = ! empty( $attributes['height'] ) ? 'style="' . esc_attr( safecss_filter_attr( 'height:' . $attributes['height'] ) ) . '"' : '';
		$featured_image = sprintf(
			'<a href="%1$s" target="%2$s" %3$s %4$s>%5$s%6$s</a>',
			get_the_permalink( $post_ID ),
			esc_attr( $link_target ),
			$rel,
			$height,
			$featured_image,
			$overlay_markup
		);
	} else {
		$featured_image = $featured_image . $overlay_markup;
	}

	$aspect_ratio = ! empty( $attributes['aspectRatio'] )
		? esc_attr( safecss_filter_attr( 'aspect-ratio:' . $attributes['aspectRatio'] ) ) . ';'
		: '';
	$width        = ! empty( $attributes['width'] )
		? esc_attr( safecss_filter_attr( 'width:' . $attributes['width'] ) ) . ';'
		: '';
	$height       = ! empty( $attributes['height'] )
		? esc_attr( safecss_filter_attr( 'height:' . $attributes['height'] ) ) . ';'
		: '';
	if ( ! $height && ! $width && ! $aspect_ratio ) {
		$wrapper_attributes = get_block_wrapper_attributes();
	} else {
		$wrapper_attributes = get_block_wrapper_attributes( array( 'style' => $aspect_ratio . $width . $height ) );
	}
	return "<figure {$wrapper_attributes}>{$featured_image}</figure>";
}

/**
 * Generate markup for the HTML element that will be used for the overlay.
 *
 * @param array $attributes Block attributes.
 *
 * @return string HTML markup in string format.
 */
function get_block_core_post_featured_image_overlay_element_markup( $attributes ) {
	$has_dim_background  = isset( $attributes['dimRatio'] ) && $attributes['dimRatio'];
	$has_gradient        = isset( $attributes['gradient'] ) && $attributes['gradient'];
	$has_custom_gradient = isset( $attributes['customGradient'] ) && $attributes['customGradient'];
	$has_solid_overlay   = isset( $attributes['overlayColor'] ) && $attributes['overlayColor'];
	$has_custom_overlay  = isset( $attributes['customOverlayColor'] ) && $attributes['customOverlayColor'];
	$class_names         = array( 'wp-block-post-featured-image__overlay' );
	$styles              = array();

	if ( ! $has_dim_background ) {
		return '';
	}

	// Apply border classes and styles.
	$border_attributes = get_block_core_post_featured_image_border_attributes( $attributes );

	if ( ! empty( $border_attributes['class'] ) ) {
		$class_names[] = $border_attributes['class'];
	}

	if ( ! empty( $border_attributes['style'] ) ) {
		$styles[] = $border_attributes['style'];
	}

	// Apply overlay and gradient classes.
	if ( $has_dim_background ) {
		$class_names[] = 'has-background-dim';
		$class_names[] = "has-background-dim-{$attributes['dimRatio']}";
	}

	$has_width  = ! empty( $attributes['width'] );
	$has_height = ! empty( $attributes['height'] );
	if ( ! $has_height && ! $has_width ) {
		return "<figure $wrapper_attributes>$featured_image</figure>";
	}

	if ( $has_width ) {
		$wrapper_attributes = get_block_wrapper_attributes( array( 'style' => "width:{$attributes['width']};" ) );
	}

	if ( $has_height ) {
		$image_styles = "height:{$attributes['height']};";
		if ( ! empty( $attributes['scale'] ) ) {
			$image_styles .= "object-fit:{$attributes['scale']};";
		}
		$featured_image = str_replace( 'src=', "style='$image_styles' src=", $featured_image );
	}

	return "<figure $wrapper_attributes>$featured_image</figure>";
}

/**
 * Registers the `core/post-featured-image` block on the server.
 */
function register_block_core_post_featured_image() {
	register_block_type_from_metadata(
		__DIR__ . '/post-featured-image',
		array(
			'render_callback' => 'render_block_core_post_featured_image',
		)
	);
}
add_action( 'init', 'register_block_core_post_featured_image' );
