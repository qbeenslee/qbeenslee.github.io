$(document).ready(function(){$("main").find("img").lazyload(),$('#content-toc-tree a[href*="#"]').click(function(e){e.preventDefault();$.smoothScroll({offset:-60,scrollTarget:decodeURI(this.hash),speed:500})})}),$(document).ready(function(){var t,o,e,n=$("#banner"),s=0;$(".dropdown-content").parent().click(function(){var e;"block"===(e=$(this).find(".dropdown-content")).css("display")?e.css("display","none"):e.css("display","block")});var i=function(){n&&void 0!==n&&0<n.height()&&($(this).scrollTop()<=n.height()?$("#header").removeClass("opaqueHeader").addClass("transHeader"):$("#header").removeClass("transHeader").addClass("opaqueHeader"))};setTimeout(function(){e=!1,t=10,o=$(".auto_header").outerHeight(),$(document).ready(function(){return $("body").css("position","relative"),$(".auto_header").css("transition","top 0.3s ease-in-out").css("top","0").css("position","fixed").css("z-index",9999)}),$(window).scroll(function(){return i(),e=!0}),setInterval(function(){if(e)return function(){var e;e=$(this).scrollTop(),!(Math.abs(s-e)<=t)&&(s<e&&o/2<e?$(".auto_header").css("top","-"+1.2*o+"px"):e+$(window).height()<$(document).height()&&$(".auto_header").css("top","0"),s=e)}(),function(){if(n&&void 0!==n&&0<n.height()){if($(window).width()<1350)return;$(this).scrollTop()<=n.height()?$("#content-toc-box").hide():$("#content-toc-box").show()}}(),e=!1},250)},1200);i()});