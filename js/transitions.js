$(".application-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#applications-holder").offset().top,
    },
    1000
  );
});

$(".brainwave-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#brainwave-holder").offset().top,
    },
    1000
  );
});

$(".adam-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#adam-holder").offset().top,
    },
    1000
  );
});
