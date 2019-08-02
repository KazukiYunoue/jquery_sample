(function($){
  $.fn.scroller = function(options) {
    /*
      up_button: jQuery Object
      down_button: jQuery Object
    */
    options = $.extend({
      up_button: '',
      down_button: ''
    }, options);

    var scroll = function(position){
      $("html").animate({scrollTop: position});
    }
    var current_scroll_top = function(){
      return $(window).scrollTop();
    }
    var toggle_button = function(){
      if (current_scroll_top() == 0){
        options.up_button.fadeOut();
      } else if(current_scroll_top() == ($(document).height() - $(window).height())){
        options.down_button.fadeOut();
      } else {
        options.up_button.fadeIn();
        options.down_button.fadeIn();
      }
    }

    $(window).on('scroll',function(){
      toggle_button();
    });
    options.up_button.on("click", function(){
      scroll(0);
    });
    options.down_button.on("click", function(){
      scroll($(document).height());
    });
    return this;
  };
}(jQuery));
