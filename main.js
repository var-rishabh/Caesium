const nav = document.querySelector(".navbar");

$(document).ready(function () {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll > 50) {
        nav.style.height = "50px";
        $(".navbar").css("background", "white");
        $("a").css("color", "black");
        $(".logo").css("color", "black");
      } else {
        nav.style.height = "70px";
        $(".navbar").css("background", "transparent");
        $("a").css("color", "white");
        $(".logo").css("color", "white");
      }
    });
  });
