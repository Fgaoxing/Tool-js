/* jshint esversion: 6 */
//只通过允许的url跳转
function RestrictedPass(url){
	if (document.referrer.indexOf(url) < -1){
		window.location.href = document.referrer;
	}else{
		console.log('允许跳转');
	}
}

//url替换
function UrlChange(head,footer,change,out) {
	window.onload=function (){
		// 获取页面上所有<a>标签元素
		const elements = document.getElementsByTagName('a');
		// 遍历所有<a>标签
		for (let n of elements){
			// 排除javascript链接
			if (n.protocol !== 'javascript:'){ 
				// 排除已包含指定字符串的链接
				if (n.href.indexOf(out) < 0){ 
					// 根据change参数决定是否进行URL编码
					if(change){
						n.href=head+encodeURIComponent(n.href)+footer;
					}else{
						n.href=head+n.href+footer;
					}
				}
			}
		}
	};
	console.clear();
}

// 防镜像
function MirrorProtection(url) {
	// 获取当前页面的域名
	const uri = window.location.origin;
	console.log();
	// 验证域名是否匹配
	if (uri===url || uri==='https://tool-js.vercel.app' || uri === 'file://') {
		console.log('网址验证成功');
	}else{
		console.log('发现镜像站！！！');
		// 跳转到镜像保护页面
		window.location.href='https://tool-js.vercel.app/MirrorProtection.html?url='+url+window.location.pathname+'&uri='+uri;
	}
}

//判断是清明节，加载css样式。
function TombSweepingDay(){
    // 获取当前日期
    const date=new Date();
    // 4月4日或4月5日为清明节
    if(date.getMonth()===3&&date.getDate()===4){
        document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css">html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(1);}<style>';
    }
    if(date.getMonth()===3&&date.getDate()===5){
        document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css">html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(1);}<style>';
    }
}

//判断是国家公祭日12.13，加载css样式。
function Memorial(){
    // 获取当前日期
    const date=new Date();
    // 12月13日为国家公祭日
    if(date.getMonth()===11&&date.getDate()===13){
        document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css">html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(1);}<style>';
    }
}

//判断是春节，显示小灯笼
function lantern(){
    // 获取当前日期
    const date=new Date();
    // 春节期间显示小灯笼
    if(date.getMonth()<2){
        document.getElementsByTagName('head')[0].innerHTML += '<script src="https://api.vvhan.com/api/denglong2"></script>';
    }
}

// url参数获取
function getQueryVariable(variable,err)
{
       // 获取查询字符串
       const query = window.location.search.substring(1);
       // 按&分割参数
       const vars = query.split("&");
       // 遍历参数查找目标变量
       for (let i=0;i<vars.length;i++) {
               const pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(err);
}

// #后的参数
function getQueryString(name,err) {
	// 创建正则表达式匹配参数
	const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    // 匹配URL中的参数
    const r = window.location.search.substr(1).match(reg);
    // 如果匹配成功则返回解码后的值
    if (r != null) return decodeURIComponent(r[2]);
    return err;
}

//#后的全部不带#
function getHash() {
	// 获取hash值并移除开头的#
	return window.location.hash.split('#')[1];
}