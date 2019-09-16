"use strict";

const input = document.querySelector("#validation-input");

console.log(input);

const requiredLength = Number(input.dataset.length);

console.log(requiredLength);

const checkInput = event => {
  let currenLength = event.currentTarget.value.length;
  console.log(currenLength);
  if (currenLength === requiredLength) {
    input.classList.add("valid")
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid")
    input.classList.remove("valid");
  }
};

input.addEventListener("change", checkInput);
