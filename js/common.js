$("#fullpage").fullpage({
  anchors: ["anchor1", "anchor2", "anchor3", "anchor4"],
  menu: "#menu",
});
let ht = $("header").outerHeight(true);
$(".wrap").css({ paddingTop: ht });
$(".gnb li").hover(
  function () {
    $(".gnb a").css({ opacity: "0.6" });
    $(this).children("a").css({ opacity: "1" });
  },
  function () {
    $(".gnb a").css({ opacity: "1" });
  }
);
