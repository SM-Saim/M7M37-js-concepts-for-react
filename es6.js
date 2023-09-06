const number = [34, 57, 345, 88, 22, 44, 88, 97, 24];

const student = {
  name: "Sakib Khan",
  age: 35,
  movies: ["king Khan", "Dhakar mastan", "Priotoma"],
};

// 1. template string
const templateSt = `His name is ${student.name}. He is ${student.age} years old.
His recent movies is ${student.movies[2]}.
I will mark in ${number[8]} out of 100`;
console.log(templateSt);

// arrow function
// single line arrow function er hetre return dea lage na, auto return korbe.
const getFifty = () => 50;
const addSixty = (num) => num + 60;
const isEven = (number) => number % 2 === 0;
const addtHREE = (a, b, c) => a + b + c;
// multiline arraw wfunction ta normal arrow function er moto, return dea lage.
const doMath = (num1, num2) => {
  const res = num1 + num2;
  return res;
};

// spread operator [...xyz]
// Suppose, amar kase ekta array ase ,oi arry tar onno arek ta ary er mode copy kortr chai. Kintu normally, array referenceID use korar koarone , ami jodi main array ta te kono chnage kori taile cop arry tate chage hoi jabe, eta prevent korar jonno amra spread operator use korbo.
const numbers = [34, 57, 345, 88, 22, 44, 88, 97, 24];

const numb = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
//
// create ea new array from an older array and ad an element
const addNew = [...numbers, 5, 6, 7];
console.log(numb);
console.log(addNew);
console.log(numbers);
