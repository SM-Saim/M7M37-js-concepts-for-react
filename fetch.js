// JSON
// normal java script k json.stringify kore JSON e convert korbo,
// Abar JSON ta ke  normal java script e convert korar jonno JSON.parse korbo.

// Amra chaile, normal ekta object k json.stringify() korte pari, abar chaile ekta stringify k json.pares() diye, normal object e convert korte pari.
const student = {
  name: "Sakib Khan",
  age: 35,
  movies: ["king Khan", "Dhakar mastan", "Priotoma"],
};
console.log(student);

const studentStr = JSON.stringify(student);
console.log(studentStr);

const studentParse = JSON.parse(studentStr);
console.log(studentParse);

// fetch
// fetch ba async , await diea ei 90% kaj kora possible.
// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//   Keys , values
// kono ekta object er keys gula k jodi ekta array er modde chai,  taile Object.keys() use korbo. same way te object er value gula chaile Object.values() use korbo.

const keys = Object.keys(student);
const values = Object.values(student);

// forEach:
// Akon theke kono ekta array er moddoker upadan gula k jodi amra paite chai, taile forEach use korbo.
const val11 = [33, 44, 55, 66, 77, 88, 88];
val11.forEach((num) => console.log(num));

// map:
// array er sobgula upadar er upor kono kisu implement KeyboardEvent, abar new ekta array generate korar jonno map use korbo.
val11.map((x) => x * 2);

// for of: used in array like object
// for in: used in loop on an object

// add or remove from an array

const products = [
  { name: "laptop", Brand: "surface 3", color: "dark-Blue", price: 60000 },
  { name: "watch", Brand: "G-shock", color: "black", price: 20000 },
  { name: "sunglass", Brand: "Ray Bon", color: "black", price: 3000 },
  { name: "sant", Brand: "playBoy", color: "dark-Blue", price: 5000 },
  { name: "shoe", Brand: "Apex", color: "Black", price: 3000 },
];

const newItm = { name: "mouse", Brand: "mac", color: "white", price: 4000 };
// copy products array and then add to newProducts
const newProducts = [...products, newItm];
console.log(newProducts);

// create a new array without one specific item: (we will use filter)
const newCreate = products.filter((item) => item.name != "shoe");
console.log(newCreate);
