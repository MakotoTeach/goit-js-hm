"use strict";

const items = Array.from(document.querySelectorAll(".item"));

const itemsQuantity = items.length;

console.log(`В списке ${itemsQuantity} категории`);

const categoryListAndQuantityElements = items.forEach(item => {
  const category = item.querySelector("h2").textContent;
  const liList = item.querySelectorAll("li").length;
  console.log(`Категория: ${category}`);
  console.log(`Количество элементов ${liList}`);
});
