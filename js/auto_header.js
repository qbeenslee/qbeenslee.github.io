$(document).ready(function(){var e=$("#banner");toggle_header_style=function(){e&&void 0!==e&&0<e.height()&&($(this).scrollTop()<=e.height()?$("#header").removeClass("opaqueHeader").addClass("transHeader"):$("#header").removeClass("transHeader").addClass("opaqueHeader"))};setTimeout(function(){var t,o,e,s;e=!1,t=0,o=$(".auto_header").outerHeight(),$(document).ready(function(){return $("body").css("position","relative"),$(".auto_header").css("transition","top 0.3s ease-in-out").css("top","0").css("position","fixed").css("z-index",9999)}),$(window).scroll(function(){return toggle_header_style(),e=!0}),setInterval(function(){if(e)return s(),e=!1},250),s=function(){var e;return e=$(this).scrollTop(),!(Math.abs(t-e)<=10)&&(t<e&&o/2<e?$(".auto_header").css("top","-"+1.2*o+"px"):e+$(window).height()<$(document).height()&&$(".auto_header").css("top","0"),t=e)}},1200);toggle_header_style()});