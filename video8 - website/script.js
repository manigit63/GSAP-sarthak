function page1animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h3,nav button", {
    y: -30,
    delay: 0.2,
    duration: 0.4,
    stagger: 0.1,
    opacity: 0,
    ease: "back-inOut",
  });

  tl.from(".center-part1 h1", {
    x: -200,
    duration: 0.7,
    opacity: 0,
  });

  tl.from(".center-part1 p", {
    x: -100,
    duration: 0.6,
    opacity: 0,
  });
  tl.from(".center-part1 button", {
    x: 0,
    duration: 0.5,
    opacity: 0,
  });

  tl.from(".center-part2 img", { x: 200, opacity: 0, duration: 0.4 }, "-=0.7");

  tl.from(".section1bottom img", {
    opacity: 0,
    duration: 0.3,
    y: 30,
    stagger: 0.2,
    ease: "power.in",
  });
}

page1animation();

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    start: "top 65%",
    end: "top 0%",
    scrub: 3,
  },
});

tl2.from(".services", {
  y: 30,
  opacity: 0,
});

tl2.from(
  ".line1.left",
  {
    x: -300,
    opacity: 0,
    duration: 0.5,
  },
  "line1"
);
tl2.from(
  ".line1.right",
  {
    x: 300,
    opacity: 0,
    duration: 0.5,
  },
  "line1"
);
tl2.from(
  ".line2.left",
  {
    x: -300,
    opacity: 0,
    duration: 0.5,
  },
  "line2"
);
tl2.from(
  ".line2.right",
  {
    x: 300,
    opacity: 0,
    duration: 0.5,
  },
  "line2"
);
