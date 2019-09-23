"use strict";

const slider = document.getElementById("font-size-slider");
const text = document.getElementById("text");
const checkInput = event => {
  let check = Number(event.currentTarget.value);
  text.style.fontSize = `${check}px`;
};

slider.addEventListener("input", checkInput);
