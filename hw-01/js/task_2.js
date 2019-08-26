'use strict';


const total = 100;

const ordered = 102;

let message;

if (ordered > total) {
    message = 'На складе недостаточно товаров!';
} else  {
    message = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(message);