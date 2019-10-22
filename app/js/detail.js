/*______ Detail ______*/

$(function () {

	/*______ Выбор цвета на детальной ______*/

	$('.colors-list__inner').on('click', '.color', function () {
		$('.color').removeClass('checked');
		$(this).addClass('checked');
	});


	/*______ Открытие/закрытие списка с цветами ______*/

	var colorsList = $('.colors-list__inner-wrapper'),
		colorsListHeight = $('.colors-list__inner-wrapper').outerHeight(),
			colorsListInnerHeight = $('.colors-list__inner').outerHeight();

	$('.js__toggle-colors-list').on('click', function(e) {
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


	/*______ Вывод кол-ва цветов ______*/

	$('.colors-count').text($('.color').length);


	/*______ Rating Star ______*/

	var $reviews = $('.review');

	$.each($reviews, function (i, el) {
		var $rating = $(el).find('.rating'),
			inputList = $(el).find('input[type="radio"]'),
			inputLength = inputList.length,
			j = inputLength-1,
			k= 0;
		for (j; j >= 0; j--,k++ ) {
			$(inputList).eq(k).attr('id','star'+i+'-'+(j+1));
			$(inputList).eq(k).prop('value',j+1);
			$(inputList).eq(k).prop('name','rating'+i);
			$(inputList).eq(k).next('label').attr('for','star'+i+'-'+(j+1));
		}
	});



/*______ Video gallery ______*/

/*			var videoGallery = $('.video-gallery .slider-wrapper .slider').on('init', function (event, slick) {

				$.each(slick.$slides, function (i, el) {

					var $youtube = $(el).find('.youtube'),
						  source = "https://img.youtube.com/vi/"+ $youtube.data('embed') +"/0.jpg",
						  image = new Image();

					image.src = source;
					image.addEventListener('load', function () {
						$youtube.append(image);
					});

					$youtube.on('click', function (e) {
						e.preventDefault();
						if($youtube.parents('.slide').hasClass('slick-current')) {
							var iframe = $('<iframe>', {
								frameborder: 0,
								allowfullscreen: '',
								autoplay: true,
								src: "https://www.youtube.com/embed/"+ $youtube.data('embed') +"?rel=0&showinfo=0&autoplay=1"
							});
							//$youtube.html('');
							$youtube.find('.play-btn').fadeOut('350');
							$youtube.find('.slide__title').fadeOut('350');
							$youtube.find('img').fadeOut('350');
							$youtube.append(iframe);
						};

					});
				})
			});*/

});
