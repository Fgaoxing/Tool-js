var adminemail = ''// 设置email为空，防止报错
// 设置email
function SetEmail(email){
	var adminemail=email
}
// 退出特定ip
function OutIp(ip){
    const request = new Request('https://ipapi.co/json');
  fetch(request).then(function(response){
      response.json().then((res)=>{
        if(ip==res['ip']){// 判断ip是否弹出
	window.location.href = 'https://tool-js.vercel.app/ip.html?url='+window.location.origin+'&email='+adminemail+'&ip='+res['ip']
	// 弹出
	}
       })
     })
 }