// local storage: ami pc bondho kori tab bondo kori , local storage theke abe.
// session storage: amar tab session porjontoi cholbe, er baire tar ar kono value nai.
// Value save kora, update kora 2 ta tei  ekdom same.

// jeheto local storage, session storage 2 tai browser er upadan tai, ei gula VS code chalate hole, html file lagbe.
// set value diea 1 ta value set kora jai,
// use full sceen devtool by using, dock side, 1st option.
// local storage e Array ba object rakte chaile, json.stringfy() kore rakte hobe
// Abar local storage theke kono Array ba object use korte chaile, json.parse() use korte hobe

// localStorage.setItem("userId", 39484858);
const AddtoLocalStorage = () => {
  const idInput = document.getElementById("storage-Id");
  const id = idInput.value;
  const valueInput = document.getElementById("storage-Value");
  const value = valueInput.value;

  //empty input add prevent korar jonno amra truty add korte pari, if diea
  if (id && value) {
    localStorage.setItem(id, value);
  }

  idInput.value = "";
  valueInput.value = "";
};

const name = "Hero";
const age = 34;
const person = { name, age };
console.log(person);
