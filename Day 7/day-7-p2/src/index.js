import "./styles.css";
// //destructuring
// let arr = [1, 2, 3, 4, 5];
// let [x, y, z] = arr.slice(1, 5);
// console.log("destructuring");
// console.log(x, y, z);
// //destructuring object properties
// const students = {
//   firstName: "Chota",
//   lastName: "Bheem"
// };

// let { firstName: fname, lastName: lname, age = 30 } = students;
// console.log("destructuring object properties");
// console.log(fname, lname, age);
// // console.log(students);
// //const { identifier: aliasIdentifier } = object;

// //rest operator
// console.log("rest operator");
// function funcOne(name = "John", ...arg) {
//   console.log(name);
//   console.log(arg);
// }
// funcOne();
// funcOne("Omid", "Jack", "John", 20, 30, true);
// //spread operator
// console.log("spread operator");
// let arrOne = [1, 2, 3];

// let arrTwo = [...arrOne, 4, 5, 6];
// console.log(arrTwo);

//promise

let x = 1;
let prom = new Promise((resolve, reject) => {
  if (x === 1) {
    resolve("Promise done");
  } else reject("failed");
});
setTimeout(() => {
  console.log(prom);
}, 4000);
