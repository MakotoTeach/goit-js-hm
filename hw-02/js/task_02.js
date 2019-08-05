"use strict";

const logItem = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log("i:", i);
    console.log(`${i + 1} -`, array[i]);
  }

return;
};

console.log(logItem(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

console.log(logItem([5, 10, 20, 25, 30, 35, 40, 45, 50]));
