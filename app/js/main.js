'use strict';

$(function() {	

	/*______ Форма поиска декстоп ______*/

	$('.js__toggle-search').on('click', function (e) {
		e.preventDefault();
		$('.search-desktop').slideToggle('250', function () {
			$('.search-desktop').find('input[type="text"]').focus();
		});

	});

	/*______ Результат поиска ______*/

	$('.js__send-ajax').on('keydown keyup', function (e) {
		if($(this).val().length >= 3) {
			$('body').addClass('mask');
			$('.search-result-wrapper').addClass('visible');
		} else {
			$('body').removeClass('mask');
			$('.search-result-wrapper').removeClass('visible');
		};
	})

	/*______ Закрыть и очистить результаты поиска ______*/

	$('.js__close-search-result').on('click', function (e) {
		e.preventDefault();
		$('body').removeClass('mask');
		$('.search-result-wrapper').removeClass('visible');
		$('.search-desktop').find('input[type="text"]').val('');
		$('.search-desktop').css('display', 'none');
	});

	/*______ Закрыть Форму с акциями ______*/

	$('.js__close-promo').on('click', function (e) {
		e.preventDefault();
		$('.promo-panel').css('display', 'none');
	})

	/*______ Показывать форму на мобильных устройствах ______*/

	var $mobileForm = $('.mobile-form');

	$('.js__show-form').on('click', function (e) {
		e.preventDefault();
		$mobileForm.slideToggle('350').find('input').focus();
	})


	/*______ Навигация на мобильном ______*/

	$('.navbar-close').on('click', function (e) {
		e.preventDefault();
		var $parent = $(this).closest('.uk-nav__inner');
		$parent.addClass('hidden')
	})

	/*______ Открытие мобильного подменю ______*/

	$('.js__menu-sublist-toggle').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.closest('a'),
			siblingsList = blockParent.siblings('.uk-nav__inner.hidden');
			siblingsList.removeClass('hidden');
	});

	/*______ Маска формы ______*/

	$('.js__input-phone').mask('+7 999 999-99-99', {clearIfNotMatch: true}).focus(function (e) {
		if (!$(this).val()) {
			$(this).val('+7 ');
		}
	});


	/*______ Валидация формы ______*/

/*	if($('form').is('.default-form')) {

		$('.default-form').validate({
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				email: "Некорректное имя почты",
			},
		});
	};*/

	if($('form').is('.review-form')) {
		console.log(123123);
		$('.review-form').validate({
			rules: {
				name: {
					required: true,
				},
				message: {
					required: true,
				}
			},
			messages: {
				name: "Заполните поле",
				message: "Заполните поле",
			},
		});
	};


	/*______ Открытие мобильного подменю ______*/

	$('.js__menu-sublist-toggle').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('a'),
			siblingsList = blockParent.siblings('.menu-sublist');

		if(blockParent.hasClass('open')) {
			siblingsList.stop().slideUp('350', function () {
				blockParent.removeClass('open');
			});
		} else {
			siblingsList.stop().slideDown('350', function () {
				blockParent.addClass('open');
			});
		}

		self.toggleClass('open');
	});


	/*______ Открытие мобильного подменю в футере ______*/

	$('[data-role="toggle-list"] i').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('[data-role="toggle-list"]'),
			siblingsList = blockParent.parent().find('.footer__list');

		self.toggleClass('open');
		siblingsList.stop().slideToggle('350');
	});

	/*______ Lazy Load ______*/

	$('.lazy').lazy({
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		effectTime: 1000,
		threshold: 0,
		visibleOnly: true,
		placeholder: "../img/ui/preloader.gif",
		onError: function(element) {
				console.log('error loading ' + element.data('src'));
		}
	});


	/*______ Полифил для Object-fit ______*/
	
	objectFitImages();


	/*______ Полифил для Picture ______*/

	document.createElement("picture");

	/*______ Полифил для SVG ______*/

	/*svg4everebody();*/

});
