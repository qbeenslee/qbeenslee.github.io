$(document).ready(function(){var t,o,e,s=$("#banner"),n=0,a=function(){s&&void 0!==s&&0<s.height()&&($(this).scrollTop()<=s.height()?$("#header").removeClass("opaqueHeader").addClass("transHeader"):$("#header").removeClass("transHeader").addClass("opaqueHeader"))};setTimeout(function(){e=!1,t=10,o=$(".auto_header").outerHeight(),$(document).ready(function(){return $("body").css("position","relative"),$(".auto_header").css("transition","top 0.3s ease-in-out").css("top","0").css("position","fixed").css("z-index",9999)}),$(window).scroll(function(){return a(),e=!0}),setInterval(function(){if(e)return function(){var e;e=$(this).scrollTop(),!(Math.abs(n-e)<=t)&&(n<e&&o/2<e?$(".auto_header").css("top","-"+1.2*o+"px"):e+$(window).height()<$(document).height()&&$(".auto_header").css("top","0"),n=e)}(),function(){s&&void 0!==s&&0<s.height()&&($(this).scrollTop()<=s.height()?$("#content-toc-box").hide():$("#content-toc-box").show())}(),e=!1},250)},1200);a()});