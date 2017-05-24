function getLength(str) {
	//匹配非ASCII字符
	return str.replace(/[^\x00-xff]/g, "xx").length;
}

function findStr(str, n) {
	var tmp = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === n) {
			tmp++;
		}
	}
	return tmp;
}

window.onload = function() {
	var alInput = document.getElementsByTagName("input");
	var oName = alInput[0];
	var pwd = alInput[1];
	var pwd2 = alInput[2];

	var aP = document.getElementsByTagName("p");
	var name_msg = aP[0];
	var pwd_msg = aP[1];
	var pwd2_msg = aP[2];
	var count = document.getElementById("count");
	var aEm = document.getElementsByTagName("em");
	var name_length = 0;


	//用户名
	//1、数字、字母（不分大小写）、汉字、下划线
	//2、5-25字符，推荐使用中文名

	//中文范围：
	var re = /[^\w\u4e00-\u9fa5]/g;

	oName.onkeyup = function() {
		name_length = getLength(this.value);
		count.innerHTML = name_length + "个字符";
		if (name_length === 0) {
			count.style.visibility = "hidden";
		}
	}

	oName.onblur = function() {
		//含有非法字符
		var re = /[^\w\u4e00-\u9fa5]/g;
		if (re.test(this.value)) {
			name_msg.innerHTML = " 含有非法字符！";
		}

		//不能为空
		else if (this.value === "") {
			name_msg.innerHTML = "不能为空！";
		}
		//长度超过25个字符
		else if (name_length > 25) {
			name_msg.innerHTML = "长度超过25个字符！";
		}
		//长度少于6个字符
		else if (name_length < 6) {
			name_msg.innerHTML = "长度少于6个字符！";
		}
		//OK
		else {
			name_msg.innerHTML = " OK！";
		}
	}

	//密码
	pwd.onkeyup = function() {
		//大于5个字符--中
		if (this.value.length > 5) {
			aEm[1].className = "active";
		} else {
			aEm[1].className = "";
		}
		//大于10个字符--强
		if (this.value.length > 10) {
			aEm[2].className = "active";
		} else {
			aEm[2].className = "";
		}
	}

	pwd.onblur = function() {
		var m = findStr(pwd.value, pwd.value[0]);
		var re_n = /[^\d]/g;
		var re_t = /[^a-zA-Z]/g;
		//不能为空
		if (this.value === "") {
			pwd_msg.innerHTML = "不能为空！";
		}
		//不能用相同字符
		else if (m === this.value.length) {
			pwd_msg.innerHTML = "不能用相同字符！";
		}
		//长度应为6-16个字符
		else if (this.value.length < 6 || this.value.length > 16) {
			pwd_msg.innerHTML = "长度应为6-16个字符！";
		}
		//不能全为数字
		else if (!re_n.test(this.value)) {
			pwd_msg.innerHTML = "不能全为数字！";
		}
		//不能全为字母
		else if (!re_t.test(this.value)) {
			pwd_msg.innerHTML = "不能全为字母！";
		}
		//OK
		else {
			pwd_msg.innerHTML = "OK！请在确认密码框再输入一次";
			pwd2.removeAttribute("disabled");

		}
	}

	//确认密码
	pwd2.onblur = function() {
		if (this.value !== pwd.value) {
			pwd2_msg.innerHTML = "两次输入的密码不一致！";
		} else {
			pwd2_msg.innerHTML = "OK！";
		}
	}

}