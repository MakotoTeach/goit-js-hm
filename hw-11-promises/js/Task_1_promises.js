"use strict";

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved');
//     }, 2000);
// });

// promise.then(message => {
//     console.log(message)
// });

// const a = 1;

// const promise1 = new Promise((reselve, reject) => {
//   setTimeout(() => {
//     if (a >= 10) {
//       reselve(`a = ${a}`);
//     } else {
//       reject(`a < 10, a = ${a}`);
//     }
//   }, 2000);
// });

// const onSuccess = message => {
//   console.log(message);
// };

// const onError = error => {
//   console.error(`Error : ${error}`);
// };

// promise1.then(onSuccess, onError);

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved"
// через ms миллисекунд.
// Значением исполнившегося промиса должно быть то кол-во миллисекунд
// которое передали во время вызова функции delay.

const delay = ms => {
  const time = new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  console.log(time)
  return time;
};
const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
// Вызовы функции для проверки
// Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
