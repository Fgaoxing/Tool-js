//只通过允许的url跳转
function RestrictedPass(url){
	if (document.referrer.indexOf(url) < -1){
		window.location.href = document.referrer
	}else{
		console.log('允许跳转');
	}
};

//url替换
function UrlChange(head,footer,change,out) {
	window.onload=function (){
	for (n in document.getElementsByTagName('a')){
		if (document.getElementsByTagName('a')[Number(n)].href.indexOf('javascript:') < 0){ 
		if (document.getElementsByTagName('a')[Number(n)].href.indexOf(out) < 0){ 
		if(change){
		document.getElementsByTagName('a')[Number(n)].href=head+encodeURIComponent(document.getElementsByTagName('a')[Number(n)].href)+footer
		}else{
		document.getElementsByTagName('a')[Number(n)].href=head+document.getElementsByTagName('a')[Number(n)].href+footer
		}
		}
		}
}}
console.clear()};

// 防镜像
function MirrorProtection(url) {
	var uri = window.location.origin;
	console.log();
	if (uri===url || uri==='https://tool-js.vercel.app' || uri === 'file://') {
	console.log('网址验证成功');
	}else{
	console.log('发现镜像站！！！');
	window.location.href='https://tool-js.vercel.app/MirrorProtection.html?url='+url+window.location.pathname+'&uri='+uri;
	}
};
//判断是清明节，加载css样式。
function TombSweepingDay(){
    var date=new Date();
    if(date.getMonth()===3&&date.getDate()===4){
        document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css">html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(1);}<style>'
}
    if(date.getMonth()===3&&date.getDate()===5){
        document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css">html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(1);}<style>'
}};
//判断是国家公祭日12.13，加载css样式。
function Memorial(){
    var date=new Date();
    if(date.getMonth()===11&&date.getDate()===13){
        document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css">html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(1);}<style>'
}};
//判断是春节，显示小灯笼
function lantern(){
    var date=new Date();
    if(date.getMonth()<2){
        document.getElementsByTagName('head')[0].innerHTML += '<script src="https://api.vvhan.com/api/denglong2"></script>'
}};

// url参数获取
function getQueryVariable(variable,err)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(err);
}
// #后的参数
function getQueryString(name,err) {
　　 let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return err;
}
//#后的全部不带#
function getHash() {
	return window.location.hash.split('#')[1]
}
