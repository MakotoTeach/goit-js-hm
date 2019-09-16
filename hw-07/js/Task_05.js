"use strict";

const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

console.log(input);

const checkInput = (event) => {
  console.log(event.currentTarget.value);
  let currentValue = event.currentTarget.value;
  if (currentValue.length > 0) {
    output.textContent = event.currentTarget.value;
  } else output.textContent = "Незнакомец";
};

input.addEventListener("input", checkInput);
