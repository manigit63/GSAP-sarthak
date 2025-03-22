//  4 piller of DOM

// 1. selecting
var a = document.querySelector("h1");
// console.log(a);
a.innerHTML = "changed HTML";

// 2. changing HTML
document.querySelector("h1").innerHTML = "changed in one line";

// 3. changing CSS
var a = document.querySelector("p");

a.textContent = a.textContent.replace(/\b\w/g, (char) => char.toUpperCase());

// 4. add Event Listener

var a = document.querySelector("h3");

a.addEventListener("click", function () {
  a.innerHTML = `learning DOM is too easy`;
});

// practice 1 ---------------------------------

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    flag = 0;
  }
});

// practice 2 :: select multiple elements ---------------------------------

var h = document.querySelectorAll("h1");

console.log(h);

h.forEach(function (elem) {
  console.log(elem);
  elem.style.color = "red";
});

// practice 3 : ----------------------------------------

document.getElementById("id_name");
document.getElementsByClassName("class_name");

// h.innerHTML vs h.textContent

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
box1.innerHTML = "<h1>inner HTML</h1> <h2>inner HTML</h2> ";
box2.textContent = "<h1>text content</h1>";
