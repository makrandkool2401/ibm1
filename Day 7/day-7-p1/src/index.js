import "./styles.css";

// let sentence = "Hello this is UI class";
// let sentSplit = sentence.split(" ");
// let joinArray = sentSplit.join(" ");
// console.log(sentSplit);
// console.log(joinArray);

// let arrOne = [1, 2, 3, 4, 5];

// //map method
// let arrTwo = arrOne.map(function (item) {
//   return item * 2;
// });

// console.log(arrTwo);
// //map method arrow func method
// let arrThree = arrOne.map((item) => item * 2);
// console.log(arrThree);
// // filter method
// let arrFour = arrOne.filter((item) => item % 2 === 0);
// console.log(arrFour);

// let arrFour1 = arrOne.filter((item) => item % 2 === 1);
// console.log(arrFour1);
// //reduce
// let arrFive = arrOne.reduce(function (result, item) {
//   return result + item;
// }, 0); //0 is the initiator

// console.log(arrFive);

// //implicit conversion
// let a = 4;
// let b = "true";
// console.log(a + b);

// console.log("4" + a + b);

//objects

// const student = {
//   firstName: "tom",
//   Age: 30,
//   "last name": "Jerry"
// };
// student.firstName = "Me";
// student.salary = 30000;
// delete student.Age;

// console.log(student.Age);
// console.log(student["last name"]);
// console.log("age" in student);
// console.log(student);

//for loop

let student = {
  firstName: "tom",
  Age: 30,
  "last name": "Jerry"
};

for (let key in student) {
  console.log(student[key]);
}
