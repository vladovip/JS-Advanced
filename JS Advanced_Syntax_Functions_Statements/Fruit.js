function fruit (param1, param2, param3) {

let typeOfFruit = param1;
let weight = +param2;
let price = +param3;

console.log(`I need $${(weight/1000 * price).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${typeOfFruit}.`);

}
fruit ('orange', 2500, 1.80);
fruit ('apple', 1563, 2.35);


