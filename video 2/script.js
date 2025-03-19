var tl = gsap.timeline();

tl.from("h2", {
  y: -25,
  opacity: 0,
  duration: 0.5,
  delay: 0.1,
});
tl.from("h4", {
  y: -25,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
});

// 2nd class----------------------------------------

gsap.from("#page1 .box", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
});

gsap.from("#page2 h2", {
  // opacity: 0,
  x: 500,
  duration: 1,
  scrollTrigger: "#page2 h2"});

gsap.from("#page2 h3", {
  opacity: 0,
  x: -500,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 h3",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});
