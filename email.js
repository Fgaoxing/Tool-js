/* jshint esversion: 6 */
/**
 * 邮件发送模块
 * 使用SMTP.js服务发送邮件
 */
const Email = {
	/**
	 * 发送邮件
	 * @param {Object} a - 邮件配置对象
	 * @returns {Promise} 邮件发送结果的Promise
	 */
	send: function(a) {
		return new Promise(function(n, e) {
			// 添加随机数防止缓存
			a.nocache = Math.floor(1e6 * Math.random() + 1);
			a.Action = 'Send';
			// 将配置对象转换为JSON字符串
			const t = JSON.stringify(a);
			// 调用ajaxPost方法发送邮件
			Email.ajaxPost('https://smtpjs.com/v3/smtpjs.aspx?', t,
			function(e) {
				n(e);
			});
		});
	},
	
	/**
	 * 通过AJAX POST方式发送数据
	 * @param {string} e - 请求地址
	 * @param {string} n - 发送的数据
	 * @param {function} t - 回调函数
	 */
	ajaxPost: function(e, n, t) {
		// 创建跨域请求对象
		const a = Email.createCORSRequest('POST', e);
		// 设置请求头
		a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		// 设置加载完成后的回调函数
		a.onload = function() {
			const e = a.responseText;
			if (null != t) t(e);
		};
		// 发送数据
		a.send(n);
	},
	
	/**
	 * 通过AJAX GET方式获取数据
	 * @param {string} e - 请求地址
	 * @param {function} n - 回调函数
	 */
	ajax: function(e, n) {
		// 创建跨域请求对象
		const t = Email.createCORSRequest('GET', e);
		// 设置加载完成后的回调函数
		t.onload = function() {
			const e = t.responseText;
			if (null != n) n(e);
		};
		// 发送请求
		t.send();
	},
	
	/**
	 * 创建跨域请求对象
	 * @param {string} e - 请求方法 (GET/POST)
	 * @param {string} n - 请求地址
	 * @returns {XMLHttpRequest|XDomainRequest|null} 请求对象
	 */
	createCORSRequest: function(e, n) {
		let t = new XMLHttpRequest();
		// 根据浏览器支持情况创建合适的请求对象
		if ('withCredentials' in t) {
			t.open(e, n, !0);
		} else if ('undefined' != typeof XDomainRequest) {
			t = new XDomainRequest();
			t.open(e, n);
		} else {
			t = null;
		}
		return t;
	}
};