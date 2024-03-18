$(function () {
  $(".header-wrap").mouseenter(function () {
    $(this).addClass("on");
  });
  $(".header-wrap").mouseleave(function () {
    $(this).removeClass("on");
  });
  $("#banner-hide").click(function () {
    $(".top-banner").addClass("hide");
  });
  $(".sec01-tab-1depth>li").click(function () {
    $(".sec01-tab-1depth>li").removeClass("on");
    $(this).addClass("on");
    let ht = $(this).find(".sec01-tab-2depth").height();
    $(this).css({ height: ht + "px" });
  });
  $(".sec01-tab-1depth>li").click();
});
