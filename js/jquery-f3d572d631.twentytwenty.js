!function(g){g.fn.twentytwenty=function(m){m=g.extend({default_offset_pct:.5,orientation:"horizontal",before_label:"Before",after_label:"After",no_overlay:!1,move_slider_on_hover:!1,move_with_handle_only:!0,click_to_move:!1},m);return this.each(function(){var e=m.default_offset_pct,s=g(this),r=m.orientation,t="vertical"===r?"down":"left",n="vertical"===r?"up":"right";if(s.wrap("<div class='twentytwenty-wrapper twentytwenty-"+r+"'></div>"),!m.no_overlay){s.append("<div class='twentytwenty-overlay'></div>");var a=s.find(".twentytwenty-overlay");a.append("<div class='twentytwenty-before-label' data-content='"+m.before_label+"'></div>"),a.append("<div class='twentytwenty-after-label' data-content='"+m.after_label+"'></div>")}var c=s.find("img:first"),l=s.find("img:last");s.append("<div class='twentytwenty-handle'></div>");var d=s.find(".twentytwenty-handle");d.append("<span class='twentytwenty-"+t+"-arrow'></span>"),d.append("<span class='twentytwenty-"+n+"-arrow'></span>"),s.addClass("twentytwenty-container"),c.addClass("twentytwenty-before"),l.addClass("twentytwenty-after");var i=function(t){var e,n,a,i,o=(e=t,n=c.width(),a=c.height(),{w:n+"px",h:a+"px",cw:e*n+"px",ch:e*a+"px"});d.css("vertical"===r?"top":"left","vertical"===r?o.ch:o.cw),i=o,"vertical"===r?(c.css("clip","rect(0,"+i.w+","+i.ch+",0)"),l.css("clip","rect("+i.ch+","+i.w+","+i.h+",0)")):(c.css("clip","rect(0,"+i.cw+","+i.h+",0)"),l.css("clip","rect(0,"+i.w+","+i.h+","+i.cw+")")),s.css("height",i.h)},o=function(t,e){var n,a,i;return n="vertical"===r?(e-f)/p:(t-w)/v,a=0,i=1,Math.max(a,Math.min(i,n))};g(window).on("resize.twentytwenty",function(t){i(e)});var w=0,f=0,v=0,p=0,y=function(t){(t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)&&"vertical"!==r?t.preventDefault():(t.distX<t.distY&&t.distX<-t.distY||t.distX>t.distY&&t.distX>-t.distY)&&"vertical"===r&&t.preventDefault(),s.addClass("active"),w=s.offset().left,f=s.offset().top,v=c.width(),p=c.height()},h=function(t){s.hasClass("active")&&(e=o(t.pageX,t.pageY),i(e))},u=function(){s.removeClass("active")},_=m.move_with_handle_only?d:s;_.on("movestart",y),_.on("move",h),_.on("moveend",u),m.move_slider_on_hover&&(s.on("mouseenter",y),s.on("mousemove",h),s.on("mouseleave",u)),d.on("touchmove",function(t){t.preventDefault()}),s.find("img").on("mousedown",function(t){t.preventDefault()}),m.click_to_move&&s.on("click",function(t){w=s.offset().left,f=s.offset().top,v=c.width(),p=c.height(),e=o(t.pageX,t.pageY),i(e)}),g(window).trigger("resize.twentytwenty")})}}(jQuery);