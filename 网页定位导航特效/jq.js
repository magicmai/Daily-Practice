$(document).ready(function() {
	//滚动条发生滚动
	$(window).scroll(function () {
		var top = $(document).scrollTop();
		//console.log(top);
		var menu = $('#menu');
		var items = $('#content').find('.item');

		var currentId = "";  //当前所在的楼层（item）#id

		items.each(function () {
			var m = $(this);
			//console.log('m.offset()', m.offset()); // {top: xxx, left: xxx}
			var itemTop = m.offset().top;
			//console.log(m);
			//console.log(itemTop);
			if (top > itemTop - 200) {
				currentId = "#" + m.attr('id');
			} else {
				return false;
			}
		});
		/**
		 * 60    item1
		 * 857   item2
		 * 1654  item3
		 * 2451  item4
		 * 3248  item5
		 */
		
		// 给相应楼层的a设置class current，取消其他链接的class current
		var currentLink = menu.find('.current');
		//console.log('currentLink', currentLink);
		if (currentId && currentLink.attr('href') !== currentId) {
			currentLink.removeClass('current');
			menu.find('[href="' + currentId +'"]').addClass('current');
		}
	});
});