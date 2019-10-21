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

/*	$('.tags-list').on('click', '.js__toggle-activity', function (e) {
		e.preventDefault();
		$(this).parents('li').removeClass('active');
	});*/

});
