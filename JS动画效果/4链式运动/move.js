function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

//增加第四个参数：fn
function startMove(obj, attr, iTarget, fn) {
	clearInterval(obj.timer);

	obj.timer = setInterval(function() {
		//1.取当前值
		var iCur = 0;
		if (attr === 'opacity') {
			iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
		} else {
			iCur = parseInt(getStyle(obj, attr));
		}

		//2.计算速度
		var speed = (iTarget - iCur) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		//3.检测停止
		if (iCur === iTarget) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		} else {
			//3.1针对透明度的检测
			if (attr === 'opacity') {
				obj.style.filter = 'alpha:(opacity:' + iCur + speed + ')';
				obj.style.opacity = (iCur + speed) / 100;
			}
			//3.2 其他，如：width、height
			else {
				obj.style[attr] = iCur + speed + 'px';
			}
		}
	}, 30);

}