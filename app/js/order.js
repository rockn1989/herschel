
$(function () {

	/*______ Удаление товара из заказа ______*/

	var $orderList= $('.order-list');

	$('.js__remove-product').on('click', function (e) {
		e.preventDefault();
		var $elementId = $(this).closest('.product-order').attr('id');
		
		// Отправка запроса на удаление
		$orderList.addClass('preload');

		$orderList.find('#'+$elementId).remove();

		// После удаление элемента
		$orderList.removeClass('preload');
	});

});
