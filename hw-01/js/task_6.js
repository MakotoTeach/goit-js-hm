'use strict';

let input;

let total = 0;

while (isNaN(input) || input !== null) {
  input = Number(prompt("Введите число"));
  
  if (!input) break;
  total += input;
}

alert(`Ваше число ${total}`);
