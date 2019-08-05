'use strict';

const calculateEngravingPrice = function(string, pricePerWord) {
const words = string.split(' ');
const total = words.length * pricePerWord;

return total;

};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));