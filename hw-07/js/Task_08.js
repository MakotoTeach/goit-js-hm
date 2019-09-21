"use strict";

const input = document.querySelector("#controls > input");
const buttonRender = document.querySelector('button[data-action="render"]');
const buttonDestroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

const checkInput = event => {
  let amount = Number(input.value);

  buildList(amount);
};

const buildList = amount => {
  let template = "";

  for (let i = 0; i < amount; i++) {
    template += `<div class ="class"></div>`;
  }
  boxes.insertAdjacentHTML("afterbegin", template);
};

const destroy = () => {
  boxes.innerHTML = "";
};

buttonRender.addEventListener("click", checkInput);
buttonDestroy.addEventListener("click", destroy);
