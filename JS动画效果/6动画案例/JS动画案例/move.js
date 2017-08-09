function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

//同时运动————函数修改为传入json格式的参数：
//startMove(obj, {attr1:iTarget1, attr2: iTarget2}, fn)

function startMove(obj, json, fn) {

	clearInterval(obj.timer);

	obj.timer = setInterval(function() {

		var flag = true; //假设所有运动到达目标值

		for (var attr in json) {
			//1.取当前值
			var iCur = 0;
			if (attr === 'opacity') {
				iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				iCur = parseInt(getStyle(obj, attr));
			}
			//2.计算速度
			var speed = (json[attr] - iCur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			//*3.检测所有运动都完成后停止			
			if (iCur !== json[attr]) {
				flag = false;
				if (attr === 'opacity') {
					obj.style.filter = 'alpha:(opacity:' + iCur + speed + ')';
					obj.style.opacity = (iCur + speed) / 100;
				} else {
					obj.style[attr] = iCur + speed + 'px';
				}
			}
		}
		//console.log('flag: ', flag);

		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		}

	}, 30);

}