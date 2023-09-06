// Six JavaScript Fundamentals that you need to know

// 1. Variables
// How to declare a variable using let and const:
// jeta change howar somvabona ase, oita let diea dellare korbo, change howar somvabona na thakle const diea declare korbo.
const fatherName = "John";
let season = "winter";

// 2. Conditions
// Six basic conditions: >, <, ===, !==, >=, <=
// multiple conditions: &&, ||
if (fatherName === "John" || season === "winter") {
  console.log("Ok");
} else if (fatherName === "John") {
  console.log("Okay");
} else {
  console.log("not ok");
}

// 3.Array
// index (0 theke count hoi)
// length (1 theke count hoi), push
const number = [34, 57, 345, 88, 22, 44, 88, 97, 24];
number[0] = 100;

// 4. for loop
for (let num = 0; num < number.length; num++) {
  const n = number[num];
  console.log(n);
}

// 5. function
function multiply(num1, num2) {
  total = num1 * num2;
  return total;
}
const val = multiply(30, 60);
console.log(val);

// 6.Object (onek gula boisisto er somahar )
// 3 ways to access property by name
const student = {
  name: "Sakib Khan",
  age: 35,
  movies: ["king Khan", "Dhakar mastan", "Priotoma"],
};
console.log(student.age); //direct access by property
console.group(student["age"]); // access via property name in string

const getAge = "age";
console.log(student[getAge]); // access via property name in a variable , eta dynamic value dear somay kaje lage
