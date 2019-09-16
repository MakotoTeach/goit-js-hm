'use strict';


const input = document.querySelector('#name-input');

const output = document.querySelector("#name-output");

console.log(input);


const checkInput = (e) =>{
  console.log(event.currentTarget.value);
//   if(event.currentTarget.value === 0){
//     output.textContent = 'Незнакомец';
//     return
//   }
//   else
  output.textContent = event.currentTarget.value
}

input.addEventListener('input', checkInput)
