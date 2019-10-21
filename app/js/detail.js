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

});
