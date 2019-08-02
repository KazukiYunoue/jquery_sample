(function($){
  $.fn.toggler = function(options) {
    /*
      button: jQuery Object
      toggleClass: CSS Class
      target: jQuery Object
      speed: "fast", "slow"
    */
    options = $.extend({
      button: '',
      toggleClass: '',
      target: '',
      speed: "fast"
    }, options);

    options.button.on("click", function(e){
      options.target.animate({height: "toggle"}, options.speed);
      options.button.toggleClass(options.toggleClass);
      e.preventDefault();
    });
    return this;
  };
}(jQuery));
