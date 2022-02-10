import "./styles.css";

var parEl = document.getElementById("app");
var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   alert("You have won");
// });

parEl.addEventListener("mouseover", function () {
  parEl.classList.add("newClass");
});

console.log("btn");

btn.addEventListener("click", function () {
  var newEl = document.createElement("li");
  newEl.textContent = "On Click";
  parEl.appendChild(newEl);
});
