"use strict";

let input;

let numbers = [];

let total = 0;

do {
  input = prompt("Введите число ");
  if (input !== null) {
    if (Number(input)) {
      numbers.push(Number(input));
    } else {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }
  } else {
    if (numbers.length > 0) {
      for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
      }
      console.log(`Общая сумма чисел равна ${total}`);
    }
  }
} while (input);

// do {
//   input = prompt("Введите число ");
//   if (input !== null) {
//     if (Number(input) >= 0) {
//       numbers.push(Number(input));
//       for (let i = 0; i < numbers.length; i += 1) {
//         total += numbers[i];
//       }
//     } else {
//       alert("Было введено не число, попробуйте еще раз");
//       continue;
//     }
//   }
// } while (input);
// console.log(`Сумма равна ${total}`);


