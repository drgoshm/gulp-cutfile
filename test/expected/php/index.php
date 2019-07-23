<?php get_header(); ?>
			<section class="promo stage unwrapped">
				<div class="promo__left-intro w-4/12">
					<figure class="baguette slideshow">
						<img src="<?php echo get_template_directory_uri(); ?>/images/antik_slideshow_left_1.jpg" alt="antik left slide 1" class="active">
						<img src="<?php echo get_template_directory_uri(); ?>/images/antik_slideshow_left_2.jpg" alt="antik left slide 2">
						<img src="<?php echo get_template_directory_uri(); ?>/images/antik_slideshow_left_3.jpg" alt="antik left slide 3">
					</figure>
				</div>
				<div class="promo__center-intro w-4/12">
					<figure class="baguette slideshow">
						<img src="<?php echo get_template_directory_uri(); ?>/images/antik_slideshow_middle_1.jpg" alt="antik middle slide 1" class="active">
						<img src="<?php echo get_template_directory_uri(); ?>/images/antik_slideshow_middle_2.jpg" alt="antik middle slide 2">
						<img src="<?php echo get_template_directory_uri(); ?>/images/antik_slideshow_middle_3.jpg" alt="antik middle slide 3">
					</figure>
				</div>
				<div class="promo__right-intro w-4/12">
					<figure class="baguette slideshow">
						<img src="<?php echo get_template_directory_uri(); ?>/images/antik_slideshow_right_1.jpg" alt="antik right slide 1" class="active">
						<img src="<?php echo get_template_directory_uri(); ?>/images/antik_slideshow_right_2.jpg" alt="antik right slide 2">
						<img src="<?php echo get_template_directory_uri(); ?>/images/antik_slideshow_right_3.jpg" alt="antik right slide 3">
					</figure>
				</div>
			</section>
			<div class="anchor" id="about"></div>
			<section class="stage">
				<div class="w-12/12">
					<h2>Реставрация от&nbsp;идеи до&nbsp;воплощения</h2>
					<div class="break-line"></div>
				</div>
				<div class="w-xl-6/12 w-lg-6/12 w-md-12/12 w-sm-12/12">
					
					<?php echo(get_page_by_title('О компании 1')->post_content); ?>
				</div>
				<div class="w-xl-6/12 w-lg-6/12 w-md-12/12 w-sm-12/12 pl-xl-1 pl-lg-1 ">
					
					<?php echo(get_page_by_title('О компании 2')->post_content); ?>
				</div>
			</section>
			<div class="anchor" id="objects"></div>
			<section class="stage unwrapped gallery">
				<div class="w-12/12 wrapper">
					<h2>Объекты</h2>
				</div>
				<div class="slider w-12/12">
					<?php echo(get_page_by_title('Объекты')->post_content); ?>
					
				</div>
			</section>
			<div class="anchor" id="licensies"></div>
			<section class="licensies stage">
				<div class="w-12/12">
					<h2>Лицензии</h2>
					<div class="break-line"></div>
				</div>
				
				<?php echo(get_page_by_title('Лицензия-Галерея')->post_content); ?>
				<div class="w-12/12">
					<?php echo(get_page_by_title('Лицензия')->post_content); ?>
					
				</div>
			</section>
			<?php get_footer(); ?>