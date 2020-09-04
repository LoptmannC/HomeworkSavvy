const pizzaPlace = "Palazzi Pizza";
let numberOfToppings = 5;

console.log(pizzaPlace);
console.log(numberOfToppings);

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(
  `"Hello, this is ${pizzaPlace} and we have ${numberOfToppings} toppings available."`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
