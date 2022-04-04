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
