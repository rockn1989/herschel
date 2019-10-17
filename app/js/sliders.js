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

	var cardHeight = [];

	$.each($('.card'), function (i, el) {
		console.log($(el).outerHeight());
		cardHeight.push($(el).outerHeight());		
	});
	console.log(cardHeight);
	var maxHeight = Math.max.apply(null, cardHeight);
	console.log();

	$('.card').on('mouseenter', function () {
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
	})

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
