window.loadphotoswipejs&&window.alert("You've loaded load-photoswipe.js twice. See https://github.com/liwenyip/hugo-easy-gallery/issues/6");var loadphotoswipejs=1;$(document).ready(function(){var u=[];$("figure").each(function(){var t=$(this),a=t.find("a"),e=t.find("img"),i=a.attr("href"),s=e.attr("alt"),o=e.attr("src"),n=e.attr("data-original");if($(this).hasClass("no-photoswipe")||e.hasClass("nozoom"))return $(this).css("cursor","default"),!0;if(null!=o&&!o.startsWith("data:")||null==n||(o=n),null==i&&(i=o),a.data("size")){var r=a.data("size").split("x"),l={src:i,w:r[0],h:r[1],title:s,msrc:o};console.log("Using pre-defined dimensions for "+i)}else{l={src:i,w:800,h:600,title:s,msrc:o},console.log("Using default dimensions for "+i);var c=new Image;c.src=i;var d=setInterval(function(){var t=c.naturalWidth,a=c.naturalHeight;t&&a&&(clearInterval(d),l.w=t,l.h=a,console.log("Got actual dimensions for "+c.src))},30)}var h=u.length;u.push(l),t.on("click",function(t){t.preventDefault();var a=$(".pswp")[0];new PhotoSwipe(a,PhotoSwipeUI_Default,u,{index:h,bgOpacity:.8,showHideOpacity:!0}).init()})})});