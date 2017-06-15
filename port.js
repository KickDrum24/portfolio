$(document).ready(function (){
  $("#about_button").click(function (){
      $('html, body').animate({
          scrollTop: $("#about").offset().top - 75
      }, 2000);
  });
    $("#portfolio_button").click(function (){
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - 75
        }, 2000);
    });
    $("#button").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 75
        }, 2000);
    });
});
