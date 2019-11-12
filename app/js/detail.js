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


	/*______ Открытие/закрытие текста топ-комментария ______*/

	var reviewWrapper = $('.top-review .review__text-wrapper'),
		reviewWrapperHeight = $('.top-review .review__text-wrapper').outerHeight(),
			reviewTextHeight = $('.top-review .review__text').outerHeight();

	$('.js__toggle-text').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('open');

		if(!reviewWrapper.hasClass('open')) {
			reviewWrapper.css('maxHeight','100%');
			reviewWrapper.addClass('open');

		} else {
			reviewWrapper.css('maxHeight', reviewTextHeight+'px');
			reviewWrapper.removeClass('open');
		}
	});

	/*______ Вывод кол-ва цветов ______*/

	if($('.color').length >=5) {
		$('.js__toggle-colors-list').css('display', 'inline-block');
		$('.colors-count').text($('.color').length);
	} else {
		$('.colors-list__inner-wrapper').css('height', 'auto');
	};

	/*______ Выбора размера ______*/

	$('.sizes-clothes-list').on('click', 'a', function (e) {
		e.preventDefault();
		if(!$(this).hasClass('disabled')) {
			$('.sizes-clothes-list a').removeClass('checked');
			$(this).addClass('checked');
		};
	});

	/*______ Выбор рейтинга ______*/

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


	/*______ Выбор рейтинга в форме отзывов ______*/

	var $reviewForm = $('.review-form');

	$.each($reviewForm, function (i, el) {
		var $rating = $(el).find('.rating'),
			inputList = $(el).find('input[type="radio"]'),
			inputLength = inputList.length,
			j = inputLength-1,
			k= 0;
		for (j; j >= 0; j--,k++ ) {
			$(inputList).eq(k).attr('id','rating-star-'+i+'-'+(j+1));
			$(inputList).eq(k).prop('value',j+1);
			$(inputList).eq(k).prop('name','rating');
			$(inputList).eq(k).next('label').attr('for','rating-star-'+i+'-'+(j+1));
		}
	});

	/*______ Открытие/закрытие формы отзывов ______*/

	$('.js__toggle-review-form').on('click', function (e) {
		e.preventDefault();
		$('.review-form-wrapper').stop(true, true).slideToggle('250');
	});

	function add(num) {
		return function (num2) {
			return function (num3) {
				return num + num2 + num3;
			}
		}
	}
	console.log(add(3)(5)(5));
});
