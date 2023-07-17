const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//EJ1

function getPizzasConIdImpar(pizzas) {
  const pizzasConIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
  return pizzasConIdImpar;
}

const pizzasConIdImpar = getPizzasConIdImpar(pizzas);
console.log("Pizzas con ID impar:", pizzasConIdImpar);

//EJ2
function hayPizzaMasBarataQue600(pizzas) {
  const hayPizzaBarata = pizzas.some((pizza) => pizza.precio < 600);
  return hayPizzaBarata;
}

if (hayPizzaMasBarataQue600(pizzas)) {
  console.log("Sí, hay una pizza que cuesta menos de $600.");
}

//EJ3
function mostrarNombreYPrecioDePizzas(pizzas) {
  pizzas.forEach((pizza) => {
    console.log(`${pizza.nombre}, Precio: $${pizza.precio}`);
  });
}

mostrarNombreYPrecioDePizzas(pizzas);

//EJ4

function mostrarIngredientesDePizzas(pizzas) {
  pizzas.forEach((pizza) => {
    console.log(`Ingredientes de la pizza ${pizza.nombre}:`);
    pizza.ingredientes.forEach((ingrediente) => {
      console.log(ingrediente);
    });
    console.log("---"); // Separador para ver mejor las pizzas
  });
}

mostrarIngredientesDePizzas(pizzas);
