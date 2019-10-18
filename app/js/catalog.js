$(function () {

	$('.tags-list').on('click', 'li', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});

/*	$('.tags-list').on('click', '.js__toggle-activity', function (e) {
		e.preventDefault();
		$(this).parents('li').removeClass('active');
	});*/

});
