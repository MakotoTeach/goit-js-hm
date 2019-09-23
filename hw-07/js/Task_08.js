"use strict";

const input = document.querySelector("#controls > input");
const buttonRender = document.querySelector('button[data-action="render"]');
const buttonDestroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

const checkInput = () => {
  let amount = Number(input.value);

  buildList(amount);
};

const buildList = amount => {
  let template = "";

  let size = 30;

  for (let i = 0; i < amount; i++) {
    let color = randomColor(255);
    template += `<div style ="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
    size += 10;
  }
  boxes.insertAdjacentHTML("afterbegin", template);
};

const destroy = () => {
  boxes.innerHTML = "";
};
const randomColor = number => {
  const r = Math.floor(Math.random() * (number + 1));
  const g = Math.floor(Math.random() * (number + 1));
  const b = Math.floor(Math.random() * (number + 1));
  return "rgb(" + r + "," + g + "," + b + ")";
};

buttonRender.addEventListener("click", checkInput);
buttonDestroy.addEventListener("click", destroy);
