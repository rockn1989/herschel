$(function () {

	var mainSlider = $('.main-slider .slider');
	
	mainSlider.init(function(event, slick) {
		mainSlider.addClass('slide-up');
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
		prevArrow: $(this).find('.slide-prev'),
		nextArrow: $(this).find('.slide-next'),
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
			$(this).find('.card__bottom').slideDown('150');
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
			$(this).find('.card__bottom').slideUp('150');
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

	if($(window).outerWidth() >= 960) {
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
