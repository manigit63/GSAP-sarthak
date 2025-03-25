function breakText() {
  var h1 = document.querySelector("h1");
  var text = h1.textContent;

  var splitted_text = text.split("");

  var halfValue = splitted_text.length / 2;

  var clutter = "";

  splitted_text.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter = clutter + `<span class="a">${elem}</span>`;
    } else {
      clutter = clutter + `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;

  gsap.from(".b", {
    y: 40,
    delay: 0.2,
    duration: 0.8,
    opacity: 0,
    stagger: -0.15,
  });

  gsap.from(".a", {
    y: 40,
    delay: 0.2,
    duration: 0.8,
    opacity: 0,
    stagger: 0.15,
  });
}

breakText();
