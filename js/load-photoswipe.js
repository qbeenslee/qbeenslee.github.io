window.loadphotoswipejs&&window.alert("You've loaded load-photoswipe.js twice. See https://github.com/liwenyip/hugo-easy-gallery/issues/6");var loadphotoswipejs=1;$(document).ready(function(){var h=[];$("img").each(function(){var t=$(this);if(t.hasClass("no-photoswipe")||t.hasClass("nozoom")||t.parent().is("div"))return!0;var a=t.attr("href"),e=t.attr("alt"),o=t.attr("src"),s=t.attr("data-original");if($(this).css("cursor","zoom-in"),null!=o&&!o.startsWith("data:")||null==s||(o=s),null==a&&(a=o),t.data("size")){var i=t.data("size").split("x"),n={src:a,w:i[0],h:i[1],title:e,msrc:o};console.log("Using pre-defined dimensions for "+a)}else{n={src:a,w:800,h:600,title:e,msrc:o},console.log("Using default dimensions for "+a);var r=new Image;r.src=a;var l=setInterval(function(){var t=r.naturalWidth,a=r.naturalHeight;t&&a&&(clearInterval(l),n.w=t,n.h=a,console.log("Got actual dimensions for "+r.src))},30)}var c=h.length;h.push(n),t.on("click",function(t){t.preventDefault();var a=$(".pswp")[0];new PhotoSwipe(a,PhotoSwipeUI_Default,h,{index:c,bgOpacity:.8,showHideOpacity:!0}).init()})})});