$(document).ready(function () {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll > 10) {
        $(".navbar").css("background", "white");
        $("a").css("color", "black");
      } else {
        $(".navbar").css("background", "transparent");
        $("a").css("color", "white");
      }
    });
  });
