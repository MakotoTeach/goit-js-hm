"use strict";

let counterValue = 0;

const currentValue = document.querySelector("#value");

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

buttonIncrement.addEventListener("click", increment);

buttonDecrement.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  return (currentValue.textContent = counterValue);
}

function decrement() {
  counterValue -= 1;
  return (currentValue.textContent = counterValue);
}
