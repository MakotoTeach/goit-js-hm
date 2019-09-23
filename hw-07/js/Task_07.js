"use strict";

const slider = document.getElementById("font-size-slider");
const text = document.getElementById("text");
<<<<<<< HEAD
=======
text.style.fontSize = `${slider.value}px`;

>>>>>>> 4d622cbf9c1d10d054b2ccca733620d9e9412483
const checkInput = event => {
  let check = Number(event.currentTarget.value);
  text.style.fontSize = `${check}px`;
};

slider.addEventListener("input", checkInput);
