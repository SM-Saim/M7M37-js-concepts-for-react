// Array destrcturing:
const numbers = [23, 45];
// const x = numbers[0];
// const y = numbers[1];

// akon manush olosh hoi gese, tai 2 ta jinish k eksathe declare kore, ekane baam e array thakle , daan eo array thakbe.
// 1. dan pashe ekta array thakte pare, seta k destructuring kortr pare.
// 2. dan pashe ekta variable thakte pare, seta k destructuring kora jai.
// 3 dan pashe ekta function thakte pare, seta k destructuring kora jai.

// Ex:1
// const [x, y] = [23, 45];

// Ex:2
const [x, y] = numbers;
console.log(x, y);

// Ex:3
function boxify(num1, num2) {
  const total = [num1, num2];
  return total;
}
// console.log(boxify(100, 200));
const [a, b] = boxify(100, 200);
console.log(a, b);

// Ex:4
const student = {
  name: "Sakib Khan",
  age: 35,
  movies: ["king Khan", "Dhakar mastan", "Priotoma"],
};
// const [first, second, third] = ["king Khan", "Dhakar mastan", "Priotoma"];
const [first, second, third] = student.movies;
console.log(first, second, third);

// Object destructuring:
// Daan pashe object thakle, baam pasheo object hobe, object destructuring er khetre sequence maintain korete hoi, na, property ta thakleo hoilo.
// Ex:1
const { salary, age, id, name } = {
  name: "desmond",
  age: 90,
  id: 2935344,
  salary: 12000,
};

// Ex:2
const employee = {
  names: "David",
  ages: 45,
  language: ["html", "css", "js"],
  specification: {
    height: 72,
    weight: 67,
    address: "gulshan",
    watch: { Brand: "casio", price: 2000, color: "red" },
  },
  drink: "water",
};

const { names, ages } = employee;
const { height, address } = employee.specification;
const { Brand } = employee?.specification?.watch; //Optional chaining
