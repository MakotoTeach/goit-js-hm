// const a = 2;
// const b = 3;

// function sum(a, b) {
// let result = a + b;
// return result;
// }

// // setTimeout(() => {
// //     console.log(sum(a, b));
// // }, 2000);

// let timer =  setInterval(() => {
//     console.log(sum(a, b));
// }, 2000);

// setTimeout(() => {
//     clearInterval(timer)
// }, 11000);

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]')
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

let randomColor = 0;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startSwitch = () => {
  if (isActive) {
    return;
  }
  isActive = true;
  randomColor = setInterval(() => {
    let color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log(color);
    refs.body.style.backgroundColor = color;
  }, 1000);
};

const stopSwitch = () => {
  isActive = false;
  clearInterval(randomColor);
  randomColor = 0;
};

refs.start.addEventListener("click", startSwitch);
refs.stop.addEventListener("click", stopSwitch);
