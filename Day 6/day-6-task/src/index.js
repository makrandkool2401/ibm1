import "./styles.css";

var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");
var doc = document.getElementById("app");

red.addEventListener("click", function () {
  doc.setAttribute("id", "red");
});

yellow.addEventListener("click", function () {
  doc.setAttribute("id", "yellow");
});

blue.addEventListener("click", function () {
  doc.setAttribute("id", "blue");
});

// traffic.addEventListener("click", function () {
//   doc.setAttribute("id", "app");
// });
