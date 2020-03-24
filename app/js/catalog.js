$(function () {

	/*______ Показать/скрыть список тегов ______*/

	var targetBlockHeight = $('.js__target-tag-list').height(),
			tagListHeight = $('.tags-list').outerHeight();

	var DEFAULT_HEIGHT  = 34;

	if(tagListHeight > DEFAULT_HEIGHT) {
		$('.js__toggle-tag-list').css('display', 'inline-block')
		$('.js__toggle-tag-list').on('click', function (e) {
			e.preventDefault();
			if(!$(this).hasClass('open')) {
				$(this)
					.addClass('open')
					.text('Скрыть')
					.prev('.js__target-tag-list')
					.css('height', 'auto');
			} else {
				$(this)
					.removeClass('open')
					.text('Показать еще')
					.prev('.js__target-tag-list')
					.css('height' , targetBlockHeight+'px');
			};

		});
	};


	
	/*______ Tags scrollbar ______*/

/*	$('.tags-list-wrapper').mCustomScrollbar({
			axis:"x",
			autoExpandScrollbar:true,
			theme: "light-3",
			advanced:{autoExpandHorizontalScroll:true}
		});*/

	/*______ End Tags scrollbar ______*/


	/*______ Custom select ______*/

	$.each($('.js__custom-select'), function (i, el) {
		$(el).select2({
			minimumResultsForSearch: -1,
			dropdownPosition: 'below',
			theme: $(el).attr('theme')
		});
	});	

	/*______ End Custom select ______*/

	$('#ui-slider').slider({
		range: true,
		min: 0,
		max: 12000,
		step: 1,
		values: [0,7980],
		create: function (event, ui) {
			var val = $('#ui-slider').slider("values");
			var min = $('#ui-slider').slider("option","min");
			var max = $('#ui-slider').slider("option","max");
			var maxPricePosition = $('.ui-slider-handle').eq(1).css('left');
			$('.ui-slider-max').css('left', maxPricePosition);

			$('.ui-slider-current-value span').html(val[1]);

			$('.ui-slider-min').html(min);
			$('.ui-slider-max').html(max);

			$('.ui-slider-box .price-input-min').val(val[0]);
			$('.ui-slider-box .price-input-max').val(val[1]);

			$('.js__ui-slider').on('change keyup', function (e) {
					var _self = $(this),
						inputValue = parseInt($(this).val(), 10);

						if(inputValue > max) {
							$('.ui-slider-box .price-input-max').val(max);
							$('#ui-slider').slider("value", inputValue)
						} else if (inputValue < min) {
							$('.ui-slider-box .price-input-min').val(min);
							$('#ui-slider').slider("value", inputValue)
						} else {
							$('#ui-slider').slider("value", inputValue)
						};

			});
		},
		slide: function (event, ui) {
			var maxPricePosition = $('.ui-slider-handle').eq(1).css('left');
			$('.ui-slider-max').css('left', maxPricePosition)
			$('.ui-slider-box .price-input-min').val(ui.values[0]);
			$('.ui-slider-box .price-input-max').val(ui.values[1]);
		}
	})
	$('#ui-slider').draggable();
	/*______ Меню фильтра ______*/

	$('.js__toggle-filter-menu').on('click', function (e) {
		e.preventDefault();
		$(this).parent('a').toggleClass('is-open').siblings('ul').stop(true, true).slideToggle('350')
	})	


	$('.js__toggle-sublist').on('click', function (e) {
		e.preventDefault();
		var link = $(this).parent('a');
		$(this).toggleClass('is-open');
		if(link.hasClass('is-open')) {
			link.siblings('ul').stop(true, true).slideUp('250', function () {
				link.removeClass('is-open');
			});
		} else {
			link.siblings('ul').stop(true, true).slideDown('250', function () {
				link.addClass('is-open');
			});	
		}
		
	})	

	/*______  ______*/


	$('.tags-list').on('click', 'li', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});


	/*______ Открытие/закрытие фильтра на мобиле ______*/

	$('.js__toggle-filter').on('click', function (e) {
		e.preventDefault();
		$(this).find('.filter-icon').toggleClass('active');
		$('.left-sidebar__inner').slideToggle('250');
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
