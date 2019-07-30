(function($){
  $.fn.scroller = function(options) {
    var up_button = options.up_button;
    var down_button = options.down_button;

    var scroll = function(position){
      $("html").animate({scrollTop: position});
    }
    var current_scroll_top = function(){
      return $(window).scrollTop();
    }
    var toggle_button = function(){
      if (current_scroll_top() == 0){
        up_button.fadeOut();
      } else if(current_scroll_top() == ($(document).height() - $(window).height())){
        down_button.fadeOut();
      } else {
        up_button.fadeIn();
        down_button.fadeIn();
      }
    }

    $(window).on('scroll',function(){
      toggle_button();
    });
    up_button.on("click", function(){
      scroll(0);
    });
    down_button.on("click", function(){
      scroll($(document).height());
    });
  };
}(jQuery));
