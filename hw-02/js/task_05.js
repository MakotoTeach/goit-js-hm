"use strict";


// function formatString(string) {
//   let result = String(string);

//   if (result.length >= 40) {
//     result = result.substring(0, 40) + "...";
//   }

//   return result;
// }

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

// function formatWords(string) {
//   const words = String(string).split(" ");
//   const maxLenght = 40;
//   let result = words.join(" ");

//   if (words.join("").length >= maxLenght) {
//     let letters = "";
//     result = "";
//     words.forEach(word => {
//       const lettersLength = letters.length;
//       if (lettersLength + word.length <= maxLenght) {
//         result += word + " ";
//       } else if (
//         lettersLength + word.length > maxLenght &&
//         maxLenght - lettersLength > 0
//       ) {
//         result += word.substring(0, maxLenght - lettersLength) + "...";
//       }
//       letters += word;
//     });
//   }

//   return result;
// }

// formatWords(
//   "Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие, после чего возвращает укороченную версию."
// );

let string = ('ASD dsda da sss');
const words = string.split(' ');
const maxLenght = 10;
let newstring = [];


let newWords = words.join('');

length = newWords.length;

// for (let i =0; i < words.length; i+=1) {
//   if(words[i].length < maxLenght) {
//     newstring.push(words[i]);
//   }
  


console.log(length);

