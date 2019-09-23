"use strict";

const input = document.querySelector("#validation-input");

const checkInput = event => {
  const requiredLength = Number(input.dataset.length);
  let currenLength = event.currentTarget.value.length;
  if (currenLength === requiredLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("change", checkInput);
