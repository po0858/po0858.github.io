function loading() {
  $(".loading").fadeOut();
}
function afterload() {
  // main click event
  let i = 1;
  let formatted_i = ("0" + i).slice(-2);
  $(".container").click((e) => {
    console.log(i);
    let x = e.pageX;
    let y = e.pageY;
    let randomScale = Math.random() * (1.1 - 0.4) + 0.4;
    let randomRotate = Math.random() * (15 - 1) + 1 - 7;
    $(".container").append(
      `<div class='img img${i}'><img src='images/mega/style_${formatted_i}.webp'> </div>`
    );
    $(".topbg2").animate({ opacity: "1" }, 500);
    $(".img" + i)
      .css({
        left: x + "px",
        top: y + "px",
      })
      .animate({ top: "-=150%" }, 3000, "linear", function () {
        $(this).remove();
        if ($(".container").has(".img").length == 0) {
          $(".topbg2").animate({ opacity: "0" }, 500);
        }
      });
    gsap.from(".img" + i, {
      scale: 0,
      rotate: 0,
    });
    gsap.to(".img" + i, {
      scale: randomScale,
      rotate: randomRotate,
      duration: 2,
    });
    $(".top .container .pagination p:first-child").html(i);
    if (i < 15) {
      i++;
      formatted_i = ("0" + i).slice(-2);
    } else i = 1;
  });
  // 마우스 변경
  $(document).mousemove((e) => {
    let x = e.pageX;
    let y = e.pageY;
    gsap.to(".mouse", {
      left: x,
      top: y,
      duration: 0.7,
      ease: "slow(0.7,0.7,false)",
    });
    $(".cursor").css({ left: x, top: y });
  });
  $("canvas").hover(
    () => {
      $("html,body").css({ cursor: "none" });
      $(".mouse").removeClass("hide");
      $(".cursor").removeClass("hide");
    },
    () => {
      $("html,body").css({ cursor: "auto" });
      $(".mouse").addClass("hide");
      $(".cursor").addClass("hide");
    }
  );
  // ripples
  $(".container").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.01,
  });
  // main banner slide
  function banner1Ani() {
    $(".banner-vogue .banner-wrap:first-child").animate(
      { marginLeft: 0 },
      17000,
      "linear",
      function () {
        $(this).css({ marginLeft: -$(this).outerWidth() });
      }
    );
  }
  function banner2Ani() {
    $(".banner-click .banner-wrap:first-child").animate(
      { marginLeft: -$(this).outerWidth() },
      17000,
      "linear",
      function () {
        $(this).css({ marginLeft: 0 });
      }
    );
  }
  banner1Ani();
  banner2Ani();
  setInterval(banner1Ani, 17100);
  setInterval(banner2Ani, 17100);
  // header
  let headerht1 = $("header").height();
  let headerht2 = $(".nav-2depth").innerHeight();
  $("header nav").mouseenter(() => {
    $("header")
      .stop()
      .animate({ height: headerht1 + headerht2 }, 600);
  });
  $("header").mouseleave(() => {
    $("header").stop().animate({ height: headerht1 }, 400);
  });
  $("header .nav-1depth > li").hover(
    function () {
      $("header .nav-1depth > li").css({ opacity: 0.5 });
      $(this).css({ opacity: 1 });
    },
    function () {
      $("header .nav-1depth > li").css({ opacity: 1 });
    }
  );

  $(window).on("wheel", () => {
    console.log(event.wheelDelta);
    if ($("header").hasClass("white")) {
      if (event.wheelDelta > 0) {
        $("header").height(185);
        $("header").css({ borderBottom: "none" });
      } else {
        $("header").height($("header .logo").outerHeight(true));
        $("header").css({ borderBottom: "1px solid #414141" });
      }
    }
  });

  // scroll

  $("header").hide();
  $(".topcon .imgbox").click(() => {
    $(".top").slideUp();
    $(".head-banner").hide();
    $("body").css({ height: "auto" });
    $(".mouse").addClass("hide");
    $(".cursor").addClass("hide");
    $(".topcon .imgbox").css({ transform: "translate(-50%, 0)" });
    let startcon = gsap.timeline({
      onComplete: () => {
        $("body").css({ overflow: "auto" });
      },
    });
    startcon
      .to(
        ".topcon .imgbox",
        {
          animation: "none",
          width: 1280,
        },
        "start"
      )
      .to(
        ".top",
        {
          opacity: 0,
        },
        "start"
      )
      .to(
        ".topcon",
        {
          marginTop: headerht1,
        },
        "start"
      )
      .to("body", {
        backgroundColor: "#000",
      })
      .to(".topcon .imgbox .textbox", {
        delay: 0.2,
        opacity: 1,
        onStart: () => {
          $("header").show().addClass("white");
        },
      });
  });

  // let afterConBool = true;
  // let startcon = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".top",
  //     start: "bottom bottom",
  //     end: "+=700",
  //     markers: true,
  //     // scrub: 1,
  //     onStart: () => {},
  //     onLeave: () => {
  //       gsap.to(".topcon .imgbox .textbox", {
  //         delay: 0.2,
  //         opacity: 1,
  //         repeat: 1,
  //         onStart: () => {
  //           if (afterConBool) {
  //             $("html,body").animate({ scrollTop: "0" }, 100);
  //             $(".top").slideUp();
  //             $(".head-banner").hide();
  //             $(".topcon").animate({ marginTop: headerht1 }, 100);
  //           }
  //         },
  //         onComplete: (event) => {
  //           if (afterConBool) {
  // $(".mouse").addClass("hide");
  // $(".cursor").addClass("hide");
  //             $("html,body").css({ scrollTop: "0" });
  //             afterConBool = !afterConBool;
  //           }
  //         },
  //       });
  //       $("header").show().addClass("white");
  //     },
  //   },
  // });
  // startcon
  //   .to(".topcon .imgbox", {
  //     width: 1280,
  //     transform: "translate(-50%)",
  //   })
  //   .to(".top", {
  //     opacity: 0,
  //   })
  //   .to(
  //     "body",
  //     {
  //       backgroundColor: "#000",
  //     },
  //     "start"
  //   );
}
// 로딩창
$(function () {
  $(function () {
    $("html,body").scrollTop(0);
  });
  // $("body").css({ overflow: "hidden", height: "100vh" });
  setTimeout(loading, 500);
  setTimeout(afterload, 500);
});
