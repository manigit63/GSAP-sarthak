var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  durration: 0.8,
});

tl.from("#full h4", {
  opacity: 0,
  x: 150,
  durration: 0.7,
  ease: "back-out",
  stagger: 0.2,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});
