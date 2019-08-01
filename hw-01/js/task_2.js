'use strict';

Task-2
const total = 100;

const ordered = 100;

let message;

if (ordered > total) {
    message = 'На складе недостаточно твоаров!';
} else  {
    message = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(message);