tl = gsap.timeline({ defaults: { rotate: 360, repeat: -1, yoyo: true } });

tl.to(
  ".sqaure",
  {
    duration: 2,
    x: 200,
  },
  0
);

tl.to(
  ".circle",
  {
    duration: 2,
    x: -200,
  },
  0
);

tl.to(".star", {
  duration: 2,
  x: 200,
});
