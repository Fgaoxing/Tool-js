
//url替换
function UrlChange(head,footer,change,out) {
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
}
};

function MirrorProtection(url) {
	var uri = window.location.protocol+'//'+document.domain;
	console.log();
	if (uri===url) {
	console.log('网址验证成功');
	}else{
	console.log('发现镜像站！！！');
	window.location.href='https://www.yt-blog.top/MirrorProtection/?url='+url+'/'+window.location.pathname+'&uri='+uri;
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
    if(date.getMonth()===2&&date.getDate()===31){
        document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css">html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(1);}<style>'
}};
//判断是春节，显示小灯笼
function lantern(){
    var date=new Date();
    if(date.getMonth()<2){
        document.getElementsByTagName('head')[0].innerHTML += '<script src="https://api.vvhan.com/api/denglong"><script>'
}};
        var head = document.getElementsByTagName('head')[0] ;
        head.appendChild(styleNode);
    }
})();

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
