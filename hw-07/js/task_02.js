"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const list = document.querySelector("#ingredients");

const buildItemsList = ingredients => {
  let template = "";
  ingredients.forEach(ingridient => {
    template += `<li>${ingridient}</li>`;
  });
  list.insertAdjacentHTML("afterbegin", template);
};

buildItemsList(ingredients);
