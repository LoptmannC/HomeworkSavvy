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

//Bonus Challenge
//loop to print all even numbers from 1 to numberOfToppings (or 10)
let base = 0;

for (let base = 0; base <= 10; base += 2) {
  console.log(base);
}

let toppings = 5;

for (let toppings = 0; toppings <= numberOfToppings; toppings += 2) {
  console.log(toppings);
}
