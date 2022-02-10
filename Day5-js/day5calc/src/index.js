import "./styles.css";

// var a = 50;
// var b = 10;
// var add = a + b;
// var mul = a * b;
// var div = a / b;
// var sub = a - b;

// console.log(add, mul, div, sub);

// var addi = function (a, b) {
//   console.log(a + b);
// };
// addi(9, 7);

/* Check Number is EVEN or ODD. */
function checkNum(x) {
  if (x <= 0) {
    console.log("Enter valid no");
  } else if (x % 2 === 1) {
    console.log("ODD");
  } else {
    console.log("EVEN");
  }
}

// console.log(checkNum(-2));
// console.log(checkNum(2));

var isPrime1 = function (a) {
  var i = 1;
  while (i <= a / 2) {
    i++;
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPrime1(11));

var newArray = [1, 2, 3, 4, true, "Hello"];
// console.log(newArray);

var firstTarget = document.getElementById("app");
// console.log(firstTarget);

var secondTarget = document.getElementsByTagName("p");
// console.log(secondTarget);

var thirdTarget = document.getElementsByClassName("para");

var fourthTarget = document.querySelector(".para");

var fifthTarget = document.querySelectorAll(".para");
// console.log(fifthTarget);

var firstEl = document.getElementById("app");
// console.log(firstEl.lastElementChild);
var newElement = document.createElement("h1");
newElement.textContent = "I am the new parent";
var parentElement = document.getElementById("app");
parentElement.appendChild(newElement);
console.log(newElement);
