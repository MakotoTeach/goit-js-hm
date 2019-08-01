'use strict';

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
