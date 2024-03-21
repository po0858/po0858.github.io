$("#fullpage").fullpage({
  anchors: ["anchor1", "anchor2", "anchor3", "anchor4", "anchor5"],
  menu: "#menu",
  // responsiveHeight: 850,
  responsiveWidth: 768,
  scrollOverflow: true,
});

function checkWindowSize() {
  if (window.matchMedia("(max-width: 480px)").matches) {
    $(".wrap").css({ paddingTop: 0 });
  } else {
    let ht = $("header").outerHeight(true);
    $(".wrap").css({ paddingTop: ht });
  }
}
checkWindowSize();
window.addEventListener("resize", checkWindowSize);

$(".gnb li").hover(
  function () {
    $(".gnb a").css({ opacity: "0.6" });
    $(this).children("a").css({ opacity: "1" });
  },
  function () {
    $(".gnb a").css({ opacity: "1" });
  }
);
