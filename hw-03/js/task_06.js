"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(products, value) {
  let sum;

  for (const product of products) {
    if (value === product.name) {
      sum = product.price * product.quantity;
    }
  }
  return sum;
};

console.log(calculateTotalPrice(products, "Радар"));

console.log(calculateTotalPrice(products, "Дроид"));

//============Вариант 2=========
//     let sum;

// for(let i = 0; i < products.length; i+=1){

//     console.log(products[i]);

//     if(products[i].name === "Дроид"){
//        sum = products[i].price * products[i].quantity;
//        console.log(sum);
//     }
// }
//==================================
