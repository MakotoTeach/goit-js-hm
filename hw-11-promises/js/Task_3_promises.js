"use strict";

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  transaction.delay = randomIntegerFromInterval(200, 800);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (!canProcess) {
        reject(transaction);
      } else {
        resolve(transaction);
      }
    }, transaction.delay);
  });
};

function notifyWnenSucessed({ id, delay }) {
  console.log(`Transaction id:${id} processed in ${delay} ms`);
}

function notifyWnenError({ id }) {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
}

makeTransaction({ id: 70, amount: 150 })
  .then(notifyWnenSucessed)
  .catch(notifyWnenError);

makeTransaction({ id: 71, amount: 230 })
  .then(notifyWnenSucessed)
  .catch(notifyWnenError);

makeTransaction({ id: 72, amount: 75 })
  .then(notifyWnenSucessed)
  .catch(notifyWnenError);

makeTransaction({ id: 73, amount: 100 })
  .then(notifyWnenSucessed)
  .catch(notifyWnenError);
