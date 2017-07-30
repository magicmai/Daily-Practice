var data = ['IU专辑', 'IU签名照', 'IPhone7', 'Ipad', '苹果笔记本', '200元购物券', '精美笔记本', '谢谢参与'],
	timer = null,
	flag = 0;

window.onload = function() {
	var stop = document.getElementById('stop');

	//开始抽奖
	play.onclick = playFun;
	//停止抽奖
	stop.onclick = stopFun;

	//键盘事件
	document.onkeyup = function(event) {
		event = event || window.event;
		console.log(event.keyCode);
		if (event.keyCode === 13) {
			if (flag === 0) {
				playFun();
			} else {
				stopFun();
			}
		}
	}
}

function playFun() {
	var title = document.getElementById('title');
	var play = document.getElementById('play');
	clearInterval(timer);
	timer = setInterval(function() {
		var random = Math.floor(Math.random() * data.length);
		title.innerHTML = data[random];
	}, 100);
	play.style.background = "#999";
	flag = 1;
}

function stopFun() {
	clearInterval(timer);
	var play = document.getElementById('play');
	play.style.background = '#036';
	flag = 0;
}