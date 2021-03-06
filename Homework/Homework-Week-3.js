const pizzaToppings = ["pepperoni", "vegetables", "sausage", "chicken"];
const size = ["small", "medium", "large"];
const crustType = ["pan", "traditional", "thin"];

function greetCustomer() {
  return `Welcome in! Our toppings are: ${pizzaToppings.toString()}.`;
}

console.log(greetCustomer());

function getPizzaOrder(size, crustType, pizzaToppings) {
  return `We will get that ${size}, ${crustType} pizza with ${pizzaToppings} out for you in a jiffy!`;
}

console.log(getPizzaOrder("large", "pan", ...pizzaToppings));

function preparePizza(size, crustType, pizzaToppings) {
  return `Cooking a ${size}, ${crustType} pizza with ${pizzaToppings}!`;
}

const pizza = {
  pSize: "size",
  pCrust: "crustType",
  pTop: "pizzaToppings"
};

console.log(preparePizza("small", "thin", "sausage", ...pizzaToppings));
