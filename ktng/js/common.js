$(function () {
  $("header").hover(
    () => {
      $("header")
        .addClass("on")
        .css({ height: $(".gnb-1depth").height() });
    },
    () => {
      $("header").css({ height: "100px" }).removeClass("on");
    }
  );
  $(".tab > li").click(function () {
    $(".tab > li").removeClass("on");
    $(this).addClass("on");
    let i = $(this).index();
    $(".con > li").removeClass("on");
    $(".con >li").eq(i).addClass("on");
  });
  $(".main-vis01-left").addClass("on");
  // swiper.js
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //   callender
  //달력 관련 스크립트
  function prevMonth(date) {
    let target = new Date(date);
    target.setDate(1);
    target.setMonth(target.getMonth() - 1);
    return getYmd(target);
  }
  function nextMonth(date) {
    let target = new Date(date);
    target.setDate(1);
    target.setMonth(target.getMonth() + 1);
    return getYmd(target);
  }
  function getYmd(target) {
    var month = ("0" + (target.getMonth() + 1)).slice(-2);
    return [target.getFullYear(), month, "01"].join("-");
  }
  function fullDays(date) {
    var target = new Date(date);
    var year = target.getFullYear();
    var month = target.getMonth();
    var firstWeekDay = new Date(year, month, 1).getDay();
    var thisDays = new Date(year, month + 1, 0).getDate();
    var cell = [28, 35, 42]
      .filter(function (n) {
        return n >= firstWeekDay + thisDays;
      })
      .shift();
    var days = [];
    for (var i = 0; i < cell; i++) {
      days[i] = {
        date: "",
        dayNum: "",
        today: false,
      };
    }

    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var inDate;
    for (var index = firstWeekDay, i = 1; i <= thisDays; index++, i++) {
      inDate = new Date(year, month, i);
      days[index] = {
        date: i,
        dayNum: inDate.getDay(),
        today: inDate.getTime() === today.getTime(),
      };
    }

    return days;
  }
  function drawMonth(date) {
    $("#month-this").text(date.substring(0, 7).replace("-", "."));
    $("#month-prev").data("ym", prevMonth(date));
    $("#month-next").data("ym", nextMonth(date));

    $("#tbl-month").empty();

    var td = '<td class="__REST__ __TODAY__"><a __HREF__>__DATE__</a></td>';
    var href = "/depart/schedule?date=" + date.substring(0, 8);
    var hasEvent;
    var tdClass;
    var week = null;
    var days = fullDays(date);
    for (var i = 0, length = days.length; i < length; i += 7) {
      week = days.slice(i, i + 7);

      var $tr = $("<tr></tr>");
      week.forEach(function (obj, index) {
        // 매주 수요일에 이벤트가 있다고 가정
        hasEvent = index === 3;
        tdClass = index === 0 ? "sun" : "";
        tdClass = index === 6 ? "sat" : tdClass;

        $tr.append(
          td
            .replace("__REST__", tdClass)
            .replace("__TODAY__", obj["today"] ? "today" : "")
            .replace(
              "__HREF__",
              hasEvent
                ? 'href="' + href + ("0" + obj["date"]).slice(-2) + '"'
                : ""
            )
            .replace("__DATE__", obj["date"])
        );
      });
      $("#tbl-month").append($tr);
    }
  }
  $(function () {
    var date = new Date().toISOString().substring(0, 10);
    drawMonth(date);

    $(".month-move").on("click", function (e) {
      e.preventDefault();

      drawMonth($(this).data("ym"));
    });
  });
});
