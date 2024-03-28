// sub
$(function () {
  // header
  $(".header-wrap").hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );
  // header
  let gnbtext;
  $(".gnb-1depth > li").hover(
    function () {
      if ($(this).children("a").attr("href") == "#") {
        gnbtext = $(this).children("a[href='#']").html();
        $(this).children("a[href='#']").html("준비중");
      }
    },
    function () {
      $(this).children("a[href='#']").html(gnbtext);
    }
  );
  //
  gsap.utils.toArray("section").forEach((value, index) => {
    ScrollTrigger.create({
      trigger: value,
      start: "top 70%",
      end: "bottom ",
      // markers: true,
      onToggle: () => {
        value.classList.add("on");
      },
    });
  });
  gsap.fromTo(
    ".con02 li",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".con02",
        start: "top 50%",
        end: "bottom ",
        // markers: true,
      },
    }
  );
  $(".extra .swiper .imgbox").each(function () {
    if ($(this).children().length > 1) {
      $(this).siblings(".textbox").css({ paddingLeft: "100px" });
    }
  });
});
