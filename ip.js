/* jshint esversion: 6 */
// 管理员邮箱地址，默认为空
let adminemail = ''; // 设置email为空，防止报错

// 设置管理员邮箱
function SetEmail(email){
	adminemail = email;
}

// 检查并阻止特定IP访问
function OutIp(ip){
    const request = new Request('https://ipapi.co/json');
    // 发送请求获取当前访问者IP信息
	fetch(request).then(function(response){
		response.json().then((res) => {
			// 比较当前IP与指定IP
			if(ip == res.ip){
				// 如果匹配，则重定向到IP阻止页面
				window.location.href = 'https://tool-js.vercel.app/ip.html?url='+window.location.origin+'&email='+adminemail+'&ip='+res.ip;
			}
		});
	});
}