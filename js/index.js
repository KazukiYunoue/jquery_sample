jQuery(function ($){
  // objects
  var scroller = (function(){
    var up_button = $("#scroll_up_button");
    var down_button = $("#scroll_down_button");
    var current_scroll_top = function(){ 
      return $(window).scrollTop(); 
    };
    
    return {
      up_button: up_button,
      down_button: down_button,
      scroll: function(position){
        $("html").animate({scrollTop: position});
      },
      toggle_button: function(){
        if (current_scroll_top() == 0){
          up_button.fadeOut();
        } else if(current_scroll_top() == ($(document).height() - $(window).height())){
          down_button.fadeOut();
        } else {
          up_button.fadeIn();
          down_button.fadeIn();
        }
      }
    };
  })();

  // events
  $(this).on('scroll',function(){
    scroller.toggle_button();
  });
  scroller.up_button.on("click", function(){
    scroller.scroll(0);
  });
  scroller.down_button.on("click", function(){
    scroller.scroll($(document).height());
  });
})