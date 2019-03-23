define("/index/index",["/common/sensors"],
	function(i){
		var e=$(window),
		o=e.scrollTop(),
		a=e.height(),
		s=e.width(),
		t=$("#docwrap").height(),
		n=window.localStorage,
		d=$("#cover"),
		c=$("#gotoTop"),
		l=$(".animate-item"),
		r=d.find(".video-wrap"),
		p=s/1920,
		v=1080*p,
		h=a>v?v:a,
		m=window.globUrl.baseImagesUrl,
		u=navigator.userAgent.toLowerCase(),
		f=/(mobile|silk-accelerated=true)/.test(u),
		w=u.match(/(msie |trident\/)([\d.]+)/),
		g=f||w&&"msie "===w[1]&&parseInt(w[2],10)<9;

		function y(i,e){
			if(i.highDev) return"function"==typeof e&&e();
			i.highDev=!0;
			var o,a,s,t=$(".img-el",i.item),
			n=t.eq(0);
			$.each(t,function(i,e){
				a=$(e),
				g?(
					s=m+a.data("img").replace("@2x",""),
					a.css({"background-image":"url("+s+")",filter:'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+s+'",  sizingMethod="scale")'})
					)
				:
				a.css({"background-image":"url("+m+a.data("img")+")"})
			}),
			"function"==typeof e&&((o=new Image).onload=function(){e()},
				o.src=m+n.data("img"))}function b(){
				var i,e,s=o>t/2,n=(e=[],$.each(l,function(o,s){i=$(s),e.push({item:i,id:i.attr("id"),actionTop:i.offset().top-.7*a,animate:!1,highDev:!1})}),o>e[1].top?e.reverse():e),
				d=n.length;n.length;
				return{
					play:function(i){
						$.each(n,function(e,o){
							i>o.actionTop&&y(o,function(){
								var i,a;a=function(){
									var i=s?e>0?e-1:null:e+1<d?e+1:null;i&&y(n[i])
								},
								(i=o).animate||(1,i.item.find(".item-wrap").addClass("show-animate"),a())})})}}
					}
					function k(){
						r.css({height:v}),
						r.find("#autoplay").css({width:s})
					}
					function x(){
						var i=d.find(".item-wrap");
						a=e.height(),
						s=e.width(),
						h=a>(v=1080*(p=s/1920))?v:a,
						i.css({width:"100%",position:"relative",margin:0,left:0}),
						g||(d.css({height:h}),
						i.css({width:s,height:h,backgroundSize:"100%"}),
						$(".cover-logo").css({transform:"scale("+p+", "+p+")","-ms-transform":"scale("+p+", "+p+")"}),
						$("#statement-shade").css({width:s,height:a})
						)}
					!function(){
						var i,t;
						$(".homepage").addClass("active").attr("href","javascript:;"),/MSIE 8/.test(navigator.appVersion)
						&&
						$(".hd").css({backgroundImage:"url("+globUrl.baseImagesUrl+"/index/sprite.png)"}),
						x(),
						f&&c.hide(),
						//g?k():(
						k(),
							(i="",i+='<video id="autoplay" style="width: 100%;" muted autoplay="autoplay" loop="loop">',
							i+='    <source class="mp4" type="video/mp4" src="'+m+'/index/8sautoplay.mp4">',
							t=i+="</video>",
							r.css({height:v}).append(t),
							function(){
								var i,e,o=$("#playBtn"),
								a=$("<div />").attr({id:"playBox"});
								function s(i){
									var e=$("body");
									i?e.css({width:window.innerWidth,height:window.innerHeight,overflow:"hidden"}):e.attr("style","")}i=function(i,e){$("#playBtn, #replay").on("click",function(){s(!0),a.show(),i.play(),e.mask.hide(),e.replay.hide()}),e.closeBtn.on("click",function(){s(),a.hide(),i.currentTime=0,i.pause()}),i.onended=function(){e.mask.show(),e.replay.css({transform:"scale("+p+", "+p+")","-ms-transform":"scale("+p+", "+p+")"}).show()},i.onplay=function(){e.mask.hide(),e.replay.hide()}},e="",e+='<div class="video-view">',e+='    <video id="play-tvc" class="video" controls preload="auto">',e+='        <source class="mp4" type="video/mp4" src="'+m+'/index/marfa_56s.mp4"',e+="    </viceo>",e+="</div>",e+='<div class="controls">',e+='    <div id="play">播放</div>',e+='    <div class="vtime">',e+='        <span id="ctime">当前时间</span> / <span id="atime">总时长</span>',e+="    </div>",e+='    <div class="progress bars">',e+='        <div id="abar" class="abar">总长度</div>',e+='        <div id="pbar" class="pbar">载入长度</div>',e+='        <div id="cbar" class="cbar">当前长度</div>',e+='        <div id="bdot" class="dot">小圆点</div>',e+="    </div>",e+='    <div id="mute">静音按钮</div>',e+='    <div class="voice">',e+='        <div id="avoice" class="abar">底色</div>',e+='        <div id="cvoice" class="cbar">当前音量</div>',e+='        <div id="vdot" class="dot">小圆点</div>',e+="    </div>",e+='    <div id="full">全屏</div>',e+='    <div id="exit">退出</div>',e+="</div>",e+='<div id="mask" class="mask"></div>',e+='<div id="replay" class="replay"></div>',e+='<div id="close" class="close"></div>',o.addClass("show"),a.html(e).appendTo(d),i(a.find("#play-tvc")[0],{playBtn:a.find("#play"),atime:a.find("#atime"),ctime:a.find("#ctime"),closeBtn:a.find("#close"),mask:a.find("#mask"),replay:a.find("#replay")})}());var l,h=b();if(h.play(o),l=h,$(window).on("scroll",function(i){(o=e.scrollTop())>300?c.addClass("show"):c.removeClass("show"),l.play(o)}),$(".code").on("mouseenter",function(){$(this).addClass("show-code")}).on("mouseleave",function(){$(this).removeClass("show-code")}),$("#play").on("click",function(){}),$(window).on("resize",function(){x(),g||k()}),$(".showcooperation, #cooperation-pop").on("mouseenter",function(){$("#cooperation-pop").show()}),$(".showcooperation, #cooperation-pop").on("mouseleave",function(i){$("#cooperation-pop").hide()}),c.on("click",function(){c.hide(),$("html, body").animate({scrollTop:0},o/3,function(){c.attr({style:""}).removeClass("show")})}),$("#statement-pop").on("click",".close",function(i){$("#statement-shade").hide(),$("body").css({overflow:"auto"})}),window.localStorage){var u=n.getItem("visited");u&&null!==u||(n.setItem("visited",!0),$("body").css({overflow:"hidden"}),$("#statement-shade").show().css({width:s,height:a}))}}()}),require(["/index/index"]);


















