// common
// header
$(".header-wrap").hover(
  function () {
    $(this).addClass("on");
  },
  function () {
    $(this).removeClass("on");
  }
);
$("#banner-hide").click(function () {
  $(".top-banner").addClass("hide");
});
// tab
$(".sec01-con >ul >li").hide();
function sec01Tab() {
  $(".sec01-tab-1depth>li").removeClass("on");
  $(this).siblings().stop().animate({ height: "88px" }, 600);
  $(this).addClass("on");
  let ht = $(this).find(".sec01-tab-2depth").height() + 88;
  $(this)
    .stop(false, true)
    .animate({ height: ht + "px" }, 600, "linear");
  $(".sec01-con >ul >li").hide().removeClass("on");
  $(".sec01-con >ul >li").eq($(this).index()).show().addClass("on");
}
$(".sec01-tab-1depth>li").click(sec01Tab);
// track
$("[class^='track-']").each(function (index, value) {
  let clone = $(this).find("img").eq(0).clone();
  $(this).append(clone);
});
function banner() {
  console.log("banner");
  $("[class^='track-']:even").each(function (index, value) {
    let w = $(this).find("img").width();
    $(this)
      .find("img:first-child")
      .animate({ marginLeft: -w }, 30000, "linear", function () {
        $(this).css({ marginLeft: "0px" });
        console.log($(this));
      });
  });
  $("[class^='track-']:odd").each(function (index, value) {
    let w = $(this).find("img").width();
    $(this).find("img").eq(0).css({ marginLeft: -w });
    $(this)
      .find("img")
      .eq(0)
      .animate({ marginLeft: "0px" }, 30000, "linear", function () {
        $(this).css({ marginLeft: -w });
      });
  });
}
let CallBackbool = true;
gsap.utils.toArray("section").forEach((value, index) => {
  ScrollTrigger.create({
    trigger: value,
    start: "top 50%",
    end: "bottom ",
    // markers: true,
    onToggle: () => {
      value.classList.add("on");
      if (value.classList[0] == "main-sec01") {
        if (CallBackbool == true) {
          $(".sec01-tab-1depth>li").eq(0).click();
          CallBackbool = false;
        }
      }
      if (value.classList[0] == "main-sec09") {
        banner();
        setInterval(banner, 30000);
      }
    },
  });
});
gsap.to(".top-banner", {
  scrollTrigger: {
    trigger: ".top-banner",
    start: "bottom",
    end: "bottom ",
    toggleClass: "hide",
    once: true,
  },
});
ScrollTrigger.create({
  trigger: ".scrollwrap",
  start: "top 60%",
  end: "top 30% ",
  // markers: true,
  onEnter: () => {
    gsap.to(".scrollwrap", { paddingTop: "0" });
    ScrollTrigger.refresh(true);
  },
  onToggle: () => {},
  onLeaveBack: () => {
    gsap.to(".scrollwrap", { paddingTop: "100vh", marginTop: 0 });
    let ht = $(".main-sec01 .wrap").offset().top;
    gsap.to("html,body", {
      scrollTop: ht,
      duration: 0.5,
      ease: "linear",
    });
    ScrollTrigger.refresh(true);
  },
});
gsap.utils.toArray(".scroll:not(:first-child)").forEach((value, index) => {
  ScrollTrigger.create({
    trigger: value,
    start: "top 95%",
    // end: "bottom 30% ",
    // markers: true,
    onEnter: () => {
      gsap.to(".scrollwrap", { marginTop: "-=100vh" });
      ScrollTrigger.refresh(true);
    },
  });
});
gsap.utils.toArray(".scroll:not(:last-child)").forEach((value, index) => {
  ScrollTrigger.create({
    trigger: value,
    start: "bottom 5%",
    // end: "bottom 30% ",
    // markers: true,
    onLeaveBack: () => {
      gsap.to(".scrollwrap", { marginTop: "+=100vh" });
      ScrollTrigger.refresh(true);
    },
  });
});
gsap.to(".scroll:first-child", {
  scrollTrigger: {
    trigger: ".scroll:first-child",
    start: "top 95%",
    // end: "bottom 30% ",
    // markers: true,
    onStart: () => {
      gsap.to(".scrollwrap", { marginTop: 0 });
      ScrollTrigger.refresh(true);
    },
  },
});
// swiper.js
var swiper = new Swiper(".mySwiper1", {
  width: "880",
  loop: true,
  slidesPerView: "1",
  spaceBetween: -250,
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: -340,
    },
  },
  on: {
    slideChange: function () {
      length = $(".swiper-slide").length;
      for (let i = 0; i < length; i++) {
        $(".swiper-slide")
          .eq(i)
          .css({ zIndex: 10 - i });
      }
    },
  },
});
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 55,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  grabCursor: true,
  loop: true,
});
