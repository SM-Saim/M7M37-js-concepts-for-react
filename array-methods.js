const products = [
  { name: "laptop", Brand: "surface 3", color: "dark-Blue", price: 60000 },
  { name: "watch", Brand: "G-shock", color: "black", price: 20000 },
  { name: "sunglass", Brand: "Ray Bon", color: "black", price: 3000 },
  { name: "sant", Brand: "playBoy", color: "dark-Blue", price: 5000 },
  { name: "shoe", Brand: "Apex", color: "Black", price: 3000 },
];
// map: array of object er modde ami jei elements gula chacci, oi gula loop thouh kore collect kore, arek ta array er modde oi upadan gula dibe.

const collectBrand = products.map((items) => items.Brand);
// console.log(collectBrand);

const collectPrice = products.map((pr) => pr.price);
// console.log(collectPrice);

// 2. forEach:
products.forEach((itm) => console.log(itm));
products.forEach((val22) => console.log(val22.name));

// 3.filter: ami ekta sorto dibo,jara jara full fill korbe, tader k ekta array er modde dibe.
const cheapValue = products.filter((num) => num.price <= 5000);
console.log(cheapValue);

//
// Ex:2
const SpecialName = products.filter((letter) => letter.Brand.includes("y"));
console.log(SpecialName);

//
// 4. find: ami ekta sorto dibo,jei full fill korbe, shudu matro tar 1st value takei output hisabe dekhabe.
const SuperName = products.find((letter) => letter.Brand.includes("y"));
console.log(SuperName);

// Ex:2
const makeFind = products.find((maan) => maan.price >= 10000);
console.log(makeFind);
