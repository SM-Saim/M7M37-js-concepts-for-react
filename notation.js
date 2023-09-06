const person = {
  name: "Lal Mia",
  age: 56,
  profession: "Goru Bepari",
  Address: "Gub-Toli",
  45: "token No",
  "son-name": "Jalil Mia",
};

// dot notation
// dot notation shudu matro property er name string hoile kaj kore, number ba semi colon er khetre ar kaj kore na, tai tokon bracket notation[] use kora hoi.
const val11 = person.Address;
console.log(val11);

// Bracket Notation

// case:1
const val22 = person["profession"];
console.log(val22);

// case:2
const val33 = "profession";
const val44 = person[val33];
console.log(val44);

const val55 = person[45];
console.log(val55);

const val66 = person["son-name"];
console.log(val66);
