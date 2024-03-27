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
        markers: true,
      },
    }
  );
  //scroll
});
