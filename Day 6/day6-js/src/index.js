// Replace Child

var parentEl = document.getElementById("app");
// console.log(parentEl);

var newEl = document.createElement("li");
newEl.textContent = "Hola";
parentEl.replaceChild(newEl, parentEl.firstElementChild);
// console.log(newEl);

//append child
var firstEl = document.getElementById("app");
// console.log(firstEl.lastElementChild);
var newElement = document.createElement("h1");
newElement.textContent = "New Hello";
var parentElement = document.getElementById("app");
parentElement.appendChild(newElement);
// console.log(newElement);

// next sibling
var firstEl = document.querySelector(".uno");
var nextSib = firstEl.nextElementSibling;
console.log(nextSib);

var firstTarget = document.getElementById("app");
// console.log(firstTarget);

var secondTarget = document.getElementsByTagName("p");
// console.log(secondTarget);

var thirdTarget = document.getElementsByClassName("para");

var fourthTarget = document.querySelector(".para");

var fifthTarget = document.querySelectorAll(".para");
// console.log(fifthTarget);

parentEl.setAttribute("class", "listName");
console.log(parentEl.hasAttribute("class"));
