"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const checkInput = (event) => {
  let currentValue = event.currentTarget.value;
  if (currentValue.length > 0) {
    output.textContent = event.currentTarget.value;
  } else output.textContent = "незнакомец";
};

input.addEventListener("input", checkInput);
