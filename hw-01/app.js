"use strict";

//Task-1
// const name = "*Генератор защитного поля*";

// let price = 1000;

// console.log("Выбран", name, "цена за штуку", price);

// let priceNew = 2000;

// console.log("Выбран", name, "цена за штуку", priceNew);

// let input = prompt("Угадай число от 1 до 35");

// input = (Number(input));

// const isCorrect = input >= 1 && input <= 35;

// console.log(isCorrect);

// console.log(input);

// Task-2
// const total = 100;

// const ordered = 100;

// let message;

// if (ordered > total) {
//     message = 'На складе недостаточно твоаров!';
// } else  {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
// }

// console.log(message);

//Task-3

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;

// const input = prompt("Веедите пароль!!");

// if (input === ADMIN_PASSWORD) {
//   alert((message = "Добро пожаловать!"));
// } else if (input === null) {
//   alert((message = "Действие отменено"));
// } else {
//   alert((message = "Неверный пароль!!"));
// }

//TAsk-4
const credits = 23580;

const pricePerDroid = 3000;

let quantityDroid = prompt("Какое количество дроидов Вы хотите приобрести?");

const quantity = Number(quantityDroid);

if (quantityDroid === null) {
  console.log("Отменено пользователем!");
} else if (quantity === NaN) {
  console.log('Введите число!');
} else {
  const totalPrice = pricePerDroid * quantity;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    const balance = credits - totalPrice;
  console.log(`Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`);
  }
}

// } else if (totalPrice > credits) {
//   message = "Недостаточно средств!";
// } else if (totalPrice > credits){
//   rest = +credits - +totalPrice;
//   message = "rest";

// console.log(totalPrice);
