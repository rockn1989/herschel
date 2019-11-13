$(function () {

	var mainSlider = $('.main-slider .slider');
	
	mainSlider.init(function(event, slick) {
		mainSlider.addClass('slide-up');

		$('.main-slider .slide-prev').on('click', function () {
			mainSlider.slick('slickPrev');
		});

		$('.main-slider .slide-next').on('click', function () {
			mainSlider.slick('slickNext');
		});
	});

	mainSlider.slick({
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: true,
		cssEase: 'linear',
		fade: true,
		autoplaySpeed: 3000,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'progressive',
		responsive: [
			{
				breakpoint: 960,
				settings: {
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: true
				}
			}
		]
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		mainSlider.removeClass('slide-up');
	})
	.on('afterChange', function(event, slick, currentSlide, nextSlide) {
		mainSlider.addClass('slide-up');
	});


	setTimeout(function () {
		$('.main-slider').addClass('loaded');
	}, 1000);



	/*______ Превью слайдер в карточках ______*/

	function initSlickDesktop () {
		$('.card').on('mouseenter', function () {
			$(this).find('.card__bottom').stop(true, true).slideDown('150');
			var slider = $(this).find('.preview-slider .slider');
			slider.slick({
			infinite: false,
			dots: false,
			arrows: true,
			autoplay: false,
			cssEase: 'linear',
			fade: false,
			autoplaySpeed: 3000,
			speed: 400,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '<div class="slide-prev"><i class="icon-chevron-left"></i></div>',
			nextArrow: '<div class="slide-next"><i class="icon-chevron-right"></i></div>',
			});
		}).on('mouseleave', function () {
			var slider = $(this).find('.preview-slider .slider');
			slider.slick('destroy');
			$(this).find('.card__bottom').css('display', 'none');
		});
	};

	function initSlickMobile(context, isActive) {
		var slider = $(context).find('.preview-slider .slider'),
			isActive = isActive || true;
			if (isActive && !slider.hasClass('slick-initialized')) {
				slider.slick({
				infinite: false,
				dots: false,
				arrows: true,
				autoplay: false,
				cssEase: 'linear',
				fade: false,
				autoplaySpeed: 3000,
				speed: 400,
				slidesToShow: 4,
				slidesToScroll: 1,
				prevArrow: '<div class="slide-prev"><i class="icon-chevron-left"></i></div>',
				nextArrow: '<div class="slide-next"><i class="icon-chevron-right"></i></div>',
				});
			} else {
				slider.slick('destroy');
			}
	};

	if($(window).outerWidth()+17 >= 960) {
		initSlickDesktop();
	} else {
		$('.js__show-preview-slider').on('click', function (e) {
			e.preventDefault();
			if(!$(this).hasClass('open')) {
				$(this)
					.addClass('open')
					.siblings('.card__bottom')
					.slideDown('350');
					initSlickMobile($(this).parents('.card'));
			} else {
				$(this)
					.removeClass('open')
					.siblings('.card__bottom')
					.slideUp('350')
					initSlickMobile($(this).parents('.card'), false);
			}

		});
	}

	/*______ Слайдеры: Детальная продукта ______*/

	$('.detail-product-slider .slider').slick({
		arrows: true,
		dots: false,
		infinity: true,
		lazyLoad: 'ondemand',
		autoplay: false,
		fade: true,
		autoplaySpeed: 4000,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $(this).find('.slide-prev'),
		nextArrow: $(this).find('.slide-next'),
		asNavFor: '.detail-product-preview-slider .slider',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				fade: true
		}
		},
		{
			breakpoint: 767,
			settings: {
				fade: false
			}
		},
	]
	});


	$('.detail-product-preview-slider .slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.detail-product-slider .slider',
		dots: false,
		arrows: true,
		infinity: true,
		centerMode: false,
		lazyLoad: 'ondemand',
		focusOnSelect: true,
		vertical: true,
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-chevron-left"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-chevron-right"></i></div>',
		responsive: [
			{
				breakpoint: 1245,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					vertical: false,
			}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					vertical: false
				}
			},
		]
	});


	/*______ Добавить в избранное ______*/

	$('.favorite-icon').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('is-added');
	});

/*	var previewSliders = $('.preview-slider .slider');

	$.each(previewSliders, function (i, el) {
		$(el).slick({
		infinity: true,
		dots: false,
		arrows: true,
		autoplay: false,
		cssEase: 'linear',
		fade: false,
		autoplaySpeed: 3000,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slide-prev"><i class="icon-chevron-left"></i></div>',
		nextArrow: '<div class="slide-next"><i class="icon-chevron-right"></i></div>',
		});
	});*/

});
