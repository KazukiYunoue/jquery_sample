jQuery(function ($){
  $(".scroller").scroller({
    up_button: $("#scroll-up-button"),
    down_button: $("#scroll-down-button")
  });
  $("nav").toggler({
    button: $(".toggler-secondary-nav"),
    toggleClass: "tool-button-active",
    target: $(".secondary-nav")
  });
})
