// Truthy: "almas", true, {}, []
// Falsy: "", 0, -0, false, null, NaN, undefined

// check truthy:
let myVar = 5;
// check any truthy
if (myVar) {
  myVar = myVar * 5;
} else {
  myVar = 0;
}

let myMoney = 160;
// check negative or falsy anything
if (!myMoney) {
  myMoney = "Nai";
}

//Ternary Operator
let myTaka = 150;
let food;
if (myTaka > 100) {
  food = "Order Biriyani";
} else {
  food = "Biscut Cha";
}

console.log(food);

// Using ternary Operator
let food11 = myTaka > 100 ? "Biriyani" : "Biscut Cha";
console.log(food11);

// Ex:2
let drink = myMoney > 100 && myTaka > 100 ? "Order Coffee" : "Order Lal Cha";
console.log(drink);

// Shortcut:
// Number to String conversion : number er sathe ekta empty string jog korle number ta string hoi jai.

let number = 50;
console.log(number);
const numberStr = number + "";
console.log(numberStr);

// String to number: string er ageekta + jog kore dile string ta number e convert hoi jabe.
let num = "500";
let numPlus = +num;
console.group(numPlus);

//
const isActive = true;
const showUser = () => console.log("Display User");
const hideUser = () => console.log("Hide User");
// isActive ? showUser() : hideUser();

// use && if the left side is true(isActive) then right side will be executed
isActive && showUser();
// use || if the left side is fasle(isActive) then right side will be executed
isActive || hideUser();

// toggle boolean (true k false korbe, fasle k true korbe)
isActive = !isActive;
