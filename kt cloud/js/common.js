// common
$(function () {
  // header
  $(".header-wrap").hover(
    function () {
      if (window.matchMedia("(min-width: 1440px)").matches) {
        $(this).addClass("on");
      }
    },
    function () {
      $(this).removeClass("on");
    }
  );
  $(".side-1depth>li").click(function (e) {
    $(".side-1depth>li").removeClass("on");
    $(this).addClass("on");
    // e.preventDefault();
  });
  $("#banner-hide").click(function () {
    $(".top-banner").addClass("hide");
  });
  $(".sidenav").click(() => {
    $(".side-allmenu").addClass("on");
  });
  $(".side-allmenu .close").click(() => {
    $(".side-allmenu").removeClass("on");
  });
});
