// common
$(function () {
  // header
  if (window.matchMedia("(max-width: 1250px)").matches) {
    $(".header-wrap").hover(
      function () {
        $(this).addClass("on");
      },
      function () {
        $(this).removeClass("on");
      }
    );
  }

  $("#banner-hide").click(function () {
    $(".top-banner").addClass("hide");
  });
  //
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
  // tab

  $(".sec01-tab-1depth>li").click(function () {
    $(".sec01-tab-1depth>li").removeClass("on");
    $(this).addClass("on");
    $(".sec01-con >ul >li").hide().removeClass("on");
    $(".sec01-con >ul >li").eq($(this).index()).show().addClass("on");
    if (window.matchMedia("(min-width: 1250px)").matches) {
      $(this).siblings().find(".sec01-tab-2depth").slideUp(500);
      $(this).find(".sec01-tab-2depth").slideDown(500);
    } else {
    }
  });
  // window.addEventListener("resize", checkWindowSize);
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
  gsap.utils.toArray("section:not(.scroll)").forEach((value, index) => {
    ScrollTrigger.create({
      trigger: value,
      start: "top 80%",
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
  //scroll
  ScrollTrigger.create({
    trigger: ".visual",
    start: "top 0%",
    // markers: true,
    onEnter: () => {
      $(".visual").addClass("on");
    },
    onLeaveBack: () => {
      $(".visual").removeClass("on");
    },
  });
  gsap.utils.toArray("[class^='triggerPoint-']").forEach((value, index) => {
    const triggerClassName = value.classList[0];
    const triggerNumber = parseInt(
      triggerClassName.replace("triggerPoint-", "")
    );
    ScrollTrigger.create({
      trigger: value,
      start: "top 50%",
      // markers: true,
      toggleClass: "on",
      onEnter: () => {
        console.log(triggerNumber);
        $(".main-sec0" + triggerNumber)
          .addClass("on")
          .prevAll("section")
          .addClass("on2");
      },
      onLeaveBack: () => {
        $(".main-sec0" + triggerNumber)
          .removeClass("on")
          .prev("section")
          .removeClass("on2");
      },
    });
  });
  // swiper
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
});
