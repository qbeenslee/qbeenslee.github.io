(function() {
  var delta, lastScrollTop, nav_bar_height, scrolled, toggle_header_when_scrolling;

  scrolled = false;

  lastScrollTop = 0;

  delta = 5;

  nav_bar_height = $('.auto_header').outerHeight();

  $(document).ready(function() {
    $('body').css('position', 'relative');
    return $('.auto_header').css("transition", 'top 0.3s ease-in-out').css('top', '0').css('position', 'fixed').css('z-index', 9999);
  });

  $(window).scroll(function() {
    return scrolled = true;
  });

  setInterval((function(_this) {
    return function() {
      if (scrolled) {
        toggle_header_when_scrolling();
        return scrolled = false;
      }
    };
  })(this), 250);

  toggle_header_when_scrolling = function() {
    var st;
    st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) {
      return false;
    }
    if (st > lastScrollTop && st > nav_bar_height / 2) {
      $('.auto_header').css('top', '-' + nav_bar_height * 1.2 + 'px');
    } else {
      if (st + $(window).height() < $(document).height()) {
        $('.auto_header').css('top', '0');
      }
    }
    return lastScrollTop = st;
  };

}).call(this);
