var Path = `M 100 100 Q 625 100 1150 100`;

var finalPath = `M 100 100 Q 625 100 1150 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  Path = `M 100 100 Q ${dets.x} ${dets.y} 1150 100`;

  gsap.to("svg path", {
    attr: { d: Path },
    duration: 0.3,
    ease: "back.out(1.7)",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.3,
    ease: "elastic.out(1.5,0.2)",
  });
});
