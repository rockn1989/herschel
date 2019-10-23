$(function () {

	$('.tags-list').on('click', 'li', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});


	/*______ Открытие/закрытие фильтра на мобиле ______*/

	$('.js__toggle-filter').on('click', function (e) {
		e.preventDefault();
		$(this).find('.filter-icon').toggleClass('active');
		$('.filter-form-wrapper').slideToggle('250');
	});



	UIkit.util.on($('#modal-fastview'), 'beforeshow', function () {
	  $('#modal-fastview .detail-product-slider .slider').slick('destroy');
	  $('#modal-fastview .detail-product-preview-slider .slider').slick('destroy');
	  $('#modal-fastview .js__toggle-colors-list').unbind('click');
	  UIkit.sticky('.product-sliders-wrapper', 'inactive');
	});


	UIkit.util.on($('#modal-fastview'), 'shown', function () {

		$('#modal-fastview .detail-product-slider .slider').slick({
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
			focusOnSelect: true,
			prevArrow: $(this).find('.slide-prev'),
			nextArrow: $(this).find('.slide-next'),
			asNavFor: '.detail-product-preview-slider .slider',
		});


		$('#modal-fastview .detail-product-preview-slider .slider').slick({
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
					vertical: false,
				}
			},
		]
		});




		/*______ Открытие/закрытие списка с цветами ______*/

		var colorsList = $('#modal-fastview .colors-list__inner-wrapper'),
			colorsListHeight = $('#modal-fastview .colors-list__inner-wrapper').outerHeight(),
				colorsListInnerHeight = $('#modal-fastview .colors-list__inner').outerHeight();

				$('.color img.lazy').lazy({
						bind: "event"
				});
		
		$('#modal-fastview .js__toggle-colors-list').bind('click', function(e) {
			e.preventDefault();

			$(this).toggleClass('open');

			if(!colorsList.hasClass('open')) {
				colorsList.animate({
					height: colorsListInnerHeight + 'px'
				}, 350);
				colorsList.addClass('open');

				
				/*______ Инициализация ленивой подгрузки при открытии списка ______*/

				$('.color img.lazy').lazy({
						bind: "event"
				});

			} else {
				colorsList.animate({
					height: colorsListHeight + 'px'
				}, 350);
				colorsList.removeClass('open');
			}
		});

	});

});
